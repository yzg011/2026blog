(function (global) {
  // 缓存前缀，后面会拼接 shareId
  const cacheKeyPrefix = 'umami-share-cache-';
  const cacheTTL = 3600_000; // 1h

  async function fetchShareData(baseUrl, shareId) {
    const key = cacheKeyPrefix + shareId;
    const cached = localStorage.getItem(key);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < cacheTTL) {
          console.log('[Umami] Using cached token for', shareId);
          return parsed.value;
        }
      } catch {
        localStorage.removeItem(key);
      }
    }
    console.log('[Umami] Fetching new token for', shareId);
    const res = await fetch(`${baseUrl}/api/share/${shareId}`);
    if (!res.ok) {
      throw new Error('获取 Umami 分享信息失败');
    }
    const data = await res.json();
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), value: data }));
    return data;
  }

  /**
   * 获取 Umami 分享数据（websiteId、token）
   * @param {string} baseUrl
   * @param {string} shareId
   * @returns {Promise<{websiteId: string, token: string}>}
   */
  global.getUmamiShareData = function (baseUrl, shareId) {
    if (!global.__umamiSharePromise) {
      global.__umamiSharePromise = fetchShareData(baseUrl, shareId).catch((err) => {
        delete global.__umamiSharePromise;
        throw err;
      });
    }
    return global.__umamiSharePromise;
  };

  global.clearUmamiShareCache = function (shareId) {
    const key = cacheKeyPrefix + shareId;
    localStorage.removeItem(key);
    // 兼容旧的 key
    localStorage.removeItem('umami-share-cache');
    delete global.__umamiSharePromise;
  };

  /**
   * 获取 Umami 统计数据
   * 注意：Umami 2026年6月更新后，stats 端点需要 x-umami-share-context: 1 header，否则返回 401
   * @param {string} baseUrl
   * @param {string} shareId
   * @param {object} queryParams
   * @returns {Promise<any>}
   */
  global.fetchUmamiStats = async function (baseUrl, shareId, queryParams) {
    async function doFetch(isRetry = false) {
      const { websiteId, token } = await global.getUmamiShareData(baseUrl, shareId);
      const currentTimestamp = Date.now();

      // 构建基础参数
      // 注意: compare 参数只能为 "prev" 或 "yoy"，不能传 false，否则 Umami API 返回 400
      const params = new URLSearchParams({
        startAt: 0,
        endAt: currentTimestamp,
        timezone: 'Asia/Shanghai',
        ...queryParams
      });

      // 移除值为 false/null/undefined 的参数，避免发送无效值
      for (const [key, value] of [...params.entries()]) {
        if (value === 'false' || value === 'null' || value === 'undefined') {
          params.delete(key);
        }
      }

      const statsUrl = `${baseUrl}/api/websites/${websiteId}/stats?${params.toString()}`;

      const res = await fetch(statsUrl, {
        headers: {
          'x-umami-share-token': token,
          'x-umami-share-context': '1'
        }
      });

      if (!res.ok) {
        if (res.status === 401 && !isRetry) {
          // 防止并发请求同时刷新 token：只让第一个 401 触发刷新
          if (!global.__umamiRefreshLock) {
            global.__umamiRefreshLock = true;
            console.warn('[Umami] Token expired or invalid, refreshing...');
            global.clearUmamiShareCache(shareId);
          }
          // 等待一个微任务让其他并发请求的刷新完成
          await Promise.resolve();
          global.__umamiRefreshLock = false;
          return doFetch(true);
        }
        throw new Error('获取统计数据失败: ' + res.status);
      }

      const json = await res.json();
      return json;
    }

    return doFetch();
  };

})(window);

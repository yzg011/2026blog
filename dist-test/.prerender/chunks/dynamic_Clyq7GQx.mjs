import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, P as unescapeHTML, S as maybeRenderHead, T as defineScriptVars, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { M as memosConfig, N as t, s as DATE_FORMAT } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { t as dayjs_default } from "./dayjs_EMIvGZG2.mjs";
//#region src/components/memos/MemoCard.astro
createAstro("https://blog.z2m.store");
var $$MemoCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MemoCard;
	const { memo } = Astro.props;
	const dateStr = dayjs_default(memo.createTime).format(DATE_FORMAT);
	function formatMemoContent(text) {
		return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/(https?:\/\/[^\s<]+)(?![^<]*>)/g, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline break-all">${url}</a>`).replace(/\n/g, "<br>");
	}
	const html = formatMemoContent(memo.content);
	const avatarFallback = memo.user.displayName?.[0] ?? memo.user.username?.[0] ?? "?";
	return renderTemplate`${maybeRenderHead($$result)}<article class="memo-card bg-base-100 rounded-3xl p-6 md:p-8 shadow-lg border border-base-200 transition-shadow hover:shadow-xl"${addAttribute(memo.id, "data-memo-id")}${addAttribute(dayjs_default(memo.createTime).year(), "data-year")}><header class="flex items-start gap-3 mb-4"><!-- 头像 --><div class="flex-shrink-0">${memo.user.avatarUrl ? renderTemplate`<img${addAttribute(memo.user.avatarUrl, "src")}${addAttribute(memo.user.displayName, "alt")} class="w-10 h-10 rounded-full object-cover" loading="lazy">` : renderTemplate`<div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">${avatarFallback}</div>`}</div><!-- 用户名 + 日期 --><div class="flex-1 min-w-0"><div class="font-medium text-base-content truncate">${memo.user.displayName}</div><time class="text-sm text-base-content/60 block"${addAttribute(memo.createTime.toISOString(), "datetime")}>${dateStr}</time></div><!-- 右侧装饰引号 -->${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:quote",
		"class": "w-5 h-5 text-base-content/30 flex-shrink-0"
	})}</header><!-- 正文 --><div class="memo-content text-base-content/90 leading-relaxed whitespace-pre-wrap break-words">${unescapeHTML(html)}</div><!-- 标签 -->${memo.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-4">${memo.tags.map((tag) => renderTemplate`<span class="badge badge-sm badge-outline text-primary border-primary/40">#${tag}</span>`)}</div>`}<!-- 附件（图片） -->${memo.attachments.length > 0 && renderTemplate`<div class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">${memo.attachments.map((att) => att.type.startsWith("image/") ? renderTemplate`<a${addAttribute(att.url, "href")} target="_blank" rel="noopener noreferrer" class="block overflow-hidden rounded-2xl border border-base-200 hover:opacity-90 transition-opacity"><img${addAttribute(att.url, "src")}${addAttribute(att.filename, "alt")} loading="lazy" class="w-full h-40 object-cover"></a>` : renderTemplate`<a${addAttribute(att.url, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 p-3 rounded-2xl border border-base-200 hover:bg-base-200/50 transition-colors text-sm">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:file",
		"class": "w-4 h-4"
	})}<span class="truncate">${att.filename}</span></a>`)}</div>`}</article>`;
}, "E:/blog/2026blog/src/components/memos/MemoCard.astro", void 0);
//#endregion
//#region src/lib/load-memos.ts
/** Memos 附件公开访问 URL 模式 */
function buildAttachmentUrl(uid) {
	return `${memosConfig.baseUrl}/api/v1/attachments/${uid}`;
}
/** 单页请求 */
async function fetchMemoPage(pageToken) {
	const url = new URL(`${memosConfig.baseUrl}/api/v1/memos`);
	url.searchParams.set("pageSize", String(memosConfig.pageSize));
	url.searchParams.set("filter", "state == \"NORMAL\"");
	if (pageToken) url.searchParams.set("pageToken", pageToken);
	const res = await fetch(url.toString(), { headers: {
		Authorization: `Bearer ${memosConfig.token}`,
		"Content-Type": "application/json"
	} });
	if (!res.ok) throw new Error(`Memos API 请求失败: ${res.status}`);
	return await res.json();
}
/** 拉取全部 memos（自动分页） */
async function fetchAllMemos() {
	const all = [];
	let token = "";
	for (let i = 0; i < 50; i++) {
		const page = await fetchMemoPage(token);
		if (page.memos?.length) all.push(...page.memos);
		if (!page.nextPageToken) break;
		token = page.nextPageToken;
	}
	return all;
}
/** 拉取所有用户，构造 username → displayName 映射 */
async function fetchUserMap() {
	const map = /* @__PURE__ */ new Map();
	if (!memosConfig.baseUrl || !memosConfig.token) return map;
	try {
		const res = await fetch(`${memosConfig.baseUrl}/api/v1/users?pageSize=100`, { headers: { Authorization: `Bearer ${memosConfig.token}` } });
		if (!res.ok) return map;
		const data = await res.json();
		for (const u of data.users ?? []) map.set(`users/${u.username}`, u);
	} catch {}
	return map;
}
/** 从原始数据构造干净的 MemoItem */
function toMemoItem(raw, userMap) {
	const user = userMap.get(raw.creator);
	const fallbackName = raw.creator.replace(/^users\//, "");
	const displayName = user?.displayName || user?.nickname || fallbackName;
	return {
		id: raw.name,
		creator: raw.creator,
		createTime: new Date(raw.createTime),
		content: raw.content,
		tags: raw.tags ?? [],
		hasLink: raw.property?.hasLink ?? false,
		hasCode: raw.property?.hasCode ?? false,
		pinned: raw.pinned ?? false,
		attachments: (raw.attachments ?? []).map((a) => ({
			id: a.id,
			uid: a.uid,
			filename: a.filename,
			type: a.type,
			size: a.size,
			externalLink: a.externalLink,
			url: a.externalLink || buildAttachmentUrl(a.uid)
		})),
		user: {
			username: fallbackName,
			displayName,
			avatarUrl: user?.avatarUrl ?? ""
		}
	};
}
/**
* 加载所有公开 memos，按时间倒序
* - 构建时运行，失败返回空数组（页面会显示空状态）
* - PRIVATE 状态的 memo 不会返回
*/
async function loadMemos() {
	if (!memosConfig.enable || !memosConfig.baseUrl || !memosConfig.token) return [];
	try {
		const [rawMemos, userMap] = await Promise.all([fetchAllMemos(), fetchUserMap()]);
		const items = rawMemos.filter((m) => m.state === "NORMAL").filter((m) => m.visibility === "PUBLIC" || m.visibility === "PROTECTED").map((m) => toMemoItem(m, userMap));
		items.sort((a, b) => {
			if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
			return b.createTime.getTime() - a.createTime.getTime();
		});
		return items;
	} catch (err) {
		console.error("[memos] 加载失败:", err);
		return [];
	}
}
//#endregion
//#region src/pages/dynamic.astro
var dynamic_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dynamic,
	file: () => $$file,
	url: () => $$url
});
var $$Dynamic = createComponent(async ($$result, $$props, $$slots) => {
	const memos = await loadMemos();
	const yearSet = /* @__PURE__ */ new Set();
	memos.forEach((m) => yearSet.add(dayjs_default(m.createTime).year()));
	const years = Array.from(yearSet).sort((a, b) => b - a);
	const memosJson = JSON.stringify(memos.map((m) => ({
		id: m.id,
		year: dayjs_default(m.createTime).year(),
		searchIndex: [
			m.user.displayName,
			m.user.username,
			m.content,
			m.tags.join(" "),
			m.attachments.map((a) => a.filename).join(" ")
		].join(" ").toLowerCase()
	})));
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": t("dynamicPage"),
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="px-4 py-8 md:px-6 max-w-4xl mx-auto"><section class="bg-base-100 rounded-3xl p-6 md:p-8 shadow-lg border border-base-200 mb-8 animate-fade-in-up"><div class="flex items-start justify-between gap-4 mb-4"><div class="flex items-center gap-3"><div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chat-bubble-outline-rounded",
		"class": "w-7 h-7"
	})}</div><div><h1 class="text-2xl md:text-3xl font-bold">${t("dynamicPage")}</h1><p class="text-base-content/70 mt-1">${t("dynamicPageDescription")}</p></div></div>${memosConfig.enable && renderTemplate`<div class="flex items-center gap-1.5 text-primary font-bold text-lg whitespace-nowrap flex-shrink-0"><span id="memo-count">${memos.length}</span><span>${t("totalDynamics")}</span></div>`}</div><div class="flex flex-col sm:flex-row gap-3"><div class="relative flex-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
	})}<input id="memo-search" type="search"${addAttribute(t("dynamicSearchPlaceholder"), "placeholder")} class="input input-bordered w-full pl-10 pr-4 rounded-full" autocomplete="off"></div><div class="relative sm:w-44">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:calendar",
		"class": "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 z-10 pointer-events-none"
	})}<select id="memo-year" class="select select-bordered w-full pl-10 rounded-full appearance-none"><option value="all">${t("allYears")}</option>${years.map((y) => renderTemplate`<option${addAttribute(String(y), "value")}>${y}</option>`)}</select></div></div></section>${memos.length === 0 ? renderTemplate`<div class="bg-base-100 rounded-3xl p-12 text-center text-base-content/60 border border-base-200">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:inbox",
		"class": "w-12 h-12 mx-auto mb-3 opacity-50"
	})}<p>${t("noDynamics")}</p>${!memosConfig.enable && renderTemplate`<p class="text-sm mt-2 text-base-content/40">请在 ryuchan.config.yaml 中启用 memos 配置</p>`}</div>` : renderTemplate`<div id="memo-list" class="space-y-6">${memos.map((memo) => renderTemplate`${renderComponent($$result, "MemoCard", $$MemoCard, { "memo": memo })}`)}</div>`}</div><script>(function(){${defineScriptVars({ memosJson })}
    (function () {
      const memos = JSON.parse(memosJson);
      const searchInput = document.getElementById("memo-search");
      const yearSelect = document.getElementById("memo-year");
      const memoList = document.getElementById("memo-list");
      const countEl = document.getElementById("memo-count");

      if (!searchInput || !yearSelect || !memoList) return;

      const cards = Array.from(memoList.querySelectorAll(".memo-card"));

      function applyFilter() {
        const q = searchInput.value.trim().toLowerCase();
        const year = yearSelect.value;
        const memoById = new Map(memos.map((m) => [m.id, m]));
        let visible = 0;

        for (const card of cards) {
          const id = card.getAttribute("data-memo-id");
          const memoYear = card.getAttribute("data-year");
          const memo = memoById.get(id);
          if (!memo) continue;

          const matchYear = year === "all" || String(memoYear) === year;
          const matchSearch = !q || memo.searchIndex.includes(q);

          const show = matchYear && matchSearch;
          card.style.display = show ? "" : "none";
          if (show) visible++;
        }

        if (countEl) countEl.textContent = String(visible);
      }

      // 使用 input 事件实时搜索（无需防抖，列表量级很小）
      searchInput.addEventListener("input", applyFilter);
      yearSelect.addEventListener("change", applyFilter);
    })();
  })();<\/script>` })}`;
}, "E:/blog/2026blog/src/pages/dynamic.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/dynamic.astro";
var $$url = "/dynamic";
//#endregion
//#region \0virtual:astro:page:src/pages/dynamic@_@astro
var page = () => dynamic_exports;
//#endregion
export { page };

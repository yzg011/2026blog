import { memosConfig } from "@config";

export interface MemosAttachment {
  id: number;
  uid: string;
  filename: string;
  type: string;
  size: number;
  externalLink: string;
  /** 浏览器可直接访问的 URL */
  url: string;
}

export interface MemosUser {
  username: string;
  displayName: string;
  /** base64 data URL，可能为空 */
  avatarUrl: string;
}

export interface MemoItem {
  id: string;
  creator: string;
  createTime: Date;
  /** 已剔除 PRIVATE 的 memos */
  content: string;
  tags: string[];
  hasLink: boolean;
  hasCode: boolean;
  pinned: boolean;
  attachments: MemosAttachment[];
  user: MemosUser;
}

interface RawMemoAttachment {
  id: number;
  uid: string;
  filename: string;
  type: string;
  size: number;
  externalLink: string;
}

interface RawMemo {
  name: string;
  creator: string;
  createTime: string;
  state: string;
  content: string;
  visibility: string;
  pinned: boolean;
  tags: string[];
  property?: {
    hasLink?: boolean;
    hasCode?: boolean;
  };
  attachments?: RawMemoAttachment[];
}

interface RawMemoListResponse {
  memos?: RawMemo[];
  nextPageToken?: string;
}

interface RawUser {
  username: string;
  displayName: string;
  nickname?: string;
  avatarUrl: string;
}

interface RawUserListResponse {
  users?: RawUser[];
}

/** Memos 附件公开访问 URL 模式：/file/attachments/{uid}/{filename} */
function buildAttachmentUrl(uid: string, filename: string): string {
  return `${memosConfig.baseUrl}/file/attachments/${uid}/${encodeURIComponent(filename)}`;
}

/** 单页请求 */
async function fetchMemoPage(pageToken: string): Promise<RawMemoListResponse> {
  const url = new URL(`${memosConfig.baseUrl}/api/v1/memos`);
  url.searchParams.set("pageSize", String(memosConfig.perPage));
  // 只拉取公开 memo，同时作为隐私防御
  url.searchParams.set("filter", 'visibility == "PUBLIC"');
  if (pageToken) {
    url.searchParams.set("pageToken", pageToken);
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${memosConfig.token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Memos API 请求失败: ${res.status}`);
  }
  return (await res.json()) as RawMemoListResponse;
}

/** 拉取全部 memos（自动分页） */
async function fetchAllMemos(): Promise<RawMemo[]> {
  const all: RawMemo[] = [];
  let token = "";
  // 防止意外死循环，最多翻 50 页
  for (let i = 0; i < 50; i++) {
    const page = await fetchMemoPage(token);
    if (page.memos?.length) all.push(...page.memos);
    if (!page.nextPageToken) break;
    token = page.nextPageToken;
  }
  return all;
}

/** 拉取所有用户，构造 username → displayName 映射 */
async function fetchUserMap(): Promise<Map<string, RawUser>> {
  const map = new Map<string, RawUser>();
  if (!memosConfig.baseUrl || !memosConfig.token) return map;
  try {
    const res = await fetch(`${memosConfig.baseUrl}/api/v1/users?pageSize=100`, {
      headers: { Authorization: `Bearer ${memosConfig.token}` },
    });
    if (!res.ok) return map;
    const data = (await res.json()) as RawUserListResponse;
    for (const u of data.users ?? []) {
      map.set(`users/${u.username}`, u);
    }
  } catch {
    // 用户列表拉取失败不影响主流程
  }
  return map;
}

/** 从原始数据构造干净的 MemoItem */
function toMemoItem(raw: RawMemo, userMap: Map<string, RawUser>): MemoItem {
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
      url: a.externalLink || buildAttachmentUrl(a.uid, a.filename),
    })),
    user: {
      username: fallbackName,
      displayName,
      avatarUrl: user?.avatarUrl ?? "",
    },
  };
}

/**
 * 加载所有公开 memos，按时间倒序
 * - 构建时运行，失败返回空数组（页面会显示空状态）
 * - PRIVATE 状态的 memo 不会返回
 */
export async function loadMemos(): Promise<MemoItem[]> {
  if (!memosConfig.enable || !memosConfig.baseUrl || !memosConfig.token) {
    return [];
  }
  try {
    const [rawMemos, userMap] = await Promise.all([
      fetchAllMemos(),
      fetchUserMap(),
    ]);
    const items = rawMemos
      // 只保留正常可见的 memo
      .filter((m) => m.state === "NORMAL")
      // 过滤 PRIVATE（防御性，正常情况下后端不返回 PRIVATE）
      .filter((m) => m.visibility === "PUBLIC" || m.visibility === "PROTECTED")
      .map((m) => toMemoItem(m, userMap));
    // 按创建时间倒序，置顶的优先
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

/** 仅加载用户映射，供前端分页页面使用（过滤掉 base64 头像以减小体积） */
export async function loadMemosUsers(): Promise<Record<string, MemosUser>> {
  if (!memosConfig.enable || !memosConfig.baseUrl || !memosConfig.token) {
    return {};
  }
  try {
    const map = await fetchUserMap();
    const result: Record<string, MemosUser> = {};
    map.forEach((user, key) => {
      let avatarUrl = user.avatarUrl ?? "";
      // 过滤掉体积巨大的 base64 data URL，回退到首字母头像
      if (avatarUrl.startsWith("data:")) {
        avatarUrl = "";
      }
      result[key] = {
        username: user.username,
        displayName: user.displayName || user.nickname || user.username,
        avatarUrl,
      };
    });
    return result;
  } catch (err) {
    console.error("[memos] 加载用户失败:", err);
    return {};
  }
}
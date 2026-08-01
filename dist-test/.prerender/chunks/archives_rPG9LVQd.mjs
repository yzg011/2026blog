import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { m as sortPostsByDate, s as getAllPosts, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t, s as DATE_FORMAT } from "./_astro_content_0m825bVV.mjs";
import { useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { Archive, BookOpen, Calendar, Trash2, X } from "lucide-react";
import { Toaster, toast } from "sonner";
import { create } from "zustand";
import { KEYUTIL, KJUR } from "jsrsasign";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/lib/github-client.ts
var GH_API = "https://api.github.com";
function handle401Error() {
	if (typeof sessionStorage === "undefined") return;
	try {
		useAuthStore.getState().clearAuth();
	} catch (error) {
		console.error("Failed to clear auth cache:", error);
	}
}
function handle422Error() {
	toast.error("操作太快了，请操作慢一点");
}
function signAppJwt(appId, privateKeyPem) {
	const now = Math.floor(Date.now() / 1e3);
	const header = {
		alg: "RS256",
		typ: "JWT"
	};
	const payload = {
		iat: now - 60,
		exp: now + 480,
		iss: appId
	};
	const prv = KEYUTIL.getKey(privateKeyPem);
	return KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), prv);
}
async function getInstallationId(jwt, owner, repo) {
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/installation`, { headers: {
		Authorization: `Bearer ${jwt}`,
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28"
	} });
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`installation lookup failed: ${res.status}`);
	return (await res.json()).id;
}
async function createInstallationToken(jwt, installationId) {
	const res = await fetch(`${GH_API}/app/installations/${installationId}/access_tokens`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${jwt}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28"
		}
	});
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`create token failed: ${res.status}`);
	return (await res.json()).token;
}
async function getRef(token, owner, repo, ref) {
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/git/ref/${encodeURIComponent(ref)}`, { headers: {
		Authorization: `Bearer ${token}`,
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28"
	} });
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`get ref failed: ${res.status}`);
	return { sha: (await res.json()).object.sha };
}
async function getCommit(token, owner, repo, sha) {
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/git/commits/${sha}`, { headers: {
		Authorization: `Bearer ${token}`,
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28"
	} });
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`get commit failed: ${res.status}`);
	return await res.json();
}
async function createTree(token, owner, repo, tree, baseTree) {
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/git/trees`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			tree,
			base_tree: baseTree
		})
	});
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`create tree failed: ${res.status}`);
	return { sha: (await res.json()).sha };
}
async function createCommit(token, owner, repo, message, tree, parents) {
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/git/commits`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			message,
			tree,
			parents
		})
	});
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`create commit failed: ${res.status}`);
	return { sha: (await res.json()).sha };
}
async function updateRef(token, owner, repo, ref, sha, force = false) {
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/git/refs/${encodeURIComponent(ref)}`, {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			sha,
			force
		})
	});
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (!res.ok) throw new Error(`update ref failed: ${res.status}`);
}
async function listRepoFilesRecursive(token, owner, repo, path, ref) {
	async function fetchPath(targetPath) {
		const headers = {
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28"
		};
		if (token) headers.Authorization = `Bearer ${token}`;
		const res = await fetch(`${GH_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(targetPath)}?ref=${encodeURIComponent(ref)}&t=${Date.now()}`, {
			headers,
			cache: "no-store"
		});
		if (res.status === 401) handle401Error();
		if (res.status === 422) handle422Error();
		if (res.status === 404) return [];
		if (!res.ok) throw new Error(`read directory failed: ${res.status}`);
		const data = await res.json();
		if (Array.isArray(data)) {
			const files = [];
			for (const item of data) if (item.type === "file") files.push(item.path);
			else if (item.type === "dir") {
				const nested = await fetchPath(item.path);
				files.push(...nested);
			}
			return files;
		}
		if (data?.type === "file") return [data.path];
		if (data?.type === "dir") return fetchPath(data.path);
		return [];
	}
	return fetchPath(path);
}
async function listRepoDir(token, owner, repo, path, ref) {
	const headers = {
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28"
	};
	if (token) headers.Authorization = `Bearer ${token}`;
	const res = await fetch(`${GH_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(ref)}`, { headers });
	if (res.status === 401) handle401Error();
	if (res.status === 422) handle422Error();
	if (res.status === 404) return [];
	if (!res.ok) throw new Error(`read directory failed: ${res.status}`);
	const data = await res.json();
	return Array.isArray(data) ? data : [data];
}
//#endregion
//#region src/consts.ts
var GITHUB_CONFIG = {
	OWNER: "yzg011",
	REPO: "2026blog",
	BRANCH: "main",
	APP_ID: "4441387",
	ENCRYPT_KEY: "wudishiduomejimo"
};
//#endregion
//#region src/lib/aes256-util.ts
async function encrypt(text, key) {
	const enc = new TextEncoder();
	const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
	const keyData = await crypto.subtle.digest("SHA-256", enc.encode(key));
	const cryptoKey = await crypto.subtle.importKey("raw", keyData, { name: "AES-GCM" }, false, ["encrypt"]);
	const encrypted = await crypto.subtle.encrypt({
		name: "AES-GCM",
		iv
	}, cryptoKey, enc.encode(text));
	const result = new Uint8Array(iv.length + encrypted.byteLength);
	result.set(iv, 0);
	result.set(new Uint8Array(encrypted), iv.length);
	return btoa(String.fromCharCode(...result));
}
async function decrypt(cipherText, key) {
	const data = Uint8Array.from(atob(cipherText), (c) => c.charCodeAt(0));
	const iv = data.slice(0, 12);
	const encrypted = data.slice(12);
	const enc = new TextEncoder();
	const keyData = await crypto.subtle.digest("SHA-256", enc.encode(key));
	const cryptoKey = await crypto.subtle.importKey("raw", keyData, { name: "AES-GCM" }, false, ["decrypt"]);
	const decrypted = await crypto.subtle.decrypt({
		name: "AES-GCM",
		iv
	}, cryptoKey, encrypted);
	return new TextDecoder().decode(decrypted);
}
//#endregion
//#region src/lib/auth.ts
var GITHUB_TOKEN_CACHE_KEY = "github_token";
var GITHUB_PEM_CACHE_KEY = "p_info";
function getTokenFromCache() {
	if (typeof sessionStorage === "undefined") return null;
	try {
		return sessionStorage.getItem(GITHUB_TOKEN_CACHE_KEY);
	} catch {
		return null;
	}
}
function saveTokenToCache(token) {
	if (typeof sessionStorage === "undefined") return;
	try {
		sessionStorage.setItem(GITHUB_TOKEN_CACHE_KEY, token);
	} catch (error) {
		console.error("Failed to save token to cache:", error);
	}
}
function clearTokenCache() {
	if (typeof sessionStorage === "undefined") return;
	try {
		sessionStorage.removeItem(GITHUB_TOKEN_CACHE_KEY);
	} catch (error) {
		console.error("Failed to clear token cache:", error);
	}
}
async function getPemFromCache() {
	if (typeof sessionStorage === "undefined") return null;
	try {
		const encryptedPem = sessionStorage.getItem(GITHUB_PEM_CACHE_KEY);
		if (!encryptedPem) return null;
		return await decrypt(encryptedPem, GITHUB_CONFIG.ENCRYPT_KEY);
	} catch {
		return null;
	}
}
async function savePemToCache(pem) {
	if (typeof sessionStorage === "undefined") return;
	try {
		const encryptedPem = await encrypt(pem, GITHUB_CONFIG.ENCRYPT_KEY);
		sessionStorage.setItem(GITHUB_PEM_CACHE_KEY, encryptedPem);
	} catch (error) {
		console.error("Failed to save pem to cache:", error);
	}
}
function clearPemCache() {
	if (typeof sessionStorage === "undefined") return;
	try {
		sessionStorage.removeItem(GITHUB_PEM_CACHE_KEY);
	} catch (error) {
		console.error("Failed to clear pem cache:", error);
	}
}
function clearAllAuthCache() {
	clearTokenCache();
	clearPemCache();
}
async function hasAuth() {
	return !!getTokenFromCache() || !!await getPemFromCache();
}
/**
* 统一的认证 Token 获取
* 自动处理缓存、签发等逻辑
* @returns GitHub Installation Token
*/
async function getAuthToken() {
	const cachedToken = getTokenFromCache();
	if (cachedToken) return cachedToken;
	const privateKey = useAuthStore.getState().privateKey;
	if (!privateKey) throw new Error("需要先设置私钥。请使用 useAuth().setPrivateKey()");
	const toastId = `auth-loading-${Date.now()}`;
	toast.loading("正在进行身份验证...", { id: toastId });
	try {
		const jwt = signAppJwt(GITHUB_CONFIG.APP_ID, privateKey);
		const token = await createInstallationToken(jwt, await getInstallationId(jwt, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO));
		saveTokenToCache(token);
		toast.dismiss(toastId);
		return token;
	} catch (error) {
		toast.dismiss(toastId);
		throw error;
	}
}
//#endregion
//#region src/components/write/hooks/use-auth.ts
var useAuthStore = create((set, get) => ({
	isAuth: false,
	privateKey: null,
	setPrivateKey: async (key) => {
		set({
			isAuth: true,
			privateKey: key
		});
		await savePemToCache(key);
	},
	clearAuth: () => {
		clearAllAuthCache();
		set({ isAuth: false });
	},
	refreshAuthState: async () => {
		set({ isAuth: await hasAuth() });
	},
	getAuthToken: async () => {
		const token = await getAuthToken();
		get().refreshAuthState();
		return token;
	}
}));
if (typeof window !== "undefined") {
	getPemFromCache().then((key) => {
		if (key) useAuthStore.setState({ privateKey: key });
	});
	hasAuth().then((isAuth) => {
		if (isAuth) useAuthStore.setState({ isAuth });
	});
}
//#endregion
//#region src/components/write/services/batch-delete.ts
async function batchDeleteBlogs(slugs) {
	if (!slugs || slugs.length === 0) throw new Error("需要 slugs");
	const token = await getAuthToken();
	const toastId = toast.loading("正在初始化删除操作...");
	try {
		toast.loading("正在获取分支信息...", { id: toastId });
		const latestCommitSha = (await getRef(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, `heads/${GITHUB_CONFIG.BRANCH}`)).sha;
		const baseTreeSha = (await getCommit(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, latestCommitSha)).tree.sha;
		toast.loading("正在扫描博客文件...", { id: toastId });
		const blogFiles = await listRepoFilesRecursive(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, "src/content/blog", GITHUB_CONFIG.BRANCH);
		const imagesRootDir = await listRepoDir(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, "public/images", GITHUB_CONFIG.BRANCH);
		const treeItems = [];
		for (const slug of slugs) {
			toast.loading(`正在处理: ${slug}...`, { id: toastId });
			const targetDirItem = imagesRootDir.find((item) => item.name.toLowerCase() === slug.toLowerCase() && item.type === "dir");
			if (targetDirItem) {
				const slugImages = await listRepoFilesRecursive(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, targetDirItem.path, GITHUB_CONFIG.BRANCH);
				for (const path of slugImages) treeItems.push({
					path,
					mode: "100644",
					type: "blob",
					sha: null
				});
			}
			const mdPath = `src/content/blog/${slug}.md`;
			const mdxPath = `src/content/blog/${slug}.mdx`;
			const foundMd = blogFiles.find((path) => path.toLowerCase() === mdPath.toLowerCase());
			if (foundMd) treeItems.push({
				path: foundMd,
				mode: "100644",
				type: "blob",
				sha: null
			});
			const foundMdx = blogFiles.find((path) => path.toLowerCase() === mdxPath.toLowerCase());
			if (foundMdx) treeItems.push({
				path: foundMdx,
				mode: "100644",
				type: "blob",
				sha: null
			});
			if (!foundMd && !foundMdx) console.warn(`未找到文章文件: ${slug}`);
		}
		if (treeItems.length === 0) {
			toast.info("没有需要删除的文件", { id: toastId });
			return;
		}
		toast.loading("正在创建文件树...", { id: toastId });
		const treeData = await createTree(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, treeItems, baseTreeSha);
		const message = slugs.length === 1 ? `删除文章: ${slugs[0]}` : `批量删除文章: ${slugs.length} 篇`;
		toast.loading("正在创建提交...", { id: toastId });
		const newCommitData = await createCommit(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, message, treeData.sha, [latestCommitSha]);
		toast.loading("正在更新分支...", { id: toastId });
		await updateRef(token, GITHUB_CONFIG.OWNER, GITHUB_CONFIG.REPO, `heads/${GITHUB_CONFIG.BRANCH}`, newCommitData.sha);
		toast.success("批量删除成功！请等待页面部署后刷新", { id: toastId });
	} catch (error) {
		console.error(error);
		toast.error(error.message || "删除失败", { id: toastId });
		throw error;
	}
}
//#endregion
//#region src/lib/file-utils.ts
function readFileAsText(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result || ""));
		reader.onerror = reject;
		reader.readAsText(file);
	});
}
//#endregion
//#region src/components/ArchiveList.tsx
function ArchiveList({ posts, labels, dateFormat }) {
	const { isAuth, setPrivateKey } = useAuthStore();
	const [editMode, setEditMode] = useState(false);
	const [selectedSlugs, setSelectedSlugs] = useState(/* @__PURE__ */ new Set());
	const [deleting, setDeleting] = useState(false);
	const keyInputRef = useRef(null);
	const groupedPosts = useMemo(() => {
		const groups = /* @__PURE__ */ new Map();
		posts.forEach((post) => {
			const date = dayjs(post.data.pubDate);
			const year = date.format("YYYY");
			const month = date.format("M");
			if (!groups.has(year)) groups.set(year, /* @__PURE__ */ new Map());
			const yearGroup = groups.get(year);
			if (!yearGroup.has(month)) yearGroup.set(month, []);
			yearGroup.get(month).push(post);
		});
		return groups;
	}, [posts]);
	const years = Array.from(groupedPosts.keys()).sort((a, b) => parseInt(b) - parseInt(a));
	const toggleEditMode = () => {
		setEditMode(!editMode);
		setSelectedSlugs(/* @__PURE__ */ new Set());
	};
	const toggleSelect = (slug) => {
		const newSelected = new Set(selectedSlugs);
		if (newSelected.has(slug)) newSelected.delete(slug);
		else newSelected.add(slug);
		setSelectedSlugs(newSelected);
	};
	const executeDelete = async () => {
		try {
			setDeleting(true);
			await batchDeleteBlogs(Array.from(selectedSlugs));
			setEditMode(false);
			setSelectedSlugs(/* @__PURE__ */ new Set());
		} catch (error) {
			console.error(error);
			toast.error(error.message || "删除失败");
		} finally {
			setDeleting(false);
		}
	};
	const handleBatchDelete = async () => {
		if (selectedSlugs.size === 0) return;
		if (!confirm(`确定要删除选中的 ${selectedSlugs.size} 篇文章吗？此操作不可恢复。`)) return;
		if (!isAuth) {
			toast.info("请导入私钥以继续删除操作");
			keyInputRef.current?.click();
			return;
		}
		await executeDelete();
	};
	const handlePrivateKeySelection = async (file) => {
		try {
			const pem = await readFileAsText(file);
			setPrivateKey(pem);
			toast.success("密钥导入成功，正在继续删除...");
			await executeDelete();
		} catch (error) {
			console.error(error);
			toast.error("读取密钥失败");
		}
	};
	const getMonthName = (month) => {
		const index = parseInt(month) - 1;
		return labels.months[index] || month;
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(Toaster, {
			richColors: true,
			position: "top-center",
			toastOptions: {
				className: "shadow-xl rounded-2xl border-2 border-primary/20 backdrop-blur-sm",
				style: {
					fontSize: "1rem",
					padding: "14px 20px",
					zIndex: "999999",
					borderRadius: "12px",
					boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
					transition: "all 0.3s ease-in-out"
				},
				classNames: {
					title: "text-lg font-semibold tracking-tight",
					description: "text-sm font-medium opacity-90",
					error: "bg-error/95 text-error-content border-error/30",
					success: "bg-success/95 text-success-content border-success/30",
					warning: "bg-warning/95 text-warning-content border-warning/30",
					info: "bg-info/95 text-info-content border-info/30"
				},
				duration: 5e3,
				closeButton: false
			}
		}),
		/* @__PURE__ */ jsx("input", {
			ref: keyInputRef,
			type: "file",
			accept: ".pem",
			className: "hidden",
			onChange: async (e) => {
				const f = e.target.files?.[0];
				if (f) await handlePrivateKeySelection(f);
				if (e.currentTarget) e.currentTarget.value = "";
			}
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "bg-base-100 rounded-2xl shadow-lg w-full p-4 sm:p-6 mb-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx(Archive, { className: "w-6 h-6 text-accent" }),
							/* @__PURE__ */ jsx("h1", {
								className: "text-2xl md:text-3xl font-bold",
								children: labels.archivePage
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "badge badge-accent",
								children: [
									posts.length,
									" ",
									posts.length === 1 ? labels.post : labels.posts
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [editMode ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
							/* @__PURE__ */ jsx("button", {
								onClick: () => {
									const allSlugs = new Set(posts.map((p) => p.id));
									if (selectedSlugs.size === allSlugs.size) setSelectedSlugs(/* @__PURE__ */ new Set());
									else setSelectedSlugs(allSlugs);
								},
								disabled: deleting || posts.length === 0,
								className: "btn btn-outline btn-sm gap-2",
								children: /* @__PURE__ */ jsx("span", { children: selectedSlugs.size === posts.length ? "取消全选" : "全选" })
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: handleBatchDelete,
								disabled: deleting || selectedSlugs.size === 0,
								className: "btn btn-error btn-sm gap-2",
								children: [/* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }), /* @__PURE__ */ jsxs("span", { children: [
									"删除 (",
									selectedSlugs.size,
									")"
								] })]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: toggleEditMode,
								disabled: deleting,
								className: "btn btn-ghost btn-sm gap-2",
								children: [/* @__PURE__ */ jsx(X, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "取消" })]
							})
						] }) : /* @__PURE__ */ jsxs("button", {
							onClick: toggleEditMode,
							className: "btn btn-outline btn-error btn-sm gap-2",
							children: [/* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "批量删除" })]
						}), /* @__PURE__ */ jsxs("a", {
							href: "/blog",
							className: "btn btn-outline btn-sm gap-2",
							children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: labels.backToBlog })]
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "divider my-2" }),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm opacity-75",
					children: labels.archivePageDescription
				})
			]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "bg-base-100 rounded-2xl shadow-lg w-full p-4 sm:p-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "archives-container",
				children: years.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "archives-timeline",
					children: years.map((year) => /* @__PURE__ */ jsxs("div", {
						className: "timeline-year",
						children: [/* @__PURE__ */ jsx("div", {
							className: "year-header",
							children: /* @__PURE__ */ jsx("div", {
								className: "year-badge",
								children: year
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "year-content",
							children: Array.from(groupedPosts.get(year).entries()).sort((a, b) => parseInt(b[0]) - parseInt(a[0])).map(([month, monthPosts]) => /* @__PURE__ */ jsxs("div", {
								className: "timeline-month",
								children: [/* @__PURE__ */ jsxs("h3", {
									className: "month-title",
									children: [
										/* @__PURE__ */ jsx(Calendar, { className: "month-icon" }),
										/* @__PURE__ */ jsxs("span", { children: [
											getMonthName(month),
											" ",
											year
										] }),
										/* @__PURE__ */ jsx("span", {
											className: "month-count",
											children: monthPosts.length
										})
									]
								}), /* @__PURE__ */ jsx("ul", {
									className: "archive-posts",
									children: monthPosts.map((post) => /* @__PURE__ */ jsx("li", {
										className: "archive-item",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 w-full",
											children: [editMode && /* @__PURE__ */ jsx("input", {
												type: "checkbox",
												className: "checkbox checkbox-sm checkbox-error shrink-0",
												checked: selectedSlugs.has(post.id),
												onChange: () => toggleSelect(post.id)
											}), /* @__PURE__ */ jsxs("a", {
												href: `/blog/${post.id}`,
												className: `archive-card flex-1 block ${editMode && selectedSlugs.has(post.id) ? "!border-error !bg-error/5" : ""}`,
												onClick: (e) => {
													if (editMode) {
														e.preventDefault();
														toggleSelect(post.id);
													}
												},
												children: [
													/* @__PURE__ */ jsx("time", {
														className: "archive-date",
														children: dayjs(post.data.pubDate).format(dateFormat)
													}),
													/* @__PURE__ */ jsx("h4", {
														className: "archive-title",
														children: post.data.title
													}),
													post.data.description && /* @__PURE__ */ jsx("p", {
														className: "archive-description",
														children: post.data.description
													})
												]
											})]
										})
									}, post.id))
								})]
							}, month))
						})]
					}, year))
				}) : /* @__PURE__ */ jsxs("div", {
					className: "empty-state",
					children: [/* @__PURE__ */ jsx("div", {
						className: "empty-icon",
						children: "😢"
					}), /* @__PURE__ */ jsx("p", {
						className: "empty-text",
						children: labels.noPosts
					})]
				})
			})
		})
	] });
}
//#endregion
//#region src/pages/blog/archives.astro
var archives_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Archives,
	file: () => $$file,
	url: () => $$url
});
var $$Archives = createComponent(async ($$result, $$props, $$slots) => {
	const allPosts = await getAllPosts();
	const sortedPosts = sortPostsByDate(allPosts);
	const labels = {
		archivePage: t("label.archivePage"),
		post: t("label.post"),
		posts: t("label.posts"),
		backToBlog: t("label.backToBlog"),
		archivePageDescription: t("label.archivesPageDescription"),
		noPosts: t("label.noPosts"),
		months: Array.from({ length: 12 }, (_, i) => t(`months.${i + 1}`))
	};
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": t("label.archivePage"),
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ArchiveList", ArchiveList, {
		"client:load": true,
		"posts": sortedPosts,
		"labels": labels,
		"dateFormat": DATE_FORMAT,
		"client:component-hydration": "load",
		"client:component-path": "@components/ArchiveList",
		"client:component-export": "default"
	})}` })}`;
}, "E:/blog/2026blog/src/pages/blog/archives.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/blog/archives.astro";
var $$url = "/blog/archives";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/archives@_@astro
var page = () => archives_exports;
//#endregion
export { page };

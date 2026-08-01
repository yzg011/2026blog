import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, f as Fragment, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { a as $$Card, g as renderScript, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { a as BILIBILI_CONFIG, x as TMDB_CONFIG } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import * as fs$1 from "node:fs";
import * as path$1 from "node:path";
//#region src/pages/anime.astro
var anime_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Anime,
	file: () => $$file,
	url: () => $$url
});
var $$Anime = createComponent(async ($$result, $$props, $$slots) => {
	const TMDB_IMG = "https://image.tmdb.org/t/p/w500";
	const TMDB_API_KEY = TMDB_CONFIG?.apiKey || void 0;
	const TMDB_LIST_ID = TMDB_CONFIG?.listId || "8556173";
	const BILIBILI_UID = BILIBILI_CONFIG?.uid;
	const fetchWithTimeout = async (url, options = {}, timeout = 1e4) => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), timeout);
		try {
			return await fetch(url, {
				...options,
				signal: controller.signal
			});
		} finally {
			clearTimeout(timeoutId);
		}
	};
	let animeData = [];
	try {
		const localPath = path$1.resolve("public/anime-list.json");
		if (fs$1.existsSync(localPath)) animeData = JSON.parse(fs$1.readFileSync(localPath, "utf-8"));
	} catch {
		console.warn("Local anime-list.json not found or invalid.");
	}
	let bilibiliItems = [];
	if (TMDB_API_KEY || BILIBILI_UID) {
		const [tmdbResult, biliResult] = await Promise.all([TMDB_API_KEY ? fetchTMDB() : Promise.resolve([]), BILIBILI_UID ? fetchBilibili() : Promise.resolve([])]);
		if (tmdbResult.length > 0) animeData = tmdbResult;
		bilibiliItems = biliResult;
	}
	async function fetchTMDB() {
		console.log(`Fetching TMDB list: ${TMDB_LIST_ID}...`);
		try {
			const res = await fetchWithTimeout(`https://api.themoviedb.org/3/list/${TMDB_LIST_ID}?api_key=${TMDB_API_KEY}&language=zh-CN&page=1`, {}, 1e4);
			if (!res.ok) {
				console.error(`TMDB request failed: ${res.status}`);
				return [];
			}
			const data = await res.json();
			const totalPages = data.total_pages || 1;
			let allItems = [...data.items || []];
			if (totalPages > 1) {
				const promises = Array.from({ length: totalPages - 1 }, (_, i) => fetchWithTimeout(`https://api.themoviedb.org/3/list/${TMDB_LIST_ID}?api_key=${TMDB_API_KEY}&language=zh-CN&page=${i + 2}`, {}, 1e4).then((r) => r.json()).then((d) => d.items || []).catch(() => []));
				(await Promise.all(promises)).forEach((items) => allItems.push(...items));
			}
			console.log(`TMDB fetched: ${allItems.length} items`);
			return [{
				...data,
				items: allItems
			}];
		} catch (e) {
			console.error("TMDB fetch failed:", e);
			return [];
		}
	}
	async function fetchBilibili() {
		console.log(`Fetching Bilibili list for UID: ${BILIBILI_UID}...`);
		const items = [];
		let page = 1;
		while (page <= 20) try {
			const json = await (await fetchWithTimeout(`https://api.bilibili.com/x/space/bangumi/follow/list?type=1&vmid=${BILIBILI_UID}&pn=${page}&ps=30`, {}, 1e4)).json();
			if (!json.data?.list?.length) break;
			items.push(...json.data.list);
			if (items.length >= json.data.total) break;
			page++;
		} catch (e) {
			console.warn(`Bilibili page ${page} failed, stopping`);
			break;
		}
		console.log(`Bilibili fetched: ${items.length} items`);
		return items;
	}
	if (!Array.isArray(animeData)) animeData = [animeData];
	let animeList = animeData.flatMap((group) => group.items || []).map((anime) => {
		const title = anime.title || anime.name || "";
		const originalTitle = anime.original_title || anime.original_name || "";
		const date = anime.release_date || anime.first_air_date || "";
		const type = anime.media_type || "tv";
		return {
			id: anime.id,
			title,
			originalTitle,
			poster: anime.poster_path ? TMDB_IMG + anime.poster_path : null,
			type,
			source: "tmdb",
			rating: anime.vote_average || 0,
			date,
			overview: anime.overview,
			link: `https://www.themoviedb.org/${type}/${anime.id}`,
			epStatus: void 0
		};
	});
	if (bilibiliItems.length > 0) {
		const bilibiliMapped = bilibiliItems.map((item) => ({
			id: item.media_id,
			title: item.title,
			originalTitle: item.title,
			poster: item.cover ? item.cover.replace("http://", "https://") : null,
			type: item.season_type_name === "剧场版" || item.season_type_name === "电影" ? "movie" : "tv",
			source: "bilibili",
			rating: item.rating && item.rating.score ? item.rating.score : 0,
			date: "",
			overview: item.evaluate || item.brief || "暂无简介",
			link: `https://www.bilibili.com/bangumi/play/ss${item.season_id}`,
			epStatus: item.new_ep?.index_show || ""
		}));
		const bilibiliTitles = new Set(bilibiliMapped.map((item) => item.title));
		animeList = animeList.filter((item) => !bilibiliTitles.has(item.title));
		animeList = [...animeList, ...bilibiliMapped];
	}
	const totalCount = animeList.length;
	const tmdbItems = animeData.flatMap((group) => group.items || []);
	const averageRating = tmdbItems.length > 0 ? (tmdbItems.reduce((sum, item) => sum + (Number(item.vote_average) || 0), 0) / tmdbItems.length).toFixed(1) : "0.0";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "追番列表",
		"isIndexed": false
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="mb-8 animate-fade-in-up relative z-10"><h1 class="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:tv",
		"class": "text-primary"
	})}<span>追番列表</span></h1><!-- 统计卡片 --><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"><div class="stats shadow bg-base-100 border border-base-200"><div class="stat p-4"><div class="stat-figure text-primary">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:film",
		"class": "w-8 h-8"
	})}</div><div class="stat-title">总追番</div><div class="stat-value text-primary">${totalCount}</div><div class="stat-desc">部作品</div></div></div><div class="stats shadow bg-base-100 border border-base-200"><div class="stat p-4"><div class="stat-figure text-secondary">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:star",
		"class": "w-8 h-8"
	})}</div><div class="stat-title">平均评分</div><div class="stat-value text-secondary">${averageRating}</div></div></div></div><!-- 筛选工具栏 --><div class="flex flex-col md:flex-row gap-4 bg-base-100 p-4 rounded-2xl shadow-sm border border-base-200 relative z-40"><div class="flex-1 relative">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/50"
	})}<input type="text" id="search-input" placeholder="搜索番剧..." class="input input-bordered w-full pl-10 focus:input-primary"></div><div class="flex gap-2 flex-wrap items-center"><!-- 类型筛选 --><div class="dropdown dropdown-bottom dropdown-end"><div tabindex="0" role="button" id="type-filter-btn" class="btn btn-outline m-1 w-full md:w-auto justify-between min-w-[120px]"><span>全部类型</span>${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:chevron-down",
		"class": "w-4 h-4 ml-2"
	})}</div><ul tabindex="0" id="type-filter-menu" class="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"><li><a data-value="all" class="active bg-primary text-primary-content hover:bg-primary hover:text-primary-content">全部类型</a></li><li><a data-value="tv" class="hover:bg-primary hover:text-primary-content">TV 动画</a></li><li><a data-value="movie" class="hover:bg-primary hover:text-primary-content">剧场版</a></li></ul></div><!-- 排序筛选 --><div class="dropdown dropdown-bottom dropdown-end"><div tabindex="0" role="button" id="sort-filter-btn" class="btn btn-outline m-1 w-full md:w-auto justify-between min-w-[120px]"><span>评分最高</span>${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:chevron-down",
		"class": "w-4 h-4 ml-2"
	})}</div><ul tabindex="0" id="sort-filter-menu" class="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"><li><a data-value="rating-desc" class="active bg-primary text-primary-content hover:bg-primary hover:text-primary-content">评分最高</a></li><li><a data-value="rating-asc" class="hover:bg-primary hover:text-primary-content">评分最低</a></li><li><a data-value="date-desc" class="hover:bg-primary hover:text-primary-content">最新发布</a></li><li><a data-value="date-asc" class="hover:bg-primary hover:text-primary-content">最早发布</a></li></ul></div></div></div></div><div id="anime-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">${animeList.map((anime) => renderTemplate`<div class="anime-card group relative h-full"${addAttribute(anime.title.toLowerCase(), "data-title")}${addAttribute(anime.type, "data-type")}${addAttribute(anime.rating, "data-rating")}${addAttribute(anime.date, "data-date")}>${renderComponent($$result2, "Card", $$Card, { "class": "h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-base-200" }, { "default": ($$result3) => renderTemplate`<a${addAttribute(anime.link, "href")} target="_blank" rel="noopener noreferrer" class="block h-full flex flex-col"><!-- 封面图容器 --><div class="relative aspect-[2/3] overflow-hidden bg-base-200">${anime.poster ? renderTemplate`<img${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" referrerpolicy="no-referrer">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-base-content/30">${renderComponent($$result3, "Icon", $$Icon, {
		"name": "lucide:image-off",
		"class": "w-12 h-12"
	})}</div>`}${anime.rating > 0 && renderTemplate`<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-yellow-400 px-2 py-1 rounded-xl flex items-center gap-1 text-xs font-bold shadow-lg">${renderComponent($$result3, "Icon", $$Icon, {
		"name": "lucide:star",
		"class": "w-3 h-3 fill-current"
	})}<span>${anime.rating.toFixed(1)}</span></div>`}<div class="absolute top-2 left-2 backdrop-blur-sm text-white px-2 py-1 rounded-xl text-xs font-bold shadow-lg bg-primary/80">${anime.type === "movie" ? "剧场版" : "TV"}</div><!-- 悬停遮罩 --><div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center"><p class="text-white text-sm line-clamp-6 mb-4 leading-relaxed">${anime.overview || "暂无简介"}</p><span class="btn btn-sm btn-primary btn-outline text-white border-white hover:bg-white hover:text-black hover:border-white gap-2">${renderComponent($$result3, "Icon", $$Icon, {
		"name": "lucide:external-link",
		"class": "w-4 h-4"
	})}查看详情</span></div></div><!-- 信息区域 --><div class="p-3 flex-1 flex flex-col bg-base-100"><h2 class="font-bold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors"${addAttribute(anime.title, "title")}>${anime.title}</h2><div class="flex items-center justify-between mt-auto text-xs text-base-content/60"><span class="flex items-center gap-1">${anime.source === "bilibili" && anime.epStatus ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, {
		"name": "lucide:play-circle",
		"class": "w-3 h-3"
	})}${anime.epStatus}` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, {
		"name": "lucide:calendar",
		"class": "w-3 h-3"
	})}${anime.date ? anime.date.split("-")[0] : "未知"}` })}`}</span><span class="flex items-center gap-1">${renderComponent($$result3, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-3 h-3"
	})}${anime.source === "bilibili" ? "Bilibili" : "TMDB"}</span></div></div></a>` })}</div>`)}</div><div id="no-results" class="hidden flex-col items-center justify-center py-20 text-base-content/50">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:search-x",
		"class": "w-16 h-16 mb-4"
	})}<p class="text-lg">没有找到匹配的番剧</p></div><div id="pagination" class="flex items-center justify-center gap-2 mt-8 flex-wrap"><button id="btn-prev" class="btn btn-sm btn-outline" disabled>← 上一页</button><div id="page-numbers" class="flex items-center gap-1"></div><button id="btn-next" class="btn btn-sm btn-outline">下一页 →</button><input id="page-jump" type="number" min="1" class="input input-sm input-bordered w-16 text-center font-mono text-xs" placeholder="回车跳转"></div><div class="divider my-6 animate-fade-in-up" style="animation-delay: 0.1s;">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-12 h-12 text-primary/50"
	})}</div>${renderScript($$result2, "E:/blog/2026blog/src/pages/anime.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "E:/blog/2026blog/src/pages/anime.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/anime.astro";
var $$url = "/anime";
//#endregion
//#region \0virtual:astro:page:src/pages/anime@_@astro
var page = () => anime_exports;
//#endregion
export { page };

import { C as renderHead, E as createRenderInstruction, I as createAstro, S as maybeRenderHead, T as defineScriptVars, h as renderSlot, n as defineStyleVars, r as spreadAttributes, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { A as USER_SITE, C as USER_AVATAR, E as USER_NAME, N as t, P as umamiConfig, S as TYPEWRITER_TEXTS, T as USER_FOOTER_SOCIAL_ICONS, _ as SITE_THEME, b as SITE_TITLE_TYPE, d as SITE_ICP, f as SITE_ICP_LINK, g as SITE_TAB, h as SITE_PAGES, i as BANNER_HEIGHT, k as USER_SIDEBAR_SOCIAL_ICONS, l as SITE_DESCRIPTION, m as SITE_MENU, n as renderEntry, p as SITE_LANGUAGE, r as BANNER_CONFIG, t as getCollection, u as SITE_FAVICON, v as SITE_TITLE, w as USER_DESCRIPTION, y as SITE_TITLE_IMAGE } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon, t as $$Image } from "./_astro_assets_C9BQRxhs.mjs";
//#region node_modules/.pnpm/astro@7.1.6_@astrojs+markdo_b80a6ca00c79e00dd447e36d7557b011/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.1.6_@astrojs+markdo_b80a6ca00c79e00dd447e36d7557b011/node_modules/astro/components/ClientRouter.astro
createAstro("https://blog.z2m.store");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "E:/blog/2026blog/node_modules/.pnpm/astro@7.1.6_@astrojs+markdo_b80a6ca00c79e00dd447e36d7557b011/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/node_modules/.pnpm/astro@7.1.6_@astrojs+markdo_b80a6ca00c79e00dd447e36d7557b011/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@vtbag+element-crossing@1.1.0/node_modules/@vtbag/element-crossing/lib/vanilla.js?url&no-inline
var vanilla_default = "/_astro/vanilla.ChgcMPTJ.js";
//#endregion
//#region node_modules/.pnpm/astro-vtbot@3.0.1/node_modules/astro-vtbot/components/ElementCrossing.astro
createAstro("https://blog.z2m.store");
var $$ElementCrossing = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ElementCrossing;
	const { experimentalFeatures = false } = Astro.props;
	return renderTemplate`${experimentalFeatures && renderTemplate`<script data-astro-rerun${addAttribute("/_astro/over-the-top.DTnbtWsH.js", "src")}><\/script>`}<script data-astro-rerun${addAttribute(vanilla_default, "src")}><\/script>`;
}, "E:/blog/2026blog/node_modules/.pnpm/astro-vtbot@3.0.1/node_modules/astro-vtbot/components/ElementCrossing.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-vtbot@3.0.1/node_modules/astro-vtbot/components/PointerOnNavigation.astro
var $$PointerOnNavigation = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "E:/blog/2026blog/node_modules/.pnpm/astro-vtbot@3.0.1/node_modules/astro-vtbot/components/PointerOnNavigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/node_modules/.pnpm/astro-vtbot@3.0.1/node_modules/astro-vtbot/components/PointerOnNavigation.astro", void 0);
//#endregion
//#region src/components/Header.astro
createAstro("https://blog.z2m.store");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	const { title, description, favicon, image, needsKatex = false } = Astro.props;
	return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon for all browsers --><link rel="icon" type="image/x-icon"${addAttribute(favicon, "href")}><link rel="shortcut icon"${addAttribute(favicon, "href")}><!-- Apple Touch Icon for iOS devices (using existing favicon) --><link rel="apple-touch-icon"${addAttribute(favicon, "href")}><link rel="apple-touch-icon-precomposed"${addAttribute(favicon, "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title || "RyuChan", "content")}><meta property="og:description"${addAttribute(description, "content")}>${image && renderTemplate`<meta property="og:image"${addAttribute(new URL(image, Astro.url), "content")}>`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title || "RyuChan", "content")}><meta property="twitter:description"${addAttribute(description, "content")}>${image && renderTemplate`<meta property="twitter:image"${addAttribute(new URL(image, Astro.url), "content")}>`}<link rel="canonical"${addAttribute(canonicalURL.toString(), "href")}><!-- DNS Prefetch for external domains --><link rel="dns-prefetch" href="https://umami.131714.xyz"><link rel="dns-prefetch" href="https://t.alcy.cc"><!-- Google Fonts --><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;500;700&family=Nunito:wght@400;600;700&family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">${needsKatex && renderTemplate`<link rel="stylesheet" href="/node_modules/katex/dist/katex.min.css">`}<!-- Preload critical above-fold images -->${SITE_TITLE_TYPE === "image" && SITE_TITLE_IMAGE && renderTemplate`<link rel="preload" as="image"${addAttribute(SITE_TITLE_IMAGE, "href")}>`}<link rel="preload" as="image"${addAttribute(USER_AVATAR, "href")}>`;
}, "E:/blog/2026blog/src/components/Header.astro", void 0);
//#endregion
//#region src/utils/blogUtils.ts
async function getAllPosts() {
	return (await getCollection("blog", () => true)).filter((post) => !post.data.draft);
}
function sortPostsByDate(posts) {
	return [...posts].sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
}
function sortPostsByPinAndDate(posts) {
	const topPosts = posts.filter((blog) => blog.data.badge === "Pin");
	const otherPosts = posts.filter((blog) => blog.data.badge !== "Pin");
	const sortedTopPosts = sortPostsByDate(topPosts);
	const sortedOtherPosts = sortPostsByDate(otherPosts);
	return [...sortedTopPosts, ...sortedOtherPosts];
}
function getTagsWithCount(posts) {
	const tagMap = /* @__PURE__ */ new Map();
	posts.forEach((post) => {
		if (post.data.tags) post.data.tags.forEach((tag) => {
			tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
		});
	});
	return tagMap;
}
function getCategoriesWithPosts(posts) {
	const categoryMap = /* @__PURE__ */ new Map();
	posts.forEach((post) => {
		if (post.data.categories) post.data.categories.forEach((category) => {
			if (!categoryMap.has(category)) categoryMap.set(category, []);
			categoryMap.get(category).push(post);
		});
	});
	return categoryMap;
}
function generatePageLinks(totalPages) {
	const pages = {
		active: [],
		hidden: []
	};
	if (totalPages > 3) {
		pages.active.push("1");
		pages.active.push("...");
		pages.active.push(totalPages.toString());
		for (let i = 2; i <= totalPages - 1; i++) pages.hidden.push(i.toString());
	} else for (let i = 1; i <= totalPages; i++) pages.active.push(i.toString());
	return pages;
}
async function getPostsWithStats(posts) {
	return Promise.all(posts.map(async (blog) => {
		const { remarkPluginFrontmatter } = await renderEntry(blog);
		return {
			...blog,
			data: { ...blog.data },
			remarkPluginFrontmatter: {
				readingTime: remarkPluginFrontmatter.readingTime,
				totalCharCount: remarkPluginFrontmatter.totalCharCount
			}
		};
	}));
}
function getTagColorClass(count, max) {
	const ratio = count / max;
	if (ratio > .8) return "tag-high";
	if (ratio > .6) return "tag-medium-high";
	if (ratio > .4) return "tag-medium";
	if (ratio > .2) return "tag-medium-low";
	return "tag-low";
}
function getTagFontSize(count, max, min) {
	return .9 + (count - min) / (max - min || 1) * 1.1;
}
function getCategoryColorClass(index) {
	const colorClasses = [
		"category-primary",
		"category-secondary",
		"category-accent",
		"category-info",
		"category-success",
		"category-warning",
		"category-error"
	];
	return colorClasses[index % colorClasses.length];
}
//#endregion
//#region src/components/sidebar/ProfileBar.astro
var $$ProfileBar = createComponent(async ($$result, $$props, $$slots) => {
	const allPosts = await getAllPosts();
	const categoryMap = getCategoriesWithPosts(allPosts);
	const categoryEntries = Array.from(categoryMap.entries());
	categoryEntries.sort((a, b) => b[1].length - a[1].length);
	const tagMap = getTagsWithCount(allPosts);
	const tagEntries = Array.from(tagMap.entries());
	tagEntries.sort((a, b) => b[1] - a[1]);
	return renderTemplate`${maybeRenderHead($$result)}<!-- 第一个盒子：用户信息 --><div class="card-base p-3 mb-4" data-astro-cid-rf2zbyai><!-- 头像区域 --><a aria-label="Go to About Page" href="/about/" class="group block relative mx-auto mt-1 lg:mx-0 lg:mt-0 mb-3 max-w-[12rem] lg:max-w-none overflow-hidden rounded-2xl active:scale-95" data-astro-cid-rf2zbyai><!-- 悬停遮罩层 --><div class="absolute transition pointer-events-none group-hover:bg-black/30 group-active:bg-black/50 w-full h-full z-50 flex items-center justify-center" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:person-outline",
		"class": "transition opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 text-white text-5xl",
		"data-astro-cid-rf2zbyai": true
	})}</div><!-- 头像图片容器 --><div class="mx-auto lg:w-full h-full lg:mt-0 overflow-hidden relative image-wrapper" data-astro-cid-rf2zbyai><!-- 加载条 --><div class="loading-bar absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gray-200 dark:bg-gray-700 z-10 rounded-full overflow-hidden" style="opacity: 0;" data-astro-cid-rf2zbyai><div class="loading-progress h-full w-8 bg-primary animate-pulse rounded-full" data-astro-cid-rf2zbyai></div></div><!-- 图片遮罩 --><div class="transition absolute inset-0 dark:bg-black/10 bg-opacity-50 pointer-events-none" data-astro-cid-rf2zbyai></div><!-- 头像图片 -->${renderComponent($$result, "Image", $$Image, {
		"src": USER_AVATAR,
		"alt": "Profile Image of the Author",
		"class": "w-full h-full object-cover image-content opacity-0 transition-opacity duration-500",
		"style": "object-position: center center; opacity: 1;",
		"width": 250,
		"height": 250,
		"format": "webp",
		"loading": "eager",
		"onload": "this.style.opacity='1'; this.parentElement.querySelector('.loading-bar').style.opacity='0';",
		"data-astro-cid-rf2zbyai": true
	})}</div></a><!-- 用户信息区域 --><div class="px-2" data-astro-cid-rf2zbyai><!-- 用户名 --><div class="font-bold text-xl text-center mb-1 dark:text-neutral-50 transition" data-astro-cid-rf2zbyai>${USER_NAME}</div><!-- 装饰线条 --><div class="h-1 w-5 bg-primary mx-auto rounded-full mb-2 transition" data-astro-cid-rf2zbyai></div><!-- 个人描述 --><!-- <div class="text-center text-base-content/60 mb-2.5 transition">  
      欲买桂花同载酒~✨  
    </div>   --><!-- 个人描述 --><div class="text-center mb-2.5 transition font-bold tracking-wide bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 hover:from-purple-400 hover:to-pink-400" data-astro-cid-rf2zbyai>${USER_DESCRIPTION}</div><!-- 社交图标 - 恢复原始样式 --><div class="mt-4 pt-3 border-t border-base-content/20" data-astro-cid-rf2zbyai><div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center" data-astro-cid-rf2zbyai>${USER_SIDEBAR_SOCIAL_ICONS.map((icon) => {
		let href = icon.href;
		const isMail = icon.svg.includes("mail") || icon.svg.includes("at-line") && !icon.svg.includes("wechat");
		const isQQ = icon.svg.includes("qq") && /^\d+$/.test(href);
		if (isMail && !href.startsWith("mailto:")) href = `mailto:${href}`;
		else if (isQQ) href = `tencent://message/?uin=${href}&Site=&Menu=yes`;
		else if (!isMail && !isQQ && href && !href.startsWith("http")) href = `https://${href}`;
		return renderTemplate`<div class="tooltip tooltip-bottom"${addAttribute(icon.title, "data-tip")} data-astro-cid-rf2zbyai><a tabindex="0"${addAttribute(href, "href")}${addAttribute(icon.ariaLabel, "aria-label")} target="_blank" rel="noopener noreferrer" class="btn btn-circle btn-ghost" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
			"name": icon.svg,
			"class": "text-xl",
			"data-astro-cid-rf2zbyai": true
		})}</a></div>`;
	})}</div></div><!-- 全站访问量统计 -->${umamiConfig.enable && renderTemplate`<div class="grid grid-cols-2 mt-3 pt-3 border-t border-base-content/20" data-astro-cid-rf2zbyai><div class="text-center" data-astro-cid-rf2zbyai><div class="text-xs text-base-content/50 mb-1 flex items-center justify-center gap-1" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:visibility-outline",
		"class": "text-base text-primary",
		"data-astro-cid-rf2zbyai": true
	})}<span class="text-xs" data-astro-cid-rf2zbyai>访问量</span></div><div id="site-views" class="font-bold text-lg text-base-content" data-astro-cid-rf2zbyai>-</div></div><div class="text-center border-l border-base-content/20" data-astro-cid-rf2zbyai><div class="text-xs text-base-content/50 mb-1 flex items-center justify-center gap-1" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:person",
		"class": "text-base text-primary",
		"data-astro-cid-rf2zbyai": true
	})}<span class="text-xs" data-astro-cid-rf2zbyai>访客数</span></div><div id="site-visitors" class="font-bold text-lg text-base-content" data-astro-cid-rf2zbyai>-</div></div></div>`}</div></div><!-- 第二个盒子：分类列表 --><div class="card-base p-3 mb-4" data-astro-cid-rf2zbyai><div class="font-bold transition text-lg text-base-content relative ml-4 mb-2 before:w-1 before:h-4 before:rounded-md before:bg-primary before:absolute before:left-[-16px] before:top-[5.5px]" data-astro-cid-rf2zbyai>分类</div><div id="categories" class="collapse-wrapper px-2 overflow-hidden" style="--collapsedHeight: 7.5rem;" data-pagefind-ignore data-astro-cid-rf2zbyai>${categoryEntries.slice(0, 3).map(([category, posts]) => renderTemplate`<a${addAttribute(`/blog/category/${category}`, "href")}${addAttribute(`View all posts in the ${category} category`, "aria-label")} data-astro-cid-rf2zbyai><button class="w-full h-10 rounded-lg bg-none hover:bg-base-200 active:bg-base-300 transition-all pl-2 hover:pl-3 text-base-content hover:text-primary" data-astro-cid-rf2zbyai><div class="flex items-center justify-between relative mr-2" data-astro-cid-rf2zbyai><div class="overflow-hidden text-left whitespace-nowrap overflow-ellipsis" data-astro-cid-rf2zbyai>${category}</div><div class="transition px-2 h-7 ml-4 min-w-[2rem] rounded-lg text-sm font-bold text-base-content bg-base-200 flex items-center justify-center" data-astro-cid-rf2zbyai>${posts.length}</div></div></button></a>`)}${categoryEntries.length > 3 && renderTemplate`<div class="hidden-categories" style="display: none;" data-astro-cid-rf2zbyai>${categoryEntries.slice(3).map(([category, posts]) => renderTemplate`<a${addAttribute(`/blog/category/${category}`, "href")}${addAttribute(`View all posts in the ${category} category`, "aria-label")} data-astro-cid-rf2zbyai><button class="w-full h-10 rounded-lg bg-none hover:bg-base-200 active:bg-base-300 transition-all pl-2 hover:pl-3 text-base-content hover:text-primary" data-astro-cid-rf2zbyai><div class="flex items-center justify-between relative mr-2" data-astro-cid-rf2zbyai><div class="overflow-hidden text-left whitespace-nowrap overflow-ellipsis" data-astro-cid-rf2zbyai>${category}</div><div class="transition px-2 h-7 ml-4 min-w-[2rem] rounded-lg text-sm font-bold text-base-content bg-base-200 flex items-center justify-center" data-astro-cid-rf2zbyai>${posts.length}</div></div></button></a>`)}</div>`}</div><!-- 分类展开按钮 -->${categoryEntries.length > 3 && renderTemplate`<div class="expand-btn px-2 -mb-2" data-astro-cid-rf2zbyai><button class="btn btn-ghost rounded-lg w-full h-9" id="expand-categories" data-astro-cid-rf2zbyai><div class="text-primary flex items-center justify-center" id="categories-more" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-down",
		"class": "w-5 h-5 mr-1",
		"data-astro-cid-rf2zbyai": true
	})} 更多</div><div class="text-primary flex items-center justify-center hidden" id="categories-collapse" style="display: none;" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-up",
		"class": "w-5 h-5 mr-1",
		"data-astro-cid-rf2zbyai": true
	})} 收起</div></button></div>`}</div><!-- 第三个盒子：标签列表 --><div class="card-base p-3" data-astro-cid-rf2zbyai><div class="font-bold transition text-lg text-base-content relative ml-4 mb-2 before:w-1 before:h-4 before:rounded-md before:bg-primary before:absolute before:left-[-16px] before:top-[5.5px]" data-astro-cid-rf2zbyai>标签</div><div id="tags" class="collapse-wrapper px-2 overflow-hidden" style="--collapsedHeight: 7.5rem;" data-pagefind-ignore data-astro-cid-rf2zbyai><div class="flex gap-1 flex-wrap" data-astro-cid-rf2zbyai>${tagEntries.slice(0, 8).map(([tag]) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")}${addAttribute(`View all posts with the ${tag} tag`, "aria-label")} class="h-6 text-base px-2 rounded-md border border-secondary text-base-content hover:bg-secondary hover:text-secondary-content hover:scale-110 transition-all inline-flex items-center justify-center" data-astro-cid-rf2zbyai>${tag}</a>`)}</div>${tagEntries.length > 8 && renderTemplate`<div class="hidden-tags" style="display: none;" data-astro-cid-rf2zbyai><div class="flex gap-1 flex-wrap mt-1" data-astro-cid-rf2zbyai>${tagEntries.slice(8).map(([tag, count]) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")}${addAttribute(`View all posts with the ${tag} tag`, "aria-label")} class="h-6 text-base px-2 rounded-md border border-secondary text-base-content hover:bg-secondary hover:text-secondary-content hover:scale-110 transition-all inline-flex items-center justify-center" data-astro-cid-rf2zbyai>${tag}</a>`)}</div></div>`}</div>${tagEntries.length > 8 && renderTemplate`<div class="expand-btn px-2 -mb-2" data-astro-cid-rf2zbyai><button class="btn btn-ghost rounded-lg w-full h-9" id="expand-tags" data-astro-cid-rf2zbyai><div class="text-primary flex items-center justify-center" id="tags-more" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-down",
		"class": "w-5 h-5 mr-1",
		"data-astro-cid-rf2zbyai": true
	})} 更多</div><div class="text-primary flex items-center justify-center hidden" id="tags-collapse" style="display: none;" data-astro-cid-rf2zbyai>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-up",
		"class": "w-5 h-5 mr-1",
		"data-astro-cid-rf2zbyai": true
	})} 收起</div></button></div>`}</div><script>(function(){${defineScriptVars({ umamiConfig })} 
  // 使用 sessionStorage 来避免重复加载  
  let statsData = null;  
    
  // 获取全站访问量统计  
  async function loadSiteStats() {  
    if (!umamiConfig.enable) {  
      return;  
    }
    
    const CACHE_KEY = 'ryuchan_site_stats_v4';
    // 缓存时间：5 分钟 (300000 毫秒)
    // 既能减少请求频率，又能保证数据相对新鲜
    const CACHE_TTL = 300000; 

    // 1. 尝试读取缓存
    const cachedStr = sessionStorage.getItem(CACHE_KEY);
    if (cachedStr) {
      try {
        const { data, timestamp } = JSON.parse(cachedStr);
        // 如果缓存未过期，直接使用
        if (Date.now() - timestamp < CACHE_TTL) {
          statsData = data;
          updateStatsDisplay();
          return;
        }
      } catch (e) {
        // 缓存解析失败，继续执行下面的获取逻辑
      }
    }
          
    // 2. 缓存不存在或已过期，发起新请求
    const checkInterval = setInterval(async () => {
      if (typeof window.fetchUmamiStats === 'function') {
        clearInterval(checkInterval);
        try {
          const stats = await window.fetchUmamiStats(umamiConfig.baseUrl, umamiConfig.shareId, {
            timezone: umamiConfig.timezone
          });
          
          statsData = { 
            pageviews: (typeof stats.pageviews === 'object' ? stats.pageviews.value : stats.pageviews) || 0, 
            visitors: (typeof stats.visitors === 'object' ? stats.visitors.value : stats.visitors) || 0 
          };

          // 存入缓存，包含当前时间戳
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({
            data: statsData,
            timestamp: Date.now()
          }));
          
          updateStatsDisplay();
        } catch (error) {  
          console.error('获取全站统计失败:', error);  
          statsData = { error: true };  
          updateStatsDisplay();  
        }  
      }
    }, 100);

    // Stop checking after 10 seconds
    setTimeout(() => clearInterval(checkInterval), 10000);
  }  
    
  // 更新统计显示  
  function updateStatsDisplay() {  
    const viewsElement = document.getElementById('site-views');
    const visitorsElement = document.getElementById('site-visitors');
    
    if (statsData && !statsData.error) {  
      if (viewsElement) viewsElement.textContent = statsData.pageviews;
      if (visitorsElement) visitorsElement.textContent = statsData.visitors;
    } else if (statsData && statsData.error) {
       if (viewsElement) viewsElement.textContent = '-';
       if (visitorsElement) visitorsElement.textContent = '-';
    }
  }  
    
  
    
  // 分类展开/折叠功能      
function initCategoriesToggle() {      
  const expandBtn = document.getElementById('expand-categories');      
  const hiddenCategories = document.querySelector('.hidden-categories');      
          
  if (expandBtn && hiddenCategories) {      
    let isExpanded = false;      
    const moreDiv = expandBtn.querySelector('#categories-more');
    const collapseDiv = expandBtn.querySelector('#categories-collapse');
            
    expandBtn.addEventListener('click', () => {      
      if (isExpanded) {      
        hiddenCategories.style.display = 'none';  
        moreDiv.style.display = 'flex';
        collapseDiv.style.display = 'none';
      } else {      
        hiddenCategories.style.display = 'block';  
        moreDiv.style.display = 'none';
        collapseDiv.style.display = 'flex';
      }      
      isExpanded = !isExpanded;      
    });      
  }      
}
  
 // 标签展开/折叠功能      
function initTagsToggle() {      
  const expandBtn = document.getElementById('expand-tags');      
  const hiddenTags = document.querySelector('.hidden-tags');      
  
  if (expandBtn && hiddenTags) {      
    let isExpanded = false;      
    const moreDiv = expandBtn.querySelector('#tags-more');
    const collapseDiv = expandBtn.querySelector('#tags-collapse');
    
    expandBtn.addEventListener('click', () => {      
      if (isExpanded) {      
        hiddenTags.style.display = 'none';  
        moreDiv.style.display = 'flex';
        collapseDiv.style.display = 'none';
      } else {      
        hiddenTags.style.display = 'block';  
        moreDiv.style.display = 'none';
        collapseDiv.style.display = 'flex';
      }      
      isExpanded = !isExpanded;      
    });      
  }      
}

  // 初始化函数  
  function init() {  
    if (umamiConfig.enable) {
      // 总是加载最新数据，以保持实时更新
      loadSiteStats();  
    }
      
    // 初始化分类切换功能  
    initCategoriesToggle(); 
    // 初始化标签切换功能  
    initTagsToggle() 
  }  
    
  // DOM 加载完成后初始化  
  if (document.readyState === 'loading') {  
    document.addEventListener('DOMContentLoaded', init);  
  } else {  
    init();  
  }  
    
  // 监听 Astro 页面转换事件  
  document.addEventListener('astro:page-load', () => {  
    // 页面切换时重新初始化  
    init();  
  });  
})();<\/script>`;
}, "E:/blog/2026blog/src/components/sidebar/ProfileBar.astro", void 0);
//#endregion
//#region src/components/temple/Card.astro
createAstro("https://blog.z2m.store");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`bg-base-100 rounded-2xl shadow-lg w-full ${className}`, "class")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "E:/blog/2026blog/src/components/temple/Card.astro", void 0);
//#endregion
//#region src/components/widgets/ScrollToTop.astro
var $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button id="scroll-to-top" aria-label="Scroll to top" class="btn btn-circle btn-md fixed bottom-6 right-6 z-50 bg-base-100 shadow-lg opacity-0 invisible transition-all hover:scale-110">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:arrow-upward-rounded",
		"class": "h-5 w-5"
	})}</button>${renderScript($$result, "E:/blog/2026blog/src/components/widgets/ScrollToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/components/widgets/ScrollToTop.astro", void 0);
//#endregion
//#region src/components/widgets/ThemeToggle.astro
createAstro("https://blog.z2m.store");
var $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ThemeToggle;
	const uniqueId = `theme-toggle-${Math.random().toString(36).substring(2, 11)}`;
	const { className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(uniqueId, "id")}${addAttribute(["btn btn-circle btn-md bg-transparent backdrop-blur-md shadow-sm hover:scale-110", className], "class:list")} aria-label="Toggle theme" data-theme-toggle${addAttribute(t("label.themeToggle"), "title")} data-astro-cid-egzzbj2e><!-- Moon to sun transition icon (shown when light theme is active) -->${renderComponent($$result, "Icon", $$Icon, {
		"name": "line-md:moon-alt-to-sunny-outline-loop-transition",
		"class": "theme-toggle-icon h-5 w-5 light-icon",
		"size": 20,
		"data-astro-cid-egzzbj2e": true
	})}<!-- Sun to moon transition icon (shown when dark theme is active) -->${renderComponent($$result, "Icon", $$Icon, {
		"name": "line-md:sunny-outline-to-moon-alt-loop-transition",
		"class": "theme-toggle-icon h-5 w-5 dark-icon hidden",
		"size": 20,
		"data-astro-cid-egzzbj2e": true
	})}</button><script>(function(){${defineScriptVars({
		SITE_THEME,
		uniqueId
	})}  
  // Function to update icons based on current theme for a specific toggle button  
  const updateThemeIcons = (toggleButton, isDark) => {  
    if (!toggleButton) return;  
  
    const lightIcon = toggleButton.querySelector(".light-icon");  
    const darkIcon = toggleButton.querySelector(".dark-icon");  
  
    if (lightIcon && darkIcon) {  
      if (isDark) {  
        lightIcon.classList.add("hidden");  
        darkIcon.classList.remove("hidden");  
      } else {  
        lightIcon.classList.remove("hidden");  
        darkIcon.classList.add("hidden");  
      }  
    }  
  };  
  
  // Apply correct icons on page load and navigation  
  document.addEventListener("astro:page-load", () => {  
    // Use the unique ID to get this specific toggle button  
    const themeToggle = document.getElementById(uniqueId);  
    if (!themeToggle) return;  
  
    const currentTheme = document.documentElement.getAttribute("data-theme");  
  
    // Initialize icon state based on current theme  
    updateThemeIcons(themeToggle, currentTheme === SITE_THEME.dark);  
  
    // Toggle theme on click  
    themeToggle.addEventListener("click", () => {  
      const currentTheme = document.documentElement.getAttribute("data-theme");  
      const newTheme = currentTheme === SITE_THEME.light ? SITE_THEME.dark : SITE_THEME.light;  
  
      // Add animation class  
      themeToggle.classList.add("animate-spin-once");  
  
      // Set new theme  
      document.documentElement.setAttribute("data-theme", newTheme);  
  
      // Set theme type based on which theme is active  
      const themeType = newTheme === SITE_THEME.dark ? "dark" : "light";  
      document.documentElement.setAttribute("data-theme-type", themeType);  
  
      localStorage.setItem("theme", newTheme);  
  
      // Update icons for all theme toggles on the page  
      const allToggles = document.querySelectorAll("[data-theme-toggle]");  
      allToggles.forEach((toggle) => {  
        updateThemeIcons(toggle, newTheme === SITE_THEME.dark);  
      });  
  
      // Remove animation class after animation completes  
      setTimeout(() => {  
        themeToggle.classList.remove("animate-spin-once");  
      }, 300);  
    });  
  });  
})();<\/script>`;
}, "E:/blog/2026blog/src/components/widgets/ThemeToggle.astro", void 0);
//#endregion
//#region src/components/sidebar/ToolBar.astro
var $$ToolBar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="toolbar-container p-4"><div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 flex-wrap"><!-- Navigation Buttons --><a href="/blog/tags" class="btn btn-circle btn-md border-base-content/20 bg-base-100 shadow-sm hover:scale-110"${addAttribute(t("label.tagPage"), "aria-label")}${addAttribute(t("label.tagPage"), "title")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-5 h-5"
	})}</a><a href="/blog/categories" class="btn btn-circle btn-md border-base-content/20 bg-base-100 shadow-sm hover:scale-110"${addAttribute(t("label.categoryPage"), "aria-label")}${addAttribute(t("label.categoryPage"), "title")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:folder",
		"class": "w-5 h-5"
	})}</a><a href="/blog/archives" class="btn btn-circle btn-md border-base-content/20 bg-base-100 shadow-sm hover:scale-110"${addAttribute(t("label.archivePage"), "aria-label")}${addAttribute(t("label.archivePage"), "title")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:archive",
		"class": "w-5 h-5"
	})}</a>${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "className": "sidebar-theme" })}${renderSlot($$result, $$slots["default"])}</div></div>` })}<!-- ScrollToTop is placed outside the Card to be fixed at the bottom of the screen -->${renderComponent($$result, "ScrollToTop", $$ScrollToTop, {})}`;
}, "E:/blog/2026blog/src/components/sidebar/ToolBar.astro", void 0);
//#endregion
//#region src/components/sidebar/TOCBar.astro
createAstro("https://blog.z2m.store");
var $$TOCBar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TOCBar;
	const { headings = [], showTOC = true } = Astro.props;
	return renderTemplate`${showTOC && headings.length > 0 && renderTemplate`${maybeRenderHead($$result)}<div id="toc-container" class="mt-4 z-10 md:max-h-[calc(100vh-2rem)] " data-astro-cid-efeddfmp>${renderComponent($$result, "Card", $$Card, { "data-astro-cid-efeddfmp": true }, { "default": ($$result) => renderTemplate`<div class="p-4" data-astro-cid-efeddfmp><nav class="toc-nav max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-none relative" data-astro-cid-efeddfmp><div id="active-indicator" class="absolute bg-primary/10 rounded-lg opacity-0 shadow-sm pointer-events-none z-0" data-astro-cid-efeddfmp></div><ul class="space-y-0 relative z-10" data-astro-cid-efeddfmp>${headings.map((heading, index) => renderTemplate`<li data-astro-cid-efeddfmp><a${addAttribute(`#heading-${index}`, "href")}${addAttribute(heading.slug, "data-heading-slug")}${addAttribute(heading.depth, "data-heading-depth")}${addAttribute(index, "data-index")}${addAttribute(`toc-link relative flex items-center py-2 px-2 rounded-lg ${heading.depth === 1 ? "font-medium" : ""}`, "class")}${addAttribute(`padding-left: ${12 + (heading.depth - 1) * 16}px;`, "style")} data-astro-cid-efeddfmp>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-right",
		"class": "icon-indicator absolute left-1 opacity-0 transition-all duration-200 w-4 h-4 text-primary",
		"data-astro-cid-efeddfmp": true
	})}<span class="link-text transition-transform duration-200" data-astro-cid-efeddfmp>${heading.text}</span></a></li>`)}</ul></nav></div>` })}</div>`}${renderScript($$result, "E:/blog/2026blog/src/components/sidebar/TOCBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/components/sidebar/TOCBar.astro", void 0);
//#endregion
//#region src/components/sidebar/SearchBar.astro
var $$SearchBar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="p-4"><form action="/blog/search" method="get" class="relative w-full"><div class="search-container w-full relative"><input type="text" name="q"${addAttribute(t("label.search") || "Search...", "placeholder")} class="input input-bordered w-full pl-10 pr-16 py-2"${addAttribute(t("label.search") || "Search", "aria-label")}><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "w-5 h-5"
	})}</div><button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"${addAttribute(t("label.search") || "Search", "aria-label")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:arrow-right",
		"class": "w-4 h-4"
	})}</button></div></form></div>` })}${renderScript($$result, "E:/blog/2026blog/src/components/sidebar/SearchBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/components/sidebar/SearchBar.astro", void 0);
//#endregion
//#region src/components/Sidebar.astro
createAstro("https://blog.z2m.store");
var $$Sidebar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Sidebar;
	const { headings = [], showTOC = true } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative mb-4">${renderComponent($$result, "ProfileBar", $$ProfileBar, {})}</div><div class="relative mb-4">${renderComponent($$result, "SearchBar", $$SearchBar, {})}</div><div class="md:sticky md:top-4">${renderComponent($$result, "ToolBar", $$ToolBar, {})}${renderComponent($$result, "TOCBar", $$TOCBar, {
		"headings": headings,
		"showTOC": showTOC
	})}</div>`;
}, "E:/blog/2026blog/src/components/Sidebar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer bg-base-100 py-2 px-4 md:p-10 rounded-xl shadow-lg gap-y-2 md:gap-4"><aside><svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current md:w-[50px] md:h-[50px]" aria-label="Logo" role="img"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg><p class="text-xs md:text-base">Powered by <a href="https://github.com/kobaridev/Ryuchan" target="_blank" class="font-bold">RyuChan Template</a><br>Copyright ©<a${addAttribute(USER_SITE, "href")} target="_blank" class="font-bold">${USER_NAME}</a>2025–${(/* @__PURE__ */ new Date()).getFullYear()}<br>All rights reserved</p></aside><nav><span class="footer-title text-xs md:text-sm">Social</span><div class="grid grid-flow-col gap-3 md:gap-4">${USER_FOOTER_SOCIAL_ICONS.map((icon) => {
		let href = icon.href;
		const isMail = icon.svg.includes("mail") || icon.svg.includes("at-line") && !icon.svg.includes("wechat");
		const isQQ = icon.svg.includes("qq") && /^\d+$/.test(href);
		if (isMail && !href.startsWith("mailto:")) href = `mailto:${href}`;
		else if (isQQ) href = `tencent://message/?uin=${href}&Site=&Menu=yes`;
		else if (!isMail && !isQQ && href && !href.startsWith("http")) href = `https://${href}`;
		return renderTemplate`<div class="tooltip"${addAttribute(icon.title, "data-tip")}><a${addAttribute(href, "href")}${addAttribute(icon.ariaLabel, "aria-label")} target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Icon", $$Icon, {
			"name": icon.svg,
			"class": "text-xl md:text-xl"
		})}</a></div>`;
	})}<div class="tooltip" data-tip="RSS Feed"><a href="/rss.xml" aria-label="RSS Feed">${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:rss-line",
		"class": "text-xl md:text-xl"
	})}</a></div></div>${SITE_ICP && renderTemplate`<div class="mt-2 text-xs md:text-sm"><a${addAttribute(SITE_ICP_LINK, "href")} target="_blank" rel="noopener" class="font-bold">${SITE_ICP}</a></div>`}</nav></footer>`;
}, "E:/blog/2026blog/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/widgets/ThemeSelector.astro
var $$ThemeSelector = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle hover:bg-white/10 text-primary" title="Change Theme">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:palette-outline",
		"class": "w-5 h-5"
	})}</div><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-48 max-h-96 overflow-y-auto flex-nowrap">${[
		{
			name: "light",
			color: "#ffffff"
		},
		{
			name: "dark",
			color: "#1d232a"
		},
		{
			name: "cupcake",
			color: "#65c3c8"
		},
		{
			name: "bumblebee",
			color: "#e0a82e"
		},
		{
			name: "emerald",
			color: "#66cc8a"
		},
		{
			name: "corporate",
			color: "#4b6bfb"
		},
		{
			name: "synthwave",
			color: "#e779c1"
		},
		{
			name: "retro",
			color: "#ef9995"
		},
		{
			name: "cyberpunk",
			color: "#ff7598"
		},
		{
			name: "valentine",
			color: "#e96d7b"
		},
		{
			name: "halloween",
			color: "#f28c18"
		},
		{
			name: "garden",
			color: "#fe0075"
		},
		{
			name: "forest",
			color: "#1eb854"
		},
		{
			name: "aqua",
			color: "#09ecf3"
		},
		{
			name: "lofi",
			color: "#808080"
		},
		{
			name: "pastel",
			color: "#d1c1d7"
		},
		{
			name: "fantasy",
			color: "#6e0b75"
		},
		{
			name: "wireframe",
			color: "#b8b8b8"
		},
		{
			name: "black",
			color: "#000000"
		},
		{
			name: "luxury",
			color: "#ffffff"
		},
		{
			name: "dracula",
			color: "#ff79c6"
		},
		{
			name: "cmyk",
			color: "#45AEEE"
		},
		{
			name: "autumn",
			color: "#8C0327"
		},
		{
			name: "business",
			color: "#1C4E80"
		},
		{
			name: "acid",
			color: "#FF00F4"
		},
		{
			name: "lemonade",
			color: "#519903"
		},
		{
			name: "night",
			color: "#38bdf8"
		},
		{
			name: "coffee",
			color: "#DB924B"
		},
		{
			name: "winter",
			color: "#047AFF"
		}
	].map((theme) => renderTemplate`<li><button class="flex gap-3 items-center"${addAttribute(theme.name, "data-set-theme")}${addAttribute(`Change theme to ${theme.name}`, "aria-label")}><span class="w-4 h-4 rounded-full border border-base-content/20"${addAttribute(`background-color: ${theme.color};`, "style")}></span><span class="capitalize">${theme.name}</span></button></li>`)}</ul></div><script>
  document.addEventListener("astro:page-load", () => {
    const themeButtons = document.querySelectorAll('[data-set-theme]');
    
    // 更新选中状态的函数
    const updateActiveTheme = () => {
      // 获取当前主题，优先从 html 标签获取，其次 localStorage，默认为 garden
      const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'garden';
      
      themeButtons.forEach(btn => {
        const theme = btn.getAttribute('data-set-theme');
        if (theme === currentTheme) {
          // 添加高亮样式
          btn.classList.add('bg-primary/10', 'text-primary', 'font-bold', 'active-theme');
        } else {
          // 移除高亮样式
          btn.classList.remove('bg-primary/10', 'text-primary', 'font-bold', 'active-theme');
        }
      });
    };
    
    // 初始化时更新一次
    updateActiveTheme();

    // 监听按钮点击
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-set-theme');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Try to guess if it's dark or light for other components
        const isDark = ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee'].includes(theme);
        document.documentElement.setAttribute('data-theme-type', isDark ? 'dark' : 'light');
        
        // 点击后立即更新状态（虽然 Observer 也会触发，但这样更直接）
        updateActiveTheme();
      });
    });

    // 使用 MutationObserver 监听 html 标签属性变化，以便响应其他组件（如 ThemeToggle）的主题切换
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateActiveTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  });
<\/script>`;
}, "E:/blog/2026blog/src/components/widgets/ThemeSelector.astro", void 0);
//#endregion
//#region src/components/widgets/BannerSettings.astro
var $$BannerSettings = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle hover:bg-white/10 text-primary" title="Banner Settings">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:image-outline",
		"class": "w-5 h-5"
	})}</div><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-52"><li><button data-set-banner="normal" class="flex gap-2 active">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:panorama-outline",
		"class": "w-5 h-5"
	})}Banner Mode</button></li><li><button data-set-banner="fullscreen" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:fullscreen",
		"class": "w-5 h-5"
	})}Fullscreen Mode</button></li><li><button data-set-banner="background" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:wallpaper",
		"class": "w-5 h-5"
	})}Background Mode</button></li><li><button data-set-banner="hidden" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:hide-image-outline",
		"class": "w-5 h-5"
	})}Hide Wallpaper</button></li></ul></div><script>
  document.addEventListener("astro:page-load", () => {
    const buttons = document.querySelectorAll("[data-set-banner]");
    
    // Update active state in menu
    const updateActiveButton = () => {
      const currentMode = document.documentElement.getAttribute("data-banner-mode") || localStorage.getItem("banner-mode") || "normal";
      
      buttons.forEach(btn => {
        if (btn.getAttribute("data-set-banner") === currentMode) {
          btn.classList.add("bg-primary/10", "text-primary", "font-bold", "active");
        } else {
          btn.classList.remove("bg-primary/10", "text-primary", "font-bold", "active");
        }
      });
    };

    // Initialize state
    updateActiveButton();

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-set-banner");
        document.documentElement.setAttribute("data-banner-mode", mode);
        localStorage.setItem("banner-mode", mode);
        // Direct update on click
        updateActiveButton();
      });
    });

    // Listen for external changes (syncs if changed elsewhere)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-banner-mode') {
          updateActiveButton();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-banner-mode']
    });
  });
<\/script>`;
}, "E:/blog/2026blog/src/components/widgets/BannerSettings.astro", void 0);
//#endregion
//#region src/components/widgets/MobileSettings.astro
var $$MobileSettings = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle btn-sm hover:bg-transparent text-primary" title="Settings">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:settings-outline",
		"class": "w-6 h-6"
	})}</div><ul tabindex="0" class="dropdown-content z-[100] menu p-2 shadow-2xl bg-base-200 rounded-box w-64 mt-4"><!-- Dark/Light Toggle --><li><button id="mobile-theme-toggle" class="flex justify-between items-center gap-2 p-2 hover:bg-base-300 rounded-lg w-full"><span class="font-medium">Dark/Light</span><div class="btn btn-ghost btn-circle btn-sm text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 pointer-events-none flex items-center justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": "line-md:moon-alt-to-sunny-outline-loop-transition",
		"class": "w-5 h-5 light-icon"
	})}${renderComponent($$result, "Icon", $$Icon, {
		"name": "line-md:sunny-outline-to-moon-alt-loop-transition",
		"class": "w-5 h-5 dark-icon hidden"
	})}</div></button></li><!-- Banner Mode Settings --><li><details><summary class="font-medium flex justify-between items-center p-2 hover:bg-base-300 rounded-lg w-full"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:image-outline",
		"class": "w-5 h-5"
	})}Banner Mode</div></summary><ul class="p-2 bg-base-100 rounded-box"><li><button data-set-banner-mobile="normal" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:panorama-outline",
		"class": "w-5 h-5"
	})}Normal</button></li><li><button data-set-banner-mobile="fullscreen" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:fullscreen",
		"class": "w-5 h-5"
	})}Fullscreen</button></li><li><button data-set-banner-mobile="background" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:wallpaper",
		"class": "w-5 h-5"
	})}Background</button></li><li><button data-set-banner-mobile="hidden" class="flex gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:hide-image-outline",
		"class": "w-5 h-5"
	})}Hidden</button></li></ul></details></li><!-- Config Button --><li><a href="/config" class="flex justify-between items-center p-2 hover:bg-base-300 rounded-lg w-full"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:settings-outline",
		"class": "w-5 h-5"
	})}<span class="font-medium">站点配置</span></div></a></li><!-- Theme Selector --><li><details><summary class="font-medium flex justify-between items-center p-2 hover:bg-base-300 rounded-lg w-full"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:palette-outline",
		"class": "w-5 h-5"
	})}Theme</div></summary><ul class="p-2 bg-base-100 rounded-box max-h-60 overflow-y-auto flex-nowrap">${[
		{
			name: "light",
			color: "#ffffff"
		},
		{
			name: "dark",
			color: "#1d232a"
		},
		{
			name: "cupcake",
			color: "#65c3c8"
		},
		{
			name: "bumblebee",
			color: "#e0a82e"
		},
		{
			name: "emerald",
			color: "#66cc8a"
		},
		{
			name: "corporate",
			color: "#4b6bfb"
		},
		{
			name: "synthwave",
			color: "#e779c1"
		},
		{
			name: "retro",
			color: "#ef9995"
		},
		{
			name: "cyberpunk",
			color: "#ff7598"
		},
		{
			name: "valentine",
			color: "#e96d7b"
		},
		{
			name: "halloween",
			color: "#f28c18"
		},
		{
			name: "garden",
			color: "#fe0075"
		},
		{
			name: "forest",
			color: "#1eb854"
		},
		{
			name: "aqua",
			color: "#09ecf3"
		},
		{
			name: "lofi",
			color: "#808080"
		},
		{
			name: "pastel",
			color: "#d1c1d7"
		},
		{
			name: "fantasy",
			color: "#6e0b75"
		},
		{
			name: "wireframe",
			color: "#b8b8b8"
		},
		{
			name: "black",
			color: "#000000"
		},
		{
			name: "luxury",
			color: "#ffffff"
		},
		{
			name: "dracula",
			color: "#ff79c6"
		},
		{
			name: "cmyk",
			color: "#45AEEE"
		},
		{
			name: "autumn",
			color: "#8C0327"
		},
		{
			name: "business",
			color: "#1C4E80"
		},
		{
			name: "acid",
			color: "#FF00F4"
		},
		{
			name: "lemonade",
			color: "#519903"
		},
		{
			name: "night",
			color: "#38bdf8"
		},
		{
			name: "coffee",
			color: "#DB924B"
		},
		{
			name: "winter",
			color: "#047AFF"
		}
	].map((theme) => renderTemplate`<li><button class="flex gap-3 items-center"${addAttribute(theme.name, "data-set-theme-mobile")}${addAttribute(`Change theme to ${theme.name}`, "aria-label")}><span class="w-4 h-4 rounded-full border border-base-content/20"${addAttribute(`background-color: ${theme.color};`, "style")}></span><span class="capitalize">${theme.name}</span></button></li>`)}</ul></details></li></ul></div><script>(function(){${defineScriptVars({ SITE_THEME })}
  document.addEventListener("astro:page-load", () => {
    // Dark/Light Toggle Logic
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    
    const updateMobileThemeIcons = (isDark) => {
      if (!mobileThemeToggle) return;
      const lightIcon = mobileThemeToggle.querySelector(".light-icon");
      const darkIcon = mobileThemeToggle.querySelector(".dark-icon");
      
      if (lightIcon && darkIcon) {
        if (isDark) {
          lightIcon.classList.add("hidden");
          darkIcon.classList.remove("hidden");
        } else {
          lightIcon.classList.remove("hidden");
          darkIcon.classList.add("hidden");
        }
      }
    };

    // Initialize icon state
    const currentTheme = document.documentElement.getAttribute("data-theme");
    updateMobileThemeIcons(currentTheme === SITE_THEME.dark);

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === SITE_THEME.light ? SITE_THEME.dark : SITE_THEME.light;
        
        document.documentElement.setAttribute("data-theme", newTheme);
        const themeType = newTheme === SITE_THEME.dark ? "dark" : "light";
        document.documentElement.setAttribute("data-theme-type", themeType);
        localStorage.setItem("theme", newTheme);
        
        updateMobileThemeIcons(newTheme === SITE_THEME.dark);
        
        // Sync with other toggles if any
        const allToggles = document.querySelectorAll("[data-theme-toggle]");
        allToggles.forEach((toggle) => {
           // Assuming other toggles have similar structure or logic, 
           // but since we are in mobile settings, we might be the only one active or visible.
           // If needed, dispatch a custom event or manually update them.
           // For now, just updating the DOM attribute is enough for styles, 
           // but icons on other toggles might need refresh if they are visible.
        });
      });
    }

    // Banner Mode Logic
    const bannerButtons = document.querySelectorAll("[data-set-banner-mobile]");
    
    const updateActiveBannerButton = () => {
      const currentMode = document.documentElement.getAttribute("data-banner-mode") || localStorage.getItem("banner-mode") || "normal";
      bannerButtons.forEach(btn => {
        if (btn.getAttribute("data-set-banner-mobile") === currentMode) {
          btn.classList.add("bg-primary/10", "text-primary", "font-bold", "active");
        } else {
          btn.classList.remove("bg-primary/10", "text-primary", "font-bold", "active");
        }
      });
    };

    updateActiveBannerButton();

    bannerButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-set-banner-mobile");
        document.documentElement.setAttribute("data-banner-mode", mode);
        localStorage.setItem("banner-mode", mode);
        updateActiveBannerButton();
      });
    });

    // Theme Selector Logic
    const themeButtons = document.querySelectorAll('[data-set-theme-mobile]');

    const updateActiveThemeButton = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || localStorage.getItem("theme");
      themeButtons.forEach(btn => {
        if (btn.getAttribute('data-set-theme-mobile') === currentTheme) {
            btn.classList.add("bg-primary/10", "text-primary", "font-bold", "active");
        } else {
            btn.classList.remove("bg-primary/10", "text-primary", "font-bold", "active");
        }
      });
    };
    
    updateActiveThemeButton();
    
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-set-theme-mobile');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const isDark = ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee'].includes(theme);
        document.documentElement.setAttribute('data-theme-type', isDark ? 'dark' : 'light');

        updateMobileThemeIcons(isDark);
        updateActiveThemeButton();
      });
    });

    // Observer for external changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'data-theme') {
             updateActiveThemeButton();
             const currentTheme = document.documentElement.getAttribute("data-theme");
             // Helper logic for updating icon if present in this scope or make generic
             // Re-evaluating isDark roughly here for icons update if needed,
             // or rely on the function defined above if accessible.
             // Since updateMobileThemeIcons is defined in scope, we can use it.
             const isDark = ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee'].includes(currentTheme);
             updateMobileThemeIcons(isDark);
          }
          if (mutation.attributeName === 'data-banner-mode') {
             updateActiveBannerButton();
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-banner-mode']
    });
  });
})();<\/script>`;
}, "E:/blog/2026blog/src/components/widgets/MobileSettings.astro", void 0);
//#endregion
//#region src/components/Navbar.astro
createAstro("https://blog.z2m.store");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const currentPath = Astro.url.pathname;
	const typedMenu = SITE_MENU;
	return renderTemplate`${maybeRenderHead($$result)}<!-- 桌面端透明导航栏 --><nav class="fixed top-0 left-0 right-0 z-50 hidden md:block transition-opacity duration-300 ease-out opacity-100 pointer-events-auto" id="navbar-desktop" style="will-change: opacity; transform: translateZ(0); backface-visibility: hidden;"><div class="max-w-blog mx-auto px-4"><!-- 透明背景，添加毛玻璃效果 --><div id="navbar-bg" class="bg-base-100/80 backdrop-blur-xl border border-white/20 px-6 py-0 rounded-full shadow-2xl transition-colors duration-300"><div class="flex items-center justify-between"><!-- 品牌标识 - 支持图片或文本 --><a href="/" class="flex items-center hover:scale-105 transition-transform duration-300 h-14 md:h-[72px]">${SITE_TITLE_TYPE === "image" && SITE_TITLE_IMAGE ? renderTemplate`<div class="flex items-center justify-center mr-3 p-1 md:p-2 rounded-md bg-base-100/0" style="min-width:48px"><img${addAttribute(SITE_TITLE_IMAGE, "src")}${addAttribute(SITE_TITLE, "alt")} class="h-12 md:h-14 w-auto object-contain my-0 flex-shrink-0"></div>` : renderTemplate`<div class="flex items-center justify-center mr-3 px-2"><span class="text-3xl font-bold tracking-tight text-primary">${SITE_TITLE}</span></div>`}</a><!-- 桌面端水平菜单 - 响应主题颜色 --><div class="flex items-center space-x-1">${typedMenu.map((item) => item.subItems ? renderTemplate`<div class="dropdown dropdown-hover"><div tabindex="0" role="button" class="nav-item btn btn-ghost text-xl md:text-3xl lg:text-xl font-bold px-4 py-0 rounded-xl hover:bg-white/10 transition-all duration-200 text-base-content dark:text-white flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": item.svg,
		"class": "w-5 h-5"
	})}<span>${item.text}</span></div><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-xl border border-base-200 w-52 mt-2 text-base-content">${item.subItems.map((subItem) => renderTemplate`<li><a${addAttribute(subItem.href, "href")}${addAttribute(subItem.target || "_self", "target")} class="px-4 py-0 hover:bg-base-200 rounded-xl text-base font-bold transition-all duration-200 flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": subItem.svg,
		"class": "w-4 h-4"
	})}${subItem.text}</a></li>`)}</ul></div>` : renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.target || "_self", "target")} class="nav-item btn btn-ghost text-lg font-bold px-4 py-0 rounded-xl hover:bg-white/10 transition-all duration-200 text-base-content dark:text-white flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": item.svg,
		"class": "w-5 h-5"
	})}${item.text}</a>`)}</div><!-- 右侧工具栏 --><div class="flex items-center space-x-2"><a href="/config" class="btn btn-ghost btn-circle hover:bg-white/10 text-primary" aria-label="Config">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:settings-outline",
		"class": "w-5 h-5"
	})}</a>${renderComponent($$result, "ThemeSelector", $$ThemeSelector, {})}${renderComponent($$result, "BannerSettings", $$BannerSettings, {})}<!-- 主题切换 -->${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "className": "btn btn-ghost btn-circle hover:bg-white/10 text-primary" })}</div></div></div></div></nav><!-- 移动端顶部悬浮导航栏 --><nav id="navbar-mobile" class="fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-out" style="will-change: transform, opacity; transform: translateZ(0); backface-visibility: hidden;"><div class="max-w-blog mx-auto px-2 pt-2"><div class="flex items-center justify-between px-4 py-3 bg-base-100/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 w-full"><!-- 移动端头像 - 点击跳到首页 --><a href="/" class="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary flex-shrink-0 hover:scale-110 transition-transform duration-300"><img${addAttribute(USER_AVATAR, "src")} alt="profile" class="w-full h-full object-cover"></a>${typedMenu.map((item) => {
		const isChildActive = item.subItems?.some((sub) => currentPath === sub.href || sub.href !== "/" && currentPath.startsWith(sub.href));
		const isActive = currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href) || isChildActive;
		const isHome = item.href === "/";
		if (item.subItems) return renderTemplate`<div class="dropdown dropdown-bottom dropdown-end"><div tabindex="0" role="button"${addAttribute(["relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group", isActive ? "text-primary" : "text-base-content/60 hover:text-primary"], "class:list")}${addAttribute(item.text, "aria-label")}>${isActive && renderTemplate`<span class="absolute inset-0 bg-primary/10 rounded-full -z-10 scale-110"></span>`}${renderComponent($$result, "Icon", $$Icon, {
			"name": item.svg,
			"class": "w-6 h-6"
		})}</div><ul tabindex="0" class="dropdown-content z-[100] menu p-2 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl border border-white/10 w-32 mt-2">${item.subItems.map((subItem) => {
			const isSubActive = currentPath === subItem.href;
			return renderTemplate`<li><a${addAttribute(subItem.href, "href")}${addAttribute(["flex items-center gap-2", isSubActive ? "text-primary font-bold bg-primary/10" : ""], "class:list")}>${renderComponent($$result, "Icon", $$Icon, {
				"name": subItem.svg,
				"class": "w-4 h-4"
			})}<span>${subItem.text}</span></a></li>`;
		})}</ul></div>`;
		return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group", isActive && !isHome ? "text-primary" : "text-base-content/60 hover:text-primary"], "class:list")}${addAttribute(item.text, "aria-label")}>${isActive && !isHome && renderTemplate`<span class="absolute inset-0 bg-primary/10 rounded-full -z-10 scale-110"></span>`}${renderComponent($$result, "Icon", $$Icon, {
			"name": item.svg,
			"class": "w-6 h-6"
		})}</a>`;
	})}<div class="relative flex items-center justify-center w-10 h-10">${renderComponent($$result, "MobileSettings", $$MobileSettings, {})}</div></div></div></nav>${renderScript($$result, "E:/blog/2026blog/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Banner.astro
createAstro("https://blog.z2m.store");
var $$Banner = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Banner;
	const currentPath = Astro.url.pathname;
	let pageKey = "home";
	if (currentPath === "/") pageKey = "home";
	else if (currentPath === "/about") pageKey = "about";
	else if (currentPath.startsWith("/blog/") && !currentPath.includes("/blog/page/") && currentPath !== "/blog" && !currentPath.includes("/blog/tag/") && !currentPath.includes("/blog/category/")) pageKey = "home";
	else pageKey = currentPath.replace(/^\//, "");
	const cleanPageKey = pageKey.replace(/\/$/, "");
	const pageConfig = SITE_PAGES[cleanPageKey] ?? SITE_PAGES[pageKey] ?? SITE_PAGES["home"];
	const useLargeFont = pageKey === "home" || currentPath.startsWith("/blog/") && !currentPath.includes("/blog/page/") && currentPath !== "/blog" && !currentPath.includes("/blog/tag/") && !currentPath.includes("/blog/category/");
	const useTypewriter = pageKey === "home" || currentPath.startsWith("/blog/") && !currentPath.includes("/blog/page/") && currentPath !== "/blog" && !currentPath.includes("/blog/tag/") && !currentPath.includes("/blog/category/");
	const displayTitle = pageConfig.title || "";
	const displaySubtitle = pageConfig.subtitle || "";
	const hasTitle = displayTitle !== void 0 && displayTitle !== "";
	const hasSubtitle = displaySubtitle !== void 0 && displaySubtitle !== "";
	const bannerHeight = BANNER_HEIGHT;
	const RANDOM_API_URL = BANNER_CONFIG?.randomUrl;
	const initialRandomImage = `${RANDOM_API_URL}?t=${Date.now()}`;
	const $$definedVars = defineStyleVars([{ bannerHeight }]);
	return renderTemplate`${maybeRenderHead($$result)}<div id="banner" class="banner"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><div class="banner-inner h-full w-full relative overflow-hidden"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><!-- 背景层：当前显示的图片 --><div id="banner-bg-current" class="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000"${addAttribute([{ backgroundImage: `url(${initialRandomImage})` }, $$definedVars], "style")} data-astro-cid-uljtwisc></div><!-- 背景层：下一张预加载的图片 (初始隐藏) --><div id="banner-bg-next" class="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat z-0 opacity-0 transition-opacity duration-1000"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc></div><!-- 遮罩层 --><div class="absolute left-0 top-0 z-10 h-full w-full transition-colors duration-300 bg-black/40"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc></div><!-- 显示标题和副标题 -->${(hasTitle || hasSubtitle) && renderTemplate`<div class="relative z-20 h-[95%] w-full pointer-events-none"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><div class="absolute left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 lg:w-3/4"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><div class="flex flex-col pointer-events-auto"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc>${hasTitle && renderTemplate`<div${addAttribute(`title font-banner ${useLargeFont ? "text-4xl md:text-6xl lg:text-8xl" : "text-3xl md:text-4xl lg:text-6xl"}`, "class")} data-pagefind-ignore${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc>${displayTitle}</div>`}${hasSubtitle && renderTemplate`<div${addAttribute(`subtitle font-banner ${useLargeFont ? "text-xl md:text-2xl lg:text-4xl" : "text-base md:text-lg lg:text-2xl"}`, "class")} data-pagefind-ignore${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc>${useTypewriter ? renderTemplate`<span id="typewriter-text" data-pagefind-ignore${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc>${displaySubtitle}</span>` : displaySubtitle}</div>`}</div></div></div>`}</div><!-- 波浪动画效果 --><div class="waves"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><defs${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc></path></defs><g class="parallax"${addAttribute($$definedVars, "style")} data-astro-cid-uljtwisc><use xlink:href="#gentle-wave" x="48" y="0" class="opacity-25"${addAttribute([{
		animationDelay: "-2s",
		animationDuration: "7s"
	}, $$definedVars], "style")} data-astro-cid-uljtwisc></use><use xlink:href="#gentle-wave" x="48" y="3" class="opacity-50"${addAttribute([{
		animationDelay: "-3s",
		animationDuration: "10s"
	}, $$definedVars], "style")} data-astro-cid-uljtwisc></use><use xlink:href="#gentle-wave" x="48" y="5" class="opacity-75"${addAttribute([{
		animationDelay: "-4s",
		animationDuration: "13s"
	}, $$definedVars], "style")} data-astro-cid-uljtwisc></use><use xlink:href="#gentle-wave" x="48" y="7"${addAttribute([{
		animationDelay: "-5s",
		animationDuration: "20s"
	}, $$definedVars], "style")} data-astro-cid-uljtwisc></use></g></svg></div></div><!-- 打字机效果脚本 --><script>(function(){${defineScriptVars({
		TYPEWRITER_TEXTS,
		useTypewriter
	})}
  document.addEventListener("astro:page-load", () => {
    if (!useTypewriter || !TYPEWRITER_TEXTS || TYPEWRITER_TEXTS.length === 0) {
      return;
    }

    const typewriterElement = document.getElementById("typewriter-text");
    if (!typewriterElement) return;

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    let deleteSpeed = 50;
    let pauseTime = 2500;

    function typeWriter() {
      const currentText = TYPEWRITER_TEXTS[currentTextIndex];

      if (isDeleting) {
        typewriterElement.textContent = currentText.substring(
          0,
          currentCharIndex - 1,
        );
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % TYPEWRITER_TEXTS.length;
          setTimeout(typeWriter, 300);
          return;
        }

        setTimeout(typeWriter, deleteSpeed);
      } else {
        typewriterElement.textContent = currentText.substring(
          0,
          currentCharIndex + 1,
        );
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, pauseTime);
          return;
        }

        setTimeout(typeWriter, typeSpeed);
      }
    }

    setTimeout(typeWriter, 500);
  });
})();<\/script><!-- 随机图轮播脚本 --><script>(function(){${defineScriptVars({ RANDOM_API_URL })}
  document.addEventListener("astro:page-load", () => {
    const bgCurrent = document.getElementById("banner-bg-current");
    const bgNext = document.getElementById("banner-bg-next");
    const banner = document.getElementById("banner");
    
    if (!bgCurrent || !bgNext || !banner || !RANDOM_API_URL) return;

    // 配置参数
    const INTERVAL_TIME = 8000; // 轮播间隔 (ms) - 增加间隔减少频繁切换
    const TRANSITION_DURATION = 600; // 切换动画时长 (ms) - 加快动画
    const PRELOAD_ADVANCE_TIME = 2000; // 提前预加载时间
    
    let timer = null;
    let isAnimating = false;
    let nextUrl = null;
    let preloadTimer = null;

    // 生成带随机参数的 URL
    const getRandomUrl = () => \`\${RANDOM_API_URL}?t=\${Date.now()}\`;

    // 预加载图片
    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
      });
    };

    // 提前预加载下一张图
    const preloadNextImage = () => {
      if (!RANDOM_API_URL) return;
      const url = getRandomUrl();
      preloadImage(url).then(() => {
        nextUrl = url;
      }).catch(() => {
        nextUrl = null;
      });
    };

    // 切换图片逻辑
    const switchImage = async () => {
      if (isAnimating) return;
      
      // 检查页面可见性，如果不可见则跳过本次切换
      if (document.hidden) {
        // 即使跳过切换，也要预加载下一张图
        preloadNextImage();
        return;
      }

      // 检查元素是否在视口内
      const isBackgroundMode = document.documentElement.getAttribute("data-banner-mode") === "background";
      const rect = banner.getBoundingClientRect();
      if (!isBackgroundMode && (rect.bottom < 0 || rect.top > window.innerHeight)) {
        preloadNextImage();
        return;
      }

      try {
        // 使用预加载的图片 URL，如果没有则重新获取
        const currentNextUrl = nextUrl || getRandomUrl();
        nextUrl = null;
        
        // 如果没有预加载，需要先加载
        if (!nextUrl) {
          await preloadImage(currentNextUrl);
        }

        isAnimating = true;

        // 1. 设置下一张图
        bgNext.style.backgroundImage = \`url(\${currentNextUrl})\`;
        
        // 2. 淡入下一张图
        bgNext.classList.remove("opacity-0");

        // 3. 等待过渡结束
        setTimeout(() => {
          // 4. 将当前图更新为新图，并重置状态
          bgCurrent.style.backgroundImage = \`url(\${currentNextUrl})\`;
          document.documentElement.style.setProperty('--banner-image-url', \`url(\${currentNextUrl})\`);
          
          // 5. 瞬间隐藏 next 层，为下一次做准备
          bgNext.style.transition = "none";
          bgNext.classList.add("opacity-0");
          
          // 强制重绘
          bgNext.offsetHeight; 
          
          // 恢复 transition
          bgNext.style.transition = "";
          
          isAnimating = false;
          
          // 提前预加载下一张图
          preloadNextImage();
        }, TRANSITION_DURATION);

      } catch (error) {
        console.error("Failed to load next banner image:", error);
        isAnimating = false;
        preloadNextImage();
      }
    };

    // 启动轮播
    const startCarousel = () => {
      if (timer) clearInterval(timer);
      // 提前预加载第一张图
      preloadNextImage();
      timer = setInterval(switchImage, INTERVAL_TIME);
    };

    // 停止轮播
    const stopCarousel = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    // 监听可见性变化
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const isBackgroundMode = document.documentElement.getAttribute("data-banner-mode") === "background";
        if (entry.isIntersecting || isBackgroundMode) {
          startCarousel();
        } else {
          stopCarousel();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(banner);

    // 监听 Banner 模式变化
    const modeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-banner-mode") {
          const isBackgroundMode = document.documentElement.getAttribute("data-banner-mode") === "background";
          if (isBackgroundMode) {
            startCarousel();
          } else {
            const isHidden = document.documentElement.getAttribute("data-banner-mode") === "hidden";
            if (isHidden) {
              stopCarousel();
            }
          }
        }
      });
    });

    modeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-banner-mode"]
    });

    // 页面卸载时清理
    document.addEventListener("astro:before-swap", () => {
      stopCarousel();
      observer.disconnect();
      modeObserver.disconnect();
      if (preloadTimer) clearTimeout(preloadTimer);
    }, { once: true });
  });
})();<\/script>`;
}, "E:/blog/2026blog/src/components/Banner.astro", void 0);
//#endregion
//#region src/components/widgets/MobileTOC.astro
createAstro("https://blog.z2m.store");
var $$MobileTOC = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MobileTOC;
	const { headings = [], showTOC = true } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<button id="mobile-toc-button"${addAttribute(t("label.tableOfContents"), "aria-label")} class="btn btn-circle btn-md fixed bottom-20 right-6 z-50 bg-base-100 shadow-lg md:hidden opacity-0 invisible transition-all hover:scale-110" onclick="mobile_toc_modal.showModal()">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:list",
		"class": "h-5 w-5"
	})}</button><dialog id="mobile_toc_modal" class="modal md:hidden"><div class="modal-box w-10/12 max-w-md bg-base-100 rounded-lg shadow-xl"><div class="flex justify-between items-center border-b border-base-200 pb-4"><h3 class="font-medium">${t("label.tableOfContents")}</h3><form method="dialog"><button class="btn btn-circle btn-ghost"${addAttribute(t("label.tableOfContents"), "aria-label")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:x",
		"class": "h-5 w-5"
	})}</button></form></div><div class="pt-4 max-h-[70vh] overflow-auto">${showTOC && headings.length > 0 ? renderTemplate`<ul class="menu menu-sm">${headings.map((heading) => renderTemplate`<li class="my-1"><a${addAttribute(`#${heading.slug}`, "href")} class="mobile-toc-link flex items-center rounded-lg transition-color hover:bg-base-200"${addAttribute(`margin-left: ${(heading.depth - 1) * 12}px`, "style")}${addAttribute(heading.slug, "data-mobile-heading-id")}><span class="text-sm truncate">${heading.text}</span></a></li>`)}</ul>` : renderTemplate`<div class="py-4 text-center text-base-content/70"><p>${t("label.noContents")}</p></div>`}</div></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>${renderScript($$result, "E:/blog/2026blog/src/components/widgets/MobileTOC.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/components/widgets/MobileTOC.astro", void 0);
//#endregion
//#region src/data/music.ts
/**
* 此时歌曲数据源于 Meting API 自动生成的 './music.json' 以及配置中的自定义歌单.
* 运行 `pnpm prefetch:music` 即可自动更新 Meting 歌单数据及自定义音乐时长。
*/
var raw = {
	songs: [
		{
			"title": "水仙十字安眠曲 A Narcissus Lullaby",
			"artist": "HOYO-MiX",
			"cover": "https://p1.music.126.net/vkLKNH2WpfYh4p4ACRRYOg==/109951169367650385.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2130083960",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2130083960",
			"duration": "02:03"
		},
		{
			"title": "小半",
			"artist": "陈粒",
			"cover": "https://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=421423806",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=421423806",
			"duration": "04:57"
		},
		{
			"title": "走马",
			"artist": "陈粒",
			"cover": "https://p1.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=30431367",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=30431367",
			"duration": "03:55"
		},
		{
			"title": "后来的我们",
			"artist": "五月天",
			"cover": "https://p1.music.126.net/lt4R_XbCZsT-yzRfWs9VfQ==/3434874331529456.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=422104138",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=422104138",
			"duration": "05:46"
		},
		{
			"title": "夜车",
			"artist": "曾轶可",
			"cover": "https://p1.music.126.net/s7Cn8bl21KY7kGiBWMdaFg==/109951163105666561.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=340376",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=340376",
			"duration": "03:11"
		},
		{
			"title": "后来",
			"artist": "刘若英",
			"cover": "https://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=254574",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=254574",
			"duration": "05:41"
		},
		{
			"title": "喜欢",
			"artist": "阿肆",
			"cover": "https://p1.music.126.net/OOJzEuUh90krY_PHXeWE7Q==/109951173049150195.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=526464145",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=526464145",
			"duration": "04:10"
		},
		{
			"title": "STYX HELIX",
			"artist": "MYTH & ROID",
			"cover": "https://p1.music.126.net/XNabazarlJpjl8yl4tuCfg==/109951171350916152.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=413961906",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=413961906",
			"duration": "04:51"
		},
		{
			"title": "Brave Shine",
			"artist": "Aimer",
			"cover": "https://p1.music.126.net/IX2EItaOWNbnY9fO7Tm2CQ==/109951168080741423.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=32358691",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=32358691",
			"duration": "03:53"
		},
		{
			"title": "最佳损友",
			"artist": "陈奕迅",
			"cover": "https://p1.music.126.net/3mi073axgjg-g-79ObwwEQ==/109951171836582062.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=65800",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=65800",
			"duration": "03:53"
		},
		{
			"title": "女孩",
			"artist": "韦礼安",
			"cover": "https://p1.music.126.net/s0AgmipqlXTW-r6YmiwNQg==/109951168079643579.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=32358362",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=32358362",
			"duration": "05:06"
		},
		{
			"title": "我们俩",
			"artist": "郭顶",
			"cover": "https://p1.music.126.net/Zxb_k2LI77GLmXGg-k2r0g==/109951170514277229.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=85571",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=85571",
			"duration": "03:13"
		},
		{
			"title": "海阔天空",
			"artist": "Beyond",
			"cover": "https://p1.music.126.net/q6cm6Pk70YArijk1_QDoEg==/109951163984013003.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1357375695",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1357375695",
			"duration": "03:59"
		},
		{
			"title": "多远都要在一起",
			"artist": "G.E.M.邓紫棋",
			"cover": "https://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=30612793",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=30612793",
			"duration": "03:36"
		},
		{
			"title": "逆光",
			"artist": "孙燕姿",
			"cover": "https://p1.music.126.net/wF25xzePLml5EGUWM2eInw==/109951173219336672.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=287057",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=287057",
			"duration": "04:54"
		},
		{
			"title": "又是艳阳天",
			"artist": "郭静 / 韦礼安",
			"cover": "https://p1.music.126.net/TDmpu8EMlt4UHaJuCFgTfQ==/109951167430325186.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=233846",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=233846",
			"duration": "04:42"
		},
		{
			"title": "3 Strikes",
			"artist": "Terror Jr",
			"cover": "https://p1.music.126.net/iFZF7le6cQX_DpPY-udPoQ==/109951164000556824.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=409647388",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=409647388",
			"duration": "02:55"
		},
		{
			"title": "Beautiful World (Da Capo Version)",
			"artist": "宇多田ヒカル",
			"cover": "https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1824020873",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1824020873",
			"duration": "05:58"
		},
		{
			"title": "找自己",
			"artist": "陶喆",
			"cover": "https://p1.music.126.net/tMQXBMTy8pGjGggX1j0YNQ==/109951169389595068.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=150617",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=150617",
			"duration": "05:04"
		},
		{
			"title": "普通朋友",
			"artist": "陶喆",
			"cover": "https://p1.music.126.net/tMQXBMTy8pGjGggX1j0YNQ==/109951169389595068.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=150623",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=150623",
			"duration": "04:15"
		},
		{
			"title": "Mr. \"Broken Heart\"",
			"artist": "松下優也",
			"cover": "https://p1.music.126.net/_wjX4Lq_dPNCllJX-r6FQg==/109951166201250148.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=26089264",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=26089264",
			"duration": "03:38"
		},
		{
			"title": "打上花火",
			"artist": "Daoko / 米津玄師",
			"cover": "https://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=496869422",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=496869422",
			"duration": "04:49"
		},
		{
			"title": "唯一",
			"artist": "G.E.M.邓紫棋",
			"cover": "https://p1.music.126.net/aJWtwvdYRXvKUpAE2C6NoA==/109951168919708423.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2083785152",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2083785152",
			"duration": "04:13"
		},
		{
			"title": "老人と海",
			"artist": "ヨルシカ",
			"cover": "https://p1.music.126.net/5aHcGADR5i6biE5TSqf_aQ==/109951166295171725.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1870469768",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1870469768",
			"duration": "04:15"
		},
		{
			"title": "出现又离开 (Live)",
			"artist": "梁博",
			"cover": "https://p1.music.126.net/mAV2OH6nPJd4XLwn80kwpA==/109951164054054313.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1363553440",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1363553440",
			"duration": "06:43"
		},
		{
			"title": "知我",
			"artist": "国风堂 / 哦漏",
			"cover": "https://p1.music.126.net/_etyUh1ofScyTMFArsJXWg==/109951164415301539.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1394167216",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1394167216",
			"duration": "04:37"
		},
		{
			"title": "炎",
			"artist": "LiSA",
			"cover": "https://p1.music.126.net/Gn6tQvWXV58ptueWaOEZuQ==/109951165349903788.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1482908655",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1482908655",
			"duration": "04:34"
		},
		{
			"title": "Reze",
			"artist": "kensuke ushio",
			"cover": "https://p1.music.126.net/K92rwNNNgmJpgyhVxS-8ig==/109951172035133051.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2747726111",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2747726111",
			"duration": "01:14"
		},
		{
			"title": "フィナーレ。",
			"artist": "eill",
			"cover": "https://p1.music.126.net/elOSlLUcyPt_fqdluhSBBA==/109951167783001594.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1972395036",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1972395036",
			"duration": "04:02"
		},
		{
			"title": "SPECIALZ",
			"artist": "King Gnu",
			"cover": "https://p1.music.126.net/LielQw8AQQDLGQwj-xhOjA==/109951168848035270.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2074163984",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2074163984",
			"duration": "03:59"
		},
		{
			"title": "AIZO",
			"artist": "King Gnu",
			"cover": "https://p1.music.126.net/3HQLa_W5Y0x1vnO3SQ5vuQ==/109951172559097545.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=3337367763",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=3337367763",
			"duration": "03:35"
		},
		{
			"title": "in the pool",
			"artist": "kensuke ushio",
			"cover": "https://p1.music.126.net/K92rwNNNgmJpgyhVxS-8ig==/109951172035133051.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2747726104",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2747726104",
			"duration": "04:05"
		},
		{
			"title": "IRIS OUT",
			"artist": "米津玄師",
			"cover": "https://p1.music.126.net/X9wPjRlR4H39vjJtAzVA9Q==/109951171998034780.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2745026895",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2745026895",
			"duration": "02:31"
		},
		{
			"title": "JANE DOE",
			"artist": "米津玄師 / 宇多田ヒカル",
			"cover": "https://p1.music.126.net/z8vkaskRIKrLhTZ0zrqzDg==/109951172028084335.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2747166493",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2747166493",
			"duration": "03:56"
		},
		{
			"title": "Departures〜あなたにおくるアイの歌〜",
			"artist": "EGOIST",
			"cover": "https://p1.music.126.net/RU7zCEyeZMH7ZYk6xcm19w==/109951165946393227.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=722928",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=722928",
			"duration": "04:15"
		},
		{
			"title": "轻涟 La vaguelette",
			"artist": "HOYO-MiX",
			"cover": "https://p1.music.126.net/I-cw5yaq4Pz0EL2dZAmq1g==/109951169058808374.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2100334024",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2100334024",
			"duration": "02:29"
		},
		{
			"title": "unravel",
			"artist": "TK from 凛として時雨",
			"cover": "https://p1.music.126.net/FDOGd6uW4RUDuAq6fKvnmw==/109951169033080950.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=29017078",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=29017078",
			"duration": "04:00"
		},
		{
			"title": "Love Story",
			"artist": "Taylor Swift",
			"cover": "https://p1.music.126.net/GZERNplXUdzTPkKqo2F4tA==/109951169217536854.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=19292984",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=19292984",
			"duration": "03:56"
		},
		{
			"title": "爱情讯息",
			"artist": "郭静",
			"cover": "https://p1.music.126.net/-ccXZvLLbvLQc99YEbylUA==/109951171316025348.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=233888",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=233888",
			"duration": "04:40"
		},
		{
			"title": "遇见",
			"artist": "孙燕姿",
			"cover": "https://p1.music.126.net/KZ0VfIoFYsxpjz9sTQuLVQ==/17687843556430013.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=454828887",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=454828887",
			"duration": "03:29"
		},
		{
			"title": "我怀念的",
			"artist": "孙燕姿",
			"cover": "https://p1.music.126.net/wF25xzePLml5EGUWM2eInw==/109951173219336672.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=287063",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=287063",
			"duration": "04:49"
		},
		{
			"title": "Call of Silence",
			"artist": "澤野弘之 / R!N/Gemie",
			"cover": "https://p1.music.126.net/nRuQt_bbbiQ70CxwXUHXOQ==/109951163597044887.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=482636090",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=482636090",
			"duration": "02:58"
		},
		{
			"title": "可惜没如果",
			"artist": "林俊杰",
			"cover": "https://p1.music.126.net/2e__sKuIQsTSVVGr5Hk1FA==/109951170313536564.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=29814898",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=29814898",
			"duration": "04:58"
		},
		{
			"title": "恋人",
			"artist": "李荣浩",
			"cover": "https://p1.music.126.net/0bk3Iqe2OZGBH2Iuyx7RzA==/109951170045577565.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2600493765",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2600493765",
			"duration": "04:35"
		},
		{
			"title": "HIS SMILE",
			"artist": "麗美",
			"cover": "https://p1.music.126.net/k1w34BBPp23lXyijkMPqLQ==/109951170456532964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=22712631",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=22712631",
			"duration": "04:56"
		},
		{
			"title": "特别的人",
			"artist": "方大同",
			"cover": "https://p1.music.126.net/3Y0A55OzEnqKNiH5ODA54A==/109951172683046522.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=28403111",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=28403111",
			"duration": "04:19"
		},
		{
			"title": "心墙",
			"artist": "郭静",
			"cover": "https://p1.music.126.net/twmbtfq2KVsIwmpJ8aTfRQ==/109951168105390425.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=27671269",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=27671269",
			"duration": "03:47"
		},
		{
			"title": "from the edge",
			"artist": "FictionJunction / LiSA",
			"cover": "https://p1.music.126.net/n_vw2vd7IFN2y_D7-RIH3Q==/109951171371865924.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1388181876",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1388181876",
			"duration": "04:38"
		},
		{
			"title": "残酷な夜に輝け - Shine in the Cruel Night",
			"artist": "LiSA",
			"cover": "https://p1.music.126.net/biQgZKsNO_Vh-FeuKXso6A==/109951171480745508.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2727103261",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2727103261",
			"duration": "06:23"
		},
		{
			"title": "紅蓮華",
			"artist": "LiSA",
			"cover": "https://p1.music.126.net/JvremjkFs3cvGOFTetujHg==/109951169169579096.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1375305989",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1375305989",
			"duration": "03:56"
		},
		{
			"title": "太陽が昇らない世界 - A World Where the Sun Never Rises",
			"artist": "Aimer",
			"cover": "https://p1.music.126.net/gGaYHT571-HXXwoQKNbs3g==/109951171480735948.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2727103300",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2727103300",
			"duration": "02:50"
		},
		{
			"title": "To the Infinity Castle - Muzan vs Hashira Theme (from \"Demon Slayer\") (Cover)",
			"artist": "Diego Mitre",
			"cover": "https://p1.music.126.net/3VXjKtTkaWmzOaGuaK0Xlg==/109951169741328857.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2604036163",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2604036163",
			"duration": "05:05"
		},
		{
			"title": "Style",
			"artist": "Taylor Swift",
			"cover": "https://p1.music.126.net/3KDqQ9XW2Khj5Ia4tRqAAw==/18771962022688349.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=29572502",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=29572502",
			"duration": "03:51"
		},
		{
			"title": "One Last Kiss",
			"artist": "宇多田ヒカル",
			"cover": "https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1824020871",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1824020871",
			"duration": "04:12"
		},
		{
			"title": "鳥の詩",
			"artist": "Lia",
			"cover": "https://p1.music.126.net/xzm2HOT5DpobOk73OhE9QQ==/109951170627348480.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=28151022",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=28151022",
			"duration": "06:09"
		},
		{
			"title": "晴天",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0039MnYb0qxYhV",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0039MnYb0qxYhV",
			"duration": "04:29"
		},
		{
			"title": "告白气球",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003OUlho2HcRHC",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003OUlho2HcRHC",
			"duration": "03:35"
		},
		{
			"title": "稻香",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003aAYrm3GE0Ac",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003aAYrm3GE0Ac",
			"duration": "03:43"
		},
		{
			"title": "等你下课 (with 杨瑞代)",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001J5QJL1pRQYB",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001J5QJL1pRQYB",
			"duration": "04:30"
		},
		{
			"title": "七里香",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004Z8Ihr0JIu5s",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004Z8Ihr0JIu5s",
			"duration": "04:59"
		},
		{
			"title": "青花瓷",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002qU5aY3Qu24y",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002qU5aY3Qu24y",
			"duration": "03:59"
		},
		{
			"title": "不能说的秘密",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001UP7mW458ipG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002MXZNu1GToOk",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002MXZNu1GToOk",
			"duration": "04:56"
		},
		{
			"title": "一路向北",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002MAeob3zLXwZ.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001xd0HI0X9GNq",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001xd0HI0X9GNq",
			"duration": "04:54"
		},
		{
			"title": "夜曲",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001zMQr71F1Qo8",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001zMQr71F1Qo8",
			"duration": "03:46"
		},
		{
			"title": "彩虹",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004bRWFg3fej9y",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004bRWFg3fej9y",
			"duration": "04:23"
		},
		{
			"title": "简单爱",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0009BCJK1nRaad",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0009BCJK1nRaad",
			"duration": "04:30"
		},
		{
			"title": "搁浅",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001Bbywq2gicae",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Bbywq2gicae",
			"duration": "04:00"
		},
		{
			"title": "听妈妈的话",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002hXDfk0LX9KO",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002hXDfk0LX9KO",
			"duration": "04:25"
		},
		{
			"title": "安静",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000amRvH3wxv56",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000amRvH3wxv56",
			"duration": "05:34"
		},
		{
			"title": "说好的幸福呢",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0042QMDR1VzSsx",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0042QMDR1VzSsx",
			"duration": "04:16"
		},
		{
			"title": "给我一首歌的时间",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004BhQke4adHcf",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004BhQke4adHcf",
			"duration": "04:13"
		},
		{
			"title": "退后",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001L1lqm4UAdyo",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001L1lqm4UAdyo",
			"duration": "04:21"
		},
		{
			"title": "蒲公英的约定",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004Yi5BD3ksoAN",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004Yi5BD3ksoAN",
			"duration": "04:07"
		},
		{
			"title": "最长的电影",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003ZrdgZ0UnjDl",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003ZrdgZ0UnjDl",
			"duration": "03:55"
		},
		{
			"title": "烟花易冷",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004emQMs09Z1lz",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004emQMs09Z1lz",
			"duration": "04:23"
		},
		{
			"title": "算什么男人",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001Js78a40BZU6",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Js78a40BZU6",
			"duration": "04:48"
		},
		{
			"title": "发如雪",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0027oMO61wWi55",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0027oMO61wWi55",
			"duration": "04:59"
		},
		{
			"title": "以父之名",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001n4C3p1yv0FU",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001n4C3p1yv0FU",
			"duration": "05:42"
		},
		{
			"title": "花海",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003cI52o4daJJL",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003cI52o4daJJL",
			"duration": "04:24"
		},
		{
			"title": "甜甜的",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000xdZuV2LcQ19",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000xdZuV2LcQ19",
			"duration": "04:03"
		},
		{
			"title": "轨迹",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0036g6g628i2gI",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0036g6g628i2gI",
			"duration": "05:26"
		},
		{
			"title": "半岛铁盒",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002OKIox28ad9a",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002OKIox28ad9a",
			"duration": "05:19"
		},
		{
			"title": "我不配",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001T3JAT15palI",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001T3JAT15palI",
			"duration": "04:48"
		},
		{
			"title": "明明就",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000oW8J53xPhZA",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000oW8J53xPhZA",
			"duration": "04:20"
		},
		{
			"title": "不该 (with aMEI)",
			"artist": "周杰伦 / 张惠妹",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000sxzol11raSd",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000sxzol11raSd",
			"duration": "04:51"
		},
		{
			"title": "开不了口",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0020qX4u2JJRxK",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0020qX4u2JJRxK",
			"duration": "04:44"
		},
		{
			"title": "东风破",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003uEbEr0jcW7c",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003uEbEr0jcW7c",
			"duration": "05:15"
		},
		{
			"title": "Mine Mine",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003KNcyk0t3mwg.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002CUU2B3WuGLc",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002CUU2B3WuGLc",
			"duration": "04:28"
		},
		{
			"title": "黑色毛衣",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003iY6cU4YG0xi",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003iY6cU4YG0xi",
			"duration": "04:12"
		},
		{
			"title": "龙卷风",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002l8JN71d2Dxy",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002l8JN71d2Dxy",
			"duration": "04:10"
		},
		{
			"title": "枫",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003KtYhg4frNXC",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003KtYhg4frNXC",
			"duration": "04:35"
		},
		{
			"title": "星晴",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001Zi7Ly4ZtVQk",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Zi7Ly4ZtVQk",
			"duration": "04:19"
		},
		{
			"title": "爱在西元前",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002usg9o4GTAKf",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002usg9o4GTAKf",
			"duration": "03:54"
		},
		{
			"title": "红尘客栈",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003xv4w313tZHV",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003xv4w313tZHV",
			"duration": "04:34"
		},
		{
			"title": "珊瑚海",
			"artist": "周杰伦 / Lara梁心颐",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001K0AjL2huSxx",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001K0AjL2huSxx",
			"duration": "04:15"
		},
		{
			"title": "不爱我就拉倒",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001CnPE31iJ899.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0031TAKo0095np",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0031TAKo0095np",
			"duration": "04:05"
		},
		{
			"title": "回到过去",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003rxgIM2eOFSF",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003rxgIM2eOFSF",
			"duration": "03:53"
		},
		{
			"title": "园游会",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003nEQHr3Ceet5",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003nEQHr3Ceet5",
			"duration": "04:15"
		},
		{
			"title": "借口",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002XWgfo0IKPOH",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002XWgfo0IKPOH",
			"duration": "04:20"
		},
		{
			"title": "夜的第七章",
			"artist": "周杰伦 / 潘儿",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0010ibBn4bYFTk",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0010ibBn4bYFTk",
			"duration": "03:48"
		},
		{
			"title": "手写的从前",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002u8ZOM4C7QF4",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002u8ZOM4C7QF4",
			"duration": "04:57"
		},
		{
			"title": "菊花台",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004RUiXu49ufy1",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004RUiXu49ufy1",
			"duration": "04:53"
		},
		{
			"title": "断了的弦",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003ZdxP61ClQZ5",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003ZdxP61ClQZ5",
			"duration": "04:57"
		},
		{
			"title": "说了再见",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=00265Jxe3JzXOJ",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=00265Jxe3JzXOJ",
			"duration": "04:42"
		},
		{
			"title": "可爱女人",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004VR0Hn3bkqqE",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004VR0Hn3bkqqE",
			"duration": "03:59"
		},
		{
			"title": "暗号",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000NQDjk4BA0W3",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000NQDjk4BA0W3",
			"duration": "04:31"
		},
		{
			"title": "霍元甲",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000OixvE1YjIqd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002HeqcH2GMiOL",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002HeqcH2GMiOL",
			"duration": "04:38"
		},
		{
			"title": "听见下雨的声音",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0026N9sT4aBGcV",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0026N9sT4aBGcV",
			"duration": "04:39"
		},
		{
			"title": "你听得到",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002elTc93yuXu2",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002elTc93yuXu2",
			"duration": "03:50"
		},
		{
			"title": "爱情废柴",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000eskGX0ijIFi",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000eskGX0ijIFi",
			"duration": "04:45"
		},
		{
			"title": "兰亭序",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=00128N3r2SYKMF",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=00128N3r2SYKMF",
			"duration": "04:13"
		},
		{
			"title": "本草纲目",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001bo9Wy1NfHpb",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001bo9Wy1NfHpb",
			"duration": "03:29"
		},
		{
			"title": "千里之外",
			"artist": "周杰伦 / 费玉清",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003FRy0r0wyGHl",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003FRy0r0wyGHl",
			"duration": "04:16"
		},
		{
			"title": "一点点",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002lW4Yl3ylM02",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002lW4Yl3ylM02",
			"duration": "03:42"
		},
		{
			"title": "止战之殇",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0042fRqf4fC8ZB",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0042fRqf4fC8ZB",
			"duration": "04:34"
		},
		{
			"title": "黑色幽默",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0006rBfE3htPqG",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0006rBfE3htPqG",
			"duration": "04:43"
		},
		{
			"title": "她的睫毛",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001FSVRg08JLpi",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001FSVRg08JLpi",
			"duration": "03:52"
		},
		{
			"title": "白色风车",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000DdOAF0ED7i4",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000DdOAF0ED7i4",
			"duration": "04:32"
		},
		{
			"title": "超人不会飞",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004JQ70v4Fddyj",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004JQ70v4Fddyj",
			"duration": "05:00"
		},
		{
			"title": "浪漫手机",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002fi7iG0VvUj2",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002fi7iG0VvUj2",
			"duration": "04:00"
		},
		{
			"title": "阳光宅男",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001bnNGN127Kbq",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001bnNGN127Kbq",
			"duration": "03:42"
		},
		{
			"title": "飘移",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004DI5Vw0DnEOW",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004DI5Vw0DnEOW",
			"duration": "04:04"
		},
		{
			"title": "爷爷泡的茶",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002IyJxz0FBFEJ",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002IyJxz0FBFEJ",
			"duration": "04:00"
		},
		{
			"title": "双截棍",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=00218ObD0yrANX",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=00218ObD0yrANX",
			"duration": "03:21"
		},
		{
			"title": "外婆",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0027gHes1HjRNe",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0027gHes1HjRNe",
			"duration": "04:04"
		},
		{
			"title": "牛仔很忙",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003O5GaP1SYe94",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003O5GaP1SYe94",
			"duration": "02:48"
		},
		{
			"title": "最后的战役",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000HafPI0dzzwp",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000HafPI0dzzwp",
			"duration": "04:11"
		},
		{
			"title": "三年二班",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004csbVP1E2dv1",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004csbVP1E2dv1",
			"duration": "04:40"
		},
		{
			"title": "哪里都是你",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002sfzQB12abuc",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002sfzQB12abuc",
			"duration": "04:39"
		},
		{
			"title": "雨下一整晚",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002zouNc0L8Llg",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002zouNc0L8Llg",
			"duration": "04:16"
		},
		{
			"title": "半兽人",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001FUQiy2ZCiVt",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001FUQiy2ZCiVt",
			"duration": "04:07"
		},
		{
			"title": "迷迭香",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0016oRIN0hu5zE",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0016oRIN0hu5zE",
			"duration": "04:11"
		},
		{
			"title": "我落泪情绪零碎",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0022b7OX2STU86",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0022b7OX2STU86",
			"duration": "04:17"
		},
		{
			"title": "上海一九四三",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002YzCdA2Hybr0",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002YzCdA2Hybr0",
			"duration": "03:15"
		},
		{
			"title": "乌克丽丽",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001beoYX0K09xu",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001beoYX0K09xu",
			"duration": "02:55"
		},
		{
			"title": "心雨",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000Fylg7450RG2",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000Fylg7450RG2",
			"duration": "04:29"
		},
		{
			"title": "威廉古堡",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0046grpK0A1l9G",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0046grpK0A1l9G",
			"duration": "03:56"
		},
		{
			"title": "前世情人",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000cFsFl1o17jp",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000cFsFl1o17jp",
			"duration": "03:22"
		},
		{
			"title": "听爸爸的话",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003BiKB44LknC0",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003BiKB44LknC0",
			"duration": "04:23"
		},
		{
			"title": "爱情悬崖",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0037FWzg2csDmh",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0037FWzg2csDmh",
			"duration": "04:22"
		},
		{
			"title": "对不起",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000F0lmz1cBq4c",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000F0lmz1cBq4c",
			"duration": "03:45"
		},
		{
			"title": "四面楚歌",
			"artist": "周杰伦 / 林迈可",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0043qT5x2DnxaL",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0043qT5x2DnxaL",
			"duration": "04:08"
		},
		{
			"title": "床边故事",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002MVjb31ZNK5m",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002MVjb31ZNK5m",
			"duration": "03:45"
		},
		{
			"title": "美人鱼",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001XPgTm3faHRb",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001XPgTm3faHRb",
			"duration": "03:39"
		},
		{
			"title": "你好吗",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003KNcyk0t3mwg.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0040Dgn94YNWxA",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0040Dgn94YNWxA",
			"duration": "03:44"
		},
		{
			"title": "将军",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000yJtoB39k2NF",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000yJtoB39k2NF",
			"duration": "03:24"
		},
		{
			"title": "反方向的钟",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0017K7gL4WYnw2",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0017K7gL4WYnw2",
			"duration": "04:18"
		},
		{
			"title": "画沙",
			"artist": "周杰伦 / 袁咏琳",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002ldC3J1GUVlt.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004CaSbW3RSgDo",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004CaSbW3RSgDo",
			"duration": "04:29"
		},
		{
			"title": "忍者",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001MNqZU3YDLrE",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001MNqZU3YDLrE",
			"duration": "02:38"
		},
		{
			"title": "龙拳",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004R20x748kyO1",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004R20x748kyO1",
			"duration": "04:34"
		},
		{
			"title": "分裂",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002U3qIp3n7yke",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002U3qIp3n7yke",
			"duration": "04:14"
		},
		{
			"title": "爱的飞行日记",
			"artist": "周杰伦 / 杨瑞代",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003CxS6w14OQyM",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003CxS6w14OQyM",
			"duration": "04:15"
		},
		{
			"title": "鞋子特大号",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004KpNVr0EdY0v",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004KpNVr0EdY0v",
			"duration": "03:41"
		},
		{
			"title": "大笨钟",
			"artist": "周杰伦",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002jkBM53MLB9Q",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002jkBM53MLB9Q",
			"duration": "04:02"
		},
		{
			"title": "我们的歌",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000NqZLy2lfXjT",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000NqZLy2lfXjT",
			"duration": "04:07"
		},
		{
			"title": "需要人陪",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004AeIvh4ML0Bz",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004AeIvh4ML0Bz",
			"duration": "04:11"
		},
		{
			"title": "大城小爱",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004O1DHG4MjYOi",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004O1DHG4MjYOi",
			"duration": "03:44"
		},
		{
			"title": "缘分一道桥",
			"artist": "王力宏 / 谭维维",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001z1OuX41cBAx.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004NXwuk36ixAW",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004NXwuk36ixAW",
			"duration": "04:06"
		},
		{
			"title": "盖世英雄",
			"artist": "王力宏 / 欧阳靖 / 李岩",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004SYXvP2xM8b9",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004SYXvP2xM8b9",
			"duration": "03:38"
		},
		{
			"title": "依然爱你",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001fMFxM1tq1aI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001ucwE018fmRe",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001ucwE018fmRe",
			"duration": "04:06"
		},
		{
			"title": "爱一点",
			"artist": "王力宏 / 章子怡",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002HsogO0iKhf2",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002HsogO0iKhf2",
			"duration": "05:06"
		},
		{
			"title": "唯一",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000D1ceU2ibOvS.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0031tvqb2vMdXU",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0031tvqb2vMdXU",
			"duration": "04:22"
		},
		{
			"title": "改变自己",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002h62C40NbkWI",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002h62C40NbkWI",
			"duration": "03:14"
		},
		{
			"title": "花田错",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003BM7re120wtL",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003BM7re120wtL",
			"duration": "03:47"
		},
		{
			"title": "好心分手",
			"artist": "王力宏 / 卢巧音",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000032pucg2UepCT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003MTm6H1EknjX",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003MTm6H1EknjX",
			"duration": "03:00"
		},
		{
			"title": "在梅边",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000s565K2TIfGV",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000s565K2TIfGV",
			"duration": "04:36"
		},
		{
			"title": "你不知道的事",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004OhZs82CZXfA",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004OhZs82CZXfA",
			"duration": "04:38"
		},
		{
			"title": "爱的就是你",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000D1ceU2ibOvS.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001r6hgU3tImQA",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001r6hgU3tImQA",
			"duration": "04:49"
		},
		{
			"title": "你是我心内的一首歌",
			"artist": "王力宏 / 任家萱Selina",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004JQlTM0tfMwD",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004JQlTM0tfMwD",
			"duration": "02:46"
		},
		{
			"title": "心跳",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004e7bDh0qe2bd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001Fk0YJ2hiNgC",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Fk0YJ2hiNgC",
			"duration": "04:23"
		},
		{
			"title": "另一个天堂",
			"artist": "王力宏 / 张靓颖",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004e7bDh0qe2bd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002CAaOK30favb",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002CAaOK30favb",
			"duration": "04:26"
		},
		{
			"title": "春雨里洗过的太阳",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004e7bDh0qe2bd.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001ar7551jFB4G",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001ar7551jFB4G",
			"duration": "04:51"
		},
		{
			"title": "心中的日月",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0010pO163d2ozK",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0010pO163d2ozK",
			"duration": "03:57"
		},
		{
			"title": "一首简单的歌",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001TLHhS1bmDgO",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001TLHhS1bmDgO",
			"duration": "04:09"
		},
		{
			"title": "落叶归根",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003qRkRB0VMFkU",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003qRkRB0VMFkU",
			"duration": "05:13"
		},
		{
			"title": "美",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001g5e4D46VJRQ",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001g5e4D46VJRQ",
			"duration": "03:27"
		},
		{
			"title": "火力全开",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001fMFxM1tq1aI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=002R5ulo1HqrNj",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=002R5ulo1HqrNj",
			"duration": "04:28"
		},
		{
			"title": "你不在",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000004WhLzM1JvyIa.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001cpBXf0eFj6w",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001cpBXf0eFj6w",
			"duration": "04:33"
		},
		{
			"title": "爱错",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004fneUm24gD2c",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004fneUm24gD2c",
			"duration": "03:58"
		},
		{
			"title": "让我取暖",
			"artist": "王力宏 / 彭羚",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000032pucg2UepCT.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001kCf4c4YBU5F",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001kCf4c4YBU5F",
			"duration": "04:30"
		},
		{
			"title": "就是现在",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004FBEMN4XvBIn",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004FBEMN4XvBIn",
			"duration": "04:30"
		},
		{
			"title": "爱你等于爱自己",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001S4Kte2to1ou.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003CAdsr2zKjdX",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003CAdsr2zKjdX",
			"duration": "03:54"
		},
		{
			"title": "不可能错过你",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000029OK8X2o56Wr.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=004PUoRk1hcg2j",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=004PUoRk1hcg2j",
			"duration": "04:56"
		},
		{
			"title": "你的爱",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=003l2bu90JXofE",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=003l2bu90JXofE",
			"duration": "03:51"
		},
		{
			"title": "雪人",
			"artist": "王力宏 / 范晓萱",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002cGdoC3v5U2e.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000r8ihf4XMTQz",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000r8ihf4XMTQz",
			"duration": "04:45"
		},
		{
			"title": "伯牙绝弦",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001eoT8k4HRQbB",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001eoT8k4HRQbB",
			"duration": "03:47"
		},
		{
			"title": "爱因为在心中",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001IMgVA2UgU2m",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001IMgVA2UgU2m",
			"duration": "04:20"
		},
		{
			"title": "十二生肖",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000021m02e36lE7N.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0039KZNs3R3N51",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0039KZNs3R3N51",
			"duration": "03:22"
		},
		{
			"title": "忘我",
			"artist": "王力宏 / Avicii",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=000HvI6m0sWQoG",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=000HvI6m0sWQoG",
			"duration": "04:59"
		},
		{
			"title": "不完整的旋律",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001dZnuF4USEaf",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001dZnuF4USEaf",
			"duration": "04:07"
		},
		{
			"title": "星座",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0049CxU30KSZKX",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0049CxU30KSZKX",
			"duration": "03:05"
		},
		{
			"title": "第一个清晨",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=001lKCRK4PTOK4",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=001lKCRK4PTOK4",
			"duration": "04:46"
		},
		{
			"title": "龙的传人",
			"artist": "王力宏",
			"cover": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002a50FE1JHhpM.jpg",
			"url": "https://meting.mikus.ink/api?server=tencent&type=url&id=0015Bd1E1FaDug",
			"lrc": "https://meting.mikus.ink/api?server=tencent&type=lrc&id=0015Bd1E1FaDug",
			"duration": "04:41"
		},
		{
			"title": "我想要占据你",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2022072826",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2022072826",
			"duration": "04:12"
		},
		{
			"title": "给你一瓶魔法药水",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/W2mKDaDQegJg0ic0GOd2KQ==/109951169169063268.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1959667345",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1959667345",
			"duration": "04:18"
		},
		{
			"title": "唯一",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807799505",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807799505",
			"duration": "04:30"
		},
		{
			"title": "爱人错过",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368754688",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754688",
			"duration": "04:52"
		},
		{
			"title": "带我去找夜生活",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/lmCtt6-3fOPSdA1uwGCY5Q==/109951164567402626.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1410647903",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1410647903",
			"duration": "04:59"
		},
		{
			"title": "温蒂公主的侍卫",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807796555",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796555",
			"duration": "04:17"
		},
		{
			"title": "好不容易",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/w4tf-M6cGStcSrlJspIw_w==/109951166713402697.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1902251868",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1902251868",
			"duration": "04:55"
		},
		{
			"title": "愈合",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2723322996",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2723322996",
			"duration": "05:29"
		},
		{
			"title": "披星戴月的想你",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/NHOypDpCMWUSmGGdA2lXGQ==/109951163608032298.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1317457805",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1317457805",
			"duration": "05:49"
		},
		{
			"title": "法兰西多士",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368753797",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368753797",
			"duration": "04:14"
		},
		{
			"title": "爱在夏天",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/ULodaeLSIk_NROrzamvXxw==/109951168110827116.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=563563366",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=563563366",
			"duration": "06:20"
		},
		{
			"title": "明天会更好 (Live版)",
			"artist": "胡德夫 / 张信哲 / 那英 / 莫文蔚 / 何炅 / 杨宗纬 / 阿雅 / 张韶涵 / 魏如萱 / 张杰 / 华晨宇 / 马嘉祺 / 告五人",
			"cover": "https://p2.music.126.net/PvCGnfEjm5O-16VDrqiNfw==/109951168652391588.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2052368104",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2052368104",
			"duration": "05:15"
		},
		{
			"title": "丑人多作怪",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807796549",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796549",
			"duration": "04:17"
		},
		{
			"title": "红",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368756097",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368756097",
			"duration": "04:29"
		},
		{
			"title": "一念之间",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2022069284",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2022069284",
			"duration": "04:47"
		},
		{
			"title": "从未见过的海",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/QCkA3IMur2QPB7fBslSG7Q==/109951170127165426.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2644183063",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2644183063",
			"duration": "05:01"
		},
		{
			"title": "新世界",
			"artist": "告五人 / 阿爆",
			"cover": "https://p2.music.126.net/KlgR1M1CedL44arSoCBvWg==/109951165247269075.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1472090563",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1472090563",
			"duration": "03:57"
		},
		{
			"title": "与海无关",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807799506",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807799506",
			"duration": "04:05"
		},
		{
			"title": "为爱痴狂 (Live版)",
			"artist": "张靓颖 / 告五人",
			"cover": "https://p2.music.126.net/xz8cTa3K6LQFmp7Q8cNZIg==/109951168680953856.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2056170681",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2056170681",
			"duration": "04:49"
		},
		{
			"title": "爱在夏天-盛夏之约",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/qJrWTbJaiYSBB7TiDtQy1g==/109951166538122376.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1888407050",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1888407050",
			"duration": "06:24"
		},
		{
			"title": "在这座城市遗失了你",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807799504",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807799504",
			"duration": "05:57"
		},
		{
			"title": "WEWE",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807796550",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796550",
			"duration": "03:48"
		},
		{
			"title": "寂寞留白",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/dEGpD8qCaA9URIEa5WEQSQ==/109951170330494512.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1892514735",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1892514735",
			"duration": "04:22"
		},
		{
			"title": "从没去过巴塞隆纳",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368754724",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754724",
			"duration": "04:33"
		},
		{
			"title": "在未来的你跟我说声嗨",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/43RBalJqy0bzTVRh-vtYeQ==/109951167974941367.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1990179959",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1990179959",
			"duration": "04:31"
		},
		{
			"title": "倒带（Live版）",
			"artist": "希林娜依高 / 告五人",
			"cover": "https://p2.music.126.net/bxMKtc9vBLT-WFwuG0ya5A==/109951168667081237.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2054190758",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2054190758",
			"duration": "04:08"
		},
		{
			"title": "如果我们不曾相遇 (Live版)",
			"artist": "王源 / 告五人",
			"cover": "https://p2.music.126.net/xjG5FWzssqblkqnrq1BQYA==/109951171361951004.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2719648966",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2719648966",
			"duration": "02:47"
		},
		{
			"title": "又到天黑",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/POvc5YLqLHIwJ9jw1Hqizw==/109951168245195477.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2015647807",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2015647807",
			"duration": "04:50"
		},
		{
			"title": "开往早晨的午夜 (Live版)",
			"artist": "胡彦斌 / 告五人",
			"cover": "https://p2.music.126.net/yG_0PsxZWDDXQ3p1JNUUHQ==/109951168692047003.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2057718119",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2057718119",
			"duration": "04:50"
		},
		{
			"title": "夜里无星",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368754722",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754722",
			"duration": "05:28"
		},
		{
			"title": "同样一个你",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1807796551",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796551",
			"duration": "04:31"
		},
		{
			"title": "就说你想说的",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/TqXG5qUH4eydADCIj4a93Q==/109951170035412550.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2635596825",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2635596825",
			"duration": "05:50"
		},
		{
			"title": "不具名的花",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368754746",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754746",
			"duration": "05:39"
		},
		{
			"title": "说我爱你的一百种方式",
			"artist": "与少年他 / 告五人",
			"cover": "https://p2.music.126.net/faUeDhtc9M79ztkHKD3QoQ==/109951164931040864.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1442773498",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1442773498",
			"duration": "04:31"
		},
		{
			"title": "爱 (Live版)",
			"artist": "王赫野 / 告五人",
			"cover": "https://p2.music.126.net/9c8-dJORfACNw1HpFIK5Qg==/109951171331630100.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2717169746",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2717169746",
			"duration": "03:39"
		},
		{
			"title": "我以为你不会出现",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/i928-hIdPinzbW1p00sThQ==/109951167429598505.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1948145018",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1948145018",
			"duration": "05:46"
		},
		{
			"title": "女孩 (Live版)",
			"artist": "告五人 / 吉克隽逸",
			"cover": "https://p2.music.126.net/aSHcPfr8pHjF4bigM2PlEg==/109951168735281965.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2063468929",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2063468929",
			"duration": "05:42"
		},
		{
			"title": "将错就对",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2723327157",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2723327157",
			"duration": "04:29"
		},
		{
			"title": "独角兽",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/hTfEeER_YfHLb_2RvtrXrQ==/109951168110801977.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=511920319",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=511920319",
			"duration": "06:39"
		},
		{
			"title": "鹰",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2723327160",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2723327160",
			"duration": "04:59"
		},
		{
			"title": "温蒂公主的侍卫+爱人错过 (Live版)",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/6kp_Q0ZeczFVI2GRRBiKTg==/109951168692019199.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2057712997",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2057712997",
			"duration": "08:54"
		},
		{
			"title": "在凌晨睡着的自己",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/2hpO_fHBK98PRs8H4h179Q==/109951168189459708.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2010289317",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2010289317",
			"duration": "04:40"
		},
		{
			"title": "跳海",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368754689",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754689",
			"duration": "04:49"
		},
		{
			"title": "简答题",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1368754754",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754754",
			"duration": "02:58"
		},
		{
			"title": "不摇滚 (feat. 告五人)",
			"artist": "八三夭 / 告五人",
			"cover": "https://p2.music.126.net/NnNgJbwl3PeVcCyQVpoijA==/109951166459446375.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=1881684470",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=1881684470",
			"duration": "04:51"
		},
		{
			"title": "远距离恋爱",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2022072827",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2022072827",
			"duration": "05:12"
		},
		{
			"title": "知足",
			"artist": "五月天 / 告五人",
			"cover": "https://p2.music.126.net/7rWFdO3eiw4NsyYbmMyjsw==/109951168536167356.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2037926385",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2037926385",
			"duration": "04:10"
		},
		{
			"title": "黑夜狂奔",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2723322998",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2723322998",
			"duration": "05:20"
		},
		{
			"title": "夏天的海冬天的雪",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2723327162",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2723327162",
			"duration": "03:40"
		},
		{
			"title": "我无法克制自己",
			"artist": "告五人",
			"cover": "https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg",
			"url": "https://meting.mikus.ink/api?server=netease&type=url&id=2022069283",
			"lrc": "https://meting.mikus.ink/api?server=netease&type=lrc&id=2022069283",
			"duration": "05:08"
		},
		{
			"artist": "周杰伦",
			"cover": "https://y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_5.jpg?max_age=2592000",
			"duration": "04:29",
			"lrc": "https://imgbed.904002.xyz/file/music/歌词/周杰伦/晴天.lrc",
			"title": "晴天",
			"url": "https://music1.904002.xyz/%E5%91%A8%E6%9D%B0%E4%BC%A6/晴天.flac"
		}
	],
	playlistCounts: {
		"17933567326": 55,
		"7039749142": 99,
		"7559655733": 39,
		"17966019560": 50,
		"zhoujielun": 1
	},
	playlistSongs: /* @__PURE__ */ JSON.parse("{\"17933567326\":[{\"title\":\"水仙十字安眠曲 A Narcissus Lullaby\",\"artist\":\"HOYO-MiX\",\"cover\":\"https://p1.music.126.net/vkLKNH2WpfYh4p4ACRRYOg==/109951169367650385.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2130083960\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2130083960\",\"duration\":\"02:03\"},{\"title\":\"小半\",\"artist\":\"陈粒\",\"cover\":\"https://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=421423806\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=421423806\",\"duration\":\"04:57\"},{\"title\":\"走马\",\"artist\":\"陈粒\",\"cover\":\"https://p1.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=30431367\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=30431367\",\"duration\":\"03:55\"},{\"title\":\"后来的我们\",\"artist\":\"五月天\",\"cover\":\"https://p1.music.126.net/lt4R_XbCZsT-yzRfWs9VfQ==/3434874331529456.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=422104138\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=422104138\",\"duration\":\"05:46\"},{\"title\":\"夜车\",\"artist\":\"曾轶可\",\"cover\":\"https://p1.music.126.net/s7Cn8bl21KY7kGiBWMdaFg==/109951163105666561.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=340376\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=340376\",\"duration\":\"03:11\"},{\"title\":\"后来\",\"artist\":\"刘若英\",\"cover\":\"https://p1.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=254574\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=254574\",\"duration\":\"05:41\"},{\"title\":\"喜欢\",\"artist\":\"阿肆\",\"cover\":\"https://p1.music.126.net/OOJzEuUh90krY_PHXeWE7Q==/109951173049150195.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=526464145\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=526464145\",\"duration\":\"04:10\"},{\"title\":\"STYX HELIX\",\"artist\":\"MYTH & ROID\",\"cover\":\"https://p1.music.126.net/XNabazarlJpjl8yl4tuCfg==/109951171350916152.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=413961906\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=413961906\",\"duration\":\"04:51\"},{\"title\":\"Brave Shine\",\"artist\":\"Aimer\",\"cover\":\"https://p1.music.126.net/IX2EItaOWNbnY9fO7Tm2CQ==/109951168080741423.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=32358691\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=32358691\",\"duration\":\"03:53\"},{\"title\":\"最佳损友\",\"artist\":\"陈奕迅\",\"cover\":\"https://p1.music.126.net/3mi073axgjg-g-79ObwwEQ==/109951171836582062.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=65800\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=65800\",\"duration\":\"03:53\"},{\"title\":\"女孩\",\"artist\":\"韦礼安\",\"cover\":\"https://p1.music.126.net/s0AgmipqlXTW-r6YmiwNQg==/109951168079643579.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=32358362\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=32358362\",\"duration\":\"05:06\"},{\"title\":\"我们俩\",\"artist\":\"郭顶\",\"cover\":\"https://p1.music.126.net/Zxb_k2LI77GLmXGg-k2r0g==/109951170514277229.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=85571\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=85571\",\"duration\":\"03:13\"},{\"title\":\"海阔天空\",\"artist\":\"Beyond\",\"cover\":\"https://p1.music.126.net/q6cm6Pk70YArijk1_QDoEg==/109951163984013003.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1357375695\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1357375695\",\"duration\":\"03:59\"},{\"title\":\"多远都要在一起\",\"artist\":\"G.E.M.邓紫棋\",\"cover\":\"https://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=30612793\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=30612793\",\"duration\":\"03:36\"},{\"title\":\"逆光\",\"artist\":\"孙燕姿\",\"cover\":\"https://p1.music.126.net/wF25xzePLml5EGUWM2eInw==/109951173219336672.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=287057\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=287057\",\"duration\":\"04:54\"},{\"title\":\"又是艳阳天\",\"artist\":\"郭静 / 韦礼安\",\"cover\":\"https://p1.music.126.net/TDmpu8EMlt4UHaJuCFgTfQ==/109951167430325186.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=233846\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=233846\",\"duration\":\"04:42\"},{\"title\":\"3 Strikes\",\"artist\":\"Terror Jr\",\"cover\":\"https://p1.music.126.net/iFZF7le6cQX_DpPY-udPoQ==/109951164000556824.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=409647388\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=409647388\",\"duration\":\"02:55\"},{\"title\":\"Beautiful World (Da Capo Version)\",\"artist\":\"宇多田ヒカル\",\"cover\":\"https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1824020873\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1824020873\",\"duration\":\"05:58\"},{\"title\":\"找自己\",\"artist\":\"陶喆\",\"cover\":\"https://p1.music.126.net/tMQXBMTy8pGjGggX1j0YNQ==/109951169389595068.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=150617\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=150617\",\"duration\":\"05:04\"},{\"title\":\"普通朋友\",\"artist\":\"陶喆\",\"cover\":\"https://p1.music.126.net/tMQXBMTy8pGjGggX1j0YNQ==/109951169389595068.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=150623\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=150623\",\"duration\":\"04:15\"},{\"title\":\"Mr. \\\"Broken Heart\\\"\",\"artist\":\"松下優也\",\"cover\":\"https://p1.music.126.net/_wjX4Lq_dPNCllJX-r6FQg==/109951166201250148.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=26089264\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=26089264\",\"duration\":\"03:38\"},{\"title\":\"打上花火\",\"artist\":\"Daoko / 米津玄師\",\"cover\":\"https://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=496869422\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=496869422\",\"duration\":\"04:49\"},{\"title\":\"唯一\",\"artist\":\"G.E.M.邓紫棋\",\"cover\":\"https://p1.music.126.net/aJWtwvdYRXvKUpAE2C6NoA==/109951168919708423.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2083785152\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2083785152\",\"duration\":\"04:13\"},{\"title\":\"老人と海\",\"artist\":\"ヨルシカ\",\"cover\":\"https://p1.music.126.net/5aHcGADR5i6biE5TSqf_aQ==/109951166295171725.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1870469768\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1870469768\",\"duration\":\"04:15\"},{\"title\":\"出现又离开 (Live)\",\"artist\":\"梁博\",\"cover\":\"https://p1.music.126.net/mAV2OH6nPJd4XLwn80kwpA==/109951164054054313.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1363553440\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1363553440\",\"duration\":\"06:43\"},{\"title\":\"知我\",\"artist\":\"国风堂 / 哦漏\",\"cover\":\"https://p1.music.126.net/_etyUh1ofScyTMFArsJXWg==/109951164415301539.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1394167216\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1394167216\",\"duration\":\"04:37\"},{\"title\":\"炎\",\"artist\":\"LiSA\",\"cover\":\"https://p1.music.126.net/Gn6tQvWXV58ptueWaOEZuQ==/109951165349903788.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1482908655\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1482908655\",\"duration\":\"04:34\"},{\"title\":\"Reze\",\"artist\":\"kensuke ushio\",\"cover\":\"https://p1.music.126.net/K92rwNNNgmJpgyhVxS-8ig==/109951172035133051.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2747726111\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2747726111\",\"duration\":\"01:14\"},{\"title\":\"フィナーレ。\",\"artist\":\"eill\",\"cover\":\"https://p1.music.126.net/elOSlLUcyPt_fqdluhSBBA==/109951167783001594.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1972395036\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1972395036\",\"duration\":\"04:02\"},{\"title\":\"SPECIALZ\",\"artist\":\"King Gnu\",\"cover\":\"https://p1.music.126.net/LielQw8AQQDLGQwj-xhOjA==/109951168848035270.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2074163984\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2074163984\",\"duration\":\"03:59\"},{\"title\":\"AIZO\",\"artist\":\"King Gnu\",\"cover\":\"https://p1.music.126.net/3HQLa_W5Y0x1vnO3SQ5vuQ==/109951172559097545.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=3337367763\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=3337367763\",\"duration\":\"03:35\"},{\"title\":\"in the pool\",\"artist\":\"kensuke ushio\",\"cover\":\"https://p1.music.126.net/K92rwNNNgmJpgyhVxS-8ig==/109951172035133051.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2747726104\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2747726104\",\"duration\":\"04:05\"},{\"title\":\"IRIS OUT\",\"artist\":\"米津玄師\",\"cover\":\"https://p1.music.126.net/X9wPjRlR4H39vjJtAzVA9Q==/109951171998034780.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2745026895\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2745026895\",\"duration\":\"02:31\"},{\"title\":\"JANE DOE\",\"artist\":\"米津玄師 / 宇多田ヒカル\",\"cover\":\"https://p1.music.126.net/z8vkaskRIKrLhTZ0zrqzDg==/109951172028084335.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2747166493\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2747166493\",\"duration\":\"03:56\"},{\"title\":\"Departures〜あなたにおくるアイの歌〜\",\"artist\":\"EGOIST\",\"cover\":\"https://p1.music.126.net/RU7zCEyeZMH7ZYk6xcm19w==/109951165946393227.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=722928\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=722928\",\"duration\":\"04:15\"},{\"title\":\"轻涟 La vaguelette\",\"artist\":\"HOYO-MiX\",\"cover\":\"https://p1.music.126.net/I-cw5yaq4Pz0EL2dZAmq1g==/109951169058808374.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2100334024\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2100334024\",\"duration\":\"02:29\"},{\"title\":\"unravel\",\"artist\":\"TK from 凛として時雨\",\"cover\":\"https://p1.music.126.net/FDOGd6uW4RUDuAq6fKvnmw==/109951169033080950.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=29017078\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=29017078\",\"duration\":\"04:00\"},{\"title\":\"Love Story\",\"artist\":\"Taylor Swift\",\"cover\":\"https://p1.music.126.net/GZERNplXUdzTPkKqo2F4tA==/109951169217536854.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=19292984\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=19292984\",\"duration\":\"03:56\"},{\"title\":\"爱情讯息\",\"artist\":\"郭静\",\"cover\":\"https://p1.music.126.net/-ccXZvLLbvLQc99YEbylUA==/109951171316025348.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=233888\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=233888\",\"duration\":\"04:40\"},{\"title\":\"遇见\",\"artist\":\"孙燕姿\",\"cover\":\"https://p1.music.126.net/KZ0VfIoFYsxpjz9sTQuLVQ==/17687843556430013.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=454828887\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=454828887\",\"duration\":\"03:29\"},{\"title\":\"我怀念的\",\"artist\":\"孙燕姿\",\"cover\":\"https://p1.music.126.net/wF25xzePLml5EGUWM2eInw==/109951173219336672.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=287063\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=287063\",\"duration\":\"04:49\"},{\"title\":\"Call of Silence\",\"artist\":\"澤野弘之 / R!N/Gemie\",\"cover\":\"https://p1.music.126.net/nRuQt_bbbiQ70CxwXUHXOQ==/109951163597044887.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=482636090\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=482636090\",\"duration\":\"02:58\"},{\"title\":\"可惜没如果\",\"artist\":\"林俊杰\",\"cover\":\"https://p1.music.126.net/2e__sKuIQsTSVVGr5Hk1FA==/109951170313536564.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=29814898\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=29814898\",\"duration\":\"04:58\"},{\"title\":\"恋人\",\"artist\":\"李荣浩\",\"cover\":\"https://p1.music.126.net/0bk3Iqe2OZGBH2Iuyx7RzA==/109951170045577565.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2600493765\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2600493765\",\"duration\":\"04:35\"},{\"title\":\"HIS SMILE\",\"artist\":\"麗美\",\"cover\":\"https://p1.music.126.net/k1w34BBPp23lXyijkMPqLQ==/109951170456532964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=22712631\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=22712631\",\"duration\":\"04:56\"},{\"title\":\"特别的人\",\"artist\":\"方大同\",\"cover\":\"https://p1.music.126.net/3Y0A55OzEnqKNiH5ODA54A==/109951172683046522.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=28403111\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=28403111\",\"duration\":\"04:19\"},{\"title\":\"心墙\",\"artist\":\"郭静\",\"cover\":\"https://p1.music.126.net/twmbtfq2KVsIwmpJ8aTfRQ==/109951168105390425.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=27671269\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=27671269\",\"duration\":\"03:47\"},{\"title\":\"from the edge\",\"artist\":\"FictionJunction / LiSA\",\"cover\":\"https://p1.music.126.net/n_vw2vd7IFN2y_D7-RIH3Q==/109951171371865924.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1388181876\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1388181876\",\"duration\":\"04:38\"},{\"title\":\"残酷な夜に輝け - Shine in the Cruel Night\",\"artist\":\"LiSA\",\"cover\":\"https://p1.music.126.net/biQgZKsNO_Vh-FeuKXso6A==/109951171480745508.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2727103261\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2727103261\",\"duration\":\"06:23\"},{\"title\":\"紅蓮華\",\"artist\":\"LiSA\",\"cover\":\"https://p1.music.126.net/JvremjkFs3cvGOFTetujHg==/109951169169579096.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1375305989\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1375305989\",\"duration\":\"03:56\"},{\"title\":\"太陽が昇らない世界 - A World Where the Sun Never Rises\",\"artist\":\"Aimer\",\"cover\":\"https://p1.music.126.net/gGaYHT571-HXXwoQKNbs3g==/109951171480735948.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2727103300\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2727103300\",\"duration\":\"02:50\"},{\"title\":\"To the Infinity Castle - Muzan vs Hashira Theme (from \\\"Demon Slayer\\\") (Cover)\",\"artist\":\"Diego Mitre\",\"cover\":\"https://p1.music.126.net/3VXjKtTkaWmzOaGuaK0Xlg==/109951169741328857.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2604036163\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2604036163\",\"duration\":\"05:05\"},{\"title\":\"Style\",\"artist\":\"Taylor Swift\",\"cover\":\"https://p1.music.126.net/3KDqQ9XW2Khj5Ia4tRqAAw==/18771962022688349.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=29572502\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=29572502\",\"duration\":\"03:51\"},{\"title\":\"One Last Kiss\",\"artist\":\"宇多田ヒカル\",\"cover\":\"https://p1.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1824020871\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1824020871\",\"duration\":\"04:12\"},{\"title\":\"鳥の詩\",\"artist\":\"Lia\",\"cover\":\"https://p1.music.126.net/xzm2HOT5DpobOk73OhE9QQ==/109951170627348480.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=28151022\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=28151022\",\"duration\":\"06:09\"}],\"7039749142\":[{\"title\":\"晴天\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0039MnYb0qxYhV\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0039MnYb0qxYhV\",\"duration\":\"04:29\"},{\"title\":\"告白气球\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003OUlho2HcRHC\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003OUlho2HcRHC\",\"duration\":\"03:35\"},{\"title\":\"稻香\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003aAYrm3GE0Ac\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003aAYrm3GE0Ac\",\"duration\":\"03:43\"},{\"title\":\"等你下课 (with 杨瑞代)\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001J5QJL1pRQYB\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001J5QJL1pRQYB\",\"duration\":\"04:30\"},{\"title\":\"七里香\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004Z8Ihr0JIu5s\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004Z8Ihr0JIu5s\",\"duration\":\"04:59\"},{\"title\":\"青花瓷\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002qU5aY3Qu24y\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002qU5aY3Qu24y\",\"duration\":\"03:59\"},{\"title\":\"不能说的秘密\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001UP7mW458ipG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002MXZNu1GToOk\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002MXZNu1GToOk\",\"duration\":\"04:56\"},{\"title\":\"一路向北\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002MAeob3zLXwZ.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001xd0HI0X9GNq\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001xd0HI0X9GNq\",\"duration\":\"04:54\"},{\"title\":\"夜曲\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001zMQr71F1Qo8\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001zMQr71F1Qo8\",\"duration\":\"03:46\"},{\"title\":\"彩虹\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004bRWFg3fej9y\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004bRWFg3fej9y\",\"duration\":\"04:23\"},{\"title\":\"简单爱\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0009BCJK1nRaad\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0009BCJK1nRaad\",\"duration\":\"04:30\"},{\"title\":\"搁浅\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001Bbywq2gicae\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Bbywq2gicae\",\"duration\":\"04:00\"},{\"title\":\"听妈妈的话\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002hXDfk0LX9KO\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002hXDfk0LX9KO\",\"duration\":\"04:25\"},{\"title\":\"安静\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000amRvH3wxv56\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000amRvH3wxv56\",\"duration\":\"05:34\"},{\"title\":\"说好的幸福呢\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0042QMDR1VzSsx\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0042QMDR1VzSsx\",\"duration\":\"04:16\"},{\"title\":\"给我一首歌的时间\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004BhQke4adHcf\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004BhQke4adHcf\",\"duration\":\"04:13\"},{\"title\":\"退后\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001L1lqm4UAdyo\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001L1lqm4UAdyo\",\"duration\":\"04:21\"},{\"title\":\"蒲公英的约定\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004Yi5BD3ksoAN\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004Yi5BD3ksoAN\",\"duration\":\"04:07\"},{\"title\":\"最长的电影\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003ZrdgZ0UnjDl\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003ZrdgZ0UnjDl\",\"duration\":\"03:55\"},{\"title\":\"烟花易冷\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004emQMs09Z1lz\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004emQMs09Z1lz\",\"duration\":\"04:23\"},{\"title\":\"算什么男人\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001Js78a40BZU6\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Js78a40BZU6\",\"duration\":\"04:48\"},{\"title\":\"发如雪\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0027oMO61wWi55\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0027oMO61wWi55\",\"duration\":\"04:59\"},{\"title\":\"以父之名\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001n4C3p1yv0FU\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001n4C3p1yv0FU\",\"duration\":\"05:42\"},{\"title\":\"花海\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003cI52o4daJJL\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003cI52o4daJJL\",\"duration\":\"04:24\"},{\"title\":\"甜甜的\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000xdZuV2LcQ19\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000xdZuV2LcQ19\",\"duration\":\"04:03\"},{\"title\":\"轨迹\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0036g6g628i2gI\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0036g6g628i2gI\",\"duration\":\"05:26\"},{\"title\":\"半岛铁盒\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002OKIox28ad9a\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002OKIox28ad9a\",\"duration\":\"05:19\"},{\"title\":\"我不配\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001T3JAT15palI\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001T3JAT15palI\",\"duration\":\"04:48\"},{\"title\":\"明明就\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000oW8J53xPhZA\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000oW8J53xPhZA\",\"duration\":\"04:20\"},{\"title\":\"不该 (with aMEI)\",\"artist\":\"周杰伦 / 张惠妹\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000sxzol11raSd\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000sxzol11raSd\",\"duration\":\"04:51\"},{\"title\":\"开不了口\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0020qX4u2JJRxK\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0020qX4u2JJRxK\",\"duration\":\"04:44\"},{\"title\":\"东风破\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003uEbEr0jcW7c\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003uEbEr0jcW7c\",\"duration\":\"05:15\"},{\"title\":\"Mine Mine\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003KNcyk0t3mwg.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002CUU2B3WuGLc\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002CUU2B3WuGLc\",\"duration\":\"04:28\"},{\"title\":\"黑色毛衣\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003iY6cU4YG0xi\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003iY6cU4YG0xi\",\"duration\":\"04:12\"},{\"title\":\"龙卷风\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002l8JN71d2Dxy\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002l8JN71d2Dxy\",\"duration\":\"04:10\"},{\"title\":\"枫\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003KtYhg4frNXC\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003KtYhg4frNXC\",\"duration\":\"04:35\"},{\"title\":\"星晴\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001Zi7Ly4ZtVQk\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Zi7Ly4ZtVQk\",\"duration\":\"04:19\"},{\"title\":\"爱在西元前\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002usg9o4GTAKf\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002usg9o4GTAKf\",\"duration\":\"03:54\"},{\"title\":\"红尘客栈\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003xv4w313tZHV\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003xv4w313tZHV\",\"duration\":\"04:34\"},{\"title\":\"珊瑚海\",\"artist\":\"周杰伦 / Lara梁心颐\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001K0AjL2huSxx\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001K0AjL2huSxx\",\"duration\":\"04:15\"},{\"title\":\"不爱我就拉倒\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001CnPE31iJ899.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0031TAKo0095np\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0031TAKo0095np\",\"duration\":\"04:05\"},{\"title\":\"回到过去\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003rxgIM2eOFSF\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003rxgIM2eOFSF\",\"duration\":\"03:53\"},{\"title\":\"园游会\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003nEQHr3Ceet5\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003nEQHr3Ceet5\",\"duration\":\"04:15\"},{\"title\":\"借口\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002XWgfo0IKPOH\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002XWgfo0IKPOH\",\"duration\":\"04:20\"},{\"title\":\"夜的第七章\",\"artist\":\"周杰伦 / 潘儿\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0010ibBn4bYFTk\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0010ibBn4bYFTk\",\"duration\":\"03:48\"},{\"title\":\"手写的从前\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002u8ZOM4C7QF4\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002u8ZOM4C7QF4\",\"duration\":\"04:57\"},{\"title\":\"菊花台\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004RUiXu49ufy1\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004RUiXu49ufy1\",\"duration\":\"04:53\"},{\"title\":\"断了的弦\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003ZdxP61ClQZ5\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003ZdxP61ClQZ5\",\"duration\":\"04:57\"},{\"title\":\"说了再见\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=00265Jxe3JzXOJ\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=00265Jxe3JzXOJ\",\"duration\":\"04:42\"},{\"title\":\"可爱女人\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004VR0Hn3bkqqE\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004VR0Hn3bkqqE\",\"duration\":\"03:59\"},{\"title\":\"暗号\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000NQDjk4BA0W3\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000NQDjk4BA0W3\",\"duration\":\"04:31\"},{\"title\":\"霍元甲\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000OixvE1YjIqd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002HeqcH2GMiOL\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002HeqcH2GMiOL\",\"duration\":\"04:38\"},{\"title\":\"听见下雨的声音\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0026N9sT4aBGcV\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0026N9sT4aBGcV\",\"duration\":\"04:39\"},{\"title\":\"你听得到\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002elTc93yuXu2\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002elTc93yuXu2\",\"duration\":\"03:50\"},{\"title\":\"爱情废柴\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000eskGX0ijIFi\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000eskGX0ijIFi\",\"duration\":\"04:45\"},{\"title\":\"兰亭序\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=00128N3r2SYKMF\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=00128N3r2SYKMF\",\"duration\":\"04:13\"},{\"title\":\"本草纲目\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001bo9Wy1NfHpb\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001bo9Wy1NfHpb\",\"duration\":\"03:29\"},{\"title\":\"千里之外\",\"artist\":\"周杰伦 / 费玉清\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003FRy0r0wyGHl\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003FRy0r0wyGHl\",\"duration\":\"04:16\"},{\"title\":\"一点点\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002lW4Yl3ylM02\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002lW4Yl3ylM02\",\"duration\":\"03:42\"},{\"title\":\"止战之殇\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0042fRqf4fC8ZB\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0042fRqf4fC8ZB\",\"duration\":\"04:34\"},{\"title\":\"黑色幽默\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0006rBfE3htPqG\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0006rBfE3htPqG\",\"duration\":\"04:43\"},{\"title\":\"她的睫毛\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001FSVRg08JLpi\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001FSVRg08JLpi\",\"duration\":\"03:52\"},{\"title\":\"白色风车\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000DdOAF0ED7i4\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000DdOAF0ED7i4\",\"duration\":\"04:32\"},{\"title\":\"超人不会飞\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004JQ70v4Fddyj\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004JQ70v4Fddyj\",\"duration\":\"05:00\"},{\"title\":\"浪漫手机\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002fi7iG0VvUj2\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002fi7iG0VvUj2\",\"duration\":\"04:00\"},{\"title\":\"阳光宅男\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001bnNGN127Kbq\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001bnNGN127Kbq\",\"duration\":\"03:42\"},{\"title\":\"飘移\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004DI5Vw0DnEOW\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004DI5Vw0DnEOW\",\"duration\":\"04:04\"},{\"title\":\"爷爷泡的茶\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002IyJxz0FBFEJ\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002IyJxz0FBFEJ\",\"duration\":\"04:00\"},{\"title\":\"双截棍\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=00218ObD0yrANX\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=00218ObD0yrANX\",\"duration\":\"03:21\"},{\"title\":\"外婆\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0027gHes1HjRNe\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0027gHes1HjRNe\",\"duration\":\"04:04\"},{\"title\":\"牛仔很忙\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003O5GaP1SYe94\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003O5GaP1SYe94\",\"duration\":\"02:48\"},{\"title\":\"最后的战役\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000HafPI0dzzwp\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000HafPI0dzzwp\",\"duration\":\"04:11\"},{\"title\":\"三年二班\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004csbVP1E2dv1\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004csbVP1E2dv1\",\"duration\":\"04:40\"},{\"title\":\"哪里都是你\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002sfzQB12abuc\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002sfzQB12abuc\",\"duration\":\"04:39\"},{\"title\":\"雨下一整晚\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002zouNc0L8Llg\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002zouNc0L8Llg\",\"duration\":\"04:16\"},{\"title\":\"半兽人\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001FUQiy2ZCiVt\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001FUQiy2ZCiVt\",\"duration\":\"04:07\"},{\"title\":\"迷迭香\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0016oRIN0hu5zE\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0016oRIN0hu5zE\",\"duration\":\"04:11\"},{\"title\":\"我落泪情绪零碎\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0022b7OX2STU86\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0022b7OX2STU86\",\"duration\":\"04:17\"},{\"title\":\"上海一九四三\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002YzCdA2Hybr0\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002YzCdA2Hybr0\",\"duration\":\"03:15\"},{\"title\":\"乌克丽丽\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001beoYX0K09xu\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001beoYX0K09xu\",\"duration\":\"02:55\"},{\"title\":\"心雨\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000Fylg7450RG2\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000Fylg7450RG2\",\"duration\":\"04:29\"},{\"title\":\"威廉古堡\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0046grpK0A1l9G\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0046grpK0A1l9G\",\"duration\":\"03:56\"},{\"title\":\"前世情人\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000cFsFl1o17jp\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000cFsFl1o17jp\",\"duration\":\"03:22\"},{\"title\":\"听爸爸的话\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003BiKB44LknC0\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003BiKB44LknC0\",\"duration\":\"04:23\"},{\"title\":\"爱情悬崖\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0037FWzg2csDmh\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0037FWzg2csDmh\",\"duration\":\"04:22\"},{\"title\":\"对不起\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000F0lmz1cBq4c\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000F0lmz1cBq4c\",\"duration\":\"03:45\"},{\"title\":\"四面楚歌\",\"artist\":\"周杰伦 / 林迈可\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0043qT5x2DnxaL\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0043qT5x2DnxaL\",\"duration\":\"04:08\"},{\"title\":\"床边故事\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002MVjb31ZNK5m\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002MVjb31ZNK5m\",\"duration\":\"03:45\"},{\"title\":\"美人鱼\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001XPgTm3faHRb\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001XPgTm3faHRb\",\"duration\":\"03:39\"},{\"title\":\"你好吗\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003KNcyk0t3mwg.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0040Dgn94YNWxA\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0040Dgn94YNWxA\",\"duration\":\"03:44\"},{\"title\":\"将军\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000yJtoB39k2NF\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000yJtoB39k2NF\",\"duration\":\"03:24\"},{\"title\":\"反方向的钟\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000f01724fd7TH.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0017K7gL4WYnw2\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0017K7gL4WYnw2\",\"duration\":\"04:18\"},{\"title\":\"画沙\",\"artist\":\"周杰伦 / 袁咏琳\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ldC3J1GUVlt.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004CaSbW3RSgDo\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004CaSbW3RSgDo\",\"duration\":\"04:29\"},{\"title\":\"忍者\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001MNqZU3YDLrE\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001MNqZU3YDLrE\",\"duration\":\"02:38\"},{\"title\":\"龙拳\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004R20x748kyO1\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004R20x748kyO1\",\"duration\":\"04:34\"},{\"title\":\"分裂\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002U3qIp3n7yke\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002U3qIp3n7yke\",\"duration\":\"04:14\"},{\"title\":\"爱的飞行日记\",\"artist\":\"周杰伦 / 杨瑞代\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003CxS6w14OQyM\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003CxS6w14OQyM\",\"duration\":\"04:15\"},{\"title\":\"鞋子特大号\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004KpNVr0EdY0v\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004KpNVr0EdY0v\",\"duration\":\"03:41\"},{\"title\":\"大笨钟\",\"artist\":\"周杰伦\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ow85E3pnoqi.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002jkBM53MLB9Q\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002jkBM53MLB9Q\",\"duration\":\"04:02\"}],\"7559655733\":[{\"title\":\"我们的歌\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000NqZLy2lfXjT\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000NqZLy2lfXjT\",\"duration\":\"04:07\"},{\"title\":\"需要人陪\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004AeIvh4ML0Bz\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004AeIvh4ML0Bz\",\"duration\":\"04:11\"},{\"title\":\"大城小爱\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004O1DHG4MjYOi\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004O1DHG4MjYOi\",\"duration\":\"03:44\"},{\"title\":\"缘分一道桥\",\"artist\":\"王力宏 / 谭维维\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001z1OuX41cBAx.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004NXwuk36ixAW\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004NXwuk36ixAW\",\"duration\":\"04:06\"},{\"title\":\"盖世英雄\",\"artist\":\"王力宏 / 欧阳靖 / 李岩\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004SYXvP2xM8b9\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004SYXvP2xM8b9\",\"duration\":\"03:38\"},{\"title\":\"依然爱你\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001fMFxM1tq1aI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001ucwE018fmRe\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001ucwE018fmRe\",\"duration\":\"04:06\"},{\"title\":\"爱一点\",\"artist\":\"王力宏 / 章子怡\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002HsogO0iKhf2\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002HsogO0iKhf2\",\"duration\":\"05:06\"},{\"title\":\"唯一\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000D1ceU2ibOvS.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0031tvqb2vMdXU\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0031tvqb2vMdXU\",\"duration\":\"04:22\"},{\"title\":\"改变自己\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002h62C40NbkWI\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002h62C40NbkWI\",\"duration\":\"03:14\"},{\"title\":\"花田错\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003BM7re120wtL\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003BM7re120wtL\",\"duration\":\"03:47\"},{\"title\":\"好心分手\",\"artist\":\"王力宏 / 卢巧音\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000032pucg2UepCT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003MTm6H1EknjX\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003MTm6H1EknjX\",\"duration\":\"03:00\"},{\"title\":\"在梅边\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000s565K2TIfGV\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000s565K2TIfGV\",\"duration\":\"04:36\"},{\"title\":\"你不知道的事\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004OhZs82CZXfA\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004OhZs82CZXfA\",\"duration\":\"04:38\"},{\"title\":\"爱的就是你\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000000D1ceU2ibOvS.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001r6hgU3tImQA\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001r6hgU3tImQA\",\"duration\":\"04:49\"},{\"title\":\"你是我心内的一首歌\",\"artist\":\"王力宏 / 任家萱Selina\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004JQlTM0tfMwD\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004JQlTM0tfMwD\",\"duration\":\"02:46\"},{\"title\":\"心跳\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004e7bDh0qe2bd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001Fk0YJ2hiNgC\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001Fk0YJ2hiNgC\",\"duration\":\"04:23\"},{\"title\":\"另一个天堂\",\"artist\":\"王力宏 / 张靓颖\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004e7bDh0qe2bd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002CAaOK30favb\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002CAaOK30favb\",\"duration\":\"04:26\"},{\"title\":\"春雨里洗过的太阳\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004e7bDh0qe2bd.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001ar7551jFB4G\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001ar7551jFB4G\",\"duration\":\"04:51\"},{\"title\":\"心中的日月\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0010pO163d2ozK\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0010pO163d2ozK\",\"duration\":\"03:57\"},{\"title\":\"一首简单的歌\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001TLHhS1bmDgO\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001TLHhS1bmDgO\",\"duration\":\"04:09\"},{\"title\":\"落叶归根\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003qRkRB0VMFkU\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003qRkRB0VMFkU\",\"duration\":\"05:13\"},{\"title\":\"美\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001g5e4D46VJRQ\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001g5e4D46VJRQ\",\"duration\":\"03:27\"},{\"title\":\"火力全开\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001fMFxM1tq1aI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=002R5ulo1HqrNj\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=002R5ulo1HqrNj\",\"duration\":\"04:28\"},{\"title\":\"你不在\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000004WhLzM1JvyIa.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001cpBXf0eFj6w\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001cpBXf0eFj6w\",\"duration\":\"04:33\"},{\"title\":\"爱错\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004fneUm24gD2c\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004fneUm24gD2c\",\"duration\":\"03:58\"},{\"title\":\"让我取暖\",\"artist\":\"王力宏 / 彭羚\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000032pucg2UepCT.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001kCf4c4YBU5F\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001kCf4c4YBU5F\",\"duration\":\"04:30\"},{\"title\":\"就是现在\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004FBEMN4XvBIn\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004FBEMN4XvBIn\",\"duration\":\"04:30\"},{\"title\":\"爱你等于爱自己\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001S4Kte2to1ou.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003CAdsr2zKjdX\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003CAdsr2zKjdX\",\"duration\":\"03:54\"},{\"title\":\"不可能错过你\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000029OK8X2o56Wr.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=004PUoRk1hcg2j\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=004PUoRk1hcg2j\",\"duration\":\"04:56\"},{\"title\":\"你的爱\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=003l2bu90JXofE\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=003l2bu90JXofE\",\"duration\":\"03:51\"},{\"title\":\"雪人\",\"artist\":\"王力宏 / 范晓萱\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002cGdoC3v5U2e.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000r8ihf4XMTQz\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000r8ihf4XMTQz\",\"duration\":\"04:45\"},{\"title\":\"伯牙绝弦\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002iWU6B2ZvA8V.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001eoT8k4HRQbB\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001eoT8k4HRQbB\",\"duration\":\"03:47\"},{\"title\":\"爱因为在心中\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001IMgVA2UgU2m\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001IMgVA2UgU2m\",\"duration\":\"04:20\"},{\"title\":\"十二生肖\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000021m02e36lE7N.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0039KZNs3R3N51\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0039KZNs3R3N51\",\"duration\":\"03:22\"},{\"title\":\"忘我\",\"artist\":\"王力宏 / Avicii\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M0000019rBkH0xdGVc.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=000HvI6m0sWQoG\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=000HvI6m0sWQoG\",\"duration\":\"04:59\"},{\"title\":\"不完整的旋律\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Zwh5p4HgecI.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001dZnuF4USEaf\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001dZnuF4USEaf\",\"duration\":\"04:07\"},{\"title\":\"星座\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ElVxf43rOue.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0049CxU30KSZKX\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0049CxU30KSZKX\",\"duration\":\"03:05\"},{\"title\":\"第一个清晨\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000001a0Dts37jw2M.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=001lKCRK4PTOK4\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=001lKCRK4PTOK4\",\"duration\":\"04:46\"},{\"title\":\"龙的传人\",\"artist\":\"王力宏\",\"cover\":\"https://y.gtimg.cn/music/photo_new/T002R300x300M000002a50FE1JHhpM.jpg\",\"url\":\"https://meting.mikus.ink/api?server=tencent&type=url&id=0015Bd1E1FaDug\",\"lrc\":\"https://meting.mikus.ink/api?server=tencent&type=lrc&id=0015Bd1E1FaDug\",\"duration\":\"04:41\"}],\"17966019560\":[{\"title\":\"我想要占据你\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2022072826\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2022072826\",\"duration\":\"04:12\"},{\"title\":\"给你一瓶魔法药水\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/W2mKDaDQegJg0ic0GOd2KQ==/109951169169063268.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1959667345\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1959667345\",\"duration\":\"04:18\"},{\"title\":\"唯一\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807799505\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807799505\",\"duration\":\"04:30\"},{\"title\":\"爱人错过\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368754688\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754688\",\"duration\":\"04:52\"},{\"title\":\"带我去找夜生活\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/lmCtt6-3fOPSdA1uwGCY5Q==/109951164567402626.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1410647903\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1410647903\",\"duration\":\"04:59\"},{\"title\":\"温蒂公主的侍卫\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807796555\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796555\",\"duration\":\"04:17\"},{\"title\":\"好不容易\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/w4tf-M6cGStcSrlJspIw_w==/109951166713402697.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1902251868\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1902251868\",\"duration\":\"04:55\"},{\"title\":\"愈合\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2723322996\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2723322996\",\"duration\":\"05:29\"},{\"title\":\"披星戴月的想你\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/NHOypDpCMWUSmGGdA2lXGQ==/109951163608032298.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1317457805\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1317457805\",\"duration\":\"05:49\"},{\"title\":\"法兰西多士\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368753797\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368753797\",\"duration\":\"04:14\"},{\"title\":\"爱在夏天\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/ULodaeLSIk_NROrzamvXxw==/109951168110827116.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=563563366\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=563563366\",\"duration\":\"06:20\"},{\"title\":\"明天会更好 (Live版)\",\"artist\":\"胡德夫 / 张信哲 / 那英 / 莫文蔚 / 何炅 / 杨宗纬 / 阿雅 / 张韶涵 / 魏如萱 / 张杰 / 华晨宇 / 马嘉祺 / 告五人\",\"cover\":\"https://p2.music.126.net/PvCGnfEjm5O-16VDrqiNfw==/109951168652391588.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2052368104\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2052368104\",\"duration\":\"05:15\"},{\"title\":\"丑人多作怪\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807796549\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796549\",\"duration\":\"04:17\"},{\"title\":\"红\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368756097\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368756097\",\"duration\":\"04:29\"},{\"title\":\"一念之间\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2022069284\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2022069284\",\"duration\":\"04:47\"},{\"title\":\"从未见过的海\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/QCkA3IMur2QPB7fBslSG7Q==/109951170127165426.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2644183063\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2644183063\",\"duration\":\"05:01\"},{\"title\":\"新世界\",\"artist\":\"告五人 / 阿爆\",\"cover\":\"https://p2.music.126.net/KlgR1M1CedL44arSoCBvWg==/109951165247269075.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1472090563\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1472090563\",\"duration\":\"03:57\"},{\"title\":\"与海无关\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807799506\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807799506\",\"duration\":\"04:05\"},{\"title\":\"为爱痴狂 (Live版)\",\"artist\":\"张靓颖 / 告五人\",\"cover\":\"https://p2.music.126.net/xz8cTa3K6LQFmp7Q8cNZIg==/109951168680953856.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2056170681\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2056170681\",\"duration\":\"04:49\"},{\"title\":\"爱在夏天-盛夏之约\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/qJrWTbJaiYSBB7TiDtQy1g==/109951166538122376.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1888407050\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1888407050\",\"duration\":\"06:24\"},{\"title\":\"在这座城市遗失了你\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807799504\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807799504\",\"duration\":\"05:57\"},{\"title\":\"WEWE\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807796550\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796550\",\"duration\":\"03:48\"},{\"title\":\"寂寞留白\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/dEGpD8qCaA9URIEa5WEQSQ==/109951170330494512.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1892514735\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1892514735\",\"duration\":\"04:22\"},{\"title\":\"从没去过巴塞隆纳\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368754724\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754724\",\"duration\":\"04:33\"},{\"title\":\"在未来的你跟我说声嗨\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/43RBalJqy0bzTVRh-vtYeQ==/109951167974941367.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1990179959\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1990179959\",\"duration\":\"04:31\"},{\"title\":\"倒带（Live版）\",\"artist\":\"希林娜依高 / 告五人\",\"cover\":\"https://p2.music.126.net/bxMKtc9vBLT-WFwuG0ya5A==/109951168667081237.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2054190758\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2054190758\",\"duration\":\"04:08\"},{\"title\":\"如果我们不曾相遇 (Live版)\",\"artist\":\"王源 / 告五人\",\"cover\":\"https://p2.music.126.net/xjG5FWzssqblkqnrq1BQYA==/109951171361951004.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2719648966\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2719648966\",\"duration\":\"02:47\"},{\"title\":\"又到天黑\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/POvc5YLqLHIwJ9jw1Hqizw==/109951168245195477.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2015647807\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2015647807\",\"duration\":\"04:50\"},{\"title\":\"开往早晨的午夜 (Live版)\",\"artist\":\"胡彦斌 / 告五人\",\"cover\":\"https://p2.music.126.net/yG_0PsxZWDDXQ3p1JNUUHQ==/109951168692047003.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2057718119\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2057718119\",\"duration\":\"04:50\"},{\"title\":\"夜里无星\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368754722\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754722\",\"duration\":\"05:28\"},{\"title\":\"同样一个你\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1807796551\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1807796551\",\"duration\":\"04:31\"},{\"title\":\"就说你想说的\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/TqXG5qUH4eydADCIj4a93Q==/109951170035412550.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2635596825\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2635596825\",\"duration\":\"05:50\"},{\"title\":\"不具名的花\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368754746\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754746\",\"duration\":\"05:39\"},{\"title\":\"说我爱你的一百种方式\",\"artist\":\"与少年他 / 告五人\",\"cover\":\"https://p2.music.126.net/faUeDhtc9M79ztkHKD3QoQ==/109951164931040864.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1442773498\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1442773498\",\"duration\":\"04:31\"},{\"title\":\"爱 (Live版)\",\"artist\":\"王赫野 / 告五人\",\"cover\":\"https://p2.music.126.net/9c8-dJORfACNw1HpFIK5Qg==/109951171331630100.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2717169746\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2717169746\",\"duration\":\"03:39\"},{\"title\":\"我以为你不会出现\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/i928-hIdPinzbW1p00sThQ==/109951167429598505.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1948145018\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1948145018\",\"duration\":\"05:46\"},{\"title\":\"女孩 (Live版)\",\"artist\":\"告五人 / 吉克隽逸\",\"cover\":\"https://p2.music.126.net/aSHcPfr8pHjF4bigM2PlEg==/109951168735281965.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2063468929\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2063468929\",\"duration\":\"05:42\"},{\"title\":\"将错就对\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2723327157\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2723327157\",\"duration\":\"04:29\"},{\"title\":\"独角兽\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/hTfEeER_YfHLb_2RvtrXrQ==/109951168110801977.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=511920319\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=511920319\",\"duration\":\"06:39\"},{\"title\":\"鹰\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2723327160\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2723327160\",\"duration\":\"04:59\"},{\"title\":\"温蒂公主的侍卫+爱人错过 (Live版)\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/6kp_Q0ZeczFVI2GRRBiKTg==/109951168692019199.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2057712997\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2057712997\",\"duration\":\"08:54\"},{\"title\":\"在凌晨睡着的自己\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/2hpO_fHBK98PRs8H4h179Q==/109951168189459708.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2010289317\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2010289317\",\"duration\":\"04:40\"},{\"title\":\"跳海\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368754689\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754689\",\"duration\":\"04:49\"},{\"title\":\"简答题\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1368754754\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1368754754\",\"duration\":\"02:58\"},{\"title\":\"不摇滚 (feat. 告五人)\",\"artist\":\"八三夭 / 告五人\",\"cover\":\"https://p2.music.126.net/NnNgJbwl3PeVcCyQVpoijA==/109951166459446375.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=1881684470\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=1881684470\",\"duration\":\"04:51\"},{\"title\":\"远距离恋爱\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2022072827\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2022072827\",\"duration\":\"05:12\"},{\"title\":\"知足\",\"artist\":\"五月天 / 告五人\",\"cover\":\"https://p2.music.126.net/7rWFdO3eiw4NsyYbmMyjsw==/109951168536167356.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2037926385\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2037926385\",\"duration\":\"04:10\"},{\"title\":\"黑夜狂奔\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2723322998\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2723322998\",\"duration\":\"05:20\"},{\"title\":\"夏天的海冬天的雪\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/HQTMgK76DUYVeSqD_8c_aA==/109951171415249187.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2723327162\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2723327162\",\"duration\":\"03:40\"},{\"title\":\"我无法克制自己\",\"artist\":\"告五人\",\"cover\":\"https://p2.music.126.net/PgcIr7Vv7J4N_OjYxQbo0g==/109951168306417191.jpg\",\"url\":\"https://meting.mikus.ink/api?server=netease&type=url&id=2022069283\",\"lrc\":\"https://meting.mikus.ink/api?server=netease&type=lrc&id=2022069283\",\"duration\":\"05:08\"}],\"zhoujielun\":[{\"artist\":\"周杰伦\",\"cover\":\"https://y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_5.jpg?max_age=2592000\",\"duration\":\"04:29\",\"lrc\":\"https://imgbed.904002.xyz/file/music/歌词/周杰伦/晴天.lrc\",\"title\":\"晴天\",\"url\":\"https://music1.904002.xyz/%E5%91%A8%E6%9D%B0%E4%BC%A6/晴天.flac\"}]}"),
	_urlFingerprint: "7a054bb3b761e36d230eb8801a6a7942c2016a909aa0c0f8bcbdf6b989d235e7",
	_configFingerprint: "57d4d8259edf9a665a80dc8de2a6f9344ae069c016d0696c4bd28606266fc952"
};
var musicList = Array.isArray(raw) ? raw : raw.songs || [];
var playlistCounts = Array.isArray(raw) ? {} : raw.playlistCounts || {};
var playlistSongs = Array.isArray(raw) ? {} : raw.playlistSongs || {};
//#endregion
//#region src/components/widgets/GlobalAudio.astro
var $$GlobalAudio = createComponent(($$result, $$props, $$slots) => {
	const initialPlaylist = JSON.stringify(musicList);
	const initialSong = musicList[0] || {};
	return renderTemplate`${maybeRenderHead($$result)}<div data-astro-transition-persist="ryuchan-global-audio-wrapper"><!-- 全局音频元素，持久化 --><audio id="global-audio-player"></audio><!-- 迷你播放器容器，只在非音乐页面显示 --><div id="mini-player-container" class="fixed bottom-8 left-8 z-[999] flex flex-col items-start gap-4 pointer-events-none opacity-0 transition-opacity duration-300"><!-- 展开的卡片 --><div id="mini-player-card" class="bg-neu-base/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-3xl shadow-neu-out border border-white/20 dark:border-white/10 w-64 translate-y-4 opacity-0 scale-95 transition-all duration-300 origin-bottom-left pointer-events-auto"><div class="flex gap-4"><div class="w-16 h-16 rounded-xl overflow-hidden shadow-md shrink-0"><img id="mini-cover"${addAttribute(initialSong.cover || "/favicon.svg", "src")} class="w-full h-full object-cover" alt="cover"></div><div class="flex flex-col justify-center min-w-0 flex-1"><h3 id="mini-title" class="font-bold text-neu-text text-sm truncate">${initialSong.title || "RyuChan"}</h3><p id="mini-artist" class="text-xs text-neu-text-muted truncate mt-1">${initialSong.artist || "Music"}</p></div></div><div class="flex justify-between items-center mt-4 px-4"><button id="mini-prev" class="text-neu-text-muted hover:text-neu-text transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg></button><button id="mini-play" class="w-14 h-14 rounded-full bg-neu-btn-bg text-neu-btn-text shadow-neu-out flex items-center justify-center hover:scale-105 transition-transform"><svg id="mini-icon-play" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 fill-current"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><svg id="mini-icon-pause" class="hidden fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg></button><button id="mini-next" class="text-neu-text-muted hover:text-neu-text transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg></button></div></div><!-- 悬浮圆形按钮 --><button id="mini-fab" class="w-16 h-16 rounded-full bg-neu-base/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md shadow-neu-out border border-white/20 dark:border-white/10 flex items-center justify-center relative overflow-hidden group pointer-events-auto transition-transform hover:scale-105 active:scale-95"><div class="absolute inset-0 rounded-full animate-spin-slow" id="mini-fab-spin" style="animation-play-state: paused;"><img id="mini-fab-cover"${addAttribute(initialSong.cover || "/favicon.svg", "src")} class="w-full h-full object-cover opacity-60" alt="fab-cover"></div><!-- Center Icon --><div class="relative z-10 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white"><div class="w-3.5 h-3.5 flex gap-0.5 items-end justify-center group-hover:hidden" id="mini-fab-visualizer"><div class="w-0.5 bg-white h-1.5 rounded-full transition-all duration-300"></div><div class="w-0.5 bg-white h-3 rounded-full transition-all duration-300"></div><div class="w-0.5 bg-white h-2 rounded-full transition-all duration-300"></div><div class="w-0.5 bg-white h-2.5 rounded-full transition-all duration-300"></div></div><!-- Play/Pause Icons (Shown on Hover) --><div id="mini-fab-controls" class="hidden group-hover:flex items-center justify-center w-full h-full"><svg id="mini-fab-icon-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 fill-current ml-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><svg id="mini-fab-icon-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 fill-current hidden"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg></div></div></button></div></div><script>(function(){${defineScriptVars({ initialPlaylist })}
    class GlobalMusicPlayer {
        constructor() {
            // First time init: assume elements are present
            this.playlist = JSON.parse(initialPlaylist);
            this.currentIndex = 0;
            this.isPlaying = false;
            this.isShuffle = false;
            // 'all' = Loop All (Sequential), 'one' = Loop One, 'off' = No Loop (Stop at end)
            this.repeatMode = 'all'; 
            this.lyrics = [];
            this.lrcUrl = "";
            this.lastActiveIndex = -1;
            this.isMiniOpen = false;
            this.hasBoundDocumentClick = false;
            this.closeTimer = null;
            this.isDraggingProgress = false;
            this.isDraggingVolume = false;
            this.playlistCounts = {};
            this.playlistSongs = {};
            this.activePlaylistId = 'all';
            this.playlistSearchQuery = '';

            // Initial binding
            this.handlePageLoad();

            // Load initial song if needed
            if (this.playlist.length > 0 && this.audio && !this.audio.src) {
               this.loadSong(0, false);
            }
            
            // Listen for future navigations
            document.addEventListener('astro:page-load', () => this.handlePageLoad());
        }

        handlePageLoad() {
            // Re-acquire all DOM references to handle persistence failures or DOM updates
            this.bindGlobalAudioEvents();
            this.bindMiniPlayerEvents();
            
            // Check for Main Player widget
            this.container = document.querySelector('.music-player-widget');
            if (this.container) {
                // Bind Main Player UI
                this.playBtn = document.getElementById('play-btn');
                this.prevBtn = document.getElementById('prev-btn');
                this.nextBtn = document.getElementById('next-btn');
                this.shuffleBtn = document.getElementById('shuffle-btn');
                this.repeatBtn = document.getElementById('repeat-btn');
                this.iconPlay = document.getElementById('icon-play');
                this.iconPause = document.getElementById('icon-pause');
                this.recordOuter = document.getElementById('record-outer');
                this.recordInner = document.getElementById('record-inner');
                this.needle = document.getElementById('player-needle');
                this.statusDot = document.getElementById('player-status-dot');
                this.statusText = document.getElementById('player-status-text');
                this.currentTimeEl = document.getElementById('current-time');
                this.totalTimeEl = document.getElementById('total-time');
                this.progressBar = document.getElementById('progress-bar');
                this.progressContainer = document.getElementById('progress-container');
                this.lyricsContainer = document.getElementById('lyrics-container');
                this.volumeControl = document.getElementById('volume-control');
                this.volumeBar = document.getElementById('volume-bar');
                this.btnPlaylist = document.getElementById('btn-show-playlist');
                this.btnLyrics = document.getElementById('btn-show-lyrics');
                this.playlistContainer = document.getElementById('playlist-container');
                this.playlistSearchInput = document.getElementById('playlist-search-input');
                this.playlistEmptyState = document.getElementById('playlist-empty-state');
                this.playerTitle = document.getElementById('player-title');
                this.playerArtist = document.getElementById('player-artist');
                this.bgCover = document.getElementById('player-bg-cover');
                this.playerCover = document.getElementById('player-cover');
                
                this.bindUIEvents();
                // If we have lyrics loaded in memory, render them
                if (this.lyrics.length > 0 && this.lyricsContainer) {
                     this.renderLyrics();
                     this.syncLyrics(this.audio ? this.audio.currentTime : 0);
                } else if(this.lrcUrl) {
                    this.loadLyrics();
                }
                
                // Load static per-playlist songs from build-time data
                const playlistSongsAttr = this.container?.dataset?.playlistSongs;
                if (playlistSongsAttr) {
                    try { this.playlistSongs = JSON.parse(playlistSongsAttr); } catch(e) {}
                }

                this.updatePlaylistDurations();
                this.bindPlaylistEvents();
                this.bindPlaylistSearchEvents();
                this.applyPlaylistSearch();

                // Restore previously selected playlist highlight
                if (this.activePlaylistId) {
                    this.highlightPlaylistEntry(this.activePlaylistId);
                }
            }

            // Sync playback status with audio element
            if (this.audio && !this.audio.paused) {
                 this.isPlaying = true;
            }

            // Update UI State (syncs both Mini and Main players)
            this.updateUI();

            // Handle Mini Player Visibility
            const path = window.location.pathname;
            const isMusicPage = path.includes('/music');
            
            if (this.miniContainer) {
                if (isMusicPage) {
                    this.miniContainer.classList.add('opacity-0', 'hidden');
                    this.miniContainer.classList.remove('opacity-100');
                    this.closeMiniPlayer();
                } else {
                    this.miniContainer.classList.remove('opacity-0', 'hidden');
                    this.miniContainer.classList.add('opacity-100');
                }
            }
        }

        bindGlobalAudioEvents() {
             this.audio = document.getElementById('global-audio-player');
             if(this.audio && !this.audio.dataset.hasGlobalEvents) {
                this.audio.volume = 1.0;
                this.audio.addEventListener('timeupdate', () => this.updateProgress());
                this.audio.addEventListener('ended', () => this.nextSong(true));
                this.audio.addEventListener('play', () => { this.isPlaying = true; this.updateUI(); });
                this.audio.addEventListener('pause', () => { this.isPlaying = false; this.updateUI(); });
                this.audio.addEventListener('error', (e) => console.error("Audio error", e));
                this.audio.dataset.hasGlobalEvents = "true";
             }
             
            if ('mediaSession' in navigator) {
                navigator.mediaSession.setActionHandler('play', () => this.togglePlay());
                navigator.mediaSession.setActionHandler('pause', () => this.togglePlay());
                navigator.mediaSession.setActionHandler('previoustrack', () => this.prevSong());
                navigator.mediaSession.setActionHandler('nexttrack', () => this.nextSong());
            }
        }

        bindMiniPlayerEvents() {
            // Always query fresh elements
            this.miniContainer = document.getElementById('mini-player-container');
            this.miniCard = document.getElementById('mini-player-card');
            this.miniFab = document.getElementById('mini-fab');
            this.miniPlayBtn = document.getElementById('mini-play');
            this.miniPrevBtn = document.getElementById('mini-prev');
            this.miniNextBtn = document.getElementById('mini-next');
            
            this.miniCover = document.getElementById('mini-cover');
            this.miniFabCover = document.getElementById('mini-fab-cover');
            this.miniTitle = document.getElementById('mini-title');
            this.miniArtist = document.getElementById('mini-artist');
            this.miniIconPlay = document.getElementById('mini-icon-play');
            this.miniIconPause = document.getElementById('mini-icon-pause');
            this.miniFabSpin = document.getElementById('mini-fab-spin');
            this.miniFabIconPlay = document.getElementById('mini-fab-icon-play');
            this.miniFabIconPause = document.getElementById('mini-fab-icon-pause');
            this.visualizerBars = document.querySelectorAll('#mini-fab-visualizer div');

            // Bind events only if not already bound on THIS specific element instance
            if(this.miniFab && !this.miniFab.dataset.bound) {
                this.miniFab.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.togglePlay();
                });
                this.miniFab.addEventListener('mouseenter', () => this.openMiniPlayer());
                this.miniFab.addEventListener('mouseleave', () => this.scheduleCloseMiniPlayer());
                this.miniFab.dataset.bound = "true";
            }
            
            if(this.miniCard && !this.miniCard.dataset.bound) {
                this.miniCard.addEventListener('mouseenter', () => this.openMiniPlayer());
                this.miniCard.addEventListener('mouseleave', () => this.scheduleCloseMiniPlayer());
                this.miniCard.dataset.bound = "true";
            }
            
            // Remove old document logic for clicking outside since we are using hover now
            /* if (!this.hasBoundDocumentClick) { ... } */

            if(this.miniPlayBtn && !this.miniPlayBtn.dataset.bound) {
                this.miniPlayBtn.addEventListener('click', () => this.togglePlay());
                this.miniPlayBtn.dataset.bound = "true";
            }
            if(this.miniPrevBtn && !this.miniPrevBtn.dataset.bound) {
                this.miniPrevBtn.addEventListener('click', () => this.prevSong());
                this.miniPrevBtn.dataset.bound = "true";
            }
            if(this.miniNextBtn && !this.miniNextBtn.dataset.bound) {
                this.miniNextBtn.addEventListener('click', () => this.nextSong(false));
                this.miniNextBtn.dataset.bound = "true";
            }
        }

        bindUIEvents() {
            if (this.playBtn && !this.playBtn.dataset.bound) {
                this.playBtn.addEventListener('click', () => this.togglePlay());
                this.playBtn.dataset.bound = "true";
            }
            if (this.prevBtn && !this.prevBtn.dataset.bound) {
                this.prevBtn.addEventListener('click', () => this.prevSong());
                this.prevBtn.dataset.bound = "true";
            }
            if (this.nextBtn && !this.nextBtn.dataset.bound) {
                this.nextBtn.addEventListener('click', () => this.nextSong(false));
                this.nextBtn.dataset.bound = "true";
            }
            if (this.shuffleBtn && !this.shuffleBtn.dataset.bound) {
                this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
                this.shuffleBtn.dataset.bound = "true";
            }
            if (this.repeatBtn && !this.repeatBtn.dataset.bound) {
                this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
                this.repeatBtn.dataset.bound = "true";
            }
            
            if (this.btnPlaylist && !this.btnPlaylist.dataset.bound) {
                this.btnPlaylist.addEventListener('click', () => this.switchView('playlist'));
                this.btnPlaylist.dataset.bound = "true";
            }
            if (this.btnLyrics && !this.btnLyrics.dataset.bound) {
                this.btnLyrics.addEventListener('click', () => this.switchView('lyrics'));
                this.btnLyrics.dataset.bound = "true";
            }
            
            // Progress Bar Dragging (mouse + touch)
            if(this.progressContainer && !this.progressContainer.dataset.bound) {
                const startProgressDrag = (e) => {
                    e.preventDefault(); // prevent scrolling on touch
                    this.isDraggingProgress = true;
                    this.updateProgressFromEvent(e);

                    const onMove = (moveEvent) => {
                         if (this.isDraggingProgress) {
                             moveEvent.preventDefault();
                             this.updateProgressFromEvent(moveEvent);
                         }
                    };

                    const onEnd = () => {
                        this.isDraggingProgress = false;
                        document.removeEventListener('mousemove', onMove);
                        document.removeEventListener('mouseup', onEnd);
                        document.removeEventListener('touchmove', onMove);
                        document.removeEventListener('touchend', onEnd);
                    };

                    document.addEventListener('mousemove', onMove);
                    document.addEventListener('mouseup', onEnd);
                    document.addEventListener('touchmove', onMove, { passive: false });
                    document.addEventListener('touchend', onEnd);
                };
                this.progressContainer.addEventListener('mousedown', startProgressDrag);
                this.progressContainer.addEventListener('touchstart', startProgressDrag, { passive: false });
                this.progressContainer.dataset.bound = "true";
            }

            // Volume Bar Dragging (mouse + touch)
             if(this.volumeControl && !this.volumeControl.dataset.bound) {
                const startVolumeDrag = (e) => {
                    e.preventDefault();
                    this.isDraggingVolume = true;
                    this.updateVolumeFromEvent(e);

                    const onMove = (moveEvent) => {
                        if (this.isDraggingVolume) {
                             moveEvent.preventDefault();
                             this.updateVolumeFromEvent(moveEvent);
                        }
                    };

                    const onEnd = () => {
                        this.isDraggingVolume = false;
                        document.removeEventListener('mousemove', onMove);
                        document.removeEventListener('mouseup', onEnd);
                        document.removeEventListener('touchmove', onMove);
                        document.removeEventListener('touchend', onEnd);
                    };

                    document.addEventListener('mousemove', onMove);
                    document.addEventListener('mouseup', onEnd);
                    document.addEventListener('touchmove', onMove, { passive: false });
                    document.addEventListener('touchend', onEnd);
                };
                this.volumeControl.addEventListener('mousedown', startVolumeDrag);
                this.volumeControl.addEventListener('touchstart', startVolumeDrag, { passive: false });
                this.volumeControl.dataset.bound = "true";
             }
        }
        
        updateProgressFromEvent(e) {
             if(!this.progressContainer || !this.audio || !this.audio.duration) return;
             const rect = this.progressContainer.getBoundingClientRect();
             const clientX = e.touches ? e.touches[0].clientX : e.clientX;
             const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
             this.audio.currentTime = pos * this.audio.duration;
             if(this.progressBar) this.progressBar.style.width = \`\${pos * 100}%\`;
             if(this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
        }

        updateVolumeFromEvent(e) {
            if(!this.volumeControl || !this.audio) return;
            const rect = this.volumeControl.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            this.audio.volume = pos;
            if(this.volumeBar) this.volumeBar.style.width = \`\${pos * 100}%\`;
        }
        
        bindPlaylistEvents() {
            const playlistItems = document.querySelectorAll('.playlist-item');
            playlistItems.forEach(item => {
                item.addEventListener('click', () => {
                   const index = parseInt(item.dataset.index);
                   if(!isNaN(index)) {
                       this.loadSong(index, true);
                   }
                });
            });

            // 歌单列表条目点击 - switch playlist
            const playlistEntries = document.querySelectorAll('.playlist-entry-item');
            playlistEntries.forEach(entry => {
                if (!entry.dataset.bound) {
                    entry.addEventListener('click', async () => {
                        const playlistId = entry.dataset.playlistId;
                        if (!playlistId) return;

                        this.highlightPlaylistEntry(playlistId);

                        // Use build-time static playlist data (with durations)
                        const songs = this.playlistSongs[playlistId];
                        if (songs && songs.length > 0) {
                            this.playlist = songs;
                            this.playlistCounts[playlistId] = songs.length;
                            this.currentIndex = 0;
                            this.renderPlaylistList();
                            this.switchView('playlist');
                            this.loadSong(0, true);
                        } else {
                            console.warn(\`No static data for playlist \${playlistId}\`);
                        }
                    });
                    entry.dataset.bound = 'true';
                }
            });
        }

        bindPlaylistSearchEvents() {
            if (this.playlistSearchInput && !this.playlistSearchInput.dataset.bound) {
                this.playlistSearchInput.addEventListener('input', () => {
                    this.playlistSearchQuery = this.playlistSearchInput.value || '';
                    this.applyPlaylistSearch();
                });
                this.playlistSearchInput.dataset.bound = 'true';
            }
        }

        normalizeSearchText(value) {
            return (value || '').toString().trim().toLowerCase().replace(/\\s+/g, ' ');
        }

        fuzzyMatchText(source, query) {
            const normalizedSource = this.normalizeSearchText(source);
            const normalizedQuery = this.normalizeSearchText(query);

            if (!normalizedQuery) return true;
            if (normalizedSource.includes(normalizedQuery)) return true;

            let sourceIndex = 0;
            for (const character of normalizedQuery) {
                sourceIndex = normalizedSource.indexOf(character, sourceIndex);
                if (sourceIndex === -1) return false;
                sourceIndex += 1;
            }

            return true;
        }

        matchesPlaylistQuery(item, query) {
            if (!query) return true;
            const keywords = this.normalizeSearchText(query).split(' ').filter(Boolean);
            const target = [item.dataset.search || '', item.querySelector('h3')?.textContent || '', item.querySelector('p')?.textContent || '', item.querySelector('.playlist-duration')?.textContent || ''].join(' ');

            return keywords.every(keyword => this.fuzzyMatchText(target, keyword));
        }

        applyPlaylistSearch() {
            const query = this.playlistSearchInput?.value ?? this.playlistSearchQuery ?? '';
            this.playlistSearchQuery = query;

            const items = document.querySelectorAll('.playlist-item');
            let visibleCount = 0;

            items.forEach(item => {
                const isMatch = this.matchesPlaylistQuery(item, query);
                item.classList.toggle('hidden', !isMatch);
                if (isMatch) visibleCount += 1;
            });

            if (this.playlistEmptyState) {
                this.playlistEmptyState.classList.toggle('hidden', visibleCount > 0);
            }

            if (!this.normalizeSearchText(query)) {
                this.scrollActivePlaylistItemIntoView('auto');
            }
        }

        scrollActivePlaylistItemIntoView(behavior = 'smooth') {
            const activeItem = this.playlistContainer?.querySelector('.playlist-item.active:not(.hidden)');
            if (!activeItem) return;

            requestAnimationFrame(() => {
                activeItem.scrollIntoView({ behavior, block: 'center', inline: 'nearest' });
            });
        }

        highlightPlaylistEntry(playlistId) {
            this.activePlaylistId = playlistId;
            const entries = document.querySelectorAll('.playlist-entry-item');
            if (!entries.length) return;

            const activeColor = getComputedStyle(document.documentElement).getPropertyValue('--p').trim();

            entries.forEach(e => {
                const isTarget = e.dataset.playlistId === playlistId;
                if (isTarget) {
                    e.classList.add('playlist-active', 'border-0');
                    e.classList.remove('border', 'border-transparent', 'hover:bg-black/5', 'dark:hover:bg-white/5', 'hover:border-neu-border/50');
                    e.style.backgroundColor = \`oklch(\${activeColor} / 0.15)\`;
                    e.style.color = '';
                    const svg = e.querySelector('svg');
                    const h3 = e.querySelector('h3');
                    const span = e.querySelector('span');
                    if (svg) { svg.style.color = \`oklch(\${activeColor})\`; svg.classList.remove('text-neu-text-muted'); }
                    if (h3) { h3.style.color = \`oklch(\${activeColor})\`; h3.classList.remove('text-neu-text'); }
                    if (span) {
                        span.style.color = \`oklch(\${activeColor})\`;
                        span.classList.remove('text-neu-text-muted');
                        if (this.playlistCounts[playlistId]) {
                            span.textContent = \`\${this.playlistCounts[playlistId]}首\`;
                        }
                    }
                } else {
                    e.classList.remove('playlist-active', 'border-0');
                    e.classList.add('border', 'border-transparent', 'hover:bg-black/5', 'dark:hover:bg-white/5', 'hover:border-neu-border/50');
                    e.style.backgroundColor = '';
                    e.style.color = '';
                    const svg = e.querySelector('svg');
                    const h3 = e.querySelector('h3');
                    const span = e.querySelector('span');
                    if (svg) { svg.style.color = ''; svg.classList.add('text-neu-text-muted'); }
                    if (h3) { h3.style.color = ''; h3.classList.add('text-neu-text'); }
                    if (span) { span.style.color = ''; span.classList.add('text-neu-text-muted'); }
                }
            });
            // Auto-scroll active entry into view
            const activeEntry = document.querySelector('.playlist-entry-item.playlist-active');
            if (activeEntry) {
                activeEntry.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        renderPlaylistList() {
            const playlistListEl = document.getElementById('playlist-list');
            if (!playlistListEl) return;
            playlistListEl.innerHTML = this.playlist.map((song, index) => \`
                <li class="playlist-item group flex items-center gap-3 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 border border-transparent transition-all cursor-pointer \${index === this.currentIndex ? 'active border-neu-accent bg-black/5 dark:bg-white/5' : ''}" data-index="\${index}" data-search="\${(song.title || '').replace(/"/g, '&quot;')} \${(song.artist || '').replace(/"/g, '&quot;')} \${(song.duration || '').replace(/"/g, '&quot;')}">
                    <span class="font-mono text-neu-text-muted text-sm font-bold w-6 text-center group-hover:text-neu-accent transition-colors">\${String(index + 1).padStart(2, '0')}</span>
                    <div class="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-neu-border/50">
                        <img src="\${song.cover || ''}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="cover" loading="lazy"/>
                        <div class="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-[.active]:opacity-100 transition-opacity">
                            <div class="w-1.5 h-4 gap-0.5 flex items-end justify-center">
                                <div class="w-0.5 bg-white h-2 animate-pulse"></div>
                                <div class="w-0.5 bg-white h-3 animate-pulse delay-75"></div>
                                <div class="w-0.5 bg-white h-1 animate-pulse delay-150"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0 flex flex-col justify-center gap-1">
                        <h3 class="font-bold text-neu-text truncate text-sm leading-none">\${song.title || 'Unknown'}</h3>
                        <p class="text-[11px] text-neu-text-muted truncate uppercase tracking-wider">\${song.artist || ''}</p>
                    </div>
                    <div class="text-xs font-mono text-neu-text-muted font-bold playlist-duration" data-song-index="\${index}">\${song.duration || '--:--'}</div>
                </li>
            \`).join('');
            this.bindPlaylistEvents();
        }

        async updatePlaylistDurations() {
             const items = document.querySelectorAll('.playlist-item .playlist-duration');
             this.playlist.forEach((song, index) => {
                if (items[index] && song.duration) {
                    items[index].textContent = song.duration;
                }
             });
        }

        loadSong(index, autoPlay = true) {
            if(index < 0 || index >= this.playlist.length) return;
            
            this.currentIndex = index;
            const song = this.playlist[index];
            
            if (this.audio.src !== song.url && this.audio.src !== new URL(song.url, document.baseURI).href) {
                this.audio.src = song.url;
                this.lrcUrl = song.lrc || (song.url ? song.url.replace(/\\.[^/.]+$/, ".lrc") : "");
                this.lyrics = []; // Clear lyrics
                this.hasLyrics = !!song.lrc; // 标记是否有歌词
            }

            if(autoPlay) {
                this.audio.play().catch(e => console.error(e));
            } else {
                 if (this.isPlaying) this.audio.play(); 
            }
            
            this.updateUI();
            this.loadLyrics();
            this.scrollActivePlaylistItemIntoView();
            
             if('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: song.title || 'Unknown Title',
                    artist: song.artist || 'Unknown Artist',
                    artwork: [{ src: song.cover || '/favicon.svg', sizes: '512x512', type: 'image/png' }]
                });
            }
        }
        
        togglePlay() {
            if (this.audio.paused) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        }
        
        prevSong() {
            let newIndex;
            if (this.isShuffle) {
                newIndex = Math.floor(Math.random() * this.playlist.length);
                 if (this.playlist.length > 1) {
                     while(newIndex === this.currentIndex) {
                         newIndex = Math.floor(Math.random() * this.playlist.length);
                     }
                }
            } else {
                newIndex = this.currentIndex - 1;
                if(newIndex < 0) {
                     // If loop is off, stop or wrap? Typically prev always wraps or goes to 0
                     newIndex = this.playlist.length - 1; 
                }
            }
            this.loadSong(newIndex, true);
        }
        
        nextSong(isAuto = false) {
             let newIndex;
            if (this.repeatMode === 'one' && isAuto) {
                 newIndex = this.currentIndex;
            } else if (this.isShuffle) {
                newIndex = Math.floor(Math.random() * this.playlist.length);
                 if (this.playlist.length > 1) {
                     while(newIndex === this.currentIndex) {
                         newIndex = Math.floor(Math.random() * this.playlist.length);
                     }
                }
            } else {
                newIndex = this.currentIndex + 1;
                if(newIndex >= this.playlist.length) {
                    if (this.repeatMode === 'off' && isAuto) {
                         // Stop playback if mode is off and end of list reached automatically
                         this.isPlaying = false;
                         this.updateUI();
                         return; 
                    }
                    newIndex = 0;
                }
            }
            this.loadSong(newIndex, true);
        }
        
        toggleShuffle() {
            // Toggle Shuffle
            this.isShuffle = !this.isShuffle;
            
            if (this.isShuffle) {
                // Shuffle ON: Visually disable repeat preference (technically internal logic handles skip)
                this.repeatMode = 'off';
            } else {
                // Shuffle OFF: Restore to default Sequence Loop
                this.repeatMode = 'all';
            }
            this.updateUI();
        }

        toggleRepeat() {
             if (this.isShuffle) {
                 // If dragging from Shuffle -> Turn off Shuffle, go to Sequence
                 this.isShuffle = false;
                 this.repeatMode = 'all'; 
             } else {
                 // Cycle Modes
                 if (this.repeatMode === 'all') {
                     this.repeatMode = 'one';
                 } else if (this.repeatMode === 'one') {
                     this.repeatMode = 'off';
                 } else {
                     this.repeatMode = 'all';
                 }
             }
             this.updateUI();
        }

        toggleMiniPlayer() {
             // Deprecated in favor of open/close hover
            if (!this.isMiniOpen) {
                this.openMiniPlayer();
            } else {
                this.closeMiniPlayer();
            }
        }

        closeMiniPlayer() {
            this.isMiniOpen = false;
            this.miniCard?.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            this.miniCard?.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
            this.miniFab?.classList.remove('opacity-0', 'pointer-events-none', 'scale-0');
        }

        openMiniPlayer() {
            this.cancelCloseMiniPlayer();
            this.isMiniOpen = true;
            this.miniCard?.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
            this.miniCard?.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
            // Do NOT hide FAB completely on hover open, otherwise we can't click it!
            // But checking previous logic: hide if mini is open.
            // If user wants hover effect, FAB must remain visible to be hovered.
            // So we remove the "hide fab" logic.
            // this.miniFab?.classList.add('opacity-0', 'pointer-events-none', 'scale-0');
        }

        scheduleCloseMiniPlayer() {
            this.cancelCloseMiniPlayer();
            this.closeTimer = setTimeout(() => {
                this.closeMiniPlayer();
            }, 300);
        }

        cancelCloseMiniPlayer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        }

        switchView(view) {
            if (view === 'playlist') {
                this.lyricsContainer?.classList.add('hidden');
                this.playlistContainer?.classList.remove('hidden');
                this.btnPlaylist?.classList.remove('text-neu-text-muted');
                this.btnPlaylist?.classList.add('bg-neu-btn-bg', 'text-neu-btn-text', 'shadow-sm');
                this.btnLyrics?.classList.add('text-neu-text-muted');
                this.btnLyrics?.classList.remove('bg-neu-btn-bg', 'text-neu-btn-text', 'shadow-sm');
                this.applyPlaylistSearch();
                this.scrollActivePlaylistItemIntoView();
            } else {
                this.lyricsContainer?.classList.remove('hidden');
                this.playlistContainer?.classList.add('hidden');
                this.btnLyrics?.classList.remove('text-neu-text-muted');
                this.btnLyrics?.classList.add('bg-neu-btn-bg', 'text-neu-btn-text', 'shadow-sm');
                this.btnPlaylist?.classList.add('text-neu-text-muted');
                this.btnPlaylist?.classList.remove('bg-neu-btn-bg', 'text-neu-btn-text', 'shadow-sm');
            }
        }
        
        updateUI() {
             const song = this.playlist[this.currentIndex];
             const coverSrc = song.cover || "";
             
             // --- Update Mini Player ---
             if (this.miniTitle) this.miniTitle.textContent = song.title || "Unknown Title";
             if (this.miniArtist) this.miniArtist.textContent = song.artist || "Unknown Artist";
             if (this.miniCover) this.miniCover.src = coverSrc;
             if (this.miniFabCover) this.miniFabCover.src = coverSrc;

             if (this.isPlaying) {
                 this.miniIconPlay?.classList.add('hidden');
                 this.miniIconPause?.classList.remove('hidden');
                 
                 this.miniFabIconPlay?.classList.add('hidden');
                 this.miniFabIconPause?.classList.remove('hidden');
                 
                 if (this.miniFabSpin) this.miniFabSpin.style.animationPlayState = 'running';
                  // Visualizer animation
                  if(this.visualizerBars) {
                      this.visualizerBars.forEach(bar => {
                          bar.classList.add('animate-pulse');
                          bar.style.height = Math.random() * 12 + 4 + 'px';
                      });
                  }
             } else {
                 this.miniIconPlay?.classList.remove('hidden');
                 this.miniIconPause?.classList.add('hidden');
                 
                 this.miniFabIconPlay?.classList.remove('hidden');
                 this.miniFabIconPause?.classList.add('hidden');

                 if (this.miniFabSpin) this.miniFabSpin.style.animationPlayState = 'paused';
                 if(this.visualizerBars) {
                      this.visualizerBars.forEach(bar => bar.classList.remove('animate-pulse'));
                  }
             }
             
             // --- Update Main Player (if exists) ---
            if (this.container) {
                // Text
                if(this.playerTitle) this.playerTitle.textContent = song.title || "Unknown Title";
                if(this.playerArtist) this.playerArtist.textContent = song.artist || "Unknown Artist";

                // Covers
                if(this.playerCover) this.playerCover.src = coverSrc;
                if(this.bgCover) this.bgCover.src = coverSrc;
                
                // Shuffle/Repeat State
                this.updateShuffleBtn();
                this.updateRepeatBtn();

                // Play/Pause State
                if (this.isPlaying) {
                    this.iconPlay?.classList.add('hidden');
                    this.iconPause?.classList.remove('hidden');
                    if (this.recordOuter) this.recordOuter.style.animationPlayState = 'running';
                    if (this.recordInner) this.recordInner.style.animationPlayState = 'running';
                    if (this.needle) this.needle.style.transform = 'rotate(30deg)';
                    if (this.statusDot) {
                        this.statusDot.classList.remove('bg-red-400');
                        this.statusDot.classList.add('bg-green-400');
                    }
                    if (this.statusText) this.statusText.textContent = '播放中';
                } else {
                    this.iconPlay?.classList.remove('hidden');
                    this.iconPause?.classList.add('hidden');
                    if (this.recordOuter) this.recordOuter.style.animationPlayState = 'paused';
                    if (this.recordInner) this.recordInner.style.animationPlayState = 'paused';
                    if (this.needle) this.needle.style.transform = 'rotate(0deg)';
                    if (this.statusDot) {
                        this.statusDot.classList.remove('bg-green-400');
                        this.statusDot.classList.add('bg-red-400');
                    }
                    if (this.statusText) this.statusText.textContent = '暂停';
                }
                
                // Update Active Playlist Item
                const items = document.querySelectorAll('.playlist-item');
                items.forEach((item, idx) => {
                    const iconDiv = item.querySelector('.absolute.inset-0.bg-black\\\\/10'); 
                    const title = item.querySelector('h3');
                    
                    if(idx === this.currentIndex) {
                        item.classList.add('active', 'border-neu-accent', 'bg-black/5', 'dark:bg-white/5');
                        item.classList.remove('border-transparent');
                        if(iconDiv) iconDiv.classList.remove('opacity-0');
                        if(title) title.classList.add('text-neu-accent');
                    } else {
                        item.classList.remove('active', 'border-neu-accent', 'bg-black/5', 'dark:bg-white/5');
                        item.classList.add('border-transparent');
                        if(iconDiv) iconDiv.classList.add('opacity-0');
                        if(title) title.classList.remove('text-neu-accent');
                    }
                });
            }
        }
        
         updateShuffleBtn() {
            if (this.shuffleBtn) {
                if (this.isShuffle) {
                    this.shuffleBtn.style.color = 'oklch(var(--p))';
                    this.shuffleBtn.classList.remove('text-neu-text-muted');
                } else {
                    this.shuffleBtn.style.color = '';
                    this.shuffleBtn.classList.add('text-neu-text-muted');
                }
            }
        }
        
        updateRepeatBtn() {
             if (this.repeatBtn) {
                // Highlight if 'all' or 'one'
                if (this.repeatMode === 'all' || this.repeatMode === 'one') {
                     this.repeatBtn.style.color = 'oklch(var(--p))';
                     this.repeatBtn.classList.remove('text-neu-text-muted');
                } else {
                     this.repeatBtn.style.color = '';
                     this.repeatBtn.classList.add('text-neu-text-muted');
                }
                
                // Optional: We could try to show visual distinction for 'one'
                // But without icon changing support, highlighting is the primary request.
            }
        }

        updateProgress() {
            if(!this.audio) return;
            // Stop updating UI if user is dragging progress bar
            if(this.isDraggingProgress) return;
            
            const { currentTime, duration } = this.audio;
            // Only update if UI exists
            if(this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(currentTime);
            if(this.totalTimeEl && duration) this.totalTimeEl.textContent = this.formatTime(duration);
            
            if(this.progressBar && duration) {
                const percent = (currentTime / duration) * 100;
                this.progressBar.style.width = \`\${percent}%\`;
            }

            this.syncLyrics(currentTime);
            
             // Visualizer animation
             if(this.isPlaying && this.visualizerBars) {
                  this.visualizerBars.forEach(bar => {
                      bar.style.height = (Math.random() * 8 + 4) + 'px';
                  });
              }
        }
        
        formatTime(seconds) {
            if (isNaN(seconds)) return "0:00";
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return \`\${min}:\${sec.toString().padStart(2, '0')}\`;
        }
        
        async loadLyrics() {
             try {
                const currentSong = this.playlist[this.currentIndex];
                
                if(!this.lrcUrl) {
                    // 如果没有生成lrcUrl，则认为是纯音乐
                    if(this.lyricsContainer) {
                        this.lyricsContainer.innerHTML = '<p class="text-neu-text-muted text-sm mt-20">纯音乐，请您欣赏</p>';
                    }
                    return;
                }
                
                // 尝试加载歌词
                const response = await fetch(this.lrcUrl);
                if (response.ok) {
                    const text = await response.text();
                    this.lyrics = this.parseLyrics(text);
                    // 如果解析后歌词为空，且没有显式设置lrc属性，则认为是纯音乐
                    if (this.lyrics.length === 0 && !currentSong.lrc) {
                        if(this.lyricsContainer) {
                            this.lyricsContainer.innerHTML = '<p class="text-neu-text-muted text-sm mt-20">纯音乐，请您欣赏</p>';
                        }
                        return;
                    }
                    this.renderLyrics();
                } else {
                    // 如果加载失败，且没有显式设置lrc属性，则认为是纯音乐
                    if (!currentSong.lrc) {
                        if(this.lyricsContainer) {
                            this.lyricsContainer.innerHTML = '<p class="text-neu-text-muted text-sm mt-20">纯音乐，请您欣赏</p>';
                        }
                    } else {
                        // 如果有显式设置lrc属性但加载失败，显示加载失败提示
                        if(this.lyricsContainer) this.lyricsContainer.innerHTML = '<p class="text-neu-text-muted text-sm mt-20">Lyrics fetch failed</p>';
                    }
                }
            } catch (e) {
                // console.error("Lyrics load failed", e);
                const currentSong = this.playlist[this.currentIndex];
                // 如果加载出错，且没有显式设置lrc属性，则认为是纯音乐
                if (!currentSong.lrc) {
                    if(this.lyricsContainer) {
                        this.lyricsContainer.innerHTML = '<p class="text-neu-text-muted text-sm mt-20">纯音乐，请您欣赏</p>';
                    }
                } else {
                    // 如果有显式设置lrc属性但加载出错，显示没有歌词提示
                    if(this.lyricsContainer) this.lyricsContainer.innerHTML = '<p class="text-neu-text-muted text-sm mt-20">No lyrics available</p>';
                }
            }
        }
        
        parseLyrics(lrcText) {
            const lines = lrcText.split('\\n');
            const result = [];
            const timeReg = /\\[(\\d{2}):(\\d{2})\\.(\\d{2,3})\\]/;

            const tempLines = [];

            for (const line of lines) {
                const cleanLine = line.trim();
                if (!cleanLine) continue;

                const match = timeReg.exec(cleanLine);
                if (match) {
                    const min = parseInt(match[1]);
                    const sec = parseInt(match[2]);
                    const ms = parseInt(match[3].padEnd(3, '0')); 
                    const time = min * 60 + sec + ms / 1000;
                    
                    let textInfo = cleanLine.replace(timeReg, '').trim();

                    // Attempt to parse word-level sync if present <mm:ss.xx>
                    // Ex: <00:01.00>word
                    const wordLevelReg = /<(\\d{2}):(\\d{2})\\.(\\d{2,3})>([^<]*)/g;
                    const words = [];
                    let wordMatch;
                    let hasWordLevel = false;

                    while ((wordMatch = wordLevelReg.exec(textInfo)) !== null) {
                        hasWordLevel = true;
                        const wMin = parseInt(wordMatch[1]);
                        const wSec = parseInt(wordMatch[2]);
                        const wMs = parseInt(wordMatch[3].padEnd(3, '0'));
                        const wTime = wMin * 60 + wSec + wMs / 1000;
                        const wText = wordMatch[4];
                        if (wText) { // Ignore empty words
                            words.push({ time: wTime, text: wText });
                        }
                    }

                    // Remove all <...> tags to get the pure text for standard rendering
                    let cleanText = textInfo.replace(/<\\d{2}:\\d{2}\\.\\d{2,3}>/g, '');

                    tempLines.push({
                        time,
                        text: cleanText,
                        words: hasWordLevel ? words : null,
                        original: cleanLine
                    });
                }
            }

            for (let i = 0; i < tempLines.length; i++) {
                const current = tempLines[i];
                result.push({
                    time: current.time,
                    text: current.text,
                    words: current.words
                });
            }

            return result;
        }

        renderLyrics() {
            if (!this.lyricsContainer) return;
            
            const html = this.lyrics.map((line, index) => {
                let lineHTML = '';
                
                if (line.words && line.words.length > 0) {
                     // Support word-by-word
                     let wordHtml = line.words.map((w) => {
                          return \`<span class="lyric-word transition-colors duration-150 inline-block" data-time="\${w.time}">\${w.text}</span>\`;
                     }).join('');
                     lineHTML += \`<div>\${wordHtml}</div>\`;
                } else {
                     lineHTML += \`<div>\${line.text}</div>\`;
                }

                return \`<div class="lyric-line transition-all duration-300 py-2 leading-6 text-neu-text-muted hover:text-neu-text cursor-pointer text-sm font-medium tracking-wide text-center" data-time="\${line.time}" data-index="\${index}"><div class="lyric-line-inner">\${lineHTML}</div></div>\`;
            }).join('');
            
            this.lyricsContainer.innerHTML = \`<div class="py-[50%] flex flex-col items-center w-full space-y-2">\${html}</div>\`; 
            
            const lines = this.lyricsContainer.querySelectorAll('.lyric-line');
            lines.forEach((lineElement) => {
                lineElement.addEventListener('click', () => {
                   const time = parseFloat(lineElement.getAttribute('data-time'));
                   if(this.audio) {
                       this.audio.currentTime = time;
                       if (this.audio.paused) this.togglePlay();
                   }
                });
            });
        }
        
        syncLyrics(currentTime) {
             if (!this.lyrics.length || !this.lyricsContainer) return;
            
            // Find current active line
            let activeIndex = -1;
            for (let i = 0; i < this.lyrics.length; i++) {
                if (currentTime >= this.lyrics[i].time) {
                    activeIndex = i;
                } else {
                    break;
                }
            }
            
            const lines = this.lyricsContainer.querySelectorAll('.lyric-line');

            if (activeIndex !== -1 && activeIndex !== this.lastActiveIndex) {
                 this.lastActiveIndex = activeIndex;

                lines.forEach((line, idx) => {
                    if (idx !== activeIndex) {
                         // Reset classes
                        line.className = 'lyric-line transition-all duration-150 py-2 leading-6 text-neu-text-muted hover:text-neu-text cursor-pointer text-sm font-medium tracking-wide text-center';
                         // Reset words in inactive lines
                         const words = line.querySelectorAll('.lyric-word');
                        words.forEach(w => w.classList.remove('text-neu-accent', 'lyric-word-active'));
                    }
                });
                
                const activeLine = lines[activeIndex];
                if (activeLine) {
                    activeLine.className = 'lyric-line transition-all duration-150 py-2 leading-6 cursor-pointer text-sm font-medium tracking-wide text-neu-text lyric-active text-center';
                    
                    // Manual scroll calculation
                    const containerHeight = this.lyricsContainer.clientHeight;
                    const lineTop = activeLine.offsetTop;
                    const lineHeight = activeLine.clientHeight;
                    
                    const scrollTarget = lineTop - (containerHeight / 2) + (lineHeight / 2);

                    this.lyricsContainer.scrollTo({
                        top: scrollTarget,
                        behavior: 'smooth'
                    });
                }
            }

            // Sync words within the active line
            if (activeIndex !== -1) {
                const activeLine = lines[activeIndex];
                if (activeLine) {
                    const words = activeLine.querySelectorAll('.lyric-word');
                    words.forEach(word => {
                        const wordTime = parseFloat(word.getAttribute('data-time'));
                        if (currentTime >= wordTime) {
                            word.classList.add('text-neu-accent', 'lyric-word-active');
                            word.classList.remove('text-neu-text');
                        } else {
                            word.classList.remove('text-neu-accent', 'lyric-word-active');
                            word.classList.add('text-neu-text');
                        }
                    });
                }
            }
        }
    }
    
    // Initialize Singleton
    if (!window.globalMusicPlayer) {
        window.globalMusicPlayer = new GlobalMusicPlayer();
    } else {
        // HMR Support: When file changes, we need to update the methods of the existing instance
        // or replace the instance while preserving state.
        const oldInstance = window.globalMusicPlayer;
        const newInstance = new GlobalMusicPlayer();
        
        // Preserve State
        newInstance.playlist = oldInstance.playlist;
        newInstance.currentIndex = oldInstance.currentIndex;
        newInstance.isPlaying = oldInstance.isPlaying;
        newInstance.isShuffle = oldInstance.isShuffle;
        newInstance.repeatMode = oldInstance.repeatMode;
        newInstance.lyrics = oldInstance.lyrics;
        newInstance.lrcUrl = oldInstance.lrcUrl;
        newInstance.audio = oldInstance.audio;
        newInstance.isMiniOpen = oldInstance.isMiniOpen;
        newInstance.playlistSongs = oldInstance.playlistSongs;
        newInstance.activePlaylistId = oldInstance.activePlaylistId;
        
        // cleanup old events/timers if necessary
        if(oldInstance.closeTimer) clearTimeout(oldInstance.closeTimer);
        
        // Replace
        window.globalMusicPlayer = newInstance;
        window.globalMusicPlayer.handlePageLoad();
    }
})();<\/script>`;
}, "E:/blog/2026blog/src/components/widgets/GlobalAudio.astro", "self");
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://blog.z2m.store");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, image, headings = [], showTOC = false, isIndexed = true, isPostPage = false, showSidebar = true, showBanner = true, needsKatex = false } = Astro.props;
	const currentPath = Astro.url.pathname.replace("/", "") || "home";
	const pageConfig = SITE_PAGES?.[currentPath];
	const bannerTitle = pageConfig?.title || title || "";
	const bannerSubtitle = pageConfig?.subtitle || "";
	return renderTemplate`<html${addAttribute(SITE_LANGUAGE, "lang")} style="background-color: var(--custom-page-bg)"${addAttribute(SITE_THEME.light, "data-theme")} data-theme-type="light"><head>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "ElementCrossing", $$ElementCrossing, {})}${renderComponent($$result, "PointerOnNavigation", $$PointerOnNavigation, {})}${renderComponent($$result, "Header", $$Header, {
		"title": title,
		"description": SITE_DESCRIPTION,
		"favicon": SITE_FAVICON,
		"image": image,
		"needsKatex": needsKatex
	})}<title>${`${title} - ${SITE_TAB}`}</title><!-- Umami分析（自建） -->${umamiConfig.enable && umamiConfig.websiteId && renderTemplate`<script defer${addAttribute(`${umamiConfig.baseUrl}/script.js`, "src")}${addAttribute(umamiConfig.websiteId, "data-website-id")}><\/script>`}${umamiConfig.enable && renderTemplate`<script defer src="/js/umami-share.js?v=3"><\/script>`}<!-- Microsoft Clarity --><script type="text/javascript">
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "skz108rus8");
    <\/script><!-- 主题管理脚本 --><script>(function(){${defineScriptVars({ SITE_THEME })}
      (function () {
        const storedTheme = localStorage.getItem("theme");
        const storedBannerMode = localStorage.getItem("banner-mode") || "normal";
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        
        let theme;
        if (storedTheme) {
          theme = storedTheme;
        } else {
          theme = SITE_THEME.light;
          localStorage.setItem("theme", theme);
        }
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.setAttribute("data-banner-mode", storedBannerMode);
        
        const isDark = theme === SITE_THEME.dark || ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee'].includes(theme);
        const themeType = isDark ? "dark" : "light";
        document.documentElement.setAttribute("data-theme-type", themeType);
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
              const newTheme = e.matches ? SITE_THEME.dark : SITE_THEME.light;
              document.documentElement.setAttribute("data-theme", newTheme);
              const newThemeType = e.matches ? "dark" : "light";
              document.documentElement.setAttribute(
                "data-theme-type",
                newThemeType,
              );
              localStorage.setItem("theme", newTheme);
            }
          });
      })();
    })();<\/script>${renderHead($$result)}</head><!-- 移除上边距，让Banner从顶部开始 --><body class="flex flex-col min-h-screen bg-[var(--banner-wave-bg)]"${spreadAttributes(isIndexed ? { "data-pagefind-body": true } : {})}>${showBanner && renderTemplate`${renderComponent($$result, "Banner", $$Banner, {
		"title": bannerTitle,
		"subtitle": bannerSubtitle
	})}`}${renderComponent($$result, "Navbar", $$Navbar, {})}<div${addAttribute(`max-w-blog mx-auto w-full flex-grow page-content-animate ${showBanner ? "mt-8" : "mt-24"}`, "class")}><div${addAttribute(`grid grid-cols-1 ${showSidebar ? "md:grid-cols-5 lg:grid-cols-4" : ""} gap-4 px-4 pb-4 h-full`, "class")}><main${addAttribute(`col-span-1 ${showSidebar ? "md:col-span-4 lg:col-span-3" : "w-full"} bg-transparent order-1 md:order-2 flex flex-col gap-4`, "class")}><div class="flex-grow flex flex-col gap-4">${renderSlot($$result, $$slots["default"])}</div>${renderComponent($$result, "Footer", $$Footer, {})}</main>${showSidebar && renderTemplate`<aside class="col-span-1 bg-transparent order-2 md:order-1 md:top-4 hidden md:block">${renderComponent($$result, "Sidebar", $$Sidebar, {
		"headings": headings,
		"showTOC": showTOC
	})}${renderSlot($$result, $$slots["sidebar"])}</aside>`}</div></div>${renderComponent($$result, "MobileTOC", $$MobileTOC, {
		"headings": headings,
		"showTOC": showTOC
	})}${renderComponent($$result, "GlobalAudio", $$GlobalAudio, {})}<!-- 其余脚本保持不变 --><script>(function(){${defineScriptVars({ SITE_THEME })}
      document.addEventListener("astro:after-swap", () => {
        const storedTheme = localStorage.getItem("theme");
        const storedBannerMode = localStorage.getItem("banner-mode") || "normal";
        
        if (storedTheme) {
          document.documentElement.setAttribute("data-theme", storedTheme);
          const isDark = storedTheme === SITE_THEME.dark || ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee'].includes(storedTheme);
          const themeType = isDark ? "dark" : "light";
          document.documentElement.setAttribute("data-theme-type", themeType);
        }
        
        document.documentElement.setAttribute("data-banner-mode", storedBannerMode);
      });
    })();<\/script><script>
      document.addEventListener("astro:page-load", () => {
        document.querySelectorAll(".btn-copy").forEach((button) => {
          button.addEventListener("click", async () => {
            const codeBlock = button.closest(".ryuchan-code");
            const code = codeBlock.querySelector("code").textContent;
            const copyIcon = button.querySelector(
              ".ryuchan-code-toolbar-copy-icon",
            );
            const successIcon = button.querySelector(
              ".ryuchan-code-toolbar-copy-success",
            );
            try {
              await navigator.clipboard.writeText(code);
              copyIcon.classList.add("hidden");
              successIcon.classList.remove("hidden");
              button.classList.add("copy-success");
              setTimeout(() => {
                copyIcon.classList.remove("hidden");
                successIcon.classList.add("hidden");
                button.classList.remove("copy-success");
              }, 2000);
            } catch (err) {
              console.error("Failed to copy:", err);
            }
          });
        });
      });
    <\/script><style>
      .btn-copy {
        position: relative;
        overflow: hidden;
      }
      .copy-success {
        animation: pulse 0.5s ease-in-out;
      }
  .ryuchan-code-toolbar-copy-success svg {
        color: #10b981;
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
    </style></body></html>`;
}, "E:/blog/2026blog/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { $$Card as a, getCategoriesWithPosts as c, getTagColorClass as d, getTagFontSize as f, renderScript as g, sortPostsByPinAndDate as h, playlistSongs as i, getCategoryColorClass as l, sortPostsByDate as m, musicList as n, generatePageLinks as o, getTagsWithCount as p, playlistCounts as r, getAllPosts as s, $$BaseLayout as t, getPostsWithStats as u };

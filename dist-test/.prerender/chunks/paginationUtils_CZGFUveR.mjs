import { I as createAstro, S as maybeRenderHead, T as defineScriptVars, a as renderTransition, f as Fragment, h as renderSlot, n as defineStyleVars, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { a as $$Card, h as sortPostsByPinAndDate, m as sortPostsByDate, s as getAllPosts, u as getPostsWithStats } from "./BaseLayout_DiR96fKT.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t, P as umamiConfig, o as BLOG_PAGE_SIZE, s as DATE_FORMAT } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon, t as $$Image } from "./_astro_assets_C9BQRxhs.mjs";
import { t as dayjs_default } from "./dayjs_EMIvGZG2.mjs";
import { t as $$PostFilter } from "./PostFilter_COHlnvem.mjs";
//#region src/components/widgets/Heading.astro
createAstro("https://blog.z2m.store");
var $$Heading = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Heading;
	const { url, title } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(url, "href")} target="_self" class="block hover:-translate-y-0.5 transition-transform duration-300"><h2${addAttribute(title, "id")} class="ryuchan-heading">${title}</h2></a>`;
}, "E:/blog/2026blog/src/components/widgets/Heading.astro", void 0);
//#endregion
//#region src/components/widgets/PostStats.astro
createAstro("https://blog.z2m.store");
var $$PostStats = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostStats;
	const { url, layout = "default" } = Astro.props;
	const slug = url ? url.split("/").filter(Boolean).pop() : void 0;
	return renderTemplate`${slug && umamiConfig.enable && renderTemplate`${maybeRenderHead($$result)}<div class="flex items-center gap-x-3 gap-y-1 text-[10px] sm:text-sm text-base-content/70"><div class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:eye",
		"class": "h-4 w-4 flex-shrink-0 text-primary"
	})}<span class="truncate"${addAttribute(`page-views-${slug}-${layout}`, "id")}>-</span></div><div class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:user",
		"class": "h-4 w-4 flex-shrink-0 text-primary"
	})}<span class="truncate"${addAttribute(`page-visitors-${slug}-${layout}`, "id")}>-</span></div></div>`}`;
}, "E:/blog/2026blog/src/components/widgets/PostStats.astro", void 0);
//#endregion
//#region src/components/PostCard.astro
createAstro("https://blog.z2m.store");
var $$PostCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostCard;
	const { title, image, pubDate, description, badge, categories = [], tags = [], word = "0", time = "0", url = decodeURIComponent(Astro.url.toString()) } = Astro.props;
	const displayDate = pubDate ? dayjs_default(pubDate).format(DATE_FORMAT) : "";
	const slug = url ? url.split("/").filter(Boolean).pop() : void 0;
	return renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "overflow-hidden" }, { "default": async ($$result) => renderTemplate`    ${maybeRenderHead($$result)}<div class="flex flex-col w-full lg:hidden">    <!-- Image Section -->    ${image && renderTemplate`<a${addAttribute(url, "href")} class="relative w-full aspect-video overflow-hidden group">          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 z-10 transition-all duration-300 flex items-center justify-center">            ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:arrow-right",
		"class": "w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2"
	})}          </div>          ${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"alt": title,
		"width": 800,
		"height": 400,
		"format": "webp",
		"loading": "lazy",
		"class": "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
	})}        </a>`}    <!-- Content Section -->    <div class="p-4 overflow-hidden flex flex-col">      <div class="mb-3">        ${renderComponent($$result, "Heading", $$Heading, {
		"url": url,
		"title": title
	}, { "default": ($$result) => renderTemplate`${title}` })}      </div>            <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-base-content/70 mb-3 opacity-75">        ${pubDate && renderTemplate`<span class="flex items-center gap-1">              ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:calendar",
		"class": "h-4 w-4 flex-shrink-0"
	})}              <span class="truncate">${displayDate}</span>            </span>`}        <div class="flex items-center gap-1">          ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "h-4 w-4 flex-shrink-0"
	})}          <span class="truncate">${word} ${t("label.wordCount")} · ${time} ${t("label.readTime")}</span>        </div>        ${badge && renderTemplate`<span class="flex items-center gap-1">              ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:bookmark",
		"class": "h-4 w-4 flex-shrink-0"
	})}              <span class="truncate">${badge}</span>            </span>`}        ${renderComponent($$result, "PostStats", $$PostStats, {
		"url": url,
		"layout": "mobile"
	})}      </div>      <p class="text-sm text-base-content/70 mb-4">${description}</p>            <!-- Categories and Tags Section -->      ${renderComponent($$result, "PostFilter", $$PostFilter, {
		"categories": categories,
		"tags": tags
	})}    </div>  </div>    <div class="hidden lg:flex flex-row min-h-24 h-auto">    <!-- Content Section -->    <div class="flex-1 p-6 overflow-hidden order-1 flex flex-col justify-between">      <div class="overflow-hidden">        <div class="mb-1">          ${renderComponent($$result, "Heading", $$Heading, {
		"url": url,
		"title": title
	}, { "default": ($$result) => renderTemplate`${title}` })}        </div>                <div class="grid grid-cols-[auto_auto] gap-x-4 gap-y-1 text-sm text-base-content/70 mb-4 opacity-75">          ${pubDate && renderTemplate`<span class="flex items-center gap-1">                ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:calendar",
		"class": "h-4 w-4 flex-shrink-0"
	})}                <span class="truncate">${displayDate}</span>              </span>`}          <div class="flex items-center gap-1">            ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "h-4 w-4 flex-shrink-0"
	})}            <span class="truncate">${word} ${t("label.wordCount")} · ${time} ${t("label.readTime")}</span>          </div>          ${badge && renderTemplate`<span class="flex items-center gap-1">                ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:bookmark",
		"class": "h-4 w-4 flex-shrink-0"
	})}                <span class="truncate">${badge}</span>              </span>`}          ${renderComponent($$result, "PostStats", $$PostStats, {
		"url": url,
		"layout": "desktop"
	})}        </div>        <p class="text-sm text-base-content/70 mb-4">${description}</p>      </div>      <div>        ${renderComponent($$result, "PostFilter", $$PostFilter, {
		"categories": categories,
		"tags": tags
	})}      </div>    </div>    <!-- Image Section -->    ${image && renderTemplate`<a${addAttribute(url, "href")} class="relative w-2/5 lg:w-2/5 lg:aspect-auto overflow-hidden order-2 group">          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 z-10 transition-all duration-300 flex items-center justify-center">            ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:arrow-right",
		"class": "w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2"
	})}          </div>          ${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"alt": title,
		"width": 800,
		"height": 400,
		"format": "webp",
		"loading": "lazy",
		"class": "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
	})}        </a>`}  </div>  ${slug && umamiConfig.enable && renderTemplate`<script>(function(){${defineScriptVars({
		slug,
		umamiConfig
	})}
      // 全局共享数据缓存
      window.postStatsCache = window.postStatsCache || {};
      
      // 获取文章浏览量统计，支持 websiteId 或 shareId
      async function fetchPostViews() {
        if (!umamiConfig.enable) {
          return;
        }
        
        // 如果已经有缓存数据，直接使用
        if (window.postStatsCache[slug]) {
          updateAllStats(window.postStatsCache[slug]);
          return;
        }
        
        const checkInterval = setInterval(async () => {
          if (typeof window.fetchUmamiStats === 'function') {
            clearInterval(checkInterval);
            try {
              // RyuChan assumes blog posts are at /blog/slug
              // Adjust this path if your URL structure is different
              const queryPath = \`/blog/\${slug}\`;
              
              const statsData = await window.fetchUmamiStats(umamiConfig.baseUrl, umamiConfig.shareId, {
                timezone: umamiConfig.timezone,
                path: queryPath
              });
              
              const pageViews = (typeof statsData.pageviews === 'object' ? statsData.pageviews.value : statsData.pageviews) || 0;
              const visits = (typeof statsData.visitors === 'object' ? statsData.visitors.value : statsData.visitors) || 0;
              
              // 缓存数据
              window.postStatsCache[slug] = { pageViews, visits };
              
              // 更新所有布局的统计数据
              updateAllStats({ pageViews, visits });
            } catch (error) {
              console.error('Error fetching page views for', slug, ':', error);
              updateAllStats({ pageViews: 0, visits: 0 });
            }
          }
        }, 100);
        
        // Stop checking after 10 seconds
        setTimeout(() => clearInterval(checkInterval), 10000);
      }
      
      // 更新所有布局的统计数据
      function updateAllStats(stats) {
        const { pageViews, visits } = stats;
        
        // 更新移动端布局
        const mobileViewsElement = document.getElementById(\`page-views-\${slug}-mobile\`);
        const mobileVisitorsElement = document.getElementById(\`page-visitors-\${slug}-mobile\`);
        
        // 更新桌面端布局
        const desktopViewsElement = document.getElementById(\`page-views-\${slug}-desktop\`);
        const desktopVisitorsElement = document.getElementById(\`page-visitors-\${slug}-desktop\`);
        
        if (mobileViewsElement) mobileViewsElement.textContent = \`\${pageViews} 次\`;
        if (mobileVisitorsElement) mobileVisitorsElement.textContent = \`\${visits} 人\`;
        
        if (desktopViewsElement) desktopViewsElement.textContent = \`\${pageViews} 次\`;
        if (desktopVisitorsElement) desktopVisitorsElement.textContent = \`\${visits} 人\`;
      }
      
      // 页面加载完成后获取统计数据
      document.addEventListener('astro:page-load', fetchPostViews);
      // Initial run for direct loads (though astro:page-load covers it usually)
      if (document.readyState === 'complete') fetchPostViews();
      else document.addEventListener('DOMContentLoaded', fetchPostViews);
    })();<\/script>`}` })}`;
}, "E:/blog/2026blog/src/components/PostCard.astro", void 0);
//#endregion
//#region src/components/widgets/PaginationArrow.astro
createAstro("https://blog.z2m.store");
var $$PaginationArrow = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PaginationArrow;
	const { url, direction, label } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(url || "#", "href")}${addAttribute(["btn bg-base-100 shadow-xl", !url && "btn-disabled"], "class:list")}>${direction === "prev" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:arrow-left-s-line",
		"class": "h-6 w-6 md:h-8 md:w-8"
	})}`}<span class="hidden lg:inline">${label}</span>${direction === "next" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:arrow-right-s-line",
		"class": "h-6 w-6 md:h-8 md:w-8"
	})}`}</a>`;
}, "E:/blog/2026blog/src/components/widgets/PaginationArrow.astro", void 0);
//#endregion
//#region src/components/widgets/PaginationNumber.astro
createAstro("https://blog.z2m.store");
var $$PaginationNumber = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PaginationNumber;
	const { number, current, baseUrl, isOnly = false } = Astro.props;
	const href = number == 1 ? baseUrl : `${baseUrl}/${number}`;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(`Page ${number}`, "title")}${addAttribute(`Page ${number}`, "aria-label")}${addAttribute([
		"join-item btn bg-base-100",
		number === current && "btn-active",
		isOnly && "rounded-btn"
	], "class:list")}>${number}</a>`;
}, "E:/blog/2026blog/src/components/widgets/PaginationNumber.astro", void 0);
//#endregion
//#region src/components/widgets/PaginationDropdown.astro
createAstro("https://blog.z2m.store");
var $$PaginationDropdown = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PaginationDropdown;
	const { hiddenPages, current, baseUrl } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="dropdown dropdown-top join-item"><div tabindex="0" role="button" class="btn join-item bg-base-100">...</div><ul class="dropdown-content z-[100] menu p-2 shadow-xl bg-base-100 rounded-box w-auto mx-auto mt-1">${hiddenPages.map((page) => renderTemplate`<li class="w-full"><a${addAttribute(page === 1 ? baseUrl : `${baseUrl}/${page}`, "href")}${addAttribute(["text-center py-1 px-3", page === current && "bg-primary text-primary-content"], "class:list")}>${page}</a></li>`)}</ul></div>`;
}, "E:/blog/2026blog/src/components/widgets/PaginationDropdown.astro", void 0);
//#endregion
//#region src/components/widgets/Pagination.astro
createAstro("https://blog.z2m.store");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { page, totalPages, pageLinks, baseUrl } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(renderTransition($$result, "rxwwgpia", "", "pagination"), "data-astro-transition-scope")} class="flex justify-between items-center w-full gap-2 order-4">${renderComponent($$result, "PaginationArrow", $$PaginationArrow, {
		"direction": "prev",
		"url": page.url.prev,
		"label": t("label.prevPage")
	})}<div class="join">${totalPages > 3 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${pageLinks.active.map((link) => link === "..." ? renderTemplate`${renderComponent($$result, "PaginationDropdown", $$PaginationDropdown, {
		"hiddenPages": pageLinks.hidden,
		"current": page.current,
		"baseUrl": baseUrl
	})}` : renderTemplate`${renderComponent($$result, "PaginationNumber", $$PaginationNumber, {
		"number": link,
		"current": page.current,
		"baseUrl": baseUrl
	})}`)}` })}` : pageLinks.active.map((link) => renderTemplate`${renderComponent($$result, "PaginationNumber", $$PaginationNumber, {
		"number": link,
		"current": page.current,
		"baseUrl": baseUrl,
		"isOnly": totalPages === 1
	})}`)}</div>${renderComponent($$result, "PaginationArrow", $$PaginationArrow, {
		"direction": "next",
		"url": page.url.next,
		"label": t("label.nextPage")
	})}</div>`;
}, "E:/blog/2026blog/src/components/widgets/Pagination.astro", "self");
//#endregion
//#region src/components/temple/CardGroup.astro
createAstro("https://blog.z2m.store");
var $$CardGroup = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CardGroup;
	const { class: className = "", cols = "2" } = Astro.props;
	const $$definedVars = defineStyleVars([{ cols }]);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`card-group ${className}`, "class")}${addAttribute($$definedVars, "style")} data-astro-cid-pjqjg5p2>${renderSlot($$result, $$slots["default"])}</div>`;
}, "E:/blog/2026blog/src/components/temple/CardGroup.astro", void 0);
//#endregion
//#region src/utils/paginationUtils.ts
/**
* 获取主博客页面的分页数据
* @param paginate 分页函数
* @returns 分页路径数据
*/
async function getMainBlogPaginationPaths({ paginate }) {
	const allPosts = await getAllPosts();
	const sortedPosts = sortPostsByPinAndDate(allPosts);
	return paginate(await getPostsWithStats(sortedPosts), { pageSize: BLOG_PAGE_SIZE });
}
/**
* 获取特定标签的分页数据
* @param paginate 分页函数
* @returns 分页路径数据
*/
async function getTagPaginationPaths({ paginate }) {
	const allPosts = await getAllPosts();
	const sortedPosts = sortPostsByDate(allPosts);
	const allTags = [...new Set(sortedPosts.flatMap((blog) => blog.data.tags || []))];
	const postsWithStats = await getPostsWithStats(sortedPosts);
	return allTags.flatMap((tag) => {
		return paginate(postsWithStats.filter((blog) => blog.data.tags?.includes(tag)), {
			params: { tag },
			pageSize: BLOG_PAGE_SIZE
		});
	});
}
/**
* 获取特定分类的分页数据
* @param paginate 分页函数
* @returns 分页路径数据
*/
async function getCategoryPaginationPaths({ paginate }) {
	const allPosts = await getAllPosts();
	const sortedPosts = sortPostsByDate(allPosts);
	const allCategories = [...new Set(sortedPosts.flatMap((blog) => blog.data.categories || []))];
	const postsWithStats = await getPostsWithStats(sortedPosts);
	return allCategories.flatMap((category) => {
		return paginate(postsWithStats.filter((blog) => blog.data.categories?.includes(category)), {
			params: { category },
			pageSize: BLOG_PAGE_SIZE
		});
	});
}
//#endregion
export { $$Pagination as a, $$CardGroup as i, getMainBlogPaginationPaths as n, $$PostCard as o, getTagPaginationPaths as r, getCategoryPaginationPaths as t };

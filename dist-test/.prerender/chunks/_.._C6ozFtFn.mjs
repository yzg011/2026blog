import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, S as maybeRenderHead, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { o as generatePageLinks, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { C as USER_AVATAR, E as USER_NAME, N as t, k as USER_SIDEBAR_SOCIAL_ICONS, w as USER_DESCRIPTION } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { a as $$Pagination, i as $$CardGroup, n as getMainBlogPaginationPaths, o as $$PostCard } from "./paginationUtils_CZGFUveR.mjs";
//#region src/pages/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blog.z2m.store");
async function getStaticPaths({ paginate }) {
	return getMainBlogPaginationPaths({ paginate });
}
var $$Component = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const totalPages = Math.ceil(page.total / page.size);
	const pageLinks = generatePageLinks(totalPages);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Blog",
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="rounded-3xl bg-base-100 shadow-lg border border-base-200 transition-all lg:hidden mb-4"><div class="flex flex-row md:flex-col md:pt-4"><a href="/about" class="relative h-36 w-36 shrink-0 md:hidden"><img class="absolute left-0 top-0 h-36 rounded-l-3xl object-cover"${addAttribute(USER_AVATAR, "src")} alt="Avatar" loading="eager"><div class="absolute right-0 top-0 h-36 w-20 bg-gradient-to-l from-base-100"></div></a><a href="/about" class="mx-auto hidden h-36 w-36 cursor-pointer rounded-3xl transition-all hover:brightness-75 md:block"><img class="h-36 w-36 rounded-3xl object-cover"${addAttribute(USER_AVATAR, "src")} alt="Avatar" loading="lazy"></a><div class="flex grow flex-col justify-center space-y-3 p-4"><div class="flex flex-col items-center"><a href="/about" class="line-clamp-1 text-xl font-semibold text-base-content">${USER_NAME}</a><span class="mb-2 mt-1 h-1 w-8 rounded-full bg-primary"></span><p class="line-clamp-1 text-base-content/60 text-sm font-semibold">${USER_DESCRIPTION}</p></div><ul class="flex flex-row items-center justify-center space-x-5">${USER_SIDEBAR_SOCIAL_ICONS.map((icon) => renderTemplate`<li><a${addAttribute(icon.href, "href")} target="_blank"${addAttribute(icon.ariaLabel, "aria-label")} class="text-primary hover:text-primary/70 transition-colors">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon.svg,
		"class": "w-5 h-5"
	})}</a></li>`)}</ul></div></div></div>${renderComponent($$result, "CardGroup", $$CardGroup, {
		"cols": "2",
		"class": "grid-cols-2"
	}, { "default": ($$result) => renderTemplate`<a href="/blog/archives" class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full rounded-2xl"><div class="card-body p-2 sm:p-4 flex flex-row items-center gap-2 sm:gap-3"><div class="rounded-full bg-accent/10 p-2 sm:p-3 flex-shrink-0">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:archive",
		"class": "w-4 h-4 sm:w-6 sm:h-6 text-accent"
	})}</div><div class="min-w-0 flex-1"><h2 class="card-title text-xs sm:text-lg leading-tight mb-0.5">${t("label.archivePage")}</h2><p class="text-[10px] sm:text-sm opacity-75 truncate">${t("label.archivesPageDescription")}</p></div></div></a><a href="/blog/categories" class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full rounded-2xl"><div class="card-body p-2 sm:p-4 flex flex-row items-center gap-2 sm:gap-3"><div class="rounded-full bg-primary/10 p-2 sm:p-3 flex-shrink-0">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:folder",
		"class": "w-4 h-4 sm:w-6 sm:h-6 text-primary"
	})}</div><div class="min-w-0 flex-1"><h2 class="card-title text-xs sm:text-lg leading-tight mb-0.5">${t("label.categoryPage")}</h2><p class="text-[10px] sm:text-sm opacity-75 truncate">${t("label.categoriesPageDescription")}</p></div></div></a><a href="/blog/tags" class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full rounded-2xl"><div class="card-body p-2 sm:p-4 flex flex-row items-center gap-2 sm:gap-3"><div class="rounded-full bg-secondary/10 p-2 sm:p-3 flex-shrink-0">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-4 h-4 sm:w-6 sm:h-6 text-secondary"
	})}</div><div class="min-w-0 flex-1"><h2 class="card-title text-xs sm:text-lg leading-tight mb-0.5">${t("label.tagPage")}</h2><p class="text-[10px] sm:text-sm opacity-75 truncate">${t("label.tagsPageDescription")}</p></div></div></a><a href="/blog/search" class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full rounded-2xl"><div class="card-body p-2 sm:p-4 flex flex-row items-center gap-2 sm:gap-3"><div class="rounded-full bg-info/10 p-2 sm:p-3 flex-shrink-0">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "w-4 h-4 sm:w-6 sm:h-6 text-info"
	})}</div><div class="min-w-0 flex-1"><h2 class="card-title text-xs sm:text-lg leading-tight mb-0.5">${t("label.searchPage")}</h2><p class="text-[10px] sm:text-sm opacity-75 truncate">${t("label.searchPageDescription")}</p></div></div></a>` })}${renderComponent($$result, "CardGroup", $$CardGroup, { "cols": "1" }, { "default": ($$result) => renderTemplate`${page.data.map((blog) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"title": blog.data.title,
		"image": blog.data.image,
		"description": blog.data.description,
		"url": "/blog/" + blog.id,
		"pubDate": blog.data.pubDate,
		"badge": blog.data.badge,
		"categories": blog.data.categories,
		"tags": blog.data.tags,
		"word": blog.remarkPluginFrontmatter.totalCharCount,
		"time": blog.remarkPluginFrontmatter.readingTime
	})}`)}` })}${renderComponent($$result, "Pagination", $$Pagination, {
		"page": page,
		"totalPages": totalPages,
		"pageLinks": pageLinks,
		"baseUrl": ``
	})}` })}`;
}, "E:/blog/2026blog/src/pages/[...page].astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/[...page].astro";
var $$url = "/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };

import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, S as maybeRenderHead, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { o as generatePageLinks, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { a as $$Pagination, i as $$CardGroup, n as getMainBlogPaginationPaths, o as $$PostCard } from "./paginationUtils_CZGFUveR.mjs";
//#region src/pages/blog/[...page].astro
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
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardGroup", $$CardGroup, { "cols": "2" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a href="/blog/archives" class="card bg-base-100 shadow-lg"><div class="card-body p-4"><div class="flex items-center gap-3"><div class="rounded-full bg-accent/10 p-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:archive",
		"class": "w-6 h-6 text-accent"
	})}</div><div><h2 class="card-title text-lg">${t("label.archivePage")}</h2><p class="text-sm opacity-75">${t("label.archivesPageDescription")}</p></div></div></div></a><a href="/blog/categories" class="card bg-base-100 shadow-lg"><div class="card-body p-4"><div class="flex items-center gap-3"><div class="rounded-full bg-primary/10 p-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:folder",
		"class": "w-6 h-6 text-primary"
	})}</div><div><h2 class="card-title text-lg">${t("label.categoryPage")}</h2><p class="text-sm opacity-75">${t("label.categoriesPageDescription")}</p></div></div></div></a><a href="/blog/tags" class="card bg-base-100 shadow-lg"><div class="card-body p-4"><div class="flex items-center gap-3"><div class="rounded-full bg-secondary/10 p-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-6 h-6 text-secondary"
	})}</div><div><h2 class="card-title text-lg">${t("label.tagPage")}</h2><p class="text-sm opacity-75">${t("label.tagsPageDescription")}</p></div></div></div></a><a href="/blog/search" class="card bg-base-100 shadow-lg"><div class="card-body p-4"><div class="flex items-center gap-3"><div class="rounded-full bg-info/10 p-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "w-6 h-6 text-info"
	})}</div><div><h2 class="card-title text-lg">${t("label.searchPage")}</h2><p class="text-sm opacity-75">${t("label.searchPageDescription")}</p></div></div></div></a>` })}${renderComponent($$result, "CardGroup", $$CardGroup, { "cols": "1" }, { "default": ($$result) => renderTemplate`${page.data.map((blog) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
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
		"baseUrl": `/blog`
	})}` })}`;
}, "E:/blog/2026blog/src/pages/blog/[...page].astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/blog/[...page].astro";
var $$url = "/blog/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };

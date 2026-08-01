import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, S as maybeRenderHead, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { o as generatePageLinks, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { a as $$Pagination, i as $$CardGroup, o as $$PostCard, r as getTagPaginationPaths } from "./paginationUtils_CZGFUveR.mjs";
import { t as $$BaseCard } from "./BaseCard_DvyPEXx8.mjs";
//#region src/pages/blog/tag/[tag]/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blog.z2m.store");
async function getStaticPaths({ paginate }) {
	return getTagPaginationPaths({ paginate });
}
var $$Component = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const params = Astro.params;
	const totalPages = Math.ceil(page.total / page.size);
	const pageLinks = generatePageLinks(totalPages);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": `${t("label.tagPage")} - ${params.tag}`,
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "title": t("label.tagPage") }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-6 h-6 text-secondary"
	})}<h1 id="h1" class="text-2xl md:text-3xl font-bold">${params.tag}</h1><div class="badge badge-secondary">${page.total} ${page.total === 1 ? t("label.post") : t("label.posts")}</div></div><a href="/blog/tags" class="btn btn-outline btn-sm gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-4 h-4"
	})}<span>${t("label.allTags")}</span></a></div><div class="divider my-2"></div><p class="text-sm opacity-75">${t("label.tagDescription")}</p>` })}${renderComponent($$result, "CardGroup", $$CardGroup, {
		"cols": "1",
		"gap": "6"
	}, { "default": ($$result) => renderTemplate`${page.data.map((blog) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
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
		"baseUrl": `/blog/tag/${params.tag}`
	})}` })}`;
}, "E:/blog/2026blog/src/pages/blog/tag/[tag]/[...page].astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/blog/tag/[tag]/[...page].astro";
var $$url = "/blog/tag/[tag]/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/tag/[tag]/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };

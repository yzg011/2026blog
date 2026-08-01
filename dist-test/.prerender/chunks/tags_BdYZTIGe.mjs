import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { d as getTagColorClass, f as getTagFontSize, p as getTagsWithCount, s as getAllPosts, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { t as $$BaseCard } from "./BaseCard_DvyPEXx8.mjs";
//#region src/pages/blog/tags.astro
var tags_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tags,
	file: () => $$file,
	url: () => $$url
});
var $$Tags = createComponent(async ($$result, $$props, $$slots) => {
	const allPosts = await getAllPosts();
	const tagMap = getTagsWithCount(allPosts);
	const tagEntries = Array.from(tagMap.entries());
	tagEntries.sort((a, b) => b[1] - a[1]);
	const maxCount = Math.max(...tagMap.values());
	const minCount = Math.min(...tagMap.values());
	const totalTags = tagMap.size;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": t("label.tagPage"),
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "title": t("label.tagPage") }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-6 h-6 text-secondary"
	})}<h1 id="h1" class="text-2xl md:text-3xl font-bold">${t("label.tagPage")}</h1><div class="badge badge-secondary">${totalTags} ${t("label.totalTags")}</div></div><a href="/blog" class="btn btn-outline btn-sm gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "w-4 h-4"
	})}<span>${t("label.backToBlog")}</span></a></div><div class="divider my-2"></div><p class="text-sm opacity-75">${t("label.tagsPageDescription")}</p>` })}${renderComponent($$result, "BaseCard", $$BaseCard, { "title": t("label.tagPage") }, { "default": ($$result) => renderTemplate`<div class="tags-container">${tagEntries.length > 0 ? renderTemplate`<div class="tags-cloud">${tagEntries.map(([tag, count], index) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")}${addAttribute(`tags-item ${getTagColorClass(count, maxCount)}`, "class")}${addAttribute(`font-size: ${getTagFontSize(count, maxCount, minCount)}rem;`, "style")}${addAttribute(count, "data-count")}${addAttribute(index, "data-index")}><span class="tags-content">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:tag" })}<span class="tags-text">${tag}</span><span class="tags-count">${count}</span></span></a>`)}</div>` : renderTemplate`<div class="empty-state">${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:emotion-sad-line",
		"class": "empty-icon"
	})}<p class="empty-text">${t("label.noTag")}</p></div>`}</div>` })}` })}`;
}, "E:/blog/2026blog/src/pages/blog/tags.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/blog/tags.astro";
var $$url = "/blog/tags";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/tags@_@astro
var page = () => tags_exports;
//#endregion
export { page };

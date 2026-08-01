import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, i as createTransitionScope, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { g as renderScript, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { t as $$BaseCard } from "./BaseCard_DvyPEXx8.mjs";
//#region src/pages/blog/search.astro
var search_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Search,
	file: () => $$file,
	url: () => $$url
});
var $$Search = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": t("label.searchPage"),
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "title": t("label.searchPage") }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "w-6 h-6 text-info"
	})}<h1 id="h1" class="text-2xl md:text-3xl font-bold">${t("label.searchPage")}</h1></div><a href="/blog" class="btn btn-outline btn-sm gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "w-4 h-4"
	})}<span>${t("label.backToBlog")}</span></a></div><div class="divider my-2"></div><p class="text-sm opacity-75">${t("label.searchPageDescription")}</p>` })}${renderComponent($$result, "BaseCard", $$BaseCard, {}, { "default": ($$result) => renderTemplate`<div id="search-container" class="w-full"><div${addAttribute(createTransitionScope($$result, "2ajdobew"), "data-astro-transition-persist")} id="pagefind-search"></div></div>` })}` })}${renderScript($$result, "E:/blog/2026blog/src/pages/blog/search.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/pages/blog/search.astro", "self");
var $$file = "E:/blog/2026blog/src/pages/blog/search.astro";
var $$url = "/blog/search";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/search@_@astro
var page = () => search_exports;
//#endregion
export { page };

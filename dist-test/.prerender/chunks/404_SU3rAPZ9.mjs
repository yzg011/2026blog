import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { t as $$MainCard } from "./MainCard_CUQw-pEY.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "404",
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "MainCard", $$MainCard, {
		"title": t("label.404title") || "Page Not Found",
		"description": t("label.404description") || "Looks like you've ventured into the unknown. The page you're looking for doesn't exist or has been moved to another dimension.",
		"textOverlay": "404",
		"infoIcon": "lucide:help-circle"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col sm:flex-row gap-4 justify-center my-8"><a href="/" class="btn btn-primary gap-2 btn-shine-effect">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:home",
		"class": "w-5 h-5"
	})}<span>${t("label.404backHome") || "Back to Home"}</span></a><button id="goBackBtn" class="btn btn-outline gap-2" onclick="history.back()">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:corner-up-left",
		"class": "w-5 h-5"
	})}<span>${t("label.404goBack") || "Go Back"}</span></button></div><div class="divider my-6">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:map",
		"class": "w-10 h-10"
	})}</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><a href="/blog" class="card bg-base-200 p-4 hover-lift text-center transition-all duration-300"><div class="text-info mb-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "w-8 h-8 mx-auto"
	})}</div><h3 class="font-semibold">${t("label.404exploreBlog") || "Explore our blog"}</h3></a><a href="/blog/archives" class="card bg-base-200 p-4 hover-lift text-center transition-all duration-300"><div class="text-info mb-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:archive",
		"class": "w-8 h-8 mx-auto"
	})}</div><h3 class="font-semibold">${t("label.404browseArchives") || "Browse archives"}</h3></a><a href="/blog/search" class="card bg-base-200 p-4 hover-lift text-center transition-all duration-300"><div class="text-info mb-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:search",
		"class": "w-8 h-8 mx-auto"
	})}</div><h3 class="font-semibold">${t("label.404searchContent") || "Search content"}</h3></a></div>` })}` })}`;
}, "E:/blog/2026blog/src/pages/404.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };

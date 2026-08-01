import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { t as getCollection } from "./_astro_content_0m825bVV.mjs";
//#region src/pages/write/index.astro
var write_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = await getCollection("blog");
	const categories = [...new Set(posts.flatMap((post) => post.data.categories || []))].sort();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "写文章",
		"showSidebar": false,
		"showBanner": false,
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "WritePage", null, {
		"client:only": "react",
		"categories": categories,
		"client:component-hydration": "only",
		"client:component-path": "@/components/write/WritePage",
		"client:component-export": "default"
	})}` })}`;
}, "E:/blog/2026blog/src/pages/write/index.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/write/index.astro";
var $$url = "/write";
//#endregion
//#region \0virtual:astro:page:src/pages/write/index@_@astro
var page = () => write_exports;
//#endregion
export { page };

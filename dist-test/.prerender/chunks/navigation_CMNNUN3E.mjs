import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import yaml from "js-yaml";
import fs from "fs";
import path from "path";
//#region src/lib/load-navigation.ts
var NAV_YAML_PATH = path.resolve(process.cwd(), "src/data/navigation.yaml");
function loadNavigation() {
	try {
		const raw = fs.readFileSync(NAV_YAML_PATH, "utf-8");
		const data = yaml.load(raw);
		if (Array.isArray(data)) return data;
		return [];
	} catch {
		return [];
	}
}
//#endregion
//#region src/pages/navigation.astro
var navigation_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Navigation,
	file: () => $$file,
	url: () => $$url
});
var $$Navigation = createComponent(($$result, $$props, $$slots) => {
	const navData = loadNavigation();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "导航",
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "NavEditPage", null, {
		"client:only": "react",
		"initialNavData": navData,
		"client:component-hydration": "only",
		"client:component-path": "@/components/write/NavEditPage",
		"client:component-export": "default"
	})}${maybeRenderHead($$result)}<div class="divider my-6 animate-fade-in-up" style="animation-delay: 0.1s;">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-12 h-12 text-primary/50"
	})}</div>` })}`;
}, "E:/blog/2026blog/src/pages/navigation.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/navigation.astro";
var $$url = "/navigation";
//#endregion
//#region \0virtual:astro:page:src/pages/navigation@_@astro
var page = () => navigation_exports;
//#endregion
export { page };

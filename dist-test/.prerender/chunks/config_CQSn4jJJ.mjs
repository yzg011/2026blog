import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as defineScriptVars, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { c as MUSIC_CONFIG } from "./_astro_content_0m825bVV.mjs";
import fs from "node:fs";
import path from "node:path";
//#region src/pages/config.astro
var config_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Config,
	file: () => $$file,
	url: () => $$url
});
var $$Config = createComponent(($$result, $$props, $$slots) => {
	const serverPlaylists = JSON.stringify(MUSIC_CONFIG?.playlists || []);
	const configYaml = JSON.stringify(fs.readFileSync(path.resolve("ryuchan.config.yaml"), "utf-8"));
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "站点配置",
		"showSidebar": false,
		"showBanner": false,
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`<script>(function(){${defineScriptVars({
		serverPlaylists,
		configYaml
	})}
        window.__SERVER_PLAYLISTS__ = JSON.parse(serverPlaylists);
        window.__SERVER_CONFIG__ = configYaml;
    })();<\/script>${renderComponent($$result, "ConfigPage", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "@/components/write/ConfigPage",
		"client:component-export": "ConfigPage"
	})}` })}`;
}, "E:/blog/2026blog/src/pages/config.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/config.astro";
var $$url = "/config";
//#endregion
//#region \0virtual:astro:page:src/pages/config@_@astro
var page = () => config_exports;
//#endregion
export { page };

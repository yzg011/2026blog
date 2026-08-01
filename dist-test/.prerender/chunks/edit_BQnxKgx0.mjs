import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
//#region src/pages/project/edit.astro
var edit_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Edit,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://blog.z2m.store");
var $$Edit = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Edit;
	return Astro.redirect("/project", 301);
}, "E:/blog/2026blog/src/pages/project/edit.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/project/edit.astro";
var $$url = "/project/edit";
//#endregion
//#region \0virtual:astro:page:src/pages/project/edit@_@astro
var page = () => edit_exports;
//#endregion
export { page };

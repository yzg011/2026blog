import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
//#region src/pages/projects-edit.astro
var projects_edit_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ProjectsEdit,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://blog.z2m.store");
var $$ProjectsEdit = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectsEdit;
	return Astro.redirect("/project", 301);
}, "E:/blog/2026blog/src/pages/projects-edit.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/projects-edit.astro";
var $$url = "/projects-edit";
//#endregion
//#region \0virtual:astro:page:src/pages/projects-edit@_@astro
var page = () => projects_edit_exports;
//#endregion
export { page };

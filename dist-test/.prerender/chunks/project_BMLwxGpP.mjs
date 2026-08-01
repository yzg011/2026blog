import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import * as fs$1 from "node:fs";
import * as path$1 from "node:path";
import yaml from "js-yaml";
//#region src/lib/load-projects.ts
var projectsPath = path$1.resolve("src/data/projects.yaml");
function loadProjects() {
	try {
		const content = fs$1.readFileSync(projectsPath, "utf8");
		const data = yaml.load(content);
		if (Array.isArray(data)) return data;
		return [];
	} catch {
		return [];
	}
}
//#endregion
//#region src/pages/project.astro
var project_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Project,
	file: () => $$file,
	url: () => $$url
});
var $$Project = createComponent(($$result, $$props, $$slots) => {
	const projects = loadProjects();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Projects",
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProjectsEditPage", null, {
		"client:only": "react",
		"initialProjects": projects,
		"client:component-hydration": "only",
		"client:component-path": "@/components/write/ProjectsEditPage",
		"client:component-export": "default"
	})}${maybeRenderHead($$result)}<div class="flex justify-center mt-12 animate-fade-in-up" style="animation-delay: 0.2s;"><a href="https://github.com/kobaridev?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-outline gap-2 px-8">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:github",
		"class": "w-5 h-5"
	})}<span>View More on GitHub</span></a></div><div class="divider my-6 animate-fade-in-up" style="animation-delay: 0.1s;">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-12 h-12 text-primary/50"
	})}</div>` })}`;
}, "E:/blog/2026blog/src/pages/project.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/project.astro";
var $$url = "/project";
//#endregion
//#region \0virtual:astro:page:src/pages/project@_@astro
var page = () => project_exports;
//#endregion
export { page };

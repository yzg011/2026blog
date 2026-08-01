import { I as createAstro, S as maybeRenderHead, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
//#region src/components/widgets/PostFilter.astro
createAstro("https://blog.z2m.store");
var $$PostFilter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostFilter;
	const { categories = [], tags = [] } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-wrap items-center gap-2">${categories.map((category) => renderTemplate`<a${addAttribute(`/blog/category/${category}`, "href")} class="btn btn-xs btn-category">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:folder",
		"class": "w-4 h-4"
	})}<span>${category}</span></a>`)}${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")} class="btn btn-xs btn-tag">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-4 h-4"
	})}<span>${tag}</span></a>`)}${categories.length === 0 && renderTemplate`<span class="btn btn-xs btn-ghost opacity-60 gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:folder",
		"class": "w-4 h-4"
	})}<span>${t("label.noCategory")}</span></span>`}${tags.length === 0 && renderTemplate`<span class="btn btn-xs btn-ghost opacity-60 gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:tag",
		"class": "w-4 h-4"
	})}<span>${t("label.noTag")}</span></span>`}</div>`;
}, "E:/blog/2026blog/src/components/widgets/PostFilter.astro", void 0);
//#endregion
export { $$PostFilter as t };

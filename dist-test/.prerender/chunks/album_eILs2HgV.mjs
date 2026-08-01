import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
//#region src/pages/album.astro
var album_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Album,
	file: () => $$file,
	url: () => $$url
});
var $$Album = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "相册集",
		"description": "记录生活中的美好瞬间"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mb-8"><div class="flex items-center justify-between mb-4"><h1 class="text-3xl md:text-4xl font-bold flex items-center gap-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:camera",
		"class": "text-primary"
	})}<span>相册集</span></h1>${renderComponent($$result, "AlbumToolbar", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "@components/admin/AlbumToolbar",
		"client:component-export": "default"
	})}</div><p class="text-muted-foreground text-lg">记录生活中的美好瞬间，每一张照片都承载着珍贵的回忆。</p></div>${renderComponent($$result, "AlbumGrid", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "@components/admin/AlbumGrid",
		"client:component-export": "default"
	})}<div class="divider my-8">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-12 h-12 text-primary/50"
	})}</div>` })}${renderComponent($$result, "AlbumAdmin", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "@components/admin/AlbumAdmin",
		"client:component-export": "default"
	})}`;
}, "E:/blog/2026blog/src/pages/album.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/album.astro";
var $$url = "/album";
//#endregion
//#region \0virtual:astro:page:src/pages/album@_@astro
var page = () => album_exports;
//#endregion
export { page };

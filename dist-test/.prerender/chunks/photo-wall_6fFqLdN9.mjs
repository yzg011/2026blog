import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, S as maybeRenderHead, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
//#endregion
//#region src/data/albums.ts
var albums = [{
	"id": "4f7a2b1c",
	"date": "2024-05-20",
	"event": "新世纪福音战士",
	"title": "明日香头像",
	"description": "明日香头像收集",
	"icon": "🌟",
	"photos": [{
		"src": "/image/albums/4f7a2b1c-0-1785473468872.jpeg",
		"variant": "9x16",
		"title": "IMG_0127"
	}]
}, {
	"id": "8e3d6f9a",
	"date": "2024-07-15",
	"event": "电锯人",
	"title": "蕾塞头像",
	"description": "蕾塞头像收集",
	"icon": "💥",
	"photos": [{
		"src": "/image/albums/8e3d6f9a-0-1785487895598.png",
		"variant": "4x3",
		"title": "63a37f9a00c3458aa0c77920df22600c.jpeg~tplv-a9rns2rl98-ppe_ds_wm_1_6_flow_b_3_RG91YmFvMDIxTk5BMDAxMjYwNzE4Mg=="
	}]
}];
//#endregion
//#region src/pages/photo-wall.astro
var photo_wall_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PhotoWall,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://blog.z2m.store");
var $$PhotoWall = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PhotoWall;
	const id = Astro.url.searchParams.get("id") || "";
	const album = id ? albums.find((a) => a.id === id) : null;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": album ? album.event : `照片集`,
		"description": album?.description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mb-10"${addAttribute(album ? `view-transition-name: album-${album.id}` : "", "style")}><div class="mb-4"><h1 class="text-3xl md:text-4xl font-bold flex items-center gap-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:camera",
		"class": "text-primary"
	})}<span id="photo-wall-title">${album ? `${album.icon || ""} ${album.event}` : "照片集"}</span></h1></div><p id="photo-wall-description" class="text-base-content/70 text-lg mb-6">${album ? album.title : id ? "照片集" : "请从相册页面选择相册查看"}</p>${renderComponent($$result, "PhotoWallGrid", null, {
		"initialAlbum": album || null,
		"event": id,
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "E:/blog/2026blog/src/components/admin/PhotoWallGrid.tsx",
		"client:component-export": "default"
	})}</div><div class="divider my-6">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-12 h-12 text-primary/50"
	})}</div>` })}`;
}, "E:/blog/2026blog/src/pages/photo-wall.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/photo-wall.astro";
var $$url = "/photo-wall";
//#endregion
//#region \0virtual:astro:page:src/pages/photo-wall@_@astro
var page = () => photo_wall_exports;
//#endregion
export { page };

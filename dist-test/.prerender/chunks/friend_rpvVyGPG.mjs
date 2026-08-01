import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, S as maybeRenderHead, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { g as renderScript, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import yaml from "js-yaml";
import fs from "fs";
import path from "path";
//#region src/components/mdx/Showcase.astro
createAstro("https://blog.z2m.store");
var $$Showcase = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Showcase;
	const { name, url } = Astro.props;
	const domain = new URL(url).hostname;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="website-badge btn btn-sm btn-outline gap-2"${addAttribute(`Website: ${name} (${domain})`, "title")}><div class="status-dot flex h-3 w-3 items-center justify-center rounded-full bg-gray-200" title="Checking status..."><div class="h-2 w-2 rounded-full"></div></div><span class="font-medium">${name}</span></a>${renderScript($$result, "E:/blog/2026blog/src/components/mdx/Showcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/components/mdx/Showcase.astro", void 0);
//#endregion
//#region src/lib/load-friends.ts
var FRIENDS_YAML_PATH = path.resolve(process.cwd(), "src/data/friends.yaml");
function loadFriends() {
	try {
		const raw = fs.readFileSync(FRIENDS_YAML_PATH, "utf-8");
		const data = yaml.load(raw);
		if (Array.isArray(data)) return data;
		return [];
	} catch {
		return [];
	}
}
//#endregion
//#region src/pages/friend.astro
var friend_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Friend,
	file: () => $$file,
	url: () => $$url
});
var $$Friend = createComponent(($$result, $$props, $$slots) => {
	const friends = loadFriends();
	const sites = [{
		name: "Ryuchan Demo",
		url: "https://demo.131714.xyz/"
	}];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Friends",
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "FriendsEditPage", null, {
		"client:only": "react",
		"initialFriends": friends,
		"client:component-hydration": "only",
		"client:component-path": "@/components/write/FriendsEditPage",
		"client:component-export": "default"
	})}${maybeRenderHead($$result)}<div class="animate-fade-in-up mt-12" style="animation-delay: 0.2s;"><div class="bg-base-100 rounded-3xl p-6 md:p-8 shadow-lg border border-base-200"><div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"><div><h2 class="text-2xl font-bold flex items-center gap-2 mb-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:layout-template",
		"class": "w-6 h-6 text-secondary"
	})}<span>Sites Using Ryuchan</span></h2><p class="text-base-content/70">这里展示了使用 Ryuchan 主题构建的网站。</p></div><a href="https://github.com/kobaridev/Ryuchan/edit/main/src/data/friends.yaml" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:plus-circle",
		"class": "w-4 h-4"
	})}Add Your Site</a></div><div class="flex flex-wrap gap-4">${sites.map((site) => renderTemplate`${renderComponent($$result, "Showcase", $$Showcase, {
		"name": site.name,
		"url": site.url
	})}`)}</div><div class="mt-6 p-4 bg-base-200/50 rounded-2xl text-sm text-base-content/60 flex gap-2 items-start">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:info",
		"class": "w-5 h-5 flex-shrink-0 mt-0.5"
	})}<p>想要将你的网站添加到这里吗？点击右上角的 "Add Your Site" 按钮，提交一个 Pull Request 来编辑此页面！</p></div></div></div><div class="divider my-6 animate-fade-in-up" style="animation-delay: 0.1s;">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:heart",
		"class": "w-12 h-12 text-primary/50"
	})}</div>` })}`;
}, "E:/blog/2026blog/src/pages/friend.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/friend.astro";
var $$url = "/friend";
//#endregion
//#region \0virtual:astro:page:src/pages/friend@_@astro
var page = () => friend_exports;
//#endregion
export { page };

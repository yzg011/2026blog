import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as maybeRenderHead, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { c as getCategoriesWithPosts, g as renderScript, l as getCategoryColorClass, s as getAllPosts, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { N as t, s as DATE_FORMAT } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { t as dayjs_default } from "./dayjs_EMIvGZG2.mjs";
import { t as $$BaseCard } from "./BaseCard_DvyPEXx8.mjs";
//#region src/pages/blog/categories.astro
var categories_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Categories,
	file: () => $$file,
	url: () => $$url
});
var $$Categories = createComponent(async ($$result, $$props, $$slots) => {
	const allPosts = await getAllPosts();
	const categoryMap = getCategoriesWithPosts(allPosts);
	const categoryEntries = Array.from(categoryMap.entries());
	categoryEntries.sort((a, b) => a[0].localeCompare(b[0]));
	categoryEntries.forEach(([_, posts]) => {
		posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
	});
	const totalCategories = categoryMap.size;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": t("label.categoryPage"),
		"isIndexed": false
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "title": t("label.categoryPage") }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"><div class="flex items-center gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:folder",
		"class": "w-6 h-6 text-primary"
	})}<h1 id="h1" class="text-2xl md:text-3xl font-bold">${t("label.categoryPage")}</h1><div class="badge badge-primary">${totalCategories} ${t("label.totalCategories")}</div></div><a href="/blog" class="btn btn-outline btn-sm gap-2">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "w-4 h-4"
	})}<span>${t("label.backToBlog")}</span></a></div><div class="divider my-2"></div><p class="text-sm opacity-75">${t("label.categoriesPageDescription")}</p>` })}${renderComponent($$result, "BaseCard", $$BaseCard, { "title": t("label.categoryPage") }, { "default": ($$result) => renderTemplate`<div class="categories-container">${categoryEntries.length > 0 ? renderTemplate`<div class="categories-grid">${categoryEntries.map(([category, posts], index) => renderTemplate`<div class="category-card"${addAttribute(index, "data-index")}><div${addAttribute(`category-inner ${getCategoryColorClass(index)}`, "class")}><div class="category-header"${addAttribute(category, "data-category")}><div class="category-title"><div class="category-icon">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:folder" })}</div><h2>${category}</h2><span class="category-count">${posts.length}</span></div><button class="toggle-btn" aria-label="Toggle category content">${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:arrow-down-s-line",
		"class": "toggle-icon"
	})}</button></div><div class="category-content scrollbar-none"><div class="category-divider"></div><ul class="post-list">${posts.map((post) => renderTemplate`<li class="post-item"><a${addAttribute(`/blog/${post.id}`, "href")} class="post-link"><span class="post-title">${post.data.title}</span><span class="post-date">${dayjs_default(post.data.pubDate).format(DATE_FORMAT)}</span></a></li>`)}</ul></div></div></div>`)}</div>` : renderTemplate`<div class="empty-state">${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:emotion-sad-line",
		"class": "empty-icon"
	})}<p class="empty-text">${t("label.noCategory")}</p></div>`}</div>` })}` })}${renderScript($$result, "E:/blog/2026blog/src/pages/blog/categories.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/blog/2026blog/src/pages/blog/categories.astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/blog/categories.astro";
var $$url = "/blog/categories";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/categories@_@astro
var page = () => categories_exports;
//#endregion
export { page };

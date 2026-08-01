import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { l as SITE_DESCRIPTION, t as getCollection, v as SITE_TITLE } from "./_astro_content_0m825bVV.mjs";
import rss from "@astrojs/rss";
//#region src/pages/sitemap.xml.ts
var sitemap_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
async function GET(context) {
	const sortedPosts = (await getCollection("blog")).sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sortedPosts.map((blog) => ({
			...blog.data,
			link: `/blog/${blog.id}/`
		}))
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/sitemap.xml@_@ts
var page = () => sitemap_xml_exports;
//#endregion
export { page };

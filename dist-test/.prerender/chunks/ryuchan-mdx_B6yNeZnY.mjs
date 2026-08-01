//#region src/content/blog/ryuchan-mdx.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ryuchan-mdx_CyB7M4rD.mjs");
}
var defaultMod = {
	__astroPropagation: true,
	getMod,
	collectedLinks: "@@ASTRO-LINKS@@",
	collectedStyles: "@@ASTRO-STYLES@@",
	collectedScripts: []
};
//#endregion
export { defaultMod as default };

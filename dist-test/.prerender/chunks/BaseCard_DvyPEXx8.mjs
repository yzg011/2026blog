import { I as createAstro, S as maybeRenderHead, h as renderSlot, u as renderComponent, v as renderTemplate } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { a as $$Card } from "./BaseLayout_DiR96fKT.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { t as $$Image } from "./_astro_assets_C9BQRxhs.mjs";
//#region src/components/BaseCard.astro
createAstro("https://blog.z2m.store");
var $$BaseCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseCard;
	const { title, image } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div id="image-container">${image && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"width": "1920",
		"height": "1080",
		"alt": title,
		"loading": "eager"
	})}`}</div><div class="p-4 sm:p-6">${renderSlot($$result, $$slots["default"])}</div>` })}`;
}, "E:/blog/2026blog/src/components/BaseCard.astro", void 0);
//#endregion
export { $$BaseCard as t };

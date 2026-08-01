import { N as createVNode, f as Fragment, t as __astro_tag_component__ } from "./server_da45uaTM.mjs";
//#region src/content/blog/using-mdx.mdx
var frontmatter = {
	"title": "Using MDX",
	"description": "Lorem ipsum dolor sit amet",
	"pubDate": "2022-07-02T00:00",
	"image": "/image/image1.webp",
	"draft": false,
	"tags": [],
	"categories": ["Documentation"],
	"badge": "MDX",
	"totalCharCount": 141,
	"readingTime": 1
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "why-mdx",
			"text": "Why MDX?"
		},
		{
			"depth": 2,
			"slug": "example",
			"text": "Example"
		},
		{
			"depth": 2,
			"slug": "more-links",
			"text": "More Links"
		}
	];
}
function _createMdxContent(props) {
	const _components = {
		a: "a",
		br: "br",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"This theme comes with the ",
			createVNode(_components.a, {
				href: "https://docs.astro.build/en/guides/integrations-guide/mdx/",
				rel: "nofollow",
				children: ["@astrojs/mdx", createVNode(_components.span, { children: "↗" })]
			}),
			" integration installed and configured in your ",
			createVNode(_components.code, { children: "astro.config.mjs" }),
			" config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "why-mdx",
			children: "Why MDX?"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to ",
			createVNode(_components.a, {
				href: "https://docs.astro.build/en/guides/markdown-content/#mdx-features",
				rel: "nofollow",
				children: ["mix JavaScript and UI Components into your Markdown content", createVNode(_components.span, { children: "↗" })]
			}),
			" for things like interactive charts or alerts."
		] }),
		"\n",
		createVNode(_components.p, { children: "If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze." }),
		"\n",
		createVNode(_components.h2, {
			id: "example",
			children: "Example"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Here is how you import and use a UI component inside of MDX.",
			createVNode(_components.br, {}),
			"\nWhen you open this page in the browser, you should see the clickable button below."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "more-links",
			children: "More Links"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: createVNode(_components.a, {
				href: "https://mdxjs.com/docs/what-is-mdx",
				rel: "nofollow",
				children: ["MDX Syntax Documentation", createVNode(_components.span, { children: "↗" })]
			}) }),
			"\n",
			createVNode(_components.li, { children: createVNode(_components.a, {
				href: "https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages",
				rel: "nofollow",
				children: ["Astro Usage Documentation", createVNode(_components.span, { children: "↗" })]
			}) }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Note:" }),
				" ",
				createVNode(_components.a, {
					href: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
					rel: "nofollow",
					children: ["Client Directives", createVNode(_components.span, { children: "↗" })]
				}),
				" are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default."
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, {
		...props,
		children: createVNode(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var url = "src/content/blog/using-mdx.mdx";
var file = "E:/blog/2026blog/src/content/blog/using-mdx.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/blog/2026blog/src/content/blog/using-mdx.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

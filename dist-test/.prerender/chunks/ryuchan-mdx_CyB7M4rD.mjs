import { I as createAstro, N as createVNode, S as maybeRenderHead, f as Fragment, h as renderSlot, t as __astro_tag_component__, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { n as $$Icon, t as $$Image } from "./_astro_assets_C9BQRxhs.mjs";
//#region src/components/mdx/Collapse.astro
createAstro("https://blog.z2m.store");
var $$Collapse = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Collapse;
	const { title } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<details class="not-prose group collapse bg-base-200 rounded-2xl border border-base-content/20 overflow-hidden"><summary class="collapse-title text-xl font-medium cursor-pointer hover:bg-base-200 transition-colors"><div class="flex items-center justify-between">${title}${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-down",
		"class": "shrink-0 w-5 h-5 transform transition-transform group-open:rotate-180"
	})}</div></summary><div class="collapse-content"><div class="pt-4">${renderSlot($$result, $$slots["default"])}</div></div></details>`;
}, "E:/blog/2026blog/src/components/mdx/Collapse.astro", void 0);
//#endregion
//#region src/components/mdx/Diff.astro
createAstro("https://blog.z2m.store");
var $$Diff = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Diff;
	const { l, r, rightAlt = "Right image", leftAlt = "Left image" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="not-prose diff aspect-[16/9] rounded-lg overflow-hidden fade-in-up"><div class="diff-item-1"><img${addAttribute(rightAlt, "alt")}${addAttribute(r, "src")} loading="lazy"></div><div class="diff-item-2"><img${addAttribute(leftAlt, "alt")}${addAttribute(l, "src")} loading="lazy"></div><div class="diff-resizer"></div></div>`;
}, "E:/blog/2026blog/src/components/mdx/Diff.astro", void 0);
//#endregion
//#region src/components/mdx/alerts/AlertBase.astro
createAstro("https://blog.z2m.store");
var $$AlertBase = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AlertBase;
	const { type, icon } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div role="alert"${addAttribute(`alert alert-${type} not-prose`, "class")}>${renderSlot($$result, $$slots["icon"], renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "shrink-0 w-6 h-6"
	})}`)}<span>${renderSlot($$result, $$slots["default"])}</span></div>`;
}, "E:/blog/2026blog/src/components/mdx/alerts/AlertBase.astro", void 0);
//#endregion
//#region src/components/mdx/Error.astro
var $$Error = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AlertBase", $$AlertBase, {
		"type": "error",
		"icon": "lucide:x-circle"
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "E:/blog/2026blog/src/components/mdx/Error.astro", void 0);
//#endregion
//#region src/components/mdx/Info.astro
var $$Info = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AlertBase", $$AlertBase, {
		"type": "info",
		"icon": "lucide:info"
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "E:/blog/2026blog/src/components/mdx/Info.astro", void 0);
//#endregion
//#region src/components/mdx/Kbd.astro
createAstro("https://blog.z2m.store");
var $$Kbd = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Kbd;
	const { size = "md" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<kbd${addAttribute(["kbd not-prose", {
		sm: "kbd-sm",
		md: "",
		lg: "kbd-lg"
	}[size]], "class:list")}>${renderSlot($$result, $$slots["default"])}</kbd>`;
}, "E:/blog/2026blog/src/components/mdx/Kbd.astro", void 0);
//#endregion
//#region src/components/mdx/Success.astro
var $$Success = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AlertBase", $$AlertBase, {
		"type": "success",
		"icon": "lucide:check-circle"
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "E:/blog/2026blog/src/components/mdx/Success.astro", void 0);
//#endregion
//#region src/components/mdx/Warning.astro
var $$Warning = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AlertBase", $$AlertBase, {
		"type": "warning",
		"icon": "lucide:alert-triangle"
	}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "E:/blog/2026blog/src/components/mdx/Warning.astro", void 0);
//#endregion
//#region src/components/mdx/TimeLine.astro
createAstro("https://blog.z2m.store");
var $$TimeLine = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimeLine;
	const { items } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ul class="not-prose timeline timeline-vertical timeline-snap-icon max-w-4xl mx-auto my-8 px-4" data-astro-cid-bf6vl6os>${items.map((item, index) => renderTemplate`<li class="relative mb-12 last:mb-0" data-astro-cid-bf6vl6os>${index !== 0 && renderTemplate`<hr class="bg-base-300 " data-astro-cid-bf6vl6os>`}${index % 2 === 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="timeline-start mb-4" data-astro-cid-bf6vl6os><time class="font-mono text-lg font-semibold text-primary" data-astro-cid-bf6vl6os>${item.year}</time></div><div class="timeline-middle" data-astro-cid-bf6vl6os><div class="bg-primary rounded-full p-1.5 shadow-lg shadow-primary/50" data-astro-cid-bf6vl6os>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:check",
		"class": "w-5 h-5 text-primary-content",
		"data-astro-cid-bf6vl6os": true
	})}</div></div><div class="timeline-end timeline-box bg-base-200 shadow-md hover:shadow-xl ease-in-out hover:-translate-y-1 transition-all duration-300" data-astro-cid-bf6vl6os><p class="leading-relaxed" data-astro-cid-bf6vl6os>${item.event}</p></div>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="timeline-start timeline-box bg-base-200 shadow-md hover:shadow-xl ease-in-out hover:-translate-y-1 transition-all duration-300" data-astro-cid-bf6vl6os><p class="leading-relaxed" data-astro-cid-bf6vl6os>${item.event}</p></div><div class="timeline-middle" data-astro-cid-bf6vl6os><div class="bg-secondary rounded-full p-1.5 shadow-lg shadow-secondary/50" data-astro-cid-bf6vl6os>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:check",
		"class": "w-5 h-5 text-secondary-content",
		"data-astro-cid-bf6vl6os": true
	})}</div></div><div class="timeline-end mb-4" data-astro-cid-bf6vl6os><time class="font-mono text-lg font-semibold text-secondary" data-astro-cid-bf6vl6os>${item.year}</time></div>` })}`}<hr class="bg-base-300 dark:bg-base-700" data-astro-cid-bf6vl6os></li>`)}</ul>`;
}, "E:/blog/2026blog/src/components/mdx/TimeLine.astro", void 0);
//#endregion
//#region src/components/mdx/LinkCard.astro
createAstro("https://blog.z2m.store");
var $$LinkCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LinkCard;
	const { title, img, desc, url, badge, target = "_blank", icon = "lucide:link", categories = [] } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="not-prose card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in-up border border-base-200" data-astro-cid-pbssvxo6><a${addAttribute(url, "href")}${addAttribute(target, "target")} class="card-body p-4 md:p-6"${addAttribute(`Visit ${title}: ${desc}`, "aria-label")}${addAttribute(target === "_blank" ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-pbssvxo6><div class="flex flex-col md:flex-row gap-4 items-center" data-astro-cid-pbssvxo6><div class="w-full md:w-[120px] h-[120px] flex-shrink-0 bg-base-200 rounded-lg overflow-hidden" data-astro-cid-pbssvxo6>${img ? renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": img,
		"width": 120,
		"height": 120,
		"format": "webp",
		"alt": title,
		"loading": "lazy",
		"class": "w-full h-full object-cover",
		"data-astro-cid-pbssvxo6": true
	})}` : renderTemplate`<div class="flex items-center justify-center w-full h-full bg-gradient-to-br from-base-300 to-base-100" data-astro-cid-pbssvxo6>${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "w-8 h-8 text-primary opacity-80",
		"aria-hidden": "true",
		"data-astro-cid-pbssvxo6": true
	})}</div>`}</div><div class="flex-1 space-y-2 w-full" data-astro-cid-pbssvxo6><div class="flex items-center gap-2 flex-wrap" data-astro-cid-pbssvxo6><h2 class="card-title text-xl" data-astro-cid-pbssvxo6>${title}</h2>${badge && renderTemplate`<div class="badge badge-secondary badge-md font-medium" data-astro-cid-pbssvxo6>${badge}</div>`}</div>${categories.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 my-1" data-astro-cid-pbssvxo6>${categories.map((category) => renderTemplate`<span class="badge badge-outline badge-sm" data-astro-cid-pbssvxo6>${category}</span>`)}</div>`}<p class="text-base-content/80 line-clamp-2 text-sm" data-astro-cid-pbssvxo6>${desc}</p><div class="card-actions justify-end mt-2" data-astro-cid-pbssvxo6><div class="flex items-center gap-1 text-primary hover:text-primary-focus transition-colors" data-astro-cid-pbssvxo6><span class="text-sm font-medium" data-astro-cid-pbssvxo6>Visit ${title}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:external-link",
		"class": "w-3.5 h-3.5",
		"aria-hidden": "true",
		"data-astro-cid-pbssvxo6": true
	})}</div></div></div></div></a></div>`;
}, "E:/blog/2026blog/src/components/mdx/LinkCard.astro", void 0);
//#endregion
//#region src/content/blog/ryuchan-mdx.mdx
var frontmatter = {
	"title": "Using mdx in RyuChan",
	"description": "Using MDX in RyuChan to enrich article content with more components",
	"pubDate": "07 12 2024",
	"image": "/image/image2.webp",
	"categories": ["Documentation", "Examples"],
	"tags": [
		"RyuChan",
		"Blog",
		"Project"
	],
	"badge": "MDX",
	"totalCharCount": 238,
	"readingTime": 2
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "preface",
			"text": "Preface"
		},
		{
			"depth": 2,
			"slug": "main-text",
			"text": "Main text"
		},
		{
			"depth": 3,
			"slug": "getting-started",
			"text": "Getting started"
		},
		{
			"depth": 3,
			"slug": "introducing",
			"text": "Introducing"
		},
		{
			"depth": 3,
			"slug": "example",
			"text": "Example"
		},
		{
			"depth": 4,
			"slug": "collapse",
			"text": "Collapse"
		},
		{
			"depth": 4,
			"slug": "diff",
			"text": "Diff"
		},
		{
			"depth": 4,
			"slug": "error",
			"text": "Error"
		},
		{
			"depth": 4,
			"slug": "warning",
			"text": "Warning"
		},
		{
			"depth": 4,
			"slug": "message",
			"text": "Message"
		},
		{
			"depth": 4,
			"slug": "success",
			"text": "Success"
		},
		{
			"depth": 4,
			"slug": "kbd",
			"text": "Kbd"
		},
		{
			"depth": 4,
			"slug": "timeline",
			"text": "TimeLine"
		},
		{
			"depth": 4,
			"slug": "linkcard",
			"text": "LinkCard"
		}
	];
}
function _createMdxContent(props) {
	const _components = {
		button: "button",
		code: "code",
		div: "div",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		p: "p",
		path: "path",
		pre: "pre",
		rect: "rect",
		span: "span",
		svg: "svg",
		...props.components
	};
	return createVNode(Fragment, { children: [
		createVNode(_components.h2, {
			id: "preface",
			children: "Preface"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"This article describes how to use the components provided by RyuChan in ",
			createVNode(_components.code, { children: "mdx" }),
			" to realize the functions that can’t be realized by normal ",
			createVNode(_components.code, { children: "md" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "main-text",
			children: "Main text"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "getting-started",
			children: "Getting started"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"First you need to create an ",
			createVNode(_components.code, { children: "mdx" }),
			" file, which is as simple as changing the extension to ",
			createVNode(_components.code, { children: ".mdx" }),
			"."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "introducing",
			children: "Introducing"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The components provided by Ryuchan are placed in the ",
			createVNode(_components.code, { children: "/mdx" }),
			" folders. Write something under the document properties (frontmatter):"
		] }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: [
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Collapse from \"../../components/mdx/Collapse.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Diff from \"../../components/mdx/Diff.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Error from \"../../components/mdx/Error.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Info from \"../../components/mdx/Info.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Kbd from \"../../components/mdx/Kbd.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Success from \"../../components/mdx/Success.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import Warning from \"../../components/mdx/Warning.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import TimeLine from \"../../components/mdx/TimeLine.astro\";"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "import LinkCard from \"../../components/mdx/LinkCard.astro\";"
							})
						})
					] })
				})
			})]
		}),
		"\n",
		createVNode(_components.h3, {
			id: "example",
			children: "Example"
		}),
		"\n",
		createVNode(_components.h4, {
			id: "collapse",
			children: "Collapse"
		}),
		"\n",
		createVNode($$Collapse, {
			title: "This is an example text.",
			children: createVNode(_components.p, { children: "This is the hidden content!" })
		}),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: [
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "<"
								}),
								createVNode(_components.span, {
									style: { color: "#13BBB7" },
									children: "Collapse"
								}),
								createVNode(_components.span, {
									style: { color: "#FF8380" },
									children: " title"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "="
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "This is an example text."
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ">"
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#565869" },
								children: "  This is the hidden content!"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "</"
								}),
								createVNode(_components.span, {
									style: { color: "#13BBB7" },
									children: "Collapse"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ">"
								})
							]
						})
					] })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "diff",
			children: "Diff"
		}),
		"\n",
		createVNode($$Diff, {
			l: "/image/l.webp",
			r: "/image/r.webp"
		}),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: createVNode(_components.span, {
						class: "line before:content-[counter(line)]",
						style: { counterIncrement: "line" },
						children: [
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Diff"
							}),
							createVNode(_components.span, {
								style: { color: "#FF8380" },
								children: " l"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "="
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "\""
							}),
							createVNode(_components.span, {
								style: { color: "#CF9C00" },
								children: "/image/l.webp"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "\""
							}),
							createVNode(_components.span, {
								style: { color: "#FF8380" },
								children: " r"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "="
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "\""
							}),
							createVNode(_components.span, {
								style: { color: "#CF9C00" },
								children: "/image/r.webp"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "\""
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: " />"
							})
						]
					}) })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "error",
			children: "Error"
		}),
		"\n",
		createVNode($$Error, { children: "Maybe something went wrong?" }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: createVNode(_components.span, {
						class: "line before:content-[counter(line)]",
						style: { counterIncrement: "line" },
						children: [
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Error"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: "Maybe something went wrong? "
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "</"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Error"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							})
						]
					}) })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "warning",
			children: "Warning"
		}),
		"\n",
		createVNode($$Warning, { children: "Hey! Watch out for potholes! " }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: createVNode(_components.span, {
						class: "line before:content-[counter(line)]",
						style: { counterIncrement: "line" },
						children: [
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Warning"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: "Hey! Watch out for potholes! "
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "</"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Warning"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							})
						]
					}) })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "message",
			children: "Message"
		}),
		"\n",
		createVNode($$Info, { children: "It’s just a message. " }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: createVNode(_components.span, {
						class: "line before:content-[counter(line)]",
						style: { counterIncrement: "line" },
						children: [
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Info"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: "It's just a message. "
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "</"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Info"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							})
						]
					}) })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "success",
			children: "Success"
		}),
		"\n",
		createVNode($$Success, { children: "Congratulations on your successful deployment! " }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: createVNode(_components.span, {
						class: "line before:content-[counter(line)]",
						style: { counterIncrement: "line" },
						children: [
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Success"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: "Congratulations on your successful deployment! "
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "</"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Success"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							})
						]
					}) })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "kbd",
			children: "Kbd"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode($$Kbd, { children: "Ctrl" }),
			" + ",
			createVNode($$Kbd, { children: "C" }),
			" to copy the text."
		] }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: createVNode(_components.span, {
						class: "line before:content-[counter(line)]",
						style: { counterIncrement: "line" },
						children: [
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Kbd"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: "Ctrl"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "</"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Kbd"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: " + "
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Kbd"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: "C"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "</"
							}),
							createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "Kbd"
							}),
							createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: ">"
							}),
							createVNode(_components.span, {
								style: { color: "#565869" },
								children: " to copy the text."
							})
						]
					}) })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "timeline",
			children: "TimeLine"
		}),
		"\n",
		createVNode($$TimeLine, { items: [
			{
				year: "1984",
				event: "First Macintosh computer"
			},
			{
				year: "1998",
				event: "iMac"
			},
			{
				year: "2001",
				event: "iPod"
			},
			{
				year: "2007",
				event: "iPhone"
			},
			{
				year: "2015",
				event: "Apple Watch"
			}
		] }),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: [
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}), createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "TimeLine"
							})]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [createVNode(_components.span, {
								style: { color: "#FF8380" },
								children: "  items"
							}), createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "={["
							})]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "    { "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "year"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "1984"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ", "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "event"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "First Macintosh computer"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: " },"
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "    { "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "year"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "1998"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ", "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "event"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "iMac"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: " },"
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "    { "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "year"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "2001"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ", "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "event"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "iPod"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: " },"
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "    { "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "year"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "2007"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ", "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "event"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "iPhone"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: " },"
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "    { "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "year"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "2015"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ", "
								}),
								createVNode(_components.span, {
									style: { color: "#11658F" },
									children: "event"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: ": "
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "Apple Watch"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: " },"
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "  ]}"
							})
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "/>"
							})
						})
					] })
				})
			})]
		}),
		"\n",
		createVNode(_components.h4, {
			id: "linkcard",
			children: "LinkCard"
		}),
		"\n",
		createVNode($$LinkCard, {
			title: "RyuChan",
			desc: "My blog project!",
			url: "https://github.com/kobaridev/RyuChan",
			img: "https://img.131714.xyz/file/Avatar/NOr1G3Zs.jpeg"
		}),
		"\n",
		createVNode(_components.div, {
			class: "not-prose ryuchan-code",
			children: [createVNode(_components.div, {
				class: "ryuchan-code-toolbar",
				children: [createVNode(_components.span, {
					class: "ryuchan-code-toolbar-language",
					children: "ASTRO"
				}), createVNode(_components.button, {
					class: "btn-copy",
					"aria-label": "Copy code",
					type: "button",
					children: [createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-icon",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "copy-icon",
							children: [createVNode(_components.rect, {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2",
								ry: "2"
							}), createVNode(_components.path, { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
						})
					}), createVNode(_components.span, {
						class: "ryuchan-code-toolbar-copy-success hidden",
						"aria-hidden": "true",
						children: createVNode(_components.svg, {
							xmlns: "http://www.w3.org/2000/svg",
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							class: "success-icon",
							children: createVNode(_components.path, { d: "M20 6L9 17l-5-5" })
						})
					})]
				})]
			}), createVNode(_components.pre, {
				class: "ryuchan-code-content",
				style: {
					backgroundColor: "#FAFBFC",
					color: "#565869",
					overflowX: "auto"
				},
				tabindex: "0",
				"data-language": "astro",
				children: createVNode(_components.code, {
					class: "grid [&>.line]:px-4",
					style: { counterReset: "line" },
					children: createVNode(_components.code, { children: [
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "<"
							}), createVNode(_components.span, {
								style: { color: "#13BBB7" },
								children: "LinkCard"
							})]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#FF8380" },
									children: "  title"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "="
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "RyuChan"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#FF8380" },
									children: "  desc"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "="
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "My blog project!"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#FF8380" },
									children: "  url"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "="
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "https://github.com/kobaridev/RyuChan"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: [
								createVNode(_components.span, {
									style: { color: "#FF8380" },
									children: "  img"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "="
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								}),
								createVNode(_components.span, {
									style: { color: "#CF9C00" },
									children: "https://img.131714.xyz/file/Avatar/NOr1G3Zs.jpeg"
								}),
								createVNode(_components.span, {
									style: { color: "#ADB1C2" },
									children: "\""
								})
							]
						}),
						"\n",
						createVNode(_components.span, {
							class: "line before:content-[counter(line)]",
							style: { counterIncrement: "line" },
							children: createVNode(_components.span, {
								style: { color: "#ADB1C2" },
								children: "/>"
							})
						})
					] })
				})
			})]
		})
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, {
		...props,
		children: createVNode(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var url = "src/content/blog/ryuchan-mdx.mdx";
var file = "E:/blog/2026blog/src/content/blog/ryuchan-mdx.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/blog/2026blog/src/content/blog/ryuchan-mdx.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };

//#region \0astro:data-layer-content
var _astro_data_layer_content_default = [
	[
		"Map",
		1,
		2,
		337,
		338
	],
	"blog",
	[
		"Map",
		3,
		4,
		56,
		57,
		107,
		108,
		186,
		187,
		309,
		310,
		325,
		326
	],
	"adding-comment-systems",
	{
		id: 3,
		data: 5,
		body: 19,
		filePath: 20,
		digest: 21,
		rendered: 22
	},
	{
		title: 6,
		description: 7,
		pubDate: 8,
		image: 9,
		badge: 10,
		draft: 11,
		categories: 12,
		tags: 14
	},
	"Adding Comment Systems to RyuChan",
	"A comprehensive guide on how to integrate the Waline comment system into your RyuChan blog",
	["Date", "2025-04-14T16:00:00.000Z"],
	"/image/image4.webp",
	"Comment",
	false,
	[13],
	"Documentation",
	[
		15,
		16,
		17,
		18
	],
	"RyuChan",
	"Comments",
	"Waline",
	"Astro",
	"## Introduction\r\n\r\nRyuChan 博客现已支持通过配置文件集中管理评论系统，无需在页面手动引入组件或硬编码参数，只需在 `ryuchan.config.yaml` 中配置即可。\r\n\r\n## 集中式评论系统配置\r\n\r\n### 步骤 1：配置评论系统\r\n\r\n在 `ryuchan.config.yaml` 中找到 `comments` 配置块：\r\n\r\n```yaml\r\ncomments:\r\n  enable: true         # 是否启用评论\r\n  type: giscus        # 可选 giscus/waline/none\r\n  giscus:\r\n    repo: \"xxx/xxx\"\r\n    repoId: \"xxx\"\r\n    category: \"General\"\r\n    categoryId: \"xxx\"\r\n    mapping: \"pathname\"\r\n    lang: \"zh-CN\"\r\n    inputPosition: \"top\"\r\n    reactionsEnabled: \"1\"\r\n    emitMetadata: \"0\"\r\n    loading: \"lazy\"\r\n  waline:\r\n    serverURL: \"https://your-waline-server\"\r\n    lang: \"zh-CN\"\r\n    emoji:\r\n      - \"https://unpkg.com/@waline/emojis@1.1.0/weibo\"\r\n      - \"https://unpkg.com/@waline/emojis@1.1.0/bilibili\"\r\n    meta: [\"nick\", \"mail\", \"link\"]\r\n    requiredMeta: []\r\n    reaction: false\r\n    pageview: false\r\n```\r\n\r\n- `enable: true/false` 控制是否全站显示评论。\r\n- `type: giscus/waline/none` 控制评论系统类型，**同一时间只会启用一个**。\r\n- 详细参数请参考各自官方文档。\r\n\r\n### 步骤 2：自动渲染，无需手动引入\r\n\r\n你无需在页面或模板中手动引入 `<Giscus />` 或 `<Waline />` 组件，Ryuchan 已自动根据配置渲染对应评论系统。只需专注于内容创作和配置维护。\r\n\r\n### 步骤 3：切换或禁用评论系统\r\n\r\n- 切换评论系统：只需修改 `type` 字段为 `giscus` 或 `waline`，保存后自动生效。\r\n- 禁用评论系统：将 `enable` 设为 `false` 即可。\r\n\r\n---\r\n\r\n## 进阶：自定义 Waline 组件\r\n\r\n如需自定义 Waline 组件样式或参数，可参考如下代码（已内置于 RyuChan）：\r\n\r\n```astro\r\n---\r\n// src/components/comments/Waline.astro\r\ninterface Props {\r\n  serverURL: string;\r\n  lang?: string;\r\n  dark?: string;\r\n  emoji?: string[];\r\n  meta?: string[];\r\n  requiredMeta?: string[];\r\n  reaction?: boolean;\r\n  pageview?: boolean;\r\n}\r\nconst {\r\n  serverURL,\r\n  lang = \"zh-CN\",\r\n  dark = \"html[data-theme-type='dark']\",\r\n  emoji = [\"https://unpkg.com/@waline/emojis@1.1.0/weibo\", \"https://unpkg.com/@waline/emojis@1.1.0/bilibili\"],\r\n  meta = [\"nick\", \"mail\", \"link\"],\r\n  requiredMeta = [],\r\n  reaction = false,\r\n  pageview = false,\r\n} = Astro.props;\r\n---\r\n<div id=\"waline-container\"></div>\r\n<link rel=\"stylesheet\" href=\"https://unpkg.com/@waline/client@v3/dist/waline.css\" />\r\n<script type=\"module\" define:vars={{\r\n  serverURL, lang, dark, emoji, meta, requiredMeta, reaction, pageview,\r\n}}>\r\n  import { init } from \"https://unpkg.com/@waline/client@v3/dist/waline.js\";\r\n  let walineInstance;\r\n  async function mountWaline() {\r\n    if (walineInstance) await walineInstance.destroy();\r\n    walineInstance = init({\r\n      el: \"#waline-container\",\r\n      serverURL, path: location.pathname, lang, dark, emoji, meta, requiredMeta, reaction, pageview,\r\n    });\r\n  }\r\n  document.addEventListener(\"astro:after-swap\", mountWaline);\r\n  document.addEventListener(\"DOMContentLoaded\", mountWaline);\r\n<\/script>\r\n<style>\r\n  #waline-container { margin-top: 2rem; margin-bottom: 2rem; }\r\n</style>\r\n```\r\n\r\n---\r\n\r\n## 常见问题\r\n\r\n- **评论不显示**：请检查配置文件参数是否正确，Waline/Giscus 服务端是否可访问。\r\n- **切换无效**：确认已保存配置文件并重启开发服务。",
	"src/content/blog/adding-comment-systems.md",
	"7378fa1531b449e4",
	{
		html: 23,
		metadata: 24
	},
	"<h2 id=\"introduction\">Introduction</h2>\n<p>RyuChan 博客现已支持通过配置文件集中管理评论系统，无需在页面手动引入组件或硬编码参数，只需在 <code>ryuchan.config.yaml</code> 中配置即可。</p>\n<h2 id=\"集中式评论系统配置\">集中式评论系统配置</h2>\n<h3 id=\"步骤-1配置评论系统\">步骤 1：配置评论系统</h3>\n<p>在 <code>ryuchan.config.yaml</code> 中找到 <code>comments</code> 配置块：</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">YAML</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"yaml\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">comments</span><span style=\"color:#ADB1C2\">:</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">  enable</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#2DAE58\"> true</span><span style=\"color:#ADB1C2\">         # 是否启用评论</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">  type</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#CF9C00\"> giscus</span><span style=\"color:#ADB1C2\">        # 可选 giscus/waline/none</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">  giscus</span><span style=\"color:#ADB1C2\">:</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    repo</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">xxx/xxx</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    repoId</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">xxx</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    category</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">General</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    categoryId</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">xxx</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    mapping</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">pathname</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    lang</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">zh-CN</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    inputPosition</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">top</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    reactionsEnabled</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">1</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    emitMetadata</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">0</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    loading</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">lazy</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">  waline</span><span style=\"color:#ADB1C2\">:</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    serverURL</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">https://your-waline-server</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    lang</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">zh-CN</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    emoji</span><span style=\"color:#ADB1C2\">:</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">      -</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">https://unpkg.com/@waline/emojis@1.1.0/weibo</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">      -</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">https://unpkg.com/@waline/emojis@1.1.0/bilibili</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    meta</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> [</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">nick</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">mail</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">link</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">]</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    requiredMeta</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> []</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    reaction</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#2DAE58\"> false</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">    pageview</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#2DAE58\"> false</span></span></code></code></pre></div>\n<ul>\n<li><code>enable: true/false</code> 控制是否全站显示评论。</li>\n<li><code>type: giscus/waline/none</code> 控制评论系统类型，<strong>同一时间只会启用一个</strong>。</li>\n<li>详细参数请参考各自官方文档。</li>\n</ul>\n<h3 id=\"步骤-2自动渲染无需手动引入\">步骤 2：自动渲染，无需手动引入</h3>\n<p>你无需在页面或模板中手动引入 <code>&#x3C;Giscus /></code> 或 <code>&#x3C;Waline /></code> 组件，Ryuchan 已自动根据配置渲染对应评论系统。只需专注于内容创作和配置维护。</p>\n<h3 id=\"步骤-3切换或禁用评论系统\">步骤 3：切换或禁用评论系统</h3>\n<ul>\n<li>切换评论系统：只需修改 <code>type</code> 字段为 <code>giscus</code> 或 <code>waline</code>，保存后自动生效。</li>\n<li>禁用评论系统：将 <code>enable</code> 设为 <code>false</code> 即可。</li>\n</ul>\n<hr>\n<h2 id=\"进阶自定义-waline-组件\">进阶：自定义 Waline 组件</h2>\n<p>如需自定义 Waline 组件样式或参数，可参考如下代码（已内置于 RyuChan）：</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">ASTRO</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"astro\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">---</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">// src/components/comments/Waline.astro</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">interface</span><span style=\"color:#565869\"> Props </span><span style=\"color:#ADB1C2\">{</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  serverURL</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#2DAE58\"> string</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  lang</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> string</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  dark</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> string</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  emoji</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> string</span><span style=\"color:#ADB1C2\">[];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  meta</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> string</span><span style=\"color:#ADB1C2\">[];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  requiredMeta</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> string</span><span style=\"color:#ADB1C2\">[];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  reaction</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> boolean</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  pageview</span><span style=\"color:#ADB1C2\">?:</span><span style=\"color:#2DAE58\"> boolean</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">}</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">const</span><span style=\"color:#ADB1C2\"> {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  serverURL</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  lang </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">zh-CN</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  dark </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">html[data-theme-type='dark']</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  emoji </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> [</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">https://unpkg.com/@waline/emojis@1.1.0/weibo</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">https://unpkg.com/@waline/emojis@1.1.0/bilibili</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">],</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  meta </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> [</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">nick</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">mail</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">link</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">],</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  requiredMeta </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> [],</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  reaction </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#2DAE58\"> false</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  pageview </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#2DAE58\"> false</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">}</span><span style=\"color:#ADB1C2\"> =</span><span style=\"color:#565869\"> Astro</span><span style=\"color:#ADB1C2\">.</span><span style=\"color:#565869\">props</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">---</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#13BBB7\">div</span><span style=\"color:#FF8380\"> id</span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">waline-container</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">>&#x3C;/</span><span style=\"color:#13BBB7\">div</span><span style=\"color:#ADB1C2\">></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#13BBB7\">link</span><span style=\"color:#FF8380\"> rel</span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">stylesheet</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#FF8380\"> href</span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">https://unpkg.com/@waline/client@v3/dist/waline.css</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\"> /></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#13BBB7\">script</span><span style=\"color:#FF8380\"> type</span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">module</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#FF8380\"> define:vars</span><span style=\"color:#ADB1C2\">={{</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  serverURL</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">lang</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">dark</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">emoji</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">meta</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">requiredMeta</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">reaction</span><span style=\"color:#ADB1C2\">, </span><span style=\"color:#565869\">pageview</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">}}></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">  import</span><span style=\"color:#ADB1C2\"> {</span><span style=\"color:#565869\"> init </span><span style=\"color:#ADB1C2\">}</span><span style=\"color:#F767BB\"> from</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">https://unpkg.com/@waline/client@v3/dist/waline.js</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">  let</span><span style=\"color:#565869\"> walineInstance</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">  async</span><span style=\"color:#F767BB\"> function</span><span style=\"color:#09A1ED\"> mountWaline</span><span style=\"color:#ADB1C2\">()</span><span style=\"color:#ADB1C2\"> {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">    if</span><span style=\"color:#ADB1C2\"> (</span><span style=\"color:#565869\">walineInstance</span><span style=\"color:#ADB1C2\">)</span><span style=\"color:#F767BB\"> await</span><span style=\"color:#565869\"> walineInstance</span><span style=\"color:#ADB1C2\">.</span><span style=\"color:#09A1ED\">destroy</span><span style=\"color:#ADB1C2\">();</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    walineInstance </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#09A1ED\"> init</span><span style=\"color:#ADB1C2\">({</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">      el</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">#waline-container</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">      serverURL</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#11658F\"> path</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#565869\"> location</span><span style=\"color:#ADB1C2\">.</span><span style=\"color:#565869\">pathname</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> lang</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> dark</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> emoji</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> meta</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> requiredMeta</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> reaction</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> pageview</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    });</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  document</span><span style=\"color:#ADB1C2\">.</span><span style=\"color:#09A1ED\">addEventListener</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">astro:after-swap</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> mountWaline</span><span style=\"color:#ADB1C2\">);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">  document</span><span style=\"color:#ADB1C2\">.</span><span style=\"color:#09A1ED\">addEventListener</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#CF9C00\">DOMContentLoaded</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> mountWaline</span><span style=\"color:#ADB1C2\">);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">&#x3C;/</span><span style=\"color:#13BBB7\">script</span><span style=\"color:#ADB1C2\">></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#13BBB7\">style</span><span style=\"color:#ADB1C2\">></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#FF82CBBB\">  #</span><span style=\"color:#F767BB\">waline-container</span><span style=\"color:#ADB1C2\"> { </span><span style=\"color:#565869\">margin-top</span><span style=\"color:#ADB1C2\">: </span><span style=\"color:#FF5C57\">2</span><span style=\"color:#FF5C57CC\">rem</span><span style=\"color:#ADB1C2\">; </span><span style=\"color:#565869\">margin-bottom</span><span style=\"color:#ADB1C2\">: </span><span style=\"color:#FF5C57\">2</span><span style=\"color:#FF5C57CC\">rem</span><span style=\"color:#ADB1C2\">; }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">&#x3C;/</span><span style=\"color:#13BBB7\">style</span><span style=\"color:#ADB1C2\">></span></span></code></code></pre></div>\n<hr>\n<h2 id=\"常见问题\">常见问题</h2>\n<ul>\n<li><strong>评论不显示</strong>：请检查配置文件参数是否正确，Waline/Giscus 服务端是否可访问。</li>\n<li><strong>切换无效</strong>：确认已保存配置文件并重启开发服务。</li>\n</ul>",
	{
		headings: 25,
		localImagePaths: 47,
		remoteImagePaths: 48,
		frontmatter: 49,
		imagePaths: 55
	},
	[
		26,
		30,
		32,
		36,
		39,
		42,
		45
	],
	{
		depth: 27,
		slug: 28,
		text: 29
	},
	2,
	"introduction",
	"Introduction",
	{
		depth: 27,
		slug: 31,
		text: 31
	},
	"集中式评论系统配置",
	{
		depth: 33,
		slug: 34,
		text: 35
	},
	3,
	"步骤-1配置评论系统",
	"步骤 1：配置评论系统",
	{
		depth: 33,
		slug: 37,
		text: 38
	},
	"步骤-2自动渲染无需手动引入",
	"步骤 2：自动渲染，无需手动引入",
	{
		depth: 33,
		slug: 40,
		text: 41
	},
	"步骤-3切换或禁用评论系统",
	"步骤 3：切换或禁用评论系统",
	{
		depth: 27,
		slug: 43,
		text: 44
	},
	"进阶自定义-waline-组件",
	"进阶：自定义 Waline 组件",
	{
		depth: 27,
		slug: 46,
		text: 46
	},
	"常见问题",
	[],
	[],
	{
		title: 6,
		description: 7,
		pubDate: 50,
		image: 9,
		draft: 11,
		tags: 51,
		categories: 52,
		badge: 10,
		totalCharCount: 53,
		readingTime: 54
	},
	"2025-04-15T00:00",
	[
		15,
		16,
		17,
		18
	],
	[13],
	504,
	4,
	[],
	"cf-twikoo",
	{
		id: 56,
		data: 58,
		body: 65,
		filePath: 66,
		digest: 67,
		rendered: 68
	},
	{
		title: 59,
		description: 60,
		pubDate: 61,
		image: 62,
		draft: 11,
		categories: 63,
		tags: 64
	},
	"部署Twikoo到cloudflaer",
	"",
	["Date", "2026-07-31T08:55:00.000Z"],
	"/images/cf-twikoo/0c26c572e687f07d.png",
	[],
	[],
	"## 部署Twikoo\r\n\r\n### 复制仓库\r\n\r\n首先 [Fork](https://github.com/wuzhengmao/twikoo-cloudflare/fork) 博主的仓库，输入你自己的仓库名称，点击 `Create fork` 按钮创建自己的仓库。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/github-fork.png)\r\n\r\n\r\n\r\n> **国内对github的访问向来是时断时续的，如果安装失败可以等一等，或者使用科学上网工具，这里推荐可以 [注册](https://speedv.219226.xyz/#/register) 一个，目前有免费流量可以薅羊毛。**\r\n\r\n### 创建D1数据库\r\n\r\n登录 [Cloudflare](https://dash.cloudflare.com/)，点击左侧栏 `存储和数据库` - `D1 SQL数据库`，点击 `创建` 按钮，填入 `twikoo` 作为数据库名后，点击 `创建` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-d1.png)\r\n\r\n\r\n\r\n创建成功后回到列表页面，可以找到对应红框中的 `ID` 复制出来。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-get-database-id.png)\r\n\r\n\r\n\r\n然后点击 `twikoo` 数据库，选择 `控制台` 页签，将仓库根目录下的 `schema.sql` 文件中的内容全部复制到输入框中，点击 `执行` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-table.png)\r\n\r\n\r\n\r\n很快数据库表就创建完了，最后修改仓库根目录下的 `wrangler.toml` 文件中的 `database_id` 值。\r\n\r\n\r\n\r\n\r\n\r\n```toml\r\n[[d1_databases]]\r\nbinding = \"DB\" # available in your Worker on env.DB\r\ndatabase_name = \"twikoo\"\r\ndatabase_id = \"b35e0bd5-6d17-42eb-a597-ff4869a74461\" # 这里替换成你前面红框里的内容\r\n```\r\n\r\n### 创建R2存储\r\n\r\n点击左侧栏 `R2 对象存储`，点击 `创建存储桶`，填入 `twikoo` 作为存储桶名称，点击 `创建存储桶` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-r2.png)\r\n\r\n\r\n\r\n创建成功后后回到列表页面，就可以看到刚才创建的存储桶了。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-r2-done.png)\r\n\r\n\r\n\r\n再点击 `twikoo` 进入存储桶，点击 `设置` 页签，在 `公开访问` 点击 `连接域`， 输入你想设置的域名比如 `twikoo.r2.example.org`。如果还没有个人域名的可以看我的另外一篇博客 [如何注册一个域名并托管到Cloudflare](https://blog.mingy.org/2024/12/register-domain-with-cloudflare/)。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-r2-bind-domain.png)\r\n\r\n\r\n\r\n然后点击 `继续`，再点击 `连接域` 就会回到设置页面，这时你会看到你设置的域状态为 `正在初始化`，过几分钟再次刷新状态就变成了 `活动`。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-r2-bind-done.png)\r\n\r\n\r\n\r\n接下来还需要将刚才的域名写入修改仓库根目录下的 `wrangler.toml` 文件中。\r\n\r\n\r\n\r\n\r\n\r\n```toml\r\n[vars]\r\nR2_PUBLIC_URL = \"https://twikoo.r2.example.org\" # 这里替换成你设置的域名\r\n```\r\n\r\n### Worker部署\r\n\r\n在 `Cloudflare` 的左侧栏点击 `Workers 和 Pages`，点击 `创建`，再点击 `创建 Worker`，输入名称 `cf-create-worker`。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-worker.png)\r\n\r\n\r\n\r\n然后点击 `部署`，过一会显示部署成功，再点击 `继续处理项目`，选择 `设置` 页签，滚动到构建区域，点击 `连接` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-worker-connect.png)\r\n\r\n\r\n\r\n此时右侧会弹出一个面板，先连接你的 `Github` 账号，然后选择你的仓库，如果列表中找不到可以直接输入仓库名，比如 `twikoo-cloudflare`，再选择 `main` 分支。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-worker-deploy.png)\r\n\r\n\r\n\r\n然后在 `部署命令` 的输入框中填入 `npx wrangler deploy --minify`，最后点击 `连接` 按钮保存。\r\n\r\n如果在前一步的列表中仓库名是手动输入的，你需要在这里点击 `管理` 按钮，跳转到 `Github` 登录账号。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-connect-github.png)\r\n\r\n\r\n\r\n完成登录后进入 `Repository access` 页面，点击 `Select repositories` 按钮，选择你的仓库后点击 `Save` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/github-select-repo.png)\r\n\r\n\r\n\r\n此时页面会跳转回 `Cloudflare`，有可能会报一个错误，不用管它，直接关闭页面就可以了。\r\n\r\n现在把前面修改的 `wrangler.toml` 文件保存并提交到 `Github` 仓库，此时就会触发 `Worker` 的自动构建了，过一会你就会在 `Workers 和 Pages` 页面看到部署已经更新，点击 `访问` 按钮，一切正常的话，你会看到这样的内容。\r\n\r\n\r\n\r\n\r\n\r\n```json\r\n{\r\n    \"code\": 100,\r\n    \"message\": \"Twikoo 云函数运行正常，请参考 https://twikoo.js.org/frontend.html 完成前端的配置\",\r\n    \"version\": \"1.6.40\"\r\n}\r\n```\r\n\r\n### 绑定域名\r\n\r\n再次点击 `twikoo-cloudflare` 进入 `设置` 页签，在 `域和路由` 中点击 `添加`，右侧弹出 `域和路由` 面板。点击 `自定义域`，输入你想要绑定的域名，比如 `twikoo.example.org`，点击 `添加域` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-worker-bind-domain.png)\r\n\r\n\r\n\r\n添加完成后你的域名就和部署的 `Worker` 绑定好了。\r\n\r\n## 配置博客\r\n\r\n### 修改主题配置\r\n\r\n回到上一篇创建的个人博客仓库，在 `themes/hexo-theme-matery` 目录下打开 `_config.yml` 文件进行编辑，搜索关键字 `twikoo` 将 `enabled` 改为 `true`，再将 `envId` 改成前面部署绑定的域名。\r\n\r\n\r\n\r\n\r\n\r\n```yaml\r\ntwikoo:\r\n  enable: true\r\n  envId: https://twikoo.example.org # 这里改成前面部署绑定的域名\r\n  # region: ap-guangzhou # 环境地域，默认为 ap-shanghai\r\n  # path: 'window.location.pathname' # 自定义文章路径\r\n```\r\n\r\n修改完提交到 `Github` 后 `Cloudflare Pages` 会自动部署，等部署完打开你的个人博客，在你的博文最下面就可以看到评论区了。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/hexo-show-comments.png)\r\n\r\n\r\n\r\n### 配置评论模块\r\n\r\n点击评论区的小齿轮图标，首次进入需要设置密码，设置完就会进入管理面板，点击 `配置管理` 页签进行初始配置。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-config-panel.png)\r\n\r\n\r\n\r\n点开 `隐私`，在 `IMAGE_CDN` 处输入 `cloudflare`，点击 `保存` 按钮启用图片上传功能。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-set-image-cdn.png)\r\n\r\n\r\n\r\n其余每个配置项都有很详细的说明，大家可以自行慢慢摸索，不修改也已经可以正常使用了。\r\n\r\n### 防止机器人\r\n\r\n发表评论时可以使用 `Cloudflare Turnstile` 的检查来阻止机器人，如果需要启用先在 `Cloudflare` 的左侧栏点击 `Turnstile`，点击 `添加小组件` 按钮。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-turnstile.png)\r\n\r\n\r\n\r\n小组件名称可以随便填写，比如 `twikoo`，点击下面的 `添加主机名` 按钮会在右侧弹出面板。在最上面的输入框填入个人博客的域名，比如 `blog.example.org`，点击右侧的 `添加` 按钮，主机名就会出现在下面的已选择主机名列表中。再点击最下面的 `添加` 按钮，右侧面板关闭，主机名会添加到 `主机名管理` 区域的列表中。最后点击右下角的 `创建` 按钮，就会显示已成功创建 `Turnstile` 小组件。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-turnstile-ok.png)\r\n\r\n\r\n\r\n在这个页面上 `站点密钥` 和 `密钥` 是你需要复制下来配置到 `Twikoo` 的管理面板中的。接下来再次打开管理面板，点开 `反垃圾`，在 `TURNSTILE_SITE_KEY` 处填入 `站点密钥` 的内容，在 `TURNSTILE_SECRET_KEY` 处填入 `密钥` 的内容，点击 `保存` 关闭面板。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-config-turnstile.png)\r\n\r\n\r\n\r\n完成后再次发表评论就会出现 `Cloudflare` 的机器人检查框了，大部分情况下等一会就会显示成功，或者出现一个勾选框确认后检查成功，只有极少数情况会发起 `JS质询` 进行挑战。\r\n\r\n\r\n\r\n![img](https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-post-comments.png)\r\n\r\n\r\n\r\n## 后记\r\n\r\n至此，一个基本上完整的评论系统就上线了，对于 `Twikoo` 的其他配置，还有一些建议：\r\n\r\n- 使用隐藏入口不要暴露管理面板的配置按钮；\r\n- 设置一个复杂的密码不要让别人轻易猜出来；\r\n- 添加评论通知，[pushoo.js](https://pushoo.js.org/) 提供了丰富的通知方式，可以自行看文档选择最适合的方式。\r\n\r\n来源: 一梦一孤舟\r\n文章作者: Mingy\r\n文章链接: https://blog.mingy.org/2024/12/hexo-add-twikoo/\r\n本文章著作权归作者所有，任何形式的转载都请注明出处。",
	"src/content/blog/cf-twikoo.md",
	"1ae40889cf2db775",
	{
		html: 69,
		metadata: 70
	},
	"<h2 id=\"部署twikoo\">部署Twikoo</h2>\n<h3 id=\"复制仓库\">复制仓库</h3>\n<p>首先 <a href=\"https://github.com/wuzhengmao/twikoo-cloudflare/fork\" rel=\"nofollow\">Fork<span>↗</span></a> 博主的仓库，输入你自己的仓库名称，点击 <code>Create fork</code> 按钮创建自己的仓库。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/github-fork.png\" alt=\"img\"></p>\n<blockquote>\n<p><strong>国内对github的访问向来是时断时续的，如果安装失败可以等一等，或者使用科学上网工具，这里推荐可以 <a href=\"https://speedv.219226.xyz/#/register\" rel=\"nofollow\">注册<span>↗</span></a> 一个，目前有免费流量可以薅羊毛。</strong></p>\n</blockquote>\n<h3 id=\"创建d1数据库\">创建D1数据库</h3>\n<p>登录 <a href=\"https://dash.cloudflare.com/\" rel=\"nofollow\">Cloudflare<span>↗</span></a>，点击左侧栏 <code>存储和数据库</code> - <code>D1 SQL数据库</code>，点击 <code>创建</code> 按钮，填入 <code>twikoo</code> 作为数据库名后，点击 <code>创建</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-d1.png\" alt=\"img\"></p>\n<p>创建成功后回到列表页面，可以找到对应红框中的 <code>ID</code> 复制出来。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-get-database-id.png\" alt=\"img\"></p>\n<p>然后点击 <code>twikoo</code> 数据库，选择 <code>控制台</code> 页签，将仓库根目录下的 <code>schema.sql</code> 文件中的内容全部复制到输入框中，点击 <code>执行</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-table.png\" alt=\"img\"></p>\n<p>很快数据库表就创建完了，最后修改仓库根目录下的 <code>wrangler.toml</code> 文件中的 <code>database_id</code> 值。</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">TOML</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"toml\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">[[</span><span style=\"color:#565869\">d1_databases</span><span style=\"color:#ADB1C2\">]]</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">binding </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">DB</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\"> # available in your Worker on env.DB</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">database_name </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">twikoo</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">database_id </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">b35e0bd5-6d17-42eb-a597-ff4869a74461</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\"> # 这里替换成你前面红框里的内容</span></span></code></code></pre></div>\n<h3 id=\"创建r2存储\">创建R2存储</h3>\n<p>点击左侧栏 <code>R2 对象存储</code>，点击 <code>创建存储桶</code>，填入 <code>twikoo</code> 作为存储桶名称，点击 <code>创建存储桶</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-r2.png\" alt=\"img\"></p>\n<p>创建成功后后回到列表页面，就可以看到刚才创建的存储桶了。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-r2-done.png\" alt=\"img\"></p>\n<p>再点击 <code>twikoo</code> 进入存储桶，点击 <code>设置</code> 页签，在 <code>公开访问</code> 点击 <code>连接域</code>， 输入你想设置的域名比如 <code>twikoo.r2.example.org</code>。如果还没有个人域名的可以看我的另外一篇博客 <a href=\"https://blog.mingy.org/2024/12/register-domain-with-cloudflare/\" rel=\"nofollow\">如何注册一个域名并托管到Cloudflare<span>↗</span></a>。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-r2-bind-domain.png\" alt=\"img\"></p>\n<p>然后点击 <code>继续</code>，再点击 <code>连接域</code> 就会回到设置页面，这时你会看到你设置的域状态为 <code>正在初始化</code>，过几分钟再次刷新状态就变成了 <code>活动</code>。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-r2-bind-done.png\" alt=\"img\"></p>\n<p>接下来还需要将刚才的域名写入修改仓库根目录下的 <code>wrangler.toml</code> 文件中。</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">TOML</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"toml\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">vars</span><span style=\"color:#ADB1C2\">]</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">R2_PUBLIC_URL </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">https://twikoo.r2.example.org</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\"> # 这里替换成你设置的域名</span></span></code></code></pre></div>\n<h3 id=\"worker部署\">Worker部署</h3>\n<p>在 <code>Cloudflare</code> 的左侧栏点击 <code>Workers 和 Pages</code>，点击 <code>创建</code>，再点击 <code>创建 Worker</code>，输入名称 <code>cf-create-worker</code>。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-worker.png\" alt=\"img\"></p>\n<p>然后点击 <code>部署</code>，过一会显示部署成功，再点击 <code>继续处理项目</code>，选择 <code>设置</code> 页签，滚动到构建区域，点击 <code>连接</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-worker-connect.png\" alt=\"img\"></p>\n<p>此时右侧会弹出一个面板，先连接你的 <code>Github</code> 账号，然后选择你的仓库，如果列表中找不到可以直接输入仓库名，比如 <code>twikoo-cloudflare</code>，再选择 <code>main</code> 分支。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-worker-deploy.png\" alt=\"img\"></p>\n<p>然后在 <code>部署命令</code> 的输入框中填入 <code>npx wrangler deploy --minify</code>，最后点击 <code>连接</code> 按钮保存。</p>\n<p>如果在前一步的列表中仓库名是手动输入的，你需要在这里点击 <code>管理</code> 按钮，跳转到 <code>Github</code> 登录账号。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-connect-github.png\" alt=\"img\"></p>\n<p>完成登录后进入 <code>Repository access</code> 页面，点击 <code>Select repositories</code> 按钮，选择你的仓库后点击 <code>Save</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/github-select-repo.png\" alt=\"img\"></p>\n<p>此时页面会跳转回 <code>Cloudflare</code>，有可能会报一个错误，不用管它，直接关闭页面就可以了。</p>\n<p>现在把前面修改的 <code>wrangler.toml</code> 文件保存并提交到 <code>Github</code> 仓库，此时就会触发 <code>Worker</code> 的自动构建了，过一会你就会在 <code>Workers 和 Pages</code> 页面看到部署已经更新，点击 <code>访问</code> 按钮，一切正常的话，你会看到这样的内容。</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">JSON</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">{</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    \"</span><span style=\"color:#11658F\">code</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#FF5C57\"> 100</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    \"</span><span style=\"color:#11658F\">message</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">Twikoo 云函数运行正常，请参考 https://twikoo.js.org/frontend.html 完成前端的配置</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    \"</span><span style=\"color:#11658F\">version</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#ADB1C2\"> \"</span><span style=\"color:#CF9C00\">1.6.40</span><span style=\"color:#ADB1C2\">\"</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">}</span></span></code></code></pre></div>\n<h3 id=\"绑定域名\">绑定域名</h3>\n<p>再次点击 <code>twikoo-cloudflare</code> 进入 <code>设置</code> 页签，在 <code>域和路由</code> 中点击 <code>添加</code>，右侧弹出 <code>域和路由</code> 面板。点击 <code>自定义域</code>，输入你想要绑定的域名，比如 <code>twikoo.example.org</code>，点击 <code>添加域</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-worker-bind-domain.png\" alt=\"img\"></p>\n<p>添加完成后你的域名就和部署的 <code>Worker</code> 绑定好了。</p>\n<h2 id=\"配置博客\">配置博客</h2>\n<h3 id=\"修改主题配置\">修改主题配置</h3>\n<p>回到上一篇创建的个人博客仓库，在 <code>themes/hexo-theme-matery</code> 目录下打开 <code>_config.yml</code> 文件进行编辑，搜索关键字 <code>twikoo</code> 将 <code>enabled</code> 改为 <code>true</code>，再将 <code>envId</code> 改成前面部署绑定的域名。</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">YAML</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"yaml\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">twikoo</span><span style=\"color:#ADB1C2\">:</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">  enable</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#2DAE58\"> true</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#11658F\">  envId</span><span style=\"color:#ADB1C2\">:</span><span style=\"color:#CF9C00\"> https://twikoo.example.org</span><span style=\"color:#ADB1C2\"> # 这里改成前面部署绑定的域名</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  # region: ap-guangzhou # 环境地域，默认为 ap-shanghai</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  # path: 'window.location.pathname' # 自定义文章路径</span></span></code></code></pre></div>\n<p>修改完提交到 <code>Github</code> 后 <code>Cloudflare Pages</code> 会自动部署，等部署完打开你的个人博客，在你的博文最下面就可以看到评论区了。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/hexo-show-comments.png\" alt=\"img\"></p>\n<h3 id=\"配置评论模块\">配置评论模块</h3>\n<p>点击评论区的小齿轮图标，首次进入需要设置密码，设置完就会进入管理面板，点击 <code>配置管理</code> 页签进行初始配置。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-config-panel.png\" alt=\"img\"></p>\n<p>点开 <code>隐私</code>，在 <code>IMAGE_CDN</code> 处输入 <code>cloudflare</code>，点击 <code>保存</code> 按钮启用图片上传功能。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-set-image-cdn.png\" alt=\"img\"></p>\n<p>其余每个配置项都有很详细的说明，大家可以自行慢慢摸索，不修改也已经可以正常使用了。</p>\n<h3 id=\"防止机器人\">防止机器人</h3>\n<p>发表评论时可以使用 <code>Cloudflare Turnstile</code> 的检查来阻止机器人，如果需要启用先在 <code>Cloudflare</code> 的左侧栏点击 <code>Turnstile</code>，点击 <code>添加小组件</code> 按钮。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-turnstile.png\" alt=\"img\"></p>\n<p>小组件名称可以随便填写，比如 <code>twikoo</code>，点击下面的 <code>添加主机名</code> 按钮会在右侧弹出面板。在最上面的输入框填入个人博客的域名，比如 <code>blog.example.org</code>，点击右侧的 <code>添加</code> 按钮，主机名就会出现在下面的已选择主机名列表中。再点击最下面的 <code>添加</code> 按钮，右侧面板关闭，主机名会添加到 <code>主机名管理</code> 区域的列表中。最后点击右下角的 <code>创建</code> 按钮，就会显示已成功创建 <code>Turnstile</code> 小组件。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/cf-create-turnstile-ok.png\" alt=\"img\"></p>\n<p>在这个页面上 <code>站点密钥</code> 和 <code>密钥</code> 是你需要复制下来配置到 <code>Twikoo</code> 的管理面板中的。接下来再次打开管理面板，点开 <code>反垃圾</code>，在 <code>TURNSTILE_SITE_KEY</code> 处填入 <code>站点密钥</code> 的内容，在 <code>TURNSTILE_SECRET_KEY</code> 处填入 <code>密钥</code> 的内容，点击 <code>保存</code> 关闭面板。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-config-turnstile.png\" alt=\"img\"></p>\n<p>完成后再次发表评论就会出现 <code>Cloudflare</code> 的机器人检查框了，大部分情况下等一会就会显示成功，或者出现一个勾选框确认后检查成功，只有极少数情况会发起 <code>JS质询</code> 进行挑战。</p>\n<p><img src=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/twikoo-post-comments.png\" alt=\"img\"></p>\n<h2 id=\"后记\">后记</h2>\n<p>至此，一个基本上完整的评论系统就上线了，对于 <code>Twikoo</code> 的其他配置，还有一些建议：</p>\n<ul>\n<li>使用隐藏入口不要暴露管理面板的配置按钮；</li>\n<li>设置一个复杂的密码不要让别人轻易猜出来；</li>\n<li>添加评论通知，<a href=\"https://pushoo.js.org/\" rel=\"nofollow\">pushoo.js<span>↗</span></a> 提供了丰富的通知方式，可以自行看文档选择最适合的方式。</li>\n</ul>\n<p>来源: 一梦一孤舟\r\n文章作者: Mingy\r\n文章链接: <a href=\"https://blog.mingy.org/2024/12/hexo-add-twikoo/\" rel=\"nofollow\">https://blog.mingy.org/2024/12/hexo-add-twikoo/<span>↗</span></a>\r\n本文章著作权归作者所有，任何形式的转载都请注明出处。</p>",
	{
		headings: 71,
		localImagePaths: 98,
		remoteImagePaths: 99,
		frontmatter: 100,
		imagePaths: 106
	},
	[
		72,
		75,
		77,
		80,
		83,
		86,
		88,
		90,
		92,
		94,
		96
	],
	{
		depth: 27,
		slug: 73,
		text: 74
	},
	"部署twikoo",
	"部署Twikoo",
	{
		depth: 33,
		slug: 76,
		text: 76
	},
	"复制仓库",
	{
		depth: 33,
		slug: 78,
		text: 79
	},
	"创建d1数据库",
	"创建D1数据库",
	{
		depth: 33,
		slug: 81,
		text: 82
	},
	"创建r2存储",
	"创建R2存储",
	{
		depth: 33,
		slug: 84,
		text: 85
	},
	"worker部署",
	"Worker部署",
	{
		depth: 33,
		slug: 87,
		text: 87
	},
	"绑定域名",
	{
		depth: 27,
		slug: 89,
		text: 89
	},
	"配置博客",
	{
		depth: 33,
		slug: 91,
		text: 91
	},
	"修改主题配置",
	{
		depth: 33,
		slug: 93,
		text: 93
	},
	"配置评论模块",
	{
		depth: 33,
		slug: 95,
		text: 95
	},
	"防止机器人",
	{
		depth: 27,
		slug: 97,
		text: 97
	},
	"后记",
	[],
	[],
	{
		title: 59,
		description: 60,
		pubDate: 101,
		image: 62,
		draft: 11,
		tags: 102,
		categories: 103,
		totalCharCount: 104,
		readingTime: 105
	},
	"2026-07-31T16:55",
	[],
	[],
	1820,
	7,
	[],
	"cloudflare-pages0",
	{
		id: 107,
		data: 109,
		body: 115,
		filePath: 116,
		digest: 117,
		rendered: 118
	},
	{
		title: 110,
		description: 60,
		pubDate: 111,
		image: 112,
		draft: 11,
		categories: 113,
		tags: 114
	},
	" Cloudflare Pages 部署免费图床",
	["Date", "2026-07-31T03:43:00.000Z"],
	"/images/cloudflare-pages0/df48746deb89872f.jpg",
	[],
	[],
	"# Cloudflare Pages 部署 \r\n\r\nCloudflare Pages 是推荐的部署方式，提供免费托管、全球 CDN 加速和无需服务器维护的优势。\r\n\r\n## 📂 第一步：Fork 项目 \r\n\r\n1. 访问 [CloudFlare ImgBed 项目](https://github.com/MarSeventh/CloudFlare-ImgBed)\r\n2. 点击右上角的 \"Fork\" 按钮\r\n3. 选择您的 GitHub 账户\r\n4. 确认 Fork 完成\r\n\r\n## 🏗️ 第二步：创建 Pages 项目 \r\n\r\n### 2.1 访问 Cloudflare Dashboard \r\n\r\n1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)\r\n2. 选择左侧菜单的 \"计算和AI\" -> \"Workers & Pages\"\r\n3. 点击 \"创建应用程序\"\r\n4. 在最下方 `Looking to deploy Pages? `选择 \"Get started\"\r\n5. 在 \"导入现有 Git 存储库\" 处点击 \"开始使用\"\r\n\r\n![创建 Pages 项目](https://cfbed.sanyue.de/images/deployment/pages-create.png)![创建 Pages 项目](https://cfbed.sanyue.de/images/deployment/pages-create-1.png)\r\n\r\n### 2.2 连接 GitHub 仓库 \r\n\r\n1. 如果首次使用，需要授权 Cloudflare 访问 GitHub\r\n2. 选择您 Fork 的 `CloudFlare-ImgBed` 仓库\r\n3. 点击 \"开始设置\"\r\n\r\n### 2.3 配置项目设置 \r\n\r\n| 配置项       | 值                              | 说明                      |\r\n| :----------- | :------------------------------ | :------------------------ |\r\n| 项目名称     | `cloudflare-imgbed`（或自定义） | 项目标识符                |\r\n| 生产分支     | `main`                          | 生产环境分支              |\r\n| 构建命令     | `npm install`                   | **重要：v2.0 新构建命令** |\r\n| 构建输出目录 | `/frontend-dist`                | 前端构建产物目录          |\r\n\r\n![配置项目设置](https://cfbed.sanyue.de/images/deployment/pages-build-config.png)\r\n\r\n重要提醒\r\n\r\nv2.0 版本的构建命令已变更为 `npm install`，请确保使用正确的构建命令。\r\n\r\n### 2.4 部署项目 \r\n\r\n1. 点击 \"保存并部署\"\r\n2. 等待首次部署完成（约 2-3 分钟）\r\n\r\n## 🗄️ 第三步：配置数据库 \r\n\r\n数据库用于存储文件元数据，是必需的组件，可选数据库为 `KV` 数据库和 `D1` 数据库。两者对比如下表所示，根据自己使用场景**从其中选择一种配置即可**。\r\n\r\n| 特点     | KV 数据库 | D1 数据库 |\r\n| :------- | :-------- | :-------- |\r\n| 读写性能 | 高        | 较低      |\r\n| 免费额度 | 少        | 多        |\r\n\r\n重要提示\r\n\r\nKV 数据库和 D1 数据库**只需要配置其中一个**即可，不需要同时配置两个！建议根据上表选择适合自己的数据库类型。\r\n\r\n### 3.1 KV 数据库配置 \r\n\r\n#### 创建 KV 命名空间 \r\n\r\n1. 在 Cloudflare Dashboard 中选择 \"存储和数据库\"\r\n2. 点击 \"Workers KV\"\r\n3. 点击 \"创建实例\"\r\n4. 输入命名空间名称：`img_url`（建议使用此名称）\r\n5. 点击 \"创建\"\r\n\r\n![创建 KV 命名空间](https://cfbed.sanyue.de/images/deployment/kv-create.png)![创建 KV 命名空间](https://cfbed.sanyue.de/images/deployment/kv-create-1.png)\r\n\r\n#### 绑定 KV 到项目 \r\n\r\n1. 返回您的 Pages 项目\r\n2. 选择 \"设置\" → \"绑定\"\r\n3. 点击 \"添加\" → \"KV 命名空间\"\r\n4. 填写绑定信息： \r\n   - **变量名称**：`img_url`（必须是这个名称）\r\n   - **KV 命名空间**：选择刚创建的命名空间\r\n5. 点击 \"保存\"\r\n\r\n注意\r\n\r\n绑定 KV 时，变量名称必须为 `img_url`，这是项目预设的变量名，填错会出现无法进入管理界面等情况。\r\n\r\n### 3.2 D1 数据库配置 \r\n\r\n#### 创建 D1 数据库 \r\n\r\n1. 在 Cloudflare Dashboard 中选择 \"存储和数据库\"\r\n2. 点击 \"D1 SQL 数据库\"\r\n3. 点击 \"创建数据库\"\r\n4. 输入数据库名称：`img_d1`（建议使用此名称）\r\n5. 点击 \"创建\"\r\n\r\n#### 初始化 D1 数据库 \r\n\r\n1. 创建完成后，点击进入数据库详情页\r\n2. 选择 \"控制台\" 选项卡\r\n3. 在 SQL 输入框中粘贴并执行注释区域以下的内容（见[项目仓库](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/database/init.sql)）\r\n4. 点击 \"执行\"\r\n\r\n#### 绑定 D1 到项目 \r\n\r\n1. 返回您的 Pages 项目\r\n2. 选择 \"设置\" → \"绑定\"\r\n3. 点击 \"添加\" → \"D1 数据库\"\r\n4. 填写绑定信息： \r\n   - **变量名称**：`img_d1`（必须是这个名称）\r\n   - **D1 数据库**：选择刚创建的数据库\r\n5. 点击 \"保存\"\r\n\r\n## 🔄 第四步：重新部署 \r\n\r\n绑定数据库后需要重新部署以生效：\r\n\r\n1. 进入项目的 \"部署\" 页面\r\n2. 找到最新的部署记录\r\n3. 点击右侧的 \"...\" 菜单\r\n4. 选择 \"重试部署\"\r\n5. 等待部署完成\r\n\r\n![重新部署](https://cfbed.sanyue.de/images/deployment/redeploy.png)\r\n\r\n## 🚀 下一步 \r\n\r\n至此已经完成项目在 Cloudflare Pages 的部署，但是尚未添加存储渠道，添加存储渠道和进行其他设置的方式请参考 \r\n\r\n### 配置 R2 渠道 \r\n\r\n服务器部署时默认添加了 Cloudflare R2 存储方式，以下步骤仅针对 Cloudflare 部署方式：\r\n\r\n1. 在项目设置中绑定 R2 存储桶： \r\n   - 选择 \"设置\" → \"绑定\"\r\n   - 添加 \"R2 存储桶\"\r\n   - **变量名称**：`img_r2`\r\n   - **R2 存储桶**：选择已创建的存储桶\r\n\r\n![配置 R2 渠道](https://cfbed.sanyue.de/images/deployment/r2-config.png)\r\n\r\n1. 在管理后台配置： \r\n   - 进入 \"系统设置\" → \"上传设置\"\r\n   - 配置 R2 渠道参数\r\n   - 如需图像审查，填入 R2 公开访问链接\r\n\r\n提示\r\n\r\n请注意Cloudflare R2 的免费额度限制，超过后可能会产生费用。 ![注意](https://cfbed.sanyue.de/images/deployment/r2-free-tier.png)",
	"src/content/blog/cloudflare-pages0.md",
	"f9c3f7dca0da4d57",
	{
		html: 119,
		metadata: 120
	},
	"<h1 id=\"cloudflare-pages-部署\">Cloudflare Pages 部署</h1>\n<p>Cloudflare Pages 是推荐的部署方式，提供免费托管、全球 CDN 加速和无需服务器维护的优势。</p>\n<h2 id=\"-第一步fork-项目\">📂 第一步：Fork 项目</h2>\n<ol>\n<li>访问 <a href=\"https://github.com/MarSeventh/CloudFlare-ImgBed\" rel=\"nofollow\">CloudFlare ImgBed 项目<span>↗</span></a></li>\n<li>点击右上角的 “Fork” 按钮</li>\n<li>选择您的 GitHub 账户</li>\n<li>确认 Fork 完成</li>\n</ol>\n<h2 id=\"️-第二步创建-pages-项目\">🏗️ 第二步：创建 Pages 项目</h2>\n<h3 id=\"21-访问-cloudflare-dashboard\">2.1 访问 Cloudflare Dashboard</h3>\n<ol>\n<li>登录 <a href=\"https://dash.cloudflare.com/\" rel=\"nofollow\">Cloudflare Dashboard<span>↗</span></a></li>\n<li>选择左侧菜单的 “计算和AI” -> “Workers &#x26; Pages”</li>\n<li>点击 “创建应用程序”</li>\n<li>在最下方 <code>Looking to deploy Pages? </code>选择 “Get started”</li>\n<li>在 “导入现有 Git 存储库” 处点击 “开始使用”</li>\n</ol>\n<p><img src=\"https://cfbed.sanyue.de/images/deployment/pages-create.png\" alt=\"创建 Pages 项目\"><img src=\"https://cfbed.sanyue.de/images/deployment/pages-create-1.png\" alt=\"创建 Pages 项目\"></p>\n<h3 id=\"22-连接-github-仓库\">2.2 连接 GitHub 仓库</h3>\n<ol>\n<li>如果首次使用，需要授权 Cloudflare 访问 GitHub</li>\n<li>选择您 Fork 的 <code>CloudFlare-ImgBed</code> 仓库</li>\n<li>点击 “开始设置”</li>\n</ol>\n<h3 id=\"23-配置项目设置\">2.3 配置项目设置</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">配置项</th><th align=\"left\">值</th><th align=\"left\">说明</th></tr></thead><tbody><tr><td align=\"left\">项目名称</td><td align=\"left\"><code>cloudflare-imgbed</code>（或自定义）</td><td align=\"left\">项目标识符</td></tr><tr><td align=\"left\">生产分支</td><td align=\"left\"><code>main</code></td><td align=\"left\">生产环境分支</td></tr><tr><td align=\"left\">构建命令</td><td align=\"left\"><code>npm install</code></td><td align=\"left\"><strong>重要：v2.0 新构建命令</strong></td></tr><tr><td align=\"left\">构建输出目录</td><td align=\"left\"><code>/frontend-dist</code></td><td align=\"left\">前端构建产物目录</td></tr></tbody></table>\n<p><img src=\"https://cfbed.sanyue.de/images/deployment/pages-build-config.png\" alt=\"配置项目设置\"></p>\n<p>重要提醒</p>\n<p>v2.0 版本的构建命令已变更为 <code>npm install</code>，请确保使用正确的构建命令。</p>\n<h3 id=\"24-部署项目\">2.4 部署项目</h3>\n<ol>\n<li>点击 “保存并部署”</li>\n<li>等待首次部署完成（约 2-3 分钟）</li>\n</ol>\n<h2 id=\"️-第三步配置数据库\">🗄️ 第三步：配置数据库</h2>\n<p>数据库用于存储文件元数据，是必需的组件，可选数据库为 <code>KV</code> 数据库和 <code>D1</code> 数据库。两者对比如下表所示，根据自己使用场景<strong>从其中选择一种配置即可</strong>。</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">特点</th><th align=\"left\">KV 数据库</th><th align=\"left\">D1 数据库</th></tr></thead><tbody><tr><td align=\"left\">读写性能</td><td align=\"left\">高</td><td align=\"left\">较低</td></tr><tr><td align=\"left\">免费额度</td><td align=\"left\">少</td><td align=\"left\">多</td></tr></tbody></table>\n<p>重要提示</p>\n<p>KV 数据库和 D1 数据库<strong>只需要配置其中一个</strong>即可，不需要同时配置两个！建议根据上表选择适合自己的数据库类型。</p>\n<h3 id=\"31-kv-数据库配置\">3.1 KV 数据库配置</h3>\n<h4 id=\"创建-kv-命名空间\">创建 KV 命名空间</h4>\n<ol>\n<li>在 Cloudflare Dashboard 中选择 “存储和数据库”</li>\n<li>点击 “Workers KV”</li>\n<li>点击 “创建实例”</li>\n<li>输入命名空间名称：<code>img_url</code>（建议使用此名称）</li>\n<li>点击 “创建”</li>\n</ol>\n<p><img src=\"https://cfbed.sanyue.de/images/deployment/kv-create.png\" alt=\"创建 KV 命名空间\"><img src=\"https://cfbed.sanyue.de/images/deployment/kv-create-1.png\" alt=\"创建 KV 命名空间\"></p>\n<h4 id=\"绑定-kv-到项目\">绑定 KV 到项目</h4>\n<ol>\n<li>返回您的 Pages 项目</li>\n<li>选择 “设置” → “绑定”</li>\n<li>点击 “添加” → “KV 命名空间”</li>\n<li>填写绑定信息：\n<ul>\n<li><strong>变量名称</strong>：<code>img_url</code>（必须是这个名称）</li>\n<li><strong>KV 命名空间</strong>：选择刚创建的命名空间</li>\n</ul>\n</li>\n<li>点击 “保存”</li>\n</ol>\n<p>注意</p>\n<p>绑定 KV 时，变量名称必须为 <code>img_url</code>，这是项目预设的变量名，填错会出现无法进入管理界面等情况。</p>\n<h3 id=\"32-d1-数据库配置\">3.2 D1 数据库配置</h3>\n<h4 id=\"创建-d1-数据库\">创建 D1 数据库</h4>\n<ol>\n<li>在 Cloudflare Dashboard 中选择 “存储和数据库”</li>\n<li>点击 “D1 SQL 数据库”</li>\n<li>点击 “创建数据库”</li>\n<li>输入数据库名称：<code>img_d1</code>（建议使用此名称）</li>\n<li>点击 “创建”</li>\n</ol>\n<h4 id=\"初始化-d1-数据库\">初始化 D1 数据库</h4>\n<ol>\n<li>创建完成后，点击进入数据库详情页</li>\n<li>选择 “控制台” 选项卡</li>\n<li>在 SQL 输入框中粘贴并执行注释区域以下的内容（见<a href=\"https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/database/init.sql\" rel=\"nofollow\">项目仓库<span>↗</span></a>）</li>\n<li>点击 “执行”</li>\n</ol>\n<h4 id=\"绑定-d1-到项目\">绑定 D1 到项目</h4>\n<ol>\n<li>返回您的 Pages 项目</li>\n<li>选择 “设置” → “绑定”</li>\n<li>点击 “添加” → “D1 数据库”</li>\n<li>填写绑定信息：\n<ul>\n<li><strong>变量名称</strong>：<code>img_d1</code>（必须是这个名称）</li>\n<li><strong>D1 数据库</strong>：选择刚创建的数据库</li>\n</ul>\n</li>\n<li>点击 “保存”</li>\n</ol>\n<h2 id=\"-第四步重新部署\">🔄 第四步：重新部署</h2>\n<p>绑定数据库后需要重新部署以生效：</p>\n<ol>\n<li>进入项目的 “部署” 页面</li>\n<li>找到最新的部署记录</li>\n<li>点击右侧的 ”…” 菜单</li>\n<li>选择 “重试部署”</li>\n<li>等待部署完成</li>\n</ol>\n<p><img src=\"https://cfbed.sanyue.de/images/deployment/redeploy.png\" alt=\"重新部署\"></p>\n<h2 id=\"-下一步\">🚀 下一步</h2>\n<p>至此已经完成项目在 Cloudflare Pages 的部署，但是尚未添加存储渠道，添加存储渠道和进行其他设置的方式请参考</p>\n<h3 id=\"配置-r2-渠道\">配置 R2 渠道</h3>\n<p>服务器部署时默认添加了 Cloudflare R2 存储方式，以下步骤仅针对 Cloudflare 部署方式：</p>\n<ol>\n<li>在项目设置中绑定 R2 存储桶：\n<ul>\n<li>选择 “设置” → “绑定”</li>\n<li>添加 “R2 存储桶”</li>\n<li><strong>变量名称</strong>：<code>img_r2</code></li>\n<li><strong>R2 存储桶</strong>：选择已创建的存储桶</li>\n</ul>\n</li>\n</ol>\n<p><img src=\"https://cfbed.sanyue.de/images/deployment/r2-config.png\" alt=\"配置 R2 渠道\"></p>\n<ol>\n<li>在管理后台配置：\n<ul>\n<li>进入 “系统设置” → “上传设置”</li>\n<li>配置 R2 渠道参数</li>\n<li>如需图像审查，填入 R2 公开访问链接</li>\n</ul>\n</li>\n</ol>\n<p>提示</p>\n<p>请注意Cloudflare R2 的免费额度限制，超过后可能会产生费用。 <img src=\"https://cfbed.sanyue.de/images/deployment/r2-free-tier.png\" alt=\"注意\"></p>",
	{
		headings: 121,
		localImagePaths: 177,
		remoteImagePaths: 178,
		frontmatter: 179,
		imagePaths: 185
	},
	[
		122,
		126,
		129,
		132,
		135,
		138,
		141,
		144,
		147,
		150,
		153,
		156,
		159,
		162,
		165,
		168,
		171,
		174
	],
	{
		depth: 123,
		slug: 124,
		text: 125
	},
	1,
	"cloudflare-pages-部署",
	"Cloudflare Pages 部署",
	{
		depth: 27,
		slug: 127,
		text: 128
	},
	"-第一步fork-项目",
	"📂 第一步：Fork 项目",
	{
		depth: 27,
		slug: 130,
		text: 131
	},
	"️-第二步创建-pages-项目",
	"🏗️ 第二步：创建 Pages 项目",
	{
		depth: 33,
		slug: 133,
		text: 134
	},
	"21-访问-cloudflare-dashboard",
	"2.1 访问 Cloudflare Dashboard",
	{
		depth: 33,
		slug: 136,
		text: 137
	},
	"22-连接-github-仓库",
	"2.2 连接 GitHub 仓库",
	{
		depth: 33,
		slug: 139,
		text: 140
	},
	"23-配置项目设置",
	"2.3 配置项目设置",
	{
		depth: 33,
		slug: 142,
		text: 143
	},
	"24-部署项目",
	"2.4 部署项目",
	{
		depth: 27,
		slug: 145,
		text: 146
	},
	"️-第三步配置数据库",
	"🗄️ 第三步：配置数据库",
	{
		depth: 33,
		slug: 148,
		text: 149
	},
	"31-kv-数据库配置",
	"3.1 KV 数据库配置",
	{
		depth: 54,
		slug: 151,
		text: 152
	},
	"创建-kv-命名空间",
	"创建 KV 命名空间",
	{
		depth: 54,
		slug: 154,
		text: 155
	},
	"绑定-kv-到项目",
	"绑定 KV 到项目",
	{
		depth: 33,
		slug: 157,
		text: 158
	},
	"32-d1-数据库配置",
	"3.2 D1 数据库配置",
	{
		depth: 54,
		slug: 160,
		text: 161
	},
	"创建-d1-数据库",
	"创建 D1 数据库",
	{
		depth: 54,
		slug: 163,
		text: 164
	},
	"初始化-d1-数据库",
	"初始化 D1 数据库",
	{
		depth: 54,
		slug: 166,
		text: 167
	},
	"绑定-d1-到项目",
	"绑定 D1 到项目",
	{
		depth: 27,
		slug: 169,
		text: 170
	},
	"-第四步重新部署",
	"🔄 第四步：重新部署",
	{
		depth: 27,
		slug: 172,
		text: 173
	},
	"-下一步",
	"🚀 下一步",
	{
		depth: 33,
		slug: 175,
		text: 176
	},
	"配置-r2-渠道",
	"配置 R2 渠道",
	[],
	[],
	{
		title: 110,
		description: 60,
		pubDate: 180,
		image: 112,
		draft: 11,
		tags: 181,
		categories: 182,
		totalCharCount: 183,
		readingTime: 184
	},
	"2026-07-31T11:43",
	[],
	[],
	1139,
	5,
	[],
	"markdown-style-guide",
	{
		id: 186,
		data: 188,
		body: 197,
		filePath: 198,
		digest: 199,
		rendered: 200
	},
	{
		title: 189,
		description: 190,
		pubDate: 191,
		image: 192,
		badge: 193,
		draft: 11,
		categories: 194,
		tags: 196
	},
	"Markdown Style Guide",
	"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.",
	["Date", "2024-06-30T16:00:00.000Z"],
	"/image/image3.webp",
	"Markdown",
	[13, 195],
	"Examples",
	[193],
	"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.\r\n\r\n## Headings\r\n\r\nThe following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.\r\n\r\n# H1\r\n\r\n## H2\r\n\r\n### H3\r\n\r\n#### H4\r\n\r\n##### H5\r\n\r\n###### H6\r\n\r\n## Paragraph\r\n\r\nXerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\r\n\r\nItatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\r\n\r\n## Images\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n![Alt text](./full/or/relative/path/of/image)\r\n```\r\n\r\n#### Output\r\n\r\n![blog placeholder](/logo.png)\r\n\r\n## Blockquotes\r\n\r\nThe blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.\r\n\r\n### Blockquote without attribution\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.\r\n> **Note** that you can use _Markdown syntax_ within a blockquote.\r\n```\r\n\r\n#### Output\r\n\r\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.\r\n> **Note** that you can use _Markdown syntax_ within a blockquote.\r\n\r\n### Blockquote with attribution\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n> Don't communicate by sharing memory, share memory by communicating.<br>\r\n> — <cite>Rob Pike[^1]</cite>\r\n```\r\n\r\n#### Output\r\n\r\n> Don't communicate by sharing memory, share memory by communicating.<br>\r\n> — <cite>Rob Pike[^1]</cite>\r\n\r\n[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.\r\n\r\n## Tables\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n| Italics   | Bold     | Code   |\r\n| --------- | -------- | ------ |\r\n| _italics_ | **bold** | `code` |\r\n```\r\n\r\n#### Output\r\n\r\n| Italics   | Bold     | Code   |\r\n| --------- | -------- | ------ |\r\n| _italics_ | **bold** | `code` |\r\n\r\n## Code Blocks\r\n\r\n#### Syntax\r\n\r\nwe can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash\r\n\r\n````markdown\r\n```cpp\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\nconst int N = 1e5 + 5;\r\nint n, k, a[N];\r\nlong long ans;\r\nvector<int> v[N];\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &k);\r\n    for (int i = 1; i <= n; i++)\r\n    {\r\n        scanf(\"%d\", &a[i]);\r\n        v[i % k].push_back(a[i]);\r\n    }\r\n    for (int i = 0; i < k; i++)\r\n        sort(v[i].rbegin(), v[i].rend());\r\n    for (int i = 0; i < k; i++)\r\n    {\r\n        for (int j = 0; j + 1 < v[i].size(); j += 2)\r\n        {\r\n            ans += v[i][j] + v[i][j + 1];\r\n        }\r\n    }\r\n    printf(\"%lld\\n\", ans);\r\n    return 0;\r\n}\r\n```\r\n````\r\n\r\nOutput\r\n\r\n```cpp\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\nconst int N = 1e5 + 5;\r\nint n, k, a[N];\r\nlong long ans;\r\nvector<int> v[N];\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &k);\r\n    for (int i = 1; i <= n; i++)\r\n    {\r\n        scanf(\"%d\", &a[i]);\r\n        v[i % k].push_back(a[i]);\r\n    }\r\n    for (int i = 0; i < k; i++)\r\n        sort(v[i].rbegin(), v[i].rend());\r\n    for (int i = 0; i < k; i++)\r\n    {\r\n        for (int j = 0; j + 1 < v[i].size(); j += 2)\r\n        {\r\n            ans += v[i][j] + v[i][j + 1];\r\n        }\r\n    }\r\n    printf(\"%lld\\n\", ans);\r\n    return 0;\r\n}\r\n```\r\n\r\n## List Types\r\n\r\n### Ordered List\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n1. First item\r\n2. Second item\r\n3. Third item\r\n```\r\n\r\n#### Output\r\n\r\n1. First item\r\n2. Second item\r\n3. Third item\r\n\r\n### Unordered List\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n- List item\r\n- Another item\r\n- And another item\r\n```\r\n\r\n#### Output\r\n\r\n- List item\r\n- Another item\r\n- And another item\r\n\r\n### Nested list\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n- Fruit\r\n  - Apple\r\n  - Orange\r\n  - Banana\r\n- Dairy\r\n  - Milk\r\n  - Cheese\r\n```\r\n\r\n#### Output\r\n\r\n- Fruit\r\n  - Apple\r\n  - Orange\r\n  - Banana\r\n- Dairy\r\n  - Milk\r\n  - Cheese\r\n\r\n## Other Elements\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\r\n\r\nH<sub>2</sub>O\r\n\r\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r\n\r\nPress <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.\r\n\r\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r\n```\r\n\r\n#### Output\r\n\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\r\n\r\nH<sub>2</sub>O\r\n\r\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r\n\r\nPress <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.\r\n\r\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.",
	"src/content/blog/markdown-style-guide.md",
	"923cbaa3cbf06932",
	{
		html: 201,
		metadata: 202
	},
	"<p>Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.</p>\n<h2 id=\"headings\">Headings</h2>\n<p>The following HTML <code>&#x3C;h1></code>—<code>&#x3C;h6></code> elements represent six levels of section headings. <code>&#x3C;h1></code> is the highest section level while <code>&#x3C;h6></code> is the lowest.</p>\n<h1 id=\"h1\">H1</h1>\n<h2 id=\"h2\">H2</h2>\n<h3 id=\"h3\">H3</h3>\n<h4 id=\"h4\">H4</h4>\n<h5 id=\"h5\">H5</h5>\n<h6 id=\"h6\">H6</h6>\n<h2 id=\"paragraph\">Paragraph</h2>\n<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>\n<p>Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.</p>\n<h2 id=\"images\">Images</h2>\n<h4 id=\"syntax\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">![</span><span style=\"color:#CF9C00\">Alt text</span><span style=\"color:#ADB1C2\">](</span><span style=\"color:#565869;text-decoration:underline\">./full/or/relative/path/of/image</span><span style=\"color:#ADB1C2\">)</span></span></code></code></pre></div>\n<h4 id=\"output\">Output</h4>\n<p><img src=\"/logo.png\" alt=\"blog placeholder\"></p>\n<h2 id=\"blockquotes\">Blockquotes</h2>\n<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>\n<h3 id=\"blockquote-without-attribution\">Blockquote without attribution</h3>\n<h4 id=\"syntax-1\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">></span><span style=\"color:#777985\"> Tiam, ad mint andaepu dandae nostion secatur sequo quae.</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">></span><span style=\"color:#ADB1C2;font-weight:bold\"> **</span><span style=\"color:#13BBB7;font-weight:bold\">Note</span><span style=\"color:#ADB1C2;font-weight:bold\">**</span><span style=\"color:#777985\"> that you can use </span><span style=\"color:#ADB1C2;font-style:italic\">_</span><span style=\"color:#13BBB7;font-style:italic\">Markdown syntax</span><span style=\"color:#ADB1C2;font-style:italic\">_</span><span style=\"color:#777985\"> within a blockquote.</span></span></code></code></pre></div>\n<h4 id=\"output-1\">Output</h4>\n<blockquote>\n<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.\r\n<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>\n</blockquote>\n<h3 id=\"blockquote-with-attribution\">Blockquote with attribution</h3>\n<h4 id=\"syntax-2\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">></span><span style=\"color:#777985\"> Don't communicate by sharing memory, share memory by communicating.&#x3C;br></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">></span><span style=\"color:#777985\"> — &#x3C;cite>Rob Pike</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#09A1ED\">^1</span><span style=\"color:#ADB1C2\">]</span><span style=\"color:#777985\">&#x3C;/cite></span></span></code></code></pre></div>\n<h4 id=\"output-2\">Output</h4>\n<blockquote>\n<p>Don’t communicate by sharing memory, share memory by communicating.<br>\r\n— <cite>Rob Pike<sup><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">1</a></sup></cite></p>\n</blockquote>\n<h2 id=\"tables\">Tables</h2>\n<h4 id=\"syntax-3\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">|</span><span style=\"color:#565869\"> Italics   </span><span style=\"color:#ADB1C2\">|</span><span style=\"color:#565869\"> Bold     </span><span style=\"color:#ADB1C2\">|</span><span style=\"color:#565869\"> Code   </span><span style=\"color:#ADB1C2\">|</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">|</span><span style=\"color:#ADB1C2\"> ---------</span><span style=\"color:#ADB1C2\"> |</span><span style=\"color:#ADB1C2\"> --------</span><span style=\"color:#ADB1C2\"> |</span><span style=\"color:#ADB1C2\"> ------</span><span style=\"color:#ADB1C2\"> |</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">|</span><span style=\"color:#ADB1C2;font-style:italic\"> _</span><span style=\"color:#13BBB7;font-style:italic\">italics</span><span style=\"color:#ADB1C2;font-style:italic\">_</span><span style=\"color:#ADB1C2\"> |</span><span style=\"color:#ADB1C2;font-weight:bold\"> **</span><span style=\"color:#13BBB7;font-weight:bold\">bold</span><span style=\"color:#ADB1C2;font-weight:bold\">**</span><span style=\"color:#ADB1C2\"> |</span><span style=\"color:#ADB1C2\"> `</span><span style=\"color:#F767BB\">code</span><span style=\"color:#ADB1C2\">`</span><span style=\"color:#ADB1C2\"> |</span></span></code></code></pre></div>\n<h4 id=\"output-3\">Output</h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>\n<h2 id=\"code-blocks\">Code Blocks</h2>\n<h4 id=\"syntax-4\">Syntax</h4>\n<p>we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">```</span><span style=\"color:#565869\">cpp</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">#include &#x3C;bits/stdc++.h></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">using namespace std;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">const int N = 1e5 + 5;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">int n, k, a[N];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">long long ans;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">vector&#x3C;int> v[N];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">int main()</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">{</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    scanf(\"%d%d\", &#x26;n, &#x26;k);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    for (int i = 1; i &#x3C;= n; i++)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        scanf(\"%d\", &#x26;a[i]);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        v[i % k].push_back(a[i]);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    for (int i = 0; i &#x3C; k; i++)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        sort(v[i].rbegin(), v[i].rend());</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    for (int i = 0; i &#x3C; k; i++)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        for (int j = 0; j + 1 &#x3C; v[i].size(); j += 2)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">            ans += v[i][j] + v[i][j + 1];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    printf(\"%lld\\n\", ans);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">    return 0;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">}</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">```</span></span></code></code></pre></div>\n<p>Output</p>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">CPP</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"cpp\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">#</span><span style=\"color:#11658F\">include</span><span style=\"color:#ADB1C2\"> &#x3C;</span><span style=\"color:#CF9C00\">bits/stdc++.h</span><span style=\"color:#ADB1C2\">></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">using</span><span style=\"color:#F767BB\"> namespace</span><span style=\"color:#565869\"> std</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">const</span><span style=\"color:#2DAE58\"> int</span><span style=\"color:#565869\"> N </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#FF5C57\"> 1</span><span style=\"color:#FF5C57CC\">e</span><span style=\"color:#FF5C57\">5</span><span style=\"color:#ADB1C2\"> +</span><span style=\"color:#FF5C57\"> 5</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#2DAE58\">int</span><span style=\"color:#565869\"> n</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> k</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> a</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">N</span><span style=\"color:#ADB1C2\">];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#2DAE58\">long</span><span style=\"color:#2DAE58\"> long</span><span style=\"color:#565869\"> ans</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">vector</span><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#2DAE58\">int</span><span style=\"color:#ADB1C2\">></span><span style=\"color:#565869\"> v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">N</span><span style=\"color:#ADB1C2\">];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#2DAE58\">int</span><span style=\"color:#09A1ED\"> main</span><span style=\"color:#ADB1C2\">()</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">{</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#09A1ED\">    scanf</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#B38700\">%d%d</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> &#x26;</span><span style=\"color:#565869\">n</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> &#x26;</span><span style=\"color:#565869\">k</span><span style=\"color:#ADB1C2\">);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">    for</span><span style=\"color:#ADB1C2\"> (</span><span style=\"color:#2DAE58\">int</span><span style=\"color:#565869\"> i </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#FF5C57\"> 1</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> i </span><span style=\"color:#ADB1C2\">&#x3C;=</span><span style=\"color:#565869\"> n</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> i</span><span style=\"color:#ADB1C2\">++)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#09A1ED\">        scanf</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#B38700\">%d</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#ADB1C2\"> &#x26;</span><span style=\"color:#565869\">a</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">]);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">        v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i </span><span style=\"color:#ADB1C2\">%</span><span style=\"color:#565869\"> k</span><span style=\"color:#ADB1C2\">].</span><span style=\"color:#09A1ED\">push_back</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#565869\">a</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">]);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">    for</span><span style=\"color:#ADB1C2\"> (</span><span style=\"color:#2DAE58\">int</span><span style=\"color:#565869\"> i </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#FF5C57\"> 0</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> i </span><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#565869\"> k</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> i</span><span style=\"color:#ADB1C2\">++)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#09A1ED\">        sort</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#565869\">v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">].</span><span style=\"color:#09A1ED\">rbegin</span><span style=\"color:#ADB1C2\">(),</span><span style=\"color:#565869\"> v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">].</span><span style=\"color:#09A1ED\">rend</span><span style=\"color:#ADB1C2\">());</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">    for</span><span style=\"color:#ADB1C2\"> (</span><span style=\"color:#2DAE58\">int</span><span style=\"color:#565869\"> i </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#FF5C57\"> 0</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> i </span><span style=\"color:#ADB1C2\">&#x3C;</span><span style=\"color:#565869\"> k</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> i</span><span style=\"color:#ADB1C2\">++)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">        for</span><span style=\"color:#ADB1C2\"> (</span><span style=\"color:#2DAE58\">int</span><span style=\"color:#565869\"> j </span><span style=\"color:#ADB1C2\">=</span><span style=\"color:#FF5C57\"> 0</span><span style=\"color:#ADB1C2\">;</span><span style=\"color:#565869\"> j </span><span style=\"color:#ADB1C2\">+</span><span style=\"color:#FF5C57\"> 1</span><span style=\"color:#ADB1C2\"> &#x3C;</span><span style=\"color:#565869\"> v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">].</span><span style=\"color:#09A1ED\">size</span><span style=\"color:#ADB1C2\">();</span><span style=\"color:#565869\"> j </span><span style=\"color:#ADB1C2\">+=</span><span style=\"color:#FF5C57\"> 2</span><span style=\"color:#ADB1C2\">)</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">        {</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">            ans </span><span style=\"color:#ADB1C2\">+=</span><span style=\"color:#565869\"> v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">][</span><span style=\"color:#565869\">j</span><span style=\"color:#ADB1C2\">]</span><span style=\"color:#ADB1C2\"> +</span><span style=\"color:#565869\"> v</span><span style=\"color:#ADB1C2\">[</span><span style=\"color:#565869\">i</span><span style=\"color:#ADB1C2\">][</span><span style=\"color:#565869\">j </span><span style=\"color:#ADB1C2\">+</span><span style=\"color:#FF5C57\"> 1</span><span style=\"color:#ADB1C2\">];</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">        }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">    }</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#09A1ED\">    printf</span><span style=\"color:#ADB1C2\">(</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#B38700\">%lld</span><span style=\"color:#F5B900\">\\n</span><span style=\"color:#ADB1C2\">\"</span><span style=\"color:#ADB1C2\">,</span><span style=\"color:#565869\"> ans</span><span style=\"color:#ADB1C2\">);</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#F767BB\">    return</span><span style=\"color:#FF5C57\"> 0</span><span style=\"color:#ADB1C2\">;</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">}</span></span></code></code></pre></div>\n<h2 id=\"list-types\">List Types</h2>\n<h3 id=\"ordered-list\">Ordered List</h3>\n<h4 id=\"syntax-5\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">1.</span><span style=\"color:#565869\"> First item</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">2.</span><span style=\"color:#565869\"> Second item</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">3.</span><span style=\"color:#565869\"> Third item</span></span></code></code></pre></div>\n<h4 id=\"output-4\">Output</h4>\n<ol>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ol>\n<h3 id=\"unordered-list\">Unordered List</h3>\n<h4 id=\"syntax-6\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">-</span><span style=\"color:#565869\"> List item</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">-</span><span style=\"color:#565869\"> Another item</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">-</span><span style=\"color:#565869\"> And another item</span></span></code></code></pre></div>\n<h4 id=\"output-5\">Output</h4>\n<ul>\n<li>List item</li>\n<li>Another item</li>\n<li>And another item</li>\n</ul>\n<h3 id=\"nested-list\">Nested list</h3>\n<h4 id=\"syntax-7\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">-</span><span style=\"color:#565869\"> Fruit</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  -</span><span style=\"color:#565869\"> Apple</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  -</span><span style=\"color:#565869\"> Orange</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  -</span><span style=\"color:#565869\"> Banana</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">-</span><span style=\"color:#565869\"> Dairy</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  -</span><span style=\"color:#565869\"> Milk</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#ADB1C2\">  -</span><span style=\"color:#565869\"> Cheese</span></span></code></code></pre></div>\n<h4 id=\"output-6\">Output</h4>\n<ul>\n<li>Fruit\n<ul>\n<li>Apple</li>\n<li>Orange</li>\n<li>Banana</li>\n</ul>\n</li>\n<li>Dairy\n<ul>\n<li>Milk</li>\n<li>Cheese</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"other-elements\">Other Elements</h2>\n<h4 id=\"syntax-8\">Syntax</h4>\n<div class=\"not-prose ryuchan-code\"><div class=\"ryuchan-code-toolbar\"><span class=\"ryuchan-code-toolbar-language\">MARKDOWN</span><button class=\"btn-copy\" aria-label=\"Copy code\" type=\"button\"><span class=\"ryuchan-code-toolbar-copy-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"copy-icon\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span><span class=\"ryuchan-code-toolbar-copy-success hidden\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"success-icon\"><path d=\"M20 6L9 17l-5-5\"></path></svg></span></button></div><pre class=\"ryuchan-code-content\" style=\"background-color:#FAFBFC;color:#565869; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code class=\"grid [&#x26;>.line]:px-4\" style=\"counter-reset: line\"><code><span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">&#x3C;abbr title=\"Graphics Interchange Format\">GIF&#x3C;/abbr> is a bitmap image format.</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">H&#x3C;sub>2&#x3C;/sub>O</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">X&#x3C;sup>n&#x3C;/sup> + Y&#x3C;sup>n&#x3C;/sup> = Z&#x3C;sup>n&#x3C;/sup></span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">Press &#x3C;kbd>CTRL&#x3C;/kbd>+&#x3C;kbd>ALT&#x3C;/kbd>+&#x3C;kbd>Delete&#x3C;/kbd> to end the session.</span></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"></span>\n<span class=\"line before:content-[counter(line)]\" style=\"counter-increment: line\"><span style=\"color:#565869\">Most &#x3C;mark>salamanders&#x3C;/mark> are nocturnal, and hunt for insects, worms, and other small creatures.</span></span></code></code></pre></div>\n<h4 id=\"output-7\">Output</h4>\n<p><abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.</p>\n<p>H<sub>2</sub>O</p>\n<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>\n<p>Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.</p>\n<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>\n<section data-footnotes=\"\" class=\"footnotes\"><h2 class=\"sr-only\" id=\"footnote-label\">Footnotes</h2>\n<ol>\n<li id=\"user-content-fn-1\">\n<p>The above quote is excerpted from Rob Pike’s <a href=\"https://www.youtube.com/watch?v=PAAkCSZUG1c\" rel=\"nofollow\">talk<span>↗</span></a> during Gopherfest, November 18, 2015. <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" aria-label=\"Back to reference 1\" class=\"data-footnote-backref\">↩</a></p>\n</li>\n</ol>\n</section>",
	{
		headings: 203,
		localImagePaths: 301,
		remoteImagePaths: 302,
		frontmatter: 303,
		imagePaths: 308
	},
	[
		204,
		207,
		210,
		213,
		216,
		219,
		222,
		226,
		229,
		232,
		235,
		238,
		241,
		244,
		246,
		248,
		251,
		253,
		255,
		258,
		260,
		262,
		265,
		267,
		270,
		273,
		275,
		277,
		280,
		282,
		284,
		287,
		289,
		291,
		294,
		296,
		298
	],
	{
		depth: 27,
		slug: 205,
		text: 206
	},
	"headings",
	"Headings",
	{
		depth: 123,
		slug: 208,
		text: 209
	},
	"h1",
	"H1",
	{
		depth: 27,
		slug: 211,
		text: 212
	},
	"h2",
	"H2",
	{
		depth: 33,
		slug: 214,
		text: 215
	},
	"h3",
	"H3",
	{
		depth: 54,
		slug: 217,
		text: 218
	},
	"h4",
	"H4",
	{
		depth: 184,
		slug: 220,
		text: 221
	},
	"h5",
	"H5",
	{
		depth: 223,
		slug: 224,
		text: 225
	},
	6,
	"h6",
	"H6",
	{
		depth: 27,
		slug: 227,
		text: 228
	},
	"paragraph",
	"Paragraph",
	{
		depth: 27,
		slug: 230,
		text: 231
	},
	"images",
	"Images",
	{
		depth: 54,
		slug: 233,
		text: 234
	},
	"syntax",
	"Syntax",
	{
		depth: 54,
		slug: 236,
		text: 237
	},
	"output",
	"Output",
	{
		depth: 27,
		slug: 239,
		text: 240
	},
	"blockquotes",
	"Blockquotes",
	{
		depth: 33,
		slug: 242,
		text: 243
	},
	"blockquote-without-attribution",
	"Blockquote without attribution",
	{
		depth: 54,
		slug: 245,
		text: 234
	},
	"syntax-1",
	{
		depth: 54,
		slug: 247,
		text: 237
	},
	"output-1",
	{
		depth: 33,
		slug: 249,
		text: 250
	},
	"blockquote-with-attribution",
	"Blockquote with attribution",
	{
		depth: 54,
		slug: 252,
		text: 234
	},
	"syntax-2",
	{
		depth: 54,
		slug: 254,
		text: 237
	},
	"output-2",
	{
		depth: 27,
		slug: 256,
		text: 257
	},
	"tables",
	"Tables",
	{
		depth: 54,
		slug: 259,
		text: 234
	},
	"syntax-3",
	{
		depth: 54,
		slug: 261,
		text: 237
	},
	"output-3",
	{
		depth: 27,
		slug: 263,
		text: 264
	},
	"code-blocks",
	"Code Blocks",
	{
		depth: 54,
		slug: 266,
		text: 234
	},
	"syntax-4",
	{
		depth: 27,
		slug: 268,
		text: 269
	},
	"list-types",
	"List Types",
	{
		depth: 33,
		slug: 271,
		text: 272
	},
	"ordered-list",
	"Ordered List",
	{
		depth: 54,
		slug: 274,
		text: 234
	},
	"syntax-5",
	{
		depth: 54,
		slug: 276,
		text: 237
	},
	"output-4",
	{
		depth: 33,
		slug: 278,
		text: 279
	},
	"unordered-list",
	"Unordered List",
	{
		depth: 54,
		slug: 281,
		text: 234
	},
	"syntax-6",
	{
		depth: 54,
		slug: 283,
		text: 237
	},
	"output-5",
	{
		depth: 33,
		slug: 285,
		text: 286
	},
	"nested-list",
	"Nested list",
	{
		depth: 54,
		slug: 288,
		text: 234
	},
	"syntax-7",
	{
		depth: 54,
		slug: 290,
		text: 237
	},
	"output-6",
	{
		depth: 27,
		slug: 292,
		text: 293
	},
	"other-elements",
	"Other Elements",
	{
		depth: 54,
		slug: 295,
		text: 234
	},
	"syntax-8",
	{
		depth: 54,
		slug: 297,
		text: 237
	},
	"output-7",
	{
		depth: 27,
		slug: 299,
		text: 300
	},
	"footnote-label",
	"Footnotes",
	[],
	[],
	{
		title: 189,
		description: 190,
		pubDate: 304,
		image: 192,
		categories: 305,
		tags: 306,
		badge: 193,
		totalCharCount: 307,
		readingTime: 184
	},
	"Jul 01 2024",
	[13, 195],
	[193],
	639,
	[],
	"ryuchan-mdx",
	{
		id: 309,
		data: 311,
		body: 321,
		filePath: 322,
		digest: 323,
		deferredRender: 324
	},
	{
		title: 312,
		description: 313,
		pubDate: 314,
		image: 315,
		badge: 316,
		draft: 11,
		categories: 317,
		tags: 318
	},
	"Using mdx in RyuChan",
	"Using MDX in RyuChan to enrich article content with more components",
	["Date", "2024-07-11T16:00:00.000Z"],
	"/image/image2.webp",
	"MDX",
	[13, 195],
	[
		15,
		319,
		320
	],
	"Blog",
	"Project",
	"import Collapse from \"../../components/mdx/Collapse.astro\";\r\nimport Diff from \"../../components/mdx/Diff.astro\";\r\nimport Error from \"../../components/mdx/Error.astro\";\r\nimport Info from \"../../components/mdx/Info.astro\";\r\nimport Kbd from \"../../components/mdx/Kbd.astro\";\r\nimport Success from \"../../components/mdx/Success.astro\";\r\nimport Warning from \"../../components/mdx/Warning.astro\";\r\nimport TimeLine from \"../../components/mdx/TimeLine.astro\";\r\nimport LinkCard from \"../../components/mdx/LinkCard.astro\";\r\n\r\n## Preface\r\n\r\nThis article describes how to use the components provided by RyuChan in `mdx` to realize the functions that can't be realized by normal `md`.\r\n\r\n## Main text\r\n\r\n### Getting started\r\n\r\nFirst you need to create an `mdx` file, which is as simple as changing the extension to `.mdx`.\r\n\r\n### Introducing\r\n\r\nThe components provided by Ryuchan are placed in the `/mdx` folders. Write something under the document properties (frontmatter):\r\n\r\n```astro\r\nimport Collapse from \"../../components/mdx/Collapse.astro\";\r\nimport Diff from \"../../components/mdx/Diff.astro\";\r\nimport Error from \"../../components/mdx/Error.astro\";\r\nimport Info from \"../../components/mdx/Info.astro\";\r\nimport Kbd from \"../../components/mdx/Kbd.astro\";\r\nimport Success from \"../../components/mdx/Success.astro\";\r\nimport Warning from \"../../components/mdx/Warning.astro\";\r\nimport TimeLine from \"../../components/mdx/TimeLine.astro\";\r\nimport LinkCard from \"../../components/mdx/LinkCard.astro\";\r\n```\r\n\r\n### Example\r\n\r\n#### Collapse\r\n\r\n<Collapse title=\"This is an example text.\">\r\n  This is the hidden content!\r\n</Collapse>\r\n\r\n```astro\r\n<Collapse title=\"This is an example text.\">\r\n  This is the hidden content!\r\n</Collapse>\r\n```\r\n\r\n#### Diff\r\n\r\n<Diff l=\"/image/l.webp\" r=\"/image/r.webp\" />\r\n\r\n```astro\r\n<Diff l=\"/image/l.webp\" r=\"/image/r.webp\" />\r\n```\r\n\r\n#### Error\r\n\r\n<Error>Maybe something went wrong?</Error>\r\n\r\n```astro\r\n<Error>Maybe something went wrong? </Error>\r\n```\r\n\r\n#### Warning\r\n\r\n<Warning>Hey! Watch out for potholes! </Warning>\r\n\r\n```astro\r\n<Warning>Hey! Watch out for potholes! </Warning>\r\n```\r\n\r\n#### Message\r\n\r\n<Info>It's just a message. </Info>\r\n\r\n```astro\r\n<Info>It's just a message. </Info>\r\n```\r\n\r\n#### Success\r\n\r\n<Success>Congratulations on your successful deployment! </Success>\r\n\r\n```astro\r\n<Success>Congratulations on your successful deployment! </Success>\r\n```\r\n\r\n#### Kbd\r\n\r\n<Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy the text.\r\n\r\n```astro\r\n<Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy the text.\r\n```\r\n\r\n#### TimeLine\r\n\r\n<TimeLine\r\n  items={[\r\n    { year: \"1984\", event: \"First Macintosh computer\" },\r\n    { year: \"1998\", event: \"iMac\" },\r\n    { year: \"2001\", event: \"iPod\" },\r\n    { year: \"2007\", event: \"iPhone\" },\r\n    { year: \"2015\", event: \"Apple Watch\" },\r\n  ]}\r\n/>\r\n\r\n```astro\r\n<TimeLine\r\n  items={[\r\n    { year: \"1984\", event: \"First Macintosh computer\" },\r\n    { year: \"1998\", event: \"iMac\" },\r\n    { year: \"2001\", event: \"iPod\" },\r\n    { year: \"2007\", event: \"iPhone\" },\r\n    { year: \"2015\", event: \"Apple Watch\" },\r\n  ]}\r\n/>\r\n```\r\n\r\n#### LinkCard\r\n\r\n<LinkCard\r\n  title=\"RyuChan\"\r\n  desc=\"My blog project!\"\r\n  url=\"https://github.com/kobaridev/RyuChan\"\r\n  img=\"https://img.131714.xyz/file/Avatar/NOr1G3Zs.jpeg\"\r\n/>\r\n\r\n```astro\r\n<LinkCard\r\n  title=\"RyuChan\"\r\n  desc=\"My blog project!\"\r\n  url=\"https://github.com/kobaridev/RyuChan\"\r\n  img=\"https://img.131714.xyz/file/Avatar/NOr1G3Zs.jpeg\"\r\n/>\r\n```",
	"src/content/blog/ryuchan-mdx.mdx",
	"da1c6350014d7aaa",
	true,
	"using-mdx",
	{
		id: 325,
		data: 327,
		body: 334,
		filePath: 335,
		digest: 336,
		deferredRender: 324
	},
	{
		title: 328,
		description: 329,
		pubDate: 330,
		image: 331,
		badge: 316,
		draft: 11,
		categories: 332,
		tags: 333
	},
	"Using MDX",
	"Lorem ipsum dolor sit amet",
	["Date", "2022-07-01T16:00:00.000Z"],
	"/image/image1.webp",
	[13],
	[],
	"This theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.\r\n\r\n## Why MDX?\r\n\r\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\r\n\r\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\r\n\r\n## Example\r\n\r\nHere is how you import and use a UI component inside of MDX.  \r\nWhen you open this page in the browser, you should see the clickable button below.\r\n\r\n## More Links\r\n\r\n- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)\r\n- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\r\n- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.",
	"src/content/blog/using-mdx.mdx",
	"a2643a040821233b",
	"meta::meta",
	[
		"Map",
		339,
		340,
		341,
		342,
		343,
		344
	],
	"astro-config-digest",
	"{\"root\":{},\"srcDir\":{},\"publicDir\":{},\"outDir\":{},\"cacheDir\":{},\"site\":\"https://blog.z2m.store\",\"compressHTML\":\"jsx\",\"base\":\"/\",\"trailingSlash\":\"ignore\",\"output\":\"static\",\"scopedStyleStrategy\":\"attribute\",\"build\":{\"format\":\"directory\",\"client\":{},\"server\":{},\"assets\":\"_astro\",\"serverEntry\":\"entry.mjs\",\"redirects\":true,\"inlineStylesheets\":\"auto\",\"concurrency\":1},\"server\":{\"open\":false,\"host\":false,\"port\":4321,\"allowedHosts\":[]},\"redirects\":{},\"image\":{\"endpoint\":{\"route\":\"/_image\"},\"service\":{\"entrypoint\":\"astro/assets/services/sharp\",\"config\":{}},\"dangerouslyProcessSVG\":false,\"domains\":[],\"remotePatterns\":[],\"responsiveStyles\":false},\"devToolbar\":{\"enabled\":true},\"markdown\":{\"syntaxHighlight\":{\"type\":\"shiki\",\"excludeLangs\":[\"math\"]},\"shikiConfig\":{\"langs\":[],\"langAlias\":{},\"theme\":\"snazzy-light\",\"themes\":{},\"wrap\":false,\"transformers\":[{}]},\"remarkPlugins\":[],\"rehypePlugins\":[],\"remarkRehype\":{},\"processor\":{\"name\":\"unified\",\"options\":{\"remarkPlugins\":[null,null],\"rehypePlugins\":[null,[null,{\"content\":{\"type\":\"text\",\"value\":\"↗\"}}]],\"remarkRehype\":{}}}},\"security\":{\"checkOrigin\":true,\"allowedDomains\":[],\"csp\":false,\"actionBodySizeLimit\":1048576,\"serverIslandBodySizeLimit\":1048576},\"env\":{\"schema\":{},\"validateSecrets\":false},\"prerenderConflictBehavior\":\"warn\",\"fetchFile\":\"fetch\",\"experimental\":{\"clientPrerender\":false,\"contentIntellisense\":false,\"chromeDevtoolsWorkspace\":false,\"collectionStorage\":\"single-file\"},\"legacy\":{\"collectionsBackwardsCompat\":false}}",
	"astro-version",
	"7.1.6",
	"content-config-digest",
	"6ee51970d301ecc6"
];
//#endregion
export { _astro_data_layer_content_default as default };

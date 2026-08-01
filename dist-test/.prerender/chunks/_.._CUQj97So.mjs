import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { I as createAstro, S as maybeRenderHead, T as defineScriptVars, f as Fragment, u as renderComponent, v as renderTemplate, w as addAttribute } from "./server_da45uaTM.mjs";
import { t as createComponent } from "./astro-component_DYbNEgig.mjs";
import { g as renderScript, t as $$BaseLayout } from "./BaseLayout_DiR96fKT.mjs";
import "./page-ssr_BJ61F868.mjs";
import "./compiler_Cv5Qp11F.mjs";
import { D as USER_QR_ALIPAY, E as USER_NAME, N as t, O as USER_QR_WECHAT, P as umamiConfig, j as commentsConfig, n as renderEntry, s as DATE_FORMAT, t as getCollection } from "./_astro_content_0m825bVV.mjs";
import { n as $$Icon } from "./_astro_assets_C9BQRxhs.mjs";
import { t as $$MainCard } from "./MainCard_CUQw-pEY.mjs";
import { t as dayjs_default } from "./dayjs_EMIvGZG2.mjs";
import { t as $$PostFilter } from "./PostFilter_COHlnvem.mjs";
//#region src/components/widgets/License.astro
createAstro("https://blog.z2m.store");
var $$License = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$License;
	const { title, url, pubDate, badge, categories = [], tags = [], word, time } = Astro.props;
	const displayDate = pubDate ? dayjs_default(pubDate).format(DATE_FORMAT) : "";
	const slug = url ? url.toString().split("/").filter(Boolean).pop() : void 0;
	const socialLinks = [
		{
			name: "X (Twitter)",
			icon: "ri:twitter-x-line",
			class: "bg-black hover:bg-gray-800",
			url: `https://twitter.com/intent/tweet/?text=${title}&url=${url}`
		},
		{
			name: "Telegram",
			icon: "ri:telegram-line",
			class: "bg-[#26a5e4] hover:bg-[#1e96d1]",
			url: `https://telegram.me/share/url?text=${title}&url=${url}`
		},
		{
			name: "Reddit",
			icon: "ri:reddit-line",
			class: "bg-[#ff4500] hover:bg-[#e63e00]",
			url: `https://reddit.com/submit/?url=${url}&title=${title}`
		},
		{
			name: "Facebook",
			icon: "ri:facebook-circle-line",
			class: "bg-[#0866ff] hover:bg-[#0755d6]",
			url: `https://facebook.com/sharer/sharer.php?u=${url}`
		},
		{
			name: "Email",
			icon: "ri:mail-line",
			class: "bg-gray-600 hover:bg-gray-700",
			url: `mailto:?subject=${title}&body=${url}`
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<hr data-astro-cid-t4zxclcg><div class="container p-0" data-astro-cid-t4zxclcg><div class="text-right text-sm text-base-content/60 italic mb-2" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:heart-line",
		"class": "w-4 h-4 inline-block align-text-bottom text-error",
		"data-astro-cid-t4zxclcg": true
	})} Thanks for reading!</div><div class="card bg-base-200 overflow-visible" data-astro-cid-t4zxclcg><div class="card-body relative p-4 sm:p-6 lg:p-8" data-astro-cid-t4zxclcg><!-- License Icon --><div class="absolute -top-8 left-8" data-astro-cid-t4zxclcg><div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:creative-commons-line",
		"class": "w-10 h-10 text-primary-content",
		"data-astro-cid-t4zxclcg": true
	})}</div></div><!-- Article Metadata --><div class="space-y-4" data-astro-cid-t4zxclcg><h3 class="text-lg sm:text-xl lg:text-2xl font-bold" data-astro-cid-t4zxclcg>${title}</h3><!-- Stats Row --><div class="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm opacity-75" data-astro-cid-t4zxclcg>${displayDate && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:calendar",
		"class": "h-4 w-4",
		"data-astro-cid-t4zxclcg": true
	})}${displayDate}</span>`}${badge && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:bookmark",
		"class": "h-4 w-4",
		"data-astro-cid-t4zxclcg": true
	})}${badge}</span>`}${word && time && renderTemplate`<div class="flex items-center gap-1" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "h-4 w-4",
		"data-astro-cid-t4zxclcg": true
	})}<span data-astro-cid-t4zxclcg>${word} ${t("label.wordCount")} · ${time} ${t("label.readTime")}</span></div>`}${slug && umamiConfig.enable && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="flex items-center gap-1" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:eye",
		"class": "h-4 w-4 text-primary",
		"data-astro-cid-t4zxclcg": true
	})}<span id="license-page-views" data-astro-cid-t4zxclcg>-</span></div><div class="flex items-center gap-1" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:user",
		"class": "h-4 w-4 text-primary",
		"data-astro-cid-t4zxclcg": true
	})}<span id="license-page-visitors" data-astro-cid-t4zxclcg>-</span></div>` })}`}</div><!-- Categories and Tags --><div class="mt-4" data-astro-cid-t4zxclcg>${renderComponent($$result, "PostFilter", $$PostFilter, {
		"categories": categories,
		"tags": tags,
		"data-astro-cid-t4zxclcg": true
	})}<!-- License Info --><hr class="my-4" data-astro-cid-t4zxclcg><div class="flex justify-between items-center flex-wrap gap-4" data-astro-cid-t4zxclcg><div class="text-sm opacity-75" data-astro-cid-t4zxclcg>© ${USER_NAME} |<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors" data-astro-cid-t4zxclcg>CC BY-NC-SA 4.0</a></div><div class="flex gap-2" data-astro-cid-t4zxclcg><!-- Reward Button --><button class="btn btn-secondary btn-outline" onclick="reward_modal.showModal()" data-astro-cid-t4zxclcg>赞赏${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:hand-heart-line",
		"class": "w-5 h-5",
		"data-astro-cid-t4zxclcg": true
	})}</button><!-- Share Button --><button class="btn btn-primary btn-outline" onclick="share_modal.showModal()" data-astro-cid-t4zxclcg>${t("label.share")}${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:share-line",
		"class": "w-5 h-5",
		"data-astro-cid-t4zxclcg": true
	})}</button></div></div></div></div></div></div><!-- Share Modal --><dialog id="share_modal" class="modal modal-bottom sm:modal-middle" data-astro-cid-t4zxclcg><div class="modal-box max-w-2xl rounded-none sm:rounded-xl relative" data-astro-cid-t4zxclcg><h3 class="font-bold text-lg sm:text-xl mb-6 text-center" data-astro-cid-t4zxclcg>${t("label.shareCard")}</h3><div class="flex flex-wrap gap-4 justify-center" data-astro-cid-t4zxclcg>${socialLinks.map(({ name, icon, class: bgClass, url }) => renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`btn btn-circle btn-lg transition-transform hover:scale-110 ${bgClass}`, "class")} target="_blank" rel="noopener noreferrer"${addAttribute(name, "title")} data-astro-cid-t4zxclcg><span class="sr-only" data-astro-cid-t4zxclcg>${name}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "w-6 h-6 text-white",
		"data-astro-cid-t4zxclcg": true
	})}</a>`)}<!-- Copy Link Button --><button class="btn btn-circle btn-lg transition-transform hover:scale-110 bg-neutral hover:bg-neutral-focus" title="Copy Link"${addAttribute(`navigator.clipboard.writeText(window.location.href).then(() => {
            const btn = this;
            const toast = document.getElementById('copy-toast');
            btn.classList.add('btn-success');
            if (toast) {
              toast.classList.remove('opacity-0', 'translate-y-4');
            }
            setTimeout(() => {
              btn.classList.remove('btn-success');
              if (toast) {
                toast.classList.add('opacity-0', 'translate-y-4');
              }
            }, 2000);
          })`, "onclick")} data-astro-cid-t4zxclcg><span class="sr-only" data-astro-cid-t4zxclcg>Copy Link</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:links-line",
		"class": "w-6 h-6 text-white",
		"data-astro-cid-t4zxclcg": true
	})}</button></div><!-- Toast Notification inside Modal --><div id="copy-toast" class="absolute left-1/2 -translate-x-1/2 bottom-20 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none z-50 w-max" data-astro-cid-t4zxclcg><div class="alert alert-success shadow-lg text-white py-2 px-4 text-sm" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:checkbox-circle-line",
		"class": "w-5 h-5",
		"data-astro-cid-t4zxclcg": true
	})}<span data-astro-cid-t4zxclcg>链接已复制成功！</span></div></div><div class="modal-action" data-astro-cid-t4zxclcg><form method="dialog" data-astro-cid-t4zxclcg><button class="btn btn-ghost hover:scale-105 transition-transform" data-astro-cid-t4zxclcg>${t("label.close")}</button></form></div></div><form method="dialog" class="modal-backdrop" data-astro-cid-t4zxclcg><button data-astro-cid-t4zxclcg>${t("label.close")}</button></form></dialog><!-- Reward Modal --><dialog id="reward_modal" class="modal modal-middle" data-astro-cid-t4zxclcg><div class="modal-box w-11/12 max-w-4xl rounded-xl relative overflow-x-hidden" data-astro-cid-t4zxclcg><h3 class="font-bold text-lg sm:text-xl mb-6 text-center" data-astro-cid-t4zxclcg>赞赏支持</h3><div class="flex flex-row justify-center items-center gap-4 md:gap-8 p-4" data-astro-cid-t4zxclcg><!-- WeChat --><div class="flex flex-col items-center gap-2" data-astro-cid-t4zxclcg><div class="w-28 h-28 md:w-44 md:h-44 bg-white rounded-xl overflow-hidden shadow-lg border border-base-300 flex items-center justify-center" data-astro-cid-t4zxclcg><img${addAttribute(USER_QR_WECHAT, "src")} alt="微信收款码" class="w-full h-full object-contain" data-astro-cid-t4zxclcg></div><div class="flex items-center gap-1 md:gap-2 text-success font-bold text-xs md:text-base" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:wechat-pay-line",
		"class": "w-4 h-4 md:w-6 md:h-6",
		"data-astro-cid-t4zxclcg": true
	})}<span data-astro-cid-t4zxclcg>微信</span></div></div><!-- Alipay --><div class="flex flex-col items-center gap-2" data-astro-cid-t4zxclcg><div class="w-28 h-28 md:w-44 md:h-44 bg-white rounded-xl overflow-hidden shadow-lg border border-base-300 flex items-center justify-center" data-astro-cid-t4zxclcg><img${addAttribute(USER_QR_ALIPAY, "src")} alt="支付宝收款码" class="w-full h-full object-contain" data-astro-cid-t4zxclcg></div><div class="flex items-center gap-1 md:gap-2 text-[#1677ff] font-bold text-xs md:text-base" data-astro-cid-t4zxclcg>${renderComponent($$result, "Icon", $$Icon, {
		"name": "ri:alipay-line",
		"class": "w-4 h-4 md:w-6 md:h-6",
		"data-astro-cid-t4zxclcg": true
	})}<span data-astro-cid-t4zxclcg>支付宝</span></div></div></div><div class="modal-action" data-astro-cid-t4zxclcg><form method="dialog" data-astro-cid-t4zxclcg><button class="btn btn-ghost hover:scale-105 transition-transform" data-astro-cid-t4zxclcg>${t("label.close")}</button></form></div></div><form method="dialog" class="modal-backdrop" data-astro-cid-t4zxclcg><button data-astro-cid-t4zxclcg>${t("label.close")}</button></form></dialog></div>${slug && umamiConfig.enable && renderTemplate`<script>(function(){${defineScriptVars({
		slug,
		umamiConfig
	})}  
    // 获取浏览量统计  
    async function fetchLicensePageViews() {  
      if (!umamiConfig.enable) {  
        return;  
      }  
        
      const checkInterval = setInterval(async () => {
        if (typeof window.fetchUmamiStats === 'function') {
          clearInterval(checkInterval);
          try {
            const queryPath = \`/blog/\${slug}\`;
            
            const statsData = await window.fetchUmamiStats(umamiConfig.baseUrl, umamiConfig.shareId, {
              timezone: umamiConfig.timezone,
              path: queryPath
            });
            
            const pageViews = (typeof statsData.pageviews === 'object' ? statsData.pageviews.value : statsData.pageviews) || 0;
            const visits = (typeof statsData.visitors === 'object' ? statsData.visitors.value : statsData.visitors) || 0;
            
            const viewsElement = document.getElementById('license-page-views');
            const visitorsElement = document.getElementById('license-page-visitors');
            
            if (viewsElement) viewsElement.textContent = \`\${pageViews} 次\`;
            if (visitorsElement) visitorsElement.textContent = \`\${visits} 人\`;
            
          } catch (error) {
            console.error('Error fetching page views for license:', error);
            const viewsElement = document.getElementById('license-page-views');
            const visitorsElement = document.getElementById('license-page-visitors');
            if (viewsElement) viewsElement.textContent = '-';
            if (visitorsElement) visitorsElement.textContent = '-';
          }
        }
      }, 100);
      
      // Stop checking after 10 seconds
      setTimeout(() => clearInterval(checkInterval), 10000);
    }  
  
    // 页面加载完成后获取统计数据  
    document.addEventListener('astro:page-load', fetchLicensePageViews);
    if (document.readyState === 'complete') fetchLicensePageViews();
    else document.addEventListener('DOMContentLoaded', fetchLicensePageViews);
  })();<\/script>`}`;
}, "E:/blog/2026blog/src/components/widgets/License.astro", void 0);
//#endregion
//#region src/components/widgets/PostInfo.astro
createAstro("https://blog.z2m.store");
var $$PostInfo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostInfo;
	const { pubDate, badge, word, time, url, hideViews = false } = Astro.props;
	const slug = url ? url.split("/").filter(Boolean).pop() : void 0;
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col sm:flex-row sm:justify-between gap-y-1 sm:gap-y-2 mb-2 sm:mb-4 text-[10px] sm:text-sm opacity-75"><div class="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2">${pubDate && renderTemplate`<span class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:calendar",
		"class": "h-4 w-4 flex-shrink-0"
	})}<span class="truncate">${pubDate}</span></span>`}${badge && renderTemplate`<span class="flex flex-wrap items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:bookmark",
		"class": "h-4 w-4 flex-shrink-0"
	})}<span class="truncate">${badge}</span></span>`}</div><div class="flex flex-wrap items-center gap-x-3 gap-y-1"><div class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:book-open",
		"class": "h-4 w-4 flex-shrink-0"
	})}<span class="truncate">${word} ${t("label.wordCount")} · ${time} ${t("label.readTime")}</span></div>${!hideViews && slug && umamiConfig.enable && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:eye",
		"class": "h-4 w-4 flex-shrink-0 text-primary"
	})}<span class="truncate"${addAttribute(`page-views-${slug}`, "id")}>-</span></div><div class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:user",
		"class": "h-4 w-4 flex-shrink-0 text-primary"
	})}<span class="truncate"${addAttribute(`page-visitors-${slug}`, "id")}>-</span></div>` })}`}</div></div>${!hideViews && slug && umamiConfig.enable && renderTemplate`<script>(function(){${defineScriptVars({
		slug,
		umamiConfig
	})}
    // 获取文章浏览量统计，支持 websiteId 或 shareId
    async function fetchPostViews() {
      if (!umamiConfig.enable) {
        return;
      }
      
      const checkInterval = setInterval(async () => {
        if (typeof window.fetchUmamiStats === 'function') {
          clearInterval(checkInterval);
          try {
            // RyuChan assumes blog posts are at /blog/slug
            // Adjust this path if your URL structure is different
            const queryPath = \`/blog/\${slug}\`;
            
            const statsData = await window.fetchUmamiStats(umamiConfig.baseUrl, umamiConfig.shareId, {
              timezone: umamiConfig.timezone,
              path: queryPath
            });
            
            const pageViews = (typeof statsData.pageviews === 'object' ? statsData.pageviews.value : statsData.pageviews) || 0;
            const visits = (typeof statsData.visitors === 'object' ? statsData.visitors.value : statsData.visitors) || 0;
            
            const viewsElement = document.getElementById(\`page-views-\${slug}\`);
            const visitorsElement = document.getElementById(\`page-visitors-\${slug}\`);
            
            if (viewsElement) viewsElement.textContent = \`\${pageViews} 次\`;
            if (visitorsElement) visitorsElement.textContent = \`\${visits} 人\`;
          } catch (error) {
            console.error('Error fetching page views for', slug, ':', error);
            const viewsElement = document.getElementById(\`page-views-\${slug}\`);
            const visitorsElement = document.getElementById(\`page-visitors-\${slug}\`);
            
            if (viewsElement) viewsElement.textContent = '-';
            if (visitorsElement) visitorsElement.textContent = '-';
          }
        }
      }, 100);

      // Stop checking after 10 seconds
      setTimeout(() => clearInterval(checkInterval), 10000);
    }
    
    // 页面加载完成后获取统计数据
    document.addEventListener('astro:page-load', fetchPostViews);
    // Initial run for direct loads (though astro:page-load covers it usually)
    if (document.readyState === 'complete') fetchPostViews();
    else document.addEventListener('DOMContentLoaded', fetchPostViews);
  })();<\/script>`}`;
}, "E:/blog/2026blog/src/components/widgets/PostInfo.astro", void 0);
//#endregion
//#region src/components/widgets/PostNavigation.astro
createAstro("https://blog.z2m.store");
var $$PostNavigation = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostNavigation;
	const { prevPost, nextPost } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="post-navigation" data-astro-cid-qkt47h6e><!-- 上一篇 -->${prevPost ? renderTemplate`<a${addAttribute(`/blog/${prevPost.id}`, "href")} class="nav-card prev group" data-pagefind-ignore data-astro-cid-qkt47h6e><div class="nav-arrow" data-astro-cid-qkt47h6e>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-left",
		"class": "text-2xl transition-transform group-hover:-translate-x-1",
		"data-astro-cid-qkt47h6e": true
	})}</div><div class="nav-content text-left" data-astro-cid-qkt47h6e><div class="nav-label text-xs opacity-60 mb-1" data-astro-cid-qkt47h6e>Previous Post</div><div class="nav-title font-medium line-clamp-2 group-hover:text-primary transition-colors" data-astro-cid-qkt47h6e>${prevPost.data.title}</div></div></a>` : renderTemplate`<div class="nav-card empty" data-astro-cid-qkt47h6e></div>`}<!-- 下一篇 -->${nextPost ? renderTemplate`<a${addAttribute(`/blog/${nextPost.id}`, "href")} class="nav-card next group" data-pagefind-ignore data-astro-cid-qkt47h6e><div class="nav-content text-right" data-astro-cid-qkt47h6e><div class="nav-label text-xs opacity-60 mb-1" data-astro-cid-qkt47h6e>Next Post</div><div class="nav-title font-medium line-clamp-2 group-hover:text-primary transition-colors" data-astro-cid-qkt47h6e>${nextPost.data.title}</div></div><div class="nav-arrow" data-astro-cid-qkt47h6e>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-right",
		"class": "text-2xl transition-transform group-hover:translate-x-1",
		"data-astro-cid-qkt47h6e": true
	})}</div></a>` : renderTemplate`<div class="nav-card empty" data-astro-cid-qkt47h6e></div>`}</div>`;
}, "E:/blog/2026blog/src/components/widgets/PostNavigation.astro", void 0);
//#endregion
//#region src/components/comments/Giscus.astro
createAstro("https://blog.z2m.store");
var $$Giscus = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Giscus;
	const { repo, repoId, category, categoryId, mapping = "pathname", strict = "0", reactionsEnabled = "1", emitMetadata = "0", inputPosition = "top", lang = "zh-CN", loading = "lazy" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div id="giscus-container" data-astro-cid-fgl4xze3></div><script>(function(){${defineScriptVars({
		repo,
		repoId,
		category,
		categoryId,
		mapping,
		strict,
		reactionsEnabled,
		emitMetadata,
		inputPosition,
		lang,
		loading
	})}    
  let giscusLoaded = false;    
  let themeChangeTimeout;    
    
  function loadGiscus() {    
    const container = document.getElementById('giscus-container');    
    if (!container || giscusLoaded) return;    
    
    // 改进的主题检测逻辑  
    let giscusTheme = 'light';  
    const themeType = document.documentElement.getAttribute('data-theme-type');  
    const dataTheme = document.documentElement.getAttribute('data-theme');  
      
    if (themeType) {  
      giscusTheme = themeType === 'dark' ? 'dark' : 'light';  
    } else if (dataTheme) {  
      // 如果 data-theme-type 还没设置，从 data-theme 推断  
      giscusTheme = dataTheme.includes('dark') || dataTheme === 'dracula' ? 'dark' : 'light';  
    } else {  
      // 最后的备选方案：检查系统偏好和 localStorage  
      const storedTheme = localStorage.getItem('theme');  
      if (storedTheme) {  
        giscusTheme = storedTheme.includes('dark') || storedTheme === 'dracula' ? 'dark' : 'light';  
      } else {  
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  
        giscusTheme = prefersDark ? 'dark' : 'light';  
      }  
    }  
    
    const script = document.createElement('script');    
    script.src = 'https://giscus.app/client.js';    
    script.setAttribute('data-repo', repo);    
    script.setAttribute('data-repo-id', repoId);    
    script.setAttribute('data-category', category);    
    script.setAttribute('data-category-id', categoryId);    
    script.setAttribute('data-mapping', mapping);    
    script.setAttribute('data-strict', strict);    
    script.setAttribute('data-reactions-enabled', reactionsEnabled);    
    script.setAttribute('data-emit-metadata', emitMetadata);    
    script.setAttribute('data-input-position', inputPosition);    
    script.setAttribute('data-theme', giscusTheme);    
    script.setAttribute('data-lang', lang);    
    script.setAttribute('crossorigin', 'anonymous');   
    script.setAttribute('data-loading', loading); 
    script.async = true;    
    
    container.appendChild(script);    
    giscusLoaded = true;    
  }    
    
  function changeGiscusTheme(theme) {    
    const iframe = document.querySelector('iframe.giscus-frame');    
    if (iframe) {    
      const container = document.getElementById('giscus-container');    
      container.classList.add('theme-switching');    
    
      iframe.contentWindow.postMessage(    
        { giscus: { setConfig: { theme } } },    
        'https://giscus.app'    
      );    
    
      setTimeout(() => {    
        container.classList.remove('theme-switching');    
      }, 300);    
    }    
  }    
  
  // 立即执行，不等待 DOM 加载完成  
  loadGiscus();
  // document.addEventListener('DOMContentLoaded', loadGiscus);    
    
  const observer = new MutationObserver((mutations) => {    
    mutations.forEach((mutation) => {    
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme-type') {    
        if (themeChangeTimeout) {    
          clearTimeout(themeChangeTimeout);    
        }    
    
        const themeType = document.documentElement.getAttribute('data-theme-type');    
        const giscusTheme = themeType === 'dark' ? 'dark' : 'light';    
    
        if (giscusLoaded) {    
          changeGiscusTheme(giscusTheme);    
        }    
      }    
    });    
  });    
    
  observer.observe(document.documentElement, {    
    attributes: true,    
    attributeFilter: ['data-theme-type']    
  });    
    
  // 修改页面切换处理，添加延迟确保主题属性已设置  
  document.addEventListener('astro:after-swap', () => {    
    giscusLoaded = false;  
    // 添加短暂延迟，等待主题属性同步  
    setTimeout(() => {  
      loadGiscus();  
    }, 100);  
  });    
})();<\/script>`;
}, "E:/blog/2026blog/src/components/comments/Giscus.astro", void 0);
//#endregion
//#region src/components/comments/Waline.astro
createAstro("https://blog.z2m.store");
var $$Waline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Waline;
	const { serverURL, lang = "en", dark = "html[data-theme-type='dark']", emoji = ["https://unpkg.com/@waline/emojis@1.1.0/weibo", "https://unpkg.com/@waline/emojis@1.1.0/bilibili"], meta = [
		"nick",
		"mail",
		"link"
	], requiredMeta = [], reaction = false, pageview = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div id="waline-container"${addAttribute(serverURL, "data-server-url")}${addAttribute(lang, "data-lang")}${addAttribute(dark, "data-dark")}${addAttribute(JSON.stringify(emoji), "data-emoji")}${addAttribute(JSON.stringify(meta), "data-meta")}${addAttribute(JSON.stringify(requiredMeta), "data-required-meta")}${addAttribute(reaction ? "true" : "false", "data-reaction")}${addAttribute(pageview ? "true" : "false", "data-pageview")} data-astro-cid-abxehvi7></div><link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css"><script>
  let walineInstance;

  async function mountWaline() {
    const container = document.getElementById("waline-container");
    if (!container) return;

    const serverURL = container.dataset.serverUrl;
    const lang = container.dataset.lang || "zh";
    const dark = container.dataset.dark;
    const emoji = JSON.parse(container.dataset.emoji || "[]");
    const meta = JSON.parse(container.dataset.meta || "[]");
    const requiredMeta = JSON.parse(container.dataset.requiredMeta || "[]");
    const reaction = container.dataset.reaction === "true";
    const pageview = container.dataset.pageview === "true";

    if (walineInstance) {
      await walineInstance.destroy();
    }
    const { init } = await import(
      "https://unpkg.com/@waline/client@v3/dist/waline.js"
    );
    walineInstance = init({
      el: "#waline-container",
      serverURL,
      path: location.pathname,
      lang,
      dark,
      emoji,
      meta,
      requiredMeta,
      reaction,
      pageview,
    });
  }

  document.addEventListener("astro:after-swap", () => {
    mountWaline();
  });

  document.addEventListener("DOMContentLoaded", () => {
    mountWaline();
  });

  // 兜底：脚本执行时 DOM 已就绪，直接挂载
  if (document.readyState !== "loading") {
    mountWaline();
  }
<\/script>`;
}, "E:/blog/2026blog/src/components/comments/Waline.astro", void 0);
//#endregion
//#region src/components/comments/Twikoo.astro
createAstro("https://blog.z2m.store");
var $$Twikoo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Twikoo;
	const { envId, lang = "zh-CN" } = Astro.props;
	envId.startsWith("http");
	return renderTemplate`${maybeRenderHead($$result)}<div id="tcomment-container" data-astro-cid-efzv7ahg><!-- Loading Spinner --><div id="twikoo-loading" class="twikoo-loading" data-astro-cid-efzv7ahg><div class="twikoo-spinner" data-astro-cid-efzv7ahg></div><p class="twikoo-loading-text" data-astro-cid-efzv7ahg>加载评论中...</p></div><!-- Comments Container --><div id="tcomment"${addAttribute(envId, "data-env-id")}${addAttribute(lang, "data-lang")} class="twikoo-content hidden" data-astro-cid-efzv7ahg></div></div><script>
  let twikooLoaded = false;
  let observer = null;
  let currentCDNIndex = 0;

  // CDN 列表，按优先级排序
  const cdnUrls = [
    // 优先使用国内 CDN
    "https://registry.npmmirror.com/twikoo@1.7.9/files/dist/twikoo.min.js",
    // 备用 CDN
    "https://cdn.jsdelivr.net/npm/twikoo@1.7.9/dist/twikoo.min.js",
    "https://s4.zstatic.net/npm/twikoo@1.7.9/dist/twikoo.min.js",
  ];

  function hideLoading() {
    const loading = document.getElementById("twikoo-loading");
    const content = document.getElementById("tcomment");
    if (loading) loading.style.display = "none";
    if (content) content.classList.remove("hidden");
  }

  function loadTwikooWithCDN() {
    const commentsContainer = document.getElementById("tcomment");
    if (!commentsContainer || twikooLoaded) return;

    const envId = commentsContainer.dataset.envId;
    const lang = commentsContainer.dataset.lang;

    // 超出 CDN 列表范围，显示错误
    if (currentCDNIndex >= cdnUrls.length) {
      hideLoading();
      commentsContainer.innerHTML =
        '<p class="text-center text-gray-500">加载评论失败，请稍后重试。</p>';
      return;
    }

    const script = document.createElement("script");
    script.src = cdnUrls[currentCDNIndex];
    script.async = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      twikoo.init({
        envId: envId,
        el: "#tcomment",
        lang: lang,
        path: window.location.pathname,
      });
      twikooLoaded = true;
      hideLoading();
    };

    script.onerror = () => {
      // 当前 CDN 加载失败，尝试下一个
      currentCDNIndex++;
      loadTwikooWithCDN();
    };

    document.body.appendChild(script);
  }

  function loadTwikoo() {
    loadTwikooWithCDN();
  }

  function setupLazyLoad() {
    const container = document.getElementById("tcomment-container");
    if (!container) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !twikooLoaded) {
            loadTwikoo();
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      },
    );

    observer.observe(container);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLazyLoad();
  });

  document.addEventListener("astro:after-swap", () => {
    twikooLoaded = false;
    currentCDNIndex = 0;
    if (observer) observer.disconnect();
    setTimeout(() => {
      setupLazyLoad();
    }, 100);
  });

  document.addEventListener("astro:page-load", () => {
    twikooLoaded = false;
    currentCDNIndex = 0;
    if (observer) observer.disconnect();
    setTimeout(() => {
      setupLazyLoad();
    }, 100);
  });

  // 兜底：DOM 已就绪时直接初始化（避免 SPA 导航时事件已错过）
  if (document.readyState !== "loading") {
    setupLazyLoad();
  }
<\/script>`;
}, "E:/blog/2026blog/src/components/comments/Twikoo.astro", void 0);
//#endregion
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blog.z2m.store");
async function getStaticPaths() {
	const publishedPosts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
	return publishedPosts.map((blog, index) => {
		const prevPost = index < publishedPosts.length - 1 ? publishedPosts[index + 1] : null;
		const nextPost = index > 0 ? publishedPosts[index - 1] : null;
		return {
			params: { slug: blog.id },
			props: {
				blog,
				prevPost,
				nextPost
			}
		};
	});
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { blog, prevPost, nextPost } = Astro.props;
	const { Content, remarkPluginFrontmatter, headings } = await renderEntry(blog);
	const displayDate = blog.data.pubDate ? dayjs_default(blog.data.pubDate).format(DATE_FORMAT) : "";
	const url = new URL(`/blog/${blog.id}`, Astro.url.origin);
	const needsKatex = blog.body?.includes("$$") ?? false;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": blog.data.title,
		"image": blog.data.image,
		"headings": headings,
		"showTOC": true,
		"isPostPage": true,
		"needsKatex": needsKatex
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "MainCard", $$MainCard, {
		"title": blog.data.title,
		"description": blog.data.description,
		"image": blog.data.image,
		"infoIcon": "lucide:info"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-end"><a${addAttribute(`/write?slug=${blog.id}`, "href")} class="btn btn-primary btn-sm text-white" aria-label="Edit Article">${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:edit",
		"class": "w-4 h-4"
	})}<span class="hidden sm:inline">Edit</span></a></div>${renderComponent($$result, "PostInfo", $$PostInfo, {
		"pubDate": displayDate,
		"badge": blog.data.badge,
		"word": remarkPluginFrontmatter.totalCharCount,
		"time": remarkPluginFrontmatter.readingTime,
		"url": `/blog/${blog.id}`,
		"hideViews": true
	})}<div class="mb-6">${renderComponent($$result, "PostFilter", $$PostFilter, {
		"categories": blog.data.categories,
		"tags": blog.data.tags
	})}</div><div class="mt-8"><div id="content" class="prose prose-sm md:prose-base prose-code:text-base max-w-none text-justify prose-headings:scroll-mt-20 prose-h1:text-2xl md:prose-h1:text-3xl prose-h2:text-xl md:prose-h2:text-2xl prose-h3:text-lg md:prose-h3:text-xl prose-img:rounded-2xl prose-img:mx-auto prose-img:cursor-pointer">${renderComponent($$result, "Content", Content, {})}${renderComponent($$result, "License", $$License, {
		"url": url.toString(),
		"title": blog.data.title,
		"image": blog.data.image,
		"pubDate": blog.data.pubDate,
		"badge": blog.data.badge,
		"categories": blog.data.categories,
		"tags": blog.data.tags,
		"word": remarkPluginFrontmatter.totalCharCount,
		"time": remarkPluginFrontmatter.readingTime
	})}</div></div>` })}${renderComponent($$result, "PostNavigation", $$PostNavigation, {
		"prevPost": prevPost,
		"nextPost": nextPost
	})}${commentsConfig?.enable && commentsConfig.type === "giscus" && commentsConfig.giscus && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h1 class="text-2xl font-bold">Comments</h1>${renderComponent($$result, "MainCard", $$MainCard, {}, { "default": ($$result) => renderTemplate`<section class="comments">${renderComponent($$result, "Giscus", $$Giscus, { ...commentsConfig.giscus })}</section>` })}` })}`}${commentsConfig?.enable && commentsConfig.type === "waline" && commentsConfig.waline && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h1 class="text-2xl font-bold">Comments</h1>${renderComponent($$result, "MainCard", $$MainCard, {}, { "default": ($$result) => renderTemplate`<section class="comments">${renderComponent($$result, "Waline", $$Waline, { ...commentsConfig.waline })}</section>` })}` })}`}${commentsConfig?.enable && commentsConfig.type === "twikoo" && commentsConfig.twikoo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h1 class="text-2xl font-bold">Comments</h1>${renderComponent($$result, "MainCard", $$MainCard, {}, { "default": ($$result) => renderTemplate`<section class="comments">${renderComponent($$result, "Twikoo", $$Twikoo, { ...commentsConfig.twikoo })}</section>` })}` })}`}${renderScript($$result, "E:/blog/2026blog/src/pages/blog/[...slug].astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "E:/blog/2026blog/src/pages/blog/[...slug].astro", void 0);
var $$file = "E:/blog/2026blog/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };

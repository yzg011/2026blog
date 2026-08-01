/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
import typography from "@tailwindcss/typography";
import daisyUI from "daisyui";
import tailwindcssAnimate from "tailwindcss-animate";
import { SITE_THEME } from "./src/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neu-base": "var(--neu-base)",
        "neu-text": "var(--neu-text)",
        "neu-accent": "var(--neu-accent)",
        "neu-border": "var(--neu-border)",
        "neu-btn-bg": "var(--neu-btn-bg)",
        "neu-btn-text": "var(--neu-btn-text)",
        "neu-text-muted": "var(--neu-text-muted)",
      },
      boxShadow: {
        "neu-out": "var(--shadow-neu-out)",
        "neu-in": "var(--shadow-neu-in)",
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', '"Nunito"', '"Noto Sans SC"', "sans-serif"],
        banner: ['"ZCOOL KuaiLe"', "cursive"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  safelist: [
    "alert",
    "alert-info",
    "alert-success",
    "alert-warning",
    "alert-error",
    // dynamic page memo cards (generated in inline script)
    "memo-card",
    "memo-img-thumb",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "max-w-full",
    "overflow-hidden",
    "whitespace-pre-wrap",
    "break-words",
    "badge-outline",
    "border-primary/40",
    "text-primary",
    "bg-base-100",
    "rounded-3xl",
    "rounded-2xl",
    "p-4",
    "md:p-8",
    "shadow-lg",
    "hover:shadow-xl",
    "border-base-200",
    "object-cover",
    "transition-transform",
    "duration-500",
    "group-hover:scale-105",
  ],
  plugins: [daisyUI, typography, addDynamicIconSelectors(), tailwindcssAnimate],
  daisyui: {
    themes: true,
    darkTheme: SITE_THEME.dark, // name of one of the included themes for dark mode
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "app-yellow": "#F4D04E",
        "app-gray-950": "#111111",
        "app-gray-500": "#6B6B6B",
        "pure-white": "#FFFFFF"
      },
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
        "fig-tree": "var(--font-fig-tree)"
      },
      boxShadow: {
        'custom-black': '8px 8px 0px 0px #000000', 
      },
    },
  },
  plugins: [],
};
export default config;

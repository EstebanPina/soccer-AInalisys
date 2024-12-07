import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rich_black: "#04091c",
        lapis_lazuli: "#1c5d99",
        light_green: "#9ee37d",
        light_red: "#c1666B",
        cool_gray: "#a7adc6",
      },
    },
  },
  plugins: [],
} satisfies Config;

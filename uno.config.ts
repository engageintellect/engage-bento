import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  theme: {
    boxShadow: {
      custom: `1px 1px 0px`,
      "custom-hover": `1px 1px 0`,
    },
    gridTemplateRow: {
      "auto-250": "repeat(auto-fill, 250px)",
    },
    gridTemplateColumn: {
      "4-minmax": "repeat(4, minmax(150px, 1fr))",
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      darkslate: {
        50: "#3D3D3D",
        100: "#2C2C2C",
        200: "#262626",
        300: "#202020",
        400: "#1A1A1A",
        500: "#171717",
        600: "#141414",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0B0B0B",
      },
      primary: {
        100: "#F9CDD3",
        200: "#F3A3AA",
        300: "#EC7981",
        400: "#E64F59",
        500: "#E63946",
        600: "#CF2F3D",
        700: "#B82534",
        800: "#A01B2B",
        900: "#891321",
      },
    },
  },
  presets: [
    presetUno(),
  ],
  rules: [
    ['hide-scrollbar', {
      css: `::-webkit-scrollbar { display: none; }
            scrollbar-width: none;
            ::-ms-scrollbar { display: none; }`
    }]
  ],
  shortcuts: {
    "bg-primary-500": "bg-[var(--color-primary-500)]",
    "text-primary-500": "text-[var(--color-primary-500)]",
  },
});

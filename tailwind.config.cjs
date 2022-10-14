/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  mode: "jit",
  content: ["./src/**/*.{astro, jsx, tsx, mdx}", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

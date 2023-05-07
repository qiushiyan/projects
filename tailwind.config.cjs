/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro, jsx, tsx, mdx}", "./public/**/*.html"],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

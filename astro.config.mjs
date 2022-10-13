import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    mdx({
      remarkPlugins: [],
    }),
  ],
});

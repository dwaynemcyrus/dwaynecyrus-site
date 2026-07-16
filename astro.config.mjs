import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, process.cwd(), "");
  const site = environment.SITE_URL?.trim();

  return {
    output: "static",
    site: site || undefined,
    integrations: site
      ? [
          sitemap({
            filter: (page) => {
              const path = new URL(page).pathname;
              return path !== "/404" && path !== "/robots.txt";
            },
          }),
        ]
      : [],
  };
});

import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import { DEFAULT_SITE_URL } from "./src/config/site-defaults.ts";

export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, process.cwd(), "");
  const site = environment.SITE_URL?.trim() || DEFAULT_SITE_URL;

  return {
    output: "static",
    site,
  };
});

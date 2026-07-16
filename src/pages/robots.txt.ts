import type { APIRoute } from "astro";

import { siteConfig } from "../config/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const lines = ["User-agent: *", "Allow: /"];

  if (siteConfig.siteUrl) {
    lines.push(`Sitemap: ${new URL("sitemap-index.xml", siteConfig.siteUrl)}`);
  }

  return new globalThis.Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

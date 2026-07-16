import type { APIRoute } from "astro";

import { siteConfig } from "../config/site";

export const prerender = true;

const PUBLIC_PATHS = ["/", "/scorecard", "/privacy", "/legal"] as const;

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = () => {
  const entries = PUBLIC_PATHS.map(
    (path) =>
      `  <url><loc>${escapeXml(new URL(path, siteConfig.siteUrl).toString())}</loc></url>`,
  ).join("\n");
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</urlset>",
    "",
  ].join("\n");

  return new globalThis.Response(sitemap, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

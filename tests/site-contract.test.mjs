import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

import {
  DEFAULT_BUTTONDOWN_FORM_ACTION,
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_F2C_SCORECARD_EMBED_URL,
  DEFAULT_HIDDEN_LOAD_CHECKOUT_URL,
  DEFAULT_LEGAL_ADDRESS,
  DEFAULT_LEGAL_NAME,
  DEFAULT_RESPONSIBLE_PERSON,
  DEFAULT_SITE_URL,
  DEFAULT_SUBSTACK_URL,
  DEFAULT_TALLY_SCORECARD_URL,
  DEFAULT_WEBSITE_DOMAIN,
  DEFAULT_X_URL,
  DEFAULT_YOUTUBE_URL,
  createSiteConfig,
  getReleaseConfigIssues,
  isEmailAddress,
  isHttpsUrl,
} from "../src/config/site.ts";
import {
  findMissingCopy,
  findProhibitedCopy,
  prohibitedPublicCopy,
  requiredExactCopy,
} from "../scripts/validate-content.mjs";

const completeEnvironment = {
  SITE_URL: "https://letters.example",
  BUTTONDOWN_FORM_ACTION:
    "https://buttondown.com/api/emails/embed-subscribe/example",
  TALLY_SCORECARD_URL: "https://tally.so/r/example",
  F2C_SCORECARD_EMBED_URL:
    "https://tally.so/embed/example?alignLeft=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1",
  HIDDEN_LOAD_CHECKOUT_URL: "https://buy.stripe.com/example",
  CONTACT_EMAIL: "privacy@example.com",
  X_URL: "https://x.com/example",
  YOUTUBE_URL: "https://youtube.com/@example",
  SUBSTACK_URL: "https://example.substack.com",
  LEGAL_NAME: "Example Name",
  BUSINESS_NAME: "Letters from Cyrus",
  LEGAL_ADDRESS: "Example address",
  WEBSITE_DOMAIN: "letters.example",
  HOSTING_PROVIDER: "Vercel",
  RESPONSIBLE_PERSON: "Example Name",
};

test("site config trims values and passes with complete release input", () => {
  const config = createSiteConfig({
    ...completeEnvironment,
    SITE_URL: "  https://letters.example  ",
  });

  assert.equal(config.siteUrl, "https://letters.example");
  assert.deepEqual(getReleaseConfigIssues(config), []);
});

test("confirmed release fields are available by default", () => {
  const config = createSiteConfig();
  const issues = getReleaseConfigIssues(config);

  assert.deepEqual(issues, []);
  assert.equal(config.siteUrl, DEFAULT_SITE_URL);
  assert.equal(config.contactEmail, DEFAULT_CONTACT_EMAIL);
  assert.equal(config.websiteDomain, DEFAULT_WEBSITE_DOMAIN);
  assert.equal(config.legalName, DEFAULT_LEGAL_NAME);
  assert.equal(config.legalAddress, DEFAULT_LEGAL_ADDRESS);
  assert.equal(config.responsiblePerson, DEFAULT_RESPONSIBLE_PERSON);
  assert.equal(config.xUrl, DEFAULT_X_URL);
  assert.equal(config.youtubeUrl, DEFAULT_YOUTUBE_URL);
  assert.equal(config.substackUrl, DEFAULT_SUBSTACK_URL);
  assert.equal(config.businessName, "Dwayne M Cyrus");
  assert.equal(config.hostingProvider, "Vercel");
  assert.equal(config.buttondownFormAction, DEFAULT_BUTTONDOWN_FORM_ACTION);
  assert.equal(config.tallyScorecardUrl, DEFAULT_TALLY_SCORECARD_URL);
  assert.equal(config.f2cScorecardEmbedUrl, DEFAULT_F2C_SCORECARD_EMBED_URL);
  assert.equal(config.hiddenLoadCheckoutUrl, DEFAULT_HIDDEN_LOAD_CHECKOUT_URL);
  assert.equal(
    issues.includes("buttondownFormAction is required for release"),
    false,
  );
  assert.equal(
    issues.includes("tallyScorecardUrl is required for release"),
    false,
  );
  assert.equal(
    issues.includes("f2cScorecardEmbedUrl is required for release"),
    false,
  );
  assert.equal(
    issues.includes("hiddenLoadCheckoutUrl is required for release"),
    false,
  );
  assert.equal(issues.includes("siteUrl is required for release"), false);
  assert.equal(issues.includes("contactEmail is required for release"), false);
  assert.equal(issues.includes("websiteDomain is required for release"), false);
});

test("URLs, email addresses, and domains are validated at the boundary", () => {
  const config = createSiteConfig({
    ...completeEnvironment,
    SITE_URL: "http://letters.example",
    HIDDEN_LOAD_CHECKOUT_URL: "http://buy.stripe.com/example",
    F2C_SCORECARD_EMBED_URL: "http://tally.so/embed/example",
    CONTACT_EMAIL: "not-an-email",
    WEBSITE_DOMAIN: "https://letters.example/path",
    X_URL: "javascript:alert(1)",
  });
  const issues = getReleaseConfigIssues(config);

  assert.equal(isHttpsUrl("https://letters.example"), true);
  assert.equal(isHttpsUrl("http://letters.example"), false);
  assert.equal(isEmailAddress("privacy@example.com"), true);
  assert.equal(isEmailAddress("not-an-email"), false);
  assert.ok(issues.includes("siteUrl must be an HTTPS URL"));
  assert.ok(issues.includes("hiddenLoadCheckoutUrl must be an HTTPS URL"));
  assert.ok(issues.includes("f2cScorecardEmbedUrl must be an HTTPS URL"));
  assert.ok(issues.includes("contactEmail must be a valid email address"));
  assert.ok(
    issues.includes(
      "websiteDomain must be a hostname without a protocol or path",
    ),
  );
  assert.ok(issues.includes("xUrl must be an HTTPS URL"));
});

test("source brief contains every locked phrase", async () => {
  const brief = await readFile(
    new URL("../PROJECT-BRIEF.md", import.meta.url),
    "utf8",
  );

  assert.deepEqual(findMissingCopy(brief), []);
});

test("content helpers report missing and prohibited copy", () => {
  assert.deepEqual(
    findMissingCopy("Letters from Cyrus", requiredExactCopy.slice(0, 2)),
    [requiredExactCopy[1]],
  );
  assert.deepEqual(
    findProhibitedCopy(prohibitedPublicCopy.join(" | ")),
    prohibitedPublicCopy,
  );
});

test("implemented pages contain locked copy and exclude prohibited copy", async () => {
  const sourceFiles = [
    "../src/pages/index.astro",
    "../src/pages/scorecard.astro",
    "../src/pages/f2c-scorecard.astro",
    "../src/components/NewsletterForm.astro",
  ];
  const source = (
    await Promise.all(
      sourceFiles.map((path) =>
        readFile(new URL(path, import.meta.url), "utf8"),
      ),
    )
  ).join("\n");
  const visibleCopy = source.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

  assert.deepEqual(findMissingCopy(visibleCopy), []);

  const publicSourceFiles = [
    "../src/pages/index.astro",
    "../src/pages/scorecard.astro",
    "../src/pages/privacy.astro",
    "../src/pages/legal.astro",
    "../src/pages/404.astro",
    "../src/pages/subscription-confirmed.astro",
    "../src/pages/unconfirmed-subscription.astro",
    "../src/pages/the-hidden-load.astro",
    "../src/components/NewsletterForm.astro",
  ];
  const publicSource = (
    await Promise.all(
      publicSourceFiles.map((path) =>
        readFile(new URL(path, import.meta.url), "utf8"),
      ),
    )
  ).join("\n");

  assert.deepEqual(findProhibitedCopy(publicSource), []);
});

test("required public routes have source files", async () => {
  const routes = [
    "index.astro",
    "scorecard.astro",
    "f2c-scorecard.astro",
    "privacy.astro",
    "legal.astro",
    "404.astro",
    "subscription-confirmed.astro",
    "the-hidden-load.astro",
    "unconfirmed-subscription.astro",
  ];

  await Promise.all(
    routes.map((route) =>
      access(new URL(`../src/pages/${route}`, import.meta.url)),
    ),
  );
});

test("newsletter confirmation routes are noindex utility pages", async () => {
  const confirmed = await readFile(
    new URL("../src/pages/subscription-confirmed.astro", import.meta.url),
    "utf8",
  );
  const unconfirmed = await readFile(
    new URL("../src/pages/unconfirmed-subscription.astro", import.meta.url),
    "utf8",
  );
  const sitemap = await readFile(
    new URL("../src/pages/sitemap.xml.ts", import.meta.url),
    "utf8",
  );

  assert.match(confirmed, /robots="noindex, follow"/);
  assert.match(confirmed, /What made you subscribe\?/);
  assert.match(unconfirmed, /robots="noindex, follow"/);
  assert.match(unconfirmed, /confirm your email address/);
  assert.doesNotMatch(sitemap, /subscription-confirmed/);
  assert.doesNotMatch(sitemap, /unconfirmed-subscription/);
});

test("crawler routes have source files", async () => {
  await Promise.all(
    ["robots.txt.ts", "sitemap.xml.ts"].map((route) =>
      access(new URL(`../src/pages/${route}`, import.meta.url)),
    ),
  );
});

test("analytics integrations are explicit and singular", async () => {
  const layout = await readFile(
    new URL("../src/layouts/BaseLayout.astro", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(layout, /cloudflareinsights|data-cf-beacon/);
  assert.match(layout, /import Analytics from "@vercel\/analytics\/astro"/);
  assert.equal(layout.match(/<Analytics\s*\/>/g)?.length, 1);
  assert.match(
    layout,
    /import SpeedInsights from "@vercel\/speed-insights\/astro"/,
  );
  assert.equal(layout.match(/<SpeedInsights\s*\/>/g)?.length, 1);
});

test("privacy policy states confirmed data practices", async () => {
  const privacy = await readFile(
    new URL("../src/pages/privacy.astro", import.meta.url),
    "utf8",
  );

  assert.match(privacy, /Buttondown open tracking is enabled/);
  assert.match(privacy, /Buttondown\s+click tracking is also enabled/);
  assert.match(privacy, /Scorecard submissions are kept indefinitely/);
  assert.match(privacy, /Tally responses are not forwarded/);
  assert.match(privacy, /embedded Tally scorecard at <code>\/f2c-scorecard/);
  assert.match(privacy, /forwards\s+this page's path and query parameters/);
  assert.match(privacy, /Vercel Web\s+Analytics/);
  assert.match(privacy, /Vercel Speed\s+Insights/);
  assert.match(privacy, /Stripe Checkout/);
  assert.match(privacy, /stripe\.com\/privacy/);
  assert.match(privacy, /not associated with an individual visitor/);
  assert.doesNotMatch(privacy, /Payment or booking information/);
});

test("newsletter form preserves Buttondown metadata and audience tags", async () => {
  const source = await readFile(
    new URL("../src/components/NewsletterForm.astro", import.meta.url),
    "utf8",
  );

  assert.match(source, /name="metadata__gender"/);
  assert.match(source, /name="metadata__first_name"/);
  assert.match(source, /name="metadata__last_name"/);
  assert.match(source, /name="email"/);
  assert.match(source, /sub_tag_44xcvqncep9mm890nrr7skdczv/);
  assert.match(source, /sub_tag_7pzyd0fh9q8jfscxt76vkfzseg/);
  assert.match(source, /name = "tag"/);
});

test("homepage scorecard links use the configured Tally URL", async () => {
  const home = await readFile(
    new URL("../src/pages/index.astro", import.meta.url),
    "utf8",
  );

  assert.match(home, /const scorecardUrl = siteConfig\.tallyScorecardUrl/);
  assert.equal(home.match(/<SecondaryLink href=\{scorecardUrl\}/g)?.length, 2);
  assert.doesNotMatch(home, /<SecondaryLink href="\/scorecard"/);
});

test("ebook sales page uses the configured Stripe Checkout URL", async () => {
  const ebook = await readFile(
    new URL("../src/pages/the-hidden-load.astro", import.meta.url),
    "utf8",
  );
  const sitemap = await readFile(
    new URL("../src/pages/sitemap.xml.ts", import.meta.url),
    "utf8",
  );

  assert.match(ebook, /const checkoutUrl = siteConfig\.hiddenLoadCheckoutUrl/);
  assert.equal(ebook.match(/<PrimaryButton href=\{checkoutUrl\}/g)?.length, 2);
  assert.match(ebook, /Buy the eBook — \$21 USD/);
  assert.match(ebook, /wkd-book-cover\.png/);
  assert.doesNotMatch(ebook, /\/fulfillment/);
  assert.match(sitemap, /"\/the-hidden-load"/);
});

test("embedded scorecard uses the configured standard Tally embed", async () => {
  const scorecard = await readFile(
    new URL("../src/pages/f2c-scorecard.astro", import.meta.url),
    "utf8",
  );
  const sitemap = await readFile(
    new URL("../src/pages/sitemap.xml.ts", import.meta.url),
    "utf8",
  );

  assert.match(scorecard, /const embedUrl = siteConfig\.f2cScorecardEmbedUrl/);
  assert.match(scorecard, /data-tally-src=\{embedUrl\}/);
  assert.match(scorecard, /https:\/\/tally\.so\/widgets\/embed\.js/);
  assert.match(scorecard, /window\.Tally\?\.loadEmbeds\(\)/);
  assert.match(scorecard, /title="Freeze-to-Command Scorecard"/);
  assert.match(scorecard, /<noscript>/);
  assert.match(scorecard, /href=\{scorecardUrl\}/);
  assert.doesNotMatch(scorecard, /addEventListener\(/);
  assert.match(sitemap, /"\/f2c-scorecard"/);
});

test("dependency contract excludes client UI frameworks", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  assert.equal("react" in dependencies, false);
  assert.equal("vue" in dependencies, false);
  assert.equal("svelte" in dependencies, false);
});

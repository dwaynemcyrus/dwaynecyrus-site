import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

import {
  DEFAULT_BUTTONDOWN_FORM_ACTION,
  DEFAULT_TALLY_SCORECARD_URL,
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
  CLOUDFLARE_ANALYTICS_TOKEN: "public-token",
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

test("missing release fields remain visible instead of being invented", () => {
  const config = createSiteConfig();
  const issues = getReleaseConfigIssues(config);

  assert.ok(issues.includes("siteUrl is required for release"));
  assert.ok(issues.includes("legalName is required for release"));
  assert.equal(config.businessName, "Letters from Cyrus");
  assert.equal(config.hostingProvider, "Vercel");
  assert.equal(config.buttondownFormAction, DEFAULT_BUTTONDOWN_FORM_ACTION);
  assert.equal(config.tallyScorecardUrl, DEFAULT_TALLY_SCORECARD_URL);
  assert.equal(
    issues.includes("buttondownFormAction is required for release"),
    false,
  );
  assert.equal(
    issues.includes("tallyScorecardUrl is required for release"),
    false,
  );
});

test("URLs, email addresses, and domains are validated at the boundary", () => {
  const config = createSiteConfig({
    ...completeEnvironment,
    SITE_URL: "http://letters.example",
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
    "privacy.astro",
    "legal.astro",
    "404.astro",
  ];

  await Promise.all(
    routes.map((route) =>
      access(new URL(`../src/pages/${route}`, import.meta.url)),
    ),
  );
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

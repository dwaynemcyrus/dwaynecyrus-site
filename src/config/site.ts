export interface SiteConfig {
  siteName: "Letters from Cyrus";
  authorName: "Cyrus";
  siteUrl: string;
  buttondownFormAction: string;
  tallyScorecardUrl: string;
  cloudflareAnalyticsToken: string;
  contactEmail: string;
  xUrl: string;
  youtubeUrl: string;
  substackUrl: string;
  legalName: string;
  businessName: string;
  legalAddress: string;
  websiteDomain: string;
  hostingProvider: string;
  responsiblePerson: string;
}

type Environment = Record<string, string | undefined>;

export const DEFAULT_BUTTONDOWN_FORM_ACTION =
  "https://buttondown.com/api/emails/embed-subscribe/lettersfromcyrus";
export const DEFAULT_TALLY_SCORECARD_URL = "https://tally.so/r/1A5J5b";

const REQUIRED_RELEASE_FIELDS = [
  "siteUrl",
  "cloudflareAnalyticsToken",
  "contactEmail",
  "legalName",
  "legalAddress",
  "websiteDomain",
  "responsiblePerson",
] as const satisfies readonly (keyof SiteConfig)[];

const HTTPS_URL_FIELDS = [
  "siteUrl",
  "buttondownFormAction",
  "tallyScorecardUrl",
  "xUrl",
  "youtubeUrl",
  "substackUrl",
] as const satisfies readonly (keyof SiteConfig)[];

function value(environment: Environment, key: string): string {
  return environment[key]?.trim() ?? "";
}

export function isHttpsUrl(input: string): boolean {
  if (!input) return false;

  try {
    return new URL(input).protocol === "https:";
  } catch {
    return false;
  }
}

export function isEmailAddress(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export function createSiteConfig(environment: Environment = {}): SiteConfig {
  return {
    siteName: "Letters from Cyrus",
    authorName: "Cyrus",
    siteUrl: value(environment, "SITE_URL"),
    buttondownFormAction:
      value(environment, "BUTTONDOWN_FORM_ACTION") ||
      DEFAULT_BUTTONDOWN_FORM_ACTION,
    tallyScorecardUrl:
      value(environment, "TALLY_SCORECARD_URL") || DEFAULT_TALLY_SCORECARD_URL,
    cloudflareAnalyticsToken: value(environment, "CLOUDFLARE_ANALYTICS_TOKEN"),
    contactEmail: value(environment, "CONTACT_EMAIL"),
    xUrl: value(environment, "X_URL"),
    youtubeUrl: value(environment, "YOUTUBE_URL"),
    substackUrl: value(environment, "SUBSTACK_URL"),
    legalName: value(environment, "LEGAL_NAME"),
    businessName: value(environment, "BUSINESS_NAME") || "Letters from Cyrus",
    legalAddress: value(environment, "LEGAL_ADDRESS"),
    websiteDomain: value(environment, "WEBSITE_DOMAIN"),
    hostingProvider: value(environment, "HOSTING_PROVIDER") || "Vercel",
    responsiblePerson: value(environment, "RESPONSIBLE_PERSON"),
  };
}

export function getReleaseConfigIssues(config: SiteConfig): string[] {
  const issues: string[] = [];

  for (const field of REQUIRED_RELEASE_FIELDS) {
    if (!config[field]) issues.push(`${field} is required for release`);
  }

  for (const field of HTTPS_URL_FIELDS) {
    const fieldValue = config[field];
    if (fieldValue && !isHttpsUrl(fieldValue)) {
      issues.push(`${field} must be an HTTPS URL`);
    }
  }

  if (config.contactEmail && !isEmailAddress(config.contactEmail)) {
    issues.push("contactEmail must be a valid email address");
  }

  if (
    config.websiteDomain &&
    (config.websiteDomain.includes("://") || config.websiteDomain.includes("/"))
  ) {
    issues.push("websiteDomain must be a hostname without a protocol or path");
  }

  return issues;
}

const environment = import.meta.env ?? {};

export const siteConfig = createSiteConfig(environment);
export const releaseConfigIssues = getReleaseConfigIssues(siteConfig);

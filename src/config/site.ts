export {
  DEFAULT_BUTTONDOWN_FORM_ACTION,
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_LEGAL_ADDRESS,
  DEFAULT_LEGAL_NAME,
  DEFAULT_RESPONSIBLE_PERSON,
  DEFAULT_SITE_URL,
  DEFAULT_SUBSTACK_URL,
  DEFAULT_TALLY_SCORECARD_URL,
  DEFAULT_WEBSITE_DOMAIN,
  DEFAULT_X_URL,
  DEFAULT_YOUTUBE_URL,
} from "./site-defaults.ts";
import {
  DEFAULT_BUTTONDOWN_FORM_ACTION,
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_LEGAL_ADDRESS,
  DEFAULT_LEGAL_NAME,
  DEFAULT_RESPONSIBLE_PERSON,
  DEFAULT_SITE_URL,
  DEFAULT_SUBSTACK_URL,
  DEFAULT_TALLY_SCORECARD_URL,
  DEFAULT_WEBSITE_DOMAIN,
  DEFAULT_X_URL,
  DEFAULT_YOUTUBE_URL,
} from "./site-defaults.ts";

export interface SiteConfig {
  siteName: "Dwayne Cyrus";
  authorName: "Dwayne M Cyrus";
  siteUrl: string;
  buttondownFormAction: string;
  tallyScorecardUrl: string;
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
    siteName: "Dwayne Cyrus",
    authorName: "Dwayne M Cyrus",
    siteUrl: value(environment, "SITE_URL") || DEFAULT_SITE_URL,
    buttondownFormAction:
      value(environment, "BUTTONDOWN_FORM_ACTION") ||
      DEFAULT_BUTTONDOWN_FORM_ACTION,
    tallyScorecardUrl:
      value(environment, "TALLY_SCORECARD_URL") || DEFAULT_TALLY_SCORECARD_URL,
    contactEmail: value(environment, "CONTACT_EMAIL") || DEFAULT_CONTACT_EMAIL,
    xUrl: value(environment, "X_URL") || DEFAULT_X_URL,
    youtubeUrl: value(environment, "YOUTUBE_URL") || DEFAULT_YOUTUBE_URL,
    substackUrl: value(environment, "SUBSTACK_URL") || DEFAULT_SUBSTACK_URL,
    legalName: value(environment, "LEGAL_NAME") || DEFAULT_LEGAL_NAME,
    businessName: value(environment, "BUSINESS_NAME") || "Dwayne M Cyrus",
    legalAddress: value(environment, "LEGAL_ADDRESS") || DEFAULT_LEGAL_ADDRESS,
    websiteDomain:
      value(environment, "WEBSITE_DOMAIN") || DEFAULT_WEBSITE_DOMAIN,
    hostingProvider: value(environment, "HOSTING_PROVIDER") || "Vercel",
    responsiblePerson:
      value(environment, "RESPONSIBLE_PERSON") || DEFAULT_RESPONSIBLE_PERSON,
  };
}

export function getReleaseConfigIssues(config: SiteConfig): string[] {
  const issues: string[] = [];

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

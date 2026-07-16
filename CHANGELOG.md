# Changelog

All notable changes to this project are recorded in this file.

The format follows Keep a Changelog, and versions follow Semantic
Versioning. Ordinary commits remain in Git history; this file summarizes
changes that matter to users, integrators, or project operators.

## [Unreleased]

### Added

- Static Astro website with homepage, scorecard, privacy, legal, and custom
  not-found experiences.
- Accessible editorial layout, navigation, newsletter forms, and responsive
  styling.
- Central configuration for Buttondown, Tally, Cloudflare Web Analytics,
  canonical URLs, social links, and legal details.
- Sitemap, robots policy, page metadata, and truthful structured data.
- Automated formatting, linting, type checks, content-contract tests, and
  static production builds.
- Developer setup, external-service verification, release, and rollback
  documentation.
- Running changelog and Semantic Versioning release policy.

### Changed

- Canonical site identity and public contact now default to
  `dwaynecyrus.com` and `hey@dwaynecyrus.com`.
- Sitemap generation now uses a project-owned static endpoint compatible with
  the secure Astro release.
- Cloudflare Web Analytics is now left to automatic edge injection, removing
  the redundant repository token and beacon configuration.
- Privacy, Legal Notice, footer navigation, and social links now use the
  confirmed Dwayne M Cyrus operator identity and contact details.

## Release policy

- New projects begin at `0.1.0`.
- Patch and minor versions may be selected by Codex only during a release
  explicitly requested by the owner.
- Moving to `1.0.0` or changing any later major version requires explicit
  owner approval.
- A version change does not authorize a tag, push, deployment, or release
  publication unless the owner also requests it.

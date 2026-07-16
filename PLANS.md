# PLANS.md — Initial Website Build

This plan prepares the first complete Letters from Cyrus website. It is
active because the build will touch more than five files and spans project
setup, frontend, third-party integrations, legal content, metadata, and
deployment readiness.

The owner approved `OVERVIEW.md` on 2026-07-16, and the setup documents are
committed. Implementation may begin in a later turn when requested.

## Outcome

A polished, accessible, static Astro website that makes joining Letters
from Cyrus the primary conversion, provides the Freeze-to-Command
Scorecard as the secondary path, and is ready for a verified Vercel preview.

## Context

- **Why now:** The source brief and project contracts are ready to become the first website implementation.
- **Overview requirements covered:** All sections, especially first-version requirements, non-goals, product behavior, design, constraints, and acceptance.
- **In scope:** Astro scaffold, central configuration, shared layout/components, homepage, scorecard, privacy, legal, custom 404, metadata, sitemap, robots, Cloudflare analytics, documentation, and verification.
- **Out of scope:** Production deployment, DNS changes, live external submissions without authorization, and every non-goal in `OVERVIEW.md` and `PROJECT.md`.
- **Assumptions:** Direct Tally link; npm; documentation-only starting repository; current stable compatible Astro/Node versions selected during scaffolding.
- **Current branch:** `feat/initial-build`

## Preconditions

- [x] Git repository initialized at `/Users/cyrus/Code/dwaynecyrus-site`.
- [x] Focused documentation branch created.
- [x] Source brief preserved.
- [x] Overview, project contract, active guides, and this plan drafted.
- [x] Owner explicitly approved `OVERVIEW.md` on 2026-07-16.
- [x] Setup documents are committed before implementation begins.

## Acceptance criteria

- [ ] Every acceptance criterion in `PROJECT.md` is met.
- [x] The generated site contains only `/`, `/scorecard`, `/privacy`, `/legal`, and the custom 404.
- [x] Newsletter signup is the dominant conversion and scorecard participation remains secondary.
- [x] Required wording and approved baseline copy from `PROJECT-BRIEF.md` are implemented accurately.
- [x] Buttondown, Tally, analytics, contact, social, and legal values are centrally configured with safe missing-value behavior.
- [x] Format, lint, Astro/type checks, contract tests, and static production build pass.
- [ ] Mobile, desktop, zoom/reflow, keyboard, forms, links, metadata, console, and network behavior are verified.
- [x] No production deployment, DNS change, or live personal-data submission occurs without explicit owner instruction.

## Plan

### 1. [x] Chunk: scaffold Astro foundation

- **Files:** `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `.prettierignore`, `eslint.config.js`
- **Change:** Scaffold the smallest static Astro project; select compatible current stable versions; add official sitemap, Astro checks, format, lint, Node test, build, and preview scripts; preserve all project documents.
- **Verify:** `npm install`, `npm run format:check`, `npm run lint`, `npm run check`, `npm test`, and `npm run build` pass for the scaffold.
- **Risk/rollback:** Dependency or configuration incompatibility. Remove only files introduced by this chunk or revert its focused commit; never delete project documents.
- **Commit:** `chore(site): scaffold astro project`

### 2. [x] Chunk: add config and content checks

- **Files:** `.env.example`, `src/config/site.ts`, `scripts/validate-content.mjs`, `tests/site-contract.test.mjs`
- **Change:** Add typed central configuration, distinguish stable values from environment inputs, validate URLs/email/release fields, omit optional social links when absent, and add exact-copy/exclusion/route contract checks derived from the brief.
- **Verify:** `npm run check`, `npm test`, and `npm run build` pass with documented development values; tests prove invalid URLs and dead optional values are rejected or omitted as designed.
- **Risk/rollback:** Overly strict validation may block safe local previews or overly loose validation may permit bad production output. Keep development and production readiness explicit and independently testable.
- **Commit:** `feat(config): add site contract`

### 3. [x] Chunk: build shared editorial shell

- **Files:** `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`
- **Change:** Add tokens, system typography, reading widths, responsive shell, skip link, metadata contract, header navigation, footer/legal links, optional social-link omission, and the single analytics integration point.
- **Verify:** All configured checks and build pass; render a temporary page if needed; inspect 320px, ~390px, ~768px, and ~1280px widths plus keyboard focus and 200% zoom.
- **Risk/rollback:** Navigation wrapping, focus obscuration, invalid metadata, or premature third-party requests. Revert the shell chunk and keep configuration intact.
- **Commit:** `feat(layout): add editorial shell`

### 4. [x] Chunk: add shared conversion UI

- **Files:** `src/components/NewsletterForm.astro`, `src/components/PrimaryButton.astro`, `src/components/SecondaryLink.astro`, `src/components/SectionHeader.astro`
- **Change:** Add semantic CTA primitives and reusable Buttondown form with unique IDs, visible label, native email validation, exact consent wording, privacy link, and contextual button labels.
- **Verify:** Configured checks and build pass; keyboard-only form use works; native invalid-email state is understandable; component instances can receive unique IDs; no client JavaScript or optimistic success is introduced.
- **Risk/rollback:** Duplicate IDs, incorrect Buttondown field names, inaccessible errors, or false success messaging. Keep endpoint field names provisional until verified and revert this component-only commit if needed.
- **Commit:** `feat(forms): add newsletter signup`

### 5. [x] Chunk: build newsletter homepage

- **Files:** `src/pages/index.astro`
- **Change:** Implement all nine homepage sections in the approved order using exact and baseline copy from the brief; place newsletter forms first and last; keep scorecard and private-work CTAs secondary; add stable `#join` and `#letters` targets.
- **Verify:** Configured checks and build pass; content-contract tests pass; every heading/landmark is logical; mobile/desktop/zoom layouts and keyboard navigation work; there is no prohibited claim, page, or booking language.
- **Risk/rollback:** Copy drift or visual hierarchy making the scorecard primary. Revert the single page or restore exact source copy from the brief.
- **Commit:** `feat(home): build newsletter page`

### 6. [x] Chunk: build scorecard landing page

- **Files:** `src/pages/scorecard.astro`
- **Change:** Implement the scorecard hero, emotional-freeze explanation, identification points, numbered next steps, exact non-guarantee/no-booking statement, separate consent explanation, and two direct Tally CTAs.
- **Verify:** Configured checks and build pass; CTA uses only central configuration; no Tally request occurs before activation; all clinical/guarantee language searches are reviewed; keyboard and responsive checks pass.
- **Risk/rollback:** Implying diagnosis, therapy, automatic newsletter consent, or guaranteed Audit access. Revert the page and compare every section with the brief.
- **Commit:** `feat(scorecard): add landing page`

### 7. [x] Chunk: add legal and recovery pages

- **Files:** `src/pages/privacy.astro`, `src/pages/legal.astro`, `src/pages/404.astro`
- **Change:** Add concise plain-language privacy and legal pages using verified configuration fields, include the required source-only Swiss/EU review comment, and add an on-tone custom 404 with valid recovery links.
- **Verify:** Configured checks and build pass; the comment exists in source but is not visible; no invented legal facts render; unresolved production fields fail release readiness; 404 returns correct hosting behavior and is not indexed.
- **Risk/rollback:** Publishing incomplete or inaccurate legal details. Keep preview states unmistakable and block release until the owner supplies/reviews values.
- **Commit:** `feat(pages): add legal and 404`

### 8. [x] Chunk: finish discovery and analytics

- **Files:** `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `src/pages/robots.txt.ts`, `tests/site-contract.test.mjs`
- **Change:** Complete canonical URLs, route-specific Open Graph/Twitter text, truthful JSON-LD, sitemap, robots, 404 indexing rules, and the Cloudflare Web Analytics boundary.
- **Verify:** Configured checks and build pass; inspect generated HTML, sitemap, and robots; 404 is excluded; no OG image or repository analytics beacon is referenced; expected third-party request timing is documented.
- **Risk/rollback:** Bad canonical domain, placeholder metadata, duplicate analytics, or unintended tracking. Disable Cloudflare Web Analytics and revert only this chunk while preserving pages.
- **Commit:** `feat(seo): add metadata and analytics`

### 9. [x] Chunk: document operation and release

- **Files:** `README.md`, `.env.example`, `PROJECT.md`, `PLANS.md`
- **Change:** Document install, development, checks, build, Buttondown, Tally, Cloudflare Analytics, legal details, Vercel preview/production, configuration ownership, and rollback; synchronize commands and resolved decisions.
- **Verify:** Follow README from a clean checkout through install and build; confirm every variable and script matches the repository; configured checks pass.
- **Risk/rollback:** Documentation drift. Treat executable scripts/configuration as evidence and correct docs in the same chunk.
- **Commit:** `docs(site): add setup guide`

### 10. [x] Chunk: verify complete visitor journey

- **Files:** Normally none; only focused fixes in affected files, with separate commits when needed
- **Change:** Verify homepage signup path, scorecard handoff, privacy/legal access, 404 recovery, all links/fragments, exact copy, forbidden routes/phrases, service boundaries, responsive layouts, zoom/reflow, keyboard use, focus, forms, console, network requests, metadata, and Lighthouse targets.
- **Verify:** Run `npm run format:check`, `npm run lint`, `npm run check`, `npm test`, and `npm run build`; preview the production build; record manual checks and Lighthouse results.
- **Risk/rollback:** Late fixes could combine unrelated concerns. Split fixes by cause and commit each verified correction separately.
- **Commit:** `test(site): verify visitor journey`

### 11. [x] Chunk: add changelog policy

- **Files:** `CHANGELOG.md`, `AGENTS.md`, `README.md`, `PROJECT.md`, `PLANS.md`
- **Change:** Add a running root changelog, define notable-change timing, adopt Semantic Versioning, allow patch/minor selection only during an owner-requested release, and require explicit owner approval for `1.0.0` or any later major version.
- **Verify:** Documentation references agree; the changelog contains `[Unreleased]`; `package.json` remains at `0.1.0`; format, lint, Astro/type checks, tests, and production build pass.
- **Risk/rollback:** Excessive entries can turn the changelog into duplicate Git history, while missing entries weaken release notes. Keep only meaningful user, integration, security, configuration, dependency, and operational changes.
- **Commit:** `docs(project): add changelog policy`

## Production release inputs

These may remain absent during implementation but must be supplied and
verified before production deployment:

- [x] Canonical site URL and website domain
- [ ] Buttondown form action and exact field/redirect behavior
- [x] Tally form URL
- [ ] Tally result delivery and separate optional consent behavior
- [x] Cloudflare Web Analytics injection method confirmed; no repository token required
- [x] Contact email
- [x] Legal name, operator name, publishable address, and responsible person
- [x] X, YouTube, and Substack URLs
- [ ] Owner and appropriate Swiss/EU privacy/legal review

## Progress notes

- 2026-07-16: Preserved `PROJECT-BRIEF.md` as the source brief.
- 2026-07-16: Initialized Git at the project root and created `docs/project-setup`.
- 2026-07-16: Selected frontend and deployment guides; data guide is inactive.
- 2026-07-16: Owner explicitly approved the overview; setup documents are ready to commit.
- 2026-07-16: Committed the reusable rules/guides and approved project definition in two focused setup commits.
- 2026-07-16: Began the Astro foundation on `feat/initial-build`; the generated visual mockup was rejected and is not a project asset.
- 2026-07-16: Scaffolded Astro 7.0.9 with pinned npm tooling; format, lint, Astro checks, Node tests, and the static build pass.
- 2026-07-16: Added typed central configuration, release-readiness validation, locked-copy helpers, and six passing contract tests.
- 2026-07-16: Added the semantic base layout, true-white editorial tokens, responsive static navigation, metadata shell, and optional-link footer.
- 2026-07-16: Added accessible newsletter, primary-action, secondary-link, and section-heading components with an honest unconfigured Buttondown state.
- 2026-07-16: Replaced the scaffold page with the complete nine-section newsletter homepage using the approved brief copy and hierarchy.
- 2026-07-16: Added the complete scorecard landing page with direct-config CTAs, non-clinical language, five next steps, invitation limits, and separate consent.
- 2026-07-16: Added plain-language privacy and legal pages with explicit missing-release states, plus a no-index custom 404 with recovery links.
- 2026-07-16: Added config-gated sitemap and canonical structured data, generated robots policy, a single Cloudflare beacon, and implementation-level content and route tests.
- 2026-07-16: Updated both newsletter forms with the confirmed Buttondown endpoint, required audience/name/email metadata, and audience-specific subscriber tag mapping.
- 2026-07-16: Documented local operation, all quality gates, configuration ownership, external-service checks, privacy/legal review, Vercel preview, and rollback.
- 2026-07-16: Verified the production preview at desktop and mobile widths: all page identities and recovery routes render, 390px and 1280px layouts have no horizontal overflow, both forms have unique IDs, form choice interaction works, required routes return the correct HTTP status, and browser consoles are clean. Browser keyboard-event automation did not move focus, so a final physical-keyboard check remains a release task.
- 2026-07-16: Added the owner-confirmed direct Tally scorecard URL as the default centrally configured destination while retaining an environment override.
- 2026-07-16: Added a running root changelog and owner-controlled Semantic Versioning policy; the development version remains `0.1.0`.
- 2026-07-16: Added the owner-confirmed canonical origin, website domain, and public contact email as centrally configured defaults with environment overrides.
- 2026-07-16: Replaced the incompatible sitemap integration with a prerendered project endpoint so the confirmed domain emits a real sitemap without downgrading Astro or accepting dependency advisories.
- 2026-07-16: Removed the redundant analytics token and beacon after the owner confirmed Cloudflare injects Web Analytics automatically at the edge.
- 2026-07-16: Added the confirmed operator identity, Basel postal address, responsible person, and social profiles; Privacy and Legal now render those values from central configuration.
- 2026-07-16: Prepared a non-public purchase, delivery, and refund policy draft for future digital educational products. It remains outside the Astro page tree and does not expand the MVP or create a public route.

## Future commerce preparation (not MVP)

- [x] Keep the initial fulfillment/refund policy draft outside `src/pages`.
- [ ] Confirm the first product, delivery method, access period, sales regions,
  currency, taxes, checkout provider, and customer-support timing.
- [ ] Approve a voluntary refund position and any product-specific exceptions.
- [ ] Add legally reviewed checkout terms, express digital-delivery consent
  where required, and an electronic order-confirmation record.
- [ ] Update privacy disclosures for payment, course, support, and recordkeeping
  providers before collecting purchase data.
- [ ] Treat commerce as a separately approved scope change; update
  `OVERVIEW.md`, `PROJECT.md`, routes, tests, and release checks before making
  any sales page or policy public.

## Completion

- **Checks run:** Format check, lint, Astro/type diagnostics, eleven contract tests, dependency audit, static production build, configured sitemap/metadata build, browser page and interaction checks, responsive overflow checks, console checks, and HTTP status checks pass.
- **Commits:** Focused setup, scaffold, configuration, layout, forms, homepage, scorecard, legal/recovery, SEO/analytics, Buttondown details, operating-guide, and changelog-policy commits are recorded on `feat/initial-build`.
- **Remaining risks:** Legal review remains outstanding; live Buttondown/Tally submissions are intentionally untested; Cloudflare injection on the deployed domain, physical-keyboard behavior, and Lighthouse targets remain unverified.
- **Follow-up:** Supply the production release inputs, complete owner/legal review, verify external services with approved test details, then authorize a Vercel preview deployment.

Commit subjects must be at most 44 characters. Commit body lines must be
at most 63 characters.

# PROJECT.md — Letters from Cyrus Contract

This technical contract derives from the completed overview and
`PROJECT-BRIEF.md`. It defines the implementation boundaries for the MVP.

## Source and status

- **Overview:** `OVERVIEW.md`
- **Overview status:** Approved on 2026-07-16
- **Additional source documents:** `PROJECT-BRIEF.md`
- **Contract last reviewed:** 2026-07-16
- **Blocking decisions:** None

The missing service URLs and legal details listed below block production
release, but they do not block building the static site with clear
development configuration states.

## Identity

- **Name:** Letters from Cyrus
- **One-sentence purpose:** Move visitors onto the Letters from Cyrus email list and direct appropriate men toward the Freeze-to-Command Scorecard.
- **Stage:** MVP
- **Owner:** Cyrus

## Users and outcomes

- **Primary users:** Married men, fathers, and men preparing seriously for marriage or fatherhood who carry responsibility while struggling with shutdown, withdrawal, avoidance, contained anger, or internal pressure.
- **Secondary users:** Wives and prospective wives seeking understanding without being made responsible for changing the men they love.
- **Problem:** A responsible man may remain outwardly functional while disappearing under pressure, failing to repair conflict, and making his unresolved inner condition part of what his family must survive.
- **Successful outcome:** The visitor recognises the condition and its cost, understands emotional command accurately, joins the letters, and can take the scorecard when appropriate.
- **Primary user journey:** Discover Cyrus → join the letters → understand the problem through the writing → visit and complete the scorecard → Cyrus may privately invite selected men to a Freeze Diagnostic Audit → mentorship may follow outside the public site.

The central transformation is:

> Move from emotional shutdown to calm, steady leadership—so your children never have to recover from you.

Emotional command means remaining present, understanding what is happening
internally, and choosing the right action under pressure. It is not
suppression, numbness, or control over other people.

## Scope

### Goals

- Make newsletter signup the dominant conversion on the homepage.
- Name emotional freeze and its consequences with serious, concise copy.
- Explain Cyrus's beliefs about emotional command, righteous manhood, marriage, fatherhood, responsibility, submission to God, truth, repair, and leadership under pressure.
- Explain the newsletter's Anchor Essay, Personal Letter, and Field Note rhythm without overloading the hero.
- Give appropriate men a clear, non-clinical route to the Tally scorecard.
- Explain scorecard result delivery, Cyrus's review, possible private Audit invitation, and the absence of any guarantee.
- Keep newsletter consent separate from scorecard participation.
- Provide accurate, plain-language privacy and legal information.
- Deliver an extremely light, accessible, responsive static website.

### Required routes

| Route | Purpose | Primary action |
|---|---|---|
| `/` | Homepage and newsletter landing page | Join the Letters |
| `/scorecard` | Freeze-to-Command Scorecard landing page | Begin the Scorecard |
| `/privacy` | Plain-language Privacy Policy | Understand data handling |
| `/legal` | Plain-language Legal Notice | Read legal details |
| custom 404 | Recover from an invalid route | Return home |

Homepage sections must appear in this order:

1. Hero and Buttondown signup
2. The condition
3. The cost and central transformation
4. What Cyrus believes
5. Who the letters are for
6. What readers receive
7. Scorecard introduction
8. Brief private-work explanation
9. Final Buttondown signup

Scorecard sections must appear in this order:

1. Hero and direct Tally CTA
2. What emotional freeze can look like
3. What the scorecard helps identify
4. What happens next
5. Email/result delivery and separate newsletter consent
6. Final Tally CTA

### Non-goals

- About, mentorship, blog, archive, public booking, application, contact-form, public Audit, community, course, media, gallery, portfolio, account, or dashboard pages
- CMS, database, authentication, storage, first-party API, or administrative tools
- Payments, bookings, or private-service management on the site
- Testimonials, subscriber counts, results, credentials, or urgency not supplied and verified
- Pop-ups, exit-intent forms, carousels, content images, custom fonts, or decorative visual effects
- Custom analytics, Google Analytics, Meta Pixel, Hotjar, or cookie-heavy tracking

Do not add “coming soon” links that imply prohibited routes. There is no
public call-booking link, and completing the scorecard does not guarantee
an Audit invitation.

### Acceptance criteria

- [ ] `npm install` succeeds and creates a committed npm lockfile.
- [ ] The development server starts and all required routes render.
- [ ] Format, lint, Astro/type, contract tests, and production build pass.
- [ ] Astro produces static output with no client UI framework or unnecessary hydration.
- [ ] The homepage makes joining Letters from Cyrus visually and semantically primary.
- [ ] Both homepage newsletter forms post to the verified Buttondown endpoint, request only required fields, use unique labelled controls, and show the required consent statement.
- [ ] Scorecard CTAs use only the centrally configured Tally URL.
- [ ] Scorecard participation, result-delivery email, and optional newsletter consent are accurately separated.
- [ ] The scorecard is not described as therapy, treatment, diagnosis, or a clinical assessment.
- [ ] The Audit invitation process, non-guarantee, and no-public-booking rule are explicit.
- [ ] `/privacy` and `/legal` use verified configuration values and contain no invented facts.
- [ ] Optional social links are omitted when their URLs are absent; production contains no dead placeholder links.
- [ ] Navigation, headings, landmarks, skip link, focus states, forms, validation, contrast, touch targets, zoom/reflow, and reduced-motion behavior meet the accessibility target.
- [ ] The design is black, white, text-only, editorial, calm, and responsive, with no prohibited imagery or effects.
- [ ] Each public page has a unique title, description, canonical URL, Open Graph text, and Twitter/X text.
- [ ] Sitemap, robots, and truthful basic structured data are present; the 404 is excluded from indexing and the sitemap.
- [ ] Cloudflare Web Analytics is the only page-view analytics service and receives no form or scorecard personal data.
- [ ] All internal links, fragments, configured external links, and the custom 404 work.
- [ ] There are no console errors, avoidable layout shifts, fake claims, prohibited routes, or public booking links.
- [ ] Mobile and desktop flows are verified with keyboard-only navigation.
- [ ] Lighthouse scores ideally exceed 95 for performance, accessibility, best practices, and SEO without reducing usability.
- [ ] The implementation README documents installation, development, build, Buttondown, Tally, Cloudflare Analytics, legal details, and Vercel deployment.

## Stack

- **Language:** TypeScript where useful; semantic HTML and CSS by default
- **Framework/runtime:** Astro, current stable release selected and recorded during scaffolding; static output only
- **Package manager:** npm
- **Database:** None
- **Hosting:** Vercel; domain/DNS may be managed through Cloudflare
- **External services:** Buttondown, Tally, Cloudflare Web Analytics, Vercel

Expected direct dependencies are Astro and the official Astro sitemap
integration. Development tooling may include the official Astro checker,
TypeScript, Prettier with Astro support, and ESLint with Astro support.
Use Node's built-in test runner for lightweight contract tests unless a
stronger need appears. Do not add a browser test framework solely for this
small MVP.

New dependencies or services require a clear reason. Paid services require
human approval.

## Repository structure

Planned ownership after scaffolding:

```text
/
├── AGENTS.md                 # Reusable Codex working rules
├── OVERVIEW.md               # Approved product intent
├── PROJECT.md                # This technical contract
├── PLANS.md                  # Active initial-build plan
├── PROJECT-BRIEF.md          # Preserved source brief
├── README.md                 # Developer setup and deployment guide
├── .env.example              # Safe names/descriptions, no real values
├── astro.config.mjs          # Static Astro and sitemap configuration
├── package.json
├── public/
│   └── robots.txt            # Static or generated crawler policy
├── docs/
│   └── ai/
│       ├── frontend.md       # Active reusable UI guide
│       └── deployment.md     # Active reusable delivery guide
├── scripts/
│   └── validate-content.mjs  # Exact-copy, route, and exclusion checks
├── src/
│   ├── components/
│   │   ├── NewsletterForm.astro
│   │   ├── PrimaryButton.astro
│   │   ├── SecondaryLink.astro
│   │   ├── SectionHeader.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── config/
│   │   └── site.ts           # Typed editable URLs/legal details
│   ├── layouts/
│   │   └── BaseLayout.astro  # Metadata, analytics, header/footer shell
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro
│   │   ├── legal.astro
│   │   ├── privacy.astro
│   │   └── scorecard.astro
│   └── styles/
│       └── global.css        # Reset, tokens, typography, shared layout
└── tests/
    └── site-contract.test.mjs
```

Adapt the structure only when repository inspection reveals a simpler
canonical Astro pattern. Do not create unused abstraction layers.

## Commands

These commands are contract requirements to establish during the scaffold;
they do not exist in the current documentation-only repository yet.

| Purpose | Command |
|---|---|
| Install | `npm install` |
| Develop | `npm run dev` |
| Format/check | `npm run format:check` |
| Lint | `npm run lint` |
| Type-check | `npm run check` |
| Test | `npm test` |
| Build | `npm run build` |
| Preview | `npm run preview` |

Once `package.json` exists, it is the executable source of truth. Keep this
table synchronized with its scripts.

## Architecture and boundaries

- **Entry points:** Static routes in `src/pages/`; shared document shell in `src/layouts/BaseLayout.astro`.
- **Main modules:** Pages own editorial sequence; components own small repeated UI; `src/config/site.ts` owns editable service/legal values; `global.css` owns design tokens and shared styles.
- **Source of truth:** Product intent and baseline copy come from `PROJECT-BRIEF.md`; approved scope comes from `OVERVIEW.md`; technical decisions come from this contract; external values come from validated configuration/environment inputs.
- **Public APIs/contracts:** Native Buttondown HTML form submission, direct Tally URL, Cloudflare analytics beacon, generated public routes/metadata.
- **Patterns to follow:** Static rendering, server/build-time configuration, semantic HTML, native form/link behavior, mobile-first CSS, small transparent Astro components, progressive enhancement, optional links omitted when absent.
- **Patterns to avoid:** React/Vue/Svelte islands, client-side routing, generic page renderers, CMS/content collections for fixed MVP copy, serverless proxies, local persistence, duplicated service URLs, optimistic form success, Tally embed by default, runtime schema complexity, and speculative abstractions.

`BaseLayout.astro` should own the HTML shell, route metadata, canonical URL,
skip link, header, footer, and the single Cloudflare beacon. Page components
must remain readable enough for copy review.

## Central configuration contract

`src/config/site.ts` must expose typed values for:

```ts
siteName
authorName
siteUrl
buttondownFormAction
tallyScorecardUrl
cloudflareAnalyticsToken
contactEmail
xUrl
youtubeUrl
substackUrl
legalName
businessName
legalAddress
websiteDomain
hostingProvider
responsiblePerson
```

Stable identity values may live directly in the typed module. Environment-
specific values should be read from documented build-time environment
variables. Blank optional social URLs omit their links. Missing required
production values must fail a documented release-readiness check or build,
never become `#`, fake facts, or apparently functional dead controls.

## Integration rules

### Buttondown

- Use native HTML `POST` submission to the verified configured endpoint.
- Prefer email address only; add fields only when the live Buttondown configuration requires them.
- Confirm field names and redirect/success behavior before release.
- Do not proxy the form, log its contents, or claim success before Buttondown confirms it.

### Tally

- Prefer a direct same-tab link using only `tallyScorecardUrl`.
- Do not load Tally scripts before CTA activation.
- Do not duplicate its optional newsletter-consent checkbox on the website.
- An embed requires a demonstrated accessibility/UX benefit and explicit approval after privacy and performance review.

### Cloudflare Web Analytics

- Load the current minimal beacon once from the base layout.
- Read its token from validated configuration.
- Do not send custom IDs, form data, scorecard answers, or personal data.
- Do not add Google Analytics or a custom analytics dashboard.

## Data and security

- **Stored data:** No first-party persistent data. Buttondown stores newsletter submissions; Tally stores scorecard submissions; Cloudflare supplies aggregate/basic analytics.
- **Sensitive data:** Email addresses and scorecard answers are sensitive external-service inputs and must not enter site logs, analytics, test fixtures, or source control.
- **Authentication/authorization:** None
- **Validation boundaries:** Validate build-time URLs, email/contact configuration, canonical domain, and legal fields; rely on native email validation plus verified Buttondown requirements; validate that optional social URLs are HTTPS before rendering.
- **Backup/migration approach:** Not applicable to the static site. External-service retention/export is handled in those services and documented in the privacy review.
- **Privacy or compliance needs:** Plain-language policy, separate newsletter consent, truthful provider disclosure, data-minimisation, no cookie banner unless actually required, and Swiss/EU data-protection review before launch.

The privacy source must include this non-visible comment:

```html
<!-- Review this policy for compliance with applicable Swiss and EU data-protection requirements before launch. -->
```

Use HTTPS for all external endpoints. Do not place personal data in query
strings created by the site. Any new third-party resource requires a
privacy, cookie/storage, performance, and necessity review.

## Product and design rules

- **Supported platforms/viewports:** Mobile-first from 320 CSS pixels; verify common mobile (~390px), tablet (~768px), desktop (~1280px), 200% zoom, and 400% reflow in current evergreen browsers.
- **Accessibility target:** WCAG 2.2 AA
- **Design system location:** `src/styles/global.css` CSS custom properties; no external component or design-system package
- **Performance targets:** Zero hydrated UI framework JavaScript; zero content images and custom-font requests; no avoidable layout shift; only required third-party requests; Lighthouse categories ideally 95+.
- **Critical product rules:** Newsletter conversion remains primary; scorecard remains secondary; no public booking; no guaranteed Audit invitation; no clinical claims; no fake proof or urgency; newsletter and scorecard consent remain separate; optional social links never become dead links.

Visual implementation:

- Black and white with a small high-contrast neutral scale
- System sans-serif for body/interface; restrained system serif permitted for major headings/quotations
- Reading width around 65 characters
- Generous line height, paragraph spacing, and vertical rhythm
- Thin rules, underlined text links, strong focus states
- Primary button: black background, white text, rectangular or slightly rounded
- No gradients, shadows, glass effects, blobs, icons, photography, card grids, animated text, or excessive rounding

Content marked as required wording in `PROJECT-BRIEF.md` must be exact.
Suggested/baseline copy is approved default copy and may receive only small,
meaning-preserving editorial changes.

## Environments and delivery

- **Environments:** Local development, Vercel preview, Vercel production
- **Environment variable source:** Local `.env` ignored by Git; safe variable names in `.env.example`; preview/production values in Vercel project settings
- **CI provider:** Vercel build checks initially; do not add duplicate CI until a repository host/workflow requires it
- **Deployment method:** Vercel static Astro deployment from the approved Git branch; domain/DNS may be connected through Cloudflare
- **Rollback method:** Promote/redeploy the previous known-good Vercel deployment or revert the responsible Git commit, then rerun all checks

Production deployment, release promotion, DNS changes, rollback execution,
and release tags require explicit owner instruction.

## Environment variables

Expected public-at-render-time configuration names:

| Variable | Purpose | Required for release |
|---|---|---:|
| `SITE_URL` | Canonical HTTPS origin | Yes |
| `BUTTONDOWN_FORM_ACTION` | Optional override for the confirmed newsletter endpoint | No |
| `TALLY_SCORECARD_URL` | Optional override for the confirmed scorecard destination | No |
| `CLOUDFLARE_ANALYTICS_TOKEN` | Web Analytics beacon | Yes |
| `CONTACT_EMAIL` | Privacy/legal contact | Yes |
| `X_URL` | Optional footer link | No |
| `YOUTUBE_URL` | Optional footer link | No |
| `SUBSTACK_URL` | Optional footer link | No |
| `LEGAL_NAME` | Legal notice/privacy identity | Yes |
| `BUSINESS_NAME` | Operating name | Yes |
| `LEGAL_ADDRESS` | Publishable postal address | Yes |
| `WEBSITE_DOMAIN` | Legal/canonical domain | Yes |
| `HOSTING_PROVIDER` | Hosting disclosure; expected Vercel | Yes |
| `RESPONSIBLE_PERSON` | Legal notice responsible person | Yes |

These values are rendered into the static site and are not secrets, but
they still require correct environment ownership and validation. Never put
private API keys in browser-visible or static output.

## Active guides

- `docs/ai/frontend.md`
- `docs/ai/deployment.md`

`docs/ai/data.md` is inactive and must not be copied or loaded because the
MVP has no first-party persistent data.

## Known risks and constraints

- The analytics token, legal identity/address, contact email, and optional social URLs are not yet supplied.
- The confirmed Buttondown endpoint, metadata fields, and audience tags must be verified with owner-approved test details before release.
- The live Tally form must be checked for result delivery and separate optional newsletter consent.
- Privacy and legal content requires owner and appropriate Swiss/EU review before release.
- Third-party behavior may change; verify current official integration instructions during implementation.
- The emotionally serious copy must name consequences without shaming readers or shifting responsibility to women.
- The minimal visual direction can be weakened by unnecessary decoration; restraint is a requirement, not an unfinished state.
- External-service outages remain outside the static site's control; links/forms must fail honestly without false local success states.

## Decisions

| Date | Decision | Reason |
|---|---|---|
| 2026-07-16 | Use Astro static output | Required by the source brief and appropriate for a lightweight text site |
| 2026-07-16 | Use no client UI framework | Required by the brief; semantic HTML/CSS covers the MVP |
| 2026-07-16 | Keep newsletter as primary conversion | Core business objective in the brief |
| 2026-07-16 | Prefer direct Tally links | Brief preference; avoids unnecessary script and privacy cost |
| 2026-07-16 | Centralise editable configuration | Prevents scattered URLs and invented/dead production values |
| 2026-07-16 | Activate frontend/deployment guides only | The site has UI and hosted delivery but no first-party data layer |
| 2026-07-16 | Use exact vs baseline copy statuses | Owner approved exact required wording with limited baseline refinements |
| 2026-07-16 | Use npm and focused quality scripts | Brief expects npm; explicit gates make later work reproducible |
| 2026-07-16 | Use the confirmed Buttondown form contract | The owner supplied the endpoint, metadata fields, and audience tag IDs |
| 2026-07-16 | Use the confirmed Tally scorecard URL | The owner supplied the direct scorecard destination |

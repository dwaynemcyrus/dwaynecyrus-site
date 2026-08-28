# Letters from Cyrus

The static website for Letters from Cyrus. It is built with Astro and uses
plain HTML, CSS and a small progressive-enhancement script for newsletter
audience tagging.

## Local setup

Requirements: Node.js 22.12 or newer and npm 9.6.5 or newer.

```sh
npm install
cp .env.example .env
npm run dev
```

The local address is printed in the terminal. Missing launch configuration is
shown honestly in the interface rather than replaced with invented values.

## Quality checks

```sh
npm run format:check
npm run lint
npm run check
npm test
npm run build
```

`npm run build` writes the static site to `dist/`. Use `npm run preview` to
review that production output locally.

## Changelog and releases

Notable work is recorded continuously in `CHANGELOG.md` under
`[Unreleased]`. The changelog summarizes changes that matter to visitors,
integrators, or site operators; it does not repeat every Git commit.

Version changes happen only during an owner-requested release. Codex may
select a patch or minor version based on the change impact. Moving to
`1.0.0` or any later major version always requires explicit owner approval.
A version bump does not authorize tagging, pushing, deploying, or publishing
a release unless those actions are also requested.

## Configuration

Copy `.env.example` to `.env` for local configuration. The `.env` file is
ignored by Git. Configure the same values in Vercel for preview and production.

The Buttondown endpoint is confirmed and built in. `BUTTONDOWN_FORM_ACTION`
remains available as an explicit override. The form sends:

- `email`
- the hidden `Unconfirmed` tag (`sub_tag_5ja83svvwp8s7brh1cm8ed8kwk`)

The confirmed direct Tally scorecard URL is built in. `TALLY_SCORECARD_URL`
remains available as an explicit override. Completing Tally must remain
separate from newsletter consent.

`/f2c-scorecard` uses the owner-approved standard Tally embed. Its
`F2C_SCORECARD_EMBED_URL` configuration includes the supplied left alignment,
transparent background, dynamic-height and form-event-forwarding options.
That route loads Tally's embed runtime and iframe; do not add event listeners
or send Tally data anywhere else. The page retains a direct Tally fallback
when JavaScript is unavailable. The embed forwards the host page path and query
parameters to Tally, so the site must never place personal data in its URLs.

`HIDDEN_LOAD_CHECKOUT_URL` controls the direct Stripe Checkout link for the
*Why Do I Keep Doing This?* ebook. The site only links to the hosted checkout:
it does not load Stripe scripts or collect payment details. Confirm delivery,
refund, tax, sales-region, support, and consumer-law terms before release, and
do not link a fulfilment policy until it has been reviewed and published.

The newsletter flow includes `/unconfirmed-subscription` for the post-signup
email prompt and `/subscription-confirmed` for the confirmation destination.
Configure Buttondown to use those public URLs at the appropriate stages of its
double-opt-in flow. Both routes intentionally remain outside search indexes and
the sitemap.

Cloudflare Web Analytics injects its JavaScript automatically at the edge. The
repository intentionally contains no beacon snippet or analytics token, which
prevents duplicate Cloudflare tracking. Do not send form values, scorecard
answers or other personal data to analytics.

Vercel Web Analytics is also included once in the shared Astro layout so its
anonymous aggregate page-view reporting can be compared with Cloudflare's.
Enable Web Analytics for the project in the Vercel dashboard; the integration
requires no repository secret. Both services must remain disclosed while both
are enabled.

Vercel Speed Insights is included once in the shared Astro layout to collect
anonymous real-user Web Vitals for every page. Enable Speed Insights for the
project in the Vercel dashboard; the integration requires no repository secret.
Do not pass form values, scorecard answers or other personal data to it.

The confirmed `https://dwaynecyrus.com` origin controls canonical URLs,
structured data, the sitemap and the sitemap line in `robots.txt`. `SITE_URL`
remains available as an explicit override and must be an HTTPS origin with no
path. The confirmed public contact is `hey@dwaynecyrus.com`.

The confirmed legal identity, postal address, responsible person and social
profiles are built in. Their environment variables remain available as
explicit overrides.

## External-service verification

Before release, verify the Buttondown form, direct Tally link, and embedded
scorecard using
owner-approved test details. Confirm that:

1. email and the `Unconfirmed` tag arrive in the expected fields;
2. Buttondown confirmation and unsubscribe behavior is correct;
3. Tally delivers results and does not silently add newsletter consent;
4. the embedded scorecard has an accurate title, dynamic height and a working
   no-JavaScript fallback; and
5. no personal form data appears in analytics or URLs.

Do not submit real visitor data during automated or preview testing.

## Privacy and legal review

The Privacy Policy discloses that Buttondown open and click tracking are
enabled, Tally scorecard submissions remain in the account archive
indefinitely, and Tally responses are not forwarded to another response
destination. It also discloses Cloudflare Web Analytics, Vercel Web Analytics
and Vercel Speed Insights. Reconfirm these settings whenever any service is
changed.

The Privacy Policy and Legal Notice contain the confirmed operator details but
remain implementation drafts. Obtain appropriate Swiss/EU review before a
public release, with particular attention to scorecard consent, intimate
response data, indefinite retention, international transfers and newsletter
engagement tracking. The website is educational and does not provide medical,
psychological, legal or financial advice.

## Vercel delivery

Import the public GitHub repository into Vercel, use the Astro framework preset,
and add the production environment variables. Vercel should run `npm run build`
and publish `dist/`.

Use a preview deployment for final review. Production deployment, domain/DNS
changes and release promotion require explicit owner approval. Roll back by
promoting the previous known-good Vercel deployment or reverting the focused
Git commit that introduced the problem.

## Project sources

- `PROJECT-BRIEF.md` is the preserved source brief.
- `OVERVIEW.md` is the approved product definition.
- `PROJECT.md` is the implementation contract.
- `PLANS.md` records build progress and remaining release inputs.
- `CHANGELOG.md` records notable unreleased and released changes.

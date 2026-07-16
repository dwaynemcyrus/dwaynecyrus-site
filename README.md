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

- `metadata__gender` with `man` or `woman`
- `metadata__first_name`
- `metadata__last_name`
- `email`
- `tag`, selected from the confirmed audience tag IDs in the form script

The confirmed direct Tally scorecard URL is built in. `TALLY_SCORECARD_URL`
remains available as an explicit override. Completing Tally must remain
separate from newsletter consent.

Cloudflare Web Analytics injects its JavaScript automatically at the edge. The
repository intentionally contains no beacon snippet or analytics token, which
prevents duplicate tracking. Do not send form values, scorecard answers or
other personal data to analytics.

The confirmed `https://dwaynecyrus.com` origin controls canonical URLs,
structured data, the sitemap and the sitemap line in `robots.txt`. `SITE_URL`
remains available as an explicit override and must be an HTTPS origin with no
path. The confirmed public contact is `hey@dwaynecyrus.com`.

The confirmed legal identity, postal address, responsible person and social
profiles are built in. Their environment variables remain available as
explicit overrides.

## External-service verification

Before release, verify the Buttondown form and the direct Tally link using
owner-approved test details. Confirm that:

1. both audience choices add the intended Buttondown tag;
2. first name, last name and email arrive in the expected fields;
3. Buttondown confirmation and unsubscribe behavior is correct;
4. Tally delivers results and does not silently add newsletter consent; and
5. no personal form data appears in analytics or URLs.

Do not submit real visitor data during automated or preview testing.

## Privacy and legal review

The Privacy Policy and Legal Notice contain the confirmed operator details but
remain implementation drafts. Obtain appropriate Swiss/EU review before a
public release. The website is educational and does not provide medical,
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

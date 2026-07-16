# OVERVIEW.md — Letters from Cyrus

This document defines what should be built and why. `PROJECT-BRIEF.md` is
the preserved source brief and remains authoritative for detailed copy.

## Status and sources

- **Status:** Approved
- **Owner:** Cyrus
- **Last reviewed:** 2026-07-16
- **Source documents or links:** `PROJECT-BRIEF.md`

## 1. Project

- **Working name:** Letters from Cyrus
- **One-sentence description:** A small, newsletter-first website that moves visitors onto the Letters from Cyrus email list and directs appropriate men toward the Freeze-to-Command Scorecard.
- **Why should this exist?** To name the pattern of emotional shutdown in responsible men, explain its cost, establish Cyrus's beliefs, earn trust through useful writing, and give readers an appropriate first action.
- **Project stage:** MVP

The website is not a portfolio, blog, digital garden, article archive, or
complete coaching website. The goal is a narrow, polished first release.

## 2. Users and problem

- **Primary users:** Married men, fathers, and men preparing seriously for marriage or fatherhood who carry responsibility while struggling with emotional shutdown, withdrawal, avoidance, contained anger, or internal pressure.
- **Secondary users:** Wives and prospective wives seeking to understand what is happening inside these men without becoming responsible for changing them.
- **Problem they have:** A man may remain outwardly productive and responsible while withdrawing under pressure, failing to repair conflict, and making his internal condition part of what his wife and children must live around.
- **Current alternative or workaround:** Unknown. The brief does not identify a current website, newsletter landing page, or scorecard discovery path that solves this clearly.
- **Outcome they need:** Recognise the condition and its consequences, understand emotional command accurately, receive useful letters, and—when appropriate—use the scorecard to see where emotional freeze is governing their life.

Paid private work is directed toward men. Newsletter content may also serve
women standing beside them.

## 3. Main user journey

1. A visitor discovers Cyrus and sees the condition named clearly.
2. The visitor joins Letters from Cyrus as the primary action.
3. The reader receives essays, personal letters, and field notes that deepen understanding and support better action.
4. An appropriate man visits the Freeze-to-Command Scorecard page and chooses to complete the Tally scorecard.
5. Cyrus may review the submission and privately invite selected men to a Freeze Diagnostic Audit when it appears appropriate.
6. Mentorship may follow outside the public website.

There is no public call-booking link. Completing the scorecard does not
guarantee an invitation to a Freeze Diagnostic Audit.

## 4. First-version requirements

- A static homepage at `/` that prioritises joining Letters from Cyrus.
- A focused scorecard landing page at `/scorecard` that links to Tally.
- A plain-language Privacy Policy at `/privacy`.
- A short plain-language Legal Notice at `/legal`.
- A custom, useful 404 page.
- Two accessible Buttondown newsletter signup forms on the homepage.
- Central configuration for all service URLs, social links, contact details, legal details, and canonical site data.
- Cloudflare Web Analytics for anonymous/basic page-view measurement.
- Accurate separation between scorecard participation and newsletter consent.
- Clear explanation of what happens after scorecard completion, including that an Audit invitation is discretionary and not guaranteed.
- Header and footer navigation defined in the brief, with optional social links rendered only when valid URLs exist.
- Unique titles, descriptions, canonical URLs, Open Graph and Twitter/X text metadata, an XML sitemap, `robots.txt`, and truthful basic structured data.
- A responsive, black-and-white, text-only editorial design using native system fonts.
- Semantic HTML, keyboard access, a skip link, visible focus states, labelled forms, accessible validation, sufficient contrast, and reduced-motion support.
- A clear implementation README covering installation, local development, builds, integrations, legal configuration, and Vercel deployment.
- Static Astro output with minimal JavaScript and no unnecessary third-party requests.

## 5. Non-goals

- About page
- Mentorship page or public programme details
- Blog, article archive, or CMS
- Public booking, application, contact form, or Freeze Diagnostic Audit page
- Community, course, media, gallery, or developer portfolio
- User accounts, authentication, database, or administrative dashboard
- Payments or booking on the website
- Testimonials, subscriber counts, results, credentials, or urgency that have not been supplied and verified
- Pop-ups, exit-intent forms, carousels, content images, stock photography, decorative icons, or generic coaching visuals
- Custom analytics dashboard, Google Analytics, Google Fonts, Meta Pixel, Hotjar, or cookie-heavy tracking
- React, Vue, another client-side UI framework, component library, animation library, or unnecessary JavaScript

## 6. Product behavior

- **User accounts:** No
- **Stored data:** No first-party database. Newsletter details are submitted to Buttondown; scorecard answers/contact details are submitted to Tally; Cloudflare supplies basic website analytics.
- **Payments:** No
- **External services:** Buttondown, Tally, Cloudflare Web Analytics, Vercel; Cloudflare may also manage domain/DNS.
- **Notifications or email:** Letters from Cyrus is sent through Buttondown two to three times each week. Tally may use an email address to deliver scorecard results. Scorecard participation must not automatically subscribe a person to the newsletter.
- **Administrative tools:** None in the website. Buttondown, Tally, and manual records remain external.

Measurement ownership:

- Visitors and page views: Cloudflare Web Analytics
- Confirmed subscribers: Buttondown
- Scorecard starts and completions: Tally
- Audit invitations, purchases, and mentorship conversions: manual records outside the website

## 7. Platform and design

- **Product type:** Website
- **Required devices or browsers:** Responsive mobile and desktop experience in current evergreen browsers; the core content and forms must remain usable with JavaScript unavailable.
- **Visual direction:** Black and white, text-only, serious, calm, editorial, minimal, highly readable, and closer to a private letter or short manifesto than a conventional coaching website.
- **Brand/design references:** `PROJECT-BRIEF.md`; no external design file supplied.
- **Accessibility needs:** Target WCAG 2.2 AA, including semantic landmarks, correct heading order, keyboard navigation, strong focus indicators, labelled forms, understandable validation, high contrast, descriptive links, comfortable mobile text, suitable touch targets, reduced-motion respect, and no reliance on color, hover, or motion alone.
- **Content or assets already available:** Complete baseline page copy and metadata guidance in `PROJECT-BRIEF.md`; no content imagery or custom fonts are required.

The primary reading width should remain around 65 characters. A restrained
system serif may be used for major headings or quotations, with a system
sans-serif for body and interface text.

## 8. Constraints and risks

- **Deadline or milestones:** No deadline supplied. The milestone is the smallest complete, polished MVP passing all acceptance checks.
- **Budget or service limits:** No monetary budget supplied. Keep dependencies and third-party services minimal; adding a paid service requires owner approval.
- **Required technologies:** Astro, TypeScript where useful, static output, semantic HTML, plain CSS, npm-compatible tooling, Vercel deployment, Buttondown, Tally, and Cloudflare Web Analytics.
- **Forbidden technologies:** React, Vue, client-side UI frameworks, databases, authentication, CMS, component libraries, unnecessary JavaScript, external animation libraries, Google Analytics, Google Fonts, Meta Pixel, Hotjar, and cookie-heavy tracking. Do not add Tailwind unless an existing repository already uses it; this repository currently has no implementation to preserve.
- **Privacy, legal, or compliance needs:** Plain-language privacy and legal pages; accurate provider disclosure; separate newsletter consent; no cookie banner unless an introduced service requires one; final policy review for applicable Swiss and EU data-protection requirements before launch.
- **Security concerns:** Do not expose secrets, log form contents, append personal data to URLs, send personal data to analytics, or invent legal/service configuration. Use HTTPS service endpoints and validate production configuration.

Known production inputs not yet supplied:

- Verified Buttondown field, tag, confirmation, and redirect behavior
- Verified Tally consent and result-delivery behavior
- Cloudflare Web Analytics verification on the deployed domain
- Owner and appropriate Swiss/EU privacy/legal review

These are launch inputs, not reasons to invent data or expand scope.

## 9. Success and acceptance

The first version is successful when:

- The homepage clearly establishes recognition, names the condition and its cost, explains Cyrus's beliefs and editorial promise, and makes joining the letters the dominant action.
- Appropriate men can understand and begin the scorecard without mistaking it for therapy, a clinical assessment, automatic newsletter consent, or guaranteed access to an Audit.
- The site earns trust through concise writing, accurate consent, truthful claims, and a distraction-free reading experience.

It is ready for handoff or release when:

- Dependency installation, local development, checks, and the static production build succeed.
- `/`, `/scorecard`, `/privacy`, `/legal`, and the custom 404 work on mobile and desktop.
- Buttondown and Tally destinations use verified central configuration.
- All links, form labels, validation states, focus states, keyboard paths, and consent statements work.
- Unique metadata, sitemap, robots, and truthful structured data are present.
- There is no public booking link, prohibited page, dead placeholder link, fake claim, console error, avoidable layout shift, or unnecessary client framework code.
- Newsletter and scorecard consent remain separate.
- The design remains black, white, text-led, responsive, and highly readable.
- Lighthouse performance, accessibility, best-practices, and SEO scores ideally exceed 95 without sacrificing usability.
- Legal and service configuration has been supplied and reviewed for production.

## 10. Assumptions and open decisions

### Assumptions

- `[ASSUMPTION]` A direct link to Tally is the default because the brief prefers it unless embedding provides a clear benefit without meaningful complexity.
- `[ASSUMPTION]` The initial implementation will start from this documentation-only repository and use npm, because no existing Astro project or lockfile is present.
- `[ASSUMPTION]` Missing legal and service values may use unmistakable development placeholders or build-time omissions, but a production build must not publish fake or dead values.

### Needs a decision

- None. Git is initialized on the focused `docs/project-setup` branch, and the owner approved this overview on 2026-07-16.

Production credentials and legal details listed above are required before
release but do not block the initial static implementation.

## Overview readiness check

- [x] The primary user, problem, and outcome are clear.
- [x] The main user journey is understandable.
- [x] First-version requirements and non-goals are separated.
- [x] Accounts, data, payments, and integrations are addressed.
- [x] Platform, design, and important constraints are addressed.
- [x] Success and acceptance criteria are observable.
- [x] Assumptions are visible.
- [x] No blocking `[NEEDS DECISION]` items remain.
- [x] The human explicitly approved this overview.

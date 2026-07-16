Letters from Cyrus — Website Project Brief

1. Project

Build the first version of the business website for Cyrus.

This is a small, newsletter-first website. Its primary purpose is to move visitors onto the Letters from Cyrus email list.

The website is not a portfolio, blog, digital garden or full coaching website.

Keep the scope narrow and ship a complete, polished static website.

  

2. Primary objective

The main conversion is:

Join Letters from Cyrus

The secondary conversion is:

Complete the Freeze-to-Command Scorecard

The wider customer path is:

Discover Cyrus → Join the letters → Understand the problem → Complete the scorecard → Cyrus reviews the results → Selected men may be invited to a Freeze Diagnostic Audit → Mentorship may follow

There must be no public call-booking link.

Completing the scorecard does not guarantee an invitation to a Freeze Diagnostic Audit.

  

3. Audience

The primary audience is:

- Men who are married
- Fathers
- Men preparing seriously for marriage
- Men preparing seriously for fatherhood
- Men carrying responsibility while struggling with emotional shutdown, withdrawal, avoidance, contained anger or internal pressure

The secondary audience is:

- Women who stand beside these men
- Wives or prospective wives trying to understand what is happening inside the men they love

The paid work is directed toward men.

The newsletter may also serve women who want to understand the condition and support the men in their lives without carrying responsibility for changing them.

  

4. Core positioning

The website should communicate:

Here is the condition I see in men.  
Here is what it costs.  
Here is what I believe.  
Enter the work through these letters.

The central transformation is:

Move from emotional shutdown to calm, steady leadership—so your children never have to recover from you.

Do not present Cyrus as a generic life coach.

The work concerns:

- Emotional command
- Righteous manhood
- Marriage
- Fatherhood
- Responsibility
- Submission to God
- Truth
- Repair
- Leadership under pressure
- Turning suffering into service

Do not describe emotional command as suppression, emotional numbness or control over other people.

Emotional command means remaining present, understanding what is happening internally and choosing the right action under pressure.

  

5. Newsletter

Name

Letters from Cyrus

Do not rename it to “Words from Cyrus.”

“Letters” communicates a direct relationship between Cyrus and the reader.

Newsletter promise

Use this wording:

Letters for men carrying silent weight—and for the women who stand with them. Essays, personal letters and practical field notes on emotional command, righteous manhood, marriage, fatherhood and the inner work required to lead well. Sent two to three times each week.

Publishing rhythm

The newsletter is sent two to three times each week.

The editorial rhythm is:

1. Anchor Essay  
    A substantial essay near the beginning of the week. It explores one central idea in depth.
2. Personal Letter  
    A shorter midweek letter based on a lived experience, observation, story, question, verse or conversation. This is sent when there is something real and useful to say. Do not promise that it will appear every week.
3. Field Note  
    A two-to-three-minute practical read near the end of the week. It should usually connect to the Anchor Essay and help the reader act on the idea.

The underlying rhythm is:

Understand it.  
Witness it.  
Practise it.

Do not place this full publishing system in the hero. Explain it farther down the homepage.

  

6. Website scope

Create these pages:

1. / — Homepage and newsletter landing page
2. /scorecard — Freeze-to-Command Scorecard landing page
3. /privacy — Plain-language Privacy Policy
4. /legal — Legal Notice
5. Custom 404 page

Do not create:

- An About page
- A mentorship page
- A blog
- An article archive
- A CMS
- A public booking page
- A contact form
- A public Freeze Diagnostic Audit page
- A community page
- A course page
- A media page
- A gallery
- A developer portfolio
- Testimonials that have not been supplied
- Fake subscriber numbers
- Fake client results
- Fake urgency
- Pop-ups
- Exit-intent forms

  

7. Technology

Use Astro as a lightweight static-site generator.

The website should primarily consist of semantic HTML and CSS.

Requirements

- Astro
- TypeScript where useful
- Static output
- No React
- No Vue
- No client-side framework
- No database
- No authentication
- No CMS
- No Tailwind unless the repository already uses it
- No component library
- No unnecessary JavaScript
- No external animation library
- No Google Analytics
- No Google Fonts
- No Meta Pixel
- No Hotjar
- No cookie-heavy tracking

Use a small number of reusable Astro components.

Suggested components:

- SiteHeader.astro
- SiteFooter.astro
- NewsletterForm.astro
- SectionHeader.astro
- PrimaryButton.astro
- SecondaryLink.astro

Create a central configuration file for URLs and editable details.

Suggested values:

export const siteConfig = {

  siteName: "Letters from Cyrus",

  authorName: "Cyrus",

  siteUrl: "",

  buttondownFormAction: "",

  tallyScorecardUrl: "",

  contactEmail: "",

  xUrl: "",

  youtubeUrl: "",

  substackUrl: "",

  legalName: "",

  legalAddress: "",

};

Do not scatter service URLs throughout the codebase.

  

8. Deployment and analytics

The site will be deployed through Vercel.

The domain and DNS may be managed through Cloudflare.

Install Cloudflare Web Analytics using a configurable beacon token.

Do not install Google Analytics.

The MVP measurement system is:

- Website visitors and page views: Cloudflare Web Analytics
- Confirmed subscribers: Buttondown
- Scorecard starts and completions: Tally
- Freeze Diagnostic Audit invitations: recorded manually
- Freeze Diagnostic Audit purchases: recorded manually
- Mentorship conversions: recorded manually

Do not build a custom analytics dashboard.

Do not add cookie banners unless a service added to the site actually requires one.

  

9. Visual direction

The site must be:

- Black and white
- Text-only
- Serious
- Editorial
- Calm
- Highly readable
- Minimal
- Responsive

There should be no content images.

Do not use:

- Gradients
- Background illustrations
- Stock photography
- Portrait photography
- Decorative icons
- Large card grids
- Glassmorphism
- Drop shadows
- Excessive rounded corners
- Animated text
- Carousels
- Decorative blobs
- Generic startup visuals
- Generic coaching imagery

The site should feel closer to a private letter, serious publication or short manifesto than a conventional coaching website.

Typography

Use native system fonts.

A restrained serif may be used for major headings and quotations. Use a clean system sans-serif for body text and interface elements.

Prioritise reading quality.

Suggested principles:

- Maximum text width around 65ch
- Generous line height
- Strong heading hierarchy
- Large but not theatrical hero typography
- Clear paragraph spacing
- Generous vertical spacing
- Thin black or grey dividing rules
- Strong visible focus states
- Underlined text links
- High contrast
- No light-grey body text that reduces readability

The website must work well without custom fonts.

Buttons

Use one primary button style:

- Black background
- White text
- Rectangular or slightly rounded
- Clear hover and focus states

Use simple underlined text links for secondary actions.

  

10. Navigation

Desktop navigation:

- Brand/name: Cyrus
- Letters
- Scorecard
- Primary button: Join the Letters

The brand returns to /.

“Letters” returns to the newsletter section on the homepage.

“Scorecard” links to /scorecard.

The persistent primary action is always:

Join the Letters

Do not place “Book a Call” or “Apply Now” in the navigation.

Mobile navigation should remain simple. Avoid building a complicated animated menu.

  

11. Homepage

The homepage is the primary newsletter landing page.

Its job is to:

1. Establish recognition
2. Name the condition
3. Explain the cost
4. Present Cyrus’s beliefs
5. Explain what readers receive
6. Invite the reader onto the email list
7. Introduce the scorecard
8. Briefly acknowledge private work

Homepage structure

Section 1: Hero

Use this copy as the baseline:

Eyebrow

Letters from Cyrus

Headline

Letters for men carrying silent weight—and for the women who stand with them.

Supporting copy

Essays, personal letters and practical field notes on emotional command, righteous manhood, marriage, fatherhood and the inner work required to lead well.

Frequency

Sent two to three times each week.

Form

Use the Buttondown signup form.

Request only the minimum information required. Prefer email address only unless the existing Buttondown setup requires another field.

Button:

Join the Letters

Consent text:

By subscribing, you agree to receive Letters from Cyrus two to three times each week. Unsubscribe at any time. Read the Privacy Policy.

Do not add manipulative language such as “Join thousands of men” unless verified numbers are supplied later.

  

Section 2: The condition

Suggested heading:

A man can carry everything and still disappear from his own life.

Suggested body copy:

He works. He provides. He keeps moving.

  

But under pressure, he shuts down. He withdraws from difficult conversations. He contains anger until it leaks into the room. He avoids what he does not know how to face.

  

From the outside, he may still look responsible. Inside his home, everyone feels the distance.

Keep this section concise.

  

Section 3: The cost

Suggested heading:

What stays unresolved inside a man does not remain his alone.

Suggested body copy:

His wife feels it.

  

His children organise themselves around it.

  

Silence becomes tension. Withdrawal becomes uncertainty. Anger becomes something everyone learns to anticipate.

  

What a man refuses to confront can become part of what his family must survive—and later recover from.

Use the core promise prominently after this section:

Move from emotional shutdown to calm, steady leadership—so your children never have to recover from you.

Do not over-explain the line.

  

Section 4: What Cyrus believes

Suggested heading:

Command begins inside the man.

Suggested body copy:

I believe a man must submit to God, master his inner world, carry his responsibilities with integrity and turn suffering into service through truth, discipline and wisdom.

  

Emotional command is not pretending that nothing affects you.

  

It is the ability to remain present, understand the signal, tell the truth, make repair and act rightly under pressure.

This section should sound like a clear doctrine, not a motivational speech.

  

Section 5: Who the letters are for

Suggested heading:

Written for the men carrying it—and the women standing beside them.

Suggested body copy:

These letters are primarily for married men, fathers and men preparing seriously for marriage or fatherhood.

  

They are also for the women trying to understand why a good man may withdraw, freeze or become difficult to reach.

  

Understanding the pattern does not make a woman responsible for fixing it. The man must return and take command of himself.

  

Section 6: What readers receive

Suggested heading:

What arrives each week

Use three simple text sections. Do not turn them into decorative cards unless the layout genuinely requires it.

Anchor Essay

A substantial essay examining one central idea about manhood, emotional command, marriage, fatherhood, suffering or responsibility.

Personal Letter

A direct letter drawn from experience, observation, story, Scripture, conversation or a question worth confronting.

Field Note

A practical two-to-three-minute read that helps you apply the week’s central idea.

Close the section with:

No empty motivation. No soft excuses. The purpose is clearer understanding followed by better action.

  

Section 7: Scorecard

Suggested eyebrow:

The Freeze-to-Command Scorecard

Suggested heading:

Find out where emotional freeze is governing your life.

Suggested body copy:

The Freeze-to-Command Scorecard helps marriage- and father-minded men recognise patterns of shutdown, avoidance, anger, disconnection and failed repair.

  

You will receive a clearer picture of where you are now and what may need your attention next.

CTA:

Take the Scorecard

Link to /scorecard.

Do not make this CTA visually stronger than the primary newsletter form at the top of the page.

  

Section 8: Private work

Do not create a separate mentorship page.

Suggested heading:

For men who need more than letters

Suggested body copy:

I work privately with a limited number of men who are ready to confront emotional shutdown, regain command of themselves and become steadier leaders within their homes.

  

Private work does not begin with a public booking link.

  

It begins with the Freeze-to-Command Scorecard. I review the results. If I believe a Freeze Diagnostic Audit may serve you, I may invite you to one.

CTA:

Begin with the Scorecard

Link to /scorecard.

Do not list mentorship pricing, packages or detailed programme features on the MVP website.

  

Section 9: Final signup

Suggested heading:

Enter the work through the letters.

Suggested body copy:

Start with the ideas. See yourself more clearly. Take better action.

Repeat the Buttondown signup form.

Button:

Join Letters from Cyrus

  

12. Scorecard page

The scorecard page is a focused landing page.

Its primary action is to begin the Tally scorecard.

For the MVP, prefer a direct link to the Tally form unless embedding it creates a clearly better experience without adding meaningful complexity.

The Tally URL must come from the central site configuration.

Scorecard page structure

Hero

Eyebrow:

The Freeze-to-Command Scorecard

Headline:

See the pattern before it costs you more.

Supporting copy:

A private assessment for men who are married, fathers or preparing seriously for either.

CTA:

Begin the Scorecard

  

What emotional freeze can look like

Suggested copy:

Emotional freeze does not always look like fear.

  

It can look like silence, withdrawal, irritation, overwork, avoidance, contained rage or the inability to return after conflict.

  

A man may still be productive while becoming increasingly absent from himself, his marriage and his family.

  

What the scorecard does

Suggested heading:

What the scorecard will help you identify

Suggested points:

- Where you shut down under pressure
- How conflict changes your behaviour
- Whether you withdraw instead of making repair
- How emotional pressure affects your leadership
- Where you may be repeating patterns your family has learned to survive

Avoid medical or diagnostic claims.

Do not describe the scorecard as therapy, treatment or a clinical psychological assessment.

  

What happens next

Use clear numbered steps:

1. You complete the scorecard.
2. You receive the results or report described in the Tally form.
3. Cyrus reviews submissions that may require deeper support.
4. If Cyrus believes a Freeze Diagnostic Audit may benefit you, you may receive a private invitation.
5. Completing the scorecard does not guarantee an Audit invitation.

Include this clear statement:

There is no public call-booking link. Invitations are based on the scorecard results and whether the Audit appears appropriate.

  

Email consent

Make it clear that:

- An email address may be required to deliver the scorecard results.
- Receiving results does not automatically subscribe someone to Letters from Cyrus.
- Newsletter consent is optional and handled separately inside the Tally form.
- The subscriber can unsubscribe from the newsletter at any time.

Do not duplicate the consent checkbox on the website if it already exists inside Tally.

  

Final CTA

Headline:

Answer honestly. Clarity begins there.

Button:

Begin the Scorecard

  

13. Footer

Include:

- Cyrus
- Letters
- Scorecard
- Privacy Policy
- Legal Notice
- X
- YouTube
- Substack
- Copyright year

Only include social links that have valid URLs in the configuration.

Do not include dead placeholder links in production.

  

14. Privacy Policy

Write this in plain language.

Do not make it unnecessarily long or filled with legal jargon.

The page should cover:

Who runs the site

Use configuration placeholders for:

- Legal name
- Business or operating name
- Postal address
- Contact email

Information collected

Explain that the website may collect:

- Email addresses submitted through Buttondown
- Scorecard answers and contact details submitted through Tally
- Basic anonymous website traffic information through Cloudflare Web Analytics
- Payment or booking information only if separate services are introduced later

Why information is used

- To send Letters from Cyrus to people who consented
- To deliver scorecard results
- To review scorecard submissions
- To decide whether a Freeze Diagnostic Audit may be appropriate
- To respond to lawful privacy requests
- To understand basic website usage

Services

Mention:

- Buttondown
- Tally
- Cloudflare
- Vercel

Explain that these providers process information required to operate the website and services.

Newsletter consent

State clearly:

- Newsletter subscription is optional
- Scorecard completion does not automatically subscribe someone
- Subscribers can unsubscribe through the link in every email

Data retention

Use plain wording:

Information is kept only for as long as it is reasonably needed for the purpose for which it was collected, legal obligations or legitimate business records.

Rights

Explain that a person may contact Cyrus to:

- Ask what information is held
- Request a correction
- Request deletion where applicable
- Withdraw newsletter consent
- Raise a privacy concern

Contact

Use the configured contact email.

Add a short development note in the source code:

<!-- Review this policy for compliance with applicable Swiss and EU data-protection requirements before launch. -->

Do not display that comment to visitors.

  

15. Legal Notice

Create a short plain-language page containing configurable fields for:

- Full legal name
- Operating or business name
- Postal address
- Contact email
- Website domain
- Hosting provider
- Responsible person

Add a basic disclaimer:

The material on this website is provided for educational and informational purposes. It is not medical, psychological, legal or financial advice. Nothing on this website creates a therapist-client, doctor-patient or professional advisory relationship.

Add:

Cyrus is responsible for the original material published on this website. External services and websites are responsible for their own content, availability and privacy practices.

Do not invent company registration numbers, tax numbers, addresses or credentials.

  

16. Writing style

All copy must be:

- Direct
- Clear
- Economical
- Specific
- Serious
- Action-oriented
- Easy to understand
- Free from unnecessary jargon

Cyrus does not write to fill space.

Every section should do at least one of these:

- Name a condition
- Explain a consequence
- Clarify a belief
- Teach a distinction
- Move the reader toward an appropriate action

Avoid:

- Fluffy introductions
- Excessive adjectives
- Generic inspiration
- Corporate language
- Therapy clichés
- Coaching clichés
- Startup jargon
- Artificial urgency
- Grandiose claims
- Long paragraphs that repeat the same point
- “Unlock your potential”
- “Become the best version of yourself”
- “Transform your life”
- “Start your journey”
- “Step into your power”
- “Safe space”
- “Thrive in every area”
- “Game-changing”
- “Revolutionary”
- “I help high-achieving men”
- “Book your free discovery call”

Use short paragraphs.

Use concrete language.

Speak to the reader as a responsible adult.

Do not shame the reader, but do not soften consequences.

Do not write as though women are responsible for rescuing men.

Do not promise healing, treatment or guaranteed outcomes.

  

17. Accessibility

The website must include:

- Semantic HTML
- Correct heading order
- Keyboard-accessible navigation
- Visible focus states
- A skip-to-content link
- Proper form labels
- Accessible validation messages
- Sufficient contrast
- Descriptive link text
- Respect for reduced-motion preferences
- No dependence on hover
- Comfortable mobile type sizes
- Touch targets of an appropriate size

Do not use colour alone to communicate meaning.

  

18. SEO and metadata

Add:

- Unique page titles
- Meta descriptions
- Canonical URLs
- Open Graph text metadata
- Twitter/X metadata
- XML sitemap
- robots.txt
- Basic structured data for the person or publication where appropriate

Do not create a fake Open Graph photograph.

A simple text-based black-and-white Open Graph image may be created only if it remains consistent with the visual direction. Otherwise omit the image until a proper one is available.

Suggested homepage title:

Letters from Cyrus — Emotional Command, Manhood, Marriage and Fatherhood

Suggested homepage description:

Letters for men carrying silent weight—and for the women who stand with them. Essays and field notes on emotional command, righteous manhood, marriage and fatherhood.

Suggested scorecard title:

Freeze-to-Command Scorecard — Cyrus

Suggested scorecard description:

A private scorecard for marriage- and father-minded men who want to recognise patterns of emotional shutdown, withdrawal and failed repair.

  

19. Performance

The website should be extremely light.

Targets:

- Minimal JavaScript
- No unnecessary third-party requests
- No layout shifts
- Fast first load
- Responsive images are irrelevant because the website contains no content images
- Lighthouse performance, accessibility, best practices and SEO scores should ideally exceed 95

Do not sacrifice usability merely to chase a perfect score.

  

20. Repository deliverables

Create:

- Complete Astro website
- Reusable components
- Central configuration file
- Responsive styles
- Privacy Policy
- Legal Notice
- 404 page
- Sitemap
- Robots file
- Cloudflare Web Analytics integration
- Buttondown newsletter form integration
- Tally scorecard integration or configurable direct link
- .env.example if environment variables are used
- Clear README.md

The README should explain:

1. How to install dependencies
2. How to run the development server
3. How to build the site
4. How to configure Buttondown
5. How to configure the Tally URL
6. How to configure Cloudflare Web Analytics
7. How to update legal details
8. How to deploy to Vercel

  

9. Acceptance criteria

The project is complete when:

- npm install succeeds
- npm run dev starts the website
- npm run build succeeds
- All pages work on mobile and desktop
- The homepage prioritises newsletter signup
- The scorecard page clearly explains what happens next
- There is no public booking link
- There is no About page
- There is no mentorship page
- There is no blog
- Newsletter consent and scorecard participation remain separate
- The Freeze Diagnostic Audit is described accurately
- The design is black, white, text-led and distraction-free
- All forms have proper labels and states
- All links work
- There are no dead placeholder links in production
- There are no console errors
- There are no fake claims, statistics or testimonials
- The writing is concise and consistent with this brief

  

22. Implementation process

Before writing code:

1. Inspect the current repository.
2. Preserve any useful existing Astro configuration.
3. Remove unnecessary dependencies and abandoned experiments.
4. Create a short implementation plan.
5. Build the smallest complete version of the website.
6. Run the production build.
7. Check mobile and desktop layouts.
8. Check keyboard navigation and form usability.
9. Fix errors before reporting completion.

Do not expand the scope without a clear requirement from this brief.

When a detail such as a URL, address or legal name is unavailable, use a clearly labelled configuration placeholder rather than inventing information.

The objective is not to demonstrate technical complexity.

The objective is to build a clear website that earns trust, collects email subscribers and directs appropriate men toward the Freeze-to-Command Scorecard.
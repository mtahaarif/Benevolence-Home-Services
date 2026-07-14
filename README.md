# Benevolence Home Services

Benevolence Home Services is a Next.js App Router marketing site for a nurse-led, non-medical home care agency based in Westchester, Illinois. The codebase is built to present the brand, explain its services, route visitors to consultation and contact actions, and support search-friendly service pages for the agency’s core offerings.

This repository currently implements the public-facing website, a shared site shell, a small content layer, a contact form API route, and a set of service pages with repeated but intentionally styled layouts. It also includes a few external link destinations for payment, scheduling, and hiring intake.

## What This Project Includes

The site is organized around a shared navigation/footer shell and a route-based information architecture. Most pages are static marketing pages rendered in the App Router, while the contact experience uses a lightweight JSON API route for form submission.

Implemented areas include:

- A branded homepage with hero imagery, a nurse-led comparison section, accordion content, and mission-focused CTAs.
- An About Us page and a separate About Owner page.
- A services index plus eight individual service pages.
- A careers page with a client-side application experience.
- A resources page with curated external references.
- A contact page with a working submit endpoint, embedded map, and scheduling links.
- Shared UI primitives for hero banners, section wrappers, headings, and scroll-triggered reveal animations.
- Global theme tokens, typography, and brand styling.

## Tech Stack

- Framework: Next.js 16.2.10 with App Router
- UI: React 19.2.4
- Language: TypeScript 5
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`
- Linting: ESLint 9 with `eslint-config-next`

The root layout loads Google fonts with `next/font/google`, and the site metadata and manifest are configured for a branded browser/app experience.

## Information Architecture

The application is intentionally structured around visitor intent: learn, compare, contact, apply, or browse services.

### Public Routes Implemented in the App Router

- `/` - Homepage
- `/about-us` - Agency overview, mission, and vision
- `/about-owner` - Founder biography page
- `/services` - Master services index
- `/services/personal-care`
- `/services/companionship`
- `/services/light-housekeeping`
- `/services/meal-preparation`
- `/services/medication-reminders`
- `/services/respite-care`
- `/services/specialized-support`
- `/services/transportation`
- `/careers` - Recruitment and application page
- `/resources` - External learning resources
- `/contact-us` - Contact and consultation page

### API Route

- `POST /api/contact` - Validates and accepts contact form submissions

### External Destinations Used by the Site

- PayPal payment link in the navigation and services page
- Calendly scheduling link in the contact page
- Jotform pre-hire link in the careers navigation submenu

## Page-by-Page Documentation

### Homepage `/`

The homepage is a long-form brand and conversion page. It uses a large hero section with rotating background imagery, strong copy, and primary and secondary actions.

Below the hero, the page includes:

- A detailed introduction to Benevolence Home Services.
- A comparison table contrasting nurse-led care with traditional home care.
- A faith-and-care narrative section with expandable FAQ-style accordions.
- Three compact CTA cards for eligibility, referrals, and scheduling an assessment.
- A final mission statement section with a background image and centered positioning.

The homepage also contains several content blocks that are deliberately designed for trust-building and route discovery rather than a simple brochure layout.

### About Us `/about-us`

The About Us page explains the agency’s identity as a non-medical, nurse-led home care provider. It focuses on:

- Who the agency is
- The mission statement
- The vision statement
- Care philosophy and dignity-centered support

It uses large imagery blocks with offset frames, side-by-side text/image composition, and scroll-triggered reveal sections.

### About Owner `/about-owner`

This page presents the founder and owner, Katrina Turman, with a portrait section and a long-form biography. It is positioned as a personal trust-building page that connects the agency to its leadership and community service story.

### Services Index `/services`

This is the main service hub. It renders a grid of service cards backed by the `homeCareServices` data array, each card linking to a deeper service page.

The page also includes a services hero, a short support-oriented introduction, and a closing CTA section prompting users to contact the team.

### Individual Service Pages

Each service page follows a shared pattern:

- A hero banner
- A descriptive overview
- A scope-of-service checklist
- A visually styled expectations or benefits grid
- An FAQ accordion section
- A bottom CTA panel

The service pages currently implemented are:

- Personal Care
- Companionship
- Light Housekeeping
- Meal Preparation and Nutrition
- Medication Reminders
- Respite Care
- Specialized Support
- Transportation Services

Each page uses custom iconography and alternating card backplates to maintain visual consistency while still giving each service a distinct content emphasis.

### Careers `/careers`

The careers page is built to attract caregivers and other care professionals. It includes:

- A hero section focused on purpose-driven work
- A “What You Can Expect” value section
- A recruitment note explaining the page’s intent
- A client-side application form experience
- A simulated submission success state

Important implementation detail: the form is currently client-side only. It does not post to a backend endpoint, upload resumes to storage, or persist applicant data. It is a front-end application flow only.

### Resources `/resources`

The resources page is a curated link directory to public organizations relevant to healthcare, recruitment, and home care learning. It is intentionally lightweight and functions as a trust and SEO support page rather than a blog or knowledge base.

### Contact Us `/contact-us`

The contact page includes:

- A hero section with consultation and call actions
- A structured contact form
- Privacy agreement checkbox gating form submission
- A Google Maps embed for the office location

The form posts JSON to `POST /api/contact`. On success, the form resets and shows a confirmation message. On failure, it surfaces the API response message or a local validation error.

## Shared UI System

The repository has a small set of reusable building blocks in `src/components`:

### `SiteChrome`

Wraps the application with the site navigation, main content slot, and footer.

### `SiteNav`

Provides the sticky top navigation, mobile menu toggle, active route highlighting, and dropdown submenus.

### `SiteFooter`

Displays contact information, quick links, social links, and a branded logo panel.

### `HeroSection`

The hero component supports:

- Eyebrow text
- Title and description
- Primary and optional secondary actions
- Optional facts chips
- One or more background images

If multiple images are supplied, the component crossfades between them on a timed interval.

### `PageShell`

Provides consistent horizontal constraints and page padding.

### `SectionHeading`

Standardizes section labels, titles, and descriptions across the site.

### `ScrollReveal`

Uses an `IntersectionObserver` to animate sections into view with opacity, translate, skew, and scale transitions.

### Additional Shell Helpers

`site-shell.tsx` also exports `CardGrid`, `InfoCard`, `BulletPanel`, and `SectionCard`. These are reusable content primitives for layout consistency.

## Content and Data Layer

The shared content file at `src/data/site-content.ts` centralizes the site’s common data:

- Brand identity values
- Primary navigation items and submenu entries
- Contact details
- Social links
- Homepage highlight copy
- Comparison bullets for nurse-led vs traditional care
- Service summary cards
- Care pillar copy
- Careers benefits
- Resource links
- Privacy policy-related highlights

This data-driven structure reduces copy duplication and keeps navigation and contact details aligned across header, footer, and page sections.

## Forms and API Behavior

### Contact Form

The contact form in `src/components/contact-form.tsx` collects:

- Full name
- Address
- Email
- Phone
- Message
- Privacy consent

Submission sends a JSON payload to `/api/contact`. The API currently performs simple required-field validation and returns a success message. It does not yet integrate with email, CRM, or a database.

### Careers Application Form

The careers page includes a polished application flow with:

- Name
- Position selection
- Email
- Phone
- Resume upload input
- Cover note
- Privacy acknowledgement

At present, the submission handler simulates success after a short delay. It is a front-end prototype for the applicant experience rather than a full intake system.

## Design System

The site uses a clear blue/orange/white brand palette defined in `src/app/globals.css`.

Core visual traits include:

- Blue as the primary trust color
- Orange as the accent and warmth color
- Deep ink/navy for headings and dark UI sections
- White and soft neutral surfaces for readability
- Offset card shadows and framed images for depth
- Large rounded corners on content cards and media panels

The CSS file also defines:

- Theme variables for color tokens
- Brand shadow utility
- Decorative radial background shapes
- Smooth scrolling
- Selection styling

The overall visual language is intentionally premium and editorial rather than generic corporate boilerplate.

## Route and Navigation Notes

The navigation is mostly data-driven through `src/data/site-content.ts`, but there are a few implementation caveats worth knowing:

- The Payment item in the navigation points to an external PayPal payment page rather than an internal `/payment` route.
- The Careers submenu contains an external Jotform link for pre-hire intake.
- The Contact Us submenu includes a Blog link to `/blog`, but there is no blog route implemented in the repository.
- The footer and contact form reference privacy policy links, including `/privacy-policy` and `/privacy-policy.pdf`; those assets or routes are not present in the current workspace.

These are not build blockers, but they are important for keeping documentation and implementation aligned.

## Metadata and PWA Support

The project includes:

- Root metadata in `src/app/layout.tsx`
- A web app manifest in `src/app/manifest.ts`
- Favicon/icon references to the footer logo asset

This gives the site a more complete browser and mobile app presentation.

## Project Structure

```text
src/
    app/
        layout.tsx
        manifest.ts
        globals.css
        page.tsx
        about-us/page.tsx
        about-owner/page.tsx
        careers/page.tsx
        contact-us/page.tsx
        resources/page.tsx
        services/page.tsx
        services/personal-care/page.tsx
        services/companionship/page.tsx
        services/light-housekeeping/page.tsx
        services/meal-preparation/page.tsx
        services/medication-reminders/page.tsx
        services/respite-care/page.tsx
        services/specialized-support/page.tsx
        services/transportation/page.tsx
        api/contact/route.ts
    components/
        contact-form.tsx
        scroll-reveal.tsx
        site-nav.tsx
        site-shell.tsx
    data/
        site-content.ts
public/
    ...static images, logos, and downloadable assets
```

## Local Development

Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:3000` by default.

## Validation Commands

Use the following commands to validate the project:

```bash
npm run lint
npm run build
```

`npm run build` is the main production verification command for this workspace.

## Deployment

The site is well suited to Vercel deployment because it is a standard Next.js App Router project.

Typical deployment steps:

1. Push the repository to your Git provider.
2. Import the project into Vercel.
3. Confirm build and environment settings.
4. Deploy.

If contact, scheduling, or hiring flows are extended beyond the current front-end implementation, add the necessary environment variables and backend integrations before production use.

## Current Implementation Summary

This project is already a fully formed marketing website with a shared shell, a route-driven content architecture, and multiple service-specific landing pages. The strongest implementation patterns are the data-driven navigation/content layer, the reusable hero and section primitives, the scroll reveal animation, and the consistent visual system that carries across the entire site.

The main gaps are not structural but operational: the contact route is minimal by design, the careers submission is simulated, and a few navigation/footer links point to routes or assets that are not yet present. Those are straightforward follow-up items if you want the documentation to match a more complete production rollout.
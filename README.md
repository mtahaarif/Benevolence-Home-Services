# Benevolence Home Services: Architecture & Implementation Documentation

Benevolence Home Services is a premium, statically generated Next.js App Router web application designed for a nurse-led, non-medical home care agency based in Westchester, Illinois. 

The codebase completely bypasses traditional CMS bloat (like WordPress or Contentful) in favor of a lightning-fast **Local Data Engine** architecture. It is heavily optimized for Core Web Vitals, rich localized SEO, and high-conversion user journeys. The overall visual language is intentionally premium and editorial, leaning on frosted glass aesthetics, deep typography contrasts, and fluid scroll-reveal animations.

This repository is designed as a "living document" and modular workspace. Features are compartmentalized so that future developers can simply append new endpoints, components, or data engines without rewriting core architecture.

---

## Table of Contents

1. [Tech Stack & Tooling](#1-tech-stack--tooling)
2. [Core Architecture: The Zero-CMS Approach](#2-core-architecture-the-zero-cms-approach)
3. [Information Architecture & Routing](#3-information-architecture--routing)
4. [Feature Deep-Dive: Page by Page Documentation](#4-feature-deep-dive-page-by-page-documentation)
5. [The Smart Content Parser Engine](#5-the-smart-content-parser-engine)
6. [Shared UI Component System](#6-shared-ui-component-system)
7. [SEO & Schema Generation Strategy](#7-seo--schema-generation-strategy)
8. [Forms & API Architecture](#8-forms--api-architecture)
9. [Design System & Theming](#9-design-system--theming)
10. [Project File Structure](#10-project-file-structure)
11. [Developer Guide: How to Append New Features](#11-developer-guide-how-to-append-new-features)
12. [Implementation Log (Changelog)](#12-implementation-log-changelog)

---

## 1. Tech Stack & Tooling

The application leverages the absolute latest in React and Next.js paradigms to guarantee instant hydration and unparalleled server-side rendering (SSR) speeds.

* **Framework:** Next.js 16.2.10 (App Router Paradigm utilizing Turbopack)
* **UI Library:** React 19.2.4
* **Language:** TypeScript 5 (Strict Mode enforced across all components and data models)
* **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
* **Linting:** ESLint 9 (with `eslint-config-next`)
* **Animation:** Native Web APIs (`IntersectionObserver`) combined with standard Tailwind transition utilities for zero-dependency overhead.
* **Fonts:** `next/font/google` for optimized, layout-shift-free loading of brand typography.
---

## 2. Core Architecture: The Zero-CMS Approach

To ensure perfect Lighthouse scores, instantaneous page transitions, and zero recurring database costs, this application utilizes **Local Data Engines**. 

Instead of fetching data from SQL, WordPress, or external GraphQL endpoints at runtime, content is structured in strongly typed TypeScript arrays directly within the repository. Next.js uses `generateStaticParams` to map over these arrays at build time, pre-rendering every single service, area, and blog post into raw static HTML.

### Active Data Engines:
* **`src/data/site-content.ts`**: Global brand data, primary navigation links, footer maps, contact info, and generalized homepage copy.
* **`src/data/services.ts`**: The schema driving all dynamically generated service pages. Includes icons, checklists, and dynamic service URLs.
* **`src/data/blogs.ts`**: The 30+ article repository migrated from legacy WordPress. Contains localized meta descriptions, raw paragraph arrays, and OpenGraph image paths.
* **`src/data/areas.ts`**: Geolocation data mapping specific zip codes, high-value keywords, and descriptions for local SEO rendering.
---

## 3. Information Architecture & Routing

The application utilizes Next.js App Router conventions. Every public URL maps to an intent-driven user journey, categorized into static marketing routes and dynamic data-driven templates.

### Static Marketing Routes
* `/` - Homepage (Brand introduction, value propositions, and core conversions)
* `/about-us` - Agency mission, vision, and dignity-centered care philosophy
* `/about-owner` - Founder biography (Katrina Turman) and community trust-building
* `/careers` - Caregiver recruitment portal and client-side application form
* `/resources` - External learning and healthcare resource directory
* `/contact-us` - Primary conversion page with structured form and interactive Google Maps embed
### Dynamic Data-Driven Routes
* `/services` - Master grid directory of all available care services.
* `/services/[slug]` - Dynamic template generating distinct service pages based on local data.
* `/blog` - Category-filterable journal directory (The Benevolence Care Journal).
* `/blog/[slug]` - Dynamic editorial viewer utilizing the custom Smart Content Parser.
* `/areas-we-serve` - Local SEO directory with scrollspy functionality mapping targeted communities.
### Backend API Routes
* `POST /api/contact` - Serverless function to validate and accept secure form submissions.
* ## 4. Feature Deep-Dive: Page by Page Documentation

The application replaces generic corporate boilerplate with highly intentional, conversion-focused user journeys. Every route has a specific business purpose.

### 4.1. Homepage (`/`)
The homepage is a long-form brand and conversion page designed for trust-building and route discovery.
* **Cinematic Hero:** Features rotating background imagery crossfading on a timed interval, strong eyebrow copy, and dual conversion actions (Consultation & Explore).
* **SaaS Feature Matrix:** A distinct, visually elevated comparison table contrasting "Nurse-Led Care" against "Traditional Home Care" to establish immediate market differentiation.
* **Accordion FAQ:** A faith-and-care narrative section hidden behind interactive, accessible disclosure widgets to keep the layout clean while preserving deep text for SEO.
* **Highlight Grids:** Three compact CTA cards driving users to eligibility checks, referrals, and assessment scheduling.
* **Mission Statement Footer:** A final anchored section with a deep background image and centered typography reinforcing the agency's core ethos.

### 4.2. Master Services Index (`/services`)
This is the main service hub. It renders a responsive grid of service cards backed by the `src/data/services.ts` data array. Each card deep-links to its respective dynamic slug. Includes a dedicated hero banner and a closing consultation CTA.

### 4.3. Dynamic Services Template (`/services/[slug]`)
Replaced legacy hardcoded pages with a single `ServiceTemplate.tsx`. This enforces a strict, premium layout standard for every service:
1.  **Dynamic Hero Banner** specific to the service parameters.
2.  **Narrative Service Overview** detailing the specific care approach.
3.  **Scope of Service Checklist** (Rendered as elevated UI cards with custom icons).
4.  **Expectations/Benefits Grid** highlighting specific patient outcomes.
5.  **Service-Specific FAQ Accordion** for long-tail keyword capture.
6.  **Persistent Bottom Conversion CTA**.

### 4.4. Areas We Serve (`/areas-we-serve`)
Engineered specifically for Local SEO dominance across 23 municipalities in DuPage, Cook, Will, and Lake counties.
* **IntersectionObserver Scrollspy:** A sticky left-hand sidebar that tracks the user's scroll position, automatically highlighting the region currently visible in the viewport.
* **Geographic Data Engine:** Driven by an array containing zip codes and localized descriptions.
* **Knowledge Panel Injection:** Generates hidden Schema.org data for local tracking.

### 4.5. Blog Directory (`/blog`)
A premium "Resource Library" designed to hold 30+ legacy articles migrated from WordPress while preserving historical backlink equity.
* **Zero-Latency Category Filters:** Client-side React state instantly filters the grid between taxonomy tags (e.g., "Memory Support", "Safety & Wellness") without triggering slow server requests.
* **Frosted Glass Cards:** Glassmorphic UI containers with integrated thumbnail images, smooth zoom hover states, dynamic read times, and an optimized 2-3 tag keyword matrix footprint.

### 4.6. Dynamic Blog Viewer (`/blog/[slug]`)
A highly advanced dynamic route that catches any article slug, pre-compiles it via `generateStaticParams`, and renders it using a custom **Smart Content Parser** (detailed in Section 5). 
*Note: Due to Next.js 16+ Turbopack standards, the `params` prop is handled asynchronously (`await params`) before looking up the target post.*

### 4.7. Careers (`/careers`)
Built to attract premium caregivers and medical professionals.
* **Hero Section:** Focused on purpose-driven work and agency culture.
* **Value Proposition:** "What You Can Expect" grid outlining benefits and support.
* **Application Flow:** A client-side form collecting Name, Position, Email, Phone, Resume upload intent, and a Cover Note. Currently simulates a success state for frontend prototyping.

### 4.8. Contact Us (`/contact-us`)
* **Hero Section:** Consultation and direct-call actions.
* **Structured Form:** Collects detailed intake data with a required Privacy agreement checkbox gating submission.
* **Google Maps:** Embedded iframe for the Westchester corporate office location.

### 4.9. Resources (`/resources`)
A curated link directory to public organizations relevant to healthcare, recruitment, and home care learning. Intentionally lightweight to function as a trust and outbound SEO support page.
---

## 5. The Smart Content Parser Engine

The crowning technical feature of the `blog/[slug]` route. Instead of using complex WYSIWYG editors, vulnerable `dangerouslySetInnerHTML` blocks, or heavy Markdown libraries for content bodies, the application utilizes a custom **Smart Content Parser**.

The engine iterates over raw string arrays from `src/data/blogs.ts` and automatically injects premium editorial HTML/Tailwind styling based purely on string syntax recognition:

* **The Editorial Drop-Cap:** The engine evaluates `index === 0`. The first paragraph of any blog post automatically receives a large, blue, floating editorial drop-cap using Tailwind's `first-letter:` utility.
* **Standalone Subheadings:** If a short string (under 80 characters) ends with a colon (`:`), the engine strips the colon and generates a large `h3` heading flanked by an elegant vertical blue accent bar.
* **Elevated Feature Cards (Lists):** If a string begins with a bullet (`•`, `-`) or a number (`1.`), it extracts the content into a floating glass-morphic feature card. Numbers are centered in a circular badge; bullets become premium SVG checkmarks.
* **Blockquote Highlights:** If a paragraph starts with an inline title followed by a colon (e.g., "Create a Care Plan: ..."), the parser extracts the title, boldens it, and wraps the entire paragraph in an offset blockquote layout with a thick left border.
* **Disclaimer Alerts:** Any paragraph starting with "Disclaimer:" is intercepted and wrapped in a muted, gray professional alert box accompanied by an SVG information icon.
---

## 6. Shared UI Component System

Located in `src/components/`, these modular UI primitives are heavily reused across the architecture to ensure perfect design consistency.

* **`SiteChrome`**: The master layout wrapper establishing the sticky `SiteNav`, the main `<main>` content slot, and the `SiteFooter`.
* **`SiteNav`**: Provides the sticky top navigation, mobile hamburger menu toggle, active route highlighting, and transparent dropdown submenus.
* **`SiteFooter`**: Displays contact information, quick links, social links, and a branded logo panel.
* **`HeroSection`**: A hyper-flexible banner component. Accepts props for eyebrows, titles, descriptions, primary/secondary buttons. Supports array-based background images that auto-rotate on a timed interval.
* **`PageShell`**: Standardizes maximum widths and horizontal padding (`max-w-6xl mx-auto`) for core content blocks.
* **`SectionHeading`**: Enforces strict typography hierarchy for H2s and sub-descriptions.
* **`ScrollReveal`**: A wrapper component utilizing the native Web API `IntersectionObserver`. Elements wrapped in `<ScrollReveal>` transition into view (opacity fade-in, slight upward translation) as they cross the viewport threshold.
---

## 7. SEO & Schema Generation Strategy

The application is built to maximize Google Search visibility, specifically engineered to safely transfer and elevate legacy authority from the previous WordPress domain.

* **`generateStaticParams()`:** Triggers exclusively at build time. Tells Next.js exactly which dynamic URLs exist (e.g., `/blog/preventing-falls`, `/services/personal-care`) so they are compiled as lightning-fast, cacheable flat HTML.
* **`generateMetadata()`:** Intercepts route parameters before page load to construct dedicated `<head>` tags. Injects custom `metaTitle`, `metaDescription`, localized `keywords`, and OpenGraph images directly from the local data engines. Handles `Promise`-based params per Next.js 16 requirements.
* **Automated JSON-LD Schema:** Structured data is dynamically generated via `<script type="application/ld+json">` on core routes to trigger Google Rich Snippets:
    * *Blogs:* Generates `BlogPosting` schema dictating Authorship, `datePublished`, and absolute Image Maps.
    * *Areas We Serve:* Generates `HomeAndConstructionBusiness` schema combined with `areaServed` objects referencing official geographic Wikipedia entity URLs.

## 8. Forms & API Architecture

The application adopts a hybrid approach to form handling and data collection, combining lightweight internal serverless APIs with robust, battle-tested external platforms.

### 8.1. External Tooling Connections
To reduce security liabilities and backend maintenance, highly complex workflows are offloaded to specialized external providers:
* **Payments:** The primary navigation and select service footers route directly to an external PayPal processing link.
* **Scheduling:** The contact page embeds links to an external Calendly widget for real-time assessment bookings.
* **Applicant Intake:** The Careers page sub-navigation routes to an external Jotform for official pre-hire intake, HIPAA-compliant document uploads, and HR routing.

### 8.2. Internal Serverless API: `POST /api/contact`
A Next.js App Router serverless route handler (`src/app/api/contact/route.ts`) that receives JSON payloads from the frontend contact form. 
# Benevolence Home Services

Benevolence Home Services is a Next.js App Router website for a nurse-led home care and staffing agency based in Westchester, Illinois. The project is built as a fast, mostly static marketing site with local content stored in the repository, route-specific metadata, and a small serverless contact workflow.

The codebase focuses on clarity, trust, and conversion. The homepage introduces the agency, service pages describe each care offering in detail, the blog provides educational content for families, and the contact flow ties everything back to consultation booking and inquiry handling.

## What This Project Does

- Presents the agency, its mission, and its owner profile.
- Explains the care services offered across Westchester and the surrounding Chicagoland counties.
- Publishes educational blog content with category filtering and article pages.
- Provides a local SEO page for service areas.
- Collects inquiry submissions through a contact form and API route.
- Routes users to external tools for payment, scheduling, and hiring intake.

## Tech Stack

- Next.js 16.2.10 with the App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Google Tag Manager integration via `@next/third-parties`
- Email delivery via Resend
- Google Sheets logging via `google-spreadsheet` and `google-auth-library`
- Icons from `react-icons`

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, fonts, SiteChrome, GTM
│   ├── template.tsx            # Global fade-in transition wrapper
│   ├── globals.css             # Tailwind theme tokens and base styling
│   ├── page.tsx                # Home page
│   ├── about-us/page.tsx       # Agency overview
│   ├── about-owner/page.tsx    # Owner bio page
│   ├── areas-we-serve/page.tsx # Scrollspy-based service area page
│   ├── blog/page.tsx           # Blog index with category filters
│   ├── blog/[slug]/page.tsx    # Static blog post pages
│   ├── careers/page.tsx        # Careers page with hiring call-to-action
│   ├── contact-us/page.tsx     # Contact page and intake form
│   ├── privacy-policy/page.tsx  # Privacy policy page
│   ├── resources/page.tsx      # External resource directory
│   ├── services/page.tsx       # Services overview grid
│   ├── services/*/page.tsx     # Individual service pages
│   └── api/contact/route.ts    # Contact form API endpoint
├── components/
│   ├── contact-form.tsx        # Client-side contact form
│   ├── scroll-reveal.tsx       # IntersectionObserver animation wrapper
│   ├── site-nav.tsx            # Sticky navigation with submenus
│   └── site-shell.tsx          # Shared layout and content primitives
└── data/
  ├── site-content.ts        # Navigation, brand copy, contact details
  └── blogs.ts               # Blog post data and article metadata

public/
├── robots.txt
├── sitemap.xml
├── manifest.json
├── contact.php
└── static image and logo assets
```

## Routes

### Public Pages

- `/` - Homepage
- `/about-us` - Agency overview, mission, vision, and care philosophy
- `/about-owner` - Owner biography and leadership story
- `/services` - Service listing and overview
- `/services/personal-care` - Personal care details
- `/services/companionship` - Companionship details
- `/services/meal-preparation` - Meal preparation and nutrition details
- `/services/light-housekeeping` - Housekeeping support details
- `/services/medication-reminders` - Medication reminder support details
- `/services/respite-care` - Respite care details
- `/services/transportation` - Transportation support details
- `/services/specialized-support` - Specialized support details
- `/areas-we-serve` - Local coverage and city-by-city support page
- `/careers` - Hiring and caregiver recruiting page
- `/resources` - Curated external resource directory
- `/contact-us` - Contact and consultation page
- `/privacy-policy` - Privacy policy and data handling notice
- `/blog` - Blog index with category filters
- `/blog/[slug]` - Individual blog articles

### API Route

- `POST /api/contact` - Validates contact submissions, optionally appends them to Google Sheets, and sends email notifications through Resend

### External Links

- Payment is handled through PayPal.
- Scheduling is handled through Calendly.
- Hiring intake is handled through Jotform.

## Architecture Overview

This site uses local TypeScript data instead of a CMS or database for most content. That keeps the project simple to deploy, fast to render, and easy to maintain.

- `src/data/site-content.ts` stores brand copy, navigation items, contact details, social links, service highlights, and privacy summary content.
- `src/data/blogs.ts` stores the blog post catalog, including metadata and paragraph arrays.
- `src/app/blog/[slug]/page.tsx` uses `generateStaticParams()` and `generateMetadata()` so blog posts are prebuilt and fully SEO-aware.
- `src/components/site-shell.tsx` provides the shared page framework used throughout the site, including the main shell, hero component, section heading component, content cards, and footer.
- `src/components/scroll-reveal.tsx` adds lightweight reveal-on-scroll animation using `IntersectionObserver`.
- `src/app/api/contact/route.ts` handles the contact form submission workflow.

## Shared UI System

The app is built around a small set of reusable components:

- `SiteChrome` renders the navigation, main content slot, and footer.
- `SiteNav` provides the sticky top navigation, mobile toggle, and submenu behavior.
- `HeroSection` powers the top-of-page hero banners and supports one or more background images.
- `PageShell` standardizes page width and horizontal spacing.
- `SectionHeading` keeps section titles visually consistent.
- `InfoCard`, `BulletPanel`, and `SectionCard` provide reusable content blocks.
- `ContactForm` collects and submits the contact inquiry data.

## Design System

The visual language is defined in `src/app/globals.css` and uses Tailwind theme variables.

- Brand blue: `#1168b3`
- Brand orange: `#f5aa41`
- Brand gold: `#f8c967`
- Brand ink: `#0f2f59`
- Background: white with soft surface overlays
- Typography: Quicksand, loaded through `next/font/google`
- Layout style: clean cards, soft shadows, rounded corners, and restrained motion

The site is intentionally consistent with a blue, orange, and white brand palette, and the navbar and footer are styled to stay squared and minimal rather than heavily ornamented.

## Contact Workflow

The contact form in `src/components/contact-form.tsx` sends JSON to `POST /api/contact` with:

- Name
- Email
- Phone
- Subject
- Message
- Privacy consent

The API route performs validation, rejects oversized or malformed input, and includes a honeypot field named `company` to reduce bot submissions. When the required environment variables are present, the submission is:

- sent by email through Resend
- optionally appended to the first sheet in Google Sheets

### Required Environment Variables

The contact API expects these variables when email delivery and sheet logging are enabled:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `GOOGLE_SHEET_ID`
- `GOOGLE_SHEET_URL`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`

If the Google Sheets variables are missing, the app skips the spreadsheet append and still continues with the rest of the workflow.

## SEO and Metadata

The project uses route-level metadata heavily.

- The root layout defines the base metadata, canonical root, Open Graph defaults, and icons.
- Major pages define their own title, description, keywords, and canonical URL.
- The blog post pages generate per-article metadata from the local blog data.
- Structured data is injected on selected pages with JSON-LD.
- `next.config.js` adds security headers and redirects legacy `index.html` and `index.php` URLs to the homepage.

## Routing Notes

- Blog posts are fully generated from `src/data/blogs.ts`.
- Service detail pages are implemented as individual routes under `src/app/services/` rather than one shared dynamic template.
- The site includes `/privacy-policy`, `/about-owner`, and `/areas-we-serve` in addition to the core marketing routes.
- The navbar also exposes a blog link, a payment link, and an external career intake link.

## Local Server

The repository includes `server.js`, a lightweight custom Node server that hands requests to Next.js. Standard development and production scripts still use the normal Next.js commands, but the file is available if you need a self-hosted entrypoint.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Setup

1. Install dependencies with `npm install`.
2. Copy your required environment variables into your local environment.
3. Run `npm run dev` for development.
4. Run `npm run build` before shipping changes.

## Content Maintenance Guidelines

- Add shared copy and navigation updates in `src/data/site-content.ts`.
- Add or edit blog content in `src/data/blogs.ts`.
- Keep page-specific metadata close to the page implementation.
- Prefer shared components from `src/components/site-shell.tsx` instead of duplicating layout patterns.
- Preserve the existing blue, orange, and white visual system when adding new pages.

## Public Assets

The `public/` directory contains the site-wide static assets, including the logo, thumbnails, hero images, manifest, robots file, sitemap, and a legacy `contact.php` file retained in the repository.

## Validation

The project is expected to pass:

- `npm run build`
- `npm run lint`

If you change routing, metadata, or contact handling, build the project before considering the update complete.

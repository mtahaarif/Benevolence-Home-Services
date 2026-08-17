# Benevolence Home Services & Staffing Agency - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Services](#core-services)
5. [Pages & Routes Documentation](#pages--routes-documentation)
6. [Components Documentation](#components-documentation)
7. [Data & Configuration](#data--configuration)
8. [API Routes & Backend](#api-routes--backend)
9. [Environment Variables](#environment-variables)
10. [Getting Started](#getting-started)
11. [Build & Deployment](#build--deployment)
12. [Features & Functionality](#features--functionality)
13. [SEO & Performance](#seo--performance)
14. [Contact & Support](#contact--support)

----

## Project Overview

**Benevolence Home Services and Staffing Agency** is a modern, nurse-led home care and staffing solutions website built with Next.js 16. The platform serves residents across Westchester, Illinois, and surrounding areas (Cook, DuPage, Lake, and Will counties) in the Chicagoland region.

### Key Characteristics:
- **Nurse-Led Approach**: Care guided by Registered Nurses with clinical judgment and professional oversight
- **Faith-Based Foundation**: Compassionate, values-driven care delivery
- **Comprehensive Services**: Personal care, companionship, meal preparation, light housekeeping, medication reminders, respite care, specialized support, and transportation
- **Geographic Focus**: Serves Westchester, IL with coverage across five Chicagoland counties
- **Modern Technology**: Next.js App Router, TypeScript, Tailwind CSS 4, React 19

### Brand Identity:
- **Color Palette**: Blue (#0c3e72), Orange, and White
- **Design Philosophy**: Squared, borderless navbar and footer styling with minimalist elegance
- **Typography**: Quicksand font (Google Fonts)
- **Tone**: Professional, compassionate, trustworthy

---

## Technology Stack

### Frontend & Framework
- **Next.js 16.2.10** - Modern React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS processing

### Styling & UI
- **Tailwind CSS with PostCSS** - Advanced CSS utilities
- **React Icons 5.7.0** - Icon library (Font Awesome, Feather, etc.)
- **Custom CSS Animations** - ScrollReveal effects and transitions
- **Image Optimization** - Next.js native Image component with lazy loading

### Backend & APIs
- **Node.js Server** - Custom HTTP server (server.js)
- **Resend 6.18.1** - Email delivery service
- **Google Sheets API** - Database for form submissions
- **Nodemailer 9.0.3** - Email templates and SMTP
- **Google Auth Library** - JWT authentication for Google services

### Third-Party Integration
- **Google Maps** - Embedded maps
- **Google Fonts** - Custom typography (Quicksand)
- **Google Tag Manager** - Analytics tracking
- **Calendly** - Scheduling integration
- **JotForm** - Pre-hire forms
- **PayPal** - Payment processing
- **Social Media APIs** - Instagram, Facebook, LinkedIn, YouTube, TikTok

### Database & Data Management
- **Google Spreadsheets** - CMS for contact submissions
- **MySQL2 3.23.1** - Optional database support
- **Data Files** - TypeScript data objects for content management

### Development Tools
- **ESLint 9** - Code linting
- **Node 20+** - Runtime environment
- **npm** - Package manager

---

## Project Structure

```
benevolencehomeservices/
├── public/                          # Static assets
│   ├── footer-logo.png             # Brand logo
│   ├── manifest.json               # PWA manifest
│   ├── robots.txt                  # SEO robots configuration
│   ├── sitemap.xml                 # XML sitemap
│   └── contact.php                 # Legacy contact handling
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout with SEO metadata
│   │   ├── page.tsx                # Home page
│   │   ├── template.tsx            # Page template wrapper
│   │   │
│   │   ├── about-us/               # About Us page route
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── faq-section.tsx     # FAQ component for About page
│   │   │
│   │   ├── about-owner/            # About Owner bio page
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── areas-we-serve/         # Service areas map
│   │   │   └── page.tsx
│   │   │
│   │   ├── services/               # Main services hub
│   │   │   ├── page.tsx            # Services overview
│   │   │   ├── companionship/      # Service detail routes
│   │   │   ├── light-housekeeping/
│   │   │   ├── meal-preparation/
│   │   │   ├── medication-reminders/
│   │   │   ├── personal-care/
│   │   │   ├── respite-care/
│   │   │   ├── specialized-support/
│   │   │   └── transportation/
│   │   │
│   │   ├── careers/                # Jobs & recruitment
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── resources/              # Educational resources
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact-us/             # Contact form page
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/                   # Blog system
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/             # Dynamic blog post routes
│   │   │       └── page.tsx
│   │   │
│   │   ├── privacy-policy/         # Legal documentation
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                    # API routes
│   │       └── contact/            # Contact form submission API
│   │           └── route.ts        # POST endpoint for form handling
│   │
│   ├── components/                 # Reusable React components
│   │   ├── site-shell.tsx          # Main layout wrapper
│   │   │                           # Exports: PageShell, SiteChrome, SectionHeading, HeroSection, SiteFooter
│   │   │
│   │   ├── site-nav.tsx            # Navigation bar component
│   │   │                           # Features: Mobile menu, dropdowns, brand mark
│   │   │
│   │   ├── contact-form.tsx        # Contact form component
│   │   │                           # Fields: Name, Email, Phone, Subject, Content
│   │   │
│   │   └── scroll-reveal.tsx       # Scroll animation component
│   │                               # Animates elements on scroll
│   │
│   └── data/                       # Data files and constants
│       ├── site-content.ts         # All site content, navigation, metadata
│       │                           # Exports: brand, navItems, contactDetails, socialLinks,
│       │                           #          homeHighlights, nurseLedBenefits, etc.
│       │
│       └── blogs.ts                # Blog posts data
│                                   # Exports: BlogPost interface, blogPosts array
│
├── Configuration Files
│   ├── package.json                # Dependencies and scripts
│   ├── tsconfig.json               # TypeScript configuration
│   ├── next.config.js              # Next.js configuration with security headers
│   ├── tailwind.config.mjs          # Tailwind CSS configuration
│   ├── postcss.config.mjs           # PostCSS configuration
│   ├── eslint.config.mjs            # ESLint rules
│   ├── .gitignore                  # Git ignore patterns
│   │
├── next-env.d.ts                   # Next.js type definitions
├── server.js                        # Custom Node.js HTTP server
├── AGENTS.md                        # Next.js agent rules documentation
├── CLAUDE.md                        # Reference to AGENTS.md
├── README.md                        # Original project README
└── README_DETAILED.md               # This comprehensive documentation
```

---

## Core Services

Benevolence Home Services offers eight primary service categories:

### 1. **Personal Care** (`/services/personal-care`)
- Mobility support and safe transfers
- Assistance with activities of daily living (ADL)
- Bathing, dressing, grooming support
- Positioning and comfort assistance
- Post-operative recovery support

### 2. **Companionship** (`/services/companionship`)
- Engaging conversations and emotional support
- Shared activities and entertainment
- Combating loneliness and isolation
- Social engagement programs
- Memory-focused activities

### 3. **Meal Preparation & Nutrition** (`/services/meal-preparation`)
- Nutritious meal planning and preparation
- Dietary preference accommodation
- Special diet management (diabetic, low-sodium, etc.)
- Grocery shopping coordination
- Kitchen organization and cleanup

### 4. **Light Housekeeping** (`/services/light-housekeeping`)
- General tidying and organization
- Laundry and linen management
- Kitchen cleaning
- Bathroom maintenance
- Trash management

### 5. **Medication Reminders** (`/services/medication-reminders`)
- Prescription management support
- Medication schedule adherence
- Reminder systems and tracking
- Coordination with healthcare providers
- Documentation of medication taken

### 6. **Respite Care** (`/services/respite-care`)
- Short-term care relief for family caregivers
- Emergency backup care
- Planned respite periods
- Support during caregiver absence
- Continuity of care planning

### 7. **Specialized Support** (`/services/specialized-support`)
- Dementia and Alzheimer's care
- Parkinson's disease support
- Post-stroke recovery assistance
- Chronic illness management
- Behavioral support

### 8. **Transportation Services** (`/services/transportation`)
- Medical appointment transportation
- Errands and shopping trips
- Social activity transportation
- Safe mobility assistance
- Companion transport

---

## Pages & Routes Documentation

### **Home Page** (`/` - `src/app/page.tsx`)

**Purpose**: Landing page showcasing company value proposition and services overview

**Key Sections**:
- **Hero Section**: "Nurse-Led Senior Care Excellence"
  - Primary CTA: "Schedule a Consultation"
  - Secondary CTA: "Explore Our Services"
  - Animated image slider with auto-advance (5-second intervals)
  - Facts display: Service coverage details

- **Service Highlights**: Featured 4-service overview
  - Companionship
  - Personal Care
  - Medication Reminders
  - View More Services CTA

- **Nurse-Led Benefits Comparison**: Two-column matrix
  - Benevolence advantages vs. Traditional care approaches
  - Covers: Care oversight, decision framework, plan flexibility, decline monitoring, caregiver oversight, family support, core approach

- **Accordion FAQ Section**: Expandable Q&A
  - Interactive toggle functionality
  - Addressing common questions about services
  - Professional and educational tone

- **Social Proof Section**: Testimonials or statistics
- **Call-to-Action Sections**: Multiple conversion opportunities throughout

**Technology**:
- Client-side component with `useState` for accordion management
- ScrollReveal animations on scroll
- Responsive grid layouts
- Tailwind CSS utilities for spacing and typography

---

### **About Us Page** (`/about-us` - `src/app/about-us/page.tsx`)

**Purpose**: Detailed company mission, values, and nursing leadership story

**Key Sections**:
- **Company Mission & Vision**: Core purpose statement
- **Nursing Leadership Philosophy**: Explanation of nurse-led care model
- **Quality Standards**: Care delivery guarantees
- **Service Coverage Areas**: Geographic service territory
- **Team Introduction**: Staff expertise highlights
- **FAQ Section** (`faq-section.tsx`): Expandable questions
  - About services
  - Insurance and payment
  - Scheduling and availability
  - Quality assurance

**Key Messages**:
- "Care guided by Registered Nurses with clinical judgment"
- Emphasis on dignity, compassion, and purpose
- Faith-based values commitment
- Professional accountability and training

---

### **About Owner Page** (`/about-owner` - `src/app/about-owner/page.tsx`)

**Purpose**: Personal biography and mission story of founder/owner

**Content**:
- Owner background and professional journey
- Motivation for founding Benevolence
- Personal philosophy on senior care
- Commitment to quality and compassion
- Professional credentials and experience

**Tone**: Personal, inspiring, trustworthy

---

### **Services Hub Page** (`/services` - `src/app/services/page.tsx`)

**Purpose**: Overview and navigation to all eight service lines

**Structure**:
- Service grid layout (8 cards or tiles)
- Each service card includes:
  - Service name
  - Brief description
  - Link to detailed service page
  - Icon or image
  - Key benefits preview

**Key Features**:
- Searchable/filterable service listing
- Service comparison capability
- Links to detailed service pages
- Contact CTA for inquiries

---

### **Individual Service Pages** (`/services/[service-name]/`)

**Routes**:
1. `/services/personal-care/`
2. `/services/companionship/`
3. `/services/meal-preparation/`
4. `/services/light-housekeeping/`
5. `/services/medication-reminders/`
6. `/services/respite-care/`
7. `/services/specialized-support/`
8. `/services/transportation/`

**Common Structure for Each Service Page**:
- **Hero Section**: Service name and key benefit statement
- **Service Overview**: Detailed description and use cases
- **Who Benefits**: Target audience for this service
- **Service Details**: What's included, care approach
- **Benefits List**: Advantages and outcomes
- **Process/Workflow**: How the service is delivered
- **Pricing Information**: (if applicable)
- **Real-World Scenarios**: Use cases and success stories
- **Testimonials**: Client feedback (if available)
- **CTA Section**: "Schedule Consultation" button
- **Related Services**: Cross-service promotion

**Technology**:
- Dynamic routing with `[service-name]` parameter
- Consistent layout structure via `layout.tsx`
- Data-driven content from centralized source
- SEO metadata per service page

---

### **Areas We Serve Page** (`/areas-we-serve` - `src/app/areas-we-serve/page.tsx`)

**Purpose**: Geographic service territory visualization

**Content**:
- **Service Map**: Embedded Google Map showing coverage areas
- **Served Counties**: 
  - Cook County
  - DuPage County
  - Lake County
  - Will County
- **Specific Cities**: Westchester (headquarters), Aurora, Naperville, Oak Park, etc.
- **Service Availability**: Hours and response times
- **Availability Check**: Zip code search tool
- **Contact for Service**: Button to contact for out-of-area inquiries

**Features**:
- Interactive map with county/city boundaries
- Zoom and pan capability
- Address search functionality
- Service availability calculator
- Exception service area list

---

### **Careers Page** (`/careers` - `src/app/careers/page.tsx`)

**Purpose**: Recruitment and job opportunity promotion

**Key Sections**:
- **Career Opportunities**: Open position listings
  - Caregiver positions
  - Nurse positions
  - Administrative roles
- **Why Work Here**: Company culture and benefits
  - Competitive compensation
  - Professional development
  - Supportive team environment
  - Meaningful work
  - Flexible scheduling
- **Application Process**: Step-by-step guide
- **Pre-Hire Form Link**: External JotForm integration
  - Links to: `https://www.jotform.com/app/223625216444452`
  - Opens in new tab

**Sections**:
- Job descriptions for different roles
- Required qualifications
- Benefits package details
- Company culture highlights
- Testimonials from current employees
- Application instructions

---

### **Resources Page** (`/resources` - `src/app/resources/page.tsx`)

**Purpose**: Educational materials and helpful information

**Content Categories**:
- **Senior Care Guides**: PDF or article links
- **Health Tips**: Wellness information
- **Caregiver Support**: Resources for family caregivers
- **Insurance Information**: Medicare, Medicaid, insurance coverage options
- **Community Resources**: Local support services
- **Blog Links**: Connection to blog posts
- **Downloadable Materials**: Checklists, guides, forms
- **External Links**: Government resources, medical associations

**Key Resources**:
- Dementia care guides
- Post-hospital recovery checklists
- Medication management tools
- Nutrition guides for seniors
- Safety assessment forms
- Financial planning information

---

### **Contact Us Page** (`/contact-us` - `src/app/contact-us/page.tsx`)

**Purpose**: Primary contact and lead generation

**Key Sections**:
- **Contact Form**: (`ContactForm` component)
  - Fields:
    - **Name** (required, max 150 chars)
    - **Email** (required, must be valid, max 150 chars)
    - **Phone** (required, max 150 chars)
    - **Subject** (required, max 150 chars)
    - **Message/Content** (required, max 3000 chars)
    - **Honeypot Field**: "company" (hidden from users, spam detection)
    - **Privacy Policy Checkbox** (required)
  - Submit button with loading state
  - Success/error messaging

- **Direct Contact Information**:
  - Phone: 708-304-0296
  - Email: info@benevolencehomeservices.com
  - Address: One Westbrook Corporate Center, Suite 300, Westchester, IL 60154

- **Scheduling Options**:
  - Calendly integration link: https://calendly.com/info-27777
  - "Schedule a Consultation" button

- **Social Media Links**:
  - LinkedIn, Facebook, Instagram, YouTube, TikTok

- **Business Hours**: Availability information
- **Office Map**: Embedded Google Map of location

**Form Handling**:
- Submission via POST to `/api/contact`
- Validation on client and server
- Honeypot spam detection
- Email notification via Resend
- Google Sheets logging
- Success/error feedback

---

### **Blog Main Page** (`/blog` - `src/app/blog/page.tsx`)

**Purpose**: Blog article listing and discovery

**Content**:
- **Blog Posts List**:
  - Article cards with thumbnail image
  - Title, excerpt, date, read time
  - Category badge
  - Author name
  - Link to full article

- **Filtering/Sorting**:
  - Sort by date (newest first)
  - Filter by category
  - Search functionality (optional)

- **Featured Article**: Highlighted top post
- **Categories**: Navigation by topic
- **Archives**: Posts organized by date

**Current Blog Categories**:
- Transitional Care
- Memory Support
- Safety & Wellness

---

### **Blog Post Detail Page** (`/blog/[slug]` - `src/app/blog/[slug]/page.tsx`)

**Purpose**: Individual blog article display

**Post Structure** (from `blogs.ts`):
- **Metadata**:
  - Slug (unique identifier)
  - Title
  - Meta Title (SEO)
  - Meta Description (SEO)
  - Keywords array
  - Read time estimate
  - Publication date
  - Author name

- **Content Sections**:
  - Hero image
  - Category badge
  - Title with eyebrow
  - Publication date and read time
  - Author byline
  - Full article body (array of paragraphs)
  - Disclaimer section (medical disclaimer)

- **Navigation**:
  - Breadcrumb trail
  - Related posts links
  - Back to blog link

**Current Blog Posts**:
1. "Smooth Recovery: Transitioning from Hospital to Home" (May 7, 2025)
2. "Strengthening Bonds Through Empathy And Understanding" (April 11, 2025)
3. "Post-Surgery Recovery: Stay Complication-Free At Home" (March 14, 2025)
4. "Protecting Seniors: Infection Prevention Tips" (February 12, 2025)

**SEO Optimization**:
- Dynamic meta tags per post
- Canonical URLs
- Open Graph tags
- Keywords for search visibility

---

### **Privacy Policy Page** (`/privacy-policy` - `src/app/privacy-policy/page.tsx`)

**Purpose**: Legal documentation and compliance

**Content Sections**:
- Data collection policies
- Privacy rights
- Cookies usage
- Third-party integrations
- Contact information handling
- GDPR compliance (if applicable)
- Terms of service

---

## Components Documentation

### **1. SiteChrome & PageShell** (`src/components/site-shell.tsx`)

**Purpose**: Global layout wrapper and shared UI components

**Exported Components**:

#### **`SiteChrome` Component**
- Main layout wrapper for all pages
- Wraps content with navigation and footer
- Structure:
  ```tsx
  <SiteChrome>
    <SiteNav />
    <main>{children}</main>
    <SiteFooter />
  </SiteChrome>
  ```

#### **`PageShell` Component**
- Container for page content
- Applies max-width, padding, and centering
- Used inside main content areas
- Classes: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`

#### **`SectionHeading` Component**
- Reusable section title component
- Props:
  - `eyebrow?: string` - Small decorative text above title
  - `title: string` - Main heading text
  - `description?: string` - Subtitle or description
  - `centered?: boolean` - Center alignment toggle
- Features:
  - Responsive typography (sm, lg breakpoints)
  - Brand blue color for eyebrow text
  - Optional centered layout

#### **`HeroSection` Component**
- Full-width hero banner with image slider
- Props:
  - `eyebrow: string` - Decorative text
  - `title: string` - Main headline
  - `primaryAction: { label, href }` - Primary button
  - `secondaryAction?: { label, href }` - Secondary button
  - `facts?: string[]` - Fact bullets
  - `imageSrc?: string | string[]` - Image(s)
  - `imageAlt?: string` - Alt text
- Features:
  - Auto-advancing image carousel (5-second intervals)
  - Manual image navigation
  - Multiple images support
  - Responsive layout

#### **`SiteFooter` Component**
- Global footer with company info and links
- Sections:
  - Company info and branding
  - Quick links navigation
  - Contact information
  - Social media links
  - Copyright and legal
- Styling: Blue background with white text, matches brand palette

**Styling Details**:
- Brand colors: `#0c3e72` (blue), orange, white
- Responsive padding and spacing
- Tailwind CSS utility classes
- Shadow effects for depth

---

### **2. SiteNav** (`src/components/site-nav.tsx`)

**Purpose**: Header navigation with mobile responsiveness

**Features**:
- **Brand Mark**: Logo and company name
- **Navigation Links**: Data-driven from `site-content.ts`
- **Dropdown Menus**: Multi-level navigation
  - About Us → About Owner
  - Services → 8 service categories
  - Careers → Pre-Hire Form (external link)
  - Contact Us → Blog
- **Mobile Menu**: Hamburger toggle
- **Active State**: Highlights current page

**Key Elements**:
- Sticky positioning (top navigation)
- Semi-transparent background with backdrop blur
- Shadow effects
- Z-index: 50 (above most content)
- Mobile: Full-screen menu overlay
- Desktop: Horizontal dropdown menu

**Mobile Navigation**:
- Hamburger button icon (SVG)
- Full-screen menu panel
- Nested submenu toggle
- Close on navigation

**Desktop Navigation**:
- Horizontal menu with dropdowns
- Hover effects on links
- Dropdown auto-dismiss on click

**Responsive Breakpoints**:
- `lg:hidden` - Mobile menu visible
- `lg:block` - Desktop menu visible

---

### **3. ContactForm** (`src/components/contact-form.tsx`)

**Purpose**: Contact form for lead generation and inquiries

**Form Fields**:
1. **Name** (text input, required)
   - Max length: 150 characters
   - Validation: Non-empty

2. **Email** (email input, required)
   - Max length: 150 characters
   - Validation: Must contain "@"

3. **Phone** (tel input, required)
   - Max length: 150 characters
   - Validation: Non-empty

4. **Subject** (text input, required)
   - Max length: 150 characters
   - Validation: Non-empty

5. **Message/Content** (textarea, required)
   - Max length: 3000 characters
   - Validation: Non-empty

6. **Company** (hidden, honeypot)
   - Not shown to users
   - Spam detection field
   - If filled, form silently succeeds

7. **Privacy Policy Checkbox** (required)
   - User must agree to privacy policy
   - Error message if not checked

**Form States**:
- `idle` - Default state
- `submitting` - Processing submission
- `success` - Successful submission
- `error` - Submission failed

**Submission Flow**:
1. User fills form
2. On submit, validate privacy checkbox
3. POST to `/api/contact` with form data
4. Handle response
5. Show success/error message
6. Reset form on success

**Features**:
- Responsive grid layout (single column mobile, two columns desktop)
- Real-time field updates
- Error messaging
- Success notification
- Form reset after success
- Loading state during submission

**Styling**:
- White background with rounded corners
- Shadow effect (`brand-shadow` class)
- Padding: 32px (mobile), 40px (desktop)
- Responsive font sizes

---

### **4. ScrollReveal** (`src/components/scroll-reveal.tsx`)

**Purpose**: Fade-in animation triggered on scroll

**Functionality**:
- Observes element visibility
- Triggers animation when element enters viewport
- Uses Intersection Observer API
- Smooth fade-in with transform

**Usage Example**:
```tsx
<ScrollReveal>
  <div>Content that animates in on scroll</div>
</ScrollReveal>
```

**Features**:
- Performance optimized with Intersection Observer
- Customizable animation timing
- Optional delay between elements
- Accessibility friendly (respects prefers-reduced-motion)

**Animation Properties**:
- Initial state: opacity 0, translate down
- Final state: opacity 1, translate 0
- Transition: Smooth easing

---

## Data & Configuration

### **Site Content Data** (`src/data/site-content.ts`)

**Exports**:

#### **`brand` Object**
```typescript
{
  name: "Benevolence Home Services and Staffing Agency",
  shortName: "Benevolence",
  tagline: "Homecare Solution Enterprises"
}
```

#### **`NavItem` Type**
- Defines navigation menu structure
- Supports nested subItems
- Can open links in new tabs with `target: "_blank"`

#### **`navItems` Array**
- Master navigation menu definition
- 8 main items:
  1. Home
  2. About Us (with About Owner submenu)
  3. Services (with 8 service submenus)
  4. Areas We Serve
  5. Careers (with Pre-Hire Form submenu)
  6. Resources
  7. Payment (external PayPal link)
  8. Contact Us (with Blog submenu)

#### **`contactDetails` Object**
```typescript
{
  phone: "708-304-0296",
  phoneHref: "tel:7083040296",
  email: "info@benevolencehomeservices.com",
  emailHref: "mailto:info@benevolencehomeservices.com",
  address: "One Westbrook Corporate Center, Suite 300, Westchester, IL 60154",
  serviceAreas: "Cook, DuPage, Lake and Will counties",
  calendly: "https://calendly.com/info-27777"
}
```

#### **`socialLinks` Array**
- LinkedIn
- Facebook
- Instagram
- YouTube
- TikTok

#### **`homeHighlights` Array**
Featured services on homepage:
- Companionship
- Personal Care
- Medication Reminders
- View More Services

#### **`nurseLedBenefits` Array**
7 key advantages of nurse-led care:
- Care guided by Registered Nurse with clinical judgment
- Decisions made with wisdom, discernment, experience
- Care plans thoughtfully overseen and adjusted
- Early signs of decline recognized and addressed
- Caregivers supported, trained, guided with accountability
- Families receive clarity, reassurance, peace of mind
- Care delivered with dignity, compassion, purpose

#### **`traditionalCare` Array**
7 limitations of traditional care:
- Managed by schedulers or non-clinical staff
- Decisions often reactive or task-focused
- Care plans remain static unless crisis occurs
- Changes may go unnoticed until hospitalization
- Caregivers work with limited oversight
- Families may feel uncertainty or confusion
- Care primarily task-based

#### **`homeCareServices` Array**
6 main service categories with descriptions:
- Personal Care
- Companionship
- Meal Preparation and Nutrition
- Light Housekeeping
- Medication Reminders
- Respite Care
- Specialized Support
- Transportation Services

---

### **Blog Posts Data** (`src/data/blogs.ts`)

**BlogPost Interface**:
```typescript
interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  content: string[];
}
```

**Current Blog Posts** (4 articles):

1. **"Smooth Recovery: Transitioning from Hospital to Home"**
   - Slug: `smooth-recovery`
   - Date: May 7, 2025
   - Author: Louise Savoie
   - Category: Transitional Care
   - Topics: Hospital-to-home transitions, post-hospital recovery, care planning

2. **"Strengthening Bonds Through Empathy And Understanding"**
   - Slug: `strengthening-bonds`
   - Date: April 11, 2025
   - Author: Louise Savoie
   - Category: Memory Support
   - Topics: Dementia care, empathy in caregiving, communication strategies

3. **"Post-Surgery Recovery: Stay Complication-Free At Home"**
   - Slug: `post-surgery-recovery`
   - Date: March 14, 2025
   - Author: Louise Savoie
   - Category: Transitional Care
   - Topics: Post-surgical care, wound management, recovery monitoring

4. **"Protecting Seniors: Infection Prevention Tips"**
   - Slug: `protecting-seniors-infection`
   - Date: February 12, 2025
   - Author: Louise Savoie
   - Category: Safety & Wellness
   - Topics: Senior infection prevention, hygiene, immune system support

**Blog Content Structure**:
- Each blog post contains multiple content paragraphs
- Medical disclaimer included in posts
- Keyword-optimized for SEO
- Internal links to service pages
- Call-to-action at end

---

## API Routes & Backend

### **Contact Form API** (`src/app/api/contact/route.ts`)

**Endpoint**: `POST /api/contact`

**Purpose**: Handle contact form submissions with validation, email sending, and database logging

**Request Body**:
```typescript
{
  name: string;
  email: string;
  phone: string;
  form_subject: string;
  form_content: string;
  company?: string; // Honeypot field
}
```

**Validation Rules**:

1. **Required Fields**: name, email, phone, form_subject, form_content
2. **Email Validation**: Must contain "@" character
3. **Length Limits**:
   - name: max 150 chars
   - email: max 150 chars
   - phone: max 150 chars
   - form_subject: max 150 chars
   - form_content: max 3000 chars
4. **Honeypot Check**: If "company" field is filled, silently succeed (bot detection)

**Security Features**:

1. **HTML Escaping**: All inputs sanitized
   - Converts `&` to `&amp;`
   - Converts `<` to `&lt;`
   - Converts `>` to `&gt;`
   - Converts `"` to `&quot;`
   - Converts `'` to `&#39;`

2. **Honeypot Field**: Hidden "company" field
   - Not shown to real users
   - Automatically filled by bots
   - Detects and silently blocks bot submissions

3. **Input Validation**: Type checking and length verification

**Response Handling**:

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "Thanks. Your inquiry was received and someone will follow up soon."
}
```

**Error Response** (400/500):
```json
{
  "success": false,
  "message": "Error description"
}
```

**Processing Steps**:

1. **Validate** all required fields
2. **Check honeypot** (if filled, return silent success)
3. **Verify length limits**
4. **Sanitize** HTML characters
5. **Append to Google Sheets** (if configured)
6. **Send Email** via Resend
7. **Return success** response

**Database Integration** (Google Sheets):

Appends row to Google Sheets with columns:
- Date (ISO format, YYYY-MM-DD HH:MM:SS)
- Name
- Email
- Phone
- Subject
- Message

Configuration via environment variables:
- `GOOGLE_SHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`

**Email Service** (Resend):

Sends formatted email notification:
- From: Configured email address
- To: Contact inbox email
- Subject: `[Benevolence Leads] {form_subject}`
- Body: Text and HTML templates with form data
- Configuration:
  - `RESEND_API_KEY`
  - `CONTACT_FROM_EMAIL`
  - `CONTACT_TO_EMAIL`

**Error Handling**:
- Graceful fallback if Google Sheets unavailable
- Continues with email if database fails
- Detailed error logging
- User-friendly error messages

---

## Environment Variables

### **Email Configuration**
```
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=noreply@benevolencehomeservices.com
CONTACT_TO_EMAIL=info@benevolencehomeservices.com
```

### **Google Sheets Database**
```
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
```

### **Google Tag Manager** (Analytics)
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### **Node Environment**
```
NODE_ENV=production|development
PORT=3000
```

### **Optional Database**
```
MYSQL_HOST=localhost
MYSQL_USER=db_user
MYSQL_PASSWORD=db_password
MYSQL_DATABASE=benevolence_db
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser; others are server-only.

---

## Getting Started

### **Prerequisites**
- Node.js 20+ (LTS recommended)
- npm 10+
- Git

### **Installation**

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/benevolencehomeservices.git
   cd benevolencehomeservices
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Configure API Keys**
   - Resend email service
   - Google Sheets and authentication
   - Google Tag Manager (optional)

### **Development Server**

Start the development server:
```bash
npm run dev
```

Navigate to `http://localhost:3000`

**Features**:
- Hot module replacement (HMR)
- Fast refresh
- TypeScript compilation
- ESLint checking

### **Building for Production**

```bash
npm run build
npm start
```

Or deploy directly:
```bash
npm run build
```

Optimizations:
- Code splitting
- Image optimization
- CSS minification
- JavaScript minification

---

## Build & Deployment

### **Build Process**

```bash
npm run build
```

**Build Output**:
- `.next/` directory with optimized production code
- Static HTML files for static pages
- Server-side rendering capabilities
- Optimized images

**Build Validation**:
- TypeScript compilation
- ESLint validation
- Next.js route verification

### **Deployment Options**

#### **Vercel** (Recommended)
1. Connect GitHub repository
2. Vercel auto-detects Next.js
3. Configure environment variables in Vercel dashboard
4. Deploy on push to main branch

**Benefits**:
- Automatic builds and deployment
- Global CDN
- Edge Functions support
- Analytics built-in

#### **Self-Hosted (Node.js)**
```bash
npm run build
npm start
```

**Requirements**:
- Node.js runtime
- Environment variable configuration
- Reverse proxy (nginx/Apache)
- SSL certificate

#### **Docker Containerization**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### **Production Checklist**

- [ ] Environment variables configured
- [ ] Email service tested (Resend)
- [ ] Google Sheets integration verified
- [ ] Google Tag Manager configured
- [ ] Security headers enabled (CSP)
- [ ] Images optimized and CDN setup
- [ ] DNS configured
- [ ] SSL certificate installed
- [ ] Performance monitoring enabled
- [ ] Error tracking setup
- [ ] Backups configured
- [ ] Build tested with production settings

---

## Features & Functionality

### **SEO & Metadata**

**Global SEO** (from `layout.tsx`):
```typescript
metadata: {
  metadataBase: new URL("https://www.benevolencehomeservices.com"),
  title: "Benevolence Home Services | Home Care in Westchester, IL",
  description: "Nurse-led, compassionate home care and staffing solutions...",
  keywords: ["Home care in Westchester IL", ...14 more keywords],
  openGraph: {
    title, description, url, images...
  },
  twitter: {
    card, title, description, images...
  }
}
```

**Per-Page SEO**:
- Each page has custom meta titles
- Unique meta descriptions
- Canonical URLs
- Open Graph tags for social sharing

**Blog SEO**:
- Dynamic meta tags per post
- Keywords optimization
- Author byline
- Publication date structured data

### **Image Optimization**

**Features**:
- Next.js Image component with lazy loading
- Automatic format optimization (WebP)
- Responsive image sizing
- Placeholder support
- LCP (Largest Contentful Paint) optimization

**Images Used**:
- Footer logo: `/footer-logo.png`
- Blog post images
- Hero section images
- Service category images

### **Security Headers** (CSP)

Configured in `next.config.js`:
```javascript
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' data: https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  frame-src 'self' https://www.google.com https://form.jotform.com;

X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### **Performance Optimizations**

1. **Code Splitting**: Automatic per-route
2. **Image Optimization**: Next.js Image component
3. **Font Optimization**: Quicksand via Google Fonts
4. **CSS Optimization**: Tailwind production build
5. **Caching**: Browser cache headers
6. **Compression**: gzip/brotli via Vercel/server
7. **Minification**: Production builds
8. **Bundle Analysis**: Tree shaking unused code

### **Analytics Integration**

**Google Tag Manager**:
- Tracking container ID configured via `NEXT_PUBLIC_GTM_ID`
- Integrated via `@next/third-parties`
- Events tracking capability

**Custom Tracking** (can be added):
- Form submissions
- Service page views
- Phone number clicks
- Contact form interactions

### **Mobile Responsiveness**

**Breakpoints Used**:
- Mobile: 0px - 639px (sm)
- Tablet: 640px - 1023px (md)
- Desktop: 1024px+ (lg)

**Mobile Features**:
- Hamburger menu navigation
- Touch-friendly buttons
- Readable font sizes
- Single-column layouts
- Optimized images
- Swipe navigation (carousel)

### **Accessibility**

**Features**:
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Image alt text
- Form labels

---

## SEO & Performance

### **Sitemap** (`public/sitemap.xml`)

Static XML sitemap with all public routes:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.benevolencehomeservices.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Additional routes... -->
</urlset>
```

### **Robots.txt** (`public/robots.txt`)

Allows all crawlers and provides sitemap reference:
```
User-agent: *
Allow: /
Sitemap: https://www.benevolencehomeservices.com/sitemap.xml
```

### **Manifest.json** (`public/manifest.json`)

PWA web app manifest with:
- App name and short name
- Theme colors
- Icons
- Display mode

### **Performance Metrics**

**Target Metrics**:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- First Contentful Paint (FCP): < 1.8s

---

## Contact & Support

### **Official Contact Information**

**Benevolence Home Services**
- **Address**: One Westbrook Corporate Center, Suite 300, Westchester, IL 60154
- **Phone**: 708-304-0296
- **Email**: info@benevolencehomeservices.com
- **Website**: https://www.benevolencehomeservices.com

### **Service Areas**

Primary: Westchester, Illinois
Extended: Cook, DuPage, Lake, and Will counties

### **Business Hours**

Monday - Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 1:00 PM
Sunday: Closed

### **Social Media**

- **LinkedIn**: [Benevolence Home Services](https://www.linkedin.com/company/benevolence-home-services)
- **Facebook**: [Benevolence Care Page](https://www.facebook.com/people/Benevolence-Care-Page/61567035436101/)
- **Instagram**: [@benevolencehsvc](https://www.instagram.com/benevolencehsvc/)
- **YouTube**: [@BenevolenceHomeServicesStaff](https://www.youtube.com/@BenevolenceHomeServicesStaff)
- **TikTok**: [@benevolencehomeservices](https://www.tiktok.com/@benevolencehomeservices)

### **External Links**

- **Scheduling**: [Calendly](https://calendly.com/info-27777)
- **Payment Portal**: [PayPal Payment Link](https://www.paypal.com/ncp/payment/H8ETWPE4HU59A)
- **Career Application**: [JotForm Pre-Hire Form](https://www.jotform.com/app/223625216444452)

### **Technical Support**

For website technical issues, contact development team or file a GitHub issue.

---

## File Reference Guide

### **Key Configuration Files**

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and build scripts |
| `tsconfig.json` | TypeScript compiler options |
| `next.config.js` | Next.js configuration and security headers |
| `tailwind.config.mjs` | Tailwind CSS theme configuration |
| `postcss.config.mjs` | PostCSS plugins |
| `eslint.config.mjs` | ESLint rules |
| `.gitignore` | Git ignore patterns |

### **Core Application Files**

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout with SEO metadata |
| `src/app/page.tsx` | Home page |
| `src/app/template.tsx` | Page template wrapper |
| `src/app/globals.css` | Global styles |
| `server.js` | Custom Node.js HTTP server |

### **Component Files**

| File | Exports |
|------|---------|
| `src/components/site-shell.tsx` | PageShell, SiteChrome, SectionHeading, HeroSection, SiteFooter |
| `src/components/site-nav.tsx` | SiteNav |
| `src/components/contact-form.tsx` | ContactForm |
| `src/components/scroll-reveal.tsx` | ScrollReveal |

### **Data Files**

| File | Exports |
|------|---------|
| `src/data/site-content.ts` | Navigation, brand, contact details, service content |
| `src/data/blogs.ts` | BlogPost type, blog posts array |

### **API Routes**

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Contact form submission handler |

---

## Development Guidelines

### **Code Style**

- **Language**: TypeScript (strict mode)
- **Framework**: React 19 with Next.js 16
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint

### **Component Patterns**

1. **Client Components**: Use `"use client"` directive for interactive components
2. **Server Components**: Default for data fetching
3. **Type Safety**: Always use TypeScript interfaces
4. **Props Pattern**: Explicit prop types, no implicit any

### **File Naming**

- Components: PascalCase (e.g., `ContactForm.tsx`)
- Pages: lowercase (e.g., `page.tsx`)
- Data files: camelCase (e.g., `site-content.ts`)
- Utilities: camelCase (e.g., `helpers.ts`)

### **Routing Conventions**

- Page files: `page.tsx`
- Layout files: `layout.tsx`
- API routes: `route.ts`
- Dynamic routes: `[param]/page.tsx`

---

## Troubleshooting

### **Common Issues**

**Build Fails with Type Errors**
- Run `npm run lint` to find issues
- Check `tsconfig.json` settings
- Clear `.next` directory: `rm -rf .next`

**Environment Variables Not Loading**
- Create `.env.local` file in root
- Restart dev server after adding variables
- Use `NEXT_PUBLIC_` prefix for browser-accessible vars

**Images Not Displaying**
- Check image path in `/public` directory
- Verify Image component import from `next/image`
- Check width/height props on Image component

**Form Submissions Not Working**
- Verify API endpoint is accessible
- Check environment variables for email service
- Review browser console for fetch errors
- Check CORS headers if submitting to different domain

---

## Future Enhancement Opportunities

1. **Blog Search**: Full-text search capability
2. **Service Booking**: Integrated appointment booking system
3. **Testimonials**: Client testimonial carousel
4. **Team Directory**: Staff profiles and specialties
5. **Payment Processing**: Integrated payment for services
6. **Knowledge Base**: FAQ system with categories
7. **Mobile App**: Native iOS/Android applications
8. **Chat Support**: Live chat for inquiries
9. **Multi-Language**: Spanish language support
10. **Analytics Dashboard**: Admin panel for metrics

---

## License & Copyright

© 2025 Benevolence Home Services and Staffing Agency. All rights reserved.

**Privacy Policy**: See `/privacy-policy` page

**Terms of Service**: Available upon request

---

## Document Information

- **Last Updated**: August 17, 2025
- **Version**: 1.0 (Initial Comprehensive Documentation)
- **Project Version**: 0.1.0
- **Next.js Version**: 16.2.10
- **React Version**: 19.2.4
- **Tailwind CSS Version**: 4

---

**End of Comprehensive Project Documentation**

For questions, contributions, or feedback about this documentation, please contact the development team or submit a GitHub issue.

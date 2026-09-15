import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import FaqAccordion, { type FAQItem } from "@/components/faq-accordion";
import { 
  homeCareServices, 
  contactDetails, 
  cityDirectory, 
  type CityData 
} from "@/data/site-content";

// Helper to map service titles directly to your existing sub-routes
function getServiceSlug(title: string): string {
  const normalized = title.toLowerCase().trim();
  if (normalized.includes("transportation")) return "transportation";
  if (normalized.includes("meal")) return "meal-preparation";
  return normalized
    .replace(/ & /g, "-")
    .replace(/ and /g, "-")
    .replace(/\s+/g, "-");
}

// 1. STRICT ALLOW-LIST OF TARGET MARKETS
// Ensures only these 35 specific locations generate pages and cross-links, 
// regardless of what else exists in the global cityDirectory data object.
const TARGET_MARKETS = [
  // Cook County
  "westchester-il", "oak-park-il", "river-forest-il", "la-grange-il", 
  "western-springs-il", "orland-park-il", "palos-park-il", "palos-heights-il", 
  "northbrook-il", "glenview-il", "wilmette-il", "chicago-il",
  
  // DuPage County
  "oak-brook-il", "elmhurst-il", "glen-ellyn-il", "wheaton-il", 
  "downers-grove-il", "naperville-il", "lombard-il", "clarendon-hills-il", 
  "darien-il", "willowbrook-il", "lisle-il",
  
  // Lake County
  "lake-forest-il", "highland-park-il", "deerfield-il", "libertyville-il", 
  "vernon-hills-il", "gurnee-il",
  
  // Will County
  "frankfort-il", "homer-glen-il", "plainfield-il", "bolingbrook-il", 
  "joliet-il", "new-lenox-il"
];

/**
 * Neighbouring towns in the same county, for the cross-link block below.
 *
 * Linking siblings to each other gives every town page a handful of 
 * contextual inbound links and is genuinely useful to a reader whose 
 * town is a few minutes down the road. It strictly filters against 
 * the TARGET_MARKETS array so no outside cities bleed into the UI.
 */
function nearbyCities(current: CityData, limit = 6): CityData[] {
  // Filter global directory down to just our 35 target markets
  const allowedCities = Object.values(cityDirectory).filter(c => TARGET_MARKETS.includes(c.slug));
  
  const sameCounty = allowedCities.filter(
    (c) => c.county === current.county && c.slug !== current.slug,
  );
  const rest = allowedCities.filter(
    (c) => c.county !== current.county && c.slug !== current.slug,
  );
  return [...sameCounty, ...rest].slice(0, limit);
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 2. Pre-render ONLY the 35 target local landing pages statically at build time
export async function generateStaticParams() {
  return TARGET_MARKETS.map((slug) => ({ slug }));
}

/**
 * Per-city FAQs.
 * Every answer here is built from that city's own record (its county, 
 * ZIPs, hospitals and neighbouring towns), so each page carries genuinely 
 * distinct local detail rather than spun boilerplate.
 */
function cityFaqs(city: CityData, neighbours: CityData[]): FAQItem[] {
  const nearby = neighbours.slice(0, 3).map((c) => c.name).join(", ");

  return [
    {
      question: `How quickly can home care start in ${city.name}?`,
      answer: `In most cases care in ${city.name} can begin within 24 to 48 hours of your in-home consultation. Because our office is in Westchester, ${city.name} sits inside our core ${city.county} service radius, so we can usually schedule an assessment within a day — and sooner when a hospital or rehab discharge is already scheduled. Call ${contactDetails.phone} and we will tell you honestly what we can staff and when.`,
    },
    {
      question: `Which ${city.name} ZIP codes do you cover?`,
      answer: `We serve ${city.zipCodes.includes(",") ? `ZIP codes ${city.zipCodes}` : `ZIP code ${city.zipCodes}`} in ${city.name}, along with the surrounding ${city.county} communities of ${nearby}. Caregivers are matched to families by travel distance so the same small team returns to your home rather than a different face each visit, which matters enormously for clients living with memory loss.`,
    },
    {
      question: `Do you help with hospital discharges in ${city.name}?`,
      answer: `Yes. We regularly coordinate the return home for ${city.name} residents discharged from ${city.hospitals.join(" and ")}. A Registered Nurse reviews the discharge instructions, sets up the home for safe mobility, arranges medication reminders, and stays in contact through the first weeks of recovery — the window when avoidable readmissions most often happen.`,
    },
    {
      question: `What does in-home care in ${city.name} cost?`,
      answer: `Cost depends on how many hours you need and whether care is hourly, overnight, or live-in, so we quote after the assessment rather than before it. The in-home consultation itself is free and carries no obligation. We provide non-medical home care, which is typically paid privately or through long-term care insurance; we are glad to walk ${city.name} families through what their policy covers.`,
    },
    {
      question: `Who comes to the home for the ${city.name} assessment?`,
      answer: `A Care Coordinator or our supervising Registered Nurse conducts every assessment personally. That is the difference between nurse-led care and a scheduler-led agency: a clinician looks at fall risks, medication routines, and early warning signs in the home itself, then builds the care plan and keeps adjusting it as needs change. Caregivers are available across ${city.name} 24 hours a day, including weekends and holidays.`,
    },
  ];
}

// 3. Programmatic SEO Metadata per Location (Maximized < 60 chars)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Guard clause: Return empty metadata if slug is not in our strict target list
  if (!TARGET_MARKETS.includes(slug)) return {};
  
  const city = cityDirectory[slug];
  if (!city) return {};

  const fullTitle = `Home Care in ${city.name}, IL | Benevolence Home Services`;

  return {
    title: {
      absolute: fullTitle,
    },
    description: `Nurse-led home care in ${city.name}, IL — personal care, companionship and respite across ${city.county}. Free assessment. Call ${contactDetails.phone}.`,
    alternates: {
      canonical: `/areas-we-serve/${city.slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: `Nurse-led in-home elderly care, dementia support, and personal care serving families in ${city.name}, ${city.county}.`,
      url: `https://www.benevolencehomeservices.com/areas-we-serve/${city.slug}`,
      siteName: "Benevolence Home Services",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/nh-2411535922U62t38i.webp",
          width: 1200,
          height: 630,
          alt: `In-Home Senior Care Services in ${city.name}, Illinois`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: `Nurse-led in-home elderly care and caregiver support in ${city.name}, IL.`,
      images: ["/nh-2411535922U62t38i.webp"],
    },
  };
}

// 4. Viewport Component
export default async function CityAreaPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Guard clause: Return absolute 404 if the URL slug is not in the target 35 markets
  if (!TARGET_MARKETS.includes(slug)) {
    notFound();
  }

  const city = cityDirectory[slug];

  if (!city) {
    notFound();
  }

  const neighbours = nearbyCities(city);
  const faqs = cityFaqs(city, neighbours);

  return (
    <>
      {/* HERO SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow={`Nurse-Led Care Across ${city.county}`}
          title={`Home Care in ${city.name}, IL`}
          primaryAction={{ label: "Request Care Assessment", href: "/contact-us" }}
          secondaryAction={{ label: `Call ${contactDetails.phone}`, href: contactDetails.phoneHref }}
          imageSrc="/nh-2411535922U62t38i.webp"
          imageAlt={`Caregiver providing personalized home care for a senior in ${city.name}, Illinois`}
        />
      </div>

      {/* LOCALIZED EDITORIAL PANEL */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <PageShell>
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow={`Local Caregiving • ${city.name}, Illinois`}
                title={`Supporting Seniors & Families in ${city.name}`}
                description={city.desc}
              />
            </ScrollReveal>

            <ScrollReveal>
              <p className="max-w-3xl text-base leading-8 text-slate-700">
                Families across {city.name} rely on Benevolence Home Services for{" "}
                <strong>nurse-led, non-medical home care in {city.name}, IL</strong> —
                personal care, companionship, and respite support delivered in the
                comfort of home, with every care plan overseen by a Registered Nurse.
              </p>
            </ScrollReveal>

            {/* Municipal Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0c3e72] mb-1">Target District</p>
                <p className="text-base font-bold text-brand-ink">{city.name}, IL</p>
                <p className="text-xs text-slate-500 mt-1">{city.county}</p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0c3e72] mb-1">Postal Codes Covered</p>
                <p className="text-sm font-semibold text-brand-ink">{city.zipCodes}</p>
                <p className="text-xs text-slate-500 mt-1">Direct home dispatch</p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0c3e72] mb-1">Regional Headquarters</p>
                <p className="text-sm font-semibold text-brand-ink">Westchester, IL Base</p>
                <p className="text-xs text-slate-500 mt-1">{contactDetails.address.split(",")[0]}</p>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* CORE 8 SERVICES HUB */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50/50">
        <PageShell>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold text-brand-ink sm:text-4xl">
                Nurse-Led Services Available in {city.name}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Every care service is overseen by clinical leadership to ensure safety, dignity, and personalized comfort at home.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeCareServices.map((service) => {
              const serviceSlug = getServiceSlug(service.title);
              return (
                <ScrollReveal key={service.title}>
                  <Link
                    href={`/services/${serviceSlug}`}
                    className="group flex flex-col justify-between h-full bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#0c3e72]/40"
                  >
                    <div>
                      <h3 className="text-base font-bold text-brand-ink group-hover:text-[#0c3e72] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {service.body}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c3e72]">
                      <span>Learn More</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* POST-HOSPITAL TRANSITIONS & COMMUNITY CONTEXT */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <PageShell>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-display font-bold text-brand-ink mb-3">
                Post-Hospital Discharge & Recovery
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We coordinate <strong>safe transitions home after a hospital stay</strong>, working with the medical centers serving {city.name}, including:
              </p>
              <ul className="mt-4 space-y-2">
                {city.hospitals.map((hospital, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea6725]" />
                    {hospital}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-brand-ink mb-3">
                Community & Social Outings
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maintaining community connections is vital for emotional wellbeing. Our caregivers provide <strong>safe escort and companion assistance</strong> near local landmarks including:
              </p>
              <ul className="mt-4 space-y-2">
                {city.landmarks.map((landmark, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0c3e72]" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageShell>
      </section>

      {/* NEARBY COVERAGE CROSS-LINKS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-100">
        <PageShell>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-brand-ink sm:text-3xl">
              {`Home Care Near ${city.name}`}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {`We also serve neighbouring communities across ${city.county} and the wider Chicagoland area.`}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {neighbours.map((neighbour) => (
                <li key={neighbour.slug}>
                  <Link
                    href={`/areas-we-serve/${neighbour.slug}`}
                    className="flex h-full items-center justify-between gap-2 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs font-semibold text-brand-ink transition hover:border-[#0c3e72]/40 hover:text-[#0c3e72] hover:shadow-sm sm:text-sm"
                  >
                    {`Home care in ${neighbour.name}, IL`}
                    <span aria-hidden="true" className="text-slate-300">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              <Link href="/areas-we-serve" className="font-semibold text-[#0c3e72] underline underline-offset-4">
                Browse every Chicagoland community we serve
              </Link>
            </p>
          </div>
        </PageShell>
      </section>

      {/* LOCAL FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow={`${city.name}, Illinois`}
              title={`Home Care in ${city.name}: Common Questions`}
            />
          </ScrollReveal>
          <FaqAccordion faqs={faqs} />
        </PageShell>
      </section>

      {/* CONVERSION BOTTOM CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#0a2540] text-center text-white">
        <PageShell>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-bold sm:text-4xl">
              Arrange Care in {city.name}, IL Today
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base">
              Speak directly with our care coordination team to schedule a complimentary assessment for you or your loved one.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0a2540] hover:bg-slate-100 transition shadow-lg"
              >
                Schedule Local Assessment &rarr;
              </Link>
              <Link
                href={contactDetails.phoneHref}
                className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition"
              >
                Call {contactDetails.phone}
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* STRUCTURED DATA INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeHealthCare",
            "@id": "https://www.benevolencehomeservices.com/#organization",
            "name": "Benevolence Home Services",
            "url": `https://www.benevolencehomeservices.com/areas-we-serve/${city.slug}`,
            "logo": "https://www.benevolencehomeservices.com/footer-logo.png",
            "image": "https://www.benevolencehomeservices.com/footer-logo.png",
            "telephone": contactDetails.phone,
            "email": contactDetails.email,
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 Westbrook Corporate Center, Suite 300",
              "addressLocality": "Westchester",
              "addressRegion": "IL",
              "postalCode": "60154",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.8666,
              "longitude": -87.8856
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": `${city.name}, IL`,
                "sameAs": `https://en.wikipedia.org/wiki/${encodeURIComponent(city.name.replace(/\s+/g, "_"))},_Illinois`
              },
              {
                "@type": "AdministrativeArea",
                "name": `${city.county}, Illinois`
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `In-Home Care Services in ${city.name}, IL`,
              "itemListElement": homeCareServices.map((service) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `${service.title} in ${city.name}, IL`,
                  "description": service.body,
                  "serviceType": service.title,
                  "provider": { "@id": "https://www.benevolencehomeservices.com/#organization" },
                  "areaServed": { "@type": "City", "name": `${city.name}, IL` }
                }
              }))
            },
            "description": city.desc
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.benevolencehomeservices.com" },
              { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://www.benevolencehomeservices.com/areas-we-serve" },
              { "@type": "ListItem", "position": 3, "name": `${city.name}, IL`, "item": `https://www.benevolencehomeservices.com/areas-we-serve/${city.slug}` }
            ]
          })
        }}
      />
    </>
  );
}
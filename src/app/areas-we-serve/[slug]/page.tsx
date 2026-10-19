import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import FaqAccordion from "@/components/faq-accordion";
import { homeCareServices, contactDetails, cityDirectory } from "@/data/site-content";
import { zipLabel } from "@/lib/format";
import { cityHref, HOME_CITY_SLUG, nearbyCities } from "@/lib/cities";
import { cityFaqs } from "@/lib/city-faqs";
import { JsonLd } from "@/components/json-ld";
import { Testimonials } from "@/components/testimonials";
import { absoluteUrl, breadcrumbSchema, citySchema, faqSchema, ORG_ID, serviceSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render every town page statically at build time. The headquarters town
// is the homepage (its URL here redirects to `/`), so it gets no page of its own.
export async function generateStaticParams() {
  return Object.keys(cityDirectory)
    .filter((slug) => slug !== HOME_CITY_SLUG)
    .map((slug) => ({ slug }));
}

// Programmatic SEO metadata per location (title kept under 60 chars)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
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
                <p className="text-sm font-semibold text-brand-ink">{zipLabel(city)}</p>
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
              return (
                <ScrollReveal key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
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
                      <span>{`${service.title} in ${city.name}`}</span>
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
                    href={cityHref(neighbour.slug)}
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

      {/* FAMILY TESTIMONIALS (renders nothing until real ones are added) */}
      <Testimonials citySlug={city.slug} />

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
                className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition"
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

      {/* STRUCTURED DATA: this town as a Service of the organization declared in
          the root layout, plus its FAQs and breadcrumb. */}
      <JsonLd
        data={[
          serviceSchema({
            name: `Home Care in ${city.name}, IL`,
            serviceType: "Non-medical in-home senior care",
            path: `/areas-we-serve/${city.slug}`,
            description: city.desc,
            areaServed: citySchema(city),
            offerCatalog: {
              "@type": "OfferCatalog",
              name: `In-Home Care Services in ${city.name}, IL`,
              itemListElement: homeCareServices.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: `${service.title} in ${city.name}, IL`,
                  description: service.body,
                  serviceType: service.title,
                  url: absoluteUrl(`/services/${service.slug}`),
                  provider: { "@id": ORG_ID },
                },
              })),
            },
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
            { name: `${city.name}, IL`, path: `/areas-we-serve/${city.slug}` },
          ]),
        ]}
      />
    </>
  );
}
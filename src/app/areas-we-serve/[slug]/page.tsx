import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import { homeCareServices, contactDetails } from "@/data/site-content";

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

/**
 * Neighbouring towns in the same county, for the cross-link block below.
 *
 * Each of these 35 pages previously had exactly one internal backlink — the
 * directory listing at /areas-we-serve — which left them reading as
 * low-priority leaves with almost no link equity. Linking siblings to each
 * other gives every town page a handful of contextual inbound links and is
 * genuinely useful to a reader whose town is a few minutes down the road.
 */
function nearbyCities(current: CityData, limit = 6): CityData[] {
  const all = Object.values(cityDirectory);
  const sameCounty = all.filter(
    (c) => c.county === current.county && c.slug !== current.slug,
  );
  const rest = all.filter(
    (c) => c.county !== current.county && c.slug !== current.slug,
  );
  return [...sameCounty, ...rest].slice(0, limit);
}

// 35 Municipal Markets Across Cook, DuPage, Lake & Will Counties
interface CityData {
  name: string;
  county: string;
  slug: string;
  zipCodes: string;
  hospitals: string[];
  landmarks: string[];
  desc: string;
}

export const cityDirectory: Record<string, CityData> = {
  // Cook County
  "westchester-il": {
    name: "Westchester",
    county: "Cook County",
    slug: "westchester-il",
    zipCodes: "60154",
    hospitals: ["Loyola University Medical Center", "AdventHealth La Grange"],
    landmarks: ["Westchester Woods", "Westbrook Corporate Center"],
    desc: "As our central headquarters base, Benevolence Home Services provides premier round-the-clock nurse-led personal care, medication management, and specialized senior support for Westchester families."
  },
  "oak-park-il": {
    name: "Oak Park",
    county: "Cook County",
    slug: "oak-park-il",
    zipCodes: "60301, 60302, 60304",
    hospitals: ["Rush Oak Park Hospital", "West Suburban Medical Center"],
    landmarks: ["Frank Lloyd Wright Home and Studio", "Oak Park Conservatory"],
    desc: "Compassionate, reliable in-home elderly care, companion services, and safe post-hospital recovery support tailored to seniors and historic homes in Oak Park."
  },
  "river-forest-il": {
    name: "River Forest",
    county: "Cook County",
    slug: "river-forest-il",
    zipCodes: "60305",
    hospitals: ["Rush Oak Park Hospital", "Gottlieb Memorial Hospital"],
    landmarks: ["Dominican University", "Thatcher Woods"],
    desc: "Concierge-level private duty personal assistance, daily routine care, and dedicated caregiver respite relief for River Forest seniors."
  },
  "la-grange-il": {
    name: "La Grange",
    county: "Cook County",
    slug: "la-grange-il",
    zipCodes: "60525",
    hospitals: ["UChicago Medicine AdventHealth La Grange"],
    landmarks: ["Historic Downtown La Grange", "Waiola Park"],
    desc: "Compassionate dementia support, mobility accompaniment, and tailored personal care services delivered directly to homes across La Grange."
  },
  "western-springs-il": {
    name: "Western Springs",
    county: "Cook County",
    slug: "western-springs-il",
    zipCodes: "60558",
    hospitals: ["UChicago Medicine AdventHealth La Grange", "AdventHealth Hinsdale"],
    landmarks: ["Western Springs Water Tower", "Spring Rock Park"],
    desc: "Attentive senior personal care, medication reminders, and customized companion models keeping Western Springs older adults thriving at home."
  },
  "orland-park-il": {
    name: "Orland Park",
    county: "Cook County",
    slug: "orland-park-il",
    zipCodes: "60462, 60467",
    hospitals: ["Northwestern Medicine Palos Hospital"],
    landmarks: ["Centennial Park", "Orland Square"],
    desc: "Trustworthy companion care, personalized memory support, and flexible daily assistance for seniors throughout Orland Park."
  },
  "palos-park-il": {
    name: "Palos Park",
    county: "Cook County",
    slug: "palos-park-il",
    zipCodes: "60464",
    hospitals: ["Palos Community Hospital"],
    landmarks: ["Swallow Cliff Woods", "The Center in Palos Park"],
    desc: "Gentle mobility guidance, private duty care plans, and daily routine assistance for Palos Park residents."
  },
  "palos-heights-il": {
    name: "Palos Heights",
    county: "Cook County",
    slug: "palos-heights-il",
    zipCodes: "60463",
    hospitals: ["Northwestern Medicine Palos Hospital"],
    landmarks: ["Lake Katherine Nature Center & Botanic Gardens"],
    desc: "Reliable post-hospital discharge care, bathing support, and friendly companion care across Palos Heights."
  },
  "northbrook-il": {
    name: "Northbrook",
    county: "Cook County",
    slug: "northbrook-il",
    zipCodes: "60062",
    hospitals: ["NorthShore Glenbrook Hospital"],
    landmarks: ["Northbrook Court", "Techny Prairie Park"],
    desc: "Structured cognitive wellness support, homemaker care, and light housekeeping designed for Northbrook seniors."
  },
  "glenview-il": {
    name: "Glenview",
    county: "Cook County",
    slug: "glenview-il",
    zipCodes: "60025, 60026",
    hospitals: ["Glenbrook Hospital"],
    landmarks: ["The Glen Town Center", "Wagner Farm"],
    desc: "Attentive personal care, routine medication reminders, and family caregiver respite throughout Glenview."
  },
  "wilmette-il": {
    name: "Wilmette",
    county: "Cook County",
    slug: "wilmette-il",
    zipCodes: "60091",
    hospitals: ["NorthShore Evanston Hospital", "Skokie Hospital"],
    landmarks: ["Bahá'í House of Worship", "Gillson Park"],
    desc: "Discreet in-home elder care, mobility guidance, and personalized meal support for Wilmette families."
  },
  "chicago-il": {
    name: "Chicago",
    county: "Cook County",
    slug: "chicago-il",
    zipCodes: "Select Neighborhoods",
    hospitals: ["Northwestern Memorial Hospital", "Rush University Medical Center"],
    landmarks: ["Downtown Chicago", "Millennium Park"],
    desc: "Comprehensive home care coverage across Chicago neighborhoods, focusing on safe, independent urban living and specialized senior support."
  },

  // DuPage County
  "oak-brook-il": {
    name: "Oak Brook",
    county: "DuPage County",
    slug: "oak-brook-il",
    zipCodes: "60523",
    hospitals: ["AdventHealth Hinsdale Hospital", "Advocate Good Samaritan Hospital"],
    landmarks: ["Oakbrook Center", "Fullersburg Woods"],
    desc: "Private-duty home care, concierge personal support, and 24-hour caregiver coverage for seniors and families residing in Oak Brook."
  },
  "elmhurst-il": {
    name: "Elmhurst",
    county: "DuPage County",
    slug: "elmhurst-il",
    zipCodes: "60126",
    hospitals: ["Elmhurst Hospital - Edward-Elmhurst Health"],
    landmarks: ["Wilder Park Conservatory", "Downtown Elmhurst"],
    desc: "Dedicated homemaker services, light housekeeping, and nutritious meal preparation tailored to Elmhurst families."
  },
  "glen-ellyn-il": {
    name: "Glen Ellyn",
    county: "DuPage County",
    slug: "glen-ellyn-il",
    zipCodes: "60137",
    hospitals: ["Northwestern Medicine Central DuPage Hospital"],
    landmarks: ["Lake Ellyn Park", "Prairie Path"],
    desc: "Compassionate respite relief for devoted family caregivers, paired with engaging companionship across Glen Ellyn."
  },
  "wheaton-il": {
    name: "Wheaton",
    county: "DuPage County",
    slug: "wheaton-il",
    zipCodes: "60187, 60189",
    hospitals: ["Northwestern Medicine Central DuPage Hospital"],
    landmarks: ["Cantigny Park", "Downtown Wheaton"],
    desc: "Holistic senior wellness, personal hygiene assistance, and dedicated respite care options for Wheaton residents."
  },
  "downers-grove-il": {
    name: "Downers Grove",
    county: "DuPage County",
    slug: "downers-grove-il",
    zipCodes: "60515, 60516",
    hospitals: ["Advocate Good Samaritan Hospital"],
    landmarks: ["Tivoli Theatre", "Main Street Station"],
    desc: "Flexible hourly home care, overnight monitoring, and reliable medication prompting throughout Downers Grove."
  },
  "naperville-il": {
    name: "Naperville",
    county: "DuPage County",
    slug: "naperville-il",
    zipCodes: "60540, 60563, 60564",
    hospitals: ["Edward Hospital - Naperville"],
    landmarks: ["Naperville Riverwalk", "Centennial Beach"],
    desc: "Comprehensive senior home care tailored to Naperville residents, including hourly non-medical support and medical transport accompaniment."
  },
  "lombard-il": {
    name: "Lombard",
    county: "DuPage County",
    slug: "lombard-il",
    zipCodes: "60148",
    hospitals: ["Advocate Good Samaritan Hospital", "Elmhurst Hospital"],
    landmarks: ["Lilacia Park", "Yorktown Center"],
    desc: "Trustworthy companion care, daily routine assistance, and fall prevention services for Lombard seniors."
  },
  "clarendon-hills-il": {
    name: "Clarendon Hills",
    county: "DuPage County",
    slug: "clarendon-hills-il",
    zipCodes: "60514",
    hospitals: ["AdventHealth Hinsdale Hospital"],
    landmarks: ["Prospect Park", "Downtown Clarendon Hills"],
    desc: "Personalized mobility support, fall prevention guidance, and trusted hourly senior care in Clarendon Hills."
  },
  "darien-il": {
    name: "Darien",
    county: "DuPage County",
    slug: "darien-il",
    zipCodes: "60561",
    hospitals: ["AdventHealth Hinsdale Hospital"],
    landmarks: ["Waterfall Glen Forest Preserve"],
    desc: "Dependable personal hygiene care, routine comfort checks, and homemaker assistance for Darien older adults."
  },
  "willowbrook-il": {
    name: "Willowbrook",
    county: "DuPage County",
    slug: "willowbrook-il",
    zipCodes: "60527",
    hospitals: ["AdventHealth Hinsdale Hospital", "AdventHealth La Grange"],
    landmarks: ["Willowbrook Town Center", "Community Park"],
    desc: "Dignified routine care, meal preparation, and private duty caregiving solutions in Willowbrook."
  },
  "lisle-il": {
    name: "Lisle",
    county: "DuPage County",
    slug: "lisle-il",
    zipCodes: "60532",
    hospitals: ["Edward Hospital", "Advocate Good Samaritan Hospital"],
    landmarks: ["The Morton Arboretum", "Community Park"],
    desc: "Warm companion care, medication reminders, and flexible day-to-day senior living assistance across Lisle."
  },

  // Lake County
  "lake-forest-il": {
    name: "Lake Forest",
    county: "Lake County",
    slug: "lake-forest-il",
    zipCodes: "60045",
    hospitals: ["Northwestern Medicine Lake Forest Hospital"],
    landmarks: ["Market Square", "Lake Forest Beach"],
    desc: "Private duty assistance, dignified personal routines, and dedicated companion care in Lake Forest."
  },
  "highland-park-il": {
    name: "Highland Park",
    county: "Lake County",
    slug: "highland-park-il",
    zipCodes: "60035",
    hospitals: ["NorthShore Highland Park Hospital"],
    landmarks: ["Ravinia Festival", "Rosewood Beach"],
    desc: "Reliable meal prep, family respite relief, and customized living support for Highland Park seniors."
  },
  "deerfield-il": {
    name: "Deerfield",
    county: "Lake County",
    slug: "deerfield-il",
    zipCodes: "60015",
    hospitals: ["Highland Park Hospital", "Glenbrook Hospital"],
    landmarks: ["Deerfield Historic Village", "Briarwood"],
    desc: "Dependable medication reminders, active socialization, and routine personal care in Deerfield."
  },
  "libertyville-il": {
    name: "Libertyville",
    county: "Lake County",
    slug: "libertyville-il",
    zipCodes: "60048",
    hospitals: ["Advocate Condell Medical Center"],
    landmarks: ["Adler Memorial Park", "MainStreet Libertyville"],
    desc: "High-caliber respite relief, engaging companionship, and safe fall prevention configurations in Libertyville."
  },
  "vernon-hills-il": {
    name: "Vernon Hills",
    county: "Lake County",
    slug: "vernon-hills-il",
    zipCodes: "60061",
    hospitals: ["Advocate Condell Medical Center"],
    landmarks: ["Hawthorn Center", "Century Park"],
    desc: "Dedicated personal routines care, post-hospital transition plans, and memory care support in Vernon Hills."
  },
  "gurnee-il": {
    name: "Gurnee",
    county: "Lake County",
    slug: "gurnee-il",
    zipCodes: "60031",
    hospitals: ["Advocate Condell Medical Center", "Vista Medical Center East"],
    landmarks: ["Gurnee Mills", "Viking Park"],
    desc: "Trustworthy non-medical support, prescription prompts, and reliable companion systems for Gurnee seniors."
  },

  // Will County
  "frankfort-il": {
    name: "Frankfort",
    county: "Will County",
    slug: "frankfort-il",
    zipCodes: "60423",
    hospitals: ["Silver Cross Hospital", "Franciscan Health"],
    landmarks: ["Frankfort Historic District", "Old Plank Road Trail"],
    desc: "Dignified assistance with personal routines, bathing help, and dedicated respite relief in Frankfort."
  },
  "homer-glen-il": {
    name: "Homer Glen",
    county: "Will County",
    slug: "homer-glen-il",
    zipCodes: "60491",
    hospitals: ["Silver Cross Hospital"],
    landmarks: ["Heritage Park", "Messenger Woods"],
    desc: "Attentive companion care, mobility support, and family caregiver peace of mind in Homer Glen."
  },
  "plainfield-il": {
    name: "Plainfield",
    county: "Will County",
    slug: "plainfield-il",
    zipCodes: "60544, 60585",
    hospitals: ["Edward Hospital", "Ascension Saint Joseph - Joliet"],
    landmarks: ["Settlers' Park", "Downtown Plainfield"],
    desc: "Safe transitional assistance following clinical discharge, paired with warm daily companion care in Plainfield."
  },
  "bolingbrook-il": {
    name: "Bolingbrook",
    county: "Will County",
    slug: "bolingbrook-il",
    zipCodes: "60440, 60490",
    hospitals: ["UChicago Medicine AdventHealth Bolingbrook"],
    landmarks: ["The Promenade Bolingbrook", "Hidden Oaks Nature Center"],
    desc: "Dependable medication reminders, active social companionship, and routine comfort checks in Bolingbrook."
  },
  "joliet-il": {
    name: "Joliet",
    county: "Will County",
    slug: "joliet-il",
    zipCodes: "60431, 60432, 60435",
    hospitals: ["Ascension Saint Joseph - Joliet", "Silver Cross Hospital"],
    landmarks: ["Rialto Square Theatre", "Pilcher Park Nature Center"],
    desc: "Professional private duty care configurations, hourly caregiver relief, and non-medical support for Joliet families."
  },
  "new-lenox-il": {
    name: "New Lenox",
    county: "Will County",
    slug: "new-lenox-il",
    zipCodes: "60451",
    hospitals: ["Silver Cross Hospital"],
    landmarks: ["The Commons", "Hickory Creek Preserve"],
    desc: "Custom senior care plans, household meal support, and dependable daily living assistance in New Lenox."
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Pre-render all 35 local landing pages statically at build time
export async function generateStaticParams() {
  return Object.keys(cityDirectory).map((slug) => ({ slug }));
}

// 2. Programmatic SEO Metadata per Location (Maximized < 60 chars)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cityDirectory[slug];

  if (!city) return {};

  // Formats to: "In-Home Senior Care in [City], IL | Benevolence" (52-58 chars)
  // Replaces the generic ~25 char title and prevents snippet truncation
  const fullTitle = `In-Home Senior Care in ${city.name}, IL | Benevolence`;

  return {
    title: {
      absolute: fullTitle,
    },
    // 155 characters: Captures local intent while staying below the 160-char / 1000px limit
    description: `Compassionate, nurse-led non-medical home care, companion care, and respite services for seniors and families in ${city.name}, IL. Call ${contactDetails.phone}.`,
    alternates: {
      canonical: `/areas-we-serve/${city.slug}`,
    },
    openGraph: {
      title: `${fullTitle} Home Services`,
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
      title: `${fullTitle} Home Services`,
      description: `Nurse-led in-home elderly care and caregiver support in ${city.name}, IL.`,
      images: ["/nh-2411535922U62t38i.webp"],
    },
  };
}

// 3. Viewport Component
export default async function CityAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cityDirectory[slug];

  if (!city) {
    notFound();
  }

  return (
    <>
      {/* HERO SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow={`Home Care in ${city.county}`}
          title={`Compassionate In-Home Care in ${city.name}, IL`}
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

            {/* Lead paragraph. Carries the one phrase this page should rank for
                in a <strong>, so the page has a genuine emphasis signal instead
                of an undifferentiated wall of body copy. */}
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

      {/* CORE 8 SERVICES HUB USING SITE-CONTENT ARRAY */}
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
              {nearbyCities(city).map((neighbour) => (
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

      {/* PROGRAMMATIC LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeHealthCare",
            "name": `Benevolence Home Services - ${city.name} Care Team`,
            "url": `https://www.benevolencehomeservices.com/areas-we-serve/${city.slug}`,
            "logo": "https://www.benevolencehomeservices.com/footer-logo.png",
            "telephone": contactDetails.phone,
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 Westbrook Corporate Center, Suite 300",
              "addressLocality": "Westchester",
              "addressRegion": "IL",
              "postalCode": "60154",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": `${city.name}, IL`,
              "sameAs": `https://en.wikipedia.org/wiki/${encodeURIComponent(city.name.replace(/\s+/g, "_"))},_Illinois`
            },
            "description": city.desc
          })
        }}
      />
    </>
  );
}
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import { cityDirectory, counties, contactDetails } from "@/data/site-content";
import { zipLabel } from "@/lib/format";
import { cityHref } from "@/lib/cities";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { CountyNav } from "@/components/county-nav";

// Towns grouped by county, in directory order. Derived from cityDirectory so
// this page can never drift from the town pages it links to.
const regions = counties.map((county) => ({
  ...county,
  cities: Object.values(cityDirectory).filter((city) => city.county === county.name),
}));

function MapPinIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-[#0c3e72] shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export default function AreasWeServePage() {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Areas We Serve"
          title="In-Home Care Across Cook, DuPage, Lake & Will Counties"
          primaryAction={{ label: "Request Care Near You", href: "/contact-us" }}
          secondaryAction={{ label: "View Our Service Menu", href: "/services" }}
          imageSrc="/nh-2411535922U62t38i.webp"
          imageAlt="Caregiver and senior client reviewing an authorized home care service area map"
        />
      </div>

      {/* CORE MATRIX TRAVERSAL CANVAS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-white to-slate-50/50 relative z-10" aria-label="Regional Directory Map">
        <PageShell>
          <ScrollReveal>
            <div className="md:mb-20">
              <SectionHeading
                centered
                eyebrow="Chicagoland Coverage Boundaries"
                title="Dependable Care Infused in Local Communities"
                description="Discover tailored, nurse-guided home care solutions structured to optimize comfort, household safety, and independent lifestyle parameters. Headquartered in Westchester, IL, Benevolence Home Services provides premium, non-medical in-home care, senior companionship, and specialized dementia support across Cook, DuPage, Lake, and Will Counties."
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative mt-16">
            
            {/* LEFT SIDEBAR: sticky county scroll-spy (client island) */}
            <CountyNav items={regions.map((r) => ({ id: r.id, name: r.name, count: r.cities.length }))} />

            {/* RIGHT STREAM: Continuous Scrolling Content Feed */}
            <div className="w-full lg:w-[70%] flex flex-col gap-20 pb-16">
              {regions.map((region) => (
                <section key={region.id} id={region.id} className="scroll-mt-36">
                  <ScrollReveal>
                    <div className="mb-8 border-b border-slate-200/60 pb-5">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-ink mb-3">
                        {region.name} Home Care Support
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
                        {region.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Architectural Card Matrix Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {region.cities.map((city) => {
                      // Routes to dedicated landing page if available, otherwise routes to assessment inquiry
                      const targetHref = cityHref(city.slug);

                      return (
                        <ScrollReveal key={city.name}>
                          <div className="group block h-full select-none relative">
                            <div className="flex flex-col h-full bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_5px_20px_rgba(15,47,89,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(12,62,114,0.07)] hover:-translate-y-1 hover:border-[#0c3e72]/30 relative overflow-hidden">
                              
                              {/* Direct Internal Anchor Link */}
                              <Link
                                href={targetHref}
                                className="absolute inset-0 z-20"
                              >
                                <span className="sr-only">
                                  View nurse-led home care services in {city.name}, Illinois
                                </span>
                              </Link>

                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0c3e72]/0 to-transparent group-hover:via-[#0c3e72]/40 transition-all duration-500" />

                              <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/40 text-slate-400 transition-colors duration-500 group-hover:bg-brand-blue/5 group-hover:text-[#0c3e72] group-hover:border-brand-blue/10">
                                    <MapPinIcon />
                                  </div>
                                  <div>
                                    <p className="font-display font-bold text-brand-ink text-base sm:text-lg group-hover:text-[#0c3e72] transition-colors leading-tight">
                                      {city.name}, IL
                                    </p>
                                    <p className="text-[10px] font-bold tracking-wider text-slate-400 mt-0.5">
                                      Coverage ZIP: {zipLabel(city)}
                                    </p>
                                  </div>
                                </div>

                                <div className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 text-slate-400 group-hover:bg-[#0c3e72] group-hover:text-white group-hover:border-[#0c3e72]">
                                  <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 text-xs font-bold">&rarr;</span>
                                </div>
                              </div>

                              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed pt-3 border-t border-slate-100/70 group-hover:text-slate-600 transition-colors">
                                {city.desc}
                              </p>

                              <div className="mt-4 pt-2 text-[11px] font-bold text-[#1168b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                Explore {city.name} In-Home Care <span aria-hidden="true">&rarr;</span>
                              </div>
                            </div>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

          </div>
        </PageShell>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-t border-brand-blue/10 rounded-t-[3rem]">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                Let Us Help You Build the Right Care Plan
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-slate-700 max-w-2xl mx-auto space-y-4">
                <p>
                  Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, <strong>Benevolence Home Services</strong> is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Lake, and Will Counties.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white !text-white shadow-md transition-all duration-300 hover:bg-brand-blue active:scale-98"
                >
                  Schedule Your Home Assessment
                  <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[9px] font-bold">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href={contactDetails.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-ink transition hover:bg-slate-50 shadow-sm"
                >
                  {`Call ${contactDetails.phone}`}
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* The business and every town it serves are declared once in the root
          layout's organization schema; this page only adds its breadcrumb. */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve" },
        ])}
      />
    </>
  );
}
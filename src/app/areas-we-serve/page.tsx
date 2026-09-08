"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

const regionalData = [
  {
    id: "cook-county",
    name: "Cook County",
    description: "Providing premium private duty home care, hourly respite relief, and senior companionship across Cook County communities.",
    cities: [
      { name: "Westchester", slug: "westchester-il", zipCodes: "60154", desc: "Our hometown headquarters, offering premier round-the-clock specialized support and personal home care in Westchester." },
      { name: "Oak Park", slug: "oak-park-il", zipCodes: "60301, 60302, 60304", desc: "Premium live-in home care, overnight assistance, and hourly senior support services for Oak Park families." },
      { name: "River Forest", slug: "river-forest-il", zipCodes: "60305", desc: "Concierge personal assistance, dignified daily routine support, and trusted respite relief in River Forest." },
      { name: "La Grange", slug: "la-grange-il", zipCodes: "60525", desc: "Dedicated respite care, engaging companionship, and safe mobility assistance in the heart of La Grange." },
      { name: "Western Springs", slug: "western-springs-il", zipCodes: "60558", desc: "Compassionate, attentive senior care, medication prompting, and customized daily living assistance in Western Springs." },
      { name: "Orland Park", slug: "orland-park-il", zipCodes: "60462, 60467", desc: "Trustworthy elderly companion care, Alzheimer's support, and specialized daily living assistance in Orland Park." },
      { name: "Palos Park", slug: "palos-park-il", zipCodes: "60464", desc: "Gentle mobility guidance, private duty care plans, and daily routine assistance for Palos Park seniors." },
      { name: "Palos Heights", slug: "palos-heights-il", zipCodes: "60463", desc: "Reliable post-hospital transitional assistance, bathing support, and friendly companion care in Palos Heights." },
      { name: "Northbrook", slug: "northbrook-il", zipCodes: "60062", desc: "Comprehensive companion services, light housekeeping, and structured cognitive wellness support in Northbrook." },
      { name: "Glenview", slug: "glenview-il", zipCodes: "60025, 60026", desc: "Attentive personal care, routine medication reminders, and family caregiver respite throughout Glenview." },
      { name: "Wilmette", slug: "wilmette-il", zipCodes: "60091", desc: "Discreet in-home elder care, mobility guidance, and personalized meal planning for Wilmette families." },
      { name: "Chicago", slug: "chicago-il", zipCodes: "Select Neighborhoods", desc: "Comprehensive home care coverage across Chicago, focusing on safe, independent urban living, personal care, and specialized support." }
    ]
  },
  {
    id: "dupage-county",
    name: "DuPage County",
    description: "Delivering top-tier, nurse-led home care, Alzheimer's support, and live-in assistance to seniors and families throughout DuPage County.",
    cities: [
      { name: "Oak Brook", slug: "oak-brook-il", zipCodes: "60523", desc: "Luxury, concierge-level private duty care, overnight support, and 24-hour assistance for Oak Brook seniors." },
      { name: "Elmhurst", slug: "elmhurst-il", zipCodes: "60126", desc: "Dedicated homemaker services, light housekeeping, and nutritious meal preparation for Elmhurst families." },
      { name: "Glen Ellyn", slug: "glen-ellyn-il", zipCodes: "60137", desc: "Compassionate respite relief for devoted family caregivers, paired with engaging companionship in Glen Ellyn." },
      { name: "Wheaton", slug: "wheaton-il", zipCodes: "60187, 60189", desc: "Holistic senior wellness, personal hygiene assistance, and dedicated respite care options in Wheaton." },
      { name: "Downers Grove", slug: "downers-grove-il", zipCodes: "60515, 60516", desc: "Flexible hourly home care, overnight monitoring, and reliable medication reminders in Downers Grove." },
      { name: "Naperville", slug: "naperville-il", zipCodes: "60540, 60563", desc: "Comprehensive senior home care tailored to Naperville residents, including hourly care and transportation services." },
      { name: "Lombard", slug: "lombard-il", zipCodes: "60148", desc: "Trustworthy companion care, daily routine assistance, and fall prevention services for Lombard seniors." },
      { name: "Clarendon Hills", slug: "clarendon-hills-il", zipCodes: "60514", desc: "Personalized mobility support, fall prevention, and trusted hourly senior care in Clarendon Hills." },
      { name: "Darien", slug: "darien-il", zipCodes: "60561", desc: "Dependable personal hygiene care, routine comfort checks, and homemaker support in Darien." },
      { name: "Willowbrook", slug: "willowbrook-il", zipCodes: "60527", desc: "Dignified routine care, meal preparation, and private duty caregiving solutions in Willowbrook." },
      { name: "Lisle", slug: "lisle-il", zipCodes: "60532", desc: "Warm companion care, medication reminders, and flexible day-to-day senior help across Lisle." }
    ]
  },
  {
    id: "lake-county",
    name: "Lake County",
    description: "Providing specialized non-medical home care options, memory care support, and friendly companion escorts for Lake County families.",
    cities: [
      { name: "Lake Forest", slug: "lake-forest-il", zipCodes: "60045", desc: "Private duty assistance, dignified personal routines, and dedicated companion care in Lake Forest." },
      { name: "Highland Park", slug: "highland-park-il", zipCodes: "60035", desc: "Reliable meal prep, family respite relief, and customized living support for Highland Park seniors." },
      { name: "Deerfield", slug: "deerfield-il", zipCodes: "60015", desc: "Dependable medication reminders, active socialization, and routine personal care in Deerfield." },
      { name: "Libertyville", slug: "libertyville-il", zipCodes: "60048", desc: "High-caliber respite relief, engaging companionship, and safe fall prevention configurations in Libertyville." },
      { name: "Vernon Hills", slug: "vernon-hills-il", zipCodes: "60061", desc: "Dedicated personal routines care, post-hospital transition plans, and memory care support in Vernon Hills." },
      { name: "Gurnee", slug: "gurnee-il", zipCodes: "60031", desc: "Trustworthy non-medical support, prescription prompts, and reliable companion systems for Gurnee seniors." }
    ]
  },
  {
    id: "will-county",
    name: "Will County",
    description: "Extending professional, nurse-led companion models, specialized dementia care, and personal routine assistance across Will County territory.",
    cities: [
      { name: "Frankfort", slug: "frankfort-il", zipCodes: "60423", desc: "Dignified assistance with personal routines, bathing help, and dedicated respite relief in Frankfort." },
      { name: "Homer Glen", slug: "homer-glen-il", zipCodes: "60491", desc: "Attentive companion care, mobility support, and family caregiver peace of mind in Homer Glen." },
      { name: "Plainfield", slug: "plainfield-il", zipCodes: "60544, 60585", desc: "Safe transitional assistance following clinical discharge, paired with warm daily companion care in Plainfield." },
      { name: "Bolingbrook", slug: "bolingbrook-il", zipCodes: "60440, 60490", desc: "Dependable medication reminders, active social companionship, and routine comfort checks in Bolingbrook." },
      { name: "Joliet", slug: "joliet-il", zipCodes: "60431 - 60435", desc: "Professional private duty care configurations, hourly caregiver relief, and non-medical support for Joliet families." },
      { name: "New Lenox", slug: "new-lenox-il", zipCodes: "60451", desc: "Custom senior care plans, household meal support, and dependable daily living assistance in New Lenox." }
    ]
  }
];

function MapPinIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-[#0c3e72] shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export default function AreasWeServePage() {
  const [activeSection, setActiveSection] = useState(regionalData[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );

    regionalData.forEach((region) => {
      const element = document.getElementById(region.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
                description="Benevolence Home Services delivers reliable, nurse-led non-medical support and professional in-home care across Cook, DuPage, Lake, and Will Counties. Explore our regional service coverage directory to discover customized caregiver resources near you."
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative mt-16">
            
            {/* LEFT SIDEBAR: Pinned Sticky Floating Scrollspy Control board */}
            <aside className="w-full lg:w-[30%] sticky top-[100px] z-40 bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-0 border-slate-200/60 shadow-sm lg:shadow-none">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide">
                <h3 className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5 pl-4">
                  Filter By Service District
                </h3>

                {regionalData.map((region) => {
                  const isActive = activeSection === region.id;
                  return (
                    <button
                      key={region.id}
                      type="button"
                      onClick={() => scrollToSection(region.id)}
                      className={`flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? "bg-[#0a2540] text-white shadow-[0_10px_25px_rgba(10,37,64,0.15)]"
                          : "bg-transparent text-slate-600 hover:bg-white hover:text-brand-ink border border-transparent hover:border-slate-200/50"
                      }`}
                    >
                      <span className="font-bold text-xs sm:text-sm tracking-wide">{region.name}</span>
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                          isActive ? "bg-white/10 text-blue-200" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200/60"
                        }`}>
                          {region.cities.length} Areas
                        </span>
                        <span className={`hidden lg:block transition-transform duration-300 ${isActive ? "translate-x-1 text-brand-orange" : "text-slate-300 group-hover:translate-x-1"}`}>
                          &rarr;
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT STREAM: Continuous Scrolling Content Feed */}
            <div className="w-full lg:w-[70%] flex flex-col gap-20 pb-16">
              {regionalData.map((region) => (
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
                      const targetHref = city.slug ? `/areas-we-serve/${city.slug}` : "/contact-us";

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
                                      Coverage ZIP: {city.zipCodes}
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
                  Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Lake, and Will Counties.
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
                  href="tel:7083040296"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-ink transition hover:bg-slate-50 shadow-sm"
                >
                  Call 708-304-0296
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* LOCAL SCHEMA INJECTOR LOGIC */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeHealthCare",
            "name": "Benevolence Home Services",
            "url": "https://www.benevolencehomeservices.com",
            "logo": "https://www.benevolencehomeservices.com/footer-logo.png",
            "telephone": "708-304-0296",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 Westbrook Corporate Center, Suite 300",
              "addressLocality": "Westchester",
              "addressRegion": "IL",
              "postalCode": "60154",
              "addressCountry": "US"
            },
            "areaServed": regionalData.flatMap(region =>
              region.cities.map(city => ({
                "@type": "AdministrativeArea",
                "name": `${city.name}, IL`,
                "sameAs": `https://en.wikipedia.org/wiki/${encodeURIComponent(city.name.replace(/\s+/g, "_"))},_Illinois`
              }))
            )
          })
        }}
      />
    </>
  );
}
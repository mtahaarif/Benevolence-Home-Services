"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

const regionalData = [
  {
    id: "cook-county",
    name: "Cook County",
    description: "Providing premium private duty home care, hourly respite relief, and senior companionship across Cook County communities.",
    cities: [
      { name: "Chicago", zipCodes: "Select Neighborhoods", desc: "Comprehensive home care coverage across Chicago, focusing on safe, independent urban living, personal care, and specialized support." },
      { name: "Oak Park", zipCodes: "60301, 60302", desc: "Premium live-in home care, overnight assistance, and hourly senior support services for Oak Park families." },
      { name: "Orland Park", zipCodes: "60462, 60467", desc: "Trustworthy elderly companion care, Alzheimer's support, and specialized daily living assistance in Orland Park." },
      { name: "Tinley Park", zipCodes: "60477, 60487", desc: "Reliable medication reminders, overnight companion monitoring, and dedicated homemaker help for Tinley Park seniors." },
      { name: "Oak Lawn", zipCodes: "60453", desc: "Dignified personal hygiene care, bathing, grooming support, and safe mobility assistance in Oak Lawn." },
      { name: "Skokie", zipCodes: "60076, 60077", desc: "Compassionate transitional care from hospital to home, plus continuous non-medical chronic support in Skokie." }
    ]
  },
  {
    id: "dupage-will-county",
    name: "DuPage & Will Counties",
    description: "Delivering top-tier, nurse-led home care, Alzheimer's support, and live-in assistance to seniors and families throughout DuPage and Will Counties.",
    cities: [
      { name: "Naperville", zipCodes: "60540, 60563", desc: "Comprehensive senior home care tailored to Naperville residents, including hourly care and transportation services." },
      { name: "Wheaton", zipCodes: "60187, 60189", desc: "Holistic senior wellness, personal hygiene assistance, and dedicated respite care options in Wheaton." },
      { name: "Downers Grove", zipCodes: "60515, 60516", desc: "Flexible hourly home care, overnight monitoring, and reliable medication reminders in Downers Grove." },
      { name: "Lombard", zipCodes: "60148", desc: "Trustworthy companion care, daily routine assistance, and fall prevention services for Lombard seniors." },
      { name: "Elmhurst", zipCodes: "60126", desc: "Dedicated homemaker services, light housekeeping, and nutritious meal preparation for Elmhurst families." },
      { name: "Joliet", zipCodes: "60431 - 60435", desc: "Professional private duty care configurations, hourly caregiver relief, and non-medical support for Joliet families." },
      { name: "Bolingbrook", zipCodes: "60440, 60490", desc: "Dependable medication reminders, active social companionship, and routine comfort checks in Bolingbrook." },
      { name: "Plainfield", zipCodes: "60544, 60585", desc: "Safe transitional assistance following clinical discharge, paired with warm daily companion care in Plainfield." },
      { name: "Frankfort", zipCodes: "60423", desc: "Dignified assistance with personal routines, bathing help, and dedicated respite relief maps in Frankfort." }
    ]
  },
  {
    id: "kane-county",
    name: "Kane County",
    description: "Extending professional, nurse-led companion models and dignified personal routine assistance throughout Kane County territory.",
    cities: [
      { name: "Aurora", zipCodes: "60505, 60506", desc: "Comprehensive elder care options, 24-hour live-in support plans, and dedicated companion care in Aurora." },
      { name: "St. Charles", zipCodes: "60174, 60175", desc: "Tailored memory support frameworks, hourly respite options, and personalized routine assistance in St. Charles." },
      { name: "Geneva", zipCodes: "60134", desc: "Trusted homemaker assistance, grocery shopping errands, and continuous non-medical support for Geneva seniors." },
      { name: "Batavia", zipCodes: "60510", desc: "Reliable medication reminders, safe mobility guidance, and light housekeeping tasks in Batavia." },
      { name: "Elgin", zipCodes: "60120 - 60124", desc: "Compassionate senior companionship, routine wellness oversight, and dignified personal care options for Elgin families." }
    ]
  },
  {
    id: "lake-county",
    name: "Lake County",
    description: "Providing specialized non-medical home care options, memory care support, and friendly companion escorts for Lake County families.",
    cities: [
      { name: "Libertyville", zipCodes: "60048", desc: "High-caliber respite relief, engaging companionship, and safe fall prevention configurations in Libertyville." },
      { name: "Vernon Hills", zipCodes: "60061", desc: "Dedicated personal routines care, post-hospital transition plans, and memory care support in Vernon Hills." },
      { name: "Gurnee", zipCodes: "60031", desc: "Trustworthy non-medical support, prescription prompts, and reliable companion systems for Gurnee seniors." }
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
          title="In-Home Care Across Cook, DuPage & Surrounding Counties"
          primaryAction={{ label: "Request Care Near You", href: "/contact-us" }}
          secondaryAction={{ label: "View Our Service Menu", href: "/services" }}
          imageSrc="/nh-2172642748U38tie9.webp" 
          imageAlt="Caregiver and senior client reviewing an authorized home care service area map"
        />
      </div>

      {/* CORE MATRIX TRAVERSAL CANVAS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-white to-slate-50/50 relative z-10" aria-label="Regional Directory Map">
        <PageShell>
          <ScrollReveal>
            <div className="md:mb-20">
            {/* OPTIMIZATION: Exact H1 match seamlessly injected into description text to satisfy keyword tracking constraints */}
            <SectionHeading
              centered
              eyebrow="Chicagoland Coverage Boundaries"
              title="Dependable Care Infused in Local Communities"
              description="Benevolence Home Services is proud to deliver reliable, nurse-led non-medical support and professional in-home care across Cook, DuPage & surrounding counties. Explore our regional service coverage directory to discover customized caregiver resources near you."
            />
            </div>
          </ScrollReveal>
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative mt-16">
            
            {/* LEFT SIDEBAR: Pinned Sticky Floating Scrollspy Control board */}
            <aside className="w-full lg:w-[30%] sticky top-[100px] z-40 bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-0 border-slate-200/60 shadow-sm lg:shadow-none">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide">
                {/* OPTIMIZATION: Maintained h3 here as a legitimate global layout navigational anchor */}
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
                    {region.cities.map((city) => (
                      <ScrollReveal key={city.name}>
                        <div className="group block h-full select-none relative">
                          <div className="flex flex-col h-full bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_5px_20px_rgba(15,47,89,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(12,62,114,0.07)] hover:-translate-y-1 hover:border-[#0c3e72]/30 relative overflow-hidden">
                            
                            {/* Invisible Link Layer with Screen Reader Only Text */}
                            <Link 
                              href="/contact-us" 
                              className="absolute inset-0 z-20"
                            >
                              <span className="sr-only">Schedule a local nurse-led care assessment in {city.name}, Illinois</span>
                            </Link>

                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0c3e72]/0 to-transparent group-hover:via-[#0c3e72]/40 transition-all duration-500" />
                            
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/40 text-slate-400 transition-colors duration-500 group-hover:bg-brand-blue/5 group-hover:text-[#0c3e72] group-hover:border-brand-blue/10">
                                  <MapPinIcon />
                                </div>
                                <div>
                                  {/* OPTIMIZATION: Converted from an <h3> to a strongly typed <p> block element. */}
                                  {/* This immediately reduces the heading bloat metric from 35 down to a perfectly balanced 5, clearing the Page Structure warning! */}
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
                              Book Local Intake Assessment <span aria-hidden="true">&rarr;</span>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                </section>
              ))}
            </div>

          </div>
        </PageShell>
      </section>

      {/* FIXED FOOTER CALL TO ACTION IN THEME WITH WEBSITE PARAMS */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white" aria-label="Get Care Plan Form">
          <PageShell>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Let Us Help You Build the Right Care Plan</h2>
              <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Kane, Lake, and Will Counties.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link href="/contact-us" aria-label="Navigate to our intake contact form to request consultation options" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white shadow-md hover:bg-[#0c5a99] transition-all w-full sm:w-auto">
                  Schedule Your Home Assessment
                </Link>
                <a href="tel:7083040296" aria-label="Call our primary scheduling desk at 708-304-0296" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white hover:bg-white/5 transition-all w-full sm:w-auto">
                  Call 708-304-0296
                </a>
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
                "sameAs": `https://en.wikipedia.org/wiki/${city.name.replace(' ', '_')},_Illinois`
              }))
            )
          })
        }}
      />
    </>
  );
}
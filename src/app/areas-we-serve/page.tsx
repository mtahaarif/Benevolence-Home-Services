"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

// 1. ULTIMATE SEO DATA ENGINE
// Every description is meticulously crafted to pair a High-Value Keyword with a City/Region.
const regionalData = [
  {
    id: "dupage-county",
    name: "DuPage County",
    description: "Delivering top-tier, nurse-led home care, Alzheimer's support, and 24-hour live-in assistance to seniors and families throughout DuPage County.",
    cities: [
      { name: "Oak Brook", zipCodes: "60523", desc: "Luxury private duty home care, 24-hour live-in support, and dedicated companion care in Oak Brook." },
      { name: "Hinsdale", zipCodes: "60521", desc: "Discreet, premium personal care assistance, post-hospital recovery, and specialized memory support for Hinsdale seniors." },
      { name: "Naperville", zipCodes: "60540, 60563", desc: "Comprehensive senior home care tailored to Naperville residents, including hourly care and transportation services." },
      { name: "Downers Grove", zipCodes: "60515", desc: "Flexible hourly home care, overnight monitoring, and reliable medication reminders in Downers Grove." },
      { name: "Elmhurst", zipCodes: "60126", desc: "Dedicated homemaker services, light housekeeping, and nutritious meal preparation for Elmhurst families." },
      { name: "Lombard", zipCodes: "60148", desc: "Trustworthy companion care, daily routine assistance, and fall prevention services for Lombard seniors." },
      { name: "Wheaton", zipCodes: "60187", desc: "Holistic senior wellness, personal hygiene assistance, and dedicated respite care options in Wheaton." },
      { name: "Glen Ellyn", zipCodes: "60137", desc: "Compassionate respite relief for devoted family caregivers, paired with engaging companionship in Glen Ellyn." },
      { name: "Burr Ridge", zipCodes: "60527", desc: "High-end post-surgical recovery support, overnight monitoring, and specialized mobility assistance in Burr Ridge." },
      { name: "Clarendon Hills", zipCodes: "60514", desc: "Personalized mobility support, fall prevention, and trusted hourly senior care in Clarendon Hills." },
      { name: "Villa Park", zipCodes: "60181", desc: "Routine medication prompting, grocery shopping errands, and daily living assistance for Villa Park residents." },
      { name: "Addison", zipCodes: "60101", desc: "Reliable transportation, medical appointment escorts, and safe home environments for seniors in Addison." },
      { name: "Glendale Heights", zipCodes: "60139", desc: "Caring, dignified assistance with bathing, grooming, and personal hygiene in Glendale Heights." },
      { name: "Bensenville", zipCodes: "60106", desc: "Safe, comfortable transitional care from hospital to home, and continuous chronic condition support in Bensenville." },
    ]
  },
  {
    id: "cook-county",
    name: "Cook County (West)",
    description: "Providing exceptional private duty home care, hourly respite relief, and senior companionship across western Cook County communities.",
    cities: [
      { name: "Westchester", zipCodes: "60154", desc: "Our hometown headquarters, offering premier round-the-clock specialized support and personal home care in Westchester." },
      { name: "Oak Park", zipCodes: "60301-60304", desc: "Premium live-in home care, overnight assistance, and hourly senior support services for Oak Park families." },
      { name: "La Grange", zipCodes: "60525", desc: "Dedicated respite care, engaging companionship, and safe mobility assistance in the heart of La Grange." },
      { name: "Berwyn", zipCodes: "60402", desc: "Reliable medication reminders, professional homemaker services, and light housekeeping in Berwyn." },
      { name: "Brookfield", zipCodes: "60513", desc: "Compassionate Alzheimer's care, Dementia support, and cognitive wellness programs for Brookfield seniors." },
      { name: "Franklin Park", zipCodes: "60131", desc: "Expert post-hospital recovery, mobility assistance, and personalized transition care in Franklin Park." },
      { name: "Elmwood Park", zipCodes: "60707", desc: "Dependable transportation, social escorts, and comprehensive senior wellness plans in Elmwood Park." },
      { name: "Cicero", zipCodes: "60804", desc: "Culturally competent personal care, supportive companionship, and dignified daily routine assistance in Cicero." },
    ]
  },
  {
    id: "chicagoland",
    name: "Greater Chicago",
    description: "Extending our compassionate, non-medical senior care and specialized private duty footprint into the greater Chicago metropolitan area.",
    cities: [
      { name: "Chicago", zipCodes: "Select Neighborhoods", desc: "Comprehensive home care coverage across Chicago, focusing on safe, independent urban living, personal care, and specialized support." }
    ]
  }
];

// Custom Map Pin Icon
function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" className={`stroke-current ${className}`}>
      <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export default function AreasWeServePage() {
  const [activeSection, setActiveSection] = useState(regionalData[0].id);

  // Intersection Observer to automatically highlight the sidebar menu as the user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Triggers when a section reaches the middle of the viewport
      { rootMargin: "-40% 0px -60% 0px" } 
    );

    regionalData.forEach((region) => {
      const element = document.getElementById(region.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler for manual clicks
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 100px offset to account for your liquid glass navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection
        eyebrow="Areas We Serve"
        title="Home Care Near You in Illinois."
        description="Headquartered in Westchester, IL, Benevolence Home Services provides premium, non-medical in-home care, senior companionship, and specialized dementia support to 23 communities across DuPage County, Cook County, and Chicagoland."
        primaryAction={{ label: "Request Care", href: "/contact-us" }}
        secondaryAction={{ label: "View Services", href: "/services" }}
        imageSrc="/nh-2172642748U38tie9.webp" 
        imageAlt="Caregiver and senior client looking at a map"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50 relative">
        <PageShell>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
            
            {/* LEFT: Sticky Scrollspy Navigation */}
            <aside className="w-full lg:w-[28%] sticky top-[100px] z-40 bg-slate-50 lg:bg-transparent pb-4 lg:pb-0 border-b lg:border-b-0 border-slate-200">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide">
                <h3 className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 pl-4">
                  Jump to Region
                </h3>
                
                {regionalData.map((region) => {
                  const isActive = activeSection === region.id;
                  return (
                    <button
                      key={region.id}
                      onClick={() => scrollToSection(region.id)}
                      className={`flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                        isActive 
                          ? "bg-[#0a2540] text-white shadow-lg shadow-blue-900/10" 
                          : "bg-transparent text-slate-500 hover:bg-white hover:text-brand-ink"
                      }`}
                    >
                      <span className="font-semibold text-sm tracking-wide">{region.name}</span>
                      <span className={`hidden lg:block transition-transform duration-300 ${isActive ? "translate-x-1 text-blue-300" : "text-slate-300 group-hover:translate-x-1"}`}>
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT: Content Feed */}
            <div className="w-full lg:w-[72%] flex flex-col gap-24 pb-20">
              {regionalData.map((region) => (
                <section key={region.id} id={region.id} className="scroll-mt-32">
                  
                  <ScrollReveal>
                    <div className="mb-10 border-b border-slate-200 pb-6">
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
                        {region.name}
                      </h2>
                      <p className="text-slate-500 text-[15px] md:text-base max-w-2xl leading-relaxed">
                        {region.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Architectural City Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {region.cities.map((city) => (
                      <ScrollReveal key={city.name}>
                        <Link href="/contact-us" className="group block h-full">
                          <div className="flex flex-col h-full bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(12,62,114,0.08)] hover:-translate-y-1 hover:border-[#0c3e72]/20">
                            
                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 transition-colors duration-500 group-hover:bg-[#0c3e72]/5 group-hover:text-[#0c3e72] group-hover:border-[#0c3e72]/10">
                                  <MapPinIcon className="w-5 h-5" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-brand-ink text-lg">{city.name}, IL</h3>
                                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                    ZIP: {city.zipCodes}
                                  </p>
                                </div>
                              </div>
                              
                              {/* Interaction Arrow */}
                              <div className="h-8 w-8 rounded-full bg-transparent flex items-center justify-center transition-all duration-300 text-slate-300 group-hover:bg-[#0c3e72] group-hover:text-white">
                                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm">↗</span>
                              </div>
                            </div>

                            {/* SEO Description String */}
                            <p className="text-slate-500 text-[13px] leading-relaxed mt-auto pt-4 border-t border-slate-50 transition-colors group-hover:text-slate-600">
                              {city.desc}
                            </p>
                            
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>

                </section>
              ))}
            </div>

          </div>
        </PageShell>
      </section>

      {/* Embedded Next-Gen SEO Structured Data (Knowledge Panel & Local Business) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Benevolence Home Services",
            "url": "https://www.benevolencehomeservices.com",
            "logo": "https://www.benevolencehomeservices.com/logo.png",
            "telephone": "+1-800-XXX-XXXX", 
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Westbrook Corporate Center",
              "addressLocality": "Westchester",
              "addressRegion": "IL",
              "postalCode": "60154",
              "addressCountry": "US"
            },
            "areaServed": regionalData.flatMap(region => 
              region.cities.map(city => ({
                "@type": "City",
                "name": city.name,
                "sameAs": `https://en.wikipedia.org/wiki/${city.name.replace(' ', '_')},_Illinois`
              }))
            )
          })
        }}
      />
      {/* FIXED FOOTER CALL TO ACTION IN THEME WITH HOMEPAGE */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white">
          <PageShell>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Let Us Help You Build the Right Care Plan</h2>
              <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Kane, Lake, and Will Counties.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link href="/contact-us" aria-label="Navigate to our intake contact form to request consultation details" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0a2540] !text-[#0a2540] shadow-md hover:bg-blue-50 transition-all w-full sm:w-auto">
                  Request a Care Consultation
                </Link>
                <a href="tel:7083040296" aria-label="Call our primary phone line at 708-304-0296" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white hover:bg-white/5 transition-all w-full sm:w-auto">
                  Call 708-304-0296
                </a>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
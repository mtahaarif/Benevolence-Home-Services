"use client";

import React from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import { homeCareServices } from "@/data/site-content";

// High-fidelity monoline stroke icon mappings
function ServiceIcon({ title }: { title: string }) {
  const baseClass = "h-12 w-12 text-brand-blue transition-transform duration-500 group-hover:scale-110";

  switch (title) {
    case "Personal Care":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      );
    case "Companionship":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      );
    case "Meal Preparation and Nutrition":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3.75c.966 0 1.75-.784 1.75-1.75V15M9 21H5.25A1.75 1.75 0 013.5 19.25V15m10.5-3v-1.5a3.75 3.75 0 10-7.5 0V12m7.5 0H6m7.5 0h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H15" />
        </svg>
      );
    case "Light Housekeeping":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3.75c.966 0 1.75-.784 1.75-1.75V15M9 21H5.25A1.75 1.75 0 013.5 19.25V15m10.5-3v-1.5a3.75 3.75 0 10-7.5 0V12m7.5 0H6m7.5 0h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H15" />
        </svg>
      );
    case "Medication Reminders":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
    case "Respite Care":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.66 17.66l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.66 6.34l1.06-1.06M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      );
    case "Transportation Services":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125A1.125 1.125 0 0 0 21 17.625V14.25m-3.75 4.5h-6M21 14.25v-1.14a2.25 2.25 0 0 0-.832-1.74l-2.42-1.936a2.25 2.25 0 0 0-1.408-.497H4.312m16.688 5.313H3.375m17.625-5.313A2.25 2.25 0 0 0 18.75 7.5H15M3.375 14.25h15.375" />
        </svg>
      );
    case "Specialized Support":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      );
  }
}

function getSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ and /g, "-")
    .replace(/\s+/g, "-");
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        title="We offer the following services"
        description="At Benevolence Home Services, we provide compassionate, non-medical home care services in Westchester, Illinois with nurse-led oversight and a commitment to excellence in home-based care."
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "Payment", href: "https://www.paypal.com/ncp/payment/H8ETWPE4HU59A" }}
        imageSrc="/nh-2172642748U38tie9.webp"
        imageAlt="Two elders and a caregiver smiling"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <PageShell>
          <SectionHeading
            eyebrow="Home Maker In DuPage County, Illinois"
            title="Support built around daily living, dignity, and independence"
            description="Every service is intentionally chosen to help clients stay safe, comfortable, and well supported at home."
          />
          
          {/* 
            STACKING FIX: Handled spacing on mobile to prevent natural gaps from breaking sticky cards, 
            then shifts cleanly into standard grid layouts on larger screen widths.
          */}
          <div className="mt-14 space-y-12 sm:space-y-0 sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative">
            {homeCareServices.map((service, index) => {
              const itemUrl = `/services/${getSlug(service.title)}`;
              
              return (
                <Link 
                  key={service.title} 
                  href={itemUrl}
                  // Calculates individual sticky landing layout constraints dynamically for CSS execution
                  style={{ "--stack-top": `calc(6.5rem + ${index * 16}px)` } as React.CSSProperties}
                  className="group sticky top-[var(--stack-top)] sm:relative sm:top-auto flex flex-col items-center justify-center text-center overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 h-[360px] shadow-[0_12px_30px_rgba(15,47,89,0.05)] transition-all duration-500 ease-in-out hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-[0_20px_40px_rgba(17,104,179,0.08)]"
                >
                  {/* Container wrapper handles vertical translation sync smoothly */}
                  <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform group-hover:-translate-y-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/5 transition-colors duration-500 group-hover:bg-brand-blue/10">
                      <ServiceIcon title={service.title} />
                    </div>

                    <h3 className="mt-6 font-display text-lg font-semibold text-brand-ink max-w-[180px] leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description panels display dynamically beneath the title component */}
                  <div className="absolute bottom-8 left-6 right-6 opacity-0 max-h-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:max-h-[140px]">
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 line-clamp-4">
                      {service.body}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                      Learn More 
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>

                </Link>
              );
            })}
          </div>
        </PageShell>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20 bg-background/50 border-t border-slate-200/60">
        <PageShell>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              centered
              eyebrow="Purpose-Driven Home Care Services"
              title="Are you looking for reliable home care services?"
              description="Contact us now to see how we can help you navigate personalized care options cleanly."
            />
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[#0c5a99]"
              >
                Get Started Today
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-blue text-[10px]">
                  →
                </span>
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
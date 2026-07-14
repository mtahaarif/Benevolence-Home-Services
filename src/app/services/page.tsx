"use client";

import React from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

// 1. Enriched SEO-mapped data layer for the 8 core pillars
const enrichedServices = [
  {
    index: "01",
    title: "Personal Care",
    body: "Dignified assistance with daily personal routines, crafted to maintain hygiene, comfort, and absolute confidence.",
    subServices: ["Fall Prevention", "Mobility Assistance", "Senior Wellness", "Bathing & Grooming"],
  },
  {
    index: "02",
    title: "Companionship",
    body: "Meaningful social interaction designed to prevent isolation, boost mental health, and provide profound emotional support.",
    subServices: ["Friendly Conversation", "Emotional Support", "Activity Planning"],
  },
  {
    index: "03",
    title: "Light Housekeeping",
    body: "Maintaining a beautifully clean, safe, and organized living environment so clients can focus entirely on their wellbeing.",
    subServices: ["Homemaker Services", "Home Organization", "Laundry & Linens"],
  },
  {
    index: "04",
    title: "Meal Preparation",
    body: "Wholesome, diet-specific meals prepared fresh daily to ensure proper nutrition, hydration, and culinary enjoyment.",
    subServices: ["Dietary Planning", "Nutrition Support", "Cooking & Cleanup"],
  },
  {
    index: "05",
    title: "Medication Reminders",
    body: "Dependable, non-medical prompts to ensure the right medications are taken safely, accurately, and at precise times.",
    subServices: ["Prescription Prompts", "Routine Monitoring", "Refill Alerts"],
  },
  {
    index: "06",
    title: "Transportation",
    body: "Safe, reliable transit for appointments, errands, and social outings, keeping clients active and connected.",
    subServices: ["Grocery Shopping & Errands", "Doctor Appointments", "Social Escorts"],
  },
  {
    index: "07",
    title: "Respite Care",
    body: "Temporary, high-caliber relief care giving devoted family caregivers the necessary time to rest, recharge, and renew.",
    subServices: ["Family Caregiver Support", "Temporary Relief", "Short-Term Care"],
  },
  {
    index: "08",
    title: "Specialized Support",
    body: "Expert, non-medical care specifically tailored for clients living with progressive conditions or complex health needs.",
    subServices: ["Alzheimer’s & Dementia Care", "Parkinson’s Care", "Post-Hospital Recovery", "Chronic Condition Support"],
  },
];

// 20% REDUCTION: Icons scaled back down to h-7 w-7 for a tighter fit
function ServiceIcon({ title }: { title: string }) {
  const baseClass = "h-7 w-7 text-[#0c3e72] transition-transform duration-500 group-hover:scale-110";

  switch (title) {
    case "Personal Care": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5a9.969 9.969 0 005.424-1.585c1.47-1.026 2.053-2.913 1.258-4.5L18 14.5m-12 7a9.969 9.969 0 01-5.424-1.585c-1.47-1.026-2.053-2.913-1.258-4.5L6 14.5" />
      </svg>;
    case "Companionship": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>;
    case "Light Housekeeping": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>;
    case "Meal Preparation": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>;
    case "Medication Reminders": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3h4.5M9 3v3h6V3M7.5 6h9v13.5a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V6zm3 4.5v4.5m-2.25-2.25h4.5" />
      </svg>;
    case "Transportation": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125A1.125 1.125 0 0021 17.625V14.25m-3.75 4.5h-6M21 14.25v-1.14a2.25 2.25 0 00-.832-1.74l-2.42-1.936a2.25 2.25 0 00-1.408-.497H4.312m16.688 5.313H3.375m17.625-5.313A2.25 2.25 0 0018.75 7.5H15M3.375 14.25h15.375" />
      </svg>;
    case "Respite Care": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.66 17.66l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.66 6.34l1.06-1.06M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
    case "Specialized Support": 
    default: 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>;
  }
}

function getSlug(title: string): string {
  return title.toLowerCase().replace(/ & /g, "-").replace(/ and /g, "-").replace(/\s+/g, "-");
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        title="Elevating the Standard of Home Care in Westchester."
        description="From specialized Alzheimer's care to everyday homemaker assistance, we provide non-medical home care designed to keep your loved ones safe, dignified, and comfortably independent."
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "Payment", href: "https://www.paypal.com/ncp/payment/H8ETWPE4HU59A" }}
        imageSrc="/nh-2172642748U38tie9.webp"
        imageAlt="Caregiver and senior client engaging in specialized home support"
      />

      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50">
        
        {/* SAFE BACKGROUND ORB WRAPPER */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[150px] mix-blend-multiply" />
        </div>

        <PageShell>
          <ScrollReveal>
            <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 border border-white backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-6 shadow-sm">
                Our Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-ink mb-6">
                Tailored Support For Every Stage of Need.
              </h2>
            </div>
          </ScrollReveal>
          
          {/* 20% REDUCTION: 
            - Reverted gap-8 back to gap-6.
            - Adjusted mobile pb to [20vh] to match scaled-down offset tracking. 
          */}
          <div className="relative z-10 block sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-[20vh] sm:pb-0">
            {enrichedServices.map((service, index) => {
              const itemUrl = `/services/${getSlug(service.title)}`;
              
              return (
                <div 
                  key={service.title} 
                  // 20% REDUCTION: Height reduced from 480px down to ~380px/400px.
                  // Mobile bottom margin reduced from mb-[25vh] to mb-[18vh].
                  className="sticky sm:static w-full h-[400px] sm:h-auto sm:min-h-[400px] group mb-[18vh] sm:mb-0 bg-transparent rounded-[2rem]"
                  style={{ 
                    // Spine height dynamically adjusted for scaled down layout
                    top: `calc(6.5rem + ${index * 15}px)`, 
                    zIndex: 10 + index 
                  }}
                >
                  <Link 
                    href={itemUrl}
                    // 20% REDUCTION: Padding reduced from p-8 md:p-10 down to p-6 md:p-8
                    className="flex flex-col h-full p-6 md:p-8 rounded-[2rem] bg-white/60 border border-white/80 shadow-[0_12px_40px_rgba(15,47,89,0.05)] backdrop-blur-xl transition-all duration-500 sm:group-hover:bg-white/70 sm:group-hover:border-white sm:group-hover:shadow-[0_25px_50px_rgba(12,62,114,0.12)] sm:group-hover:-translate-y-1.5 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* REDUCED HEADER */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      {/* Icon box size scaled back to h-12 w-12 */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-sm transition-colors duration-500 group-hover:bg-[#0c3e72]/5 group-hover:border-[#0c3e72]/10">
                        <ServiceIcon title={service.title} />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400/70 transition-colors duration-500 group-hover:text-brand-blue/60">
                        {service.index}
                      </span>
                    </div>

                    {/* REDUCED CONTENT */}
                    <div className="relative z-10 mb-6 flex-grow">
                      {/* Title reduced from text-3xl back to text-xl/2xl */}
                      <h3 className="font-display text-xl md:text-2xl font-bold text-brand-ink mb-3 transition-colors duration-500 group-hover:text-[#0c3e72]">
                        {service.title}
                      </h3>
                      {/* Body text optimized to text-sm */}
                      <p className="text-slate-600 font-medium leading-relaxed text-[13px] md:text-sm line-clamp-4">
                        {service.body}
                      </p>
                    </div>

                    {/* REDUCED PILLS */}
                    <div className="relative z-10 mt-auto pt-5 border-t border-slate-200/50">
                      <div className="flex flex-wrap gap-1.5">
                        {service.subServices.map((subItem) => (
                          <span 
                            key={subItem} 
                            // Pill padding and text adjusted down to standard elegant text-[10px]
                            className="inline-flex items-center justify-center text-center rounded-lg bg-white/80 border border-white/90 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-600 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#0c3e72]"
                          >
                            {subItem}
                          </span>
                        ))}
                      </div>
                    </div>

                  </Link>
                </div>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* LUXURIOUS, COLOR-HIGHLIGHTED SCHEDULING HUB */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1000px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <PageShell>
          <ScrollReveal>
            <div className="relative z-10 max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#FDFBF7] via-white to-blue-50/20 border border-[#EAE5D9]/70 p-8 md:p-14 shadow-[0_10px_40px_rgba(15,47,89,0.02)] flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-ink mb-3">Flexible Care Schedules</h2>
                <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                  From situational hourly relief to comprehensive live-in support, our care profiles scale effortlessly to match your family's exact timeline parameters.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                
                {/* Beautiful Soft-Gradient Care Blocks */}
                <div className="flex flex-col items-center justify-center p-5 text-center rounded-xl bg-gradient-to-b from-blue-50/70 to-white border border-blue-100/60 shadow-[0_4px_12px_rgba(15,47,89,0.01)] hover:border-brand-blue/30 hover:shadow-md transition-all duration-300">
                  <span className="font-extrabold text-[#0c3e72] text-[10px] uppercase tracking-wider">Hourly Care</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-5 text-center rounded-xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-slate-400/40 hover:shadow-md transition-all duration-300">
                  <span className="font-extrabold text-slate-700 text-[10px] uppercase tracking-wider">Overnight Care</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-5 text-center rounded-xl bg-gradient-to-b from-orange-50/40 to-white border border-orange-100/50 shadow-[0_4px_12px_rgba(234,103,37,0.01)] hover:border-brand-orange/40 hover:shadow-md transition-all duration-300">
                  <span className="font-extrabold text-brand-orange text-[10px] uppercase tracking-wider">24-Hour Coverage</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-5 text-center rounded-xl bg-gradient-to-b from-emerald-50/30 to-white border border-emerald-100/40 shadow-[0_4px_12px_rgba(16,185,129,0.01)] hover:border-emerald-500/30 hover:shadow-md transition-all duration-300">
                  <span className="font-extrabold text-emerald-800 text-[10px] uppercase tracking-wider">Live-In Support</span>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </PageShell>
      </section>

      {/* Conversion Shell with Enforced White Text Links */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0c3e72] text-center relative overflow-hidden rounded-t-[3rem]">
          <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px] pointer-events-none" />

          <PageShell>
            <div className="relative z-10 mx-auto max-w-2xl space-y-8">
              <h2 className="text-4xl font-display font-bold text-white">Begin the Conversation.</h2>
              <p className="text-blue-100/80 font-medium text-base max-w-xl mx-auto leading-relaxed">
                Contact us to schedule a complimentary in-home assessment and discover how our dedicated care professionals can gracefully elevate your family's quality of life.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] !text-white shadow-xl transition-all duration-500 hover:bg-brand-blue hover:border-white/50 sm:hover:-translate-y-1"
                >
                  Request Assessment
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Structured offer list catalogs mapping directly to Google crawler search definitions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Non-Medical Home Care",
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "Benevolence Home Services",
              "url": "https://www.benevolencehomeservices.com"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Care Services Menu",
              "itemListElement": enrichedServices.map((service, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.body
                },
                "position": i + 1
              }))
            }
          })
        }}
      />
    </>
  );
}
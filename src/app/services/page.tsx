"use client";

import React from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

// SEO-mapped data layer (Unchanged to protect maximum keyword density)
const enrichedServices = [
  {
    index: "01",
    title: "Personal Care",
    body: "Dignified assistance with daily personal routines, crafted to maintain hygiene, comfort, and absolute confidence within the home environment.",
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
    subServices: ["Homemaker Services", "Organization", "Laundry & Linens"],
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
    body: "Dependable, non-medical prompts to ensure the right medications are taken safely, accurately, and at the precise times.",
    subServices: ["Prescription Prompts", "Routine Monitoring", "Refill Alerts"],
  },
  {
    index: "06",
    title: "Transportation",
    body: "Safe, reliable transit for appointments, errands, and social outings, keeping clients active and connected to their community.",
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
    body: "Expert, non-medical care specifically tailored for clients living with progressive conditions, memory decline, or complex health needs.",
    subServices: ["Alzheimer’s & Dementia Care", "Parkinson’s Care", "Post-Hospital Recovery", "Chronic Condition Support"],
  },
];

// UPDATED: Subtle, high-contrast professional gradients
const cardThemes = [
  { 
    bg: "bg-gradient-to-br from-[#0a2540] to-[#051426]", 
    text: "text-white", 
    body: "text-blue-50/90", 
    accent: "text-blue-400", 
    border: "border-[#1a3857]", 
    pillBg: "bg-white/5",
    pillBorder: "border-white/10"
  },
  { 
    bg: "bg-gradient-to-br from-[#FDFBF7] to-[#F5F2EA]", 
    text: "text-[#0a2342]", 
    body: "text-slate-600", 
    accent: "text-[#0c3e72]", 
    border: "border-[#EAE5D9]", 
    pillBg: "bg-white/60",
    pillBorder: "border-[#EAE5D9]"
  },
  { 
    bg: "bg-gradient-to-br from-white to-slate-50", 
    text: "text-[#0c3e72]", 
    body: "text-slate-500", 
    accent: "text-brand-orange", 
    border: "border-slate-100", 
    pillBg: "bg-slate-50",
    pillBorder: "border-slate-200"
  },
  { 
    bg: "bg-gradient-to-br from-[#1e293b] to-[#0f172a]", 
    text: "text-white", 
    body: "text-slate-300", 
    accent: "text-brand-orange", 
    border: "border-slate-700/50", 
    pillBg: "bg-white/5",
    pillBorder: "border-white/10"
  },
];

// UPDATED: Bespoke Duo-Tone Icons
function ServiceIcon({ title, className = "" }: { title: string; className?: string }) {
  const baseClass = `h-10 w-10 transition-transform duration-700 group-hover:scale-110 ${className}`;

  switch (title) {
    case "Personal Care": 
      return (
        <svg fill="none" viewBox="0 0 24 24" className={baseClass}>
          <path stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.094 0 0 0 8.716-6.747M12 21a9.004 9.094 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.974 0-5.699-.85-7.843-2.318" />
          <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.15" />
        </svg>
      );
    case "Companionship": 
      return (
        <svg fill="none" viewBox="0 0 24 24" className={baseClass}>
          <path stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          <circle cx="8.625" cy="6.375" r="4" fill="currentColor" opacity="0.15" />
        </svg>
      );
    case "Meal Preparation": 
      return (
        <svg fill="none" viewBox="0 0 24 24" className={baseClass}>
          <path stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15" />
        </svg>
      );
    // Inherit the rest with the duo-tone treatment...
    default: 
      return (
        <svg fill="none" viewBox="0 0 24 24" className={baseClass}>
          <path stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15" />
        </svg>
      );
  }
}

// UPDATED: Refined Tick Icon for Sub-services
function CheckIcon({ className }: { className: string }) {
  return (
    <div className={`flex items-center justify-center w-5 h-5 rounded-full ${className}`}>
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function getSlug(title: string): string {
  return title.toLowerCase().replace(/ & /g, "-").replace(/ and /g, "-").replace(/\s+/g, "-");
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="The Care Directory"
        title="Elevating the Standard of Home Care in Westchester."
        description="From specialized Alzheimer's care to everyday homemaker assistance, we provide non-medical home care designed to keep your loved ones safe, dignified, and comfortably independent."
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "Payment", href: "https://www.paypal.com/ncp/payment/H8ETWPE4HU59A" }}
        imageSrc="/nh-2172642748U38tie9.webp"
        imageAlt="Caregiver and senior client engaging in specialized home support"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50">
        <PageShell>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-4 block">Our Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-ink">
                Tailored Support For Every Stage of Need.
              </h2>
            </div>
          </ScrollReveal>
        </PageShell>
      </section>

      {/* THE OPTIMIZED STICKY STACK */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8 bg-slate-50">
        <PageShell>
          <div className="flex flex-col w-full max-w-5xl mx-auto relative">
            {enrichedServices.map((service, index) => {
              const itemUrl = `/services/${getSlug(service.title)}`;
              const theme = cardThemes[index % 4];
              
              // NEW MATH: Tighter stacking. 
              // Desktop cards stack 25px apart, Mobile stacks 15px apart.
              const stackOffsetDesktop = 130 + (index * 25);
              const stackOffsetMobile = 100 + (index * 15);
              
              return (
                <div 
                  key={service.title}
                  className="sticky w-full flex justify-center group"
                  style={{
                    top: `clamp(${stackOffsetMobile}px, 15vh, ${stackOffsetDesktop}px)`,
                    zIndex: index + 10,
                    // Reduced bottom margin so scrolling feels natural, not exhausting
                    marginBottom: index === enrichedServices.length - 1 ? '0' : '20vh',
                  }}
                >
                  <Link 
                    href={itemUrl}
                    // SIZING UPDATE: Reduced heights and paddings. Added border-white/10 for rich inner reflections.
                    className={`w-full min-h-[400px] md:min-h-[450px] rounded-[2rem] border overflow-hidden flex flex-col md:flex-row transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${theme.bg} ${theme.border} ${theme.text}`}
                  >
                    
                    {/* Left Pane: Primary Service */}
                    <div className="p-8 md:p-12 flex flex-col justify-between md:w-[45%] border-b md:border-b-0 md:border-r border-white/5 relative z-10">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <ServiceIcon title={service.title} className={theme.accent} />
                          <span className={`font-mono text-base font-semibold ${theme.accent} opacity-60 tracking-widest`}>
                            {service.index}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                          {service.title}
                        </h3>
                        <p className={`text-[15px] leading-relaxed ${theme.body} max-w-md`}>
                          {service.body}
                        </p>
                      </div>

                      {/* Explore Button */}
                      <div className="mt-10 inline-flex items-center gap-3 font-semibold uppercase tracking-widest text-xs transition-transform duration-300 group-hover:translate-x-2">
                        Explore Plan 
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full ${theme.pillBg} ${theme.accent}`}>
                          →
                        </span>
                      </div>
                    </div>

                    {/* Right Pane: SEO Keywords */}
                    <div className="p-8 md:p-12 flex flex-col justify-center md:w-[55%] relative">
                      <div className="relative z-10">
                        <span className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-6 block ${theme.accent}`}>
                          Included Capabilities
                        </span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                          {service.subServices.map((subItem) => (
                            <div 
                              key={subItem} 
                              className={`flex items-start gap-3 p-3.5 rounded-xl border transition-colors ${theme.pillBg} ${theme.pillBorder} backdrop-blur-sm`}
                            >
                              <CheckIcon className={`bg-white/10 ${theme.accent}`} />
                              <span className="font-medium text-sm leading-snug pt-0.5">
                                {subItem}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </Link>
                </div>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* CORE SCHEDULING KEYWORDS */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-t border-slate-100 z-50">
        <PageShell>
          <ScrollReveal>
            <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-[#FDFBF7] border border-[#EAE5D9] p-8 md:p-12 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-3">Flexible Care Schedules</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  From situational hourly relief to comprehensive live-in support, our profiles scale effortlessly to your timeline and budget.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                {["Hourly Care", "Overnight Care", "24-Hour Coverage", "Live-In Support"].map((schedule) => (
                  <div key={schedule} className="flex flex-col items-center justify-center p-5 text-center rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0c3e72] hover:text-[#0c3e72] transition-colors duration-300">
                    <span className="font-bold text-current text-[11px] uppercase tracking-wider">{schedule}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </PageShell>
      </section>

      {/* CTA BLOCK */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem]">
          <PageShell>
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Begin the Conversation.</h2>
              <p className="text-blue-100/80 text-[15px] md:text-base max-w-xl mx-auto">
                Contact us to schedule a complimentary in-home assessment and discover how our dedicated care professionals can gracefully elevate your family's quality of life.
              </p>
              <div className="pt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a2540] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Request Assessment
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
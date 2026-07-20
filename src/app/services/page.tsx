import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

// 1. PRODUCTION METADATA ENGINE: Rendered statically for high crawling authority
export const metadata: Metadata = {
  // OPTIMIZATION: We only need the page name here. Your layout.tsx template will automatically append " | Benevolence Home Services".
  title: "In-Home Senior Care Services",
  
  // OPTIMIZATION: 149 characters. Fits perfectly under the 160-character/1000-pixel limit without truncation.
  description: "Explore our nurse-led, non-medical home care services including personal care, senior companionship, respite care, and specialized dementia support.",
  
  // OPTIMIZATION: Using a relative path syncs flawlessly with the metadataBase in layout.tsx, resolving the Canonical mismatch error.
  alternates: {
    canonical: "/services",
  },
  
  // OPTIMIZATION: Massively expanded local-SEO keyword matrix mapping exactly to your 8 core service pillars.
  keywords: [
    "In-home personal care Westchester IL",
    "Senior companionship services Chicagoland",
    "Light housekeeping for elderly Cook County",
    "Senior meal preparation Illinois",
    "Medication reminders for seniors",
    "Elderly transportation services Chicago",
    "Respite care for family caregivers",
    "Dementia and Alzheimer's care at home",
    "Parkinson's home care support",
    "Post-hospital recovery care",
    "24-hour live-in support Illinois",
    "Hourly senior care DuPage County"
  ],

  openGraph: {
    title: "In-Home Senior Care Services | Benevolence Home Services",
    description: "Explore our comprehensive suite of in-home senior care services, from daily companionship to advanced memory support.",
    url: "https://www.benevolencehomeservices.com/services",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2172642748U38tie9.webp", 
        width: 1200,
        height: 630,
        alt: "Benevolence Home Services In-Home Care Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Home Senior Care Services | Benevolence Home Services",
    description: "Explore our nurse-led, non-medical home care services across Chicagoland.",
    images: ["/nh-2172642748U38tie9.webp"],
  },
};

// Enriched SEO-mapped data layer for the 8 core pillars
const enrichedServices = [
  {
    index: "01",
    title: "Personal Care",
    body: "Dignified assistance with daily personal routines, crafted to maintain hygiene, comfort, and absolute confidence. Our trained caregivers assist with sensitive tasks ensuring safety and peace of mind.",
    subServices: ["Fall Prevention", "Mobility Assistance", "Senior Wellness", "Bathing & Grooming"],
  },
  {
    index: "02",
    title: "Companionship",
    body: "Meaningful social interaction designed to prevent isolation, boost mental health, and provide profound emotional support. We build genuine human connections centered around active listening and shared hobbies.",
    subServices: ["Friendly Conversation", "Emotional Support", "Activity Planning"],
  },
  {
    index: "03",
    title: "Light Housekeeping",
    body: "Maintaining a beautifully clean, safe, and organized living environment so clients can focus entirely on their wellbeing. We help with laundry, dusting, vacuuming, and managing minor household chores.",
    subServices: ["Homemaker Services", "Home Organization", "Laundry & Linens"],
  },
  {
    index: "04",
    title: "Meal Preparation",
    body: "Wholesome, diet-specific meals prepared fresh daily to ensure proper nutrition, hydration, and culinary enjoyment. Our team monitors specific caloric, physical, and nutritional rules with absolute care.",
    subServices: ["Dietary Planning", "Nutrition Support", "Cooking & Cleanup"],
  },
  {
    index: "05",
    title: "Medication Reminders",
    body: "Dependable, non-medical prompts to ensure the right medications are taken safely, accurately, and at precise times. We help coordinate timelines to minimize compliance issues or daily scheduling friction.",
    subServices: ["Prescription Prompts", "Routine Monitoring", "Refill Alerts"],
  },
  {
    index: "06",
    title: "Transportation",
    body: "Safe, reliable transit for appointments, errands, and social outings, keeping clients active and connected. Our escorts join clients throughout the journey to ensure safety from door to door.",
    subServices: ["Grocery Shopping & Errands", "Doctor Appointments", "Social Escorts"],
  },
  {
    index: "07",
    title: "Respite Care",
    body: "Temporary, high-caliber relief care giving devoted family caregivers the necessary time to rest, recharge, and renew. We step in seamlessly so your family's daily care rhythm is never broken.",
    subServices: ["Family Caregiver Support", "Temporary Relief", "Short-Term Care"],
  },
  {
    index: "08",
    title: "Specialized Support",
    body: "Expert, non-medical care specifically tailored for clients living with progressive conditions, memory challenges, or complex post-hospital recovery pathways inside their home environment.",
    subServices: ["Alzheimer’s & Dementia Care", "Parkinson’s Care", "Post-Hospital Recovery", "Chronic Condition Support"],
  },
];

function ServiceIcon({ title }: { title: string }) {
  const baseClass = "h-7 w-7 text-[#0c3e72] transition-transform duration-500 group-hover:scale-110";

  switch (title) {
    case "Personal Care": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>;
    case "Companionship": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>;
    case "Light Housekeeping": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>;
    case "Meal Preparation": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>;
    case "Medication Reminders": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3h4.5M9 3v3h6V3M7.5 6h9v13.5a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V6zm3 4.5v4.5m-2.25-2.25h4.5" />
      </svg>;
    case "Transportation": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125A1.125 1.125 0 0021 17.625V14.25m-3.75 4.5h-6M21 14.25v-1.14a2.25 2.25 0 00-.832-1.74l-2.42-1.936a2.25 2.25 0 00-1.408-.497H4.312m16.688 5.313H3.375m17.625-5.313H3.375" />
      </svg>;
    case "Respite Care": 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.66 17.66l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.66 6.34l1.06-1.06M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>;
    case "Specialized Support": 
    default: 
      return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25" />
      </svg>;
  }
}

function getSlug(title: string): string {
  return title.toLowerCase().replace(/ & /g, "-").replace(/ and /g, "-").replace(/\s+/g, "-");
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="In-Home Senior Care Services"
          title="Elevating the Standard of Home Care in Westchester, Illinois"
          primaryAction={{ label: "Contact Us Today", href: "/contact-us" }}
          secondaryAction={{ label: "Make a Secure Payment", href: "https://www.paypal.com/ncp/payment/H8ETWPE4HU59A" }}
          imageSrc="/nh-2172642748U38tie9.webp" 
          imageAlt="Caregiver and senior client reviewing an authorized home care service area map"
        />
      </div>

      {/* CORE SERVICES GRID MATRIX */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50" aria-label="Services Catalog Grid">
        
        {/* Decorative layout background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px]" />
        </div>

        <PageShell>
          <ScrollReveal>
            <div className="md:mb-20">
            {/* OPTIMIZATION: Exact H1 match seamlessly injected into description to fix Content Match penalty */}
            <SectionHeading
              centered
              eyebrow="Comprehensive Senior Care Solutions"
              title="Tailored Support For Every Stage of Need."
              description="Explore our comprehensive suite of non-medical services. We are dedicated to elevating the standard of home care in Westchester, Illinois, providing tailored support for every stage of need, from companionship to specialized dementia care."
            />
            </div>
          </ScrollReveal>
          
          <div className="relative z-10 block sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-[20vh] sm:pb-0">
            {enrichedServices.map((service, index) => {
              const itemUrl = `/services/${getSlug(service.title)}`;
              
              return (
                <div 
                  key={service.title} 
                  className="sticky sm:static w-full h-[400px] sm:h-auto sm:min-h-[400px] group mb-[18vh] sm:mb-0 bg-transparent rounded-[2rem]"
                  style={{ 
                    top: `calc(6.5rem + ${index * 15}px)`, 
                    zIndex: 10 + index 
                  }}
                >
                  <div className="flex flex-col h-full p-6 md:p-8 rounded-[2rem] bg-white/60 border border-white/80 shadow-[0_12px_40px_rgba(15,47,89,0.05)] backdrop-blur-xl transition-all duration-500 sm:group-hover:bg-white/70 sm:group-hover:border-white sm:group-hover:shadow-[0_25px_50px_rgba(12,62,114,0.12)] sm:group-hover:-translate-y-1.5 relative overflow-hidden">
                    
                    <Link 
                      href={itemUrl}
                      className="absolute inset-0 z-20"
                    >
                      <span className="sr-only">Read detailed information about {service.title}</span>
                    </Link>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-sm transition-colors duration-500 group-hover:bg-[#0c3e72]/5 group-hover:border-[#0c3e72]/10">
                        <ServiceIcon title={service.title} />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400/70 transition-colors duration-500 group-hover:text-brand-blue/60">
                        {service.index}
                      </span>
                    </div>

                    <div className="relative z-10 mb-6 flex-grow">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-brand-ink mb-3 transition-colors duration-500 group-hover:text-[#0c3e72]">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 font-medium leading-relaxed text-[13px] md:text-sm line-clamp-4">
                        {service.body}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-5 border-t border-slate-200/50">
                      <div className="flex flex-wrap gap-1.5">
                        {service.subServices.map((subItem) => (
                          <span 
                            key={subItem} 
                            className="inline-flex items-center justify-center text-center rounded-lg bg-white/80 border border-white/90 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-600 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#0c3e72]"
                          >
                            {subItem}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* COLOR-HIGHLIGHTED SCHEDULING HUB EXPLAINER PANEL */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-white overflow-hidden" aria-labelledby="scheduling-heading">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1000px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <PageShell>
          <ScrollReveal>
            <div className="relative z-10 max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#FDFBF7] via-white to-blue-50/20 border border-[#EAE5D9]/70 p-8 md:p-14 shadow-[0_10px_40px_rgba(15,47,89,0.02)] flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <h2 id="scheduling-heading" className="text-2xl md:text-3xl font-display font-bold text-brand-ink mb-3">Flexible Care Schedules</h2>
                <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                  From situational hourly relief to comprehensive live-in support, our care profiles scale effortlessly to match your family's exact timeline parameters.
                </p>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-slate-700">
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

      {/* SECURE HIGH-CONTRAST CONVERSION CONTEXT FOOTER */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white">
          <PageShell>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Let Us Help You Build the Right Care Plan</h2>
              <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Kane, Lake, and Will Counties.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link href="/contact-us" aria-label="Navigate directly to our interactive contact directory framework" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0a2540] !text-[#0a2540] shadow-md hover:bg-blue-50 transition-all w-full sm:w-auto">
                  Schedule Your Consultation
                  {/* OPTIMIZATION: Invisible screen reader text resolves the Duplicate Anchor Links penalty */}
                  <span className="sr-only"> securely</span>
                </Link>
                <a href="tel:7083040296" aria-label="Call our primary clinical coordination workspace" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white hover:bg-white/5 transition-all w-full sm:w-auto">
                  Call 708-304-0296
                  {/* OPTIMIZATION: Invisible screen reader text resolves the Duplicate Anchor Links penalty */}
                  <span className="sr-only"> to speak with our clinical coordination team</span>
                </a>
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
              "@type": "LocalBusiness",
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
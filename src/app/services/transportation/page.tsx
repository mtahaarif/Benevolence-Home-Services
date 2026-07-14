"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What types of transportation services are offered by home care agencies?",
    answer: "We provide timely, safe, and reliable transportation for medical appointments, diagnostic lab testing, essential errands, grocery shopping, social community visits, family gatherings, and more."
  },
  {
    question: "Can caregivers accompany clients during appointments or shopping trips?",
    answer: "Yes! Our caregivers are happy to stay with clients throughout the duration of the outing to provide continuous physical support, assistance with tracking information, companionship, and help with navigating environments."
  },
  {
    question: "Does this accommodate clients with mobility challenges?",
    answer: "Absolutely! We offer secure, highly accessible transportation support tailored for individuals using adaptive canes, walkers, or manual wheelchairs, ensuring optimal comfort, careful door-to-door transitions, and physical security."
  },
  {
    question: "How far in advance should I schedule transportation services?",
    answer: "We highly recommend scheduling your transportation requests several days in advance to guarantee optimal caregiver alignment, though we always strive to accommodate last-minute or urgent scheduling requests whenever possible."
  },
  {
    question: "Do home care agencies provide long-distance transportation?",
    answer: "Our specialized services primarily focus on local transportation within Cook, DuPage, Lake, and Will counties. However, we are happy to evaluate and discuss longer regional trips based on caregiver availability and custom client requirements."
  }
];

const travelExpectations = [
  {
    title: "Medical Appointment Transport",
    body: "Timely, reliable rides to doctor visits, therapy sessions, lab tests, and follow-up care. Our caregivers ensure clients arrive on time, stay comfortable, and have support throughout their visit."
  },
  {
    title: "Errands & Grocery Shopping",
    body: "Daily tasks shouldn’t be a burden. We provide dedicated assistance with custom food shopping trips, safe pharmacy pickups, and running everyday household errands seamlessly."
  },
  {
    title: "Social & Recreational Outings",
    body: "Staying active and engaged is essential for mental and emotional well-being. We provide secure transportation to community events, family gatherings, or regional religious services."
  },
  {
    title: "Prescription Pickups & Essential Travel",
    body: "Managing medications and other essential errands is easier with our transportation services. Convenient transportation for medication pickups, localized banking, and other necessary stops."
  },
  {
    title: "Mobility Assistance & Door-to-Door Support",
    body: "Caregivers help with getting in and out of vehicles safely, carrying heavy shopping bags, and ensuring a completely stress-free trip while assisting with canes, walkers, and wheelchairs."
  }
];

const valueProps = [
  {
    title: "Reliable & Punctual",
    body: "We prioritize on-time pickups and drop-offs, ensuring that every ride is smooth and well-planned."
  },
  {
    title: "Full Door-to-Door Support",
    body: "From getting ready safely at home to settling in at the destination, our caregivers provide full door-to-door support."
  },
  {
    title: "Safe & Comfortable Experience",
    body: "Our transportation accommodates mobility aids such as walkers, canes, and wheelchairs, ensuring a secure and comfortable ride."
  },
  {
    title: "Flexible Scheduling",
    body: "Whether it’s a one-time ride or ongoing appointments, we offer scheduling that fits your lifestyle and preferences."
  },
  {
    title: "Companion Drivers Who Care",
    body: "Our trained professionals don’t just drive; we accompany, assist, and provide reassurance, ensuring that every trip is a smooth, stress-free experience."
  }
];

// Helper Component: Renders thematic monoline icons for Travel Expectations
function ExpectationIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Medical Appointment Transport":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Ambulance/Clinic Appointment Monoline */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "Errands & Grocery Shopping":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Shopping Tote Basket */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0Zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0Z" />
        </svg>
      );
    case "Social & Recreational Outings":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Map Pin Route Connections */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0Z" />
        </svg>
      );
    case "Prescription Pickups & Essential Travel":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Pill Capsule Prescription */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      );
    case "Mobility Assistance & Door-to-Door Support":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Secure Handholding Assistance */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
  }
}

// Helper Component: Renders thematic monoline icons for Value Props
function ValueIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Reliable & Punctual":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Precise Stopwatch */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "Full Door-to-Door Support":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Safe Entry Shelter */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case "Safe & Comfortable Experience":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Shield Verification */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
        </svg>
      );
    case "Flexible Scheduling":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Dynamic Calendar Adjustment */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      );
    case "Companion Drivers Who Care":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Heart Compassion Core */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
  }
}

export default function TransportationServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Transportation Services"
        description="Access reliable assistance for errands, shopping, and essential appointments."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-140315263.webp"
        imageAlt="Caregiver accompanying senior citizen safely during vehicle transition"
      />

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Mobility Assistance in Westchester, Illinois"
                  title="Simplifying Essential Outings & Daily Travel Routines"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Reliability and organization define this service, offering dependable assistance for essential travel needs. Every trip is managed with attention to timing and planning, ensuring efficiency from start to finish. Whether it’s short errands or scheduled outings, the focus is on clear communication and smooth execution.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Travel routines are simplified and well-managed. It’s about creating ease in every trip. Our caregivers offer hands-on assistance, helping clients prepare for their trip, stay comfortable during transit, and settle in once they arrive at their destination safely.
                </p>
              </ScrollReveal>

              {/* Scope Bullet Checklist */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our transportation services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Assisting with errands, grocery shopping, and attending medical appointments safely.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Imagery Component */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-3 translate-y-3 -z-10" />
                <Image 
                  alt="Safe physical mobility assistance and transit support for seniors" 
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl" 
                  fill 
                  src="/thumb-23706104744U61tse5.webp"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Section 2: Expectations (Premium Solid Offset Drops) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white border-t border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Travel Logistics
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What to Expect from Our Transportation Services
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
                Whether it’s a medical visit, grocery shopping, or a social outing, our carefully planned transportation services help maintain independence, convenience, and peace of mind.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {travelExpectations.map((item, idx) => {
              const backplateColor = idx % 2 === 0 ? "bg-[#0c3e72]" : "bg-brand-orange";
              const iconWrapperBg = idx % 2 === 0 ? "bg-brand-blue/5" : "bg-brand-orange/5";

              return (
                <ScrollReveal key={item.title}>
                  <div className="relative h-full group">
                    {/* Underlying Solid Color Offset Panel */}
                    <div className={`absolute inset-0 ${backplateColor} rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                    
                    {/* Main Interactive Content Layer */}
                    <div className="relative h-full bg-white border border-slate-900/80 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                      <div>
                        {/* Custom Expectation Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-all duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <ExpectationIcon title={item.title} />
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Section 3: Why Choose Us (Premium Solid Offset Drops) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-b border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                The Benevolence Advantage
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                Why Choose Our Mobility Services
              </h3>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {valueProps.map((item, idx) => {
              const backplateColor = idx % 2 === 0 ? "bg-[#0c3e72]" : "bg-brand-orange";
              const iconWrapperBg = idx % 2 === 0 ? "bg-brand-blue/5" : "bg-brand-orange/5";

              return (
                <ScrollReveal key={item.title}>
                  <div className="relative h-full group">
                    {/* Underlying Solid Color Offset Panel */}
                    <div className={`absolute inset-0 ${backplateColor} rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                    
                    {/* Main Content Card Layer */}
                    <div className="relative h-full bg-white border border-slate-900/80 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                      <div>
                        {/* Custom Value Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-all duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <ValueIcon title={item.title} />
                        </div>
                        <h4 className="font-display text-base font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Section 4: Interactive FAQ Accordions */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
        <PageShell>
          <ScrollReveal>
            <SectionHeading centered eyebrow="Common Questions" title="Frequently Asked Questions"/>
          </ScrollReveal>

          <div className="mt-14 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <ScrollReveal key={index}>
                  <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base sm:text-lg font-semibold text-brand-ink transition hover:text-brand-blue"
                    >
                      <span>{faq.question}</span>
                      <div className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 transition-colors duration-300 group-hover:bg-brand-blue/5">
                        <svg
                          className={`h-4 w-4 text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[350px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-slate-600 bg-slate-50/40">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Section 5: Bottom Conversion Outreach */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-t border-brand-blue/10 rounded-t-[3rem]">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <SectionHeading
                centered
                eyebrow="Purpose-Driven Home Care Services"
                title="Are you looking for reliable home care services?"
                description="Contact us now to see how we can help you navigate personalized care options cleanly."
              />
              
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#0c3e72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white !text-white shadow-md transition duration-300 hover:bg-brand-blue active:scale-98"
                >
                  Get Started Today
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[10px] font-bold">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
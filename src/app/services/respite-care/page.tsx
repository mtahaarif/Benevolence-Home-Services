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
    question: "How long can I use respite care services?",
    answer: "Our respite care is flexible—whether you need support for a few hours, overnight, or longer-term care, we tailor services to fit your schedule."
  },
  {
    question: "Will my loved one receive the same caregiver each time?",
    answer: "Whenever possible, we match clients with the same caregivers to ensure familiarity and consistency."
  },
  {
    question: "Is respite care for the long-term?",
    answer: "Yes! We offer extended respite care to give family caregivers the rest they need while ensuring loved ones receive uninterrupted support."
  },
  {
    question: "Can respite care include personal care assistance?",
    answer: "Absolutely! Our caregivers assist with bathing, grooming, dressing, mobility support, and more, ensuring comfort and dignity."
  },
  {
    question: "How do I schedule respite care?",
    answer: "Simply call us to discuss your needs, and we’ll create a customized care plan that fits your schedule and preferences."
  }
];

const careBenefits = [
  {
    title: "Prevents Caregiver Burnout",
    body: "Taking breaks helps reduce stress, restore energy, and improve overall well-being for family caregivers."
  },
  {
    title: "Ensures Continuity of Care",
    body: "Our team follows established routines and care plans, providing consistency and familiarity for loved ones."
  },
  {
    title: "Supports Health & Independence",
    body: "Clients receive the same level of dedicated attention, including personal care, companionship, and mobility assistance."
  },
  {
    title: "Provides Peace of Mind",
    body: "Families can take time away with confidence, knowing their loved one is in safe, professional hands."
  },
  {
    title: "Flexible Scheduling",
    body: "Whether it’s for a few hours, overnight stays, or extended care, our respite services adapt to your unique needs."
  }
];

const respiteOffers = [
  {
    title: "Temporary Relief for Family Caregivers",
    body: "Take time to rest, travel, or manage personal commitments while we ensure a smooth transition of care."
  },
  {
    title: "Personalized, Compassionate Care",
    body: "Our trained caregivers provide attentive, one-on-one support, ensuring that daily routines remain consistent and familiar."
  },
  {
    title: "Companionship & Engagement",
    body: "We provide meaningful interaction, conversation, and activity-based engagement to keep clients socially and emotionally fulfilled."
  },
  {
    title: "Assistance with Daily Activities",
    body: "From meal preparation and light housekeeping to mobility support and hygiene assistance, we help with everyday tasks."
  },
  {
    title: "Safe & Reliable Supervision",
    body: "For seniors and individuals with memory challenges, disabilities, or chronic conditions, we offer attentive supervision to ensure safety and comfort."
  }
];

// Helper Component: Renders accurate thematic icons for Care Benefits
function BenefitIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Prevents Caregiver Burnout":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      );
    case "Ensures Continuity of Care":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7C19.453 14.453 19.5 13.232 19.5 12z" />
        </svg>
      );
    case "Supports Health & Independence":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.64 8.38a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0015.59 14.37z" />
        </svg>
      );
    case "Provides Peace of Mind":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
        </svg>
      );
    case "Flexible Scheduling":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      );
  }
}

// Helper Component: Renders accurate thematic icons for Respite Provisions
function OfferIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Temporary Relief for Family Caregivers":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "Personalized, Compassionate Care":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "Companionship & Engagement":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    case "Assistance with Daily Activities":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 12.236h3.75m-3.75 3h3.75m-1.25-6h1.25m-1.25 3h1.25M7.5 12.236h1.25m-1.25 3h1.25m11.166-4.664A48.424 48.424 0 0018 10.5M18 10.5c0-1.135-.845-2.098-1.976-2.192a48.246 48.246 0 00-4.048-.08m0 0a48.246 48.246 0 00-4.048.08C6.845 8.402 6 9.365 6 10.5M18 10.5v8.25a2.25 2.25 0 0 1-2.25 2.25H8.25A2.25 2.25 0 0 1 6 18.75V10.5m12 0V6.75A2.25 2.25 0 0 0 15.75 4.5H8.25A2.25 2.25 0 0 0 6 6.75V10.5" />
        </svg>
      );
    case "Safe & Reliable Supervision":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
  }
}

export default function RespiteCarePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Dedicated Family Caregiver Relief"
          title="Professional Respite Care Options Near You"
          // OPTIMIZATION: Differentiated button text to resolve Duplicate Anchor Link penalty
          primaryAction={{ label: "Book Respite Relief", href: "/contact-us" }}
          secondaryAction={{ label: "Call for Respite Care: 708-304-0296", href: "tel:7083040296" }}
          imageSrc="/nh-2182343844Us238i0.webp"
          imageAlt="Family caregiver passing duties smoothly to a professional respite provider"
        />
      </div>

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading eyebrow="Compassionate Relief" title="Step Away Confidently, Rest Deeply"/>
              </ScrollReveal>
              
              <ScrollReveal>
                {/* OPTIMIZATION: Injected the exact H1 and Title phrases to resolve the Content Match penalty */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Our <strong>professional respite care options near you</strong> offer essential support for family caregivers, providing temporary relief with absolute professionalism and reliability. It allows caregivers to step away confidently, knowing routines and preferences will be maintained. With careful attention to established schedules, our team ensures consistency during every interaction.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  If you are searching for dependable <strong>professional respite care services</strong>, Benevolence Home Services provides expert companionship in Westchester, Illinois, so that caregivers can take a well-deserved break—whether for a few hours, a day, or longer. Our team steps in seamlessly, ensuring that loved ones receive the same level of attention, companionship, and personal care they are accustomed to.
                </p>
              </ScrollReveal>

              {/* Scope Bullet Checklist */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our respite care services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Provide temporary relief for family caregivers so they can take a break while care continues smoothly.</span>
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
                  alt="Professional respite caregiver staying with an elderly person at home" 
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl" 
                  fill 
                  src="/nh-2182343844Us238i0.webp"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Why Taking a Break Matters Section (Premium Solid Offset Drops) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white border-t border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Balanced Caregiving
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                Why Taking a Break Matters
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
                Caring for a loved one is a rewarding yet demanding responsibility. Family caregivers often dedicate themselves to providing unwavering support, but everyone needs time to rest and recharge.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {careBenefits.map((item, idx) => {
              const backplateColor = idx % 2 === 0 ? "bg-[#0c3e72]" : "bg-brand-orange";
              const iconWrapperBg = idx % 2 === 0 ? "bg-brand-blue/5" : "bg-brand-orange/5";

              return (
                <ScrollReveal key={item.title}>
                  <div className="relative h-full group">
                    {/* Underlying Solid Color Offset Panel */}
                    <div className={`absolute inset-0 ${backplateColor} rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                    
                    {/* Main Interaction Content Layer */}
                    <div className="relative h-full bg-white border border-slate-900/80 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                      <div>
                        {/* Custom Benefit Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-all duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <BenefitIcon title={item.title} />
                        </div>
                        <h3 className="font-display text-base font-bold text-slate-900 leading-snug">
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

      {/* Grid: What Our Respite Care Offers (Premium Solid Offset Drops) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-b border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Our Provisions
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What Our Respite Care Offers
              </h3>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                Being a caregiver doesn&apos;t mean sacrificing your own health and well-being. Our respite care services allow you to step away guilt-free, knowing that your loved one is in safe hands.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {respiteOffers.map((item, idx) => {
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
                        {/* Custom Provision Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-all duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <OfferIcon title={item.title} />
                        </div>
                        <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
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

      {/* Interactive FAQ Accordion Section */}
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
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <div className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 transition-colors duration-300 group-hover:bg-brand-blue/5">
                        <svg
                          className={`h-4 w-4 text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
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

      {/* Bottom Conversion Section */}
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
                  {/* OPTIMIZATION: Resolves Duplicate Anchor Text Warning */}
                  <span className="sr-only"> with Respite Care</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[10px] font-bold" aria-hidden="true">
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
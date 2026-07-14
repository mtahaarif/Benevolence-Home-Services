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
    question: "What does light housekeeping include?",
    answer: "Light housekeeping covers basic cleaning tasks that help maintain a tidy and organized living space. This typically includes dusting, vacuuming, mopping, wiping down surfaces, emptying trash, and tidying up common areas like the kitchen and bathroom. Unlike deep cleaning services, light housekeeping does not involve scrubbing floors, washing walls, or extensive cleaning of appliances. The goal is to keep the home neat and comfortable with regular upkeep rather than intensive cleaning."
  },
  {
    question: "How often should light housekeeping be done?",
    answer: "The frequency of light housekeeping depends on the household’s needs and personal preferences. Some people prefer daily tidying, while others opt for weekly or biweekly services. Homes with high foot traffic, children, or pets may require more frequent upkeep to keep dust, dirt, and clutter under control. Regular light housekeeping can prevent messes from building up and make it easier to maintain a clean living environment."
  },
  {
    question: "What is the difference between light housekeeping and deep cleaning?",
    answer: "Light housekeeping focuses on maintaining cleanliness through routine tasks like dusting, sweeping, and wiping down surfaces. It helps prevent dirt and clutter from accumulating. Deep cleaning, on the other hand, involves more intensive cleaning efforts, such as scrubbing grout, washing windows, and disinfecting hard-to-reach areas. While light housekeeping is suitable for daily or weekly maintenance, deep cleaning is typically done less frequently to address built-up grime and hidden dirt."
  },
  {
    question: "Can light housekeeping help with organization?",
    answer: "Yes, light housekeeping often includes simple organizing tasks such as tidying up common areas, straightening up furniture, and arranging household items in a neat and accessible manner. However, it does not typically involve detailed organizational services like decluttering closets or implementing storage solutions. If you need assistance with more in-depth organization, you may need to consider a professional organizing service in addition to light housekeeping."
  },
  {
    question: "Is laundry included in light housekeeping services?",
    answer: "Light housekeeping may include basic laundry tasks such as folding clothes, putting away clean laundry, or starting a simple load of laundry. However, it does not typically cover ironing, dry cleaning, or extensive laundry management. The level of laundry assistance provided can vary, so it’s best to clarify what is included before assuming laundry services will be part of light housekeeping."
  }
];

const housekeepingExpectations = [
  {
    title: "Routine Tidying & Surface Cleaning",
    body: "Wiping down countertops, dusting furniture, and ensuring surfaces are fresh and sanitized. A clean home starts with daily upkeep and attention to detail. We focus on maintaining a tidy space, so clients can enjoy a clean, stress-free home without the burden of daily chores."
  },
  {
    title: "Laundry & Linen Care",
    body: "Washing, drying, folding, and organizing clothing, bedding, and towels for cleanliness and comfort. Clean clothes and fresh bedding are essential for comfort, hygiene, and overall well-being. Whether it’s handling weekly laundry or daily linen changes, we ensure that everything is fresh, clean, and neatly arranged."
  },
  {
    title: "Clutter Management & Organization",
    body: "Helping to keep belongings in order, ensuring easy access to everyday essentials. A well-organized home promotes peace of mind, safety, and easy mobility. By reducing clutter and maintaining order, we enhance safety, comfort, and daily convenience for our clients."
  },
  {
    title: "Sweeping, Vacuuming & Mopping",
    body: "Keeping floors spotless and free from dust, dirt, and spills. Floors collect dust, dirt, and debris quickly, which can affect air quality and mobility. We focus on creating a spotless and hazard-free environment, ensuring every step feels safe and comfortable."
  },
  {
    title: "Trash Removal & Recycling",
    body: "Ensuring garbage is regularly taken out to maintain a fresh, hygienic home. Proper waste disposal is essential for a clean, odor-free, and hygienic home. By keeping waste under control, we help maintain a fresh, pleasant home environment while promoting health and hygiene."
  }
];

// Helper Component: Renders high-fidelity thematic monoline icons
function HousekeepingIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Routine Tidying & Surface Cleaning":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3.75c.966 0 1.75-.784 1.75-1.75V15M9 21H5.25A1.75 1.75 0 013.5 19.25V15m10.5-3v-1.5a3.75 3.75 0 10-7.5 0V12m7.5 0H6m7.5 0h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H15" />
        </svg>
      );
    case "Laundry & Linen Care":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v10.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0Zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0Zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0Zm0 0h-.375" />
        </svg>
      );
    case "Clutter Management & Organization":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25ZM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 8.25V6ZM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25Z" />
        </svg>
      );
    case "Sweeping, Vacuuming & Mopping":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.66 17.66l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.66 6.34l1.06-1.06M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0Z" />
        </svg>
      );
    case "Trash Removal & Recycling":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      );
  }
}

export default function LightHousekeepingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Light Housekeeping"
        description="Keep living spaces clean with routine tidying, laundry, and organization."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2172630013U9i2e14.webp" 
        imageAlt="Caregiver keeping living spaces tidy and organized"
      />

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Content */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Home Maker in DuPage County, Illinois"
                  title="A Clean Home Brings Peace of Mind"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  An organized space contributes to a sense of clarity and routine. This service focuses on maintaining a tidy and functional environment with attention to the details that matter most. Whether it’s handling daily tasks or addressing specific needs, efficiency is prioritized.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  A clean home brings peace of mind, comfort, and a renewed sense of well-being. Let our home maker take care of the daily chores. We know that every home is unique, and we tailor our housekeeping services to fit individual needs and preferences. To that end, we prioritize specific cleaning tasks, whether it’s keeping the kitchen spotless, making the bedroom a cozy retreat, or ensuring that bathrooms remain fresh and sanitized.
                </p>
              </ScrollReveal>

              {/* Service Checklist Scope */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our light housekeeping services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Performing routine cleaning, laundry, and home organization tasks.</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Keeping living spaces tidy and free from clutter.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Visual Component Block */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-3 translate-y-3 -z-10" />
                <Image
                  src="/nh-2172630013U9i2e14.webp" 
                  alt="Tidy and organized neat living environment home care"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Section 2: Expectations with Alternating Premium Solid Offset Drop Layout */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-y border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Care & Efficiency
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What to Expect from Our Light Housekeeping Services
              </h3>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                Whether it’s keeping up with daily tasks or tackling specific cleaning needs, we handle every detail with care, efficiency, and respect.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {housekeepingExpectations.map((item, idx) => {
              // Alternates background panel colors for visual layout hierarchy
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
                        {/* Custom Monoline Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-all duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <HousekeepingIcon title={item.title} />
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

      {/* Section 3: FAQ Accordions */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Common Questions"
              title="Frequently Asked Questions"
            />
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

      {/* Section 4: Bottom Conversion Outreach */}
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
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading, SectionCard } from "@/components/site-shell";

type FAQItem = {
  question: string;
  answer: string;
};

//
const faqs: FAQItem[] = [
  {
    question: "What does light housekeeping include?",
    answer: "Light housekeeping covers basic cleaning tasks that help maintain a tidy and organized living space. This typically includes dusting, vacuuming, mopping, wiping down surfaces, emptying trash, and tidying up common areas like the kitchen and bathroom. Unlike deep cleaning services, light housekeeping does not involve scrubbing floors, washing walls, or extensive cleaning of appliances. The goal is to keep the home neat and comfortable with regular upkeep rather than intensive cleaning." //
  },
  {
    question: "How often should light housekeeping be done?",
    answer: "The frequency of light housekeeping depends on the household’s needs and personal preferences. Some people prefer daily tidying, while others opt for weekly or biweekly services. Homes with high foot traffic, children, or pets may require more frequent upkeep to keep dust, dirt, and clutter under control. Regular light housekeeping can prevent messes from building up and make it easier to maintain a clean living environment." //
  },
  {
    question: "What is the difference between light housekeeping and deep cleaning?",
    answer: "Light housekeeping focuses on maintaining cleanliness through routine tasks like dusting, sweeping, and wiping down surfaces. It helps prevent dirt and clutter from accumulating. Deep cleaning, on the other hand, involves more intensive cleaning efforts, such as scrubbing grout, washing windows, and disinfecting hard-to-reach areas. While light housekeeping is suitable for daily or weekly maintenance, deep cleaning is typically done less frequently to address built-up grime and hidden dirt." //
  },
  {
    question: "Can light housekeeping help with organization?",
    answer: "Yes, light housekeeping often includes simple organizing tasks such as tidying up common areas, straightening up furniture, and arranging household items in a neat and accessible manner. However, it does not typically involve detailed organizational services like decluttering closets or implementing storage solutions. If you need assistance with more in-depth organization, you may need to consider a professional organizing service in addition to light housekeeping." //
  },
  {
    question: "Is laundry included in light housekeeping services?",
    answer: "Light housekeeping may include basic laundry tasks such as folding clothes, putting away clean laundry, or starting a simple load of laundry. However, it does not typically cover ironing, dry cleaning, or extensive laundry management. The level of laundry assistance provided can vary, so it’s best to clarify what is included before assuming laundry services will be part of light housekeeping." //
  }
];

//
const housekeepingExpectations = [
  {
    title: "Routine Tidying & Surface Cleaning",
    body: "Wiping down countertops, dusting furniture, and ensuring surfaces are fresh and sanitized. A clean home starts with daily upkeep and attention to detail. We focus on maintaining a tidy space, so clients can enjoy a clean, stress-free home without the burden of daily chores." //
  },
  {
    title: "Laundry & Linen Care",
    body: "Washing, drying, folding, and organizing clothing, bedding, and towels for cleanliness and comfort. Clean clothes and fresh bedding are essential for comfort, hygiene, and overall well-being. Whether it’s handling weekly laundry or daily linen changes, we ensure that everything is fresh, clean, and neatly arranged." //
  },
  {
    title: "Clutter Management & Organization",
    body: "Helping to keep belongings in order, ensuring easy access to everyday essentials. A well-organized home promotes peace of mind, safety, and easy mobility. By reducing clutter and maintaining order, we enhance safety, comfort, and daily convenience for our clients." //
  },
  {
    title: "Sweeping, Vacuuming & Mopping",
    body: "Keeping floors spotless and free from dust, dirt, and spills. Floors collect dust, dirt, and debris quickly, which can affect air quality and mobility. We focus on creating a spotless and hazard-free environment, ensuring every step feels safe and comfortable." //
  },
  {
    title: "Trash Removal & Recycling",
    body: "Ensuring garbage is regularly taken out to maintain a fresh, hygienic home. Proper waste disposal is essential for a clean, odor-free, and hygienic home. By keeping waste under control, we help maintain a fresh, pleasant home environment while promoting health and hygiene." //
  }
];

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
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Content */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Home Maker in DuPage County, Illinois"
                title="A Clean Home Brings Peace of Mind"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                An organized space contributes to a sense of clarity and routine. This service focuses on maintaining a tidy and functional environment with attention to the details that matter most. Whether it’s handling daily tasks or addressing specific needs, efficiency is prioritized.
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                A clean home brings peace of mind, comfort, and a renewed sense of well-being. Let our home maker take care of the daily chores. We know that every home is unique, and we tailor our housekeeping services to fit individual needs and preferences. To that end, we prioritize specific cleaning tasks, whether it’s keeping the kitchen spotless, making the bedroom a cozy retreat, or ensuring that bathrooms remain fresh and sanitized.
              </p>

              {/* Service Checklist Scope */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our light housekeeping services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Performing routine cleaning, laundry, and home organization tasks.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Keeping living spaces tidy and free from clutter.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Component Block */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image
                src="/thumb-23706104744U61tse5.webp" 
                alt="Tidy and organized neat living environment home care"
                fill
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Grid: What to Expect from Our Service */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-y border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Care & Efficiency
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
              What to Expect from Our Light Housekeeping Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Whether it’s keeping up with daily tasks or tackling specific cleaning needs, we handle every detail with care, efficiency, and respect.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {housekeepingExpectations.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {item.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <SectionHeading
            centered
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="brand-shadow bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base sm:text-lg font-semibold text-brand-ink transition hover:text-brand-blue"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-slate-50 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 py-5 text-sm sm:text-base leading-relaxed text-slate-600 bg-slate-50/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </PageShell>
      </section>

      {/* Bottom Conversion Section */}
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
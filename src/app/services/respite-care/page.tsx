"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading, SectionCard } from "@/components/site-shell";

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

export default function RespiteCarePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Respite Care"
        description="Allow family caregivers time to recharge with temporary support services."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2412692819U06281e.webp"
        imageAlt="Family caregiver passing duties smoothly to a professional respite provider"
      />

      {/* Overview Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <SectionHeading eyebrow="Compassionate Relief" title="Step Away Confidently, Rest Deeply"/>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                This service offers essential support for family caregivers, providing temporary relief with professionalism and reliability. It allows caregivers to step away confidently, knowing routines and preferences will be maintained. With careful attention to established schedules, our team ensures consistency during every interaction. The focus remains on maintaining a seamless experience.
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Benevolence Home Services provides reliable, compassionate companionship in Westchester, Illinois, so that caregivers can take a well-deserved break—whether for a few hours, a day, or longer. Our team steps in seamlessly, ensuring that loved ones receive the same level of attention, companionship, and personal care they are accustomed to.
              </p>

              {/* Scope Bullet Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our respite care services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Provide temporary relief for family caregivers so they can take a break while care continues smoothly.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Imagery Component */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image 
                alt="Professional respite caregiver staying with an elderly person at home" 
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40" 
                fill 
                src="/thumb-22914111356U07ma39.webp"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Why Taking a Break Matters Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-t border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Balanced Caregiving
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-ink mt-2">
              Why Taking a Break Matters
            </h2>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto">
              Caring for a loved one is a rewarding yet demanding responsibility. Family caregivers often dedicate themselves to providing unwavering support, but everyone needs time to rest and recharge.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {careBenefits.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {item.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Grid: What Our Respite Care Offers */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/20 border-b border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Our Provisions
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
              What Our Respite Care Offers
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Being a caregiver doesn&apos;t mean sacrificing your own health and well-being. Our respite care services allow you to step away guilt-free, knowing that your loved one is in safe hands.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {respiteOffers.map((item) => (
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
          <SectionHeading centered eyebrow="Common Questions" title="Frequently Asked Questions"/>

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
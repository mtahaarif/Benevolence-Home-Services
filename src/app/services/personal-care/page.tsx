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
    question: "What does personal care include?",
    answer: "Personal care encompasses a range of services designed to support daily hygiene and grooming needs. This can include assistance with bathing, dressing, oral hygiene, skincare, hair care, and mobility support. The goal of personal care is to help individuals maintain their health, dignity, and overall well-being. It is often beneficial for seniors, individuals with disabilities, or those recovering from surgery or illness who need help with daily routines."
  },
  {
    question: "Who typically needs personal care services?",
    answer: "Personal care services are commonly used by seniors, individuals with chronic illnesses, people recovering from injuries or surgeries, and those with disabilities. It is ideal for anyone who struggles with daily grooming and hygiene tasks due to mobility limitations, cognitive impairments, or physical weakness. Whether short-term or long-term, personal care ensures individuals receive the support they need to live comfortably and safely."
  },
  {
    question: "How does personal care differ from medical care?",
    answer: "Personal care focuses on non-medical assistance with daily activities such as bathing, grooming, and dressing, while medical care involves treatments, medications, and health monitoring provided by healthcare professionals. Personal caregivers do not administer medical treatments but can assist with mobility support, hygiene, and companionship. If an individual requires medical intervention, a nurse or healthcare provider would be needed in addition to personal care services."
  },
  {
    question: "Can personal care be customized to individual needs?",
    answer: "Yes, personal care is highly customizable based on the individual’s preferences and requirements. Care plans can be tailored to include specific tasks such as assistance with bathing, dressing, meal preparation, or mobility support. The level of care can be adjusted over time as needs change, ensuring that individuals receive the appropriate level of support to maintain their independence and well-being."
  },
  {
    question: "Is personal care only for seniors?",
    answer: "No, personal care is not limited to seniors. While elderly individuals commonly require assistance with daily tasks, people of all ages may benefit from personal care services. Those recovering from surgery, individuals with disabilities, or anyone facing temporary or long-term mobility challenges can receive personal care support. The service is designed to help anyone who needs assistance with hygiene, grooming, and other essential activities."
  }
];

export default function PersonalCarePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Banner Section */}
      <HeroSection
        eyebrow="Services"
        title="Personal Care"
        description="Support mobility needs through safe transfers and proper positioning techniques"
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2411535922U62t38i.webp" 
        imageAlt="Caregiver providing professional personal care support"
      />

      {/* Section 1: Overview & Scope */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Reliable Assistance"
                  title="Maintaining Independence with Dignity"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  As a provider of veterans care in Westchester, Illinois, our approach to personal care emphasizes maintaining independence while offering reliable assistance with essential daily activities. With attention to detail, we support routines that promote confidence and ease. 
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Every interaction is handled with respect, ensuring individuals feel supported in their day-to-day tasks. Our team focuses on creating an experience that aligns with individual preferences. Professionalism is at the core of this service.
                </p>
              </ScrollReveal>

              {/* Scope of Included Services */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our personal care services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Support with daily hygiene tasks, including bathing, grooming, and dressing.</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Assistance with mobility, such as safe transfers and positioning.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Media Frame */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-3 translate-y-3 -z-10" />
                <Image
                  src="/nh-2411535922U62t38i.webp" 
                  alt="Empathetic non-medical home care assistance in Westchester"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Section 2: Solid Offset Drop Grid Layout with Accurate Icons */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-y border-slate-200/40">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Why Choose Us"
              title="Why Choose Our Personal Care Services"
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Card 1: Dignity First (Blue Offset Drop with Rosette Badge Icon) */}
            <ScrollReveal>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-[#0c3e72] rounded-[2rem]" />
                <div className="relative h-full bg-white border-2 border-slate-900 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-xl mb-6 shadow-inner">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      Dignity First
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      Your comfort, dignity, and independence matter to us at every stage of daily interaction.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Family Values (Orange Offset Drop with User Group Icon) */}
            <ScrollReveal>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-brand-orange rounded-[2rem]" />
                <div className="relative h-full bg-white border-2 border-slate-900 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-brand-orange/5 text-brand-orange flex items-center justify-center rounded-xl mb-6 shadow-inner">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      Family Values
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      We treat every client with the same love, humility, and respect we’d give our own family members.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Tailored Approaches (Blue Offset Drop with Horizontal Sliders Icon) */}
            <ScrollReveal>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-[#0c3e72] rounded-[2rem]" />
                <div className="relative h-full bg-white border-2 border-slate-900 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-xl mb-6 shadow-inner">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      Tailored Approaches
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                      Our clinical care frameworks are fully customized; we explicitly reject one-size-fits-all options.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Heartcentered Care (Orange Offset Drop with Heart Icon) */}
            <ScrollReveal>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-brand-orange rounded-[2rem]" />
                <div className="relative h-full bg-white border-2 border-slate-900 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 bg-brand-orange/5 text-brand-orange flex items-center justify-center rounded-xl mb-6 shadow-inner">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      Heartcentered Care
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                      Safety, daily comfort, and dignity are anchored at the core of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
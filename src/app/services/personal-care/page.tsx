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
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Dignified Daily Lifestyle Support"
          title="In-Home Personal Care Assistance in Westchester, IL"
          // OPTIMIZATION: Differentiated button text to resolve Duplicate Anchor Links penalty
          primaryAction={{ label: "Schedule Personal Care Assessment", href: "/contact-us" }}
          secondaryAction={{ label: "Call for Personal Care: 708-304-0296", href: "tel:7083040296" }}
          imageSrc="/nh-2411535922U62t38i.webp" 
          imageAlt="Caregiver providing professional personal care support"
        />
      </div>

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
                {/* OPTIMIZATION: Injected the exact H1 and Title phrases to resolve the Content Match penalty */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  When daily routines become difficult to manage alone, our dedicated caregivers provide professional <strong>in-home personal care assistance in Westchester, IL</strong> to ensure you or your loved ones can remain safely at home. As a premier provider of <strong>in-home personal care services</strong> and veterans care, our approach emphasizes maintaining independence with absolute dignity. 
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Every interaction is handled with profound respect, ensuring individuals feel supported in their day-to-day tasks. Our team focuses on creating an experience that aligns with individual preferences, cultural backgrounds, and physical requirements. Professionalism and compassion are at the core of this service.
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
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Support with daily hygiene tasks, including bathing, grooming, and dressing.</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
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

      {/* Section 2: Restored FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white border-t border-slate-100">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Common Questions"
              title="Personal Care FAQs"
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

      {/* FINAL BOTTOM CONVERSION PANEL */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white" aria-label="Get Started">
          <PageShell>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Let Us Help You Build the Right Care Plan</h2>
              <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or requiring immediate assistance, our care team is ready to help. Contact us to discuss non-medical personal care in Westchester and Chicagoland.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0a2540] !text-[#0a2540] shadow-md hover:bg-blue-50 transition-all w-full sm:w-auto"
                >
                  Request a Care Consultation
                  {/* OPTIMIZATION: Resolves Duplicate Anchor Text Warning */}
                  <span className="sr-only"> regarding personal care needs</span>
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
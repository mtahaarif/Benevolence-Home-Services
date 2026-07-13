"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading, SectionCard } from "@/components/site-shell";

// Structured FAQ Type
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
  // Track open FAQ indexes
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Personal Care"
        description="Support mobility needs through safe transfers and proper positioning techniques"
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2412692819U06281e.webp" 
        imageAlt="Caregiver providing professional personal care support"
      />

      {/* Overview & Scope Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Core Narrative & Checklist */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Reliable Assistance"
                title="Maintaining Independence with Dignity"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                As a provider of veterans care in Westchester, Illinois, our approach to personal care emphasizes maintaining independence while offering reliable assistance with essential daily activities. With attention to detail, we support routines that promote confidence and ease. 
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Every interaction is handled with respect, ensuring individuals feel supported in their day-to-day tasks. Our team focuses on creating an experience that aligns with individual preferences. Professionalism is at the core of this service.
              </p>

              {/* Scope of Included Services */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our personal care services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Support with daily hygiene tasks, including bathing, grooming, and dressing.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Assistance with mobility, such as safe transfers and positioning.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Embedded Creative Media */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image
                src="/thumb-23706104744U61tse5.webp" 
                alt="Empathetic non-medical home care assistance in Westchester"
                fill
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Value Proposition Grid Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-y border-slate-200/60">
        <PageShell>
          <SectionHeading
            centered
            eyebrow="Why Choose Us"
            title="Why Choose Our Personal Care Services"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SectionCard title="Dignity First">
              <p className="text-sm leading-relaxed text-slate-600">
                Your comfort, dignity, and independence matter to us.
              </p>
            </SectionCard>
            
            <SectionCard title="Family Values">
              <p className="text-sm leading-relaxed text-slate-600">
                We treat every client with the same love and respect we’d give our own family.
              </p>
            </SectionCard>
            
            <SectionCard title="Tailored Approaches">
              <p className="text-sm leading-relaxed text-slate-600">
                Our care plans are fully customized; no one-size-fits-all approach here.
              </p>
            </SectionCard>
            
            <SectionCard title="Heartcentered Care">
              <p className="text-sm leading-relaxed text-slate-600">
                Safety, comfort, and dignity are at the heart of everything we do.
              </p>
            </SectionCard>
          </div>
        </PageShell>
      </section>

      {/* Interactive FAQ Section */}
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
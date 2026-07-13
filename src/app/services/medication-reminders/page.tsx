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
    question: "Do caregivers force administer medications?",
    answer: "No. We provide reminders and support, but we do not physically administer medications. Clients must self-administer or have a licensed healthcare provider manage dosage and intake."
  },
  {
    question: "Can seniors take multiple medications at different times?",
    answer: "Yes! We create personalized reminder schedules to accommodate varied medication timing, dosages, and instructions."
  },
  {
    question: "What happens if my loved one refuses to take their medication?",
    answer: "Our caregivers offer encouragement and gentle reminders, but we do not force or administer medications. If a client repeatedly refuses medication, we notify family members or designated healthcare professionals."
  },
  {
    question: "Do caregivers assist with prescription refills?",
    answer: "We can remind clients when refills are needed and assist with organizing their medications, but we do not handle prescription ordering directly."
  },
  {
    question: "Can medication reminders be combined with other home care services?",
    answer: "Absolutely! Our caregivers integrate medication reminders into personal care, companionship, and other daily support services, ensuring a well-rounded, customized care plan."
}
];

const adherenceBenefits = [
  {
    title: "Improve Health Outcomes",
    body: "Ensuring medications are taken as prescribed helps manage conditions effectively and prevent complications."
  },
  {
    title: "Reduce Risk of Errors",
    body: "A structured routine minimizes accidental double-dosing or skipped medication throughout the day."
  },
  {
    title: "Promote Independence",
    body: "Clients can maintain control over their own health routines with the help of gentle, respectful reminders."
  },
  {
    title: "Family Peace of Mind",
    body: "Knowing a loved one is receiving consistent schedule oversight offers complete reassurance to family members."
  }
];

const caregiverCapabilities = [
  {
    title: "Timely, Gentle Reminders",
    body: "Scheduled, discreet prompts to help clients take their medications on time, every time, ensuring strict adherence to their healthcare plan."
  },
  {
    title: "Verification of Adherence",
    body: "Checking in with clients after each scheduled medication time to verify that they have taken the correct dosage safely."
  },
  {
    title: "Provider Coordination",
    body: "Communicating promptly with family members and healthcare providers if we notice changes in medication habits or missed doses."
  },
  {
    title: "Refill & Organization Support",
    body: "Assisting clients with tracking their medication supply, organizing pillboxes, and prompting when it’s time for a renewal."
  },
  {
    title: "Food & Hydration Reminders",
    body: "Providing gentle guidance and nutritional tracking to ensure medications requiring specific food or hydration rules are taken safely."
  }
];

export default function MedicationRemindersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Medication Reminders"
        description="Stay consistent with timely reminders for scheduled medication intake."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2371714204U3a085e.webp" 
        imageAlt="Caregiver helping senior manage prescription timeline accurately"
      />

      {/* Overview Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Health Care Services in Will County, Illinois"
                title="Accuracy and Continuity in Every Routine"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Consistency and accuracy are essential when it comes to maintaining health routines. This service ensures schedules are followed, and routines remain uninterrupted. Every detail is managed with precision, minimizing the risk of oversight. Our team prioritizes clear communication and dependable support. It’s about reinforcing routines with attention and care.
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Medication non-adherence can lead to worsening health conditions, hospitalizations, or complications. Our healthcare services ensure that our clients receive regular, dependable medication reminders without feeling overwhelmed.
              </p>

              {/* Scope Bullet Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our medication reminder services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Offering reminders to take medications on schedule as instructed by healthcare professionals.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Embedded Creative Media Image */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image
                src="/thumb-22914111356U07ma39.webp" 
                alt="Safe and organized pillbox tracking with professional assistance"
                fill
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Adherence Core Values Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-t border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Health Management
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-ink mt-2">
              Why Medication Reminders and Adherence Matter
            </h2>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto">
              Taking medications as prescribed is essential for maintaining health, managing chronic conditions, and preventing complications, especially for seniors, individuals with memory impairments, or those with complex treatment plans. We help people stay on track with their health regimen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {adherenceBenefits.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {item.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Capabilities: What Our Caregivers Can Do */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/20 border-b border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Our Capabilities
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
              What Our Caregivers Can Do For You
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Taking medications on time doesn’t have to be overwhelming. Our goal is to reduce missed doses, prevent medication errors, and provide peace of mind for clients and their families.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caregiverCapabilities.map((item) => (
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
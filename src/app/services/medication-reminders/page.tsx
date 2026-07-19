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
    answer: "We can track client medication supply levels and provide timely prompts when a refill is approaching so that family members or clients can arrange renewals directly."
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
    title: "Refill Prompts & Supply Tracking",
    body: "Monitoring existing medication supplies visually and alerting clients or family members well in advance when it is time to request a renewal."
  },
  {
    title: "Food & Hydration Reminders",
    body: "Providing gentle guidance and nutritional tracking to ensure medications requiring specific food or hydration rules are taken safely."
  }
];

// Helper Component: Renders high-fidelity accurate icons for Adherence Benefits
function BenefitIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Improve Health Outcomes":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747M3.75 12h16.5" />
        </svg>
      );
    case "Reduce Risk of Errors":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      );
    case "Promote Independence":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.64 8.38a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0015.59 14.37z" />
        </svg>
      );
    case "Family Peace of Mind":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
  }
}

// Helper Component: Renders high-fidelity accurate icons for Caregiver Capabilities
function CapabilityIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Timely, Gentle Reminders":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      );
    case "Verification of Adherence":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "Provider Coordination":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    case "Refill Prompts & Supply Tracking":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Calendar Clock Monoline representing dynamic schedule/refill tracking */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      );
    case "Food & Hydration Reminders":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13.5M3 12h18M9.75 22h4.5M20.25 8.511c.007.19.015.38.015.572a8.25 8.25 0 01-16.5 0c0-.192.008-.382.015-.572" />
        </svg>
      );
  }
}

export default function MedicationRemindersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Dependable Routine Monitoring"
          title="In-Home Medication Reminders for Seniors"
          description=""
          primaryAction={{ label: "Request Reminder Setup", href: "/contact-us" }}
          secondaryAction={{ label: "Call 708-304-0296", href: "tel:7083040296" }}
          imageSrc="/nh-2371714204U3a085e.webp" 
          imageAlt="Caregiver helping senior manage prescription timeline accurately"
        />
      </div>

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Health Care Services in Will County, Illinois"
                  title="Accuracy and Continuity in Every Routine"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Consistency and accuracy are essential when it comes to maintaining health routines. This service ensures schedules are followed, and routines remain uninterrupted. Every detail is managed with precision, minimizing the risk of oversight. Our team prioritizes clear communication and dependable support. It’s about reinforcing routines with attention and care.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Medication non-adherence can lead to worsening health conditions, hospitalizations, or complications. Our healthcare services ensure that our clients receive regular, dependable medication reminders without feeling overwhelmed.
                </p>
              </ScrollReveal>

              {/* Scope Bullet Checklist */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our medication reminder services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Offering reminders to take medications on schedule as instructed by healthcare professionals.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Embedded Creative Media Image */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-3 translate-y-3 -z-10" />
                <Image
                  src="/nh-2371714204U3a085e.webp" 
                  alt="Safe and organized pillbox tracking with professional assistance"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Adherence Core Values Section (Premium Solid Offset Drops) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white border-t border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Health Management
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                Why Medication Reminders and Adherence Matter
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
                Taking medications as prescribed is essential for maintaining health, managing chronic conditions, and preventing complications, especially for seniors, individuals with memory impairments, or those with complex treatment plans. We help people stay on track with their health regimen.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {adherenceBenefits.map((item, idx) => {
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

      {/* Capabilities: What Our Caregivers Can Do (Premium Solid Offset Drops) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-b border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Our Capabilities
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What Our Caregivers Can Do For You
              </h3>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                Taking medications on time doesn’t have to be overwhelming. Our goal is to reduce missed doses, prevent medication errors, and provide peace of mind for clients and their families.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {caregiverCapabilities.map((item, idx) => {
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
                        {/* Custom Capability Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-all duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <CapabilityIcon title={item.title} />
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
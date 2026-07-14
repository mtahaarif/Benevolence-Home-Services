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
    question: "What are the early signs that someone may need specialized dementia care?",
    answer: "As dementia progresses, individuals often experience memory loss, confusion, difficulty with communication, and changes in behavior. They may forget recent events, struggle with familiar tasks, or become easily disoriented. If safety becomes a concern—such as wandering, forgetting to turn off appliances, or difficulty managing medications—specialized care may be necessary to provide consistent supervision and support."
  },
  {
    question: "How does dementia affect daily routines, and how can caregivers help?",
    answer: "Dementia can disrupt an individual’s ability to manage personal care, meal preparation, and household tasks. Over time, they may need assistance with dressing, bathing, and eating. A trained caregiver provides structured routines to reduce confusion and anxiety, ensuring essential tasks are completed in a comfortable and familiar environment. By maintaining consistency, caregivers help individuals feel more secure and supported."
  },
  {
    question: "What precautions should be taken to prevent complications after surgery?",
    answer: "Following post-operative care instructions is crucial for avoiding infections, blood clots, and delayed healing. This includes taking prescribed medications on time, maintaining proper wound hygiene, and attending follow-up appointments. Caregivers monitor for signs of complications, such as swelling, fever, or unusual pain, and provide immediate assistance if concerns arise."
  },
  {
    question: "Can caregivers assist with physical therapy exercises?",
    answer: "Yes, caregivers can help individuals complete prescribed physical therapy exercises to aid mobility and recovery. While they do not replace a licensed therapist, they provide reminders, encouragement, and supervision to ensure exercises are performed safely and consistently. Regular movement is key to regaining strength and preventing stiffness or muscle loss."
  },
  {
    question: "What should be included in a comfortable recovery environment at home?",
    answer: "A well-prepared home recovery space should include easy access to essential items, proper lighting, and clear walkways to prevent falls. A comfortable sleeping area, assistive devices (such as a walker or grab bars), and a system for managing medications are also beneficial. Caregivers help create a safe and supportive environment that minimizes strain and promotes healing."
  }
];

const specializedExpectations = [
  {
    title: "Alzheimer’s & Dementia Care",
    body: "Caring for individuals with Alzheimer’s, dementia, or cognitive decline requires patience, structure, and specialized strategies. Our caregivers provide memory care techniques to help reduce confusion and agitation, routine-based assistance to create a sense of security and familiarity, and engaging cognitive activities to promote mental stimulation. We prioritize a structured, reassuring environment to help individuals feel comfortable, supported, and valued."
  },
  {
    title: "Post-Surgery & Rehabilitation Support",
    body: "Recovering from surgery or a hospital stay can be physically demanding and emotionally overwhelming. Our team provides assistance with mobility and movement to prevent falls or strain. We can also give medication reminders to ensure that post-surgical prescriptions are taken on schedule. We work closely with families and healthcare providers to ensure a smooth, well-monitored recovery journey."
  },
  {
    title: "Support for Chronic Conditions & Disabilities",
    body: "Individuals with chronic conditions or disabilities often require personalized, long-term support. We offer mobility support, tremor management, and daily task assistance. We can also help with energy conservation, transfers, and physical comfort. Each client receives individualized attention, ensuring they receive the best possible care for their condition."
  },
  {
    title: "Palliative & End-of-Life Care Support",
    body: "For individuals facing serious or terminal illnesses, we provide gentle, compassionate care focused on comfort, dignity, and emotional well-being. Our caregivers offer companionship and emotional support to clients and their families. We also coordinate with hospice and healthcare teams for comprehensive care."
  }
];

// Helper Component: Renders high-fidelity accurate medical and support icons
function SpecializedIcon({ title }: { title: string }) {
  const baseClass = "h-5 w-5 text-slate-800 transition-colors duration-300";
  
  switch (title) {
    case "Alzheimer’s & Dementia Care":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Custom Brain/Cognitive Mapping Monoline Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925-3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 3 7.5a3.75 3.75 0 0 0 3.516 3.744A3.751 3.751 0 0 0 12 18Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 1-.495-7.467 5.99 5.99 0 0 1 1.925-3.546 5.974 5.974 0 0 0 2.133-1A3.75 3.75 0 0 1 21 7.5a3.75 3.75 0 0 1-3.516 3.744A3.751 3.751 0 0 1 12 18Z" />
        </svg>
      );
    case "Post-Surgery & Rehabilitation Support":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Custom Rehabilitation Arrow & Support Joint Monoline Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      );
    case "Support for Chronic Conditions & Disabilities":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Custom Physical Stability & Tremor Support Monoline Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      );
    case "Palliative & End-of-Life Care Support":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          {/* Custom Peace/Gentle Comfort Heart Monoline Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
  }
}

export default function SpecializedSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Specialized Support"
        description="We address unique care requirements with expertise and individualized attention."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2212833857U072s1e.webp"
        imageAlt="Healthcare professional providing attentive, specialized support"
      />

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Live-In Care in Cook County, Illinois"
                  title="Focused Expertise, Individualized Attention"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Certain needs require focused expertise, and this service is designed to address them with clarity and precision. Whether short-term or ongoing, every detail is handled with professionalism and intention. Individual requirements are prioritized, ensuring routines and care plans are consistently followed. Our team brings focus and dedication to every interaction. 
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Our specialized live-in care in Cook County, Illinois, is delivered with purpose and attention. Whether it’s managing the complexities of Alzheimer’s or dementia care, post-surgery recovery, or other unique health challenges, our caregivers provide expertise, patience, and compassionate support tailored to each individual’s specific needs.
                </p>
              </ScrollReveal>

              {/* Scope Bullet Checklist */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our specialized support services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Offering focused care for individuals with Alzheimer’s or dementia.</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Providing assistance during post-surgery recovery periods.</span>
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
                  alt="Compassionate specialized memory care and rehabilitation support" 
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl" 
                  fill 
                  src="/nh-2212833857U072s1e.webp"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Section 2: Expectations Grid with Premium Solid Offset Drop Layout */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-y border-slate-200/40">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Clinical Integrity
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What to Expect from Our Specialized Care Services
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
                We recognize that some individuals require specialized, focused care beyond standard assistance. Our goal is to ensure safety, comfort, and consistency while helping clients maintain independence and dignity in their daily lives.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {specializedExpectations.map((item, idx) => {
              // Alternates panel offset backplates dynamically
              const backplateColor = idx % 2 === 0 ? "bg-[#0c3e72]" : "bg-brand-orange";
              const iconWrapperBg = idx % 2 === 0 ? "bg-brand-blue/5" : "bg-brand-orange/5";

              return (
                <ScrollReveal key={item.title}>
                  <div className="relative h-full group">
                    {/* Underlying Solid Color Offset Panel */}
                    <div className={`absolute inset-0 ${backplateColor} rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                    
                    {/* Main Content Card Frame */}
                    <div className="relative h-full bg-white border border-slate-900/80 p-8 md:p-10 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                      <div>
                        {/* Custom Monoline Icon Holder */}
                        <div className={`h-10 w-10 ${iconWrapperBg} flex items-center justify-center rounded-xl mb-6 shadow-inner transition-colors duration-300 group-hover:bg-[#0c3e72]/5`}>
                          <SpecializedIcon title={item.title} />
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500">
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

      {/* Section 3: Interactive FAQ Accordion Section */}
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
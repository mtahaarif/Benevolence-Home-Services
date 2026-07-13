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
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Live-In Care in Cook County, Illinois"
                title="Focused Expertise, Individualized Attention"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Certain needs require focused expertise, and this service is designed to address them with clarity and precision. Whether short-term or ongoing, every detail is handled with professionalism and intention. Individual requirements are prioritized, ensuring routines and care plans are consistently followed. Our team brings focus and dedication to every interaction. 
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Our specialized live-in care in Cook County, Illinois, is delivered with purpose and attention. Whether it’s managing the complexities of Alzheimer’s or dementia care, post-surgery recovery, or other unique health challenges, our caregivers provide expertise, patience, and compassionate support tailored to each individual’s specific needs.
              </p>

              {/* Scope Bullet Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our specialized support services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Offering focused care for individuals with Alzheimer’s or dementia.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Providing assistance during post-surgery recovery periods.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Imagery Component */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image 
                alt="Compassionate specialized memory care and rehabilitation support" 
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40" 
                fill 
                src="/thumb-22914111356U07ma39.webp"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Grid: What to Expect from Our Specialized Services */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-t border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Clinical Integrity
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-ink mt-2">
              What to Expect from Our Specialized Care Services
            </h2>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto">
              We recognize that some individuals require specialized, focused care beyond standard assistance. Our goal is to ensure safety, comfort, and consistency while helping clients maintain independence and dignity in their daily lives.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {specializedExpectations.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-2">
                  {item.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20 border-t border-slate-200/60">
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
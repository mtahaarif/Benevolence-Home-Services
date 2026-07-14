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
    question: "What is a companionship service, and how does it work?",
    answer: "A companionship service provides social interaction, emotional support, and non-medical assistance to individuals who may feel lonely or isolated. These services are typically designed for seniors, individuals with disabilities, or anyone in need of regular social engagement. Companions can engage in meaningful conversations, accompany clients to appointments, assist with light household tasks, and participate in recreational activities. The goal is to enhance the client’s quality of life by providing a reliable and friendly presence."
  },
  {
    question: "Who can benefit from companionship services?",
    answer: "Companionship services are ideal for seniors living alone, individuals recovering from illness or surgery, people with disabilities, or anyone who experiences social isolation. It is also beneficial for family caregivers who need occasional respite. Many people seek companionship services to ensure they or their loved ones maintain an active and engaging lifestyle, reducing feelings of loneliness and improving overall emotional well-being."
  },
  {
    question: "Do companionship services include medical care or personal assistance?",
    answer: "No, companionship services do not include medical care, personal hygiene assistance, or medication administration. Companions are there to provide emotional support, social interaction, and light household help rather than medical or personal care. If a client requires medical assistance, they may need to seek home healthcare or nursing services that specialize in medical support. However, companions can remind clients to take medications or accompany them to medical appointments."
  },
  {
    question: "How are companions selected and screened?",
    answer: "Companions typically undergo a thorough background check, reference verification, and interview process before being assigned to clients. Many services also conduct training to ensure companions understand the needs of different individuals, including seniors and those with cognitive impairments. Some agencies match companions with clients based on shared interests and personalities, helping to foster meaningful and enjoyable interactions between them."
  },
  {
    question: "Can companionship services be customized to individual needs?",
    answer: "Yes, companionship services can be tailored to meet the specific needs and preferences of each client. Some people prefer a companion to visit a few times a week, while others might need daily interaction. Clients can request activities such as reading together, playing games, taking walks, or running errands. The flexibility of companionship services allows individuals to create a schedule and level of engagement that best suits their lifestyle."
  }
];

const companionshipProvisions = [
  {
    title: "Engaging & Meaningful Conversations",
    body: "Friendly, heartfelt discussions that stimulate the mind and bring joy to everyday life."
  },
  {
    title: "Reliable Assistance for Outings",
    body: "Support with attending doctor’s appointments, family visits, religious services, and social gatherings."
  },
  {
    title: "Help with Errands & Shopping",
    body: "Assistance with grocery shopping, pharmacy visits, and other essential tasks to maintain an independent lifestyle."
  },
  {
    title: "Activity-Based Engagement",
    body: "Encouraging participation in hobbies, games, storytelling, music, and other activities that spark joy and mental stimulation."
  },
  {
    title: "Emotional Support",
    body: "Providing comfort, reassurance, and a listening ear to reduce stress, anxiety, and feelings of loneliness."
  }
];

// Helper Component: Renders thematic monoline icons
function ProvisionIcon({ title }: { title: string }) {
  const baseClass = "h-6 w-6 text-slate-800 transition-colors duration-300";
  switch (title) {
    case "Engaging & Meaningful Conversations":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
        </svg>
      );
    case "Reliable Assistance for Outings":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      );
    case "Help with Errands & Shopping":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375" />
        </svg>
      );
    case "Activity-Based Engagement":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 8.38a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 14.37ZM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
      );
    case "Emotional Support":
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className={baseClass}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      );
  }
}

export default function CompanionshipPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Companionship"
        description="Provide reliable assistance for appointments, errands, and social gatherings"
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-23828104413Umet879.webp" 
        imageAlt="Caregiver engaging in friendly conversation with a senior"
      />

      {/* Overview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/30">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="Veterans Care in Westchester, Illinois"
                  title="Fostering Meaningful Human Connection"
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Building genuine connections is at the heart of this service, offering consistent and engaging social interaction. Whether it&apos;s through conversation or shared activities, every moment is approached with care and attentiveness.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  This service aims to reduce feelings of isolation and encourage meaningful engagement. Our team values trust, ensuring every interaction is warm and committed.
                </p>
              </ScrollReveal>

              {/* Checklist scope */}
              <ScrollReveal>
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <h4 className="text-base sm:text-lg font-semibold text-brand-ink mb-4">
                    Our companionship services include but are not limited to:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Engaging in warm conversations and providing emotional support.</span>
                    </li>
                    <li className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base">
                      <div className="h-5 w-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span>Accompanying clients to appointments, social activities, and errands.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Imagery */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-3 translate-y-3 -z-10" />
                <Image
                  src="/thumb-22914111356U07ma39.webp" 
                  alt="Compassionate companion care services in Westchester"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>

      {/* Why Companionship Matters Context Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white border-y border-slate-200/40">
        <PageShell>
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                The Value of Connection
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
                Why Companionship Matters
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 max-w-3xl mx-auto mt-4 text-center">
                Studies show that social engagement plays a crucial role in improving mental health, cognitive function, and quality of life. Many seniors and individuals facing health challenges experience loneliness and social isolation, which can lead to feelings of depression, anxiety, and a decline in well-being. 
                <br /><br />
                We know that companionship isn&apos;t just about presence; it&apos;s about connection. Our caregiver care in Westchester, Illinois, takes the time to understand each individual&apos;s interests, background, and preferences, ensuring that time spent together is engaging, enjoyable, and fulfilling.
              </p>
            </ScrollReveal>
          </div>
        </PageShell>
      </section>

      {/* Provisions Grid: What Our Companions Provide */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50">
        <PageShell>
          <div className="mb-14 text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Our Commitment
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
                What Our Companions Provide You
              </h3>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                We are more than just caregivers, we are trusted companions, offering warmth, encouragement, and a sense of belonging.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {companionshipProvisions.map((item, idx) => {
              // Dynamically alternates background block colors for offset visual hierarchy
              const backplateColor = idx % 2 === 0 ? "bg-[#0c3e72]" : "bg-brand-orange";
              return (
                <ScrollReveal key={item.title}>
                  <div className="relative h-full group">
                    {/* Underlying Solid Color Offset Panel */}
                    <div className={`absolute inset-0 ${backplateColor} rounded-[2rem] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5`} />
                    
                    {/* Main Interaction Content Layer */}
                    <div className="relative h-full bg-white border border-slate-900/80 p-8 rounded-[2rem] transition-transform duration-300 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-3 hover:-translate-y-3 active:translate-x-0 active:translate-y-0 flex flex-col justify-between">
                      <div>
                        {/* Custom Monoline Icon Holder */}
                        <div className="h-10 w-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-xl mb-6 shadow-inner transition-colors duration-300 group-hover:bg-[#0c3e72]/5">
                          <ProvisionIcon title={item.title} />
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

      {/* Interactive FAQ Section */}
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
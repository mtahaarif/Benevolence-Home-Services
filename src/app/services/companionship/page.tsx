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
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Veterans Care in Westchester, Illinois"
                title="Fostering Meaningful Human Connection"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Building genuine connections is at the heart of this service, offering consistent and engaging social interaction. Whether it&apos;s through conversation or shared activities, every moment is approached with care and attentiveness.
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                This service aims to reduce feelings of isolation and encourage meaningful engagement. Our team values trust, ensuring every interaction is warm and committed.
              </p>

              {/* Checklist scope */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our companionship services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Engaging in warm conversations and providing emotional support.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Accompanying clients to appointments, social activities, and errands.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Imagery */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image
                src="/thumb-22914111356U07ma39.webp" 
                alt="Compassionate companion care services in Westchester"
                fill
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Why Companionship Matters Context Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-t border-slate-200/60">
        <PageShell>
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              The Value of Connection
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              Why Companionship Matters
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg max-w-3xl mx-auto mt-4 text-center">
              Studies show that social engagement plays a crucial role in improving mental health, cognitive function, and quality of life. Many seniors and individuals facing health challenges experience loneliness and social isolation, which can lead to feelings of depression, anxiety, and a decline in well-being. 
              <br /><br />
              We know that companionship isn&apos;t just about presence; it&apos;s about connection. Our caregiver care in Westchester, Illinois, takes the time to understand each individual&apos;s interests, background, and preferences, ensuring that time spent together is engaging, enjoyable, and fulfilling.
            </p>
          </div>
        </PageShell>
      </section>

      {/* Grid: What Our Companions Provide */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/20 border-b border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Our Commitment
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
              What Our Companions Provide You
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              We are more than just caregivers, we are trusted companions, offering warmth, encouragement, and a sense of belonging.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companionshipProvisions.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {item.body}
                </p>
              </SectionCard>
            ))}
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
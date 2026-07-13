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
    question: "What types of transportation services are offered by home care agencies?",
    answer: "We provide timely, safe, and reliable transportation for medical appointments, diagnostic lab testing, essential errands, grocery shopping, social community visits, family gatherings, and more."
  },
  {
    question: "Can caregivers accompany clients during appointments or shopping trips?",
    answer: "Yes! Our caregivers are happy to stay with clients throughout the duration of the outing to provide continuous physical support, assistance with tracking information, companionship, and help with navigating environments."
  },
  {
    question: "Does this accommodate clients with mobility challenges?",
    answer: "Absolutely! We offer secure, highly accessible transportation support tailored for individuals using adaptive canes, walkers, or manual wheelchairs, ensuring optimal comfort, careful door-to-door transitions, and physical security."
  },
  {
    question: "How far in advance should I schedule transportation services?",
    answer: "We highly recommend scheduling your transportation requests several days in advance to guarantee optimal caregiver alignment, though we always strive to accommodate last-minute or urgent scheduling requests whenever possible."
  },
  {
    question: "Do home care agencies provide long-distance transportation?",
    answer: "Our specialized services primarily focus on local transportation within Cook, DuPage, Lake, and Will counties. However, we are happy to evaluate and discuss longer regional trips based on caregiver availability and custom client requirements."
  }
];

const travelExpectations = [
  {
    title: "Medical Appointment Transport",
    body: "Timely, reliable rides to doctor visits, therapy sessions, lab tests, and follow-up care. Our caregivers ensure clients arrive on time, stay comfortable, and have support throughout their visit."
  },
  {
    title: "Errands & Grocery Shopping",
    body: "Daily tasks shouldn’t be a burden. We provide dedicated assistance with custom food shopping trips, safe pharmacy pickups, and running everyday household errands seamlessly."
  },
  {
    title: "Social & Recreational Outings",
    body: "Staying active and engaged is essential for mental and emotional well-being. We provide secure transportation to community events, family gatherings, or regional religious services."
  },
  {
    title: "Prescription Pickups & Essential Travel",
    body: "Managing medications and other essential errands is easier with our transportation services. Convenient transportation for medication pickups, localized banking, and other necessary stops."
  },
  {
    title: "Mobility Assistance & Door-to-Door Support",
    body: "Caregivers help with getting in and out of vehicles safely, carrying heavy shopping bags, and ensuring a completely stress-free trip while assisting with canes, walkers, and wheelchairs."
  }
];

const valueProps = [
  {
    title: "Reliable & Punctual",
    body: "We prioritize on-time pickups and drop-offs, ensuring that every ride is smooth and well-planned."
  },
  {
    title: "Full Door-to-Door Support",
    body: "From getting ready safely at home to settling in at the destination, our caregivers provide full door-to-door support."
  },
  {
    title: "Safe & Comfortable Experience",
    body: "Our transportation accommodates mobility aids such as walkers, canes, and wheelchairs, ensuring a secure and comfortable ride."
  },
  {
    title: "Flexible Scheduling",
    body: "Whether it’s a one-time ride or ongoing appointments, we offer scheduling that fits your lifestyle and preferences."
  },
  {
    title: "Companion Drivers Who Care",
    body: "Our trained professionals don’t just drive; we accompany, assist, and provide reassurance, ensuring that every trip is a smooth, stress-free experience."
  }
];

export default function TransportationServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner / Hero Section */}
      <HeroSection
        eyebrow="Services"
        title="Transportation Services"
        description="Access reliable assistance for errands, shopping, and essential appointments."
        primaryAction={{ label: "Book a Free Consultation", href: "/contact-us" }}
        secondaryAction={{ label: "Call Now", href: "tel:7083040296" }}
        imageSrc="/nh-2412692819U06281e.webp"
        imageAlt="Caregiver accompanying senior citizen safely during vehicle transition"
      />

      {/* Overview Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Mobility Assistance in Westchester, Illinois"
                title="Simplifying Essential Outings & Daily Travel Routines"
              />
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Reliability and organization define this service, offering dependable assistance for essential travel needs. Every trip is managed with attention to timing and planning, ensuring efficiency from start to finish. Whether it’s short errands or scheduled outings, the focus is on clear communication and smooth execution.
              </p>
              
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                Travel routines are simplified and well-managed. It’s about creating ease in every trip. Our caregivers offer hands-on assistance, helping clients prepare for their trip, stay comfortable during transit, and settle in once they arrive at their destination safely.
              </p>

              {/* Scope Bullet Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-brand-ink mb-4">
                  Our transportation services include but are not limited to:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                    <span>Assisting with errands, grocery shopping, and attending medical appointments safely.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Imagery Component */}
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:ml-auto">
              <Image 
                alt="Safe physical mobility assistance and transit support for seniors" 
                className="object-cover rounded-[2.5rem] brand-shadow border border-white/40" 
                fill 
                src="/thumb-23706104744U61tse5.webp"
              />
            </div>

          </div>
        </PageShell>
      </section>

      {/* Grid: What to Expect */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/40 border-t border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Travel Logistics
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-ink mt-2">
              What to Expect from Our Transportation Services
            </h2>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto">
              Whether it’s a medical visit, grocery shopping, or a social outing, our carefully planned transportation services help maintain independence, convenience, and peace of mind.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {travelExpectations.map((item) => (
              <SectionCard key={item.title} title={item.title}>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {item.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Why Choose Us Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-background/20 border-b border-slate-200/60">
        <PageShell>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              The Benevolence Advantage
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mt-2">
              Why Choose Our Mobility Services
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {valueProps.map((item) => (
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
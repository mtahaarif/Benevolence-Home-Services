"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HeroSection,
  PageShell,
  SectionHeading,
} from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import {
  homeHighlights,
  nurseLedBenefits,
  traditionalCare,
} from "@/data/site-content";

export default function HomePage() {
  // Track open accordion drawer index (null means all are collapsed by default)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveAccordion((prev) => (prev === idx ? null : idx));
  };

  // Strictly maps text points from the reference asset side-by-side
  const functionalComparisonMatrix = [
    {
      pillar: "Care Oversight",
      benevolence: "Care is guided by a Registered Nurse with clinical judgment",
      traditional: "Care is typically managed by schedulers or non-clinical staff"
    },
    {
      pillar: "Decision Framework",
      benevolence: "Decisions are made with wisdom, discernment, and experience",
      traditional: "Decisions are often reactive or task-focused"
    },
    {
      pillar: "Plan Flexibility",
      benevolence: "Care plans are thoughtfully overseen and adjusted as needs change",
      traditional: "Care plans may remain static unless a crisis occurs"
    },
    {
      pillar: "Decline Monitoring",
      benevolence: "Early signs of decline are recognized and addressed",
      traditional: "Changes may go unnoticed until hospitalization"
    },
    {
      pillar: "Caregiver Oversight",
      benevolence: "Caregivers are supported, trained, and guided with accountability",
      traditional: "Caregivers often work with limited oversight"
    },
    {
      pillar: "Family Support",
      benevolence: "Families receive clarity, reassurance, and peace of mind",
      traditional: "Families may feel uncertainty or confusion"
    },
    {
      pillar: "Core Approach",
      benevolence: "Care is delivered with dignity, compassion, and purpose",
      traditional: "Care is primarily task-based"
    }
  ];

  const accordionData = [
    {
      title: "What Makes Nurse-Led Home Care Different?",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
          <p>
            Unlike traditional home care agencies that are scheduler-led, nurse-led home care means a registered nurse actively oversees care plans, supports caregivers, and monitors changes in condition.
          </p>
          <p className="font-semibold text-brand-ink">This model allows us to:</p>
          <ul className="grid gap-3 sm:grid-cols-2 pl-1">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Recognize early signs of decline</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Provide stronger caregiver guidance and accountability</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Support safer aging at home</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Reduce avoidable hospital visits</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Offer families clarity and confidence</span>
            </li>
          </ul>
          <p className="pt-2 text-xs sm:text-sm text-slate-500 border-t border-slate-100 mt-2">
            Our nurse-led structure bridges clinical insight with compassionate, everyday care, creating better outcomes and a more personal experience.
          </p>
        </div>
      )
    },
    {
      title: "Faith in Action Through Care",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
          <p className="font-semibold text-brand-ink">Our services are grounded in faith-based values of:</p>
          <ul className="grid gap-2 sm:grid-cols-2 pl-1">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Compassion</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Stewardship</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Respect</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Service</span>
            </li>
          </ul>
          <p className="pt-2 border-t border-slate-100 mt-2">
            We view caregiving as ministry in motion—serving seniors and families with humility, patience, and grace. Whether supporting daily routines or providing respite for loved ones, our goal is to bring comfort, stability, and peace into every home we serve.
          </p>
        </div>
      )
    },
    {
      title: "Helping Families Navigate Care Options",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
          <p>
            Understanding how to pay for home care can feel overwhelming. We walk alongside families to help them navigate:
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Private pay home care</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Medicaid home care options</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
              <span>Community and long-term care resources</span>
            </li>
          </ul>
          <p className="pt-2 border-t border-slate-100 mt-2">
            Our role is to simplify the process so families can focus on what matters most—caring for their loved ones.
          </p>
        </div>
      )
    },
    {
      title: "Serving Seniors With Dignity at Home",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
          <p>
            Aging at home allows seniors to remain surrounded by familiarity, comfort, and independence. Our mission is to make that possible through faith-centered, nurse-led home care that supports the whole person—body, mind, and spirit.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Hero Banner Component (Kept static/unwrapped for optimal LCP load times) */}
      <HeroSection
        eyebrow="Purpose-Driven"
        title="Care Solutions"
        description="We provide compassionate, nurse-led home care that supports independence and dignity at home."
        primaryAction={{ label: "Find Out More", href: "/about-us" }}
        secondaryAction={{ label: "Contact Us", href: "/contact-us" }}
        imageSrc={["/1.webp", "/2.webp", "/3.webp"]}
        imageAlt="Compassionate home care support in Westchester"
      />

      {/* Section 1: Mobile-Stacking Highlights Grid wrapper 
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/40">
          <PageShell>
            <SectionHeading
              centered
              eyebrow="How We Meet Your Needs"
              title="Offering a Better Choice for You"
              description="Offers a wide range of in-home care services designed to meet the unique needs of individuals and families."
            />
            
            <div className="mt-14 space-y-8 sm:space-y-0 sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 relative pb-12">
              {homeHighlights.map((item, idx) => (
                <div 
                  key={item.title}
                  style={{ "--stack-top": `calc(6rem + ${idx * 16}px)` } as React.CSSProperties}
                  className="group sticky top-[var(--stack-top)] sm:relative sm:top-auto flex flex-col justify-between bg-white border border-slate-100/70 p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(15,47,89,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(17,104,179,0.06)] min-h-[420px]"
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-blue leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.body}
                    </p>
                  </div>

                  <div className="mt-6 space-y-6 flex flex-col items-center">
                    <Link 
                      href="/services"
                      className="w-full text-center inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white !text-white shadow-sm transition hover:bg-brand-blue"
                    >
                      Click Here
                      <span className="text-[10px] font-bold transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </Link>

                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm transition-transform duration-500 group-hover:scale-105">
                      <Image 
                        src={`/middle-img${idx + 1}.webp`} 
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
*/}
      {/* Section 2: Introducing Benevolence with Soft Light Blue Tint Background wrapper */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-y border-brand-blue/10">
          <PageShell>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
              <div className="space-y-6">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink tracking-tight leading-tight">
                  Introducing <br /> Benevolence Home Services
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-blue tracking-tight leading-tight">
                  Chicagoland’s trusted provider for in-home senior care
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  At Benevolence Home Services, we provide compassionate, reliable, and personalized home care services throughout the Chicagoland area. Our mission is to help seniors and individuals maintain their independence, dignity, and quality of life while remaining safe and comfortable in their own homes.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our experienced caregivers offer a wide range of in-home care services, including personal care, companionship, assistance with daily living activities, respite care, and nurse-led oversight and care coordination. Every care plan is tailored to the unique needs, preferences, and goals of each client and their family.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you need short-term assistance or ongoing senior care support, Benevolence Home Services is committed to delivering exceptional home care services you can trust. We proudly serve families across Will County, Cook County, DuPage County, and Kane County, providing dependable care that brings peace of mind to clients and their loved ones.
                </p>

                <div className="pt-4">
                  <Link 
                    href="/about-us"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0c3e72] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-white !text-white transition shadow-md hover:bg-brand-blue"
                  >
                    Learn About Our Mission
                    <span className="text-[10px]">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] w-full max-w-[480px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/10 translate-x-3 translate-y-3 -z-10" />
                <Image 
                  src="/o6ipogo6ipogo6ip.png" 
                  alt="Compassionate nurse-led interaction model"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Section 3: Premium SaaS Feature Matrix Table wrapper */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-ink mt-4">
                Nurse-Led Home Care vs. Traditional Home Care
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
                Not all home care is the same. Our nurse-led model ensures a registered nurse oversees care, providing safer and more responsive support.
              </p>
            </div>

            <div className="w-full overflow-x-auto rounded-[2rem] border border-slate-200/70 shadow-[0_8px_30px_rgba(15,47,89,0.03)] bg-white">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/60">
                    <th className="p-5.5 font-display text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">Core Metric</th>
                    <th className="p-5.5 font-display text-xs font-bold uppercase tracking-wider text-[#1168b3] bg-brand-blue/[0.03] w-3/8 border-r border-slate-100">Nurse-Led Care (Benevolence)</th>
                    <th className="p-5.5 font-display text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50/20 w-3/8">Traditional Home Care</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {functionalComparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="transition-colors duration-200 hover:bg-slate-50/40">
                      <td className="p-5.5 text-xs sm:text-sm font-semibold text-brand-ink">{row.pillar}</td>
                      
                      <td className="p-5.5 text-xs sm:text-sm text-slate-700 bg-brand-blue/[0.005] font-medium border-r border-slate-100">
                        <div className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-brand-blue/5 text-[#1168b3] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-3 w-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                          </div>
                          <span className="leading-relaxed">{row.benevolence}</span>
                        </div>
                      </td>
                      
                      <td className="p-5.5 text-xs sm:text-sm text-red-900/80 bg-red-50/[0.01]">
                        <div className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                          </div>
                          <span className="leading-relaxed">{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Section 4: Full-Width Corporate Presentation Layout wrapper */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/70 border-t border-slate-100">
          <PageShell>
            <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue block">
                Compassionate Home Care
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink leading-tight tracking-tight">
                Guided by Clinical Wisdom and Faith
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                <p>
                  At Benevolence Home Services, we provide nurse-led, non-medical home care rooted in compassion, dignity, and service. Our approach is different—care is guided by a registered nurse, ensuring thoughtful oversight, early problem-solving, and peace of mind for families.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium italic pt-2">
                  We believe caring for seniors is more than completing tasks. It is a calling to serve with excellence, integrity, and love—honoring the God-given dignity of every individual we support.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-3.5">
              {accordionData.map((item, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div 
                    key={idx} 
                    className="rounded-xl border border-[#0a3566]/20 bg-white overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="flex w-full items-center justify-between bg-[#0c3e72] px-6 py-4 text-left transition-colors duration-300 hover:bg-[#114b7d]"
                    >
                      <span className="font-display text-sm sm:text-base font-semibold text-white !text-white tracking-wide">
                        {item.title}
                      </span>
                      <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <span className="text-base font-bold leading-none select-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[600px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 sm:p-8 bg-white">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Section 5: Minimal Interactive Action Blocks wrapper */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-white">
          <PageShell>
            <div className="grid gap-6 sm:grid-cols-3">
              
              <div className="bg-slate-50/80 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between group transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div>
                  <div className="h-11 w-11 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-xl mb-5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-ink">Eligibility for Senior Care</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Seniors requiring assistance with daily living activities qualify for our care framework.
                  </p>
                </div>
                <Link 
                  href="/resources"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Eligibility Rules <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              <div className="bg-slate-50/80 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between group transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div>
                  <div className="h-11 w-11 bg-brand-orange/5 text-brand-orange flex items-center justify-center rounded-xl mb-5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-ink">Submit Your Referrals</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Refer a friend or community family member, and earn rewards easily and securely!
                  </p>
                </div>
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Submit A Friend <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              <div className="bg-brand-ink p-8 rounded-[2rem] flex flex-col justify-between group shadow-md text-white transition-all duration-300 hover:bg-brand-blue">
                <div>
                  <div className="h-11 w-11 bg-white/10 text-brand-orange flex items-center justify-center rounded-xl mb-5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold">Schedule an Assessment</h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                    Schedule a free professional assessment and experience the clinic difference with us.
                  </p>
                </div>
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider text-brand-orange hover:underline"
                >
                  Book Assessment <span className="transition-transform duration-300 group-hover:translate-x-0.5">rightarrow</span>
                </Link>
              </div>

            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Section 6: Mission Statement Overview Block with Full-Image Faded Background Layer */}
      <ScrollReveal>
        <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 overflow-hidden border-t border-slate-200/50 rounded-t-[3rem]">
          {/* Hardware-accelerated full background image instance */}
          <div className="absolute inset-0 -z-10 w-full h-full">
            <Image
              src="/ff329731-2265-4376-a04c-f10a744fb417.jpg"
              alt="Mission Statement Background"
              fill
              priority
              className="object-cover object-center scale-102 filter transition-all duration-300"
            />
            {/* Highly customized glass backdrop blend layer matrix to fade background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white/70 backdrop-blur-[1px]" />
          </div>

          <PageShell>
            <div className="mx-auto max-w-4xl text-center space-y-6 relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink tracking-tight">
                Our Mission Statement
              </h2>
              <p className="text-base sm:text-xl lg:text-2xl text-slate-800 font-light max-w-3xl mx-auto italic pt-2 leading-relaxed font-serif">
                &ldquo;Our mission is to provide compassionate, high-quality non-medical home care that empowers individuals to live with dignity, independence, and comfort in their own homes. We are committed to building meaningful relationships, delivering personalized care, and supporting families through dependable, nurse-guided care services.&rdquo;
              </p>
              <div className="pt-6 text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                Benevolence Home Services is proud to be a nurse-led, faith-based home care agency committed to compassionate, non-medical support for seniors and families.
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
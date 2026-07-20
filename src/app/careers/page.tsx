"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

const benefitsFramework = [
  {
    id: "01",
    title: "Nurse-Led Clinical Backing",
    desc: "Work with absolute confidence under a Registered Nurse who designs precise care plans, handles complex family coordination, and provides 24/7 advisory support.",
  },
  {
    id: "02",
    title: "Stable Local Assignments",
    desc: "Enjoy consistent, non-rotating client matches right inside your local community, carefully scheduled to minimize travel times and eliminate route burnout.",
  },
  {
    id: "03",
    title: "RN Mentorship & Education",
    desc: "Refine your frontline expertise with direct, hands-on mentorship from clinical experts alongside continuous educational tracks to elevate your career value.",
  },
  {
    id: "04",
    title: "Faith-Centered Community",
    desc: "Experience a truly respectful professional environment where caregiving is treated as a high calling rooted in compassion, patience, and deep humility.",
  },
] as const;

const recruitmentSteps = [
  {
    step: "1",
    title: "Secure Portal Review",
    subtitle: "Digital Intakes Processed Within 48 Hours",
    desc: "Submit your comprehensive employment timeline, professional references, and geographical preferences securely via our streamlined external Jotform framework.",
  },
  {
    step: "2",
    title: "Clinical Interview",
    subtitle: "Evaluate Competence & Character Compatibility",
    desc: "Meet face-to-face with our clinical leadership team to discuss your background, review caregiving philosophy alignment, and evaluate specialized communication skills.",
  },
  {
    step: "3",
    title: "IDPH Verification",
    subtitle: "Background Integrity & State Compliance Mapping",
    desc: "We conduct complete state compliance tracking, including mandatory background fingerprints via the Illinois Department of Public Health registry paths.",
  },
  {
    step: "4",
    title: "RN Guided Match",
    subtitle: "Custom Client Introductions Under Clinical Care",
    desc: "Receive comprehensive case briefings directly from our supervising Registered Nurse to align your unique style with a household that fits perfectly.",
  },
] as const;

const specializedRolesData = {
  companion: {
    title: "In-Home Caregiver & Senior Companion",
    locations: "Westchester, Cook County, & Eastern DuPage County",
    highlights: ["Hourly & Respite Shifts Available", "No Prior Licensure Required", "Comprehensive Orientation Provided"],
    summary: "Ideal for empathetic professionals seeking meaningful caregiver jobs in Westchester IL. This role focuses on supporting older adults with basic daily living parameters to preserve dignity and home safety.",
    duties: [
      "Deliver uplifting emotional companionship and cognitive stimulation routines.",
      "Execute light housekeeping, structural organization, and laundry management.",
      "Manage client grocery lists, meal preparation planning, and nutritional monitoring.",
      "Provide vital assistance with transportation, local medical appointments, and essential pharmacy runs.",
    ]
  },
  cna: {
    title: "Certified Nursing Assistant (CNA)",
    locations: "Will County, Cook County, Kane County, & Surrounding Towns",
    highlights: ["Premium Hourly Rates", "Live-In Positions Available", "Direct RN Supervision & Advisory"],
    summary: "Designed for highly technical professionals looking for CNA employment in DuPage and Will Counties. This position bridges high-quality daily lifestyle assistance with disciplined nurse-delegated care plan tracking.",
    duties: [
      "Perform safe mechanical transfers, ambulation support, and detailed fall-prevention tasks.",
      "Execute comprehensive personal care tasks including bathing, grooming, and incontinence management.",
      "Monitor delicate physical condition shifts and log vital signs for Registered Nurse oversight.",
      "Provide essential non-medical support for chronic memory care and progressive physical decline cases.",
    ]
  }
};

export default function CareersPage() {
  const [activeRoleTab, setActiveRoleTab] = useState<"companion" | "cna">("companion");
  const activeRole = specializedRolesData[activeRoleTab];

  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href*='jotform.com']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Build a meaningful career in senior home care"
          title="Join Our Growing Care Team"
          primaryAction={{ 
            label: "Apply Online Now", 
            href: "https://www.jotform.com/app/223625216444452"
          }}
          secondaryAction={{ label: "Discover Our Mission", href: "/about-us" }}
          imageSrc="/nh-1637163589-1.webp"
          imageAlt="Group of professional caregivers standing together representing home care career opportunities"
        />
      </div>

      {/* SECTION 1: THE RECRUITMENT ADVANTAGE MATRIX */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white" aria-label="Employment Benefits Framework">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Why Work With Benevolence"
              title="A Steady, Respectful Workplace Built for Impact"
              // OPTIMIZATION: H1 and Meta Title phrases strategically injected here to satisfy content matching penalties.
              description="At Benevolence Home Services, we recognize that to care deeply for our clients, we must first empower and uplift our caregivers. If you are seeking rewarding home care careers and caregiver jobs, we invite you to join our growing care team. We don't utilize third-party schedulers to make critical decisions—our agency is entirely guided by active clinical judgment."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitsFramework.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-slate-50/70 border border-slate-200/40 p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(15,47,89,0.01)] transition-all duration-300 hover:bg-white hover:shadow-[0_15px_40px_rgba(12,62,114,0.05)] hover:-translate-y-1"
              >
                <div className="font-display font-black text-4xl text-brand-blue/10 transition-colors duration-300 group-hover:text-brand-orange/20">
                  {item.id}
                </div>
                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-brand-ink leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* SECTION 2: ADVANCED INTERACTIVE JOB EXPLORER DASHBOARD */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-100" aria-label="Interactive Job Directory">
        <PageShell>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-brand-ink">
              Explore Our Regional Care Openings
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
              Select a position below to explore specific in-home roles, structural duties, and active regional service ranges throughout the greater Chicagoland area.
            </p>

            {/* ADVANCED TAB TOGGLE CONTROL */}
            <div className="inline-flex p-1.5 bg-slate-100 rounded-full mt-8 border border-slate-200/60 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveRoleTab("companion")}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeRoleTab === "companion"
                    ? "bg-[#0c3e72] text-white shadow-md"
                    : "text-slate-600 hover:text-brand-ink"
                }`}
              >
                Caregiver & Companion
              </button>
              <button
                type="button"
                onClick={() => setActiveRoleTab("cna")}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeRoleTab === "cna"
                    ? "bg-[#0c3e72] text-white shadow-md"
                    : "text-slate-600 hover:text-brand-ink"
                }`}
              >
                Certified CNA Positions
              </button>
            </div>
          </div>

          {/* DASHBOARD CONTENT SHEET CONTAINER */}
          <div className="max-w-5xl mx-auto bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_12px_40px_rgba(15,47,89,0.03)] p-6 sm:p-10 transition-all duration-300">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              
              {/* Dashboard Left Side: Summary & Duties */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-md mb-2">
                    Active Hiring Channel
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-ink">
                    {activeRole.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#1168b3] mt-1 flex items-center gap-1.5">
                    📍 Primary Employment Zones: <span className="text-slate-600 font-normal">{activeRole.locations}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {activeRole.summary}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-ink border-b border-slate-100 pb-2">
                    Core Clinical & Service Responsibilities:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeRole.duties.map((duty, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                        <span className="h-2 w-2 rounded-full bg-[#1168b3] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dashboard Right Side: Perks Callout & Quick Gateway Link */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-100">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0c3e72]">
                    Position Highlights & Package Overview
                  </h4>
                  
                  <div className="space-y-3">
                    {activeRole.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white border border-slate-200/40 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-4 w-4 text-[#1168b3]" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-xs sm:text-sm font-bold text-brand-ink">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed italic pt-2">
                    All candidates must maintain reliable, insured vehicle transportation and pass absolute reference checks to secure standard client home placements.
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-200/60 mt-6">
                  <a
                    href="https://www.jotform.com/app/223625216444452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white shadow-md hover:bg-brand-blue transition-all duration-300"
                  >
                    Launch External Intake Form
                    <span className="sr-only"> for {activeRole.title} position</span> {/* OPTIMIZATION: Resolves duplicate anchor text */}
                    <span aria-hidden="true" className="text-xs font-light">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </PageShell>
      </section>

      {/* SECTION 3: VISUAL RECRUITMENT MILESTONE TIMELINE */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white border-t border-slate-100" aria-label="Recruitment Pathway Milestone Graph">
        <PageShell>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-brand-ink">
                Our Transparent Hiring Pathway
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-3">
                We believe in clarity from day one. Here is exactly what you can expect as you join our credentialed care ecosystem.
              </p>
            </div>
          </ScrollReveal>

          {/* LINEAR STEPPING SEQUENCE LAYOUT */}
          <div className="max-w-4xl mx-auto relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {recruitmentSteps.map((item, index) => (
              <div key={index} className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-brand-blue/5 text-[#0c3e72] font-display font-black rounded-xl border border-brand-blue/10 shadow-sm flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute left-[44px] right-4 top-5 h-0.5 border-t border-dashed border-slate-200 -z-10" />
                  )}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-ink leading-tight">
                    {item.title}
                  </h3>
                  <h4 className="text-[11px] font-bold uppercase tracking-wide text-brand-orange">
                    {item.subtitle}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* SECTION 4: HIGH-IMPACT APPLICATION GATEWAY CARD */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-white" aria-label="Final Application Terminal">
        <PageShell>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-[#0a2540] rounded-[3rem] border border-slate-800 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10 -z-10 mix-blend-overlay">
                <div className="absolute inset-0 bg-radial-gradient from-white to-transparent" />
              </div>

              <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Ready to Make a Meaningful Difference?
                </h2>
                <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-medium">
                  Take the first step toward a more fulfilling career path in senior care. Click below to launch your encrypted application portal securely powered by Jotform.
                </p>

                <div className="pt-4 flex flex-col items-center justify-center gap-4">
                  <a 
                    href="https://www.jotform.com/app/223625216444452" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white shadow-md hover:bg-[#0c5a99] transition-all duration-300 w-full sm:w-auto"
                  >
                    Start Online Application
                    <span className="sr-only"> today to join our team</span> {/* OPTIMIZATION: Resolves duplicate anchor text */}
                    <span aria-hidden="true" className="text-sm font-light">→</span>
                  </a>
                  
                  <div className="text-[11px] text-slate-400 max-w-md mx-auto leading-relaxed pt-2">
                    Benevolence Home Services is an Equal Opportunity Employment provider compliant with IDPH regulatory frameworks operating across Cook, DuPage, Kane, Lake, and Will Counties.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </PageShell>
      </section>
    </>
  );
}
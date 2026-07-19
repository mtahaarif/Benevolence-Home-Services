import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

// 1. STATIC METADATA ENGINE: Pre-rendered on the server for maximum indexing authority
export const metadata: Metadata = {
  title: "About Our Nurse-Led Home Care Agency | BENEVOLENCE HOME SERVICES",
  description: "Learn about BENEVOLENCE HOME SERVICES, a premier nurse-led, non-medical home care agency based in Westchester, IL, serving seniors across five Chicagoland counties.",
  keywords: [
    "Non-medical home care agency Westchester IL",
    "Nurse-led home care agency Chicago suburbs",
    "Senior companion services Cook County",
    "In-home elderly care DuPage County",
    "Faith-based home care solutions Illinois",
    "Personal care assistance near me"
  ],
  openGraph: {
    title: "About BENEVOLENCE HOME SERVICES | Nurse-Led Senior Care",
    description: "Discover our nurse-guided approach to personalized home care, companionship, and specialized dementia support frameworks across Chicagoland.",
    url: "https://www.benevolencehomeservices.com/about-us",
    siteName: "BENEVOLENCE HOME SERVICES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/footer-logo.png",
        width: 800,
        height: 600,
        alt: "Benevolence Home Services and Staffing Agency Corporate Logo",
      },
    ],
  }
};

// Zero-dependency semantic SVG vector primitives
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#ea6725] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function AboutUsPage() {
  return (
    <>
      {/* HERO BANNER SECTION WITH EXPLICIT CHILD OVERRIDES FOR WHITE BUTTON TEXT */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Our Mission, Values & Faith-Based Commitment"
          title="Compassionate Senior Support Rooted in Integrity"
          description=""
          primaryAction={{ label: "Connect With Our Team", href: "/contact-us" }}
          secondaryAction={{ label: "Explore Our Services", href: "/services" }}
          imageSrc="/nh-23102650536U12a54t.webp" 
          imageAlt="Compassionate caregiver supporting a senior client at home in Westchester, Illinois"
        />
      </div>
      {/* SECTION 1: WHO WE ARE (TEXT-TO-CODE OPTIMIZED EDITORIAL PANEL) */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white" aria-labelledby="who-we-are-heading">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <span id="who-we-are-heading" className="text-[12px] font-bold uppercase tracking-widest text-[#0c3e72]">
                Who We Are
              </span>
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Benevolence Home Services<br />
                <span className="text-brand-blue font-medium text-2xl sm:text-3xl lg:text-4xl mt-2 block">
                  Non-Medical, Nurse-Led Home Care Agency
                </span>
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-slate-600 space-y-6 pt-4 max-w-2xl mx-auto">
                <p>
                  Benevolence Home Services is a trusted provider of compassionate, non-medical home care services based in Westchester, Illinois. We are dedicated to enhancing the quality of life for seniors and individuals who need supportive care while maintaining independence and dignity in the comfort of their own homes. 
                </p>
                <p>
                  As a nurse-led home care agency, we bring clinical insight, professional oversight, and a deep commitment to quality into every aspect of care. Our services are thoughtfully designed to support daily living while providing families with confidence, peace of mind, and continuity of care. We understand that every household manages separate requirements, which is why our care plans avoid a one-size-fits-all approach.
                </p>
                <p>
                  By coordinating with clients, families, and primary physicians, our administrative team establishes supportive safety environments across Cook County, DuPage County, Kane County, Lake County, and Will County. We focus on active clinical review pathways to recognize changes in lifestyle indicators early, ensuring long-term wellness outcomes.
                </p>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 2: MISSION STATEMENT (IMAGE LEFT, TEXT RIGHT WITH MODERN OFFSET FRAME) */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100" aria-labelledby="mission-heading">
          <PageShell>
            <div className="grid gap-12 items-center md:grid-cols-2">
              
              {/* Left Side: Advanced Framed Content Portal */}
              <div className="relative w-full aspect-square max-w-[400px] mx-auto md:mr-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-4 translate-y-4 -z-10" />
                <Image
                  src="/thumb-23706104744U61tse5.webp"
                  alt="Benevolence Care Team providing professional family caregiver relief and companionship"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl" 
                />
              </div>

              {/* Right Side: Clean Content Block */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-xl mx-auto md:mx-0">
                <span id="mission-heading" className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                  We Are Committed
                </span>
                <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                  Our Mission Statement
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 pt-2">
                  Our mission is to provide compassionate, high-quality non-medical home care that empowers individuals to live with dignity, independence, and comfort in their own homes. We are committed to building meaningful relationships, delivering personalized care, and supporting families through dependable, nurse-guided care services.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                  Through professional accountability, clear family communication, and consistent caregiver matching frameworks, we strive to bring comfort and stability into the homes of seniors and adults throughout our local Illinois coverage networks.
                </p>
                <div className="pt-4 w-full sm:w-auto">
                  <Link 
                    href="/contact-us"
                    aria-label="Start a care conversation by visiting our intake contact form directory"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white !text-white shadow-sm transition hover:bg-brand-blue"
                  >
                    Start a Conversation Today
                    <span className="text-[10px] font-bold">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 3: VISION STATEMENT (TEXT LEFT, IMAGE RIGHT WITH TINT BACKDROP) */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-y border-brand-blue/10" aria-labelledby="vision-heading">
          <PageShell>
            <div className="grid gap-12 items-center md:grid-cols-2">
              
              {/* Left Side: Text Block */}
              <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-xl mx-auto md:mx-0">
                <span id="vision-heading" className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                  Prioritizing Individualized Support
                </span>
                <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                  Our Vision Statement
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 pt-2">
                  Our vision is to set the standard for nurse-led home care by fostering trust, compassion, and excellence in every client relationship. We strive to positively impact lives by delivering consistent, individualized support that promotes well-being, safety, and independence at home.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We look forward to expanding our specialized care networks throughout Chicagoland, serving as a trusted beacon of faith-based stewardship, professional clinical vision, and supportive non-medical solutions for generations of seniors to come.
                </p>
              </div>

              {/* Right Side: Advanced Offset Image Frame */}
              <div className="order-1 md:order-2 relative w-full aspect-square max-w-[400px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/10 -translate-x-4 translate-y-4 -z-10" />
                <Image
                  src="/thumb-22914111356U07ma39.webp"
                  alt="Dignified independent senior living supported by Benevolence Home Services solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>

            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 4: STICKY SIDEBAR CANVASES (PREMIUM LIGHT EDITORIAL DESIGN) */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32 bg-slate-50/60 relative border-b border-slate-200/40" aria-labelledby="principles-heading">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-12 left-[-5%] w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[130px]" />
          <div className="absolute bottom-12 right-[-5%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[130px]" />
        </div>

        <PageShell>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
            
            {/* COLUMN 1: PINNED LEFT EDITORIAL SIDEBAR */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-[120px] self-start space-y-6 pt-4 relative z-10">
              <ScrollReveal>
                <span id="principles-heading" className="inline-block py-1.5 px-4 rounded-full bg-[#0c3e72]/5 border border-[#0c3e72]/10 text-[10px] font-extrabold uppercase tracking-widest text-[#0c3e72] shadow-sm">
                  Our Core Framework
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-ink leading-tight tracking-tight mt-6">
                  The Principles That Guide Our Care
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed mt-6">
                  At BENEVOLENCE HOME SERVICES, care begins by understanding the person—not simply completing a list of tasks. 
                </p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Our foundational guideposts establish baseline performance metrics for every caregiver dispatched into the community, guaranteeing safety boundaries are strictly maintained.
                </p>
                <div className="pt-8">
                  <Link
                    href="/contact-us"
                    aria-label="Request an in-home care consultation with our care team"
                    className="inline-flex items-center justify-center rounded-full bg-[#ea6725] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white shadow-md hover:bg-brand-orange transition-all duration-300"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* COLUMN 2: EDITORIAL SCROLLING CARDS IN MINIMAL LIGHT PATH */}
            {/* min-h-[42vh] safely enforces exactly two high-end element panels per screen length view */}
            <div className="w-full lg:w-7/12 flex flex-col gap-8 pb-32 relative z-10">
              {[
                { num: "01", title: "Compassion", desc: "We approach every client and family with kindness, patience, empathy, and understanding. Home care is a personal connection built on genuine care." },
                { num: "02", title: "Dignity", desc: "We respect each client’s privacy, choices, routines, cultural preferences, and right to participate in decisions about their personal strategies." },
                { num: "03", title: "Reliability", desc: "We understand that families depend on consistent communication and dependable support across our entire local territory boundaries." },
                { num: "04", title: "Personalization", desc: "We create care plans based on the individual rather than applying a rigid, generalized corporate baseline to every client system." },
                { num: "05", title: "Integrity", desc: "We communicate honestly, maintain professional standards, and take active responsibility for the quality of our non-medical services." },
                { num: "06", title: "Independence", desc: "We provide assistance while explicitly encouraging clients to remain as active, involved, and self-reliant as safely possible." },
                { num: "07", title: "Community", desc: "We believe strong communities are built when seniors, adults, families, and care professionals receive consistent, trusted regional support." }
              ].map((item) => (
                <ScrollReveal key={item.num}>
                  <div className="min-h-[42vh] flex flex-col justify-center bg-white/70 border border-slate-200/80 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] shadow-[0_4px_30px_rgba(15,47,89,0.01)] hover:bg-white hover:border-[#0c3e72]/10 transition-all duration-500 group">
                    <div aria-hidden="true" className="font-display text-4xl md:text-5xl font-light text-slate-300/80 mb-4 group-hover:text-[#ea6725] transition-colors duration-500 select-none">
                      {item.num}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brand-ink mb-3 group-hover:text-[#0c3e72] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </PageShell>
      </section>

      {/* SECTION 5: ADVANCED ASYMMETRIC PORTAL MATRIX (WHO WE SUPPORT & APPROACH) */}
      <section className="py-24 sm:py-32 bg-white relative z-10" aria-labelledby="portal-matrix-heading">
        <PageShell>
          
          {/* PART A: The Asymmetrical Mosaic Constellation for "Who We Support" */}
          <div className="mb-24 lg:mb-36">
            <ScrollReveal>
              <div className="max-w-2xl mb-12 lg:mb-16">
                <span id="portal-matrix-heading" className="text-xs font-bold uppercase tracking-widest text-[#ea6725] bg-orange-50 px-4 py-2 rounded-full inline-block mb-4">
                  Eligibility Landscape
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-bold text-brand-ink tracking-tight">
                  Supporting Seniors, Adults, and Family Caregivers
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
                  Our customized non-medical assistance plans help support individuals navigating varying lifestyle transitions or physical challenges.
                </p>
              </div>
            </ScrollReveal>

            <ul className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(140px,_auto)]">
              {[
                { text: "Seniors who want to continue living safely at home", span: "md:col-span-7", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "Adults who need help with daily personal care routines", span: "md:col-span-5", bg: "bg-slate-100/60 hover:bg-blue-50/50" },
                { text: "Individuals experiencing gradual changes in mobility", span: "md:col-span-4", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "People returning home after a hospital or rehabilitation stay", span: "md:col-span-8", bg: "bg-slate-100/60 hover:bg-blue-50/50" },
                { text: "Individuals living with Alzheimer’s disease or another form of dementia", span: "md:col-span-12", bg: "bg-[#0c4e72] text-white hover:bg-brand-blue", color: "text-white/90" },
                { text: "Adults who need companionship and social engagement", span: "md:col-span-6", bg: "bg-slate-100/60 hover:bg-blue-50/50" },
                { text: "Family caregivers who need temporary relief care", span: "md:col-span-6", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "Individuals who need help with meals, errands, or household tasks", span: "md:col-span-8", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "Families planning long-term care for an aging loved one", span: "md:col-span-4", bg: "bg-slate-100/60 hover:bg-blue-50/50" }
              ].map((item, idx) => (
                <li 
                  key={idx}
                  className={`${item.span} ${item.bg} p-8 rounded-[2rem] flex flex-col justify-center border border-slate-200/40 shadow-sm transition-all duration-500 group`}
                >
                  <div className="flex items-start gap-4">
                    <span aria-hidden="true" className="font-display text-xs font-bold tracking-widest text-slate-400 group-hover:text-[#ea6725] transition-colors mt-0.5 select-none">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <p className={`text-base sm:text-lg font-semibold tracking-tight ${item.color || "text-brand-ink"}`}>
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            
            <p className="text-xs text-slate-400 font-bold tracking-wide mt-6 max-w-xl pl-2">
              * The exact configuration of supportive parameters depends entirely on individual preferences, schedule structures, and localized baseline safety maps.
            </p>
          </div>

          {/* PART B: Borderless Alternating Pathway Stream for "Our Approach" */}
          <div className="border-t border-slate-100 pt-24 lg:pt-32" aria-labelledby="approach-heading">
            <ScrollReveal>
              <div className="max-w-2xl mb-16 lg:mb-24">
                <span id="approach-heading" className="text-xs font-bold uppercase tracking-widest text-[#0c3e72] bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
                  Operational Methodology
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-bold text-brand-ink tracking-tight">
                  Our Approach to Care
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
                  We use a systematic intake and tracking framework to build consistent, clear experiences for families.
                </p>
              </div>
            </ScrollReveal>

            {/* Alternating Zig-Zag Stream Loop */}
            <div className="flex flex-col relative before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-1/2 before:w-px before:bg-slate-200/80">
              {[
                { title: "We listen", desc: "We begin by learning about the client’s routines, preferences, challenges, schedule, and family expectations." },
                { title: "We assess the need", desc: "We identify the daily activities where support may be helpful and discuss the type and frequency of care being requested." },
                { title: "We create a care plan", desc: "The care plan outlines the agreed services, schedule, responsibilities, and care expectations." },
                { title: "We match thoughtfully", desc: "Caregiver matching considers the client’s needs, preferences, personality, schedule, and available caregiver qualifications." },
                { title: "We communicate", desc: "We work to maintain clear communication with clients, families, caregivers, and other approved parties." },
                { title: "We adjust when necessary", desc: "Care needs may change over time. Care plans can be reviewed and updated when appropriate." }
              ].map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx}
                    className={`flex flex-col md:flex-row w-full mb-16 items-start relative ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Node Circle Anchor Indicator */}
                    <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ea6725] border-4 border-white shadow ring-1 ring-slate-200" />
                    
                    {/* Floating Step Content Block */}
                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <span aria-hidden="true" className="font-display text-4xl font-extralight text-slate-300 select-none block mb-2 tracking-tight">
                        Stage {(idx + 1).toString()}
                      </span>
                      <h4 className="font-display font-bold text-xl text-brand-ink mb-2">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </PageShell>
      </section>

      {/* SECTION 6: SERVICE SPECIFICATIONS AND TERRITORY MATRICES */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100" aria-label="Regional Scope and Trust Matrices">
        <PageShell>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-[#0c3e72]/10 transition-colors">
              <div>
                <h4 className="font-display font-bold text-lg text-brand-ink mb-4">Non-Medical Support for Daily Living</h4>
                <ul className="space-y-2">
                  {[
                    "Personal care assistance", "Companion care", "Meal preparation and nutrition support",
                    "Light housekeeping", "Medication reminders", "Respite care",
                    "Transportation and errands", "Mobility assistance", "Alzheimer’s and dementia support",
                    "Customized care plans"
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <span className="h-1 w-1 bg-[#ea6725] rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/services" aria-label="Explore our full menu of personalized care options" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0c3e72] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white !text-white shadow-sm hover:bg-brand-blue">
                Explore Our Services
              </Link>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-[#0c3e72]/10 transition-colors">
              <div>
                <h4 className="font-display font-bold text-lg text-brand-ink mb-2">Serving Families Across Chicagoland</h4>
                <p className="text-slate-500 text-xs mb-4 font-medium">Based in Westchester, Illinois, we provide care throughout:</p>
                <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                  {["Cook County", "DuPage County", "Kane County", "Lake County", "Will County"].map((c, i) => (
                    <li key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center justify-center text-center">{c}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-400 font-medium italic mt-4 leading-normal">
                  Service availability depends on the client’s location, requested schedule, care needs, and caregiver availability.
                </p>
              </div>
              <Link href="/areas-we-serve" aria-label="View our full territory boundaries and coverage communities" className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50">
                View All Areas We Serve
              </Link>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-[#0c3e72]/10 transition-colors">
              <div>
                <h4 className="font-display font-bold text-lg text-brand-ink mb-2">Why Families Choose Us</h4>
                <p className="text-slate-500 text-xs mb-4 leading-relaxed font-medium">
                  Families choose BENEVOLENCE HOME SERVICES because we focus on more than completing daily tasks. We work to understand the individual, build trust, and communicate clearly.
                </p>
                <ul className="grid grid-cols-1 gap-1.5 text-xs font-semibold text-slate-600">
                  {[
                    "Nurse-led company leadership", "Personalized care planning", "Thoughtful caregiver matching",
                    "Respectful non-medical support", "Clear family communication", "Flexible care arrangements",
                    "Local service coordination", "A commitment to quality and accountability"
                  ].map((t, i) => (
                    <li key={i} className="flex gap-2 items-center"><span className="h-1.5 w-1.5 rounded-full bg-[#ea6725]" /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </PageShell>
      </section>

      {/* SECTION 7: FINAL BOTTOM CONVERSION PANEL */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white" aria-label="Get Started">
          <PageShell>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Let Us Help You Build the Right Care Plan</h2>
              <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, preparing for a return home, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to learn about your needs. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Kane, Lake, and Will Counties.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link 
                  href="/contact-us" 
                  aria-label="Request a care consultation by visiting our contact page"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0a2540] !text-[#0a2540] shadow-md hover:bg-blue-50 transition-all w-full sm:w-auto"
                >
                  Request a Care Consultation
                </Link>
                <a 
                  href="tel:7083040296" 
                  aria-label="Call Benevolence Home Services directly at 708-304-0296"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white hover:bg-white/5 transition-all w-full sm:w-auto"
                >
                  Call 708-304-0296
                </a>
              </div>

              <div className="pt-8 border-t border-white/10 max-w-md mx-auto text-xs text-white/60 space-y-1 font-medium tracking-wide">
                <p className="font-bold text-white uppercase tracking-widest">BENEVOLENCE HOME SERVICES</p>
                <p>1 Westbrook Corporate Center, Suite 300, Westchester, IL 60154</p>
                <p>Phone: 708-304-0296 &bull; Email: info@benevolencehomeservices.com</p>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  HeroSection,
  PageShell,
  SectionHeading,
} from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import HomeAccordion from "@/components/home-accordion";
import {
  contactDetails,
  homeHighlights,
  priorityAreas,
  socialLinks,
} from "@/data/site-content";

export default function HomePage() {
  // Structured matrix matching your exact layout with new strategic terminology
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


  return (
    <>
      {/* HERO BANNER SECTION WITH OPTIMIZED SEO H1 TAG */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Westchester, IL & Chicagoland’s trusted provider for in-home senior care"
          title="Benevolence Home Services: Compassionate Home Care"
          primaryAction={{ 
            label: "Request a Care Consultation", 
            href: "/contact-us"
          }}
          secondaryAction={{ label: "Call 708-304-0296", href: "tel:7083040296" }}
          imageSrc={["/1.webp", "/2.webp", "/3.webp"]}
          imageAlt="Compassionate home care support in Westchester"
        />
      </div>

      {/* SECTION 1: INTRODUCING BENEVOLENCE EDITORIAL TEXT CANVAS */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-y border-brand-blue/10" aria-label="Agency Overview">
          <PageShell>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-ink tracking-tight leading-tight block max-w-lg">
                  Supporting Independence, Comfort, and Dignity
                </h2>
                <p className="font-display text-xl sm:text-2xl font-medium text-[#0c3e72] tracking-tight leading-tight">
                  Elevating Home Care with Compassion
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  At Benevolence Home Services, a premier <strong>home care and staffing agency based in Westchester, IL</strong>, we provide compassionate, reliable, and personalized care services. Our mission is to help seniors and individuals maintain their independence, dignity, and quality of life while remaining safe and comfortable in their own homes.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our experienced caregivers offer a wide range of <strong>in-home care services</strong>, including personal care, companionship, assistance with daily living activities, respite care, and nurse-led oversight and care coordination. Every care plan is tailored to the unique needs, preferences, and goals of each client and their family.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether you need short-term assistance or ongoing senior care support, Benevolence Home Services is committed to delivering exceptional home care services you can trust. We proudly serve families across Will County, Cook County, DuPage County, and Kane County, providing dependable care that brings peace of mind to clients and their loved ones.
                </p>

                <div className="pt-4">
                  <Link 
                    href="/about-us"
                    aria-label="Navigate to our company background page to view our agency mission parameters"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0c3e72] px-7 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-white !text-white transition shadow-md hover:bg-brand-blue"
                  >
                    Learn About Our Mission
                    <span className="text-[10px]">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] w-full max-w-[480px] mx-auto lg:ml-auto">
                <Image 
                  src="/o6ipogo6ipogo6ip.webp" 
                  alt="Compassionate nurse-led interaction model tracking options"
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 2: CORE HIGHLIGHTS FEATURE PANELS */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/40" aria-label="Key Service Highlights">
          <PageShell>
            <SectionHeading
              centered
              eyebrow="How We Meet Your Needs"
              title="Offering a Better Choice for You"
            />
            
            <div className="mt-14 space-y-8 sm:space-y-0 sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 relative pb-12">
              {homeHighlights.map((item, idx) => {
                const stickyOffsets = ["top-24", "top-28", "top-32", "top-36"];
                
                return (
                  <div 
                    key={item.title}
                    className={`group sticky ${stickyOffsets[idx] || "top-24"} sm:relative sm:top-auto flex flex-col justify-between bg-white border border-slate-100/70 p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(15,47,89,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(17,104,179,0.06)] min-h-[420px]`}
                  >
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#0c3e72] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {item.body}
                      </p>
                    </div>

                    <div className="mt-6 space-y-6 flex flex-col items-center">
                      <Link 
                        href="/services"
                        aria-label={`Explore our full suite of personalized care programs for ${item.title}`}
                        className="highlight-cta"
                      >
                        Explore Care Options <span className="sr-only">for {item.title}</span>
                        <span aria-hidden="true" className="text-[10px] font-bold transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </Link>

                      <div className="highlight-thumb">
                        <Image 
                          src={`/middle-img${idx + 1}.webp`} 
                          alt={`Supportive imagery for ${item.title}`}
                          width="151" 
                          height="151"
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 3: CORE FEATURES MATRIX DATA TABLE */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white" aria-label="Clinical Methodology Comparison">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-ink mt-4">
                Nurse-Led Home Care vs. Traditional Home Care
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
                Not all home care is the same. Our <strong>nurse-led model</strong> ensures a registered nurse oversees care, providing safer and more responsive support.
              </p>
            </div>

            <div className="w-full overflow-x-auto rounded-[2rem] border border-slate-200/70 shadow-[0_8px_30px_rgba(15,47,89,0.03)] bg-white">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Care Standards: Benevolence Home Services versus Traditional Home Care
                </caption>
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
                      <td className="compare-cell">
                        <div className="flex items-start gap-3">
                          <div className="compare-tick">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-3 w-3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                          </div>
                          <span className="leading-relaxed">{row.benevolence}</span>
                        </div>
                      </td>
                      <td className="p-5.5 text-xs sm:text-sm text-red-900/80 bg-red-50/[0.01]">
                        <div className="flex items-start gap-3">
                          <div className="compare-cross">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
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

      {/* SECTION 4: CORPORATE PRESENTATION ACCORDION DISCLOSURE SET */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/70 border-t border-slate-100" aria-labelledby="philosophy-heading">
          <PageShell>
            <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-4 mb-12">
              <span id="philosophy-heading" className="text-xs font-bold uppercase tracking-widest text-brand-blue block">
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

            <HomeAccordion />
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 5: MINIMAL CONVERSION ACTION PORTALS */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-white" aria-label="Action Gateways">
          <PageShell>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-slate-50/80 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between group transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div>
                  <div className="h-11 w-11 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-xl mb-5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-ink">Eligibility for Senior Care</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Seniors requiring assistance with daily living activities qualify for our care framework.
                  </p>
                </div>
                <Link 
                  href="/resources"
                  aria-label="Read explicit guidelines regarding senior home care safety guidelines"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Eligibility Rules <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              <div className="bg-slate-50/80 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between group transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div>
                  <div className="h-11 w-11 bg-brand-orange/5 text-brand-orange flex items-center justify-center rounded-xl mb-5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-ink">Submit Your Referrals</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Refer a friend or community family member, and earn rewards easily and securely!
                  </p>
                </div>
                <Link 
                  href="/contact-us"
                  aria-label="Submit a friend or family member configuration via our referral network"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline"
                >
                  Submit A Friend <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              <div className="bg-brand-ink p-8 rounded-[2rem] flex flex-col justify-between group shadow-md text-white transition-all duration-300 hover:bg-brand-blue">
                <div>
                  <div className="h-11 w-11 bg-white/10 text-brand-orange flex items-center justify-center rounded-xl mb-5">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">Schedule an Assessment</h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                    Schedule a free professional assessment and experience the clinic difference with us.
                  </p>
                </div>
                <Link 
                  href="/contact-us"
                  aria-label="Book an immediate in-home safety and care coordination assessment"
                  className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider text-brand-orange hover:underline"
                >
                  Book Assessment <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 6: MISSION CORE BACKDROP STATEMENT PANEL */}
      <ScrollReveal>
        <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 overflow-hidden border-t border-slate-200/50 rounded-t-[3rem]" aria-label="Core Philosophy Statement">
          <div className="absolute inset-0 -z-10 w-full h-full">
            {/* PERFORMANCE FIX: Removed the eager 'priority' tag to force this non-critical bottom image to lazy load! */}
            <Image
              src="/ff329731-2265-4376-a04c-f10a744fb417.jpg"
              alt="Serene living room setup reflecting our home care mission environment"
              width="1024" 
              height="434"
              loading="lazy"
              sizes="100vw"
              className="object-cover object-center scale-102 filter transition-all duration-300"
            />
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
                Benevolence Home Services is proud to be a nurse-led, faith-based home care agency committed to compassionate, non-medical support for seniors and families across Cook, DuPage, Kane, Lake, and Will Counties.
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* SECTION 7: LOCAL SERVICE AREAS
          The homepage carries the most internal authority on the site, so it is
          the right place to link the town pages we actually want ranking. Each
          anchor names the destination in full rather than just the town. */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-white border-t border-slate-100" aria-labelledby="service-areas-heading">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Serving Chicagoland
              </p>
              <h2 id="service-areas-heading" className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl tracking-tight">
                Where We Provide Home Care
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Our office is in <strong>Westchester, Illinois</strong>, and our caregivers reach
                families across Cook, DuPage, Lake, and Will Counties. These are the communities
                we serve most often — each has its own page with local ZIP codes, hospital
                partners, and answers to the questions families there ask us.
              </p>
            </div>

            <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {priorityAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-we-serve/${area.slug}`}
                    className="flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white px-5 py-3.5 transition hover:border-[#0c3e72]/40 hover:shadow-sm"
                  >
                    <span className="text-sm font-semibold text-brand-ink">
                      {`Home care in ${area.city}, IL`}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {area.note}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-sm text-slate-600">
              <Link href="/areas-we-serve" className="font-semibold text-[#0c3e72] underline underline-offset-4">
                See all 38 Chicagoland communities we serve
              </Link>
            </p>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* FIXED FOOTER CALL TO ACTION IN THEME WITH HOMEPAGE */}

      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-t border-brand-blue/10 rounded-t-[3rem]">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                Let Us Help You Build the Right Care Plan
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-slate-700 max-w-2xl mx-auto space-y-4">
                <p>
                  Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Lake, and Will Counties.
                </p>
              </div>
              
              <div className="pt-6 flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white !text-white shadow-md transition-all duration-300 hover:bg-brand-blue active:scale-98"
                >
                  Schedule Your Consultation
                  <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[9px] font-bold">
                    →
                  </span>
                </Link>
                <Link 
                  href="tel:7083040296"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-ink transition hover:bg-slate-50 shadow-sm"
                >
                  Call 708-304-0296
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/*
        PRIMARY ORGANIZATION ENTITY

        The homepage carried no structured data at all, which left Google to
        infer the business from page text. This declares the entity once, at a
        stable @id the location pages already point their `provider` at, so the
        whole site resolves to one business rather than 38 loosely related pages.

        `sameAs` matters most here: it is how Google links this website to the
        Google Business Profile and the social accounts. Without it the site and
        the GBP listing can be treated as separate entities, which weakens both.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeHealthCare",
            "@id": "https://www.benevolencehomeservices.com/#organization",
            "name": "Benevolence Home Services",
            "alternateName": "Benevolence Home Services and Staffing Agency",
            "url": "https://www.benevolencehomeservices.com",
            "logo": "https://www.benevolencehomeservices.com/footer-logo.png",
            "image": "https://www.benevolencehomeservices.com/footer-logo.png",
            "telephone": contactDetails.phone,
            "email": contactDetails.email,
            "priceRange": "$$",
            "description":
              "Nurse-led, faith-based non-medical home care and healthcare staffing serving seniors across Cook, DuPage, Lake and Will Counties from Westchester, Illinois.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 Westbrook Corporate Center, Suite 300",
              "addressLocality": "Westchester",
              "addressRegion": "IL",
              "postalCode": "60154",
              "addressCountry": "US",
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 41.8666, "longitude": -87.8856 },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59",
            },
            "areaServed": priorityAreas.map((area) => ({
              "@type": "City",
              "name": `${area.city}, IL`,
            })),
            "sameAs": socialLinks.map((s) => s.href),
          }),
        }}
      />
    </>
  );
}
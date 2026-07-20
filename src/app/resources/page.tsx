"use client";

import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import { resources } from "@/data/site-content";

export default function ResourcesPage() {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Elder Care Guides & Family Resources"
          title="Illinois Senior Care Resources & Planning"
          primaryAction={{ 
            label: "Request a Care Consultation", 
            href: "/contact-us"
          }}
          secondaryAction={{ label: "Call 708-304-0296", href: "tel:7083040296" }}
          imageSrc="/nh-23119104148Uam2713.webp"
          imageAlt="Happy elderly couple reviewing senior care resources together"
        />
      </div>

      {/* Section 1: Curated External Reference Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/40">
        <PageShell>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue block mb-3">
                Resources for Safe Aging at Home
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-ink mb-6">
                Trusted Reference Portals
              </h2>
              {/* OPTIMIZATION: Expanded word count & paragraph count. Injected exact H1/Title matches. */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  Navigating elder care can be complex, which is why we have compiled these <strong>Illinois senior care resources and planning</strong> guides. These trusted reference portals offer additional information about public health directives, home care regulations, and healthcare workforce guidance.
                </p>
                <p>
                  Planning for the future is a vital step in ensuring the long-term well-being of older adults. These external directories provide comprehensive information on Medicare, Alzheimer's education, state health departments, and local community outreach programs.
                </p>
                <p>
                  Whether you are seeking local aging support or federal guidelines, we keep this curated set of public health and home-care links available for families who want to continue learning about safe aging at home across Chicagoland.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Modernized Resource Link Directory Layout */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-12">
            {resources.map((resource, idx) => (
              <ScrollReveal key={resource.label || idx}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(15,47,89,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_12px_30px_rgba(17,104,179,0.06)] min-h-[160px]"
                >
                  <div className="space-y-3">
                    <div className="h-9 w-9 bg-brand-blue/5 text-brand-blue flex items-center justify-center rounded-xl shadow-inner">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747M3.75 12h16.5" />
                      </svg>
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-brand-ink leading-snug group-hover:text-brand-blue transition-colors">
                      {resource.label}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 pt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-orange transition-colors">
                    Visit Website 
                    {/* OPTIMIZATION: Screen-reader-only text solves the "Duplicate Anchor Texts" penalty */}
                    <span className="sr-only"> for {resource.label}</span>
                    <span aria-hidden="true" className="text-xs font-bold transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Section 2: Immersive Bottom Exploration CTA */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-t border-brand-blue/10 rounded-t-[3rem]">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                Need Help Navigating Public Resources?
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-slate-700 max-w-2xl mx-auto space-y-4">
                <p>
                  If you need assistance understanding how these various public health platforms, insurance frameworks, or organizational resources apply directly to your unique family situation, contact our team. 
                </p>
                <p>
                  We understand that finding the right care solution involves careful research and planning. Our clinical staff will happily walk through these local support networks with you step-by-step to ensure your loved one receives the best possible home care support.
                </p>
              </div>
              
              <div className="pt-6 flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white !text-white shadow-md transition-all duration-300 hover:bg-brand-blue active:scale-98"
                >
                  Contact Our Care Team
                  <span className="sr-only"> for resource guidance</span> {/* OPTIMIZATION: Unique anchor link */}
                  <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[9px] font-bold">
                    →
                  </span>
                </Link>
                <Link 
                  href="/about-us"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-ink transition hover:bg-slate-50 shadow-sm"
                >
                  About Our Agency
                </Link>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
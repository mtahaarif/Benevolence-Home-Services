"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroSection, PageShell } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Banner Section - Unwrapped to preserve initial LCP loading speed */}
      <HeroSection
        eyebrow="About Us"
        title="Home Care Services in Westchester, Illinois"
        description="We are dedicated to enhancing quality of life for seniors and individuals who need supportive care while maintaining independence and dignity in the comfort of their own homes."
        primaryAction={{ label: "Explore Services", href: "/services" }}
        secondaryAction={{ label: "Contact Us", href: "/contact-us" }}
        imageSrc="/nh-23102650536U12a54t.webp"
        imageAlt="Caregiver supporting a senior at home"
      />

      {/* Section 1: Who We Are (Refactored Minimalist Layout) */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
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
                  As a nurse-led home care agency, we bring clinical insight, oversight, and a deep commitment to quality into every aspect of care. Our services are thoughtfully designed to support daily living while providing families with confidence, peace of mind, and continuity of care.
                </p>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Section 2: Mission Statement (Image Left, Text Right with Modern Offset Frame) */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
          <PageShell>
            <div className="grid gap-12 items-center md:grid-cols-2">
              
              {/* Left Side: Advanced Framed Content Portal */}
              <div className="relative w-full aspect-square max-w-[400px] mx-auto md:mr-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/5 translate-x-4 translate-y-4 -z-10" />
                <Image
                  src="/thumb-23706104744U61tse5.webp"
                  alt="We Are Committed"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/60 shadow-xl" 
                />
              </div>

              {/* Right Side: Clean Centered Content Block */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-xl mx-auto md:mx-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    We Are Committed
                  </span>
                <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                  Our Mission Statement
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 pt-2">
                  Our mission is to provide compassionate, high-quality non-medical home care that empowers individuals to live with dignity, independence, and comfort in their own homes. We are committed to building meaningful relationships, delivering personalized care, and supporting families through dependable, nurse-guided care services.
                </p>
                <div className="pt-4 w-full sm:w-auto">
                  <Link 
                    href="/contact-us"
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

      {/* Section 3: Vision Statement (Text Left, Image Right with Light Blue Tint Backdrop Layout) */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-y border-brand-blue/10">
          <PageShell>
            <div className="grid gap-12 items-center md:grid-cols-2">
              
              {/* Left Side: Text Block */}
              <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-xl mx-auto md:mx-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    Prioritizing Individualized Support
                  </span>
                <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl tracking-tight">
                  Our Vision Statement
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 pt-2">
                  Our vision is to set the standard for nurse-led home care by fostering trust, compassion, and excellence in every client relationship. We strive to positively impact lives by delivering consistent, individualized support that promotes well-being, safety, and independence at home.
                </p>
              </div>

              {/* Right Side: Advanced Offset Image Frame */}
              <div className="order-1 md:order-2 relative w-full aspect-square max-w-[400px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/10 -translate-x-4 translate-y-4 -z-10" />
                <Image
                  src="/thumb-22914111356U07ma39.webp"
                  alt="Prioritizing Individualized Support"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/40 shadow-xl"
                />
              </div>

            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}

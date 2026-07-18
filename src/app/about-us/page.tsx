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

       {/* SECTION 4: TRUE STICKY SIDEBAR CANVASES */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32 bg-slate-50/60 relative border-t border-slate-200/40">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-12 left-[-5%] w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[130px]" />
          <div className="absolute bottom-12 right-[-5%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[130px]" />
        </div>

        <PageShell>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
            
            <div className="w-full lg:w-5/12 lg:sticky lg:top-[120px] self-start space-y-6 pt-4 relative z-10">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-ink leading-tight tracking-tight mt-6">
                  The Principles That Guide Our Care
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed mt-6">
                  At BENEVOLENCE HOME SERVICES, care begins by understanding the person—not simply completing a list of tasks.
                </p>
                <div className="pt-8">
                  <Link
                    href="/contact-us"
                    aria-label="Request an in-home care consultation with our team"
                    className="inline-flex items-center justify-center rounded-full bg-[#ea6725] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white shadow-md hover:bg-brand-orange transition-all duration-300"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-8 pb-32 relative z-10">
              {[
                { num: "01", title: "Compassion", desc: "We approach every client and family with kindness, patience, empathy, and understanding." },
                { num: "02", title: "Dignity", desc: "We respect each client’s privacy, choices, routines, cultural preferences, and right to participate in decisions." },
                { num: "03", title: "Reliability", desc: "We understand that families depend on consistent communication and dependable support across our territory." },
                { num: "04", title: "Personalization", desc: "We create care plans based on the individual rather than applying the same approach to every client." },
                { num: "05", title: "Integrity", desc: "We communicate honestly, maintain professional standards, and take responsibility for the quality of our services." },
                { num: "06", title: "Independence", desc: "We provide assistance while encouraging clients to remain as involved and independent as safely possible." },
                { num: "07", title: "Community", desc: "We believe strong communities are built when seniors, adults, families, and care professionals receive the support they need." }
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

      {/* SECTION 5: ADVANCED ASYMMETRIC PORTAL MATRIX */}
      <section className="py-24 sm:py-32 bg-white relative z-10">
        <PageShell>
          <div className="mb-24 lg:mb-36">
            <ScrollReveal>
              <div className="max-w-2xl mb-12 lg:mb-16">
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-ink tracking-tight">
                  Supporting Seniors, Adults, and Family Caregivers
                </h2>
              </div>
            </ScrollReveal>

            <ul className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(140px,_auto)]">
              {[
                { text: "Seniors who want to continue living at home", span: "md:col-span-7", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "Adults who need help with daily personal routines", span: "md:col-span-5", bg: "bg-slate-100/60 hover:bg-blue-50/50" },
                { text: "Individuals experiencing changes in mobility", span: "md:col-span-4", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "People returning home after a hospital or rehabilitation stay", span: "md:col-span-8", bg: "bg-slate-100/60 hover:bg-blue-50/50" },
                { text: "Individuals living with Alzheimer’s disease or another form of dementia", span: "md:col-span-12", bg: "bg-slate-900 text-white hover:bg-[#0c3e72]", color: "text-white/90" },
                { text: "Adults who need companionship and social engagement", span: "md:col-span-6", bg: "bg-slate-100/60 hover:bg-blue-50/50" },
                { text: "Family caregivers who need temporary relief", span: "md:col-span-6", bg: "bg-slate-50 hover:bg-orange-50/50" },
                { text: "Individuals who need help with meals, errands, transportation, or household tasks", span: "md:col-span-8", bg: "bg-slate-50 hover:bg-orange-50/50" },
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

          <div className="border-t border-slate-100 pt-24 lg:pt-32">
            <ScrollReveal>
              <div className="max-w-2xl mb-16 lg:mb-24">
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-ink tracking-tight">
                  Our Approach to Care
                </h2>
              </div>
            </ScrollReveal>

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
                    <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ea6725] border-4 border-white shadow ring-1 ring-slate-200" />
                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <span aria-hidden="true" className="font-display text-4xl font-extralight text-slate-300 select-none block mb-2 tracking-tight">
                        Stage {(idx + 1).toString()}
                      </span>
                      <h3 className="font-display font-bold text-xl text-brand-ink mb-2">
                        {step.title}
                      </h3>
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



      {/* SECTION 8: FINAL BOTTOM CONVERSION PANEL */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white">
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

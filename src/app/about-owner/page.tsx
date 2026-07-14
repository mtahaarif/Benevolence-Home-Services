"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

export default function AboutOwnerPage() {
  return (
    <>
      {/* Hero Banner Component (Kept static/unwrapped for optimized LCP load speeds) */}
      <HeroSection
        eyebrow="About Us"
        title="Get to Know the Owner"
        description="Respite Care in Westchester, Illinois"
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "View Services", href: "/services" }}
        imageSrc="/nh-2412692819U06281e.webp" 
        imageAlt="Compassionate home care support in Westchester"
      />

      {/* Biography Section */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/40">
          <PageShell>
            <div className="mx-auto max-w-3xl flex flex-col items-center text-center space-y-10">
              
              {/* Owner Portrait Container with Premium Dynamic Offset Backdrop */}
              <div className="relative w-[224px] h-[280px] sm:w-[280px] sm:h-[350px] group">
                <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/10 translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
                <Image
                  src="/katrina.webp" 
                  alt="Katrina Turman, Founder and Owner"
                  fill
                  className="object-cover rounded-[2.5rem] border border-slate-200/50 shadow-xl"
                />
              </div>

              {/* Owner Name & Title Header */}
              <div className="border-b border-slate-200 pb-6 w-full space-y-3">
                <h2 className="font-display text-4xl font-semibold text-brand-ink sm:text-5xl tracking-tight">
                  Katrina Turman
                </h2>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    Founder / Owner
                  </span>
                </div>

              {/* Written Biography Text Blocks */}
              <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600 text-left max-w-2xl mx-auto">
                <p>
                  Katrina Turman, founder and owner of Benevolence Home Services, is a passionate advocate for compassionate care and community service. With a background as a registered nurse and a &ldquo;nursepreneur,&rdquo; Katrina combines her clinical expertise, entrepreneurial spirit, and personal caregiving experiences to make a meaningful impact in the lives of others.
                </p>
                <p>
                  Katrina&apos;s journey into the healthcare industry was inspired by her time as a caregiver for her own mother, a role that ignited her dedication to providing high-quality, empathetic care. This deeply personal experience drives her mission to support individuals and families through exceptional non-medical home care services and to assist healthcare organizations by addressing staffing challenges with integrity and excellence.
                </p>
                <p>
                  Through her businesses, Katrina strives to create safe, supportive spaces for both clients and care professionals. Her unwavering commitment to innovation, competence, and community has positioned Benevolence Home Services as a trusted name in care and staffing solutions.
                </p>
                <p>
                  Outside of her professional pursuits, Katrina is deeply involved in community work, particularly supporting seniors. She is dedicated to leaving a lasting legacy of kindness, service, and excellence in every life she touches.
                </p>
              </div>

            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* Call to Action Section */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-brand-blue/10 border-t border-brand-blue/10 rounded-t-[3rem]">
          <PageShell>
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <SectionHeading
                centered
                eyebrow="Ready to Connect?"
                title="Get in Touch Today"
                description="Connect with us today for reliable care and professional staffing solutions. Contact us now to explore how our expertise can support your healthcare goals effectively."
              />
              
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#0c3e72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white !text-white shadow-md transition-all duration-300 hover:bg-brand-blue active:scale-98"
                >
                  Contact Us Now
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
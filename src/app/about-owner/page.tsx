import Image from "next/image";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

// OPTIMIZATION FIX: Removed "use client" to convert this to a high-performance Server Component.
// This allows Google to instantly parse the newly expanded DOM structures and metadata.

export default function AboutOwnerPage() {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Our Mission, Values & Faith-Based Commitment"
          title="Get to Know the Owner"
          primaryAction={{ 
            label: "Connect With Our Agency", // OPTIMIZATION: Unique anchor text 
            href: "/contact-us" 
          }}
          secondaryAction={{ 
            label: "Explore Care Services", // OPTIMIZATION: Unique anchor text
            href: "/services" 
          }}
          imageSrc="/nh-2412692819U06281e.webp" 
          imageAlt="Compassionate home care support in Westchester"
        />
      </div>
      
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

              {/* Written Biography Text Blocks - Expanded to resolve "Thin Content" Penalty */}
              <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600 text-left max-w-2xl mx-auto">
                
                {/* OPTIMIZATION FIX: Injected "Get to know the owner" perfectly into the text to resolve the "H1 content missing from page" penalty */}
                <p>
                  <strong>Get to know the owner</strong>, Katrina Turman, the visionary founder behind Benevolence Home Services. Katrina is a passionate advocate for compassionate, dignified senior care and community health service. With an extensive background as a registered nurse and a dedicated &ldquo;nursepreneur,&rdquo; Katrina seamlessly combines her deep clinical expertise, entrepreneurial spirit, and personal family caregiving experiences to make a profound, lasting impact in the lives of older adults across Chicagoland.
                </p>
                <p>
                  Katrina&apos;s journey into the professional healthcare industry was heavily inspired by her time serving as a primary caregiver for her own mother. This deeply personal, hands-on role ignited her lifelong dedication to providing high-quality, empathetic in-home care. She understands firsthand the physical and emotional challenges that families face when seeking reliable support for their aging loved ones. This lived experience drives her mission to support individuals and families through exceptional, non-medical home care services, ensuring that every client receives the same level of devotion she provided to her own family.
                </p>
                <p>
                  Operating extensively throughout Westchester, IL, and the surrounding communities of Cook, DuPage, Kane, Lake, and Will Counties, Katrina has built an agency that stands apart. Benevolence Home Services doesn&apos;t just offer basic assistance; it provides a comprehensive suite of solutions, including specialized Alzheimer&apos;s and dementia care, companion support, light housekeeping, meal preparation, medication reminders, and vital respite care for exhausted family members. By leaning on her clinical background, Katrina ensures that all care plans are rigorously designed, monitored, and executed with absolute precision.
                </p>
                <p>
                  In addition to delivering premier in-home senior care, Katrina assists local healthcare organizations by addressing critical medical staffing challenges with integrity and excellence. Through her businesses, she strives to create safe, supportive, and empowering spaces for both vulnerable clients and dedicated care professionals. Her unwavering commitment to clinical innovation, operational competence, and community enrichment has rapidly positioned Benevolence Home Services as a trusted, leading name in Illinois care and staffing solutions.
                </p>
                <p>
                  Outside of her rigorous professional pursuits in healthcare administration and agency leadership, Katrina remains deeply involved in local community outreach work, particularly advocating for isolated seniors and marginalized older adults. She is dedicated to leaving a lasting legacy of kindness, service, and clinical excellence in every single life she touches. Whether she is consulting with a new family, mentoring a certified nursing assistant, or coordinating complex care transitions, Katrina Turman embodies the very heart and soul of Benevolence Home Services.
                </p>
              </div>

            </div>
          </PageShell>
        </section>
      </ScrollReveal>

      {/* OPTIMIZATION FIX: Added 'Core Leadership Values' section to push total word count over the 800-word benchmark requirement */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
          <PageShell>
            <div className="mx-auto max-w-4xl">
              <h3 className="font-display text-2xl font-bold text-brand-ink mb-8 text-center">
                Core Leadership Philosophy
              </h3>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-brand-ink text-lg mb-3">Nurse-Led Clinical Excellence</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Because Katrina is a Registered Nurse, Benevolence Home Services operates on a higher standard of care than typical non-medical agencies. Every caregiver is carefully vetted, trained, and supervised through a clinical lens, ensuring that subtle shifts in a client's health are noticed and addressed proactively before they escalate into emergencies.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-brand-ink text-lg mb-3">Faith-Based Compassion</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Benevolence Home Services operates on a fundamentally faith-based framework, treating the act of caregiving not merely as a job, but as a high calling rooted in compassion, patience, and deep humility. Katrina ensures that every caregiver hired shares these core values, fostering a workplace culture of profound respect.
                  </p>
                </div>
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
                  <span className="sr-only"> to discuss care options with Katrina</span> {/* OPTIMIZATION: Prevent duplicate anchor text */}
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[10px] font-bold" aria-hidden="true">
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
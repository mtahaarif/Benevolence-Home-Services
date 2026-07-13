import Image from "next/image";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";

export default function AboutOwnerPage() {
  return (
    <>
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
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <PageShell>
          {/* Main vertical layout centering wrapper */}
          <div className="mx-auto max-w-3xl flex flex-col items-center text-center space-y-8">
            
            {/* Owner Portrait - Size reduced exactly by 30% and centered */}
            <div className="relative w-[224px] h-[280px] sm:w-[280px] sm:h-[350px]">
              <Image
                src="/katrina.webp" 
                alt="Katrina Turman, Founder and Owner"
                fill
                className="object-cover rounded-[2rem] brand-shadow"
              />
            </div>

            {/* Owner Name & Title Header */}
            <div className="border-b border-slate-200 pb-4 w-full">
              <h2 className="font-display text-4xl font-semibold text-brand-ink sm:text-5xl">
                Katrina Turman
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
                Founder / Owner
              </p>
            </div>

            {/* Written Biography - Centered text block */}
            <div className="space-y-6 text-base leading-8 text-slate-700 sm:text-lg sm:leading-relaxed">
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

      {/* Call to Action Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20 bg-background/50 border-t border-slate-200/60">
        <PageShell>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              centered
              eyebrow="Ready to Connect?"
              title="Get in Touch Today"
              description="Connect with us today for reliable care and professional staffing solutions. Contact us now to explore how our expertise can support your healthcare goals effectively."
            />
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[#0c5a99]"
              >
                Contact Us Now
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
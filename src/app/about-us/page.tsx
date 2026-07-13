import Image from "next/image";
import { HeroSection, PageShell } from "@/components/site-shell";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Us"
        title="Home Care Services in Westchester, Illinois"
        description="We are dedicated to enhancing quality of life for seniors and individuals who need supportive care while maintaining independence and dignity in the comfort of their own homes."
        primaryAction={{ label: "Explore Services", href: "/services" }}
        secondaryAction={{ label: "Contact Us", href: "/contact-us" }}
        imageSrc="/nh-23102650536U12a54t.webp"
        imageAlt="Caregiver supporting a senior at home"
      />

      {/* Section 1: Who We Are (Fully Centered Text) */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <PageShell>
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
              Who We Are
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              Benevolence Home Services<br />Non-Medical, Nurse-Led Home Care Agency
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Benevolence Home Services is a trusted provider of compassionate, non-medical home care services based in Westchester, Illinois. We are dedicated to enhancing the quality of life for seniors and individuals who need supportive care while maintaining independence and dignity in the comfort of their own homes. 
              <br /><br />
              As a nurse-led home care agency, we bring clinical insight, oversight, and a deep commitment to quality into every aspect of care. Our services are thoughtfully designed to support daily living while providing families with confidence, peace of mind, and continuity of care.
            </p>
          </div>
        </PageShell>
      </section>

      {/* Section 2: Mission Statement (Image Left, Centered Text Right) */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16 bg-background/40">
        <PageShell>
          <div className="grid gap-10 items-center md:grid-cols-2">
            
            {/* Left Side: Strict Image Wrapper prevents collapsing */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
                <Image
                  src="/thumb-23706104744U61tse5.webp"
                  alt="We Are Committed"
                  fill
                  className="object-cover rounded-3xl brand-shadow" 
                />
              </div>
            </div>

            {/* Right Side: Centered Text Block */}
            <div className="flex flex-col items-center text-center space-y-4 mx-auto max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                WE ARE COMMITTED
              </p>
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
                Our Mission Statement
              </h2>
              <p className="text-base leading-8 text-slate-700">
                Our mission is to provide compassionate, high-quality non-medical home care that empowers individuals to live with dignity, independence, and comfort in their own homes. We are committed to building meaningful relationships, delivering personalized care, and supporting families through dependable, nurse-guided care services.
              </p>
            </div>

          </div>
        </PageShell>
      </section>

      {/* Section 3: Vision Statement (Centered Text Left, Image Right) */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <PageShell>
          <div className="grid gap-10 items-center md:grid-cols-2">
            
            {/* Left Side: Centered Text Block */}
            <div className="order-2 md:order-1 flex flex-col items-center text-center space-y-4 mx-auto max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                PRIORITIZING INDIVIDUALIZED SUPPORT
              </p>
              <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
                Our Vision Statement
              </h2>
              <p className="text-base leading-8 text-slate-700">
                Our vision is to set the standard for nurse-led home care by fostering trust, compassion, and excellence in every client relationship. We strive to positively impact lives by delivering consistent, individualized support that promotes well-being, safety, and independence at home.
              </p>
            </div>

            {/* Right Side: Strict Image Wrapper */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
                <Image
                  src="/thumb-22914111356U07ma39.webp"
                  alt="Prioritizing Individualized Support"
                  fill
                  className="object-cover rounded-3xl brand-shadow"
                />
              </div>
            </div>

          </div>
        </PageShell>
      </section>
    </>
  );
}
import Link from "next/link";
import {
  BulletPanel,
  CardGrid,
  HeroSection,
  InfoCard,
  PageShell,
  SectionHeading,
  SectionCard,
} from "@/components/site-shell";
import {
  carePillars,
  contactDetails,
  homeCareServices,
  homeHighlights,
  nurseLedBenefits,
  traditionalCare,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Purpose-Driven"
        title="Care Solutions"
        description="We provide compassionate, nurse-led home care that supports independence and dignity at home."
        primaryAction={{ label: "Find Out More", href: "/about-us" }}
        secondaryAction={{ label: "Contact Us", href: "/contact-us" }}
        // FIXED SYNTAX: standard JS comments only inside component props
        imageSrc={[
          "/1.webp",    // Image 1
          "/2.webp",    // Image 2 (Replace with your actual public path)
          "/3.webp"     // Image 3 (Replace with your actual public path)
        ]}
        imageAlt="Compassionate home care support"
      />

      {/* Section 1: Highlights Grid */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <PageShell>
          <SectionHeading
            centered // Automatically centers this specific heading
            eyebrow="How We Meet Your Needs"
            title="Offering a better choice for you"
            description="Offers a wide range of in-home care services designed to meet the unique needs of individuals and families."
          />
          <CardGrid className="mt-10">
            {homeHighlights.map((item) => (
              <InfoCard key={item.title} title={item.title} body={item.body} />
            ))}
          </CardGrid>
        </PageShell>
      </section>

      {/* Section 2: Comparison Bullet Panels */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12 bg-background/50">
        <PageShell>
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            <BulletPanel
              accent="Nurse-Led Home Care (Benevolence)"
              title="Clinical wisdom shapes every care plan"
              items={nurseLedBenefits}
            />
            <BulletPanel
              accent="Traditional Home Care"
              title="Why our model feels different"
              items={traditionalCare}
            />
          </div>
        </PageShell>
      </section>

      {/* Section 3: Care Pillars */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <PageShell>
          <SectionHeading
            centered // Automatically centers this specific heading
            eyebrow="What Makes Nurse-Led Home Care Different?"
            title="Care guided by clinical judgment and grounded in compassion"
            description="Our approach helps families move from uncertainty to clarity with thoughtful oversight, communication, and consistent support."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {carePillars.map((pillar) => (
              <SectionCard key={pillar.title} title={pillar.title}>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {pillar.body}
                </p>
              </SectionCard>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Section 4: Services Offered Grid */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16 bg-background/30">
        <PageShell>
          <SectionHeading
            centered // Automatically centers this specific heading
            eyebrow="Non-Medical Home Care Services We Provide"
            title="Practical support delivered with RN oversight"
            description="Every service below is paired with the same commitment to dignity, consistency, and safety."
          />
          <CardGrid className="mt-10 md:grid-cols-2 xl:grid-cols-4">
            {homeCareServices.map((service) => (
              <InfoCard key={service.title} title={service.title} body={service.body} accent="Service" />
            ))}
          </CardGrid>
        </PageShell>
      </section>

      {/* Section 5: Bottom CTA Cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20 mb-4">
        <PageShell>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-stretch">
            
            {/* Card Left */}
            <SectionCard title="Faith in Action Through Care">
              <p className="text-slate-700 leading-relaxed text-base mt-2">
                Benevolence Home Services cares with compassion, dignity, and purpose while honoring the calling to serve families well.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link 
                  href="/services" 
                  className="bg-brand-blue hover:bg-brand-blue/90 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition rounded-sm"
                >
                  View Services
                </Link>
                <Link 
                  href="/contact-us" 
                  className="bg-brand-orange/10 hover:bg-brand-orange/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-brand-ink transition rounded-sm"
                >
                  Start a Conversation
                </Link>
              </div>
            </SectionCard>
            
            {/* Card Right */}
            <SectionCard title="Helping Families Navigate Care Options">
              <p className="text-slate-700 leading-relaxed text-base mt-2">
                We listen first, explain clearly, and help each family understand the best next step for their loved one.
              </p>
            </SectionCard>

          </div>
        </PageShell>
      </section>
    </>
  );
}
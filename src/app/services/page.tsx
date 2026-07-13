import Link from "next/link";
import { CardGrid, HeroSection, InfoCard, PageShell, SectionHeading } from "@/components/site-shell";
import { homeCareServices } from "@/data/site-content";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        title="We offer the following services"
        description="At Benevolence Home Services, we provide compassionate, non-medical home care services in Westchester, Illinois with nurse-led oversight and a commitment to excellence in home-based care."
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "Payment", href: "/payment" }}
        imageSrc="/nh-2172642748U38tie9.webp"
        imageAlt="Two elders and a caregiver smiling"
      />

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <PageShell>
          <SectionHeading
            eyebrow="Home Maker In DuPage County, Illinois"
            title="Support built around daily living, dignity, and independence"
            description="Every service is intentionally chosen to help clients stay safe, comfortable, and well supported at home."
          />
          <CardGrid className="mt-8 xl:grid-cols-4">
            {homeCareServices.map((service) => (
              <InfoCard key={service.title} title={service.title} body={service.body} accent="Service" />
            ))}
          </CardGrid>

          <div className="mt-8 brand-shadow bg-[color:var(--brand-blue)] p-8 text-white">
            <h3 className="font-display text-3xl font-semibold">Need help choosing the right level of care?</h3>
            <p className="mt-4 max-w-3xl text-white/90">
              Our team can talk through daily routines, family expectations, and service goals before care begins.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about-us" className="bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
                About Us
              </Link>
              <Link href="/contact-us" className="bg-[rgba(255,255,255,0.14)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Contact
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}

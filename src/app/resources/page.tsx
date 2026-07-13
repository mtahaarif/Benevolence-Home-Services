import Link from "next/link";
import { CardGrid, HeroSection, InfoCard, PageShell, SectionCard, SectionHeading } from "@/components/site-shell";
import {  resources } from "@/data/site-content";

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Resources"
        title="Helpful organizations for families and care professionals"
        description="We keep a curated set of public health and home-care links available for families who want to continue learning."
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "Services", href: "/services" }}
        imageSrc= "/nh-23119104148Uam2713.webp"
        imageAlt="Happy elderly couple"
      />

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <PageShell>
          <SectionHeading
            eyebrow="Resources"
            title="Trusted references"
            description="These organizations offer additional information about public health, home care, and workforce guidance."
          />
          <CardGrid className="mt-8 xl:grid-cols-2">
            {resources.map((resource) => (
              <InfoCard key={resource.label} title={resource.label} body={resource.href} accent="External Link" />
            ))}
          </CardGrid>

          <SectionCard title="Continue exploring">
            <p>
              If you need help understanding how these resources apply to your situation, contact our team and we will walk through it with you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="bg-[color:var(--brand-blue)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Contact Us
              </Link>
              <Link href="/about-us" className="bg-[rgba(245,170,65,0.12)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
                About Us
              </Link>
            </div>
          </SectionCard>
        </PageShell>
      </section>
    </>
  );
}

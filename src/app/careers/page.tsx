import { HeroSection, PageShell, SectionCard, SectionHeading } from "@/components/site-shell";

const points = [
  "Supportive, nurse-led leadership",
  "Consistent, client-focused care assignments",
  "Ongoing guidance and professional support",
  "A culture rooted in compassion, respect, and integrity",
] as const;

export default function CareersPage() {
  return (
    <>
      <HeroSection
        eyebrow="Careers"
        title="Build a meaningful career in home care"
        description="At Benevolence Home Services, we believe compassionate care starts with dedicated professionals who want to make a difference in the homes they serve."
        primaryAction={{ label: "Contact Us", href: "/contact-us" }}
        secondaryAction={{ label: "Learn More", href: "/about-us" }}
        imageSrc="/nh-1637163589-1.webp"
        imageAlt="Group of caregivers standing together"
      />

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <PageShell>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="A steady, respectful place to grow your care career"
            description="Every team member plays a vital role in enhancing independence, dignity, and quality of life for those we serve."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <SectionCard title="What you can expect">
              <ul className="space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-[color:var(--brand-orange)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title="Application note">
              <p>
                If you are interested in joining our home care team, please complete the application form on the contact page. A member of our team will contact you regarding next steps.
              </p>
              <p className="mt-4">
                Benevolence Home Services is a non-medical home care provider and does not offer staffing or placement services.
              </p>
            </SectionCard>
          </div>
        </PageShell>
      </section>
    </>
  );
}

import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import { contactDetails } from "@/data/site-content";

export default function ContactUsPage() {
  return (
    <>
      <HeroSection
        eyebrow=""
        title="Contact Us"
        description="Home Care Information in Westchester, Illinois"
        primaryAction={{ label: "Book a Free Consultation", href: contactDetails.calendly }}
        secondaryAction={{ label: "Call Now", href: contactDetails.phoneHref }}
        imageSrc="/nh-2412692819U06281e.webp"
        imageAlt="Caregiver and elderly woman looking at a tablet"
      />

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <PageShell>
          {/* Heading Section */}
          <SectionHeading
            centered
            eyebrow="Reach Out to Us"
            title="Send us a message"
            description="We’re here to support you and your loved ones with compassionate, reliable home care services. Whether you have questions about our services, would like to schedule a consultation, or need assistance determining the right care options, our team is ready to help. Please complete the form below, and a member of our team will contact you promptly to discuss your home care needs."
          />

          {/* Form Section */}
          <div className="mt-12 flex justify-center">
            <ContactForm />
          </div>

        {/* Google Maps Location Widget */}
        <div className="mt-16 w-full max-w-4xl mx-auto h-[400px] sm:h-[500px] overflow-hidden rounded-[2rem] brand-shadow border border-slate-200">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.331264879201!2d-87.898614!3d41.8424501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4bba3c0aab93%3A0xbef4791468d0fdbf!2sHQ+Westbrook+Corporate+Center!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HQ Westbrook Corporate Center Location - Westchester, IL"
            className="grayscale-[10%] contrast-[1.05] opacity-95 transition duration-300 hover:grayscale-0 hover:opacity-100"
        />
        </div>

        </PageShell>
      </section>
    </>
  );
}
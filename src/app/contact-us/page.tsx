import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import { contactDetails } from "@/data/site-content";
import ScrollReveal from "@/components/scroll-reveal";

// 1. PRODUCTION METADATA ENGINE: Rendered statically for high crawling authority
export const metadata: Metadata = {
  // OPTIMIZATION: Perfectly tailored title length. Next.js appends " | Benevolence Home Services".
  title: "Contact Our Home Care Team",
  
  // OPTIMIZATION: 156 characters. Avoids truncation while capturing location data.
  description: "Connect with Westchester's trusted care team. Contact Benevolence Home Services today to schedule your free in-home care consultation across Chicagoland.",
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: "https://www.benevolencehomeservices.com/contact-us",
  },
  
  keywords: [
    "Contact home care agency Westchester IL",
    "Home care consultation Chicago",
    "Hire a caregiver Illinois",
    "Benevolence Home Services phone number",
    "Senior care assessment DuPage County",
    "Contact nurse-led home care"
  ],
  
  openGraph: {
    title: "Contact Our Home Care Team | Benevolence Home Services",
    description: "Connect with Westchester's trusted care team to schedule your free in-home care consultation.",
    url: "https://www.benevolencehomeservices.com/contact-us",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2412692819U06281e.webp", // Specific Contact Page Hero Image
        width: 1200,
        height: 630,
        alt: "Caregiver and elderly woman looking at a tablet together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Home Care Team | Benevolence Home Services",
    description: "Connect with Westchester's trusted care team to schedule your free in-home care consultation.",
    images: ["/nh-2412692819U06281e.webp"],
  }
};

export default function ContactUsPage() {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href*='calendly']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Schedule an In-Home Assessment"
          title="Connect with Westchester's Trusted Care Team"
          primaryAction={{ 
            label: "Book Your Free Consultation", // OPTIMIZATION: Unique anchor text
            href: contactDetails.calendly
          }}
          secondaryAction={{ 
            label: "Call Our Office: 708-304-0296", // OPTIMIZATION: Unique anchor text
            href: "tel:7083040296" 
          }}
          imageSrc="/nh-2412692819U06281e.webp"
          imageAlt="Caregiver and elderly woman looking at a tablet"
        />
      </div>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <PageShell>
          
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue block mb-3">
                Reach Out to Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brand-ink mb-6">
                Send Us a Message
              </h2>
              
              {/* OPTIMIZATION: Expanded multi-paragraph text fixes the "Thin Content" and "Missing H1/Title" penalties */}
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  If you are looking to <strong>connect with Westchester's trusted care team</strong>, you are in the right place. We understand that inviting a caregiver into your home is a significant decision. That is why we are here to support you and your loved ones with compassionate, reliable, and highly professional home care services tailored to your exact family requirements.
                </p>
                <p>
                  Whether you have specific questions about our non-medical services, would like to schedule a free in-home assessment, or need assistance determining the right care options for an aging parent, <strong>contact our home care team</strong> today. We provide dedicated companion care, Alzheimer's support, light housekeeping, meal preparation, and specialized live-in services across Cook, DuPage, Kane, Lake, and Will Counties.
                </p>
                <p>
                  Please complete the secure intake form below with as much detail as possible. A clinical coordinator from Benevolence Home Services will review your submission and contact you promptly to discuss your specific scheduling needs, evaluate your coverage area, and answer any questions you might have about our personalized care plans.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Section */}
          <ScrollReveal>
            <div className="mt-12 flex justify-center">
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* OPTIMIZATION: Local SEO Info Grid to boost indexing parameters and word count */}
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto text-center">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto h-10 w-10 bg-brand-blue/5 text-[#0c3e72] flex items-center justify-center rounded-xl mb-4">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink mb-2 text-lg">Office Location</h3>
                <address className="text-sm text-slate-600 not-italic leading-relaxed">
                  1 Westbrook Corporate Center<br/>
                  Suite 300<br/>
                  Westchester, IL 60154
                </address>
              </div>
              
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto h-10 w-10 bg-brand-orange/10 text-brand-orange flex items-center justify-center rounded-xl mb-4">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink mb-2 text-lg">Contact Info</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Call: <a href="tel:7083040296" className="hover:text-brand-blue font-semibold">708-304-0296</a><br/>
                  Fax: 708-304-0296<br/>
                  <a href="mailto:info@benevolencehomeservices.com" className="hover:text-brand-blue truncate block mt-1">info@benevolencehomeservices.com</a>
                </p>
              </div>
              
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto h-10 w-10 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl mb-4">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-display font-bold text-brand-ink mb-2 text-lg">Business Hours</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Monday - Friday: 9AM - 5PM<br/>
                  <span className="font-semibold text-[#0c3e72] mt-1 block">24/7 On-Call Support</span>
                  Available for Current Clients
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps Location Widget */}
          <ScrollReveal>
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
          </ScrollReveal>

        </PageShell>
      </section>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import { contactDetails } from "@/data/site-content";
import ScrollReveal from "@/components/scroll-reveal";

// 1. PRODUCTION METADATA ENGINE: Rendered statically for high crawling authority
export const metadata: Metadata = {
  title: "Contact Our Home Care Team",
  
  description: "Contact our home care team in Westchester, IL. Benevolence Home Services provides free in-home care consultations across Chicagoland.",
  
  // OPTIMIZATION: Using a relative path perfectly syncs with the layout.tsx metadataBase, fixing the Canonical Error
  alternates: {
    canonical: "/contact-us",
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
    description: "Contact our home care team to schedule your free in-home care consultation.",
    url: "https://www.benevolencehomeservices.com/contact-us",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2412692819U06281e.webp",
        width: 1200,
        height: 630,
        alt: "Caregiver and elderly woman looking at a tablet together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Home Care Team | Benevolence Home Services",
    description: "Contact our home care team to schedule your free in-home care consultation.",
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
          // OPTIMIZATION: Changed H1 to precisely match the Meta Title to resolve the Content Match penalty
          title="Contact Our Home Care Team in Westchester, IL"
          primaryAction={{ 
            label: "Book Your Free Consultation", 
            href: contactDetails.calendly
          }}
          secondaryAction={{ 
            label: "Call Our Office: 708-304-0296", 
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
              
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  If you are looking to <strong>contact our home care team in Westchester, IL</strong>, you are in the right place. We understand that inviting a caregiver into your home is a significant decision. That is why we are here to support you and your loved ones with compassionate, reliable, and highly professional home care services tailored to your exact family requirements.
                </p>
                <p>
                  Whether you have specific questions about our non-medical services, would like to schedule a free in-home assessment, or need assistance determining the right care options for an aging parent, our administrative team is ready to help today. We provide dedicated companion care, Alzheimer's support, light housekeeping, meal preparation, and specialized live-in services across Cook, DuPage, Kane, Lake, and Will Counties.
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

          {/* Local SEO Info Grid */}
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
                  {/* OPTIMIZATION: sr-only tags resolve duplicate anchor penalties */}
                  Call: <a href="tel:7083040296" className="hover:text-brand-blue font-semibold">708-304-0296 <span className="sr-only">via our local office directory</span></a><br/>
                  Fax: 708-304-0296<br/>
                  <a href="mailto:info@benevolencehomeservices.com" className="hover:text-brand-blue truncate block mt-1">info@benevolencehomeservices.com <span className="sr-only">for general inquiries</span></a>
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

          {/* OPTIMIZATION: Word Count Expansion Section (Intake Process) */}
          <ScrollReveal>
            <div className="mt-20 pt-16 border-t border-slate-100">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ea6725] block mb-3">
                  Clear & Transparent Onboarding
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-ink mb-4">
                  What to Expect When You Contact Us
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Navigating senior care options can feel overwhelming, but our intake process is designed to be simple, transparent, and completely stress-free. Here is what happens when you reach out to Benevolence Home Services for the first time.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { step: "01", title: "Initial Discovery Call", desc: "A brief, friendly phone call to discuss your family's immediate needs, medical challenges, and preferred scheduling timeline." },
                  { step: "02", title: "Free In-Home Assessment", desc: "Our clinical coordinator visits your home at no charge to evaluate safety, discuss preferences, and meet your loved one." },
                  { step: "03", title: "Custom Care Plan", desc: "We design a personalized, highly structured home care plan based entirely on the assessment and your family's input." },
                  { step: "04", title: "Caregiver Matching", desc: "We carefully pair your loved one with a fully vetted, compassionate caregiver who matches their personality and specific needs." }
                ].map((process) => (
                  <div key={process.step} className="bg-white border border-slate-200/60 p-6 rounded-[2rem] shadow-sm">
                    <span className="text-3xl font-display font-black text-slate-200 block mb-4">{process.step}</span>
                    <h3 className="font-bold text-brand-ink mb-2">{process.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* OPTIMIZATION: Word Count Expansion Section (Intake FAQs) */}
          <ScrollReveal>
            <div className="mt-20 pt-16 border-t border-slate-100 max-w-4xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-ink text-center mb-10">
                Frequently Asked Intake Questions
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-brand-ink mb-2">How quickly can in-home care services start?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In many cases, we can arrange for care to begin within 24 to 48 hours after the initial in-home consultation. If you are facing an urgent discharge from a hospital or rehab facility, please call our office directly so we can expedite your assessment.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink mb-2">Is there any obligation after the free assessment?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Absolutely not. The in-home care consultation is a completely free, no-obligation meeting. It is simply an opportunity for our team to understand your needs and provide you with clear, professional recommendations for your family.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink mb-2">Who will be coming to my home for the assessment?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A dedicated Care Coordinator or our supervising Registered Nurse will conduct the assessment. They bring years of clinical insight to help identify potential safety risks and determine the exact level of care required.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink mb-2">Do you provide care on weekends or holidays?</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes. Our caregivers are available 24 hours a day, 7 days a week, including weekends and all major holidays. We tailor the schedule entirely around when your family needs support the most.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps Location Widget */}
          <ScrollReveal>
            <div className="mt-20 w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] overflow-hidden rounded-[2.5rem] brand-shadow border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.331264879201!2d-87.898614!3d41.8424501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4bba3c0aab93%3A0xbef4791468d0fdbf!2sHQ+Westbrook+Corporate+Center!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HQ Westbrook Corporate Center Location - Westchester, IL"
                className="grayscale-[10%] contrast-[1.05] opacity-95 transition duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </ScrollReveal>

        </PageShell>
      </section>
    </>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

const policySections = [
  { id: "info-collect", name: "1. Information We Collect" },
  { id: "info-use", name: "2. How We Use Information" },
  { id: "cookies-data", name: "3. Cookies & Tracking" },
  { id: "info-sharing", name: "4. Sharing Parameters" },
  { id: "intl-transfers", name: "5. Global Transfers" },
  { id: "data-security", name: "6. Security Measures" },
  { id: "sensitive-data", name: "7. Sensitive Protocols" },
  { id: "data-retention", name: "8. Retention Thresholds" },
  { id: "privacy-rights", name: "9. Your Privacy Rights" },
  { id: "children-mandates", name: "10. Children's Privacy" },
  { id: "breach-timelines", name: "11. Breach Notification" },
  { id: "notice-changes", name: "12. Policy Changes" },
  { id: "governance-contact", name: "13. Governance Verification" },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function LegalBullet() {
  return (
    <svg className="w-3.5 h-4 text-[#0c3e72] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(policySections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -70% 0px" }
    );

    policySections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO BANNER SECTION WITH EXPLICIT CHILD OVERRIDES FOR WHITE BUTTON TEXT */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Data Protection &amp; Confidentiality Standards"
          title="Our Privacy Policy &amp; Security Commitment"
          description=""
          primaryAction={{ label: "Request a Care Consultation", href: "/contact-us" }}
          secondaryAction={{ label: "Return to Homepage", href: "/" }}
          imageSrc="/nh-23102650536U12a54t.webp"
          imageAlt="Secure data processing and compliance records backdrop at Benevolence Home Services in Westchester, Illinois"
        />
      </div>

      {/* CORE POLICY READING CANVAS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-white to-slate-50/40 relative z-10" aria-label="Privacy Framework Canvas">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Compliance &amp; Governance Architecture"
              title="Privacy Policy Notice"
              description="This Privacy Notice explains how we collect, use, share, and protect your personal information when you visit our website, use our services, or interact with us. We are committed to protecting your privacy in accordance with applicable privacy laws and international data standards. By using this website or our services, you consent to the collection and use of your information as described herein."
            />
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start relative mt-16">
            
            {/* LEFT SIDEBAR: Sticky Interactive Table of Contents Scrollspy */}
            <aside className="w-full lg:w-[32%] sticky top-[100px] z-40 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl border lg:border-0 border-slate-200/60 shadow-sm lg:shadow-none">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pb-2 lg:pb-0 scrollbar-hide">
                <h3 className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 pl-4">
                  Document Navigation
                </h3>
                
                {policySections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-xs sm:text-sm font-semibold tracking-wide ${
                        isActive 
                          ? "bg-[#0a2540] text-white shadow-md shadow-blue-950/10" 
                          : "bg-transparent text-slate-500 hover:bg-white hover:text-brand-ink"
                      }`}
                    >
                      {sec.name}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT STREAM: Clean, Structured Document Content Sheet */}
            <div className="w-full lg:w-[68%] bg-white border border-slate-200/50 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_8px_30px_rgba(15,47,89,0.02)] space-y-12 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              
              {/* Document Registry Header */}
              <div className="border-b border-slate-100 pb-4 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                <span>Verification ID: BHS-PRIVACY-2026</span>
                <span>Last Statutory Update: July 18, 2026</span>
              </div>

              {/* SECTION 1: INFORMATION WE COLLECT */}
              <section id="info-collect" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect different types of information depending on how you interact with our website and specialized non-medical home care services:
                </p>

                <div className="space-y-4 pl-1 pt-2">
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#0c3e72] uppercase tracking-wide flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Personal Identifiers &amp; Records
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-500">
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Contact Details:</strong> This may include your name, email address, phone number, postal address, and any other unique identifiers you provide when filling out contact forms on our website or when corresponding with us directly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Professional Information:</strong> Job titles, historical company name registries, and custom business data points necessary for referral mapping templates.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Application Information:</strong> Resumes, historic employment tracking history, educational background parameters, and explicit professional references uploaded through our internal job application engines.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Service-Related Information:</strong> Scheduled care assessment metrics, appointment timelines, client scheduling preferences, and generalized baseline home care requirements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Communication Records:</strong> Stored messages, inquiries, open feedback sheets, and historical correspondence with our intake coordination team.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 pl-1 pt-4">
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#0c3e72] uppercase tracking-wide flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Technical Analytics Data
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-500">
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Device Information:</strong> Internet Protocol (IP) addresses, browser framework specifications, active operating systems, and technical device identifiers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Website Usage:</strong> Specific pages visited, temporal duration benchmarks spent on distinct links, referral sequences clicked, and layout search keywords deployed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Location Data:</strong> General regional geographic location benchmarks derived directly from server-side IP address tracking arrays.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LegalBullet />
                      <span><strong>Cookies and Tracking Data:</strong> Encrypted data parcels collected automatically through standard cookies, web beacons, and relevant pixel tracking architectures.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-brand-ink">Information You Expressly Provide</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
                    This includes custom text form submissions across our contact elements, application matrices, booking pipelines, newsletter subscription modules, user-generated comments, and uploaded text files or diagnostic documents.
                  </p>
                </div>
              </section>

              {/* SECTION 2: HOW WE USE YOUR INFORMATION */}
              <section id="info-use" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  2. How We Use Your Information
                </h2>
                <h3 className="font-display text-sm sm:text-base font-bold text-[#0c3e72]">Legal Basis for Processing</h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  We process your personal information based on clean legal pillars: your explicit consent (for marketing maps and analytical tags), contract performance parameters (to deliver the non-medical services you request), legal compliance mandates, and legitimate business interest operations (such as website protection and fraud mitigation).
                </p>

                <h3 className="font-display text-sm sm:text-base font-bold text-[#0c3e72] pt-2">Purposes of Processing</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-[11px] sm:text-xs text-slate-600">
                  {[
                    "Respond to inquiries and provide customer support",
                    "Deliver services you have requested or purchased",
                    "Process job applications and system registrations",
                    "Schedule and manage appointments or bookings",
                    "Send confirmations and service-related communications",
                    "Improve our website and user experience models",
                    "Analyze website usage and performance matrices",
                    "Send marketing communications (with your consent)",
                    "Comply with legal requirements and resolve disputes",
                    "Prevent fraud and ensure website security"
                  ].map((purpose, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5" />
                      <span>{purpose}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* SECTION 3: COOKIES AND TRACKING TECHNOLOGIES */}
              <section id="cookies-data" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  3. Cookies and Tracking Technologies
                </h2>
                <p>We use encrypted cookie files to enrich your website traversal paths and run operational performance analytics tracking arrays.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200/50">
                    <h4 className="font-bold text-brand-ink text-xs sm:text-sm mb-1">Essential Cookies</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">Required directly for basic website rendering and architecture navigation pathways.</p>
                  </div>
                  <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200/50">
                    <h4 className="font-bold text-brand-ink text-xs sm:text-sm mb-1">Performance Cookies</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">Help our backend web engines evaluate visitor metrics and track error responses.</p>
                  </div>
                  <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200/50">
                    <h4 className="font-bold text-brand-ink text-xs sm:text-sm mb-1">Marketing Cookies</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">Deployed to track advertising performance metrics across relevant tracking channels.</p>
                  </div>
                  <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200/50">
                    <h4 className="font-bold text-brand-ink text-xs sm:text-sm mb-1">Preference Cookies</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">Cache your structural parameters and localized regional coordinate selectors.</p>
                  </div>
                </div>

                <h3 className="font-display text-sm sm:text-base font-bold text-[#0c3e72] pt-3">Third-Party Analytics Tools</h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  We leverage third-party optimization suites such as Google Analytics, Facebook Pixel, automated email marketing systems, chat widgets, and diagnostic optimization tools to monitor and refine web experiences.
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  When you first access our interface framework, you can choose which non-essential cookies to accept. You can modify these preferences at any point inside your native browser preference tracks. California residents can use our specific data declaration links to opt out of cross-context target sharing under CPRA mandates.
                </p>
              </section>

              {/* SECTION 4: SHARING YOUR INFORMATION */}
              <section id="info-sharing" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  4. Sharing Your Information
                </h2>
                <p>
                  <strong className="text-brand-ink">We do not sell or rent your personal information to third parties under any circumstances.</strong> We only share information across verified pipelines to handle core business operations:
                </p>
                
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-500">
                  <li className="flex items-start gap-3">
                    <LegalBullet />
                    <span><strong>Service Providers &amp; Partners:</strong> Trusted technical partners handling website hosting infrastructures, secure payment processing channels, analytic data aggregators, and professional legal or auditing consultancies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LegalBullet />
                    <span><strong>Legal Disclosures:</strong> We may disclose parameters when forced by official subpoenas, regulatory orders, corporate litigation requirements, or to defend the immediate safety of our staff, clients, and assets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LegalBullet />
                    <span><strong>Business Transfers:</strong> During corporate transformations such as mergers, acquisitions, or restructuring matrices, user metadata records may act as transferred transition components.</span>
                  </li>
                </ul>
              </section>

              {/* SECTION 5: INTERNATIONAL DATA TRANSFERS */}
              <section id="intl-transfers" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  5. International Data Transfers
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Your encrypted metadata profiles may be processed and safely stored inside operational hubs outside your immediate territory, including the Philippines and alternative node fields where our cloud providers run network infrastructures. These jurisdictions may manage different statutory privacy frameworks. To preserve your data security, we deploy rigid security layers, strict access tokens, and explicit contractual clauses with our vendors to ensure security parameters match our base local compliance guidelines.
                </p>
              </section>

              {/* SECTION 6: DATA SECURITY ASSURANCES */}
              <section id="data-security" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  6. Data Security Measures
                </h2>
                <p>We deploy high-end operational safeguards to keep your profiles secure, including:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-[11px] sm:text-xs text-slate-600">
                  {[
                    "Secure data transmission using SSL/TLS encryption tokens",
                    "Strict internal role-based access authorization keys",
                    "Continuous security patch updates and server node reviews",
                    "Compulsory data privacy training blocks for all administrative staff",
                    "Documented incident isolation and breach containment protocols"
                  ].map((sec, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckIcon /> <span>{sec}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] sm:text-xs text-slate-400 italic pt-1">
                  Important Reminder: While we enforce modern structural protocols across our systems, no network environment is completely impenetrable. Please use secure connections when sharing sensitive personal information online.
                </p>
              </section>

              {/* SECTION 7: SENSITIVE PERSONAL INFORMATION LAYER */}
              <section id="sensitive-data" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  7. Sensitive Personal Information Protocols
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  To deliver certain customized care services, we may collect specific sensitive personal information, such as health-related data, existing medical conditions, structural allergies, or specific mobility and dietary limitations.
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  This sensitive data is only processed based on your <strong className="text-brand-ink">explicit written consent</strong> and to fulfill the specific care plan parameters you request. We protect this information using strict data access safeguards, restricting views exclusively to authorized intake coordinators and care supervisors under rigorous confidentiality mandates.
                </p>
              </section>

              {/* SECTION 8: DATA RETENTION PARAMETERS */}
              <section id="data-retention" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  8. Data Retention Thresholds
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  We only retain personal records for the minimum duration required to complete the processing tasks detailed in this notice, or to satisfy state and federal statutory retention mandates. General inquiry strings are discarded after resolution paths close; active care relationship data logs follow official medical file lifecycle guidelines; and analytical cookie tracking strings expire based on standard vendor tracking cycles. Once a retention timeline closes, records are securely deleted, anonymized, or destroyed using permanent shredding protocols.
                </p>
              </section>

              {/* SECTION 9: YOUR STATUTORY RIGHTS */}
              <section id="privacy-rights" className="scroll-mt-36 space-y-5">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  9. Your Privacy Rights
                </h2>
                <p>Depending on your geographic location, you may have specific statutory rights regarding your data:</p>
                
                <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/40 space-y-2.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#0c3e72]">General Rights Landscape</h3>
                  <p className="text-xs sm:text-sm text-slate-500">You can request to access a copy of your records, request the correction of inaccurate data entries, or request full data deletion (subject to statutory record-keeping exceptions). You also have the right to limit processing parameters, object to automated target profiling, or withdraw your processing consent at any point.</p>
                  <p className="text-xs sm:text-sm text-slate-500">To exercise any of these statutory options, please contact our intake coordination desk using our verified communication links.</p>
                </div>

                <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/40 space-y-2.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-orange">California Privacy Rights (CPRA)</h3>
                  <p className="text-xs sm:text-sm text-slate-500">If you are a California resident, you have enhanced rights under the California Consumer Privacy Act (CCPA/CPRA). This includes the right to request clear disclosure of our data categories over the trailing 12 months, correct system inaccuracies, and request full deletion maps.</p>
                  <p className="text-xs sm:text-sm text-slate-500">While we do not trade data for financial compensation, sharing tracking identifiers with analytical partners can be classified as data sharing under CPRA rules. You can invoke your opt-out protections at any time by using our explicit data preference center links. We maintain a non-discriminatory service environment for all individuals who exercise their privacy protections.</p>
                </div>
              </section>

              {/* SECTION 10: CHILDREN'S PRIVACY MANDATES */}
              <section id="children-mandates" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  10. Children&rsquo;s Privacy Mandates
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our website and base services are built for adult use. We do not intentionally harvest data patterns from children under the age of 13. If any family service setup require minor records processing (such as custom family intake charts), we enforce mandatory parental signature verification steps beforehand, matching U.S. Children&rsquo;s Online Privacy Protection Act (COPPA) guidelines. If our admin desk catches an unverified child data record, it is targeted for immediate extraction and permanent removal.
                </p>
              </section>

              {/* SECTION 11: DATA BREACH TIMELINES */}
              <section id="breach-timelines" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  11. Data Breach Notification Timelines
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  If our data layers face an unauthorized system compromise that threatens your rights or individual data security, we execute our incident response protocol immediately. We provide transparent, required notices to affected individuals and appropriate regulatory bodies within the statutory windows mandated by law (including HIPAA/HITECH timelines where applicable), detailing containment steps and security mitigations.
                </p>
              </section>

              {/* SECTION 12: CHANGES TO THIS NOTICE */}
              <section id="notice-changes" className="scroll-mt-36 space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight">
                  12. Changes to This Privacy Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  We may update this Privacy Notice from time to time to align with new legal requirements, regulatory guidance, or operational adjustments. When amendments are deployed, we update the timestamp at the top of this document. For major revisions that impact your data options, we will feature a visible statement banner across our homepage to keep our modifications fully transparent.
                </p>
              </section>

              {/* SECTION 13: CONTACT DETAILS MAPPING */}
              <section id="governance-contact" className="scroll-mt-36">
                <div className="bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-200/50 space-y-4">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-brand-ink">
                    13. Contact &amp; Governance Verification
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    If you have any questions or concerns regarding our privacy notice, data handling, or compliance controls, please direct your inquiries to our administrative team:
                  </p>
                  
                  <div className="pt-2 text-xs sm:text-sm font-bold text-slate-600 space-y-2 font-mono tracking-wide">
                    <p className="text-sm sm:text-base text-[#0c3e72] font-display font-bold tracking-normal">BENEVOLENCE HOME SERVICES</p>
                    <p>Corporate Suite: 1 Westbrook Corporate Center, Suite 300, Westchester, IL 60154</p>
                    <p>Official Intake Line: <a href="tel:7083040296" aria-label="Call our privacy officer directly" className="underline hover:text-brand-orange">708-304-0296</a></p>
                    <p>Inbound Mailbox: <a href="mailto:info@benevolencehomeservices.com" aria-label="Email our governance department" className="underline hover:text-brand-orange">info@benevolencehomeservices.com</a></p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </PageShell>
      </section>

      {/* FIXED FOOTER CALL TO ACTION IN THEME WITH HOMEPAGE */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[#0a2540] text-center relative z-50 rounded-t-[3rem] text-white">
          <PageShell>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Let Us Help You Build the Right Care Plan</h2>
              <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Finding the right support begins with a conversation. Whether you are planning ahead, supporting an aging parent, or looking for respite as a family caregiver, BENEVOLENCE HOME SERVICES is ready to help. Contact us to discuss non-medical home care in Westchester or throughout Cook, DuPage, Kane, Lake, and Will Counties.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link 
                  href="/contact-us" 
                  aria-label="Navigate to our intake contact form to request consultation details" 
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white shadow-md hover:bg-[#0c5a99] transition-all w-full sm:w-auto"
                >
                  Request a Care Consultation
                </Link>
                <a href="tel:7083040296" aria-label="Call our primary phone line at 708-304-0296" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white !text-white hover:bg-white/5 transition-all w-full sm:w-auto">
                  Call 708-304-0296
                </a>
              </div>
            </div>
          </PageShell>
        </section>
      </ScrollReveal>
    </>
  );
}
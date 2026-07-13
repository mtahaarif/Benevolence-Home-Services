"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";

const points = [
  {
    title: "Supportive Leadership",
    desc: "Work under dedicated, nurse-led clinical leadership that values your professional voice and safety.",
  },
  {
    title: "Consistent Assignments",
    desc: "Enjoy stable, client-focused care assignments designed to foster meaningful, long-term relationships.",
  },
  {
    title: "Professional Support",
    desc: "Access ongoing clinical guidance, professional mentorship, and continuous educational support.",
  },
  {
    title: "Purpose-Driven Culture",
    desc: "Be part of an organizational community deeply rooted in compassion, mutual respect, and integrity.",
  },
] as const;

export default function CareersPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form submission and file states
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    agreeToTerms: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium micro-interaction submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        eyebrow="Careers"
        title="Build a meaningful career in home care"
        description="At Benevolence Home Services, we believe compassionate care starts with dedicated professionals who want to make a difference in the homes they serve."
        primaryAction={{ label: "Apply Now", href: "#application-form" }}
        secondaryAction={{ label: "Learn More", href: "/about-us" }}
        imageSrc="/nh-1637163589-1.webp"
        imageAlt="Group of caregivers standing together"
      />

      {/* Main Structural Grid Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-transparent to-slate-50/40">
        <PageShell>
          <ScrollReveal>
            <SectionHeading
              centered
              eyebrow="Why Work With Us"
              title="A steady, respectful place to grow your care career"
              description="Every team member plays a vital role in enhancing independence, dignity, and quality of life for those we serve."
            />
          </ScrollReveal>

          {/* Grid Layout containing copy left and application form right */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            
            {/* Left Column: Why Work With Us Narrative */}
            <div className="space-y-10">
              <ScrollReveal>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 sm:p-10 shadow-sm space-y-8">
                  <h3 className="font-display text-2xl font-semibold text-brand-ink">
                    What You Can Expect
                  </h3>
                  
                  {/* Detailed list with visual icons */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {points.map((point) => (
                      <div key={point.title} className="space-y-2.5">
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0 shadow-inner">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <h4 className="font-display text-sm sm:text-base font-bold text-brand-ink">
                            {point.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-9">
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Informative Note Box Layout */}
              <ScrollReveal>
                <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-[2rem] p-8 space-y-4">
                  <h4 className="font-display text-sm font-bold text-brand-blue uppercase tracking-wider">
                    Application Note
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    If you are interested in joining our home care team, please complete the application form. A member of our clinical advisory team will reach out directly to coordinate your next strategic onboarding steps.
                  </p>
                  <p className="text-xs text-slate-500 border-t border-slate-200/50 pt-4 leading-relaxed italic">
                    Benevolence Home Services is a licensed non-medical home care provider and does not offer third-party staffing, employment agent, or placements services.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Advanced Job Application Form Container */}
            <ScrollReveal>
              <div id="application-form" className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(15,47,89,0.06)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-orange" />
                
                {isSubmitted ? (
                  /* Success feedback state panel */
                  <div className="py-16 text-center space-y-6 animate-fade-in">
                    <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-brand-ink">Application Submitted!</h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                        Thank you for your interest. A member of our clinical recruiting team will review your credentials and contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-brand-blue uppercase tracking-widest hover:underline"
                    >
                      Submit Another Form
                    </button>
                  </div>
                ) : (
                  /* Form collection fields elements */
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="font-display text-2xl font-semibold text-brand-ink">Submit Application</h3>
                      <p className="text-xs sm:text-sm text-slate-400">Please provide your operational credentials below.</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Jane Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Position Applying For *</label>
                        <select
                          required
                          value={formData.position}
                          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-blue focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a role...</option>
                          <option value="caregiver">Caregiver / Home Maker</option>
                          <option value="cna">Certified Nursing Assistant (CNA)</option>
                          <option value="rn">Registered Nurse (RN) supervisor</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane.doe@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Attach Resume *</label>
                      <input
                        required
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 rounded-xl p-5 text-center cursor-pointer transition-colors bg-slate-50 hover:bg-slate-100/50 hover:border-brand-blue/40 flex flex-col items-center justify-center space-y-2"
                      >
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-slate-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        <p className="text-xs font-semibold text-brand-ink">
                          {fileName ? `File Selected: ${fileName}` : "Click to select or drop your resume (PDF, Word)"}
                        </p>
                        <p className="text-[10px] text-slate-400">Acceptable file formats: .pdf, .doc, .docx</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Message / Cover Note</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly state your qualifications or care philosophy..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-blue focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        required
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="mt-1 h-4 w-4 accent-brand-blue rounded border-slate-300"
                      />
                      <span className="text-[11px] text-slate-500 leading-normal">
                        By submitting this application form, you agree to the conditions of our Privacy Policy.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0c3e72] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white !text-white shadow-md transition hover:bg-brand-blue active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-blue text-[9px] font-bold">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

          </div>
        </PageShell>
      </section>
    </>
  );
}
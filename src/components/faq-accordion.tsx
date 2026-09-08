"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

export type FAQItem = {
  question: string;
  answer: string;
};

/**
 * Shared FAQ accordion for the service pages.
 *
 * Each service page used to carry its own copy of this markup, which forced the
 * entire page — hero, prose, schema and all — into the client bundle just to
 * own one `useState`. Isolating the interactive part here lets those pages go
 * back to being server components.
 *
 * Answers stay mounted and are collapsed with max-height rather than unmounted,
 * so the text remains in the served HTML for crawlers.
 */
export default function FaqAccordion({ faqs }: { faqs: readonly FAQItem[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-14 max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openFaqIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <ScrollReveal key={faq.question}>
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base sm:text-lg font-semibold text-brand-ink transition hover:text-brand-blue"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{faq.question}</span>
                <div className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 transition-colors duration-300">
                  <svg
                    className={`h-4 w-4 text-brand-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                id={panelId}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[350px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-slate-600 bg-slate-50/40">
                  {faq.answer}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

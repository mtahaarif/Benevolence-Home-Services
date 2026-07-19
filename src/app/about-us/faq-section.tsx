"use client";

import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FaqSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const faqId = `faq-answer-${idx}`; // Generates a unique ID for ARIA binding

        return (
          <div 
            key={idx} 
            className="rounded-2xl border border-slate-200/70 bg-slate-50/40 overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggleFaq(idx)}
              aria-expanded={isOpen}
              aria-controls={faqId} // Binds the button to the hidden content panel
              className="flex w-full items-center justify-between p-5 font-display text-sm sm:text-base font-semibold text-brand-ink text-left cursor-pointer transition-colors hover:bg-slate-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-1"
            >
              <span>{faq.q}</span>
              <span 
                aria-hidden="true" 
                className={`text-xl font-bold text-[#0c3e72] transition-transform duration-300 transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>

            {/* Hardware-Accelerated Expansion Channel */}
            <div 
              id={faqId} // Explicitly targeted by the button above
              role="region"
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
"use client";

import { useState } from "react";

/**
 * The homepage "Guided by Clinical Wisdom and Faith" disclosure set.
 *
 * Split out of `page.tsx` so the homepage can render on the server. The page
 * was marked "use client" solely to own this one `useState`, which pushed its
 * entire 540-line tree — hero, comparison table, mission panel and all — into
 * the client bundle and left the served HTML mostly framework payload.
 *
 * Panels stay mounted and collapse via max-height, so the answers remain in the
 * HTML for crawlers.
 */

const accordionData = [
  {
    title: "What Makes Nurse-Led Home Care Different?",
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
        <p>
          Unlike traditional home care agencies that are scheduler-led, nurse-led home care means a registered nurse actively oversees care plans, supports caregivers, and monitors changes in condition.
        </p>
        <p className="font-semibold text-brand-ink">This model allows us to:</p>
        <ul className="grid gap-3 sm:grid-cols-2 pl-1">
          <li className="flex items-center gap-2">
            <span className="bullet-dot" />
            <span>Recognize early signs of decline</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bullet-dot" />
            <span>Provide stronger caregiver guidance and accountability</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bullet-dot" />
            <span>Support safer aging at home</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bullet-dot" />
            <span>Reduce avoidable hospital visits</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bullet-dot" />
            <span>Offer families clarity and confidence</span>
          </li>
        </ul>
        <p className="pt-2 text-xs sm:text-sm text-slate-500 border-t border-slate-100 mt-2">
          Our nurse-led structure bridges clinical insight with compassionate, everyday care, creating better outcomes and a more personal experience.
        </p>
      </div>
    )
  },
  {
    title: "Faith in Action Through Care",
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
        <p className="font-semibold text-brand-ink">Our services are grounded in faith-based values of:</p>
        <ul className="grid gap-2 sm:grid-cols-2 pl-1">
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Compassion</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Stewardship</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Respect</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Service</span>
          </li>
        </ul>
        <p className="pt-2 border-t border-slate-100 mt-2">
          We view caregiving as ministry in motion—serving seniors and families with humility, patience, and grace. Whether supporting daily routines or providing respite for loved ones, our goal is to bring comfort, stability, and peace into every home we serve.
        </p>
      </div>
    )
  },
  {
    title: "Helping Families Navigate Care Options",
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
        <p>
          Understanding how to pay for home care can feel overwhelming. We walk alongside families to help them navigate:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Private pay home care</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Medicaid home care options</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="bullet-dot" />
            <span>Community and long-term care resources</span>
          </li>
        </ul>
        <p className="pt-2 border-t border-slate-100 mt-2">
          Our role is to simplify the process so families can focus on what matters most—caring for their loved ones.
        </p>
      </div>
    )
  },
  {
    title: "Serving Seniors With Dignity at Home",
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
        <p>
          Aging at home allows seniors to remain surrounded by familiarity, comfort, and independence. Our mission is to make that possible through faith-centered, nurse-led home care that supports the whole person—body, mind, and spirit.
        </p>
      </div>
    )
  }
];

export default function HomeAccordion() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveAccordion((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-3.5">
      {accordionData.map((item, idx) => {
        const isOpen = activeAccordion === idx;
        return (
          <div 
            key={idx} 
            className="rounded-xl border border-[#0a3566]/20 bg-white overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggleAccordion(idx)}
              aria-expanded={isOpen}
              className="accordion-trigger"
            >
              <span className="font-display text-sm sm:text-base font-semibold text-white !text-white tracking-wide">
                {item.title}
              </span>
              <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <span className="text-base font-bold leading-none select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[600px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 sm:p-8 bg-white">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

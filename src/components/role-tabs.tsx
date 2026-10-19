"use client";

import { useState } from "react";

/**
 * Tab toggle for the job openings on /careers.
 *
 * Every panel is rendered on the server and passed in; this component only
 * decides which one is visible. Inactive panels stay in the HTML (hidden), so
 * each job description is readable by search engines rather than existing
 * only after a click.
 */
export function RoleTabs({
  tabs,
}: {
  tabs: readonly { id: string; label: string; panel: React.ReactNode }[];
}) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  return (
    <>
      <div className="text-center mb-12">
        <div role="tablist" aria-label="Open positions" className="inline-flex p-1.5 bg-slate-100 rounded-full mt-8 border border-slate-200/60 shadow-inner">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`role-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`role-panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#0c3e72] text-white shadow-md"
                    : "text-slate-600 hover:text-brand-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`role-panel-${tab.id}`}
          aria-labelledby={`role-tab-${tab.id}`}
          hidden={tab.id !== activeId}
        >
          {tab.panel}
        </div>
      ))}
    </>
  );
}

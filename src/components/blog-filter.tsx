"use client";

import { useState } from "react";

const ALL = "All Insights";

/**
 * Category filter for the /blog index.
 *
 * The post cards are rendered on the server and passed in already built; this
 * component only shows or hides them. Filtered-out cards stay in the HTML
 * (hidden), and none of the article bodies are shipped to the browser.
 */
export function BlogFilter({
  categories,
  items,
}: {
  categories: readonly string[];
  items: readonly { key: string; category: string; card: React.ReactNode }[];
}) {
  const [activeCategory, setActiveCategory] = useState(ALL);

  return (
    <>
      {/* Category Filter Menu */}
      <div className="relative z-20 max-w-5xl mx-auto mb-16 overflow-x-auto scrollbar-hide py-2 px-4 flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 rounded-full lg:bg-white/40 lg:backdrop-blur-md lg:border lg:border-white/60 lg:p-2 lg:shadow-sm">
        {[ALL, ...categories].map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap rounded-full transition-all duration-300 ${
                isSelected
                  ? "bg-[#0c3e72] text-white shadow-md shadow-blue-900/10 scale-102"
                  : "bg-white/60 text-slate-600 hover:bg-white hover:text-[#0c3e72] border border-slate-100 lg:border-transparent"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Cards Grid System */}
      <ul className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <li
            key={item.key}
            hidden={activeCategory !== ALL && item.category !== activeCategory}
            className="w-full min-h-[460px] h-auto group relative list-none"
          >
            {item.card}
          </li>
        ))}
      </ul>
    </>
  );
}

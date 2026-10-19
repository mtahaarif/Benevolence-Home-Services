"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";
import { cityHref } from "@/lib/cities";

interface CityData {
  name: string;
  slug: string;
}

interface ExpandableLocationsProps {
  cities: CityData[];
  initialVisibleCount?: number;
}

export function ExpandableLocations({ 
  cities, 
  initialVisibleCount = 12 
}: ExpandableLocationsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the array into initially visible and hidden items
  const visibleCities = cities.slice(0, initialVisibleCount);
  const hiddenCities = cities.slice(initialVisibleCount);
  
  const hasHiddenCities = hiddenCities.length > 0;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-brand-ink mb-10">
            Communities We Proudly Serve
          </h2>
        </ScrollReveal>

        {/* ALWAYS VISIBLE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleCities.map((city) => (
            <LocationCard key={city.slug} city={city} />
          ))}
        </div>

        {/* HARDWARE-ACCELERATED EXPANDABLE GRID */}
        {hasHiddenCities && (
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
                {hiddenCities.map((city) => (
                  <LocationCard key={city.slug} city={city} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TOGGLE BUTTON */}
        {hasHiddenCities && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#0c3e72] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0c3e72] transition-all hover:bg-[#0c3e72]/5 active:scale-95"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "View Fewer Locations" : "View All Locations"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Sub-component for the individual pill cards
function LocationCard({ city }: { city: CityData }) {
  const href = cityHref(city.slug);

  return (
    <ScrollReveal>
      <Link
        href={href}
        className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-200/60 shadow-[0_2px_10px_rgba(15,47,89,0.02)] transition-all duration-300 hover:border-[#0c3e72]/30 hover:shadow-md hover:-translate-y-0.5 group"
      >
        <span className="font-display font-bold text-base text-brand-ink group-hover:text-[#0c3e72] transition-colors">
          {city.name}
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 mt-1.5 font-semibold">
          Home Care in {city.name}
        </span>
      </Link>
    </ScrollReveal>
  );
}
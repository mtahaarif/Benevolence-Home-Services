"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand, navItems } from "@/data/site-content";

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      {/* Update src to match the exact name of your logo file in the public folder */}
      <img
        src="/footer-logo.png"
        alt="Benevolence Home Services Logo"
        className="h-10 w-auto shrink-0 sm:h-12 object-contain"
      />
      
      {/* Remove this div if your logo picture already includes the text */}
      <div className="leading-tight">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-blue sm:text-[0.72rem]">
          {brand.shortName}
        </p>
        <p className="font-display text-lg font-semibold text-brand-ink sm:text-xl">
          HomeServices
        </p>
      </div>
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    // Floating Pill Layout with Liquid Glass Backdrop
    <header className="sticky top-4 z-50 mx-auto w-[96%] max-w-7xl mb-6">
      <div className="flex w-full items-center justify-between gap-4 rounded-full border border-white/40 bg-white/75 px-4 py-3 shadow-[0_8px_30px_rgba(15,47,89,0.12)] backdrop-blur-xl sm:px-6">
        
        <Link href="/" className="shrink-0" aria-label={brand.name}>
          <BrandMark />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md transition active:scale-95 lg:hidden"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
{/* Navigation Links */}
        <nav
          id="primary-navigation"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-[120%] flex-col gap-2 rounded-3xl border border-white/40 bg-white/95 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:gap-1.5 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none`}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            const isCTA = item.label === "Contact Us";

            return (
              <div key={item.href} className="group relative flex flex-col lg:block">
                
                {/* Main Link / Trigger */}
                <Link
                  href={item.href}
                  target={item.target} // Applied target
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all xl:text-xs ${
                    isCTA
                      ? "bg-brand-blue text-white shadow-md hover:bg-brand-blue/90"
                      : active
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "text-brand-ink hover:bg-brand-blue/10 hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                  
                  {/* Dropdown Chevron Arrow */}
                  {item.subItems && (
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 ${
                        isCTA ? "text-white" : "opacity-50"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.subItems && (
                  <>
                    {/* Mobile Nested Links (Accordion style) */}
                    <div className="mt-2 flex flex-col gap-1 pl-4 lg:hidden">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          target={sub.target} // Applied target to mobile sub-link
                          rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition hover:bg-brand-blue/10 hover:text-brand-blue"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>

                    {/* Desktop Hover Dropdown */}
                    <div className="absolute left-0 top-full z-50 hidden pt-4 opacity-0 transition-all duration-300 invisible translate-y-2 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                      <div className="flex w-60 flex-col gap-1 rounded-2xl border border-white/50 bg-white/90 p-2 shadow-xl backdrop-blur-xl">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            target={sub.target} // Applied target to desktop sub-link
                            rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="rounded-xl px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-700 transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
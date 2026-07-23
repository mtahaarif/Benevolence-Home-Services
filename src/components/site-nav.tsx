"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand, navItems } from "@/data/site-content";
import Image from "next/image";

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
      <Image
        src="/footer-logo.png"
        alt="Benevolence Home Services Logo"
        width={250} 
        height={65}
        className="h-9 w-auto shrink-0 sm:h-11 object-contain"
        loading="lazy"
      />
      <div className="leading-tight shrink-0">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#0c3e72] sm:text-[0.68rem]">
          {brand.shortName}
        </p>
        <p className="font-display text-sm font-extrabold text-brand-ink tracking-tight sm:text-base">
          Home Services
        </p>
      </div>
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/85 shadow-[0_10px_40px_rgba(15,47,89,0.06)] backdrop-blur-xl">
      {/* Full-width rectangular navigation bar */}
      <div className="relative flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 overflow-x-clip">
        
        {/* Brand/Logo Anchor */}
        <Link href="/" className="shrink-0 transition-transform active:scale-98" aria-label={brand.name}>
          <BrandMark />
        </Link>

        {/* Mobile Vector Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0c3e72] text-white shadow-md transition-all active:scale-95 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle Menu"
          aria-controls="primary-navigation"
        >
          {open ? (
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Navigation Link Layer */}
        <nav
          id="primary-navigation"
          className={`${
            open ? "translate-y-0 opacity-100 visible" : "translate-y-2 opacity-0 invisible lg:translate-y-0 lg:opacity-100 lg:visible"
          } absolute left-0 right-0 top-full mt-3 flex flex-col gap-2 rounded-none border border-slate-100 bg-white/98 px-6 py-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:static lg:mt-0 lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:gap-1 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none`}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            const isCTA = item.label === "Contact Us";

            return (
              <div key={item.label} className="group relative flex flex-col lg:block">
                
                {/* Main Menu Links with strict whitespace preservation */}
                <Link
                  href={item.href}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-1.5 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] whitespace-nowrap transition-all xl:px-3.5 xl:text-[11px] ${
                    isCTA
                      ? "bg-[#0c3e72] !text-white shadow-sm hover:bg-brand-blue"
                      : active
                      ? "bg-brand-blue/5 text-[#0c3e72]"
                      : "text-brand-ink hover:bg-slate-50 hover:text-[#0c3e72]"
                  }`}
                >
                  <span>{item.label}</span>
                  
                  {item.subItems && (
                    <svg
                      className="h-2.5 w-2.5 opacity-60 transition-transform duration-300 group-hover:rotate-180 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Submenu configurations */}
                {item.subItems && (
                  <>
                    {/* Mobile Menu Accordion Viewport */}
                    <div className="mt-1 flex flex-col gap-1 pl-4 lg:hidden">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          target={sub.target}
                          rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap transition-colors hover:bg-slate-50 hover:text-[#0c3e72]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>

                    {/* Desktop Dropdown Panel with no-wrap constraint */}
                    <div className="absolute left-0 top-full z-50 hidden pt-3 opacity-0 transition-all duration-300 invisible translate-y-2 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                      <div className="flex w-fit min-w-[200px] flex-col gap-0.5 rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_15px_40px_rgba(15,47,89,0.1)] backdrop-blur-xl">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            target={sub.target}
                            rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="rounded-xl px-4 py-2.5 text-[9.5px] font-bold uppercase tracking-widest text-slate-600 whitespace-nowrap transition-all hover:bg-brand-blue/5 hover:text-[#0c3e72] hover:translate-x-0.5"
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
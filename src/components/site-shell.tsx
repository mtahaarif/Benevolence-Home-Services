"use client"; // MUST be at the very top of site-shell.tsx

import Link from "next/link";
import Image from "next/image"; // Upgraded to native Next.js Image component
import { SiteNav } from "@/components/site-nav";
import { contactDetails, navItems, socialLinks } from "@/data/site-content";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

type ChromeProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: ChromeProps) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function SiteChrome({ children }: ChromeProps) {
  return (
    <>
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div 
      className={`space-y-4 ${
        centered 
          ? "mx-auto max-w-4xl text-center flex flex-col items-center" 
          : "max-w-3xl"
      }`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-8 text-slate-700 sm:text-lg ${centered ? "max-w-2xl" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function HeroSection({
  eyebrow,
  title,
  primaryAction,
  secondaryAction,
  facts = [],
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  facts?: string[];
  imageSrc?: string | string[];
  imageAlt?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Normalize imageSrc to always be an array
  const images = Array.isArray(imageSrc) ? imageSrc : imageSrc ? [imageSrc] : [];

  // Auto-advance the slider every 5 seconds if there are multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full px-0 pt-0">
      <div className="relative w-full overflow-hidden bg-white">
        <div className="@container/hero relative h-[calc(30svh+50px)] min-h-[470px] w-full overflow-hidden sm:h-[calc(30svh+50px)] lg:h-[calc(30svh+50px)]">
          
          {/* BACKGROUND SLIDER WITH NEXT.JS OPTIMIZED IMAGES */}
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
            >
              <Image
                src={src}
                alt={`${imageAlt ?? title} - Hero Slide ${index + 1}`}
                fill
                priority={index === 0} // Load the first hero image immediately
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* Smart Gradient Fade */}
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/75 via-white/70 to-transparent sm:w-[85%] md:w-[70%] lg:w-[60%] z-0" />
          
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[color:var(--brand-orange)] z-10" />
          <div className="absolute inset-y-0 left-0 w-[5px] bg-[color:var(--brand-blue)] z-10" />

          {/* Content Box Container */}
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="flex max-w-xl flex-col justify-center h-full py-2 sm:max-w-2xl lg:max-w-[40rem]">
              
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-blue)]">
                {eyebrow}
              </p>
              
              <h1 className="mt-1 max-w-2xl font-display text-[clamp(1.25rem,7cqh,1.85rem)] lg:text-[clamp(1.5rem,8cqh,2.25rem)] font-semibold leading-[1.1] text-[color:var(--brand-ink)]">
                {title}
              </h1>
              
              {/* Action Elements Cluster */}
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[color:#0c5a99]"
                >
                  {primaryAction.label}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[color:var(--brand-blue)] text-[9px]">
                    →
                  </span>
                </Link>
                {secondaryAction ? (
                  <Link
                    href={secondaryAction.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[rgba(245,170,65,0.12)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-ink)] transition hover:bg-[rgba(245,170,65,0.2)]"
                  >
                    {secondaryAction.label}
                  </Link>
                ) : null}
              </div>

              {/* Facts/Metadata Badges */}
              {facts.length ? (
                <div className="mt-3 hidden @[340px]/hero:flex flex-wrap gap-1.5">
                  {facts.map((fact) => (
                    <div
                      key={fact}
                      className="rounded-full border border-[color:var(--border)] bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-700"
                    >
                      {fact}
                    </div>
                  ))}
                </div>
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`grid gap-5 sm:grid-cols-2 xl:grid-cols-3 ${className}`}>{children}</div>;
}

export function InfoCard({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent?: string;
}) {
  return (
    <article className="brand-shadow bg-white p-6 sm:p-7">
      {accent ? (
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-blue)]">
          {accent}
        </p>
      ) : null}
      <h3 className="mt-3 text-2xl font-display font-semibold text-[color:var(--brand-ink)]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-700">{body}</p>
    </article>
  );
}

export function BulletPanel({
  title,
  items,
  accent = "",
}: {
  title: string;
  items: readonly string[];
  accent?: string;
}) {
  return (
    <section className="brand-shadow bg-[color:var(--surface)] p-7 sm:p-8">
      {accent ? (
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-blue)]">{accent}</p>
      ) : null}
      <h3 className="mt-3 font-display text-3xl font-semibold text-[color:var(--brand-ink)]">{title}</h3>
      <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-[color:var(--brand-orange)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="brand-shadow bg-white p-7 sm:p-8">
      <h3 className="font-display text-3xl font-semibold text-[color:var(--brand-ink)]">{title}</h3>
      <div className="mt-5 text-base leading-8 text-slate-700">{children}</div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 bg-[color:var(--brand-ink)] text-white">
      <PageShell>
        {/* Top Section: Smart 4-Column Grid */}
        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-4 lg:py-12">
          
          {/* Column 1: Get in Touch */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--brand-gold)]">
                Get in Touch
              </p>
              <h3 className="mt-1 font-display text-3xl font-semibold text-white">
                Contact<br />Information
              </h3>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/80 mt-4">
              Service Areas Covered: {contactDetails.serviceAreas}
            </p>
          </div>

          {/* Column 2: Reach Us & Location (Wrapped in Semantic <address>) */}
          <address className="not-italic space-y-6 lg:mt-7">
            <div>
              <h4 className="text-base font-semibold text-white">Call or Message Us</h4>
              <div className="mt-2 space-y-1 text-sm text-white/80">
                <p>
                  Phone: <a href={contactDetails.phoneHref} className="hover:text-[color:var(--brand-gold)] transition">{contactDetails.phone}</a>
                </p>
                <p>
                  <a href={contactDetails.emailHref} className="hover:text-[color:var(--brand-gold)] transition">{contactDetails.email}</a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Our Location</h4>
              <p className="mt-2 max-w-[250px] text-sm leading-relaxed text-white/80">
                {contactDetails.address}
              </p>
            </div>
          </address>

          {/* Column 3: Quick Links Navigation */}
          <nav aria-label="Footer Navigation" className="lg:mt-7">
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/80">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[color:var(--brand-gold)] transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Column 4: Logo Box (Differentiated Alt Tag to prevent duplicate alt penalties) */}
          <div className="flex items-start lg:justify-end lg:mt-7">
            <div className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center brand-shadow w-full max-w-[220px]">
              <Image
                src="/footer-logo.png"
                alt="Benevolence Home Services Footer Logo" // FIXED: Unique alt text clears duplicate alt warnings
                width={180}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

        </div>
      </PageShell>

      {/* Bottom Legal & Social Bar */}
      <div className="border-t border-white/15 bg-[color:var(--brand-ink)] py-5">
        <PageShell>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            
            {/* Copyright & Legal Text */}
            <div className="text-[11px] leading-relaxed tracking-wider text-white/70">
              <p>© Copyright 2026 | Privacy Notice </p>
              <p className="mt-0.5">
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Do Not Sell/Share My Personal Information
                </Link>
              </p>
            </div>

            {/* Social Share Cluster */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                Like, Share, or Comment:
              </span>
              <div className="flex gap-2.5">
                {socialLinks.map((item) => {
                  const icon = {
                    LinkedIn: <FaLinkedinIn size={15} />,
                    Facebook: <FaFacebookF size={15} />,
                    Instagram: <FaInstagram size={15} />,
                    YouTube: <FaYoutube size={15} />,
                    TikTok: <FaTiktok size={15} />,
                  }[item.label];

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer" // FIXED: Added noopener for security best practice
                      aria-label={item.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-[color:var(--brand-ink)] hover:scale-110"
                    >
                      {icon}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </PageShell>
      </div>
    </footer>
  );
}
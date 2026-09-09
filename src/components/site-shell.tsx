"use client";

/**
 * Shared page furniture.
 *
 * This stays a client module on purpose. Rendering the nav and footer on the
 * server looks like a win, but it costs more than it saves here: the chrome is
 * identical on all 83 routes, so serialising it into every page's RSC flight
 * payload added ~12KB of inline script per document and dropped the homepage
 * text-to-code ratio from 9.2% to 5.5% — for about 10KB of gzipped JS back.
 * Measured both ways; the client boundary wins.
 *
 * The react-icons dependency is still gone: the social glyphs are now inline
 * SVGs in `social-icons.tsx`, which was the part of that refactor that actually
 * paid for itself.
 */
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import HeroSlideshow from "@/components/hero-slideshow";
import { SocialIcon } from "@/components/social-icons";
import { contactDetails, footerLinks, priorityAreas, socialLinks } from "@/data/site-content";

type ChromeProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: ChromeProps) {
  return <div className="page-shell">{children}</div>;
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
  const isMultiple = Array.isArray(imageSrc) && imageSrc.length > 1;
  const images = Array.isArray(imageSrc) ? imageSrc : imageSrc ? [imageSrc] : [];

  return (
    <section className="w-full px-0 pt-0">
      <div className="relative w-full overflow-hidden bg-white">
        {/* Parent container with explicit responsive height and min-height */}
        <div className="@container/hero relative h-[calc(30svh+50px)] min-h-[470px] w-full overflow-hidden">

          {/* 1. FAST-PATH: Static Single Image for Inner Pages */}
          {!isMultiple && images.length === 1 && (
            <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
              <Image
                src={images[0]}
                alt={imageAlt ?? title}
                width={1920}
                height={600}
                priority
                fetchPriority="high"
                quality={75}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
                className="object-cover object-center w-full h-full"
              />
            </div>
          )}

          {/* 2. OPTIMIZED SLIDER PATH (Used on Homepage) */}
          {isMultiple && (
            <>
              {/* SLIDE 1: Immediate Frame-0 Static Base Element */}
              <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
                <Image
                  src={images[0]}
                  alt={`${imageAlt ?? title} - Slide 1`}
                  width={1920}
                  height={899}
                  priority
                  loading="eager"
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* SLIDES 2 & 3: Rotating Overlays (client island) */}
              <HeroSlideshow
                images={images.slice(1)}
                imageAlt={imageAlt ?? title}
                slideCount={images.length}
              />
            </>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/75 via-white/70 to-transparent sm:w-[85%] md:w-[70%] lg:w-[60%] z-20 pointer-events-none" />

          {/* Accent Borders */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[color:var(--brand-orange)] z-30" />
          <div className="absolute inset-y-0 left-0 w-[5px] bg-[color:var(--brand-blue)] z-30" />

          {/* Content Box Container */}
          <div className="relative z-30 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
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

              {/* Facts Badges */}
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
        {/* Top Section: 4-Column Grid */}
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

          {/* Column 2: Reach Us & Location */}
          <address className="not-italic space-y-6 lg:mt-7">
            <div>
              <h4 className="text-base font-semibold text-white">Call or Message Us</h4>
              <div className="mt-2 space-y-1 text-sm text-white/80">
                <p>
                  Phone: <a href={contactDetails.phoneHref} className="footer-link">{contactDetails.phone}</a>
                </p>
                <p>
                  <a href={contactDetails.emailHref} className="footer-link">{contactDetails.email}</a>
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
            {/* A real list, not a bare div of anchors — the footer is the one
                place every page carries a full site index, so the markup should
                say so. Labels come from `footerLinks`, which is deliberately
                more descriptive than the header nav. */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/80">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Footer Logo Container */}
          <div className="flex items-start lg:justify-end lg:mt-7">
            <div className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center brand-shadow w-full max-w-[220px]">
              <Image
                src="/footer-logo.png"
                alt="Benevolence Home Services Footer Logo"
                width={180}
                height={64}
                sizes="180px"
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </PageShell>

      {/* Service-area row.
          A service-area business earns local relevance partly through internal
          links into its town pages; these had one inbound link each. Kept to
          the priority markets and clearly labelled, rather than dumping all 38
          towns into the footer, which reads as link stuffing. */}
      <div className="border-t border-white/10">
        <PageShell>
          <div className="py-6">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--brand-gold)]">
              Home Care Near You
            </h4>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/70">
              {priorityAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas-we-serve/${area.slug}`} className="footer-link">
                    {`Home care in ${area.city}, IL`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </PageShell>
      </div>

      {/* Bottom Legal & Social Bar */}
      <div className="border-t border-white/15 bg-[color:var(--brand-ink)] py-5">
        <PageShell>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            
            {/* Copyright & Legal */}
            <div className="text-[11px] leading-relaxed tracking-wider text-white/70">
              <p>© Copyright 2026 | Privacy Notice </p>
              <p className="mt-0.5">
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Do Not Sell/Share My Personal Information
                </Link>
              </p>
            </div>

            {/* Social Share Icons */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                Like, Share, or Comment:
              </span>
              <ul className="flex gap-2.5">
                {socialLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Benevolence Home Services on ${item.label}`}
                      className="footer-social-btn"
                    >
                      <SocialIcon label={item.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </PageShell>
      </div>
    </footer>
  );
}
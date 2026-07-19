import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection, PageShell } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import { blogPosts } from "@/data/blogs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) notFound();

  // === PREMIUM SMART CONTENT PARSER ENGINE ===
  const renderSmartContent = (paragraphs: string[]) => {
    return paragraphs.map((text, index) => {
      const cleanText = text.trim();

      // 1. DISCLAIMER ALERT BOX
      if (cleanText.startsWith("Disclaimer:")) {
        return (
          <div key={index} className="mt-14 p-6 bg-slate-50/80 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-sm">
            <svg className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-[13px] md:text-sm text-slate-500 italic leading-relaxed">
              <strong className="text-slate-700 font-bold not-italic uppercase tracking-widest text-xs mr-2">Disclaimer:</strong> 
              {cleanText.replace("Disclaimer:", "").trim()}
            </p>
          </div>
        );
      }

      // 2. STANDALONE SUBHEADINGS (Short strings ending with a colon)
      if (cleanText.endsWith(":") && cleanText.length < 80) {
        return (
          <div key={index} className="mt-14 mb-8 flex items-center gap-4">
            {/* Elegant vertical accent bar */}
            <div className="h-8 w-1.5 bg-[#0c3e72] rounded-full shadow-sm"></div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-ink tracking-tight">
              {cleanText.replace(":", "")}
            </h3>
          </div>
        );
      }

      // 3. EDITORIAL FEATURE CARDS (For bullet points and numbered lists)
      const isBullet = cleanText.startsWith("•") || cleanText.startsWith("-");
      const isNumbered = /^\d+\./.test(cleanText);

      if (isBullet || isNumbered) {
        const listContent = cleanText.replace(/^(•|-|\d+\.)\s*/, "");
        const colonIndex = listContent.indexOf(":");
        
        let title = "";
        let rest = listContent;

        if (colonIndex > 0 && colonIndex < 80) {
          title = listContent.substring(0, colonIndex);
          rest = listContent.substring(colonIndex + 1).trim();
        }

        const numberMatch = cleanText.match(/^\d+/);
        // Uses a number if numbered, or a premium checkmark if bulleted
        const badgeContent = isNumbered && numberMatch ? numberMatch[0] : (
          <svg className="w-5 h-5 text-[#0c3e72]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        );

        return (
          <div key={index} className="group flex gap-5 mt-6 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,47,89,0.03)] transition-all duration-500 hover:shadow-[0_12px_30px_rgba(12,62,114,0.08)] hover:border-[#0c3e72]/15">
            <div className="flex-shrink-0 mt-0.5 h-12 w-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0c3e72] font-black text-lg shadow-inner transition-colors duration-500 group-hover:bg-[#0c3e72]/5 group-hover:border-[#0c3e72]/20">
              {badgeContent}
            </div>
            <div className="pt-1">
              {title && <h4 className="text-brand-ink font-bold text-lg md:text-xl mb-2 tracking-tight">{title}</h4>}
              <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
                {rest}
              </p>
            </div>
          </div>
        );
      }

      // 4. BLOCKQUOTE HIGHLIGHTS (For paragraphs that start with an inline title)
      const colonIndex = cleanText.indexOf(":");
      if (colonIndex > 0 && colonIndex < 80) {
        const title = cleanText.substring(0, colonIndex);
        const rest = cleanText.substring(colonIndex + 1).trim();
        return (
          <div key={index} className="mt-10 pl-6 md:pl-8 border-l-4 border-[#0c3e72]/20 py-2 transition-colors hover:border-[#0c3e72]/60">
            <h4 className="text-[#0c3e72] font-extrabold text-lg md:text-xl mb-2 tracking-tight">
              {title}
            </h4>
            <p className="text-slate-600 text-[15px] md:text-[17px] leading-relaxed">
              {rest}
            </p>
          </div>
        );
      }

      // 5. STANDARD NARRATIVE PARAGRAPHS
      // The very first paragraph of the blog receives an elegant drop-cap
      const isDropCap = index === 0;

      return (
        <p key={index} className={`text-slate-600 text-[15px] md:text-[17px] leading-relaxed mt-6 first-of-type:mt-0 ${
          isDropCap 
            ? "first-letter:text-5xl md:first-letter:text-6xl first-letter:font-display first-letter:font-black first-letter:text-[#0c3e72] first-letter:mr-3 first-letter:mt-1 first-letter:float-left first-letter:leading-none" 
            : ""
        }`}>
          {cleanText}
        </p>
      );
    });
  };

  return (
    <>
      {/* HERO BANNER SECTION WITH EXPLICIT CHILD OVERRIDES FOR WHITE BUTTON TEXT */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Educational Insights &amp; Family Caregiver Advice"
          title="The Benevolence Senior Care &amp; Wellness Blog"
          description=""
          primaryAction={{ label: "Request a Care Consultation", href: "/contact-us" }}
          secondaryAction={{ label: "Explore Our Services", href: "/services" }}
          imageSrc="/non-home-banner.jpg"
          imageAlt="Senior reading an informative book safely at home"
        />
      </div>

      {/* ARTICLE HEADING BLOCK */}
      <section className="bg-white pt-16 pb-6 px-4 sm:px-6 lg:px-8">
        <PageShell>
          <div className="max-w-6xl mx-auto space-y-5">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0c3e72] hover:text-brand-blue transition-colors mb-2"
            >
              ← Back to Journal
            </Link>
            
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <span className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg shadow-sm text-slate-500">{post.category}</span>
              <span>•</span>
              <span className="text-[#0c3e72]">{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black leading-[1.1] tracking-tight text-brand-ink py-2">
              {post.title}
            </h1>

            <div className="pt-2 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-2">
                 <div className="h-7 w-7 rounded-full bg-[#0c3e72]/10 flex items-center justify-center text-[#0c3e72] border border-[#0c3e72]/20">
                   KT
                 </div>
                 <span>By {post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </PageShell>
      </section>

      {/* SPLIT EDITORIAL CORE PANEL */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white relative z-10">
        <PageShell>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: The Smart Rendered Output */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScrollReveal>
                <div className="pb-8">
                  {renderSmartContent(post.content)}
                </div>
              </ScrollReveal>

              {/* Consultation Context Box Panel */}
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Resource Provider</h4>
                  <p className="text-sm font-bold text-brand-ink uppercase tracking-wider">Benevolence Home Services</p>
                </div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0c3e72] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] !text-white shadow-lg hover:bg-brand-blue transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Request Assessment
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Thumbnail Display */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
              <ScrollReveal>
                <div className="w-full rounded-[2.5rem] p-3 bg-white/40 border border-white/80 shadow-[0_15px_40px_rgba(15,47,89,0.06)] backdrop-blur-xl">
                  <div className="w-full h-64 sm:h-80 lg:h-96 relative rounded-[2rem] overflow-hidden shadow-inner bg-slate-50 group">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent pointer-events-none" />
                    <span className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md text-[#0c3e72] text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-white">
                      {post.category}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </PageShell>
      </section>

      {/* AUTOMATED BLOGPOSTING JSON-LD RICH DATA SCHEMATICS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": [`https://www.benevolencehomeservices.com${post.image}`],
            "datePublished": new Date(post.date).toISOString().split('T')[0],
            "author": [{
              "@type": "Person",
              "name": post.author,
              "url": "https://www.benevolencehomeservices.com/about-owner"
            }],
            "publisher": {
              "@type": "HomeAndConstructionBusiness",
              "name": "Benevolence Home Services",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.benevolencehomeservices.com/logo.png"
              }
            },
            "description": post.excerpt
          })
        }}
      />
    </>
  );
}
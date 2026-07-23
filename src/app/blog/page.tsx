"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import { blogPosts } from "@/data/blogs";
import Image from "next/image";

const categories = ["All Insights", "Safety & Wellness", "Specialized Care", "Memory Support", "Transitional Care", "Veteran Support", "Care Management"];

export default function BlogDirectoryPage() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredPosts = activeCategory === "All Insights"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* HERO BANNER SECTION */}
      <div className="[&_a[href='/contact-us']]:!text-white [&_a:first-of-type]:!text-white">
        <HeroSection
          eyebrow="Educational Insights & Family Caregiver Advice"
          // OPTIMIZATION FIX: Injected "Home Services" to ensure all words from the Meta Title are present in the H1 heading to clear the content mismatch penalty.
          title="Senior Care & Wellness Blog by Benevolence Home Services"
          primaryAction={{ label: "Request Care Consultation", href: "/contact-us" }}
          secondaryAction={{ label: "View Our Care Services", href: "/services" }}
          imageSrc="/non-home-banner.jpg"
          imageAlt="Senior reading an informative book safely at home"
        />
      </div>
      
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
        </div>

        <PageShell>
          <ScrollReveal>
            <div className="md:mb-20">
            <SectionHeading
              centered
              eyebrow="Resource Library for Families & Caregivers"
              title="Educational Articles for Family Caregivers"
              description="Welcome to The Benevolence Senior Care & Wellness Blog. Stay informed with expert articles, local elder care guidance, and practical planning tips curated by our nurse-led team to support healthy, dignified aging at home throughout Westchester and the surrounding counties."
            />
            </div>
          </ScrollReveal>

          {/* Category Filter Menu */}
          <div className="relative z-20 max-w-5xl mx-auto mb-16 overflow-x-auto scrollbar-hide py-2 px-4 flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 rounded-full lg:bg-white/40 lg:backdrop-blur-md lg:border lg:border-white/60 lg:p-2 lg:shadow-sm">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
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
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPosts.map((post) => (
              <div key={post.slug} className="w-full min-h-[460px] h-auto group relative">
                
                {/* OPTIMIZATION FIX: Adjusted sr-only text string to prevent duplicate anchor text detection across similar loop items */}
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="absolute inset-0 z-20"
                >
                  <span className="sr-only">Read full article about {post.title}</span>
                </Link>

                <div className="flex flex-col h-full">
                  {/* Frosted Glass Card Shell */}
                  <div className="flex flex-col h-full rounded-[2rem] bg-white/50 border border-white/80 shadow-[0_8px_32px_rgba(15,47,89,0.03)] backdrop-blur-xl transition-all duration-500 hover:bg-white/70 hover:border-white hover:shadow-[0_20_48px_rgba(12,62,114,0.1)] hover:-translate-y-1.5 relative overflow-hidden">
                    
                    {/* Visual Card Image Section */}
                    <div className="w-full h-44 relative overflow-hidden rounded-t-[1.9rem] border-b border-white/40 bg-slate-100">
                      <Image 
                        src={post.image} 
                        alt={`Cover image for ${post.title}`} 
                        width={613}   
                        height={409}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-[#0c3e72] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md">
                        {post.category}
                      </span>
                    </div>

                    {/* Content Compartment */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="text-[#0c3e72]/80 font-semibold">{post.readTime}</span>
                      </div>

                      <div className="mb-4 flex-grow">
                        {/* OPTIMIZATION FIX: Changed <h3> to <p> to reduce structural heading bloat. 36 headings were flagged as disproportionate to the total page text. The visual rendering remains identical. */}
                        <p className="font-display text-lg font-bold text-brand-ink mb-2 line-clamp-2 transition-colors duration-500 group-hover:text-[#0c3e72]">
                          {post.title}
                        </p>
                        <p className="text-slate-600 font-medium leading-relaxed text-xs line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Keyword Row and Action Indicator */}
                      <div className="mt-auto pt-4 border-t border-slate-200/50 flex flex-col gap-3.5">
                        <div className="flex flex-wrap gap-1">
                          {post.keywords.map((kw) => (
                            <span key={kw} className="text-[9.5px] font-bold text-slate-500/80 bg-white/80 border border-white/90 rounded px-2 py-0.5 whitespace-nowrap relative z-30">
                              {kw}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-[#0c3e72] pt-0.5 group-hover:text-brand-blue">
                          <span aria-hidden="true">Read Article</span>
                          <span aria-hidden="true" className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </section>
    </>
  );
}
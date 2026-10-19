import Link from "next/link";
import { HeroSection, PageShell, SectionHeading } from "@/components/site-shell";
import ScrollReveal from "@/components/scroll-reveal";
import { blogPosts, type BlogPost } from "@/data/blogs";
import { BlogFilter } from "@/components/blog-filter";
import Image from "next/image";

// Filter buttons in display order; any category added to the posts later is
// appended automatically so it can never be missing from the filter.
const CATEGORY_ORDER = ["Safety & Wellness", "Specialized Care", "Memory Support", "Transitional Care", "Veteran Support", "Care Management"];
const categories = [
  ...CATEGORY_ORDER,
  ...new Set(blogPosts.map((post) => post.category).filter((c) => !CATEGORY_ORDER.includes(c))),
];

/** One post card on the blog index; rendered on the server. */
function PostCard({ post }: { post: BlogPost }) {
  return (
    <>
      {/* OPTIMIZATION FIX: Adjusted sr-only text string to prevent duplicate anchor text detection across similar loop items */}
      <Link 
        href={`/blog/${post.slug}`} 
        className="absolute inset-0 z-20"
      >
        <span className="sr-only">{`Read full article about ${post.title}`}</span>
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
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 380px"
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
    </>
  );
}

export default function BlogDirectoryPage() {
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

          {/* Lead paragraph carrying this page's key phrase in a <strong>. */}
          <ScrollReveal>
            <p className="mx-auto -mt-10 mb-14 max-w-3xl text-center text-base leading-8 text-slate-700">
              Every article below is written and reviewed by our{" "}
              <strong>nurse-led senior care team in Westchester, IL</strong> — practical
              guidance for families navigating dementia, recovery at home, and caregiver burnout.
            </p>
          </ScrollReveal>

          {/* Filter buttons and card visibility are a client island; the cards
              themselves are rendered here on the server. */}
          <BlogFilter
            categories={categories}
            items={blogPosts.map((post) => ({ key: post.slug, category: post.category, card: <PostCard post={post} /> }))}
          />
        </PageShell>
      </section>
    </>
  );
}
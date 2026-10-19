import { blogPosts, type BlogPost } from "@/data/blogs";
import { homeCareServices } from "@/data/site-content";

type Service = (typeof homeCareServices)[number];
type ServiceSlug = Service["slug"];

/**
 * Which services a post links to.
 *
 * Topic keywords in the post's slug and title come first, because categories
 * are too coarse: "Safety & Wellness" alone covers diet, eye exams, infection
 * control and exercise. The category supplies sensible defaults behind them.
 */
const TOPIC_RULES: readonly { pattern: RegExp; services: readonly ServiceSlug[] }[] = [
  { pattern: /dementia|alzheimer|memory/i, services: ["specialized-support", "companionship"] },
  { pattern: /diet|nutri|meal/i, services: ["meal-preparation"] },
  { pattern: /medication/i, services: ["medication-reminders"] },
  { pattern: /respite/i, services: ["respite-care"] },
  { pattern: /loneliness|companion|social|bonds|depression/i, services: ["companionship"] },
  { pattern: /hygiene|mobility|exercise|vitality|walks|surgery|recovery|hospital|infection|confidence/i, services: ["personal-care"] },
  { pattern: /veteran|chronic|heart|hearing|vision|live-in/i, services: ["specialized-support"] },
];

const CATEGORY_DEFAULTS: Readonly<Record<string, readonly ServiceSlug[]>> = {
  "Transitional Care": ["personal-care", "medication-reminders"],
  "Memory Support": ["specialized-support", "companionship"],
  "Specialized Care": ["specialized-support", "personal-care"],
  "Veteran Support": ["specialized-support", "companionship"],
  "Care Management": ["respite-care", "personal-care"],
  "Safety & Wellness": ["personal-care", "companionship"],
};

/** Up to `limit` services relevant to the post, most specific first. */
export function relatedServices(post: BlogPost, limit = 3): Service[] {
  const haystack = `${post.slug} ${post.title}`;
  const slugs = [
    ...TOPIC_RULES.filter((rule) => rule.pattern.test(haystack)).flatMap((rule) => rule.services),
    ...(CATEGORY_DEFAULTS[post.category] ?? []),
  ];
  return [...new Set(slugs)]
    .slice(0, limit)
    .map((slug) => homeCareServices.find((s) => s.slug === slug)!);
}

const newestFirst = (a: BlogPost, b: BlogPost) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

/**
 * Other posts to read next: same category first (newest first), then the most
 * recent posts overall to fill the remaining slots.
 */
export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category).sort(newestFirst);
  const rest = others.filter((p) => p.category !== post.category).sort(newestFirst);
  return [...sameCategory, ...rest].slice(0, limit);
}

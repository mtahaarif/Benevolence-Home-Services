import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { cityDirectory } from "@/app/areas-we-serve/[slug]/page";

const BASE = "https://www.benevolencehomeservices.com";

/**
 * Generated XML sitemap.
 *
 * This replaces the hand-maintained `public/sitemap.xml`, which listed exactly
 * one URL — the homepage — while the site actually serves 83 indexable pages.
 * Every service page, all 35 area landing pages and all 31 blog posts were
 * absent from it, so the only way Google could find them was by following
 * internal links.
 *
 * Deriving the entries from the same data the routes are built from means the
 * sitemap can no longer drift out of date when a town or post is added.
 */
const SERVICE_SLUGS = [
  "personal-care",
  "companionship",
  "meal-preparation",
  "light-housekeeping",
  "medication-reminders",
  "respite-care",
  "transportation",
  "specialized-support",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<[string, number, MetadataRoute.Sitemap[number]["changeFrequency"]]> = [
    ["", 1.0, "weekly"],
    ["/services", 0.9, "monthly"],
    ["/areas-we-serve", 0.9, "monthly"],
    ["/about-us", 0.7, "monthly"],
    ["/about-owner", 0.6, "yearly"],
    ["/careers", 0.7, "weekly"],
    ["/contact-us", 0.8, "monthly"],
    ["/resources", 0.5, "monthly"],
    ["/blog", 0.7, "weekly"],
    ["/privacy-policy", 0.3, "yearly"],
  ];

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...Object.keys(cityDirectory).map((slug) => ({
      url: `${BASE}/areas-we-serve/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

import { cityDirectory, type CityData } from "@/data/site-content";

/**
 * The headquarters town. Its content lives on the homepage, which is the page
 * that ranks for "home care Westchester IL"; /areas-we-serve/westchester-il
 * permanently redirects to `/` (next.config.js) so the two don't compete.
 */
export const HOME_CITY_SLUG = "westchester-il";

/** Where a town's page lives. Always build town links with this. */
export function cityHref(slug: string): string {
  return slug === HOME_CITY_SLUG ? "/" : `/areas-we-serve/${slug}`;
}

/**
 * Neighbouring towns, same county first, for cross-links and FAQ copy.
 *
 * Linking siblings to each other gives every town page a handful of
 * contextual inbound links and is genuinely useful to a reader whose
 * town is a few minutes down the road.
 */
export function nearbyCities(current: CityData, limit = 6): CityData[] {
  const allCities = Object.values(cityDirectory);

  const sameCounty = allCities.filter(
    (c) => c.county === current.county && c.slug !== current.slug,
  );
  const rest = allCities.filter(
    (c) => c.county !== current.county && c.slug !== current.slug,
  );
  return [...sameCounty, ...rest].slice(0, limit);
}

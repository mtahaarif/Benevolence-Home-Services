import type { CityData } from "@/data/site-content";

/** "A", "A and B", "A, B and C" — reads naturally in running copy. */
export function joinNatural(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/**
 * Short ZIP label for cards and badges: "60301, 60302, 60304", or the town's
 * coverage note when its coverage isn't defined by ZIP (e.g. Chicago).
 */
export function zipLabel(city: Pick<CityData, "zipCodes" | "coverageNote">): string {
  return city.zipCodes.length ? city.zipCodes.join(", ") : city.coverageNote ?? "";
}

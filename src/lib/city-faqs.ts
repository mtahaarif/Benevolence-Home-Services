import type { FAQItem } from "@/components/faq-accordion";
import { contactDetails, type CityData } from "@/data/site-content";
import { joinNatural } from "@/lib/format";
import { HOME_CITY_SLUG } from "@/lib/cities";

/** "ZIP code 60154" / "ZIP codes 60301, 60302 and 60304". */
function zipPhrase(city: CityData): string {
  return city.zipCodes.length === 1
    ? `ZIP code ${city.zipCodes[0]}`
    : `ZIP codes ${joinNatural(city.zipCodes)}`;
}

/** "Select Chicago neighborhoods" → "select Chicago neighborhoods" mid-sentence. */
function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

/**
 * Per-city FAQs.
 *
 * Every answer is built from that city's own record (its county, ZIPs,
 * hospitals and neighbouring towns), so each page carries genuinely distinct
 * local detail rather than spun boilerplate.
 *
 * Claims about speed and round-the-clock staffing depend on the town's tier:
 * only "core" towns near the Westchester office get the fast-start promise.
 * "Extended" towns are told plainly that start dates depend on caregiver
 * availability nearby, because a family in Gurnee or Joliet who is promised a
 * next-day start and doesn't get one is worse off than one told the truth.
 */
export function cityFaqs(city: CityData, neighbours: readonly CityData[]): FAQItem[] {
  const nearby = joinNatural(neighbours.slice(0, 3).map((c) => c.name));
  const isCore = city.tier === "core";

  const proximity =
    city.slug === HOME_CITY_SLUG
      ? `Our office is right here in ${city.name}, so`
      : `Because our office is in Westchester, ${city.name} sits inside our core ${city.county} service radius, so`;

  const startTime: FAQItem = isCore
    ? {
        question: `How quickly can home care start in ${city.name}?`,
        answer: `In most cases care in ${city.name} can begin within 24 to 48 hours of your in-home consultation. ${proximity} we can usually schedule an assessment within a day — and sooner when a hospital or rehab discharge is already scheduled. Call ${contactDetails.phone} and we will tell you honestly what we can staff and when.`,
      }
    : {
        question: `How quickly can home care start in ${city.name}?`,
        answer: `${city.name} is part of our extended ${city.county} service area. We do serve ${city.name} families, but how soon care can start depends on caregiver availability near ${city.name}, so we don't promise a start date before we've talked with you. Call ${contactDetails.phone} and we will confirm a realistic start date on that first call, including when a hospital or rehab discharge is already scheduled.`,
      };

  const coverage: FAQItem = city.zipCodes.length
    ? {
        question: `Which ${city.name} ZIP codes do you cover?`,
        answer: `We serve ${zipPhrase(city)} in ${city.name}, along with the surrounding ${city.county} communities of ${nearby}. Caregivers are matched to families by travel distance so the same small team returns to your home rather than a different face each visit, which matters enormously for clients living with memory loss.`,
      }
    : {
        question: `Which parts of ${city.name} do you cover?`,
        answer: `We serve ${lowerFirst(city.coverageNote ?? `parts of ${city.name}`)} rather than every part of the city, so please call ${contactDetails.phone} to confirm your address is covered. We also serve the surrounding ${city.county} communities of ${nearby}. Caregivers are matched to families by travel distance so the same small team returns to your home rather than a different face each visit.`,
      };

  return [
    startTime,
    coverage,
    {
      question: `Do you help with hospital discharges in ${city.name}?`,
      answer: `Yes. We ${isCore ? "regularly coordinate" : "can coordinate"} the return home for ${city.name} residents discharged from ${joinNatural(city.hospitals)}. A Registered Nurse reviews the discharge instructions, sets up the home for safe mobility, arranges medication reminders, and stays in contact through the first weeks of recovery — the window when avoidable readmissions most often happen.`,
    },
    {
      question: `What does in-home care in ${city.name} cost?`,
      answer: `Cost depends on how many hours you need and whether care is hourly, overnight, or live-in, so we quote after the assessment rather than before it. The in-home consultation itself is free and carries no obligation. We provide non-medical home care, which is typically paid privately or through long-term care insurance; we are glad to walk ${city.name} families through what their policy covers.`,
    },
    {
      question: `Who comes to the home for the ${city.name} assessment?`,
      answer: `A Care Coordinator or our supervising Registered Nurse conducts every assessment personally. That is the difference between nurse-led care and a scheduler-led agency: a clinician looks at fall risks, medication routines, and early warning signs in the home itself, then builds the care plan and keeps adjusting it as needs change. ${
        isCore
          ? `Caregivers are available across ${city.name} 24 hours a day, including weekends and holidays.`
          : `Care can be scheduled around the clock, including weekends and holidays, subject to caregiver availability near ${city.name}.`
      }`,
    },
  ];
}

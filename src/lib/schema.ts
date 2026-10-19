import { business, socialLinks } from "@/data/business";
import { cityDirectory, homeCareServices, type CityData } from "@/data/site-content";

/**
 * Structured-data builders.
 *
 * The business is declared exactly once, by `organizationSchema()` in the root
 * layout, under the stable `ORG_ID`. Every other node (services, posts) points
 * at it with `{ "@id": ORG_ID }` instead of redeclaring it, so Google resolves
 * the whole site to one entity rather than a set of conflicting copies.
 */

export const SITE_URL = "https://www.benevolencehomeservices.com";
export const ORG_ID = `${SITE_URL}/#organization`;

type Schema = Record<string, unknown>;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function citySchema(city: Pick<CityData, "name">): Schema {
  return {
    "@type": "City",
    name: `${city.name}, IL`,
    sameAs: `https://en.wikipedia.org/wiki/${encodeURIComponent(city.name.replace(/\s+/g, "_"))},_Illinois`,
  };
}

/** The four served counties as AdministrativeArea nodes. */
export function countyAreas(): Schema[] {
  return business.servedCounties.map((county) => ({
    "@type": "AdministrativeArea",
    name: `${county} County, Illinois`,
  }));
}

function postalAddress(): Schema {
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  };
}

export function organizationSchema(): Schema {
  const sameAs: string[] = socialLinks.map((s) => s.href);
  if (business.gbpUrl) sameAs.push(business.gbpUrl);

  return {
    "@context": "https://schema.org",
    "@type": "HomeHealthCare",
    "@id": ORG_ID,
    name: business.name,
    alternateName: business.legalName,
    url: SITE_URL,
    logo: absoluteUrl(business.logo),
    image: absoluteUrl(business.logo),
    description:
      "Nurse-led, faith-based non-medical home care and healthcare staffing serving seniors across Cook, DuPage, Lake and Will Counties from Westchester, Illinois.",
    telephone: business.phoneE164,
    email: business.email,
    priceRange: "$$",
    address: postalAddress(),
    ...(business.geo
      ? { geo: { "@type": "GeoCoordinates", ...business.geo } }
      : {}),
    ...(business.gbpUrl ? { hasMap: business.gbpUrl } : {}),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...business.openingHours.days],
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    },
    areaServed: [...countyAreas(), ...Object.values(cityDirectory).map(citySchema)],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "In-Home Care Services",
      itemListElement: homeCareServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
    sameAs,
  };
}

export function serviceSchema({
  name,
  serviceType,
  path,
  description,
  areaServed,
  offerCatalog,
}: {
  name: string;
  serviceType: string;
  path: string;
  description?: string;
  areaServed: Schema | Schema[];
  offerCatalog?: Schema;
}): Schema {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    url,
    ...(description ? { description } : {}),
    provider: { "@id": ORG_ID },
    areaServed,
    ...(offerCatalog ? { hasOfferCatalog: offerCatalog } : {}),
  };
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

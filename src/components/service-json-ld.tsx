import { JsonLd } from "@/components/json-ld";
import { homeCareServices } from "@/data/site-content";
import { breadcrumbSchema, countyAreas, faqSchema, serviceSchema } from "@/lib/schema";

type ServiceSlug = (typeof homeCareServices)[number]["slug"];

/**
 * Structured data for a single service page: the Service (provided by the
 * organization declared in the root layout), its FAQs and its breadcrumb.
 */
export function ServiceJsonLd({
  slug,
  faqs = [],
}: {
  slug: ServiceSlug;
  faqs?: readonly { question: string; answer: string }[];
}) {
  const service = homeCareServices.find((s) => s.slug === slug)!;
  const path = `/services/${service.slug}`;

  return (
    <JsonLd
      data={[
        serviceSchema({
          name: service.title,
          serviceType: service.title,
          path,
          description: service.body,
          areaServed: countyAreas(),
        }),
        ...(faqs.length ? [faqSchema(faqs)] : []),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path },
        ]),
      ]}
    />
  );
}

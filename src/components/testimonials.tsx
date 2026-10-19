import { PageShell, SectionHeading } from "@/components/site-shell";
import { cityDirectory, testimonials } from "@/data/site-content";

/**
 * Family testimonials.
 *
 * On a town page, quotes from families in that town come first; if there are
 * none, site-wide quotes (no town) are shown instead. Renders nothing at all
 * when there is nothing real to show, so the section can be placed now and
 * fills in as the owner adds testimonials in site-content.ts.
 */
export function Testimonials({ citySlug }: { citySlug?: string }) {
  const local = citySlug ? testimonials.filter((t) => t.citySlug === citySlug) : [];
  const items = local.length ? local : testimonials.filter((t) => !t.citySlug);
  if (!items.length) return null;

  const town = citySlug ? cityDirectory[citySlug]?.name : undefined;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <PageShell>
        <SectionHeading
          centered
          eyebrow="Family Stories"
          title={local.length && town ? `What ${town} Families Say` : "What Families Say"}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((t) => {
            const credit = [t.name, t.citySlug ? cityDirectory[t.citySlug]?.name : undefined]
              .filter(Boolean)
              .join(", ");
            return (
              <figure
                key={`${t.name}-${t.quote.slice(0, 24)}`}
                className="rounded-[2rem] border border-slate-100 bg-slate-50/80 p-8 shadow-sm"
              >
                <blockquote className="text-sm sm:text-base leading-relaxed text-slate-700">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-widest text-[#0c3e72]">
                  {t.service ? `${credit} · ${t.service}` : credit}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}

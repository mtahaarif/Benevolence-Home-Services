"use client";

import { useScrollSpy } from "@/components/use-scroll-spy";

/**
 * Sticky table of contents on /privacy-policy. The only interactive part of
 * that page, split out so the policy text renders on the server.
 */
export function PolicyNav({ items }: { items: readonly { id: string; name: string }[] }) {
  const { activeId, scrollTo } = useScrollSpy(items.map((item) => item.id), "-25% 0px -70% 0px");

  return (
    <aside className="w-full lg:w-[32%] sticky top-[100px] z-40 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl border lg:border-0 border-slate-200/60 shadow-sm lg:shadow-none">
      <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pb-2 lg:pb-0 scrollbar-hide">
        <h3 className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 pl-4">
          Document Navigation
        </h3>

        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-xs sm:text-sm font-semibold tracking-wide ${
                isActive
                  ? "bg-[#0a2540] text-white shadow-md shadow-blue-950/10"
                  : "bg-transparent text-slate-500 hover:bg-white hover:text-brand-ink"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

"use client";

import { useScrollSpy } from "@/components/use-scroll-spy";

/**
 * Sticky county sidebar on /areas-we-serve. The only interactive part of that
 * page, split out so the town directory itself renders on the server.
 */
export function CountyNav({ items }: { items: readonly { id: string; name: string; count: number }[] }) {
  const { activeId, scrollTo } = useScrollSpy(items.map((item) => item.id), "-30% 0px -65% 0px");

  return (
    <aside className="w-full lg:w-[30%] sticky top-[100px] z-40 bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-0 border-slate-200/60 shadow-sm lg:shadow-none">
      <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide">
        <h3 className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5 pl-4">
          Filter By Service District
        </h3>

        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                isActive
                  ? "bg-[#0a2540] text-white shadow-[0_10px_25px_rgba(10,37,64,0.15)]"
                  : "bg-transparent text-slate-600 hover:bg-white hover:text-brand-ink border border-transparent hover:border-slate-200/50"
              }`}
            >
              <span className="font-bold text-xs sm:text-sm tracking-wide">{item.name}</span>
              <div className="flex items-center gap-2.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                  isActive ? "bg-white/10 text-blue-200" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200/60"
                }`}>
                  {`${item.count} Areas`}
                </span>
                <span className={`hidden lg:block transition-transform duration-300 ${isActive ? "translate-x-1 text-brand-orange" : "text-slate-300 group-hover:translate-x-1"}`}>
                  &rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

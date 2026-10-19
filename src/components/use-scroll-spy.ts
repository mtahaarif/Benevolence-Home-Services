"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the sections with the given ids is currently in the reading
 * band of the viewport (defined by `rootMargin`), for sticky table-of-contents
 * sidebars. Returns the active id and a smooth-scroll helper that leaves room
 * for the fixed header.
 */
export function useScrollSpy(ids: readonly string[], rootMargin: string) {
  const [activeId, setActiveId] = useState(ids[0]);
  // Callers pass a fresh array each render; a string key keeps the effect
  // from re-subscribing unless the ids actually change.
  const idsKey = ids.join("|");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin },
    );

    idsKey.split("|").forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [idsKey, rootMargin]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return { activeId, scrollTo };
}

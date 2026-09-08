"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

type RevealState = "static" | "pending" | "shown";

/**
 * Fades content in as it scrolls into view.
 *
 * PERFORMANCE: the previous version rendered every wrapped block at opacity 0
 * on the server and only revealed it once an IntersectionObserver fired after
 * hydration. That meant above-the-fold content — including LCP candidates —
 * stayed invisible until JavaScript ran, and it disappeared entirely for
 * crawlers and users without JS.
 *
 * The initial render is now "static": fully opaque, no animation classes at
 * all. Only after mount, and only for elements that genuinely start below the
 * fold, do we hide the block and hand it to the observer. Anything already on
 * screen is left untouched, so first paint is never delayed.
 */
export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Respect the user's motion preference — never hide content from them.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already visible on load: leave it opaque so it stays a valid LCP element.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.05, rootMargin: "-20px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass =
    state === "pending" ? "reveal-pending" : state === "shown" ? "reveal-shown" : "";

  return (
    <div ref={elementRef} className={`${revealClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

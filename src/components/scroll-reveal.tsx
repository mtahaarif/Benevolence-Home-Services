"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.02, // Triggers immediately upon viewport entry edge
        rootMargin: "-20px 0px -40px 0px", // Asymmetric margins to favor downward scrolling flows
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-[1200ms] cubic-bezier(0.215, 0.61, 0.355, 1) will-change-[opacity,transform] ${
        isIntersecting
          ? "opacity-100 translate-y-0 skew-y-0 scale-100"
          : "opacity-0 translate-y-16 skew-y-2 scale-[0.97]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
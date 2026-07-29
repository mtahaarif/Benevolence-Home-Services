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
      className={`transition-all duration-[1000ms] ease-out will-change-[opacity,transform,filter] ${
        isIntersecting
          ? "opacity-100 translate-y-0 blur-none"
          : "opacity-0 translate-y-10 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
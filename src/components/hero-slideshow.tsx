"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * The rotating overlay slides on the homepage hero.
 *
 * Only the rotation needs to run in the browser, so this island holds the
 * timer and nothing else. The first slide is rendered by `HeroSection` on the
 * server as a plain priority image and sits underneath these overlays, which
 * keeps the LCP candidate entirely server-rendered.
 */
export default function HeroSlideshow({
  images,
  imageAlts,
  slideCount,
}: {
  images: string[];
  /** Alt text for each image in `images`, in the same order. */
  imageAlts: string[];
  slideCount: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <>
      {images.map((src, index) => {
        const slideIndex = index + 1;
        const isActive = slideIndex === currentIndex;

        return (
          <div
            key={src}
            aria-hidden={!isActive}
            className={`absolute inset-0 h-full w-full overflow-hidden transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 -z-10"
            }`}
          >
            <Image
              src={src}
              alt={imageAlts[index]}
              width={1920}
              height={899}
              loading="lazy"
              fetchPriority="low"
              quality={65}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
              className="object-cover object-center w-full h-full"
            />
          </div>
        );
      })}
    </>
  );
}

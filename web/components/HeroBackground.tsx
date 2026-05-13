"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroBackground({
  src,
  alt,
  /** 0 = no parallax. 0.25 = image moves 25% of scroll speed (subtle). */
  speed = 0.25,
}: {
  src: string;
  alt: string;
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(true); // start true → SSR safe (no offset)

  // Track prefers-reduced-motion live.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll-coupled translate via rAF (avoids React re-renders during scroll).
  useEffect(() => {
    if (reduced) {
      if (innerRef.current) innerRef.current.style.transform = "translate3d(0,0,0)";
      return;
    }
    let frame = 0;
    const update = () => {
      const el = containerRef.current;
      const inner = innerRef.current;
      if (!el || !inner) return;
      const rect = el.getBoundingClientRect();
      // Only run while the section is anywhere near the viewport.
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const offset = -rect.top * speed;
      inner.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={innerRef}
        className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

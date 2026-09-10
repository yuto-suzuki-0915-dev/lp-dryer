"use client";

import { useEffect, useRef, useState } from "react";

type CountUpValueProps = {
  end: number;
  decimals: number;
  className?: string;
};

const format = (value: number, decimals: number) => value.toFixed(decimals);

export default function CountUpValue({ end, decimals, className }: CountUpValueProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const start = () => {
      const startedAt = performance.now();
      const duration = 1200;

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(end * eased);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight || !("IntersectionObserver" in window)) {
      return;
    }

    setValue(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [decimals, end]);

  return <span ref={elementRef} className={className}>{format(value, decimals)}</span>;
}

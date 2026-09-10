"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "./InViewReveal.module.css";

type InViewRevealProps = {
  children: ReactNode;
  direction: "up" | "left" | "right";
  delay?: number;
  className?: string;
  rootMargin?: string;
  initiallyHidden?: boolean;
};

export default function InViewReveal({
  children,
  direction,
  delay = 0,
  className,
  rootMargin = "0px",
  initiallyHidden = false,
}: InViewRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    let revealFrame: number | undefined;
    let visibleFrame: number | undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      revealFrame = requestAnimationFrame(() => {
        setReady(true);
        visibleFrame = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        if (revealFrame) cancelAnimationFrame(revealFrame);
        if (visibleFrame) cancelAnimationFrame(visibleFrame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        revealFrame = requestAnimationFrame(() => {
          visibleFrame = requestAnimationFrame(() => setVisible(true));
        });
        observer.disconnect();
      },
      { rootMargin, threshold: 0.2 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (revealFrame) cancelAnimationFrame(revealFrame);
      if (visibleFrame) cancelAnimationFrame(visibleFrame);
    };
  }, [rootMargin]);

  return (
    <div
      ref={elementRef}
      className={`${styles.reveal} ${className ?? ""}`}
      data-direction={direction}
      data-initially-hidden={initiallyHidden ? "true" : undefined}
      data-ready={ready ? "true" : undefined}
      data-visible={visible ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

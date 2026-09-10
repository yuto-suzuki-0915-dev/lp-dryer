"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import styles from "./SolutionSection.module.css";

type Phase = "idle" | "measuring" | "complete";
type Side = "left" | "right";

type DimensionLineProps = {
  side: Side;
  value: number;
};

type SolutionComparisonProps = {
  footnote?: ReactNode;
};

function DimensionSegment({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className={`${styles.dimensionSegment} ${position === "top" ? styles.dimensionSegmentTop : styles.dimensionSegmentBottom}`}
      aria-hidden="true"
    >
      <span className={styles.dimensionShaft} />
      <span className={styles.dimensionCap} />
    </div>
  );
}

function DimensionLine({ side, value }: DimensionLineProps) {
  const [integer, decimal] = value.toFixed(1).split(".");

  return (
    <div className={`${styles.dimension} ${side === "left" ? styles.dimensionLeft : styles.dimensionRight}`}>
      <div className={styles.dimensionRail}>
        <DimensionSegment position="top" />
        <p className={styles.dimensionValue}>
          <strong aria-label={`${integer}.${decimal} mm`}>
            <span className={styles.dimensionInteger} aria-hidden="true">{integer}</span>
            <span className={styles.dimensionDecimalPoint} aria-hidden="true">.</span>
            <span className={styles.dimensionFraction} aria-hidden="true">{decimal}</span>
          </strong>
          <span>mm</span>
        </p>
        <DimensionSegment position="bottom" />
      </div>
    </div>
  );
}

export default function SolutionComparison({ footnote }: SolutionComparisonProps) {
  const comparisonRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasStartedRef = useRef(false);
  const motionAllowedRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("complete");
  const [phoneValue, setPhoneValue] = useState(149.6);
  const [dryerValue, setDryerValue] = useState(151);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    motionAllowedRef.current = !reducedMotion;
    if (reducedMotion) return;

    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      setPhoneValue(0);
      setDryerValue(0);
      setPhase("idle");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const element = comparisonRef.current;
    if (!element || !motionAllowedRef.current) return;

    const start = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      setPhase("measuring");

      const startedAt = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setPhoneValue(149.6 * eased);
        setDryerValue(151 * eased);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(tick);
          return;
        }

        setPhoneValue(149.6);
        setDryerValue(151);
        setPhase("complete");
      };

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observerRef.current?.disconnect();
        start();
      },
      { threshold: 0.25 },
    );
    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={comparisonRef} className={styles.comparison} data-phase={phase}>
      <div className={styles.comparisonGrid}>
        <article className={`${styles.comparisonItem} ${styles.phoneItem}`}>
          <div className={styles.measurementArea}>
            <DimensionLine side="left" value={phoneValue} />
            <div className={styles.phoneVisual}>
              <Image
                src="/images/products/iphone_17_front_realistic_v01.png"
                alt="iPhone 17の正面"
                width={1024}
                height={1536}
                sizes="(max-width: 430px) 24vw, 103px"
                className={styles.phoneImage}
              />
            </div>
          </div>
          <p className={styles.productName}>iPhone 17</p>
        </article>

        <article className={`${styles.comparisonItem} ${styles.dryerItem}`}>
          <div className={styles.measurementArea}>
            <div className={styles.productVisual}>
              <Image
                src="/images/products/airfold_duo_ivory_folded_body_v03.png"
                alt="折りたたんだAIRFOLD DUO"
                width={538}
                height={1273}
                sizes="(max-width: 430px) 24vw, 103px"
                className={styles.product}
              />
            </div>
            <DimensionLine side="right" value={dryerValue} />
          </div>
          <p className={styles.productName}>AIRFOLD DUO</p>
        </article>
      </div>

      <p className={styles.difference}>
        <span className={styles.differenceRule} aria-hidden="true" />
        <span>差はわずか <strong>1.4 mm</strong></span>
        <span className={styles.differenceRule} aria-hidden="true" />
      </p>
      {footnote ? <p className={styles.airflowNote}>{footnote}</p> : null}
    </div>
  );
}

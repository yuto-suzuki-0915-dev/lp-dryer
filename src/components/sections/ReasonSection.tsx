"use client";

import { useState } from "react";
import InViewReveal from "@/components/ui/InViewReveal";
import styles from "./ReasonSection.module.css";

const features = [
  {
    id: "fold",
    number: "01",
    english: "FOLD",
    title: "折りたためる、旅仕様。",
    heading: "バッグに収まる、コンパクト設計。",
    description: "ハンドル部分を折りたたむことで、使わないときはすっきりコンパクトに。スーツケースや旅行バッグの限られたスペースにも収まりやすく、いつものドライヤーを旅先まで持ち運べます。",
  },
  {
    id: "airflow",
    number: "02",
    english: "POWER",
    title: "パワフル風量で、衣類乾燥にも。",
    heading: "小さくても、乾かす力は妥協しない。",
    description: "コンパクトなボディから、髪を素早く乾かすパワフルな風を。旅先で髪を乾かす時間を短縮するだけでなく、濡れた衣類やタオルを乾かしたい場面にも活躍します。",
  },
  {
    id: "care",
    number: "03",
    english: "CARE",
    title: "髪をいたわる、温度管理。",
    heading: "旅先でも、いつもの仕上がりへ。",
    description: "髪に当たる熱をコントロールし、乾かしすぎによる負担を抑える温度管理機能を搭載。ホテルの備え付けドライヤーでは気になりやすい、パサつきやまとまりにくさにも配慮します。",
  },
] as const;

type Feature = (typeof features)[number];
type FeatureId = Feature["id"];

const WIDTH = 430;
const HALF_HEIGHT = 60 * Math.sqrt(3) / 2;
const PITCH = 124;
const FIRST_Y = 64;
const TEXT_WEIGHT_SHIFT = 16;
const OUTLINE_DROP = HALF_HEIGHT + 8;
const OUTLINE_RUN = OUTLINE_DROP / Math.sqrt(3);
const ROW_BOUNDS = [
  { start: 0, end: 126 },
  { start: 126, end: 250 },
  { start: 250, end: 386 },
] as const;

const hexagon = (radius: number) => {
  const height = radius * Math.sqrt(3) / 2;
  return `${85 - radius},0 ${85 - radius / 2},${-height} ${85 + radius / 2},${-height} ${85 + radius},0 ${85 + radius / 2},${height} ${85 - radius / 2},${height}`;
};

const ribbon = `M25 0 L55 ${-HALF_HEIGHT} H115 L145 0 H397 L367 ${HALF_HEIGHT} H55 Z`;
const outline = `M8 0 H17 L${17 + OUTLINE_RUN} ${OUTLINE_DROP} H${413 - OUTLINE_RUN} L413 0 H422`;
const joinLines = `M422 ${FIRST_Y} l${-PITCH / (2 * Math.sqrt(3))} ${PITCH / 2} l${PITCH / (2 * Math.sqrt(3))} ${PITCH / 2} M8 ${FIRST_Y + PITCH} l${PITCH / (2 * Math.sqrt(3))} ${PITCH / 2} l${-PITCH / (2 * Math.sqrt(3))} ${PITCH / 2}`;

function FeatureGraphic({ feature, index, showJoinLines }: { feature: Feature; index: number; showJoinLines: boolean }) {
  const { start, end } = ROW_BOUNDS[index];
  const y = FIRST_Y + index * PITCH;
  const reverse = index === 1;
  const textX = reverse ? WIDTH - 247 + TEXT_WEIGHT_SHIFT / 2 : 247 - TEXT_WEIGHT_SHIFT;
  const numberX = reverse ? WIDTH - 85 : 85;
  const gradientId = `reason-${feature.id}`;

  return (
    <svg className={styles.featureGraphic} viewBox={`0 ${start} ${WIDTH} ${end - start}`} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${gradientId}-glass`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.96" />
          <stop offset="0.52" stopColor="#f8ffff" stopOpacity="0.86" />
          <stop offset="1" stopColor="#e5f6f8" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={`${gradientId}-reflection`} cx="25%" cy="12%" r="72%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gradientId}-ribbon-surface`} x1="120" y1="0" x2="397" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#468086" stopOpacity="0.8" />
          <stop offset="0.32" stopColor="#407b81" stopOpacity="0.79" />
          <stop offset="1" stopColor="#3a777d" stopOpacity="0.78" />
        </linearGradient>
        <linearGradient id={`${gradientId}-ribbon-depth`} x1="0" y1="-52" x2="0" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.025" />
          <stop offset="0.58" stopColor="#174b53" stopOpacity="0" />
          <stop offset="1" stopColor="#103f46" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id={`${gradientId}-ribbon-joint-light`} cx="132" cy="0" r="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e7f7f5" stopOpacity="0.16" />
          <stop offset="0.46" stopColor="#b9e1e1" stopOpacity="0.065" />
          <stop offset="1" stopColor="#b9e1e1" stopOpacity="0" />
        </radialGradient>
      </defs>
      {showJoinLines && <path className={styles.joinLine} d={joinLines} />}
      <g>
        <g transform={`translate(${reverse ? WIDTH : 0} ${y}) scale(${reverse ? -1 : 1} 1)`}>
          <path className={styles.ribbon} d={ribbon} fill={`url(#${gradientId}-ribbon-surface)`} />
          <path className={styles.ribbonTexture} d={ribbon} fill={`url(#${gradientId}-ribbon-depth)`} />
          <path className={styles.ribbonTexture} d={ribbon} fill={`url(#${gradientId}-ribbon-joint-light)`} />
          <path className={styles.outline} d={outline} />
          <path className={styles.accent} d={`M${413 - OUTLINE_RUN} ${OUTLINE_DROP} L413 0`} />
          <circle className={styles.node} cx="8" cy="0" r="3" />
          <circle className={styles.goldNode} cx="422" cy="0" r="3" />
          <polygon className={styles.glass} points={hexagon(51)} fill={`url(#${gradientId}-glass)`} />
          <polygon points={hexagon(51)} fill={`url(#${gradientId}-reflection)`} />
          <polygon className={styles.bevel} points={hexagon(47)} />
        </g>
        <text className={styles.number} x={numberX} y={y + 1}>{feature.number}</text>
        <text className={styles.english} x={numberX} y={y + 17}>{feature.english}</text>
        <text className={styles.ribbonTitle} x={textX} y={y + 31}>{feature.title}</text>
      </g>
    </svg>
  );
}

export default function ReasonSection() {
  const [openId, setOpenId] = useState<FeatureId | null>(null);

  return (
    <section className={styles.reason} aria-labelledby="reason-title">
      <div className={styles.introduction}>
        <p className={styles.label}>REASON</p>
        <h2 id="reason-title" className={styles.title}>
          選ばれる、<span className={styles.titleHighlight}>3つの機能。</span>
        </h2>
      </div>

      <div className={styles.featureMap}>
        <div className={styles.featureList}>
          {features.map((feature, index) => {
            const isOpen = openId === feature.id;
            const reverse = index === 1;
            return (
              <InViewReveal key={feature.id} direction={reverse ? "right" : "left"} delay={index * 110}>
                <article className={styles.featureItem}>
                  <button
                    id={`${feature.id}-trigger`}
                    className={`${styles.featureButton} ${reverse ? styles.featureButtonReverse : ""}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${feature.id}-panel`}
                    onClick={() => setOpenId((current) => current === feature.id ? null : feature.id)}
                  >
                    <FeatureGraphic feature={feature} index={index} showJoinLines={openId === null} />
                    <span className={styles.detailHint} aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    <span className={styles.srOnly}>
                      {feature.number} {feature.english}：{feature.title}の詳細を{isOpen ? "閉じる" : "表示する"}
                    </span>
                  </button>

                  <section
                    id={`${feature.id}-panel`}
                    className={`${styles.featurePanel} ${isOpen ? styles.featurePanelOpen : ""}`}
                    role="region"
                    aria-labelledby={`${feature.id}-trigger`}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.panelContent}>
                      <p className={styles.panelLabel}>{feature.number} {feature.english}</p>
                      <h3 className={styles.panelTitle}>{feature.heading}</h3>
                      <p className={styles.panelBody}>{feature.description}</p>
                    </div>
                  </section>
                </article>
              </InViewReveal>
            );
          })}
        </div>

        <noscript>
          <div className={styles.noScriptPanels}>
            {features.map((feature) => (
              <section key={feature.id} className={styles.noScriptPanel}>
                <p className={styles.panelLabel}>{feature.number} {feature.english}</p>
                <h3 className={styles.panelTitle}>{feature.heading}</h3>
                <p className={styles.panelBody}>{feature.description}</p>
              </section>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}

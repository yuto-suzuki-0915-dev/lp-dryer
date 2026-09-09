import styles from "./ReasonSection.module.css";

const features = [
  { id: "fold", number: "01", english: "FOLD", title: "折りたためる、旅仕様。" },
  { id: "airflow", number: "02", english: "POWER", title: "パワフル風量で、衣類乾燥にも。" },
  { id: "care", number: "03", english: "CARE", title: "髪をいたわる、温度管理。" },
] as const;

// The shared viewBox preserves equilateral hexagons and 60-degree diagonals.
const WIDTH = 430;
const HALF_HEIGHT = 60 * Math.sqrt(3) / 2;
const PITCH = 124;
const FIRST_Y = 64;
const TEXT_WEIGHT_SHIFT = 16;
const OUTLINE_DROP = HALF_HEIGHT + 8;
const OUTLINE_RUN = OUTLINE_DROP / Math.sqrt(3);

const hexagon = (radius: number) => {
  const height = radius * Math.sqrt(3) / 2;
  return `${85 - radius},0 ${85 - radius / 2},${-height} ${85 + radius / 2},${-height} ${85 + radius},0 ${85 + radius / 2},${height} ${85 - radius / 2},${height}`;
};

// Hexagonal head and lower-half ribbon share one continuous silhouette.
const ribbon = `M25 0 L55 ${-HALF_HEIGHT} H115 L145 0 H397 L367 ${HALF_HEIGHT} H55 Z`;
const outline = `M8 0 H17 L${17 + OUTLINE_RUN} ${OUTLINE_DROP} H${413 - OUTLINE_RUN} L413 0 H422`;

export default function ReasonSection() {
  return (
    <section className={styles.reason} aria-labelledby="reason-title">
      <div className={styles.introduction}>
        <p className={styles.label}>REASON</p>
        <h2 id="reason-title" className={styles.title}>
          選ばれる、<span className={styles.titleHighlight}>3つの機能。</span>
        </h2>
      </div>
      <div className={styles.featureMap}>
        <svg className={styles.infographic} viewBox="0 0 430 386" role="img" aria-labelledby="reason-graphic-title reason-graphic-desc">
          <title id="reason-graphic-title">AIRFOLD DUOの3つの機能</title>
          <desc id="reason-graphic-desc">
            {features.map((feature) => `${feature.number} ${feature.english}：${feature.title}`).join("。")}
          </desc>
          <defs>
            <linearGradient id="reason-glass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0" stopColor="#fff" stopOpacity="0.96" />
              <stop offset="0.52" stopColor="#f8ffff" stopOpacity="0.86" />
              <stop offset="1" stopColor="#e5f6f8" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="reason-reflection" cx="25%" cy="12%" r="72%">
              <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="reason-ribbon-surface" x1="120" y1="0" x2="397" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#468086" stopOpacity="0.8" />
              <stop offset="0.32" stopColor="#407b81" stopOpacity="0.79" />
              <stop offset="1" stopColor="#3a777d" stopOpacity="0.78" />
            </linearGradient>
            <linearGradient id="reason-ribbon-depth" x1="0" y1="-52" x2="0" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.025" />
              <stop offset="0.58" stopColor="#174b53" stopOpacity="0" />
              <stop offset="1" stopColor="#103f46" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="reason-ribbon-joint-light" cx="132" cy="0" r="58" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#e7f7f5" stopOpacity="0.16" />
              <stop offset="0.46" stopColor="#b9e1e1" stopOpacity="0.065" />
              <stop offset="1" stopColor="#b9e1e1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g aria-hidden="true">
            {/* Outer nodes connect with the same 60 / 120-degree geometry. */}
            <path className={styles.joinLine} d={`M422 ${FIRST_Y} l${-PITCH / (2 * Math.sqrt(3))} ${PITCH / 2} l${PITCH / (2 * Math.sqrt(3))} ${PITCH / 2} M8 ${FIRST_Y + PITCH} l${PITCH / (2 * Math.sqrt(3))} ${PITCH / 2} l${-PITCH / (2 * Math.sqrt(3))} ${PITCH / 2}`} />
            {features.map((feature, index) => {
              const y = FIRST_Y + index * PITCH;
              const reverse = index === 1;
              const textX = reverse ? WIDTH - 247 + TEXT_WEIGHT_SHIFT / 2 : 247 - TEXT_WEIGHT_SHIFT;
              const numberX = reverse ? WIDTH - 85 : 85;
              return (
                <g key={feature.id}>
                  <g transform={`translate(${reverse ? WIDTH : 0} ${y}) scale(${reverse ? -1 : 1} 1)`}>
                    <path className={styles.ribbon} d={ribbon} fill="url(#reason-ribbon-surface)" />
                    <path className={styles.ribbonTexture} d={ribbon} fill="url(#reason-ribbon-depth)" />
                    <path className={styles.ribbonTexture} d={ribbon} fill="url(#reason-ribbon-joint-light)" />
                    <path className={styles.outline} d={outline} />
                    <path className={styles.accent} d={`M${413 - OUTLINE_RUN} ${OUTLINE_DROP} L413 0`} />
                    <circle className={styles.node} cx="8" cy="0" r="3" />
                    <circle className={styles.goldNode} cx="422" cy="0" r="3" />
                    <polygon className={styles.glass} points={hexagon(51)} fill="url(#reason-glass)" />
                    <polygon points={hexagon(51)} fill="url(#reason-reflection)" />
                    <polygon className={styles.bevel} points={hexagon(47)} />
                  </g>
                  <text className={styles.number} x={numberX} y={y + 1}>{feature.number}</text>
                  <text className={styles.english} x={numberX} y={y + 17}>{feature.english}</text>
                  <text className={styles.ribbonTitle} x={textX} y={y + 31}>{feature.title}</text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}

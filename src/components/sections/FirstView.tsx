import Image from "next/image";
import styles from "./FirstView.module.css";

type FirstViewProps = {
  purchaseUrl?: string;
};

const features = [
  { id: "compact", title: "COMPACT", text: "折りたたみ設計" },
  { id: "power", title: "POWER", text: "パワフル風量" },
  { id: "wear", title: "2WAY USE", text: "髪も、衣類も。" },
] as const;

const featurePositionClass = {
  compact: styles.compact,
  power: styles.power,
  wear: styles.wear,
};

export default function FirstView({ purchaseUrl }: FirstViewProps) {
  const ctaContent = (
    <>
      <span className={styles.ctaLabel}>AIRFOLD DUOを購入する</span>
      <span className={styles.ctaArrow} aria-hidden="true">
        ›
      </span>
    </>
  );

  return (
    <section className={styles.fv} aria-labelledby="fv-title">
      <div className={styles.stage}>
        <div className={styles.visual}>
          <Image
            src="/images/fv/composite_v08_elnora_v02_foil.png"
            alt="ELNORA AIRFOLD DUOの本体"
            fill
            sizes="(max-width: 430px) 83vw, 357px"
            priority
            className={styles.photo}
          />
        </div>

        <span className={styles.signature} aria-hidden="true">
          Elnora
        </span>

        <h1 id="fv-title" className={styles.copy}>
          <span className={styles.srOnly}>旅先でも、いつもの髪を。</span>
          <span
            className={`${styles.copyStrip} ${styles.copyLead}`}
            aria-hidden="true"
          >
            <span className={`${styles.copyText} ${styles.copyLeadText}`}>
              旅先でも、
            </span>
          </span>
          <span
            className={`${styles.copyStrip} ${styles.copyMain}`}
            aria-hidden="true"
          >
            <span className={`${styles.copyText} ${styles.copyMainText}`}>
              いつもの髪を。
            </span>
          </span>
        </h1>

        <ul className={styles.features} aria-label="商品の特徴">
          {features.map((feature) => (
            <li
              key={feature.id}
              className={`${styles.feature} ${featurePositionClass[feature.id]}`}
            >
              <svg
                className={styles.hexagon}
                viewBox="0 0 100 88"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id={`fv-hex-${feature.id}`}
                    x1="18%"
                    y1="4%"
                    x2="84%"
                    y2="96%"
                  >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
                    <stop offset="52%" stopColor="#f8ffff" stopOpacity="0.66" />
                    <stop offset="100%" stopColor="#e5f6f8" stopOpacity="0.72" />
                  </linearGradient>
                  <linearGradient
                    id={`fv-hex-edge-${feature.id}`}
                    x1="12%"
                    y1="5%"
                    x2="88%"
                    y2="95%"
                  >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.68" />
                    <stop offset="40%" stopColor="#a9dce3" stopOpacity="0.54" />
                    <stop offset="72%" stopColor="#cce9ec" stopOpacity="0.46" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.62" />
                  </linearGradient>
                  <radialGradient
                    id={`fv-hex-shine-${feature.id}`}
                    cx="25%"
                    cy="12%"
                    r="72%"
                  >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                    <stop offset="46%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <polygon
                  className={styles.hexagonAura}
                  stroke={`url(#fv-hex-edge-${feature.id})`}
                  points="25,1 75,1 99,44 75,87 25,87 1,44"
                />
                <polygon
                  className={styles.hexagonFace}
                  fill={`url(#fv-hex-${feature.id})`}
                  stroke={`url(#fv-hex-edge-${feature.id})`}
                  points="25,1 75,1 99,44 75,87 25,87 1,44"
                />
                <polygon
                  className={styles.hexagonShine}
                  fill={`url(#fv-hex-shine-${feature.id})`}
                  points="25,1 75,1 99,44 75,87 25,87 1,44"
                />
                <polygon
                  className={styles.hexagonBevel}
                  points="25,1 75,1 99,44 75,87 25,87 1,44"
                />
              </svg>

              <span className={styles.featureLabel}>
                <span className={styles.featureTitle}>{feature.title}</span>
                <span className={styles.featureText}>{feature.text}</span>
              </span>
            </li>
          ))}
        </ul>

        {purchaseUrl ? (
          <a className={styles.cta} href={purchaseUrl}>
            {ctaContent}
          </a>
        ) : (
          <button className={styles.cta} type="button" disabled>
            {ctaContent}
          </button>
        )}
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./FirstView.module.css";

type FirstViewProps = {
  purchaseUrl?: string;
};

const features = [
  { id: "compact", title: "COMPACT", text: "折りたたみ設計" },
  { id: "power", title: "POWER", text: "パワフル風量" },
  { id: "wear", title: "HAIR & WEAR", text: "髪も、衣類も。" },
] as const;

const featurePositionClass = {
  compact: styles.compact,
  power: styles.power,
  wear: styles.wear,
};

export default function FirstView({ purchaseUrl }: FirstViewProps) {
  const ctaContent = (
    <>
      <span>AIRFOLD DUOを購入する</span>
      <span className={styles.ctaArrow} aria-hidden="true">
        ›
      </span>
    </>
  );

  return (
    <section className={styles.fv} aria-labelledby="fv-title">
      <header className={styles.header}>
        <span className={styles.brand}>ELNORA</span>
        <span className={styles.productName}>AIRFOLD DUO</span>
      </header>

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
          <span className={styles.copyLead} aria-hidden="true">
            旅先でも、
          </span>
          <span className={styles.copyMain} aria-hidden="true">
            いつもの髪を。
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
                <polygon points="25,1 75,1 99,44 75,87 25,87 1,44" />
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

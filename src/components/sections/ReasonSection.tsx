import styles from "./ReasonSection.module.css";

const features = [
  {
    id: "fold",
    number: "01",
    english: "FOLD",
    title: "折りたためる、旅仕様。",
    detail: "151 × 63 × 48 mm",
  },
  {
    id: "airflow",
    number: "02",
    english: "POWER",
    title: "パワフル風量で、衣類乾燥にも。",
    detail: "最大風量 1.8m³/分",
  },
  {
    id: "care",
    number: "03",
    english: "CARE",
    title: "髪をいたわる、温度管理。",
    detail: "旅先でも仕上がりに配慮",
  },
] as const;

export default function ReasonSection() {
  return (
    <section className={styles.reason} aria-labelledby="reason-title">
      <div className={styles.introduction}>
        <p className={styles.label}>REASON</p>
        <h2 id="reason-title" className={styles.title}>
          選ばれる、
          <br />
          3つの機能。
        </h2>
      </div>

      <ol className={styles.featureMap} aria-label="AIRFOLD DUOの3つの機能">
        {features.map((feature, index) => (
          <li
            key={feature.id}
            className={`${styles.feature} ${index % 2 === 1 ? styles.reverse : ""}`}
          >
            <div className={styles.hexagonWrap}>
              <svg
                className={styles.hexagon}
                viewBox="0 0 100 88"
                aria-hidden="true"
                focusable="false"
              >
                <polygon points="25,1 75,1 99,44 75,87 25,87 1,44" />
              </svg>
              <span className={styles.hexagonLabel}>
                <span className={styles.number}>{feature.number}</span>
                <span className={styles.english}>{feature.english}</span>
              </span>
            </div>

            <div className={styles.connector} aria-hidden="true" />

            <div className={styles.featureCopy}>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

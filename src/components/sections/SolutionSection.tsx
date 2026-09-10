import styles from "./SolutionSection.module.css";
import SolutionComparison from "./SolutionComparison";

export default function SolutionSection() {
  return (
    <section className={styles.solution} aria-label="SOLUTION">
      <div className={styles.introduction}>
        <p className={styles.concept}>
          <span>POWER</span>
          <span className={styles.cross}>×</span>
          <span>COMPACT</span>
        </p>
        <p className={styles.copy}>
          1,200Wのパワーを、
          <br />
          <strong>片手サイズで。</strong>
        </p>
        <div className={styles.powerEvidence}>
          <p className={styles.airflowLabel}>
            <span aria-hidden="true" />
            <span>MAX AIRFLOW</span>
            <span aria-hidden="true" />
          </p>
          <p className={styles.airflowClass}>
            一般的な最大風量と同等<sup>＊</sup>
          </p>
          <p className={styles.airflowSpec}>
            <span>最大風量</span>
            <span>1.8 m³/分</span>
          </p>
        </div>
      </div>
      <SolutionComparison footnote="＊同価格帯の一般的な通常サイズドライヤーとの比較を想定した仮表現" />
    </section>
  );
}

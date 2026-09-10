import Image from "next/image";
import CountUpValue from "@/components/ui/CountUpValue";
import styles from "./SolutionSection.module.css";

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
        <p className={styles.airVolume}>最大風量 1.8m³/分</p>
      </div>

      <div className={styles.comparison}>
        <div className={styles.phoneFrame}>
          <Image
            src="/images/products/iphone_17_front_realistic_v01.png"
            alt="iPhone 17の正面"
            width={1024}
            height={1536}
            sizes="(max-width: 430px) 42vw, 181px"
            className={styles.phoneImage}
          />
        </div>

        <Image
          src="/images/products/airfold_duo_ivory_folded_body_v03.png"
          alt="折りたたんだAIRFOLD DUO"
          width={538}
          height={1273}
          sizes="(max-width: 430px) 26vw, 112px"
          className={styles.product}
        />

        <p className={`${styles.comparisonLabel} ${styles.phoneLabel}`}>
          <span>iPhone 17</span>
          <strong>
            <CountUpValue end={149.6} decimals={1} />
            <span className={styles.measurementUnit}>mm</span>
          </strong>
        </p>
        <p className={`${styles.comparisonLabel} ${styles.productLabel}`}>
          <span>AIRFOLD DUO</span>
          <strong>
            <CountUpValue end={151} decimals={0} />
            <span className={styles.measurementUnit}>mm</span>
          </strong>
        </p>
      </div>
    </section>
  );
}

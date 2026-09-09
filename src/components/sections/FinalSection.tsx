import Image from "next/image";
import styles from "./FinalSection.module.css";

type FinalSectionProps = {
  integrated?: boolean;
};

export default function FinalSection({ integrated = false }: FinalSectionProps) {
  return (
    <section className={`${styles.final} ${integrated ? styles.integrated : ""}`} aria-labelledby="final-title">
      <svg className={styles.decoration} viewBox="0 0 1536 984" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="guarantee-arc" x1="150" y1="70" x2="1340" y2="966" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b3cdd0" stopOpacity=".8" />
            <stop offset=".16" stopColor="#fffefa" />
            <stop offset=".44" stopColor="#e6c987" stopOpacity=".8" />
            <stop offset=".65" stopColor="#fffdfa" />
            <stop offset="1" stopColor="#ead19a" stopOpacity=".75" />
          </linearGradient>
          <linearGradient id="guarantee-ray" x1="0" y1="360" x2="285" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffaf0" stopOpacity="0" />
            <stop offset=".42" stopColor="#fffdf4" />
            <stop offset="1" stopColor="#fffdf4" stopOpacity="0" />
          </linearGradient>
          <filter id="guarantee-ray-soft"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>
        <path d="M 288 -2 C 166 137 107 288 115 435 C 111 658 204 832 407 987 M 1138 987 C 1343 886 1488 738 1542 558" stroke="url(#guarantee-arc)" strokeWidth="1.5" />
        <path d="M 290 -2 C 168 137 109 288 117 435 C 113 658 206 832 409 987 M 1140 987 C 1345 886 1490 738 1544 558" stroke="white" strokeOpacity=".55" />
        <path d="M -24 396 Q 160 201 245 48" stroke="url(#guarantee-ray)" strokeWidth="14" filter="url(#guarantee-ray-soft)" />
        <path d="M -24 396 Q 160 201 245 48" stroke="url(#guarantee-ray)" strokeWidth="3" />
      </svg>
      <span className={styles.light + " " + styles.upperLight} aria-hidden="true" />
      <span className={styles.light + " " + styles.lowerLight} aria-hidden="true" />
      <span className={styles.light + " " + styles.rimLight} aria-hidden="true" />

      <p className={styles.label}>GUARANTEE</p>
      <h2 id="final-title" className={styles.title}>1年間の無料保証</h2>

      <div className={styles.certificateContent}>
        <div className={styles.emblem}>
          <Image
            className={styles.emblemArtwork}
            src="/images/final/背景透過素材.png"
            width={538}
            height={511}
            sizes="538px"
            alt="1 YEAR・1年間保証"
            priority
          />
        </div>

        <div className={styles.guaranteeCopy}>
          <p id="guarantee-body" className={styles.description}>
            ご購入日から1年間、通常使用で生じた<br />
            自然故障を無償で修理または交換します。
          </p>
          <p className={styles.note}>
            ※購入証明が必要です。落下・水濡れ・誤使用・改造・<br />
            通常損耗は対象外です。
          </p>
        </div>
      </div>
    </section>
  );
}

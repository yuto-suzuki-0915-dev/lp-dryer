import Image from "next/image";
import styles from "./FinalSection.module.css";

export default function FinalSection() {
  return (
    <section className={styles.final} aria-labelledby="final-title">
      <p className={styles.label}>GUARANTEE</p>
      <h2 id="final-title" className={styles.title}>
        旅先にも、
        <br />
        1年の安心を。
      </h2>

      <div className={styles.stage}>
        <div className={styles.visualFrame}>
          <Image
            src="/images/final/final_satisfied_user_v01.png"
            alt="AIRFOLD DUOを手に、髪の仕上がりに満足している女性"
            fill
            sizes="(max-width: 430px) 90vw, 384px"
            className={styles.visual}
          />
        </div>

        <div className={styles.guaranteeCard}>
          <p className={styles.english}>1 YEAR</p>
          <div className={styles.seal} aria-label="1年間完全保証">
            <strong>1</strong>
            <span>
              年間
              <br />
              完全保証
            </span>
          </div>
          <p id="guarantee-body" className={styles.description}>
            ご購入日から1年間、通常使用で生じた自然故障を無償で修理または交換します。
          </p>
          <p className={styles.note}>
            ※購入証明が必要です。落下・水濡れ・誤使用・改造・通常損耗は対象外です。
          </p>
        </div>

        <p className={styles.closingCopy}>
          AIRFOLD DUOという
          <br />
          選択肢を。
        </p>

        <button
          type="button"
          className={styles.cta}
          aria-describedby="guarantee-body"
          disabled
        >
          AIRFOLD DUOを購入する
          <span className={styles.ctaArrow} aria-hidden="true">
            ›
          </span>
        </button>
      </div>
    </section>
  );
}

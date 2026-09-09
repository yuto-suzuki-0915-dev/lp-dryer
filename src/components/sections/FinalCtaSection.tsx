import styles from "./FinalCtaSection.module.css";

type FinalCtaSectionProps = {
  purchaseUrl?: string;
  integrated?: boolean;
};

export default function FinalCtaSection({ purchaseUrl, integrated = false }: FinalCtaSectionProps) {
  const ctaContent = (
    <>
      <span>AIRFOLD DUOを購入する</span>
      <span className={styles.ctaArrow} aria-hidden="true">→</span>
    </>
  );

  return (
    <section className={`${styles.finalCta} ${integrated ? styles.integrated : ""}`} aria-label="AIRFOLD DUO 購入">
      <div className={styles.introduction}>
        <p className={styles.eyebrow}>BEAUTY TRAVELS FURTHER</p>
        <h2 id="final-cta-title" className={styles.title}>旅先でも、いつもの髪を。</h2>
      </div>

      <div className={styles.purchaseBlock}>
        {purchaseUrl ? (
          <a className={styles.cta} href={purchaseUrl}>
            {ctaContent}
          </a>
        ) : (
          <button className={styles.cta} type="button" disabled>
            {ctaContent}
          </button>
        )}

        <ul className={styles.conditions} aria-label="購入条件">
          <li>
            <svg viewBox="0 0 24 28" aria-hidden="true">
              <path d="M12 1.8 21 5v7.1c0 6.2-3.8 10.9-9 13.3-5.2-2.4-9-7.1-9-13.3V5l9-3.2Z" />
              <path d="m8.4 13 2.3 2.4 5.1-5.4" />
            </svg>
            <span>1年間無料保証</span>
          </li>
        </ul>
      </div>

      <footer className={styles.brand}>
        <span className={styles.brandRule} aria-hidden="true" />
        <p>ELNORA</p>
        <small>BEAUTY TRAVELS FURTHER</small>
      </footer>
    </section>
  );
}

import FinalCtaSection from "./FinalCtaSection";
import FinalSection from "./FinalSection";
import styles from "./ClosingSection.module.css";

export default function ClosingSection() {
  return (
    <div className={styles.closing}>
      <div className={styles.guaranteeGround} aria-hidden="true" />
      <div className={styles.ctaGround} aria-hidden="true" />
      <FinalSection integrated />
      <FinalCtaSection integrated />
    </div>
  );
}

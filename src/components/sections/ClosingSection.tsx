import FinalCtaSection from "./FinalCtaSection";
import FinalSection from "./FinalSection";
import styles from "./ClosingSection.module.css";

type ClosingSectionProps = {
  purchaseUrl?: string;
};

export default function ClosingSection({ purchaseUrl }: ClosingSectionProps) {
  return (
    <div className={styles.closing}>
      <div className={styles.guaranteeGround} aria-hidden="true" />
      <div className={styles.ctaGround} aria-hidden="true" />
      <FinalSection integrated />
      <FinalCtaSection integrated purchaseUrl={purchaseUrl} />
    </div>
  );
}

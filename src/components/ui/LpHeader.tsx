import styles from "./LpHeader.module.css";

export default function LpHeader() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <span className={styles.brand}>ELNORA</span>
        <span className={styles.productName}>AIRFOLD DUO</span>
      </header>
    </div>
  );
}

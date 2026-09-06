import Image from "next/image";
import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.problem} aria-labelledby="problem-title">
      <p className={styles.label}>PROBLEM</p>
      <h2 id="problem-title" className={styles.title}>
        旅先の髪、こんなお悩みは？
      </h2>

      <div className={styles.visual}>
        <div className={`${styles.scene} ${styles.hotelScene}`}>
          <Image
            src="/images/problem/problem_a_hotel_dryer_v02.png"
            alt="ホテルの備え付けドライヤーを使う女性"
            fill
            sizes="(max-width: 430px) 89vw, 384px"
            className={styles.hotelImage}
          />
        </div>

        <div className={`${styles.scene} ${styles.packingScene}`}>
          <Image
            src="/images/problem/problem_b_packing_conflict_v02.png"
            alt="荷物が詰まった旅行バッグとドライヤー"
            fill
            sizes="(max-width: 430px) 89vw, 384px"
            className={styles.packingImage}
          />
        </div>

        <p className={`${styles.caption} ${styles.hotelCaption}`}>
          備え付けでは、仕上がりが気になる。
        </p>

        <p className={styles.conflict}>仕上がりか、荷物か。</p>

        <p className={`${styles.caption} ${styles.packingCaption}`}>
          持っていけば、荷物になる。
        </p>
      </div>
    </section>
  );
}

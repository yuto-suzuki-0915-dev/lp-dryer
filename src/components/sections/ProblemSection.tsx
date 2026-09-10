import Image from "next/image";
import InViewReveal from "@/components/ui/InViewReveal";
import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.problem} aria-labelledby="problem-title">
      <p className={styles.label}>PROBLEM</p>
      <h2 id="problem-title" className={styles.title}>
        こんなお悩みありませんか？
      </h2>

      <div className={styles.visual}>
        <div className={`${styles.visualBlock} ${styles.hotelBlock}`}>
          <div className={`${styles.scene} ${styles.hotelScene}`}>
            <Image
              src="/images/problem/problem_a_hotel_dryer_v02.png"
              alt="ホテルの備え付けドライヤーを使う女性"
              fill
              sizes="(max-width: 430px) 60vw, 258px"
              className={styles.hotelImage}
            />
          </div>

          <InViewReveal
            direction="right"
            delay={160}
            rootMargin="0px 0px -18% 0px"
            className={`${styles.captionReveal} ${styles.hotelCaptionReveal}`}
          >
            <article className={`${styles.caption} ${styles.hotelCaption}`}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleAccent}>仕上がり</span>
                <span>が決まらない。</span>
              </h3>
              <p className={styles.cardBody}>
                <span>備え付けのドライヤーは、風量も温度もいつもと違う。旅先では、いつものまとまりやツヤをつくりにくい。</span>
              </p>
            </article>
          </InViewReveal>
        </div>

        <div className={`${styles.visualBlock} ${styles.packingBlock}`}>
          <InViewReveal
            direction="left"
            delay={160}
            rootMargin="0px 0px -18% 0px"
            className={`${styles.captionReveal} ${styles.packingCaptionReveal}`}
          >
            <article className={`${styles.caption} ${styles.packingCaption}`}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleAccent}>荷物</span>
                <span>がかさばる。</span>
              </h3>
              <p className={styles.cardBody}>
                <span>
                  いつものドライヤーを持っていけば、バッグの中で場所を取る。旅の荷物に、もう一台分の余裕はつくりにくい。</span>
              </p>
            </article>
          </InViewReveal>

          <div className={`${styles.scene} ${styles.packingScene}`}>
            <Image
              src="/images/problem/problem_b_packing_conflict_v02.png"
              alt="荷物が詰まった旅行バッグとドライヤー"
              fill
              sizes="(max-width: 430px) 60vw, 258px"
              className={styles.packingImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.conflict}>
        <p className={styles.bridgeLead}>仕上がりも、荷物の軽さも。</p>
        <p className={styles.bridgeMain}>どちらも諦めない選択へ。</p>
      </div>
    </section>
  );
}

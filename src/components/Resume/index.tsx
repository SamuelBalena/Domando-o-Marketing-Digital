import styles from "./styles.module.css";
import img from "../../assets/teste.png";
import { Button } from "../Buttons";

export const Resume = () => (
  <section className={styles.section}>
    <span className={styles.span}>
      <h1>Esse é o Resumo do que vou te oferecer</h1>
    </span>
    <main className={styles.main}>
      <section className={styles.card}>
        <img className={styles.img} src={img} alt="" />
        <p>Bullet point 1</p>
      </section>
      <section className={styles.card}>
        <img className={styles.img} src={img} alt="" />
        <p>Bullet point 2</p>
      </section>
      <section className={styles.card}>
        <img className={styles.img} src={img} alt="" />
        <p>Bullet point 3</p>
      </section>
    </main>
    <span className={styles.span}>
      <h2>E você ainda receberá de brinde</h2>
      <div className={styles.main}>
        <section className={styles.card}>
          <img className={styles.img} src={img} alt="" />
          <p>Bônus 1</p>
        </section>
      </div>
    </span>
    <span className={styles.span}>
      <h3 className={styles.h3}>DE PREÇO REAL POR PREÇO PROMOCIONAL</h3>
    </span>
    <Button paragraph="CTA" link="#" />
  </section>
);

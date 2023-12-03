import styles from "./styles.module.css";
import photo from "../../assets/teste.png";

export const Bonus = () => (
  <section className={styles.section}>
    <span className={styles.span}>
      <h1>Bônus para Você</h1>
      <p>
        Além disso, veja o que você também levará e porque deve decidir agora:
      </p>
    </span>
    <main>
      <div className={styles.div}>
        <span className={styles.span_mobile}>
          <h2>Bônus 1</h2>
          <p>Uma pequena descrição para aumentar o interesse do lead</p>
        </span>
        <img src={photo} alt="" />
      </div>
      <div className={styles.div}>
        <img src={photo} alt="" />
        <span className={styles.span_mobile}>
          <h2>Bônus 2</h2>
          <p>Uma pequena descrição para aumentar o interesse do lead</p>
        </span>
      </div>
    </main>
  </section>
);

import styles from "./styles.module.css";
import { Button } from "../Buttons";

import img_business from "../../assets/desenvolvimento-de-estrategia.png";
import img_midia from "../../assets/marketing.png";
import img_analise from "../../assets/analitico.png";
import img_social from "../../assets/midia-social.png";
import img_bonus from "../../assets/e-book.png";

export const Resume = () => (
  <section className={styles.section}>
    <span className={styles.span}>
      <h1>Esse é o Resumo do que vou te oferecer</h1>
    </span>
    <main className={styles.main}>
      <section className={styles.card}>
        <img className={styles.img} src={img_business} alt="" />
        <p className={styles.paragraph}>Gestão de Negócio</p>
      </section>
      <section className={styles.card}>
        <img className={styles.img} src={img_social} alt="" />
        <p className={styles.paragraph}>Gestão de Rede Social</p>
      </section>
      <section className={styles.card}>
        <img className={styles.img} src={img_midia} alt="" />
        <p className={styles.paragraph}>Marketing de Conteúdo</p>
      </section>
    </main>
    <div className={styles.main}>
      <section className={styles.card}>
        <img className={styles.img} src={img_analise} alt="" />
        <p className={styles.paragraph}>Análise de Resultados</p>
      </section>
    </div>
    <span className={styles.span}>
      <h2>E você ainda receberá de brinde</h2>
      <div className={styles.main}>
        <section className={styles.card}>
          <img className={styles.img} src={img_bonus} alt="" />
          <p className={styles.paragraph}>
            Material bônus no final da leitura!
          </p>
        </section>
      </div>
    </span>
    <span className={styles.span}>
      <h3 className={styles.h3}>
        DE <strong className={styles.strong}>R$87,50</strong> POR PREÇO{" "}
        <strong className={styles.strong}>R$25,50!</strong>
      </h3>
    </span>
    <Button
      paragraph="Sim! Quero receber o material agora!"
      link="https://pay.hotmart.com/G88938240G?off=qmvepzi6"
    />
  </section>
);

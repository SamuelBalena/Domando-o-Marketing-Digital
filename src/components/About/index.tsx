import { Card } from "../Cards/About";
import styles from "./styles.module.css";

import img_business from "../../assets/desenvolvimento-de-estrategia.png";
import img_midia from "../../assets/marketing.png";
import img_analise from "../../assets/analitico.png";
import img_social from "../../assets/midia-social.png";

export const About = () => (
  <section className={styles.main}>
    <span className={styles.span}>
      <h1>Veja o que está incluso no Domando o Marketing Digital</h1>
    </span>
    <div className={styles.container}>
      <div className={styles.column}>
        <Card
          src={img_business}
          alt=""
          title="Gestão de Negócio"
          paragraph="Dicas de como aplicar o Marketing Digital no seu negócio"
        />
        <Card
          src={img_midia}
          alt=""
          title="Marketing de Conteúdo"
          paragraph="Estratégias de conteúdo eficientes"
        />
      </div>
      <div className={styles.column}>
        <Card
          src={img_social}
          alt=""
          title="Gestão de Rede Social"
          paragraph="Dicas para divulgar nas redes sociais"
        />
        <Card
          src={img_analise}
          alt=""
          title="Análise de Resultados"
          paragraph="Saiba como analisar o seu desempenho"
        />
      </div>
    </div>
  </section>
);

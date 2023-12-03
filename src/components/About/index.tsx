import { Card } from "../Cards/About";
import styles from "./styles.module.css";
import photo from "../../assets/teste.png";

export const About = () => (
  <section className={styles.main}>
    <span className={styles.span}>
      <h1>Veja o que está incluso no NOME DO PRODUTO</h1>
    </span>
    <div className={styles.container}>
      <div className={styles.column}>
        <Card
          src={photo}
          alt=""
          title="Bullet Point"
          paragraph="Escreva um texto simples aqui"
        />
        <Card
          src={photo}
          alt=""
          title="Bullet Point"
          paragraph="Escreva um texto simples aqui"
        />
      </div>
      <div className={styles.column}>
        <Card
          src={photo}
          alt=""
          title="Bullet Point"
          paragraph="Escreva um texto simples aqui"
        />
        <Card
          src={photo}
          alt=""
          title="Bullet Point"
          paragraph="Escreva um texto simples aqui"
        />
      </div>
    </div>
  </section>
);

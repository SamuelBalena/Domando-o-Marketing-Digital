import { Card } from "../Cards/Depoiments";
import styles from "./styles.module.css";
import photo from "../../assets/teste.png";

export const Depoiments = () => (
  <section className={styles.section}>
    <span className={styles.span}>
      <h1>Veja o que dizem sobre o Nome do seu produto</h1>
    </span>
    <main className={styles.main}>
      <div>
        <Card
          src={photo}
          alt=""
          name="Samuel Balena"
          paragraph="Adorei este livro, me deu um novo conceito sobre marketing digital!"
        />
      </div>
      <div>
        <Card
          src={photo}
          alt=""
          name="Samuel Balena"
          paragraph="Adorei este livro, me deu um novo conceito sobre marketing digital!"
        />
      </div>
      <div>
        <Card
          src={photo}
          alt=""
          name="Samuel Balena"
          paragraph="Adorei este livro, me deu um novo conceito sobre marketing digital!"
        />
      </div>
    </main>
  </section>
);

import { Button } from "../Buttons";
import img from "../../assets/IMG_Header.png";
import styles from "./styles.module.css";

export const Header = () => (
  <header className={styles.background}>
    <div className={styles.header}>
      <main className={styles.main}>
        <span>
          <h1 className={styles.h1}>
            Aprenda como vender utilizando Marketing Digital!
          </h1>
          <h2 className={styles.h2}>
            Saiba como aumentar suas vendas com estratégias de conteúdo
            eficientes e muito mais!
          </h2>
        </span>
        <Button paragraph="Quero Aprender Agora!" link="#" />
      </main>
      <div>
        <a href="https://storyset.com/work">
          <img src={img} alt="" className={styles.image} />
        </a>
      </div>
    </div>
  </header>
);

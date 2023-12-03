import { Button } from "../Buttons";
import styles from "./styles.module.css";

export const Header = () => (
  <header className={styles.header}>
    <main className={styles.main}>
      <span>
        <h1>Headline</h1>
        <h2>Subheadline</h2>
      </span>
      <Button paragraph="CTA" link="#" />
    </main>
    <div>
      <div className={styles.image}></div>
    </div>
  </header>
);

import { Button } from "../Buttons";
import styles from "./styles.module.css";

export const Moorage = () => (
  <section className={styles.section}>
    <h2>Texto de Ancoragem</h2>
    <Button paragraph="CTA" link="#" />
    <p>Texto de Fechamento</p>
  </section>
);

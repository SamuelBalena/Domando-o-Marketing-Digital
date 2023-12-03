import styles from "./styles.module.css";

interface Props {
  src: string;
  alt: string;
  name: string;
  paragraph: string;
}

export const Card = ({ src, alt, name, paragraph }: Props) => (
  <div className={styles.div}>
    <header className={styles.header}>
      <img className={styles.img} src={src} alt={alt} />
      <strong className={styles.strong}>{name}</strong>
    </header>
    <main>"{paragraph}"</main>
  </div>
);

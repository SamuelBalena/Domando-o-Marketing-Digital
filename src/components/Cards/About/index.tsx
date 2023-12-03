import styles from "./styles.module.css";

interface Props {
  src: string;
  alt: string;
  title: string;
  paragraph: string;
}

export const Card = ({ src, alt, title, paragraph }: Props) => (
  <div className={styles.div}>
    <header className={styles.header}>
      <img className={styles.img} src={src} alt={alt} />
    </header>
    <main className={styles.main}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </main>
  </div>
);

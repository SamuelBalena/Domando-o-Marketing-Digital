import styles from "./styles.module.css";

interface Props {
  paragraph: string;
  link: string;
}

export const Button = ({ paragraph, link }: Props) => (
  <a href={link}>
    <button className={styles.btn}>
      <p className={styles.paragraph}>{paragraph}</p>
    </button>
  </a>
);

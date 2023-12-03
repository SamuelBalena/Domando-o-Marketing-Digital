import styles from "./styles.module.css";

export const FAQ = () => (
  <section className={styles.section}>
    <span className={styles.span}>
      <h1>Principais Dúvidas Sobre Nome do Seu Produto</h1>
    </span>
    <main className={styles.main}>
      <details className={styles.details}>
        <summary>Pergunta 1</summary>
        <p>Um texto explicativo respondendo a pergunta</p>
      </details>
      <details className={styles.details}>
        <summary>Pergunta 1</summary>
        <p>Um texto explicativo respondendo a pergunta</p>
      </details>
      <details className={styles.details}>
        <summary>Pergunta 1</summary>
        <p>Um texto explicativo respondendo a pergunta</p>
      </details>
    </main>
  </section>
);

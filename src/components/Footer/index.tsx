import styles from "./styles.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <header className={styles.header}>
      <p className={styles.title}>
        ATENÇÃO: Esta oferta é condição de lançamento e pode sofrer alteração a
        qualquer momento, sem aviso prévio.{" "}
      </p>
    </header>
    <main className={styles.main}>
      <p>
        Este site não faz parte do website Google ou do Facebook. Além disso,
        este site não é endossado pelo Google ou pelo Facebook em qualquer
        aspecto. Google e Facebook são marcas comerciais. Este produto não
        garante a obtenção de resultados. Qualquer referência ao desempenho de
        uma estratégia não deve ser interpretada como uma garantia de
        resultados.
      </p>
    </main>
    <div>
      <p className={styles.title}>
        © 2023 Samuel Balena. Todos os Direitos Reservados.
      </p>
    </div>
  </footer>
);

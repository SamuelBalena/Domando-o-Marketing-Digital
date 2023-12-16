import { Button } from "../Buttons";
import styles from "./styles.module.css";

export const Moorage = () => (
  <section className={styles.background}>
    <main className={styles.section}>
      <p className={styles.paragraph}>
        O preço para adquirir tudo que está incluso no Domando o Marketing
        Digital é de R$87,50 Mas, apenas agora para os{" "}
        <strong>primeiros 50 compradores</strong> você pagará somente{" "}
        <strong>R$25,50!</strong>
      </p>
      <p className={styles.paragraph}>
        Se você quer chegar em um lugar diferente e ter{" "}
        <strong>resultados diferentes</strong>, então precisa fazer algo
        diferente.
      </p>
      <p className={styles.paragraph}>
        Porque se continuar fazendo tudo do mesmo jeito que fez até hoje Será
        bem mais difícil alcançar o futuro que você deseja então você precisa
        escolher se vai <strong>mudar de vida</strong> ou se vai continuar
        fazendo as mesmas coisas de sempre.
      </p>
      <p className={styles.paragraph}>
        <strong>A escolha é sua e a hora é agora!</strong>
      </p>
      <Button paragraph="Clique Aqui para Receber o Material Agora!" link="#" />
    </main>
  </section>
);

import Cabecalho from "../Cabecalho";
import Head from "next/head";
import styles from "../../styles/layout.module.css";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundTransparency}>
        <Head>
          <title>TurisTere</title>
        </Head>
        <Cabecalho />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
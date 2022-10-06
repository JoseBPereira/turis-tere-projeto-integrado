import type { NextPage } from "next";
import styles from "../../styles/cabecalho.module.css";
import Image from "next/image";
import Link from "next/link";

const Cabecalho: NextPage = () => {
  return (
    <div style={{ paddingTop: 10, paddingLeft: "3%", display: "flex" }}>
      <Image src="/icone.svg" width={100} height={100} alt="logo" />

      <div className={styles.menu}>
        <Link href={"/pontos-turisticos"}>
          <a className={styles.subMenu}>
            Pontos Turisticos
          </a>
        </Link>

        <Link href={"/restaurantes"}>
          <a className={styles.subMenu}>
            Restaurantes
          </a>
        </Link>

        <Link href={"/eventos"}>
          <a className={styles.subMenu}>
            Eventos
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cabecalho;
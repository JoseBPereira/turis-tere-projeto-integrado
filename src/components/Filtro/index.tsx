import { useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "../../styles/filtro.module.css";

type FiltroProps = {
  filtrar: (texto: string) => void
}

const Filtro = ({ filtrar } : FiltroProps) => {
  const [texto, setTexto] = useState("");

  return (
    <div className={styles.container}>
      <MdSearch
        size="45"
        className={styles.searchIcon}
        onClick={() => filtrar(texto)}
      ></MdSearch>
      <input
        className={styles.inputSearch}
        placeholder="Pesquisar ..."
        onInput={(e) => setTexto((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default Filtro;

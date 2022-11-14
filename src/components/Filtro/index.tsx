import { KeyboardEventHandler, useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "../../styles/filtro.module.css";

type FiltroProps = {
  filtrar: (texto: string) => void
}

const Filtro = ({ filtrar } : FiltroProps) => {
  const [texto, setTexto] = useState("");

  const onKeyUp = (event: { key: string; keyCode: number; }) => {
    if (event.key === "Enter" || event.keyCode === 13) filtrar(texto);
  }

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
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default Filtro;

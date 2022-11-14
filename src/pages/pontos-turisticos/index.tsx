import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";
import Filtro from "../../components/Filtro";
import Card from "../../components/PontoTuristico/Card";
import { listarPontosTuristicos } from "../../services/db/pontos-turisticos";
import { PontoTuristico } from "../../model/ponto-turistico";
import { useState } from "react";
import styles from "../../styles/pontos-turisticos.module.css";

type PontosTuristicosProps = {
  pontosTuristicos: PontoTuristico[]
}

const PontosTuristicos: NextPageWithLayout<PontosTuristicosProps> = ({ pontosTuristicos }) => {
  const [pontosTuristicosFiltrados, setPontosTuristicosFiltrados] = useState(pontosTuristicos);

  const filtrar = (texto: string) => {
    let filtro = pontosTuristicos.filter((pontoTuristico) =>
      pontoTuristico.nome.toLowerCase().includes(texto.toLowerCase())
    );
    setPontosTuristicosFiltrados(filtro);
  }

  const montarCards = () => {
    let cards = [];
    let length = pontosTuristicosFiltrados.length;

    for (let i = 0; i < length; i += 4) {
      cards.push(
        <div className={styles.containerCard} key={i}>
          <Card
            pontoTuristico={pontosTuristicosFiltrados[i]}
            visibility={length > i}
          />
          <Card
            pontoTuristico={pontosTuristicosFiltrados[i + 1]}
            visibility={length > i + 1}
          />
          <Card
            pontoTuristico={pontosTuristicosFiltrados[i + 2]}
            visibility={length > i + 2}
          />
          <Card
            pontoTuristico={pontosTuristicosFiltrados[i + 3]}
            visibility={length > i + 3}
          />
        </div>
      );
    }

    if(!cards.length) {
      return <div className={styles.containerNaoEncontrado}>Nenhum resultado encontrado!</div>
    }

    return cards;
  }

  return (
    <div className={styles.container}>
      <Filtro filtrar={filtrar}></Filtro>
      <div className={styles.containerList}>{montarCards()}</div>
    </div>
  );
};

PontosTuristicos.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export async function getStaticProps() {
  const pontosTuristicos = await listarPontosTuristicos();

  return {
    props: {
      pontosTuristicos,
    },
  };
}

export default PontosTuristicos;

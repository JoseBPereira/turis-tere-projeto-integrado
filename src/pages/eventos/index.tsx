import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";
import Filtro from "../../components/Filtro";
import Card from "../../components/Evento/Card";
import { useState } from "react";
import styles from "../../styles/pontos-turisticos.module.css";
import { Evento } from "../../model/evento";
import { listarEventos } from "../../services/db/eventos";

type EventosProps = {
  eventos: Evento[];
};

const Eventos: NextPageWithLayout<EventosProps> = ({ eventos }) => {
  const [eventosFiltrados, setEventosFiltrados] = useState(eventos);

  const filtrar = (texto: string) => {
    let filtro = eventos.filter((evento) =>
      evento.nome.toLowerCase().includes(texto.toLowerCase())
    );
    setEventosFiltrados(filtro);
  };

  const montarCards = () => {
    let cards = [];
    let length = eventosFiltrados.length;

    for (let i = 0; i < length; i += 4) {
      cards.push(
        <div className={styles.containerCard} key={i}>
          <Card evento={eventosFiltrados[i]} visibility={length > i} />
          <Card evento={eventosFiltrados[i + 1]} visibility={length > i + 1} />
          <Card evento={eventosFiltrados[i + 2]} visibility={length > i + 2} />
          <Card evento={eventosFiltrados[i + 3]} visibility={length > i + 3} />
        </div>
      );
    }

    if (!cards.length) {
      return (
        <div className={styles.containerNaoEncontrado}>
          Nenhum resultado encontrado!
        </div>
      );
    }

    return cards;
  };

  return (
    <div className={styles.container}>
      <Filtro filtrar={filtrar}></Filtro>
      <div className={styles.containerList}>{montarCards()}</div>
    </div>
  );
};

Eventos.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export async function getStaticProps() {
  const eventos = await listarEventos();

  return {
    props: {
      eventos,
    },
  };
}

export default Eventos;

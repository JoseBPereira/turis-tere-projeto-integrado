import { useState } from "react";
import AppLayout from "../../components/AppLayout";
import Filtro from "../../components/Filtro";
import { Restaurante } from "../../model/restaurante";
import { NextPageWithLayout } from "../_app";
import styles from "../../styles/restaurantes.module.css";
import { listarRestaurantes } from "../../services/db/resturantes";
import Card from "../../components/Restaurante/Card";

type RestaurantesProps = {
  restaurantes: Restaurante[];
};

const Restaurantes: NextPageWithLayout<RestaurantesProps> = ({ restaurantes }) => {
  const [restaurantesFiltrados, setRestaurantesFiltrados] = useState(restaurantes);

  const filtrar = (texto: string) => {
    let filtro = restaurantes.filter((restaurante) =>
      restaurante.nome.toLowerCase().includes(texto.toLowerCase())
    );
    setRestaurantesFiltrados(filtro);
  };

  const montarCards = () => {
    let cards = [];
    let length = restaurantesFiltrados.length;

    for (let i = 0; i < length; i += 4) {
      cards.push(
        <div className={styles.containerCard} key={i}>
          <Card
            restaurante={restaurantesFiltrados[i]}
            visibility={length > i}
          />
          <Card
          restaurante={restaurantesFiltrados[i + 1]}
            visibility={length > i + 1}
          />
          <Card
            restaurante={restaurantesFiltrados[i + 2]}
            visibility={length > i + 2}
          />
          <Card
            restaurante={restaurantesFiltrados[i + 3]}
            visibility={length > i + 3}
          />
        </div>
      );
    }

    if (!cards.length) {
      return (
        <div
          className={styles.containerNaoEncontrado}
        >
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

Restaurantes.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export async function getStaticProps() {
  const restaurantes = await listarRestaurantes();

  return {
    props: {
      restaurantes,
    },
  };
}

export default Restaurantes;

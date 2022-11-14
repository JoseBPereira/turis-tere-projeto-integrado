import { NextPage } from "next";
import Image from "next/image";
import { MdOutlineAttachMoney, MdStar } from "react-icons/md";
import styles from "../../../styles/card.restaurante.module.css";
import { useRouter } from "next/router";
import { Restaurante } from "../../../model/restaurante";

type CardProps = {
  visibility?: boolean;
  restaurante?: Restaurante;
};

const Card: NextPage<CardProps> = ({ visibility = true, restaurante }) => {
  const router = useRouter();

  const carregarEstrelas = () => {
    let avaliacoes = restaurante?.avaliacoes;
    if (!avaliacoes) return;

    let somaAvaliacoes = avaliacoes.reduce(
      (soma, avaliacao) => soma + avaliacao.estrelas,
      0
    );

    let estrelas = Math.round(somaAvaliacoes / avaliacoes.length);

    let estrelasArray = [];
    for (let i = 0; i < estrelas; i++) {
      estrelasArray.push(i);
    }

    return estrelasArray.map((i) => {
      return (
        <MdStar
          key={i}
          size={20}
          color={"yellow"}
          style={{
            filter: "drop-shadow(black 0px 0px 0.5px)",
            verticalAlign: "middle",
          }}
        />
      );
    });
  };

  const carregarPreco = () => {
    let preco = restaurante?.preco;
    if (!preco) return;

    let precoArray = [];
    for (let i = 0; i < preco; i++) {
      precoArray.push(i);
    }

    return precoArray.map((i) => {
      return (
        <MdOutlineAttachMoney
          key={i}
          size={20}
          color={"green"}
          style={{
            filter: "drop-shadow(black 0px 0px 0.5px)",
            verticalAlign: "middle",
          }}
        />
      );
    });
  };

  const carregarConteudo = () => {
    if (!visibility || !restaurante) return;

    return (
      <div className={styles.containerCard}>
        <Image
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          width={360}
          height={230}
          alt="Card"
          src={restaurante.fotos[0]}
        />
        <div className={styles.containerText}>
          <div>{carregarPreco()}</div>
          <div>{carregarEstrelas()}</div>
          <div className={styles.textNome}>{restaurante.nome}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ visibility: visibility ? "visible" : "hidden" }}
      className={styles.container}
      onClick={() =>
        router.push({
          pathname: "/restaurantes/[id]",
          query: { id: restaurante?.id },
        })
      }
    >
      {carregarConteudo()}
    </div>
  );
};

export default Card;

import { NextPage } from "next";
import Image from "next/image";
import { MdOutlineAttachMoney, MdStar } from "react-icons/md";
import styles from "../../../styles/card.ponto-turistico.module.css";
import { PontoTuristico } from "../../../model/ponto-turistico";
import { useRouter } from "next/router";

type CardProps = {
  visibility?: boolean;
  pontoTuristico?: PontoTuristico;
};

const Card: NextPage<CardProps> = ({ visibility = true, pontoTuristico }) => {
  const router = useRouter();
  
  const carregarEstrelas = () => {
    let avaliacoes = pontoTuristico?.avaliacoes;
    if(!avaliacoes) return;

    let somaAvaliacoes = avaliacoes.reduce(
      (soma, avaliacao) => soma + avaliacao.estrelas,
      0
    );

    let estrelas = Math.round(somaAvaliacoes / avaliacoes.length);
    
    let estrelasArray = []
    for (let i = 0; i < estrelas; i++) {
      estrelasArray.push(i);
    }

    return estrelasArray.map((i) => {
      return <MdStar
                key={i}
                size={20}
                color={"yellow"}
                style={{
                  filter: "drop-shadow(black 0px 0px 0.5px)",
                  verticalAlign: "middle",
              }} />
    });
  };

  const carregarConteudo = () => {
    if(!visibility || !pontoTuristico) return;

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
          src={pontoTuristico.fotos[0]}
        />
        <div className={styles.containerText}>
          {carregarEstrelas()}
          <div className={styles.textNome}>{pontoTuristico.nome}</div>
          <div className={styles.textDescricao}>{pontoTuristico.descricao}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ visibility: visibility ? "visible" : "hidden" }}
      className={styles.container}
      onClick={() =>
        router.push({
          pathname: "/pontos-turisticos/[id]",
          query: { id: pontoTuristico?.id }
        })
      }
    >
      {carregarConteudo()}
    </div>
  );
};

export default Card;

import { NextPage } from "next";
import Image from "next/image";
import styles from "../../../styles/card.evento.module.css";
import { useRouter } from "next/router";
import { Evento } from "../../../model/evento";
import { getMesPorExtenso } from "../../../utils/date";

type CardProps = {
  visibility?: boolean;
  evento?: Evento;
};

const Card: NextPage<CardProps> = ({ visibility = true, evento }) => {
  const router = useRouter();

  const renderData = () => {
    if(!evento) return;

    let data = evento.data;

    let dataArray = data.split('/');

    let dia = dataArray[0];
    let mes = parseInt(dataArray[1]);
    let ano = dataArray[2];

    return (
      <div
        style={{
          height: 60,
          width: "30%",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700, height: 22 }}>{dia}</div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            height: 13,
            color: "grey",
          }}
        >
          {getMesPorExtenso(mes).toUpperCase()}
        </div>
        <div style={{ fontSize: 13, fontWeight: 500, color: "grey" }}>{ano}</div>
      </div>
    );
  }

  const carregarConteudo = () => {
    if (!visibility || !evento) return;

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
          src={evento.fotos[0]}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 60,
            width: "100%",
            backgroundColor: "white",
            borderEndStartRadius: 20,
            borderEndEndRadius: 20,
          }}
        >
          {renderData()}

          <div
            style={{
              height: 60,
              width: "70%",
            }}
          >
            <div className={styles.textNome}>{evento.nome}</div>
            <div className={styles.textDescricao}>{evento.localizacao}</div>
          </div>
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
          pathname: "/eventos/[id]",
          query: { id: evento?.id },
        })
      }
    >
      {carregarConteudo()}
    </div>
  );
};

export default Card;

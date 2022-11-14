import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";
import styles from "../../styles/detalhes.evento.module.css";
import Images from "../../components/Images";
import { MdArrowBackIos } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa"
import { getEvento } from "../../services/db/eventos";
import { Evento } from "../../model/evento";
import { getMesPorExtenso } from "../../utils/date";
import { IoMdCalendar } from "react-icons/io"

const Detalhe: NextPageWithLayout = () => {
    const router = useRouter();
    const id = router.query.id;

    const [evento, setEvento] = useState<Evento>();
    const [isLoading, setLoading] = useState(true);

    const carregarEventos = async (id: string) : Promise<void> => {
        let evento = await getEvento(id);
        setEvento(evento);
        setLoading(false);
    };

    useEffect(() => {
      if (!id) {
        return;
      }
      carregarEventos(id as string);
    }, [id]);
    
    const carregarLoading = () : ReactNode => {
      return isLoading ? <div style={{ fontSize: 5 }} className={styles.loader}></div> : carregarConteudo();
    };

    const renderData = () => {
      if (!evento) return;

      let data = evento.data;

      let dataArray = data.split("/");

      let dia = dataArray[0];
      let mes = parseInt(dataArray[1]);
      let ano = dataArray[2];

      return (
        <div style={{ fontSize: 13, fontWeight: 500 }}>
          <IoMdCalendar
            size={20}
            style={{
              verticalAlign: "sub",
              color: "rgb(77, 203, 140)",
              filter: "drop-shadow(black 0px 0px 0px)",
            }}
          />{" "}
          {dia + " " + getMesPorExtenso(mes).toUpperCase() + " " + ano}
        </div>
      );
    };

    const carregarConteudo = () : ReactNode => {
      if(!evento) return;

      return (
        <div className={styles.container}>
          <button className={styles.btnVoltar} onClick={() => router.back()}>
            <MdArrowBackIos
              color="white"
              style={{ verticalAlign: "top" }}
              size={15}
            />
            VOLTAR
          </button>
          <div className={styles.containerBody}>
            <div className={styles.containerCabecalho}>
              <div className={styles.containerNome}>
                <div className={styles.txtNome}>{evento.nome}</div>
                {renderData()}
              </div>

              <FaMapMarkerAlt
                size={35}
                style={{
                  height: "100%",
                  marginRight: 15,
                  filter: "drop-shadow(black 1px 1px 0.5px)",
                  fontStyle: "italic",
                }}
                color={"#4DCB8C"}
              />

              <span style={{ margin: "auto" }}>{evento.localizacao}</span>
            </div>
            <div className={styles.containerDescricao}>
              <span>{evento.descricao}</span>
            </div>
            <div className={styles.containerImages}>
              <Images
                arrayImages={evento.fotos}
                width={400}
                height={300}
              ></Images>
            </div>
          </div>
        </div>
      );
    };

    return (
      <>
        {carregarLoading()}
      </>
    );
};

Detalhe.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Detalhe;
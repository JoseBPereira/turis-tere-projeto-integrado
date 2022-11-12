import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import { PontoTuristico } from "../../model/ponto-turistico";
import { getPontoTuristico } from "../../services/db/pontos-turisticos";
import { NextPageWithLayout } from "../_app";
import styles from "../../styles/detalhes.ponto-turistico.module.css";
import Images from "../../components/Images";
import { MdArrowBackIos } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa"

const Detalhe: NextPageWithLayout = () => {
    const router = useRouter();
    const id = router.query.id;

    const [pontoTuristico, setPontoTuristico] = useState<PontoTuristico>();
    const [isLoading, setLoading] = useState(true);

    const carregarPontoTuristico = async (id: string) : Promise<void> => {
        let pontoTuristico = await getPontoTuristico(id);
        setPontoTuristico(pontoTuristico);
        setLoading(false);
    };

    useEffect(() => {
      if (!id) {
        return;
      }
      carregarPontoTuristico(id as string);
    }, [id]);
    
    const carregarLoading = () : ReactNode => {
      return isLoading ? <div className={styles.loader}></div> : carregarConteudo();
    };

    const carregarConteudo = () : ReactNode => {
      if(!pontoTuristico) return;

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
              <span className={styles.txtNome}>{pontoTuristico.nome}</span>
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

              <span style={{margin: "auto"}}>
              {pontoTuristico.localizacao}
              </span>
            </div>
            <div className={styles.containerDescricao}>
              <span>{pontoTuristico.descricao}</span>
            </div>
            <div className={styles.containerImages}>
              <Images arrayImages={pontoTuristico.fotos} width={400} height={300}></Images>
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
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
        // let pontoTuristico = await getPontoTuristico(id);
        // setPontoTuristico(pontoTuristico);
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
              <span className={styles.txtNome}>Parc Magique</span>
              <FaMapMarkerAlt
                size={25}
                style={{
                  height: "100%",
                  marginRight: 15,
                  filter: "drop-shadow(black 1px 1px 0.5px)",
                  fontStyle: "italic",
                }}
                color={"#4DCB8C"}
              />

              <span>
                R. Marcos Antônio da Silva Lima, 300 - Vargem Grande,
                Teresópolis - RJ, 25990-150
              </span>
            </div>
            <div className={styles.containerDescricao}>
              <span>
                {`O Le Canton é o único resort do Brasil que conta com um parque de diversões coberto. O Parc Magique é uma das principais atrações para crianças na Região Serrana do Rio.

              Com decoração medieval, o parque oferece variedade de atrações, com cerca de 15 brinquedos, além de locais para alimentação e loja com lembranças do lugar.

              Entre os destaques, estão a roda gigante, barco viking infantil, duas salas de realidade virtual de última geração com mais de 90 jogos diferentes, um simulador de montanha russa, e a Just Jump, cama elástica gigante, com 120 metros quadrados.`}
              </span>
            </div>
            <div className={styles.containerImages}>
              <Images
                arrayImages={[
                  "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/estatua-teresa-cristina-teresopolis-rj-39.jpg.webp?alt=media&token=046c1302-d7b5-4457-891a-98e2248dd0e6",
                  "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f",
                  "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f",
                ]}
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
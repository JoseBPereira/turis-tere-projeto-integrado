import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";
import styles from "../../styles/detalhes.ponto-turistico.module.css";
import Images from "../../components/Images";
import { MdArrowBackIos, MdOutlineAttachMoney } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa"
import { Restaurante } from "../../model/restaurante";
import { getRestaurante } from "../../services/db/resturantes";

const Detalhe: NextPageWithLayout = () => {
    const router = useRouter();
    const id = router.query.id;

    const [restaurante, setRestaurante] = useState<Restaurante>();
    const [isLoading, setLoading] = useState(true);

    const carregarRestaurante = async (id: string) : Promise<void> => {
        let restaurante = await getRestaurante(id);
        setRestaurante(restaurante);
        setLoading(false);
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

    useEffect(() => {
      if (!id) {
        return;
      }
      carregarRestaurante(id as string);
    }, [id]);
    
    const carregarLoading = () : ReactNode => {
      return isLoading ? <div className={styles.loader}></div> : carregarConteudo();
    };

    const carregarConteudo = () : ReactNode => {
      if(!restaurante) return;

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
              <span className={styles.txtNome}>
                {restaurante.nome}
                <br />
                <div style={{marginTop: -10}}>{carregarPreco()}</div>
              </span>
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

              <span style={{ margin: "auto" }}>{restaurante.localizacao}</span>
            </div>
            <div className={styles.containerDescricao}>
              <span>{restaurante.descricao}</span>
            </div>
            <div className={styles.containerImages}>
              <Images
                arrayImages={restaurante.fotos}
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
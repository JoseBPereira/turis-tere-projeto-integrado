import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";

const Eventos: NextPageWithLayout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 600,
        backgroundColor: "white",
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 10,
        marginTop: 15,
        boxShadow: "0px 0px 3px",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <h1 style={{ margin: "auto"}}>CONTEÚDO</h1>
    </div>
  );
};

Eventos.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Eventos;

import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";

const Eventos: NextPageWithLayout = () => {
  return (
    <h1>Eventos</h1>
  );
};

Eventos.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Eventos;

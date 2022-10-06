import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";

const PontosTuristicos: NextPageWithLayout = () => {
  return (
    <h1>Teste</h1>
  );
};

PontosTuristicos.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default PontosTuristicos;

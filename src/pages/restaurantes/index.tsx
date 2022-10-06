import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";

const Restaurantes: NextPageWithLayout = () => {
  return (
    <h1>Restaurantes</h1>
  );
};

Restaurantes.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Restaurantes;

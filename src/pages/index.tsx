import { useState } from 'react';
import { criarPontoTuristico } from '../services/db/pontos-turisticos';
import { NextPageWithLayout } from './_app';
import AppLayout from '../components/AppLayout';

const Home: NextPageWithLayout = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  const onClickCriar = () => {
    if(nome && valor) {
      const response = criarPontoTuristico(nome, parseFloat(valor));
      console.log(response);
    }
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  );
};

export default Home

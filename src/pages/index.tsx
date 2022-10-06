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
      Nome
      <input type="text" onChange={(e) => setNome(e.target.value)} />
      Valor
      <input type="number" onChange={(e) => setValor(e.target.value)} />
      <button style={{ marginTop: 10 }} onClick={onClickCriar}>
        Criar
      </button>
      <label>
        {nome}
        {valor}
      </label>
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

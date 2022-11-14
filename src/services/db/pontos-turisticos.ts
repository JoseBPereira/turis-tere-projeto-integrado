import { ref, push, get } from "firebase/database";
import { PontoTuristico } from "../../model/ponto-turistico";
import { db } from "../firebase";

function getPontoTuristicoObj(pontoTuristicoEntry: any) : PontoTuristico {
    if(!pontoTuristicoEntry) return <PontoTuristico>{};

    return {
      id: pontoTuristicoEntry[0],
      ...pontoTuristicoEntry[1],
    };
}

export function criarPontoTuristico(pontoTuristico: PontoTuristico) {
    const reference = ref(db, "pontos-turisticos/");

    return push(reference, {
        nome: pontoTuristico.nome,
        descricao: pontoTuristico.descricao,
        localizacao: pontoTuristico.localizacao,
        avaliacoes: pontoTuristico.avaliacoes,
        fotos: pontoTuristico.fotos
    });
}

export async function listarPontosTuristicos() : Promise<PontoTuristico[]> {
    const reference = ref(db, "pontos-turisticos/");
    
    const snapshot = await get(reference);
    const val = snapshot.val();
    if(val) {
        let entries = Object.entries(val);
        let pontosTuristicos = entries.map((entry) =>
          getPontoTuristicoObj(entry)
        );
        return pontosTuristicos;
    }
    
    return Promise.resolve([]);
}

export async function getPontoTuristico(id: string): Promise<PontoTuristico> {
  const reference = ref(db, "pontos-turisticos/" + id);

  const snapshot = await get(reference);
  const val = snapshot.val();
  if (val) {
    return val;
  }

  return  Promise.reject(null);
}
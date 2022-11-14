import { ref, push, get } from "firebase/database";
import { Restaurante } from "../../model/restaurante";
import { db } from "../firebase";

function getRestauranteObj(restauranteEntry: any): Restaurante {
  if (!restauranteEntry) return <Restaurante>{};

  return {
    id: restauranteEntry[0],
    ...restauranteEntry[1],
  };
}

export function criarRestaurante(restaurante: Restaurante) {
  const reference = ref(db, "restaurantes/");

  return push(reference, {
    nome: restaurante.nome,
    descricao: restaurante.descricao,
    localizacao: restaurante.localizacao,
    avaliacoes: restaurante.avaliacoes,
    fotos: restaurante.fotos,
    preco: restaurante.preco,
  });
}

export async function listarRestaurantes(): Promise<Restaurante[]> {
  const reference = ref(db, "restaurantes/");

  const snapshot = await get(reference);
  const val = snapshot.val();
  if (val) {
    let entries = Object.entries(val);
    let restaurantes = entries.map((entry) => getRestauranteObj(entry));
    return restaurantes;
  }

  return Promise.resolve([]);
}

export async function getRestaurante(id: string): Promise<Restaurante> {
  const reference = ref(db, "restaurantes/" + id);

  const snapshot = await get(reference);
  const val = snapshot.val();
  if (val) {
    return val;
  }

  return Promise.reject(null);
}
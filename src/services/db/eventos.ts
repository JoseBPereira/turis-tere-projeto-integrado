import { ref, push, get } from "firebase/database";
import { Evento } from "../../model/evento";
import { db } from "../firebase";

function getEventoObj(eventoEntry: any): Evento {
  if (!eventoEntry) return <Evento>{};

  return {
    id: eventoEntry[0],
    ...eventoEntry[1],
  };
}

export function criarEvento(evento: Evento) {
  const reference = ref(db, "eventos/");

  return push(reference, {
    nome: evento.nome,
    descricao: evento.descricao,
    localizacao: evento.localizacao,
    fotos: evento.fotos,
    data: evento.data,
  });
}

export async function listarEventos(): Promise<Evento[]> {
  const reference = ref(db, "eventos/");

  const snapshot = await get(reference);
  const val = snapshot.val();
  if (val) {
    let entries = Object.entries(val);
    let eventos = entries.map((entry) => getEventoObj(entry));
    return eventos;
  }

  return Promise.resolve([]);
}

export async function getEvento(id: string): Promise<Evento> {
  const reference = ref(db, "eventos/" + id);

  const snapshot = await get(reference);
  const val = snapshot.val();
  if (val) {
    return val;
  }

  return Promise.reject(null);
}
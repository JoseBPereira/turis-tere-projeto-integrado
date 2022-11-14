import { Avaliacao } from "./avaliacao";

export type Restaurante = {
  id?: string;
  nome: string;
  descricao: string;
  localizacao: string;
  avaliacoes: Avaliacao[];
  preco: number;
  fotos: string[];
};
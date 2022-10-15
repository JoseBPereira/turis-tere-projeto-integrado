import { Avaliacao } from "./avaliacao";

export type PontoTuristico = {
    id?: string;
    nome: string;
    descricao: string;
    localizacao: string;
    avaliacoes: Avaliacao[];
    fotos: string[];
}
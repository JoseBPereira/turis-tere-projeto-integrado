import { ref, push } from "firebase/database";
import { db } from "../firebase";

export function criarPontoTuristico(nome: string, valor: number) {
    const reference = ref(db, "pontos-turisticos/");

    return push(reference, {
        nome,
        valor,
    });
}

export function listarPontosTuristicos() {
    
}

export function getPontoTuristico() {
    
}
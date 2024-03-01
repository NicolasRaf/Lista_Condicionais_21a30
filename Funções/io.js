import { question } from "readline-sync";

export function  numerozin(pergunta){
    const numero = Number(question(pergunta))

    return numero
}

export function prompt(mensagem){
    console.log(mensagem)
}



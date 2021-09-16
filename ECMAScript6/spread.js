let primeiros = ["café", "pão", "torrada", "salada"]

let segundos = [...primeiros, "batata", "feijão", "brocolis"]

// concatenando objetos

let esportes = {
    futebol: "Isabela",
    volei: "Antonia",
    natacao: "Beatriz",

}

let segundaChamada = {
    ...esportes,
    judo: "Alex"
}

function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: "programador",
        status: 1,
        codigo: 123
    };

    return novosDados;


}

console.log(cadastroPessoa({ nome: "Isabela", sobrenome: "Oliveira", profissao: "estudante", status: 1 }));


// Aprendendo a usar o operador rest 

function nomes(listaNomes, ...listaSobrenomes) {
    let nomeCompleto = [
        ...listaNomes,
        ...listaSobrenomes,

    ];
    console.log(nomeCompleto)
    return nomeCompleto

}

let listaNomes = ["Matheus", "Ana", "Marcos", "Angelica"];

let listaSobrenomes = nomes(listaNomes, "Arraujo", "Souza", "Rangel");
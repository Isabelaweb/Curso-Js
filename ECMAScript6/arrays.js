// Descontruindo obejtos e arrays

const pessoa = {
    nome: "Marta",
    sobrenome: "Almeida",
    idade: 26,
    cargo: "Enfermeira"
}

console.log(pessoa.nome)


let { nome: myname } = pessoa;

let { nome, cargo } = pessoa;

// reatribuindo o nome da variavel cargo.

let { cargo: profissao } = pessoa;


let familia = ["Isabela", "Glaucio", "Noah", "Brisa", "Oliveira"]

let { 0: esposa } = familia;
let { 1: marido } = familia;
let { 2: filho } = familia;
let { 3: filha, 3: sobrenome } = familia
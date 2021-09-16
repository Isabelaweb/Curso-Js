// Var funciona num escopo global.
var nome = "Isabela"

if (nome == "Isabela") {
    var idade = 21;
    console.log("Tem " + idade);
}

// Let só funciona dentro do escopo.
if (nome == "Isabela") {
    let sobrenome = "Oliveira";
    console.log("Isabela " + sobrenome)
}

var lista = [1, 2, 3];

for (var i in lista) {
    console.log(lista[i]);
}

for (let b in lista) {
    console.log(lista[b]);
}

// Const nã muda de valor, ou seja uma fez atribuido valor não posso trocar

const nome = "Alex";

const nome = "Isabela"


// Concatenando strings

let dog = "Unix";
let raca = "Fox-Paulistinha";

let cachorro = ` Meu cachorro se chama: ${dog} e é um ${raca}`;
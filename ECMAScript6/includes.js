let nomes = ["Hanna", "Lindinha", "Unix"]

console.log(nomes.includes("Hanna")) // includes verifica se o nome entre parentese contem no array


let cervejas = "Stella"

console.log(cervejas.endsWith("llo")); // endsWith verifica se a string termina com a frase ou letra dentro do parentese

console.log(cervejas.startsWith("S"));



// SOME // EVERY // 

let carros = ["Gol", "Uno", "Palio"];

console.log(nomes.some(nome => nome === "Gol"));


let pessoas = [{

        nome: "Eva",
        idade: 23
    },
    {
        nome: "Adão",
        idade: 26
    },
    {
        nome: "Noe",
        idade: 15
    }
];

console.log(pessoas.every(nome => nome.idade >= 18));

if (nomes.every(nome => nome.idade >= 18)) {
    console.log("TODOS SÃO MAIORES DE 18 ANOS")
} else {
    console.log("Nem todos são maiores de 18 anos ")
}
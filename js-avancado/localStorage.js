// localStorage.setItem("nome", "Joao"); Para atribuir um valor 

// localStorage.setItem("sobrenome", "Silva");

// localStorage.getItem("nome"); Pegando o valor atribuido 

// Reatribuindo o valor de nome para Isabela

localStorage.removeItem("nome") // Sempre que a pagina for recaregada ele vai remover o nome e perguntar novamente 

var nome = "";

if (typeof localStorage.nome == "undefined") {
    localStorage.nome = prompt("Digite seu nome");
}
nome = localStorage.nome;

document.getElementById("nome").innerHTML = nome;

var idade = ""; // Vai manter a idade no LocalStorage pois não usei o remove itens

if (typeof localStorage.idade == "undefined") {
    localStorage.idade = prompt("Digite sua idade");
}

idade = localStorage.idade;

document.getElementById("idade").innerHTML = idade
function entrar() {
    var bemVindo$ = document.getElementById("bemVindo");
    var text = prompt("Digite seu nome");
    if (text == "" || text == null) {
        alert("Digite seu nome !!");
        bemVindo$.innerHTML = "Bem vindo!!";
    } else {
        bemVindo$.innerHTML = text;
    }
}

// ARRAY // // /// ///  //////////////////////////

var esqueci = ["Leite", "Brocolis", "Morango"]

var lista = ["Arroz", "Feijao", "macarrao", "geleia", "beterraba"]
console.log(lista[1]);
console.log(lista.length);
console.log(lista.join(" / ")); /* Trás todo o array e acrescenta o que está entre as aspar entre eles */
console.log(lista.pop()); /* exclui o último item do array */
console.log(lista.shift()); /* exclui o primeiro item do array */
console.log(lista.push("Peixe")); /* acrescenta o item entre as aspas na última posição do array */
console.log(lista.indexOf()); /* Procura no array o valor dentro do parametro, se não encontrado ele retorna -1.*/
console.log(lista.unshift("frango")); /* acrescenta o item entre aspas na primeira posição do array*/
console.log(lista.concat(esqueci)) /*  Cria um novo array e mescla/uni ao array existente*/




if (lista.indexOf("Peixe") > -1) {
    alert("Preço 12.90")
} else {
    alert("Item não encontrado")
}

console.log(lista)

// LOOPS /// ///// //// 

// while = Enquanto

x = 2;

while (x < 5) {
    document.write("</br> O valor de x é:" + x);

    x++;
}

// For = Para

for (a = 2; a < 10; a++) {
    document.write("</br> O valor do a é" + a)
}

// Switch


function atendimento() {
    const y = prompt(" Em qual setor deseja falar ?");

    switch (y) {
        case "0":
            alert("Você será transferido para o setor de reclamações");
            break;
        case "1":
            alert("Você será transferido para o setor de negocios ");
            break;
        case "3":
            alert("Você será tranferido para o setor de marketing");
            break;
        default:
            alert("Ops !! Não temos essa opção")
    }
}
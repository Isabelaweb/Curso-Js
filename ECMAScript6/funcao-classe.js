// Função Anonima =>

// function adcionar(...numeros) {
//     let total = numeros.reduce((total, proximo) => {
//         return total + proximo

//     });


// }

// adicionar(1, 2, 3, 4, 5)

class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class ListaTarefas extends List {
    constructor() {
        super()
        this.nome = "Isabela";
    }

    mostrarNome() {
        console.log(this.nome);
    }
};
const minhasTarefas = new ListaTarefas();
document.getElementById("novo").onclick = function() {
    minhasTarefas.add("Minhas tarefas");

}
minhasTarefas.mostrarNome();


class Pessoa {
    constructor() {
        this.nome = "",
            this.sobrenome = ""
    }

    nomePessoa(primeironome) {
        this.nome = primeironome;
        console.log("Meu nome é" + this.nome);
    }

    segundoNome(segundonome) {
        this.sobrenome = segundonome;
        console.log("Meu sobrenome é " + this.sobrenome);
    }

    nomeCompleto() {
        let nomeCompleto = this.nome + "" + this.sobrenome;
        console.log(nomeCompleto);
    }
};

let pessoa1 = new Pessoa();
pessoa1.nomePessoa("Leticia")
pessoa1.segundoNome("Fraga")
// Criando um objeto com algumas propiedades

function carro() {
    this.marca = "VolksWagem"; // O this serve para referenciar ao objeto carro
    this.nome = "Gol";
    this.ano = "2020";
    this.potencia = "110cv";
    this.cor = "Azul";
    this.velocidadeAtual = 0

    this.ligar = function() {
        console.log(this.nome + "Carro agora está ligado .... Vruuuum ")
    }

    this.andar = function(velocidade) {
        console.log(this.nome + " está andando ...")
        this.velocidadeAtual = this.velocidadeAtual + velocidade
    }
    this.desligar = function() {
        console.log("Carro parado");
        this.velocidadeAtual = 0
    }

}

var carro1 = new carro();
carro1.cor = "Vermelho"

var carro2 = new carro();
carro2.ano = "2015";
carro2.nome = "Saveiro";
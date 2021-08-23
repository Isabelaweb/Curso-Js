// 1º Criar balão 
// 2° Estourar balão
// 3º Carregar o jogo
var total = 0;
var pausado = false



function criarBalao() {
    if (pausado) {
        return
    }
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    balao.setAttribute("style", "left:" + x + "px; top:" + y + "px;");
    // passando o estilo pra div balao
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(object) {
    document.body.removeChild(object);

    total++;
    var score = document.getElementById("total");
    score.innerHTML = "Baloes estourados: " + total;
}

function carregarJogo() {
    setInterval(criarBalao, 1000);
}

function pausar() {
    pausado = true
}

function play() {
    pausado = false
}
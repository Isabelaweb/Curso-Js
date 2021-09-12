const executando = document.getElementById("conteudo")

function acao() {
    const conteudoAtual = executando.innerHTML + "Executando ... <br>"
    executando.innerHTML = conteudoAtual

}

// Executa de tempo em tempo sem parar !

var timer = setInterval(acao, 1000);

// executa a função uma vez e para.

function stopTimer() {
    clearInterval(timer)
    executando.innerHTML = ""
}

//setTimeout(acao, 3000); // vai executar uma vez depois de 3000 segundos
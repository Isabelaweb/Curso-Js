function reduzirNumero(numeroParaReduzir) {
    // criei um array vazio
    const dado = []

    // criei uma variavel para guardar o ultimo valor e inicializei ela como nula para o while ser valido
    let ultimoValor = null
        // while = enquanto uma condic'ao for valida ele vai rodar
    while (ultimoValor != 0) {
        // ternario para validar se deve pegar o array do
        const arrayDeNumeros = ultimoValor === null ? devolveArrayDeNumeros(numeroParaReduzir) : devolveArrayDeNumeros(ultimoValor)

        const numeroSomado = recebeNumerosESomeElesAoQuadrado(arrayDeNumeros)

        ultimoValor = numeroSomado

        if (dado.includes(ultimoValor)) {
            break
        }

        dado.push(numeroSomado)
    }

    return dado
}

function devolveArrayDeNumeros(numeroParaReduzir) {
    return String(numeroParaReduzir).split('').map(function(valor) {
        return Number(valor)
    })
}

function recebeNumerosESomeElesAoQuadrado(numeros) {
    const valoresAoQuadrado = numeros.map(function(numero) {
        return numero ** 2
    })

    let valor = 0
    for (const valorAoQuadrado of valoresAoQuadrado) {
        valor = valor + valorAoQuadrado
    }

    return valor
}

console.log(String(reduzirNumero(365)) == String([70, 49, 97, 130, 10, 1]))
console.log(String(reduzirNumero(16)) == String([37, 58, 89, 145, 42, 20, 4, 16]))
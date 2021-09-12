const form = document.querySelector("#meu-form");

form.addEventListener("submit", validar);

function validar(evento) {
    evento.preventDefault();
    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

    if (valor.length > 2) {
        alert("Digite dois números ou menos!");
        document.formulario.numero.focus();
        return false;
    } else if (nomeValor.length < 5) {
        alert("Digite seu nome completo!");
        return false;
    } else {
        alert("Formulario enviado com sucesso!!");
        return true;
    }
}
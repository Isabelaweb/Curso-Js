function calcular() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");


    if (imc < 17) {
        resultado.innerHTML = "<br/> Seu resultado foi " + imc.toFixed(2) + "<h3> Você está muito abaixo do peso</h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    } else if (imc > 17 && imc < 18.49) {
        resultado.innerHTML = "Seu resultado foi " + imc.toFixed(2) + "<h3> Você está abaixo do peso<h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    } else if (imc > 18.5 && imc < 24.99) {
        resultado.innerHTML = "Seu resultado foi" + imc.toFixed(2) + "<h3> Otimo você está com o peso normal!<h3/> ";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    } else if (imc > 25 && imc < 29.44) {
        resultado.innerHTML = "Seu resultado foi" + imc.toFixed(2) + "<h3> Atençao você está acima do peso</h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;

    } else {
        resultado.innerHTML = "OPS ! Tente novamente.";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false
    }


}
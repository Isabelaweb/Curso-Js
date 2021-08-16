function apertoumouse() {
    console.log("O mouse foi apertado!");

}

function soltouomouse() {
    console.log("soltei o mouse");
}

function passaromouse() {
    console.log('você passou o mouse sobre o botão');
}

function tirouomouse() {
    alert("Tirou o mouse de cima do botão");
}

function movendoOmouse() {
    console.log("movendo o mouse dentro do botão");
}

function onclick() {
    console.log("Mesma coisa do onMouseUp")
}

function botaoDireito() {
    alert("Você clickou com botão direito")
}

/////// 
function tecladoApertado(event) {
    console.log("Teclado Apertado" + event.keyCode); // codigo da tecla que retorna um número
    if (event.keyCode == 32) {
        console.log("Você apertou o espaço")
    } else {
        console.log("Aperte o espaço")
    }
}

function shift(recebeUmEvento) {
    console.log("Shift ainda não precionado" + recebeUmEvento.shiftKey) // Quando o shif for apertado ele retorna um boleam com true.
    if (recebeUmEvento.shiftKey == true) {
        console.log("Shift precionado");
    }

}

function soltouOteclado() {
    console.log("Soltou o teclado");
}

function apertouEsoltouMouse() {
    console.log("Apertou alguma tecla");
}

function carregou() {
    alert("Pagina carregada");
}

function focado() {
    console.log("Campo focado");
}

function desfocado() {
    console.log("Desfocou do campo");
}

function opcaoSelecionada(objeto) {
    console.log("Cidade selecionada: " + objeto.value);
}

function enviado() {
    console.log("Formulario Enviado com Sucesso !!!")
}
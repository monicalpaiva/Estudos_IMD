function potencia (numero){
    var resultado = Math.pow(numero,3);
    return resultado;
}

function metade (numero){
    var resultado = numero/2;
    return resultado;
}

function areaCirculo (numero){
    var resultado = Math.PI*(Math.pow(numero,2));
    return resultado;
}

const botao = document.querySelector(".potencia-button");
const alerta = document.querySelector(".alerta-indisponivel");

function revelar() {
    botao.classList.toggle("hide");
    alerta.classList.toggle("hide");
}

botao.onclick = revelar;
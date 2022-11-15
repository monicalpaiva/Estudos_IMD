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



document.getElementById("solucao").innerHTML = potencia(document.querySelector('#potencia-input'));

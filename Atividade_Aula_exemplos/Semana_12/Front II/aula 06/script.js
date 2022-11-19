function potencia (numero){
    var resultado = Math.pow(numero,3);
    document.getElementById("solucao").innerHTML = resultado;
}

function metade (numero){
    var resultado = numero/2;
    return resultado;
}

function areaCirculo (numero){
    var resultado = Math.PI*(Math.pow(numero,2));
    return resultado;
}

const element = document.getElementById("potencia-input");
const element2 = element.addEventListener("number", function(){potencia(element);});


document.getElementById("solucao").innerHTML = element + "<br>" + element2;
function situacao1(entrada1, entrada2, saida) {
    var x = Number(document.getElementById(entrada1).value);
    var y = Number(document.getElementById(entrada2).value);
    var media = (x + y)/2;
                                
    document.getElementById(saida).innerHTML = 
        "O resultado é do primeiro exemplo " + resultado(media);
}

function resultado(m) {
    var resultado;
    if (m >= 7) {
        resultado = "Aprovado";
        resultado = resultado + ". Parabéns!!!";
    }
    if (m<7){
        resultado = "Reprovado";
        resultado = resultado;
    }
    return resultado;
}

//if else

function situacao2(entrada1, entrada2, saida) {
    var x = Number(document.getElementById(entrada1).value);
    var y = Number(document.getElementById(entrada2).value);
    var media = (x + y)/2;    
    document.getElementById(saida).innerHTML = "O resultado é do segundo exemplo " + resultado(media);
}

function resultado(m) {
    var resultado;
    if (m >= 7) {
        resultado = "Aprovado";
    } else if (m >=5) {
        resultado = "Recuperação";
    } else {
        resultado = "Reprovado";
    }
    return resultado;
}  

// operador ?

function situacao3(entrada, entrada, saida) {
    var x = Number(document.getElementById(entrada).value);
    var y = Number(document.getElementById(entrada).value);
    var media = (x + y)/2;
    
    document.getElementById(saida).innerHTML = 
        "O resultado é do terceiro exemplo " + resultado(media);
}

function resultado(m) {
    var resultado = (m >= 7) ? "Aprovado":"Reprovado";
    return resultado;
}

// Procurando elementos na página

function situação4(palavra){
var texto = palavra;
var nome_elemento = "resultado";
if (document.getElementById(nome_elemento)) {
    document.getElementById(nome_elemento).innerHTML = texto;
} else {
    alert("Não encontrei o elemento "+ nome_elemento)
}
}

                
   
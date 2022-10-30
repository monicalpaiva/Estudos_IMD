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

//Curto-Circuito

var texto;

// Curto-circuito nos condicionais

if (true || null.toString()) {
    texto = "Resultado é true";
} else {
    texto = "Resultado é false";
}

// Curto-circuito nas atribuições
var texto2;
texto2 = "Programação Estruturada";
texto2 = (texto2 || "Programação OO");

texto2 = "";
texto2 = (texto2 || "Programação OO");

var x = 0;
var y = 1;
var z = 2;
if (x || y || z) {
    texto2 = "Resultado é true";
} else {
    texto2 = "Resultado é false";
}

document.getElementById("circuito1").innerHTML = texto;
document.getElementById("circuito2").innerHTML = texto2;
                
// Switch

var data = new Date(1969, 07, 20);
var dia = data.getDay();

document.getElementById("DiaDaSemana").innerHTML = dia_da_semana(dia);

function dia_da_semana(dia) {
    var resposta = "";
    switch (dia) {
        case 0:
            resposta = "Domingo";
            break;
        case 1:
            resposta = "Segunda-feira";
            break;
        case 2:
            resposta = "Terça-feira";
            break;
        case 3:
            resposta = "Quarta-feira";
            break;
        case 4:
            resposta = "Quinta-feira";
            break;
        case 5:
            resposta = "Sexta-feira";
            break;
        case 6:
            resposta = "Sábado";
            break;
        default:
            resposta = "Dia Inválido";
    }
    
    switch (dia) {
        case 0:
        case 6:
            resposta = resposta + ". Fim de Semana.";
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            resposta = resposta + ". É um dia Útil.";
            break;
    }
    
    return resposta;
}
                        
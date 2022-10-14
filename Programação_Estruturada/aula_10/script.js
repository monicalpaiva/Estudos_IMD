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

// Condição FOR

function contagem(entrada1) {
    var n = Number(document.getElementById(entrada1).value);

    var texto1 = "";
    var texto2 = "";
    var texto3 = "";
    var texto4 = "";
    var texto5 = "";
    var texto6 = "";

    for (i = 1; i <= n; i++) {
        texto6 = texto6 + i + "<br>";
    }


    // Declarando a variável de controle antes do laço

    var i = 1;
    for (;i <= n; i++) {
        texto5 = texto5 + i + "<br>";
    }


    // Declarando mais de uma variável de controle

    for (i = 1, j = n; i <= n; i++, j--) {
        texto4 = texto4 + i + " - " + j + "<br>";
    }


    // Incrementando a variável de controle dentro do laço

    for (i = 1; i <= n; ) {
        texto3 = texto3 + i + "<br>";
        i++;
    }


    // Removendo a condição

    for (i = 1; ; i++) {
        texto2 = texto2 + i + "<br>";
        if (i >= n) {
            break;
        }
    }


    // Utilizando o continue
    for (i = 1; i <= n; i++) {
        if (i == 3) {
            continue;
        }
        texto1 = texto1 + i + "<br>";
    }

    document.getElementById("resultadofor1").innerHTML = texto1;
    document.getElementById("resultadofor2").innerHTML = texto2;
    document.getElementById("resultadofor3").innerHTML = texto3;
    document.getElementById("resultadofor4").innerHTML = texto4;
    document.getElementById("resultadofor5").innerHTML = texto5;
    document.getElementById("resultadofor6").innerHTML = texto6;
}
                
   // Laço_For_Of

   function quebraLinhas(entrada3) {
    var str = document.getElementById(entrada3).value;

    var texto7 = "Letras de "+str+":<br>";
    for (c of str) {
        texto7 = texto7 + c + "<br>";
    }
    document.getElementById("resultadofor7").innerHTML = texto7;
}
function dia_da_semana1() {
    var dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];
    var hoje = new Date();
    var texto = dias[hoje.getDay()];
    document.getElementById("resultado1").innerHTML = texto;
}

//acessando o array

function dia_da_semana2() {
    var dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];
    var tamanho = dias.length;
    var primeiro = dias[0];
    var ultimo = dias[tamanho - 1];
    texto1 = "Tamanho = "+ tamanho + "<br>";
    texto1 = texto1 + "Primeiro = " + primeiro + "<br>";
    texto1 = texto1 + "Ultimo = " + ultimo;
    dias[2]= "TUESDAY";    

    document.getElementById("resultado2").innerHTML = texto1 + "<br>" + dias;
}

// Preenchendo os arrays

function nomes(){
    var pessoas = [];
    var total = Number(document.getElementById("total").value);
    for (i=0; i<total;i++){
        var pessoa = prompt("Entre com a "+ i + " pessoa");
        pessoas[i]  = pessoa;
    }
    document.getElementById("resultado3").innerHTML = pessoas;
}

// Teste de metodos 1

var cores1 = ["Verde","Amarelo","Azul","Branco"];
var resposta4 = "";
var nome = ["monica", "lima", "paiva"];

/* Testando toString */
resposta4 = cores1.toString();

/* Testando join e split */
var resposta5 = cores1.join(" + ");
var resposta6 = resposta5.split("+");
var resposta7 = resposta5.replace(/\s/g,"").split("+");
//resposta7 = resposta7.split(" + ");

/* Testando push */
var x = nome.push("silva");
var resposta8 = "Novo array ["+nome+"] tem tamanho "+x;

/* Testando pop */
var y = nome.pop();
var resposta9 = "Novo array ["+nome+"] teve removido "+y;


document.getElementById("resultado4").innerHTML = 
    "<strong>Resposta com toString: </strong>" + resposta4 + 
    "<br> <strong>Resposta com join: </strong>" + resposta5 +  
    "<br><strong>Resposta com split: </strong> " +  resposta6 +
    "<br> <strong>Resposta com replace e split: </strong>" + resposta7 +
    "<br> <strong>Resposta com replace e push: </strong>" + resposta8 +
    "<br> <strong>Resposta com replace e pop: </strong>" + resposta9;

// Teste de metodos 2

var cores2 = ["Verde","Amarelo","Azul","Branco"];

/* Testando shift */
cores2.unshift("Preto");
var resposta10 = "Novo array ["+cores2+"]";
var x = cores2.shift();
var resposta11 = "Novo array ["+cores2+"] teve removido "+ x;

/* Testando delete */
delete cores2[2];
var resposta12 = cores2;

var nome2 = ["monica", "lima", "paiva"];

/* Testando splice */
var x1 = nome2.splice(2,1,"silva","sacinom");
var nome3 = ["monica", "lima","paiva", "silva", "sacinom"];
var x2 = nome3.splice(2,1);
var resposta13 = "Novo array ["+nome2+"] teve removido ["+x1+"]";
var resposta14 = "Novo array ["+nome3+"] teve removido ["+x2+"]";

/* Testando concat */
var x3 = ["cavalo","cachorro"];
var y2 = ["gato","papagaio"];
var z = ["suco de uva"];
var w = x3.concat(y2,z);
var resposta15 = "w é ["+w+"] <br>";

/* Testando slice Verde,Amarelo,,Branco*/
var fatia1 = cores2.slice(1);
var fatia2 = cores2.slice(1,3);
var resposta16 = "fatia1: "+fatia1;
var resposta17 = "fatia2:" + fatia2;


document.getElementById("resultado5").innerHTML = 
    "<strong>Resposta com unshift e shift:<br></strong>=><strong>cores2.unshift(\" Preto\"): </strong>" + resposta10 +
    "<br>=> <strong>var x = cores2.shift(): </strong>" +  resposta11 +
    "<br> <strong>Resposta com delete[2]: </strong>" + resposta12 +
    "<br><strong>Resposta com splice: </strong> (2,1,\"silva\",\"sacinom\") " +  resposta13  +
    "<br><strong>Resposta com splice: </strong> (2,1)" +  resposta14 +
    "<br><strong>Resposta com concat (x3, y2, z): </strong><br>" +  resposta15 +
    "<strong>Resposta com slice(1): </strong><br>" +  resposta16 +
    "<br><strong>Resposta com slice(1,3): </strong><br>" +  resposta17;
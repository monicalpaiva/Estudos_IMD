var x = 999999999999999;
var y = 9999999999999999;
document.getElementById("texto1").innerHTML = "x = " + x + "<br>" + "y = " + y;

var z = 0.2 + 0.1;
document.getElementById("texto2").innerHTML = "0.2 + 0.1 = " + z;

var w = (0.2*10 + 0.1*10) / 10;
document.getElementById("texto3").innerHTML = "0.2 + 0.1 = " + w;

// segundo exemplo, conversão de float em número

divisão = "100" / "20";
multiplicação = "100" * "20";
subtração = "100" - "20";
porcentagem = "100" % "20";

//a = 100;
//isNaN(a); 

//a = NaN + 10 ;
//a = NaN + "10" ;

a = typeof NaN; 

document.getElementById("texto4").innerHTML = a;

//infinity

var texto5 = "";
var b = 10; 
var texto5 = b + "<br>";

b = b ** b;
texto5 = texto5 + b + "<br>";
b = b ** b;
texto5 = texto5 + b + "<br><br>";

var texto6 = "";
var c =  2 / 0; 
texto6 = texto6 + "2 / 0 = " + c + "<br>";
var d =  -2 / 0; 
texto6 = texto6 + "-2 / 0 = " + d + "<br><br>";

texto5 = texto5 + "typeof Infinity = " + typeof Infinity;

document.getElementById("texto5").innerHTML = texto5;

document.getElementById("texto6").innerHTML = texto6;

// metodos e propriedades

// Método parseInt()
numero1 = parseInt("3 14 PI");
numero2 = parseInt("PI 3 14");
document.getElementById("texto7").innerHTML = "numero1: " + numero1;
document.getElementById("texto8").innerHTML = "numero2: " + numero2;

// Método parseFloat()
numero3 = parseFloat("3.14159265359");
numero4 = parseFloat("3 14");
numero5 = parseFloat("3 14 PI");
numero6 = parseFloat("PI 3 14");
document.getElementById("texto9").innerHTML = "numero3: " + numero3;
document.getElementById("texto10").innerHTML = "numero4: " + numero4;
document.getElementById("texto11").innerHTML = "numero5: " + numero5;
document.getElementById("texto12").innerHTML = "numero6: " + numero6;

// Método toExponential()
numero7 = parseFloat("3.14159265359");
numero8 = numero7.toExponential(2);
document.getElementById("texto13").innerHTML = "numero8: " + numero8 + " tem tipo "+ (typeof numero8);
numero9 = numero7.toExponential(4);
document.getElementById("texto14").innerHTML = "numero9: " + numero9 + " tem tipo "+ (typeof numero9);

// Método toFixed() & toPrecision()
numero10 = parseFloat("3.14159265359");
numero11 = numero10.toFixed(2);
document.getElementById("texto15").innerHTML = "Valor " + numero11 + " tem tipo "+ (typeof numero11);
numero12 = numero10.toPrecision(4);
document.getElementById("texto16").innerHTML = "Valor " + numero12 + " tem tipo "+ (typeof numero12);

// Propriedades de Number
numero13 = Number.MAX_VALUE;
numero14 = Number.MIN_VALUE;
numero15 = Number.POSITIVE_INFINITY;
numero16 = Number.NEGATIVE_INFINITY;
numero17 = Number.NaN;
numero18 = NaN;
document.getElementById("texto17").innerHTML = "numero13: " + numero13;
document.getElementById("texto18").innerHTML = "numero14: " + numero14;
document.getElementById("texto19").innerHTML = "numero15: " + numero15;
document.getElementById("texto20").innerHTML = "numero16: " + numero16;
document.getElementById("texto21").innerHTML = "numero17: " + numero17;
document.getElementById("texto22").innerHTML = "numero18: " + numero18;

// Objeto Math
var numero19 = Math.PI;

// Arredondamentos

valor1 = Math.ceil(numero19);
valor2 = Math.pow(5,2);
valor3 = Math.sqrt(Math.pow(5,2));
valor4 = Math.E**3;
valor5 = Math.round(3.49);
valor6 = Math.round(3.5);

document.getElementById("resultado1").innerHTML = "resultado1: " + valor1;
document.getElementById("resultado2").innerHTML = "resultado2: " + valor2;
document.getElementById("resultado3").innerHTML = "resultado3: " + valor3;
document.getElementById("resultado4").innerHTML = "resultado4: " + valor4;
document.getElementById("resultado5").innerHTML = "resultado5: " + valor5;
document.getElementById("resultado6").innerHTML = "resultado6: " + valor6;

// Math

var numero20 = Math.PI;

numero20 = Math.random();
    
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}   
numero20 = randomInteger(0,100);        

document.getElementById("texto23").innerHTML = "número sorteado: " + numero20;
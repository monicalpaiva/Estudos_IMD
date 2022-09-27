var string_1 = "IMD"
var string_2 = "I" + "M".concat("D"); // "IMD"
var string_3 = "I".concat("M","d");   // "IMd"          

var objeto_1 = new String("IMD");
var objeto_2 = new String("IMD");

var resultado1 = (string_1 == string_2);  // true porque têm o mesmo valor   
var resultado2 = (string_1 == string_3);  // false porque não têm o mesmo valor   
var resultado3 = (string_1.toUpperCase() == string_3.toUpperCase());  // true porque não têm o mesmo valor   
var resultado4 = (string_1.toLowerCase() == string_3.toLowerCase());  // true porque não têm o mesmo valor   
var resultado5 = (string_1 == string_3);  // false porque não têm o mesmo valor   

var resultado6 = (string_1 == objeto_1);  // true porque têm o mesmo valor   
var resultado7 = (string_1 === objeto_1); // falso porque têm tipos diferentes   
var resultado8 = (objeto_1 == objeto_2);  // falso porque são objetos diferentes   
var resultado9 = (objeto_1 === objeto_2); // falso porque são objetos diferentes   

document.getElementById("saida1").innerHTML = "resultado para string_1 == string_2: " + "<strong>" + resultado1 + "</strong>"; 
document.getElementById("saida2").innerHTML = "resultado para string_1 == string_3: " + "<strong>" + resultado2 + "</strong>"; 
document.getElementById("saida3").innerHTML = "resultado para string_1.toUpperCase() == string_3.toUpperCase(): " + "<strong>" + resultado3 + "</strong>"; 
document.getElementById("saida4").innerHTML = "resultado para string_1.toLowerCase() == string_3.toLowerCase(): " + "<strong>" + resultado4 + "</strong>"; 
document.getElementById("saida5").innerHTML = "resultado para string_1 == string_3: " + "<strong>" + resultado5 + "</strong>"; 
document.getElementById("saida6").innerHTML = "resultado para string_1 == objeto_1: " + "<strong>" + resultado6 + "</strong>"; 
document.getElementById("saida7").innerHTML = "resultado para string_1 === objeto_1: " + "<strong>" + resultado7 + "</strong>"; 
document.getElementById("saida8").innerHTML = "resultado para objeto_1 == objeto_2: " + "<strong>" + resultado8 + "</strong>"; 
document.getElementById("saida9").innerHTML = "resultado para objeto_1 === objeto_2: " + "<strong>" + resultado9 + "</strong>"; 

// metodos de busca de strings
var texto = "ALÔ MUNDO MUNDO";

var resultado10 = texto.indexOf("MUNDO", 5);
var resultado11 = texto.indexOf("MUNDO", 4);            
var resultado12 = texto.search("MUNDO");             
var resultado13 = texto.lastIndexOf("MUNDO");             

var patt = /[uo]/i; 
var resultado14 = texto.search(patt);           

document.getElementById("saida10").innerHTML = "Saida para texto.indexOf(\"MUNDO\", 5): " + resultado10;  
document.getElementById("saida11").innerHTML = "Saida para texto.indexOf(\"MUNDO\", 4): " + resultado11;  
document.getElementById("saida12").innerHTML = "Saida para texto.search(\"MUNDO\"): " + resultado12;  
document.getElementById("saida13").innerHTML = "Saida para texto.lastIndexOf(\"MUNDO\"): " + resultado13;  
document.getElementById("saida14").innerHTML = "Saida para texto.search(patt): " + resultado14; 


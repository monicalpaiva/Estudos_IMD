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
var resultado15 = texto.length;              

var patt = /[uo]/i; 
var resultado14 = texto.search(patt);         

document.getElementById("saida10").innerHTML = "Saida para texto.indexOf(\"MUNDO\", 5): " + resultado10;  
document.getElementById("saida11").innerHTML = "Saida para texto.indexOf(\"MUNDO\", 4): " + resultado11;  
document.getElementById("saida12").innerHTML = "Saida para texto.search(\"MUNDO\"): " + resultado12;  
document.getElementById("saida13").innerHTML = "Saida para texto.lastIndexOf(\"MUNDO\"): " + resultado13;  
document.getElementById("saida14").innerHTML = "Saida para texto.search(patt): " + resultado14; 
document.getElementById("saida15").innerHTML = "Saida para texto.length(texto): " + resultado15; 

//extração de string

var texto2 = "ALÔ MUNDO LINDO";             
        
var resultado16 = texto2.slice(4,11);
var resultado17 = texto2.slice(-11, -4);
var resultado18 = texto2.slice(4);
var resultado19 = texto2.slice(-11);

var resultado20 = texto2.substring(4,11);
var resultado21 = texto2.substring(4);
var resultado22 = texto2.substring(-1, -10);

var resultado23 = texto2.substr(4,7);
var resultado24 = texto2.substr(4);
var resultado25 = texto2.substr(-1, -10);

var resultado26 = texto.charAt(4);
var resultado27 = texto.charAt(100);

document.getElementById("saida16").innerHTML = "Resultado para texto2.slice(4,11)" + resultado16;
document.getElementById("saida17").innerHTML = "Resultado para texto2.slice(-11, -4)" + resultado17;
document.getElementById("saida18").innerHTML = "Resultado para texto2.slice(4)" + resultado18;
document.getElementById("saida19").innerHTML = "Resultado para texto2.slice(-11)" + resultado19;
document.getElementById("saida20").innerHTML = "Resultado para texto2.substring(4,11)" + resultado20;
document.getElementById("saida21").innerHTML = "Resultado para texto2.substring(4)" + resultado21;
document.getElementById("saida22").innerHTML = "Resultado para texto2.substring(-1, -10)" + resultado22;
document.getElementById("saida23").innerHTML = "Resultado para texto2.substr(4,7)" + resultado23;
document.getElementById("saida24").innerHTML = "Resultado para texto2.substr(4)" + resultado24;
document.getElementById("saida25").innerHTML = "Resultado para texto2.substr(-1, -10)" + resultado25;
document.getElementById("saida26").innerHTML = "Resultado para texto2.charAt(4)" + resultado26;
document.getElementById("saida27").innerHTML = "Resultado para texto2.charAt(100)" + resultado27;

// substituição de string
var texto3 = "ALÔ MUNDO LINDO";             
var resultado28 = texto3.replace("LINDO","BELO");
 
var resultado29 = texto3;

// Substituição apenas da primeira ocorrência    
var texto4 = "ALÔ MUNDO LINDO LINDO";             
var resultado30 = texto4.replace("LINDO","BELO");

// Método é case sensitive    
var texto5 = "ALÔ MUNDO LINDO";             
var resultado31 = texto5.replace("lindo","belo");

// Expressões regulares para case insensitive
var texto6 = "ALÔ MUNDO LINDO";             
var resultado32 = texto6.replace(/lindo/i,"belo");

// Expressões regulares para substituir todas as ocorrências
var texto7 = "ALÔ MUNDO LINDO LINDO";             
var resultado33 = texto7.replace(/LINDO/g,"BELO");
var resultado34 = texto7.replace(/lindo/ig,"belo");

document.getElementById("saida28").innerHTML = "Resposta de texto3.replace(\"LINDO\",\"BELO\"): " + "<strong>" + resultado28 + "</strong>"; 
document.getElementById("saida29").innerHTML = "Resposta de resultado de texto3: " + "<strong>" + resultado29 + "</strong>"; 
document.getElementById("saida30").innerHTML = "Resposta de texto4.replace(\"LINDO\",\"BELO\"): " + "<strong>" + resultado30 + "</strong>"; 
document.getElementById("saida31").innerHTML = "Resposta de texto5.replace(\"lindo\",\"belo\"): " + "<strong>" + resultado31 + "</strong>"; 
document.getElementById("saida32").innerHTML = "Resposta de texto6.replace(/lindo/i,\"belo\"): " + "<strong>" + resultado32 + "</strong>"; 
document.getElementById("saida33").innerHTML = "Resposta de texto7.replace(/LINDO/g,\"BELO\"): " + "<strong>" + resultado33 + "</strong>"; 
document.getElementById("saida34").innerHTML = "Resposta de texto7.replace(/lindo/ig,\"belo\"): " + "<strong>" + resultado34 + "</strong>"; 





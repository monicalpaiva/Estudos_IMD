var cores = ["Verde","Amarelo","Azul","Branco"];
cores.sort();
cores.reverse();

resposta1 = "Ordenação com reverse: ["+ cores +"]";

document.getElementById("resultado").innerHTML = resposta1;

//Ordenando numero
var numeros1 = [40,100,25,45,30];
numeros1.sort(comparar1);

resposta2 = "Array ordenado = [" + numeros1 + "] <br>";
document.getElementById("resultado2").innerHTML = resposta2; 

function comparar1(a,b){
return a - b;
}

var numeros2 = [40,100,25,45,30];
numeros2.sort(comparar2);

resposta3 = "Array ordenado = [" + numeros2 + "] <br>";
document.getElementById("resultado3").innerHTML = resposta3; 

function comparar2(a,b){
return b - a;
}

//Maior e menor
var numeros3 = [40,100,25,45,30];
var menor = Math.min.apply(null, numeros3);
var maior = Math.max.apply(null, numeros3);

var resposta4 = "Menor Elemento é " + menor + "<br>";
resposta4 = resposta4 + "Maior Elemento é " + maior;
document.getElementById("resultado4").innerHTML = resposta4;

// função minimo máximo

var min = minimo(numeros3);
var max = maximo(numeros3);

var maxmin = maximo_minimo(numeros3);
var min = maxmin[0];
var max = maxmin[1];

resposta5 = "Menor Elemento é " + min + "<br>";
resposta5 = resposta5 + "Maior Elemento é " + max;
document.getElementById("resultado5").innerHTML = resposta5;

function minimo(arr) {
    var min = Infinity;               // O maior valor possível
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
}

function maximo(arr) {
    var max = -Infinity;              // O menor valor possível
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
}

// Esta função faz com que precisemos percorrer o array apenas uma vez
function maximo_minimo(arr) {
    var min = Infinity;               // O maior valor possível
    var max = -Infinity;              // O menor valor possível
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return [min,max];
}

// forEach

var resposta6 = "";

cores.forEach(adicionar);
/*
function adicionar(valor) {
  resposta6 = resposta6 + "A cor é " + valor + "<br>";
}*/



function adicionar(valor, indice, array) {
  resposta6 = resposta6 + "A cor no índice " + indice;
  resposta6 = resposta6 + " é " + valor + "<br>";
}

document.getElementById("resultado6").innerHTML = resposta6;




				
				
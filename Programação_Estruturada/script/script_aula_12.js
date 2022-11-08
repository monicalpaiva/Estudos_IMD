var cores = ["Verde","Amarelo","Azul","Branco"];
cores.sort();
cores.reverse();

var resposta1 = "Ordenação com reverse: ["+ cores +"]";

document.getElementById("resultado").innerHTML = resposta1;

//Ordenando numero
var numeros1 = [40,100,25,45,30];
numeros1.sort(comparar1);

var resposta2 = "Array ordenado = [" + numeros1 + "] <br>";
document.getElementById("resultado2").innerHTML = resposta2; 

function comparar1(a,b){
return a - b;
}

var numeros2 = [40,100,25,45,30];
numeros2.sort(comparar2);

var resposta3 = "Array ordenado = [" + numeros2 + "] <br>";
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

var resposta5 = "Menor Elemento é " + min + "<br>";
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


function adicionar(valor, indice) {
  resposta7 = "Arrey de cor é: " + cores + "<br>";
  resposta6 = resposta6 + "A cor no índice " + indice;
  resposta6 = resposta6 + " é " + valor + "<br>";
}

document.getElementById("resultado6").innerHTML = resposta7 + "<br>" + resposta6;


// Map e Filter

var numeros4 = [0,1,2,3];

var quadrados = numeros4.map(quadrado);

function quadrado(valor) {
  return valor*valor;
}

var resposta8 = "numeros = [" + numeros4 + "] <br>";
resposta8 = resposta8 + "quadrados = [" + quadrados + "] <br>";

var pares = numeros4.filter(par);
function par(valor) {
    return (valor % 2 == 0);
}
resposta8 = resposta8+ "pares = [" + pares + "]";

document.getElementById("resultado7").innerHTML = resposta8;


// Reduce e ReduceRigh

var resposta9 = "";

// Funções de CallBack

function somar(acumulador, valor) {
    return acumulador + valor;
}

function subtrair(acumulador, valor) {
    return acumulador - valor;
}

// Exemplos simples em arrays com mais de um elemento

var numeros5 = [100, 200, 400, 800];
resposta9 = "numeros = [" + numeros5 + "] <br>>";

var soma = numeros5.reduce(somar);           // 100 + ...
resposta9 = resposta9 + "soma sem valor inicial = " + soma + " <br>>";

var somaAC = numeros5.reduce(somar, 10000);  // 10000 + 100 + 
resposta9 = resposta9 + "soma com valor inicial = " + somaAC + " <br>>";

var subR = numeros5.reduce(subtrair);      // 100 - ...
resposta9 = resposta9 + "subtracao (reduce) = " + subR + " <br>>";

var subRR = numeros5.reduceRight(subtrair); // 800 - ...
resposta9 = resposta9 + "subtracao (reduceRight) = " + subRR + " <br>>";

// Situações Especiais

// (1) Chamando reduce em array vazio SEM valor inicial (ERRO)
var numeros6 = [];
var soma2 = numeros5.reduce(somar);

// (2) Chamando reduce em array vazio COM valor inicial
var numeros6 = [];
var soma2 = numeros5.reduce(somar, 10000);
resposta9 = resposta9 + "Soma com valor inicial = " + soma2 + " <br>>";

// (3) Chamando reduce em array de tamanho = 1 COM valor inicial
var numeros5 = [100];
var soma2 = numeros5.reduce(somar, 10000);
resposta9 = resposta9 + "Soma com valor inicial = " + soma2 + " <br>>";

// (4) Chamando reduce em array de tamanho = 1 SEM valor inicial
var numeros5 = [100];
var soma2 = numeros5.reduce(somar);
resposta9 = resposta9 + "Soma com valor inicial = " + soma2 + " <br>";

document.getElementById("resultado8").innerHTML = resposta9;
				
//Every e Some
				
var numeros6 = [0,1,2,3];

var todos = numeros6.every(par);
var algum = numeros6.some(par);

var texto = "numeros = [" + numeros6 + "] <br>";
texto = texto + "Todos são pares (every)? " + todos + "<br>";
texto = texto + "Existe algum par (some)? " + algum;

document.getElementById("resultado9").innerHTML = texto;

function par(valor) {
    return (valor % 2 == 0);
}

//Find e FindIndex

var cores2 = ["Verde","Amarelo","Azul","Branco"];

var elemento = cores2.find(grande);
var indice = cores2.findIndex(grande);

var texto1 = "numeros = [" + cores2 + "] <br>";
texto1 = texto1 + "Elemento (find) " + elemento;
texto1 = texto1 + " está na posição (findIndex) " + indice;

document.getElementById("resultado10").innerHTML = texto1;

function grande(valor) {
    return (valor.length > 5);
}

// MATRIZ

var distancias = [
  [0   , 2779, 434 , 1383, 2775, 3090],
  [5491, 0   , 2765, 1509, 3132, 761 ],
  [572 , 5985, 0   , 1527, 3172, 3179],
  [1851, 4141, 2345, 0   , 2222, 1711],
  [3572, 4563, 4066, 2747, 0   , 2706],
  [4505, 901 , 4998, 1712, 3662, 0   ]
];

function calcular() {
  var cidade1 = document.getElementById("cidade1");
  var indice1 = cidade1.options[cidade1.selectedIndex].value;
  var nome1 = cidade1.options[cidade1.selectedIndex].text;

  var cidade2 = document.getElementById("cidade2");
  var indice2 = cidade2.options[cidade2.selectedIndex].value;
  var nome2 = cidade2.options[cidade2.selectedIndex].text;

  var distancia = document.getElementById("distancia");
  var valorD = distancia.options[distancia.selectedIndex].value;
  var textoD = distancia.options[distancia.selectedIndex].text;

  var maior_indice = Math.max(indice1, indice2);
  var menor_indice = Math.min(indice1, indice2);

  var distancia = 0;
  if (valorD == 0) {
      // Distância Rodoviária (i < j)
      distancia = distancias[menor_indice][maior_indice];
  } else {
      // Distância Aérea (i > j)
      distancia = distancias[maior_indice][menor_indice];
  }

  var resposta = "A distância " + textoD;
  resposta = resposta + " entre " + nome1;
  resposta = resposta + " é " + nome2;
  resposta = resposta + " é de " + distancia + "Km";

  document.getElementById("resultado11").innerHTML = resposta;
}

//var i = Number(document.getElementById("cidade1").value);
      
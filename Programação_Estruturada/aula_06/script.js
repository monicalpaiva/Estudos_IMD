function situacao() {
  var saida = resultado();
  document.getElementById('resultado').innerHTML = "O valor é aprovado: " + saida;
}

function resultado() {
  var x = Number(document.getElementById('N1').value);
  var y = Number(document.getElementById('N2').value);
  document.getElementById('depuracao1').innerHTML = "Valor do primeiro número:" + x; // informar o valor para depuração

  var m = media(x,y);
  var r = m >= 7;

  document.getElementById('depuracao2').innerHTML = "Valor do resultado da média" + m;

  return r;
}

/**
function media(a, b) {
  var c = (a + b)/2;

  document.write(c); // A página vai ser limpa, aparecendo apenas o resultado
  window.alert(x);  // Uma janela de alerta vai aparecer com o resultado

  return c;
}
**/

function media(a, b) {
  var c = (a + b)/2;
  return c;
}

/**segunda explicação */
function condicao() {
  var saida = resultado01();
  document.getElementById('resultado01').innerHTML = "O resultado é " + saida;
}

function resultado01() {
  var x = Number(document.getElementById('Nota01').value);
  var y = Number(document.getElementById('Nota02').value);
  var m = media1(x,y);
  var r = m >= 7;

  return r;
}

function media1(a, b) {
  var c = (a + b)/2;
  return c;
}
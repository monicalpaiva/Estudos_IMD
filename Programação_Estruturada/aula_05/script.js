function situacao() {
  var saida = resultado();
  document.getElementById('resultado').innerHTML = "O resultado é " + saida;
}

function resultado() {
  var x = Number(document.getElementById('N1').value);
  var y = Number(document.getElementById('N2').value);
  document.getElementById('depuracao1').innerHTML = x; // informar o valor para depuração

  var m = media(x,y);
  var r = m >= 7;

  document.getElementById('depuracao2').innerHTML = m;

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
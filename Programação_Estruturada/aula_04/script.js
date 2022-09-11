//situacao('Nota1', 'Nota2', 'resultado2')
function situacao(entrada1, entrada2, saida) {
	var m = ler_entrada_calcular_media(entrada1, entrada2);
    document.getElementById(saida).innerHTML = resultado2(m);
}

//function calcular(entrada1, entrada2, saida) {
//	var m = ler_entrada_calcular_media(entrada1, entrada2);
//	document.getElementById(saida).innerHTML = m;
//}

function ler_entrada_calcular_media(entrada1, entrada2) {
	var x = Number(document.getElementById(entrada1).value);
	var y = Number(document.getElementById(entrada2).value);

	return media2(x,y);
}

function media2(a, b) {
	return (a + b)/2;
}

function resultado2(m) {
    let condicao;
    if (m < 7) {
        condicao = "Reprovado";
      } else {
        condicao = "Aprovado";
      }
    return condicao;
}
			
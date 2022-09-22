function positivos(entrada1,entrada2) {
    let m = ler_entrada(entrada1,entrada2);
    document.getElementById("saida").innerHTML = escrever_saida(m);
}
 
function ler_entrada() {
    let x = Number(document.getElementById("entrada1").value);
    let y = Number(document.getElementById("entrada2").value);
 
    return maior(x,y);
}
   
function escrever_saida(m) {
    let condicao;
    if (m > 0) {
        condicao = "true";
    } else {
        condicao = "false";
    }
    return condicao;
}
 
function maior(valor1, valor2) {
    let menordeles;
    if (valor1 < valor2) {
        menordeles = valor1;
    } else {
        menordeles = valor2;
    }
    return menordeles;
}


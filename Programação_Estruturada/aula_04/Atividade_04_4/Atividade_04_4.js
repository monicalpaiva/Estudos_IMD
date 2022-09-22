function pitagoras(hipotenusa, cateto1, cateto2) {
    let m = ler_entrada(cateto1, cateto2);
    document.getElementById("saida").innerHTML = escrever_saida(m,hipotenusa);
}

function ler_entrada(){
    let x = Number(document.getElementById("cateto1").value);
    let y = Number(document.getElementById("cateto2").value);
   
    return quadradro(x,y);
}

function escrever_saida(m,hipotenusa){
    let condicao= true;
    if (m == hipotenusa){
        condicao = "true";
    } else {
        condicao = "false";
    }
    return condicao;
}

function quadradro(x,y){
    let valor;
    valor = Math.pow(x,2)+ Math.pow(y,2);
    return valor;
}
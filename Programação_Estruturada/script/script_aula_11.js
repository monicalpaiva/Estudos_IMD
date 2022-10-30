function dia_da_semana1() {
    var dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];
    var hoje = new Date();
    var texto = dias[hoje.getDay()];
    document.getElementById("resultado1").innerHTML = texto;
}

//acessando o array

function dia_da_semana2() {
    var dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];
    var tamanho = dias.length;
    var primeiro = dias[0];
    var ultimo = dias[tamanho - 1];
    texto1 = "Tamanho = "+ tamanho + "<br>";
    texto1 = texto1 + "Primeiro = " + primeiro + "<br>";
    texto1 = texto1 + "Ultimo = " + ultimo;
    dias[2]= "TUESDAY";    

    document.getElementById("resultado2").innerHTML = texto1 + "<br>" + dias;
}

// Preenchendo os arrays

function nomes(){
    var pessoas = [];
    var total = Number(document.getElementById("total").value);
    for (i=0; i<total;i++){
        var pessoa = prompt("Entre com a "+ i + " pessoa");
        pessoas[i]  = pessoa;
    }
    document.getElementById("resultado3").innerHTML = pessoas;
}

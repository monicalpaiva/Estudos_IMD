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
    

    document.getElementById("resultado2").innerHTML = texto1 + "<br>" + dias;
}
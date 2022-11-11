/**
 * 400 dias
 * 400/12 => 33, 33 anos => 33 anos
 * 400 - (anos * 12) => 4 meses
 * 
 */
function tempo (idade){

    var anos = Math.trunc(idade/365);
    var meses = Math.trunc((idade-(365*anos))/30);
    var dias = idade - ((365*anos)+(30*meses));

    console.log(anos + " ano(s) " + meses + " mes(es) " + dias + " dia(s)")
   
}

tempo(400);
tempo(800);
tempo(30);
function calcularSuprimento (idade, quantidade, preco){
    var valorTotal;

    valorTotal = (85 - idade)*(quantidade*365)*preco;


    console.log("Você precisará de R$" + valorTotal + " para ter um suprimento de lanche até 85 anos.");
}
 
calcularSuprimento(36,3,7.50);
// PRECISA REVISAR

function excluir (conjunto, conjuntoExcluir){
    for (var i=0; i<conjunto.length;i++){
        for(var j=0; j<conjuntoExcluir.length; j++){
            if (conjunto[i] === conjuntoExcluir[j]){
                conjunto.splice(i,1);
            }
        }
    }    
     return conjunto;
}


var exemplo = [1, 2, 3, 1, 2];
console.log(excluir(exemplo, [1, 2])); // [ 3 ]

exemplo = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(excluir(exemplo, ['a', 'd'])); // [ 'b', 'e' ]

exemplo = [true, false, false, true, true, false, false];
console.log(excluir(exemplo, [true])); // [ false, false, false, false ] 
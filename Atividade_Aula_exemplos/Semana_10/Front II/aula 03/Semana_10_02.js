// PRECISA REVISAR

function unico (conjunto){
    for (var i=0; i<conjunto.length;i++){
        for(var j=0; j<conjunto.length; j++){
            if (conjunto[i] === conjunto[j] && (i != j)){
               conjunto.splice(j, 1);
               //console.log("i = " + i + "j= " + j + "[ " + conjunto + " ]");
            }
        }
    }    
    return conjunto;
}

var exemplo = [1, 2, 3, 1, 2];
console.log(unico(exemplo)); // [ 1, 2, 3 ]
exemplo = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(unico(exemplo)); // [ 'a', 'b', 'd', 'e' ]
exemplo = [true, false, false, true, true, false, false];
console.log(unico(exemplo)); // [ true, false ]
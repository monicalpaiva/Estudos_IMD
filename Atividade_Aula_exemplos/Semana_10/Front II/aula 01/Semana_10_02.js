/**
 * delta = b^2 - 4 * a * c
 * if delta > 0 então possível
 * else “Impossivel calcular”
 */
function bhaskara (a,b,c){
    var delta = ((b**2) - (4*a*c));
    var raiz01;
    var raiz02;

    if (delta > 0){
        raiz01 = ((-b + Math.sqrt(delta))/(2*a));
        raiz02 = ((-b - Math.sqrt(delta))/(2*a));
        console.log("X1 = " + raiz01 + " X2 = " + raiz02);
    }else{
        console.log( "“Impossivel calcular”");
    }
} 

bhaskara(1,-1,-2);
bhaskara(10,3,5);
bhaskara(10,20.1,5.1);
bhaskara(0,20,5);

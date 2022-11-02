var calcularDelta = (a, b, c) => {
    let delta = b*b - 4*a*c;
    return delta;
 
    if (delta < 0) {
       return ' a equação não possui resultados reais';
    }
 
    return ' a equação possui dois resultados reais distintos ou iguais';
 }

var resultado = calcularDelta(1, -14, 50);
console.log(resultado);
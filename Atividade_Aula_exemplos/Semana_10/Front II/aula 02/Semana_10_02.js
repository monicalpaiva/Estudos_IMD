function calcularArea (propriedade,formula){
    return formula(propriedade);
}

console.log(calcularArea(5, (x)=> x*x));
console.log(calcularArea(2, (r)=>Math.PI*r*r))
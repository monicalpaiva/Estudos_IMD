/**
 * Lista de Exercícios – Aulas 04
 * Objetos em Javascript
*/


const excluirPropriedades = (objeto, propriedades) => {
   propriedades.forEach(p => {
    delete objeto[p];
   });

   return objeto;

}; 

var exemplo = { a: 1, b: 2, c: true};
console.log(excluirPropriedades(exemplo, ['b'])); // { a: 1, c: true }
exemplo = { a: 1, b: 2, c: true};
console.log(excluirPropriedades(exemplo, ['b', 'a'])); // { c: true }

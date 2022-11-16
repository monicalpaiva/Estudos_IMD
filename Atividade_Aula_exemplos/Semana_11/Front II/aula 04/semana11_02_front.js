/**
 * Lista de Exercícios – Aulas 04
 * Objetos em Javascript
 */

const arrayUnique = require("array-unique");

 const transformarObjEmArray = (objeto) => {
   const arrays = Object.entries(objeto);
   for (i=0; i < arrays.length;i++){
    console.log(arrays[i]);
   }
  };
  var exemplo = { a: 1, b: 2, c: 3};
  console.log(transformarObjEmArray(exemplo)); 
  
  // [['a', 1], ['b',2], ['c',3]


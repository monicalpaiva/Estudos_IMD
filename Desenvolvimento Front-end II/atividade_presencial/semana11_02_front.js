/**
 * Lista de Exercícios – Aulas 04
 * Objetos em Javascript
 */

 const transformarObjEmArray = (objeto) => {
   const arrays = Object.entries(objeto) 
   return arrays;
  };
  var exemplo = { a: 1, b: 2, c: true};
  console.log(transformarObjEmArray(exemplo)); 
  
  // [['a', 1], ['b',2], ['c',3]

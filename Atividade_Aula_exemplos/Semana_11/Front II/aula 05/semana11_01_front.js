//b)
const corpodapagina = document.querySelector('body');
corpodapagina.style.fontFamily = "Arial, sans-serif";

//c)
const valordoSpan1 = document.getElementById('nome');;
valordoSpan1.textContent = "Monica";
const valordoSpan2 = document.getElementById('idade');;
valordoSpan2.textContent = "37";
const valordoSpan3 = document.getElementById('cidade');;
valordoSpan3.textContent = "Natal";

//d)
const estiloLi = document.querySelectorAll('li');
for (const element of estiloLi){
    element.style.color = 'red';
}
 
//e)
document.body.insertBefore(document.createElement("img"), document.querySelector("h1"));
const image = document.querySelector('img');
image.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0V15QCVqnNyXh8i1xoKCsxCH4cqs-twE4-g&usqp=CAU');
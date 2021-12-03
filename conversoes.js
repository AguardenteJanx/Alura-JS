//Tipo de dados + booleanos 

//Conversão implícita
const numero = 456; 
const numeroString = "456";

//Como estamos comparando um número com um texto
console.log(numero === numeroString);

//Para que ocorra uma conversão implícita usá-se apenas dois iguais
console.log(numero == numeroString);
//As vezes esse tipo de conversão possuí alguns bugs

//Ao usar o + com uma string e um número, não ocorre uma soma, mas uma concatenação.
console.log(numero + numeroString);

//NaN
const numeroInvalido = "654a";
console.log(numero + Number(numeroInvalido));

//Conversão Explícita
//Number()
//String()
console.log(numero + Number(numeroString));




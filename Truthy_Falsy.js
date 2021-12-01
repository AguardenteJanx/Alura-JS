//boolean
const usuarioLugado = true; 
const contaPaga = false; 

// Truthy ou falsy

//0 => falsy 
//1 => truthy 

//O == compara apenas o valor da variável e não o tipo. 
console.log(0 == false); 
console.log("" == false); 
console.log(1 == true); 

//null ==> vazio -ou nada
//undefined

let minhaVar; 
let varNull = null; 

console.log(minhaVar);
console.log(varNull); 

let numero = 3; 
let texto = "Alura"; 

//O typeof é uma palavra reservada que retorna o tipo de dado que está sendo guardado em uma var
console.log(typeof numero); 
console.log(typeof texto); 
console.log(typeof minhaVar);

//O null é criado como objeto no JS
console.log(typeof varNull);
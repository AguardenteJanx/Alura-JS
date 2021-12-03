let telefone = 12341234;
console.log('O telefone é ' + String(telefone)); //Aqui ocorre a conversão do número 12341234 para uma string “12341234"
// e assim poderemos fazer a concatenação entre as strings

console.log("O telefone é " + telefone.toString()); //o .toString() é uma outra forma para  fazer essa conversão,
// que é mais parecida com outras linguagens de programação.

let usuarioConectado= false;

console.log (String(usuarioConectado)); // Aqui ocorre uma conversão do boolean para string
usuarioConectado = true;
console.log (String(usuarioConectado));

//Cálculo com String
let largura = '10';
let altura = "5";
console.log(Number(largura) * Number(altura)); //Teremos a conversão de String para números, possibilitando a realização da da multiplicação
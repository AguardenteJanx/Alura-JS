const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo!';
const senha = "321frsdada";
const stringDeNumeros = "34567";

const citacao = 'O Leo disse "Oi!"'; 
console.log(citacao);

const exemplo = "Meu nome é: "; 
const meuNome = "Diana"; 
console.log(exemplo + meuNome);

//Concatenação (+)

console.log(texto1 + senha);

//Unicode Caracters
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

//O \u significa quer dizer que estamos falando de códigos Unicode, e não de strings de texto usuais.

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input);

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);

//Tamanho de uma string
const senha2 = "minhaSenha123"
console.log(senha2.length);

//template string ou template literal

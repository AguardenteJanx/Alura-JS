const nome = "Diana";
const idade = 2021 - 2003;
const cidadeNasc = "São Paulo";  
const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade
+ " sou de " + cidadeNasc;
console.log(apresentacao);

//Com template String
//Ao invés de usar aspas duplas ou simples ("", ''), usá-se o acento grave "``". 
const apresentacao_templateString = `Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeNasc}`;
console.log(apresentacao);

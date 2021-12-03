//Declaração de função
function minhaFuncao(param) {
    //Bloco de instruções
}

minhaFuncao("param");

//Expressão de função
//Dessa forma a função não tem um nome
//Jeito mais curto
//Esse tipo de função normalmente não tem nome 
const exemplo = function(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 8)); 

//Diferença
//Funções são listadas no topo.  

console.log(apresentar());

function apresentar() {
    return "olá";
}

//Ela não pode ser chamada antes de ser declarada
console.log(soma(1, 8)); 

const exemplo = function(num1, num2) {
    return num1 + num2;
}


//Arrow Function
//Jeito rápido e curto
const apresentarArrow = nome => `meu nome é ${nome}`;
const somaArrow = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Digite um número menor que 10!";
    } else {
        return num1 + num2;
    }
}
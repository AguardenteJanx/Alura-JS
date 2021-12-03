//O operador ternário é um if, faz uma comparação.

const idadeMinima = 18;
const idadeCliente = 16;

//if (idadeCliente >= idadeMinima) {
//    console.log("Cerveja")
//} else {
//    console.log("Suco")
//}

//O operador ternário funciona igual ao if;
            //Condição                    //True      //False
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");
//É de dificil manutenção. 
//Caso seja apenas um retorno e não uma cadeia, pode-se usar esse operador para deixar o código mais conciso


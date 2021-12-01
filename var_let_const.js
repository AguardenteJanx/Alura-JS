//Var

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area); 
//var area; 
//Como no javaScript lê todo o código antes de executar, as variáveis podem ser declaradas após o seu usao. 
//mas, por boa prática, deve-se declará-las antes de chamá-las. 

//let forma = 'retângulo'; 
//let altura = 5;
//let comprimento = 7; 
///let area;

//if (forma === 'retângulo') {
  //  area = altura * comprimento; 
    
//} else {
//    area = (altura * comprimento) /2;
//}

//console.log(area);
//A var não é mais tão utilizada, por ser mais solta e propensa a bugs
var exemplo;
//A let é a mais utilizada e precisa ser declarada antes de ser chamada.
let area; 
//A const precisa ser declarada antes de ser chamada e tem seu valor imutável.
const forma = 'triangulo'; 
const h = 5;
const comprimento = 7; 

if (forma === 'quadrado') {
    area = h * comprimento; 
    
} else {
   area = (h * comprimento) /2;
}

console.log(area); 

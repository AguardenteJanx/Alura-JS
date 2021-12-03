function soma(numero_um, numero_dois){
    return numero_um + numero_dois;
}

//Retorna uma soma
console.log(soma(5, 10));
console.log(soma(-10, -9));

//Retorna NaN
console.log(soma()); 

//Parâmetros x argumentos 

//Ordem dos parâmetros 
function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`; 

}

//Os parâmetros precisam ser passados na ordem correta
console.log(nomeIdade(18, "Diana"));

//Caso na execução seja passado apenas um parâmetro, ele será multiplicado pelo valor padrão, se forem recebidos dois parâmetros o JS irá desconsiderar o padrão.
function multiplica(numero_um = 1, numero_dois = 1) {
    return numero_um * numero_dois;
}
                            //12       //15
console.log(multiplica(soma(3, 9), soma(10,5))); 

//Caso executemos a função sem passar um dos parâmetros, ele irá receber o valor undefined
//console.log(multiplica(soma(4, 5))); 

//OBS: Mesmo que os nomes dos parâmetros sejam iguais em funções diferentes não haverá nenhuma interferência, pois os parâmetros só são válidos dentro daquela determinada função.

//Função sem parâmetros e sem retorno
function cumprimentar() {
    console.log('oi gente!')
   }
   
cumprimentar();
 
//Função com parâmetro e sem rertorno
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
cumprimentaPessoa('Marinês');

//Função dentro de função
function cumprimentar(){
    return 'Oi gente!';
   }
   
function acaoCumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
 }
   
   cumprimentaPessoa('Paula'); 

//Função com mais de um parâmetro e retorno
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45);
   

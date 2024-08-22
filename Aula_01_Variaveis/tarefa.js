/*TAREFA 25/06/20024*/
//2 programas com operadores de atribuição,
//2 programas com operadores ternários
//2 programas com operações aritiméticas 

//2 programas com operadores de atribuição

//1)
let gato = "Tico";
let corOlhos = "amarelos";
let corPelo = "branco e amarelo";

console.log("O gato " + gato + " tem a cor dos olhos " + corOlhos + " e o pêlo " + corPelo + "." );

//2)
let result = 15 % 2; //resto da divisão

console.log("15 % 2 = " + result);

//2 programas com operadores ternários

//1) Verificação de Maioridade

let idade = 18;
let mensagem = (idade >= 18) ? "Você é maior de idade." : "Você é menor de idade.";

console.log(mensagem);

//2) Verificação de Número Par ou Ímpar

let numero = 6;
let tipo = (numero % 2 === 0) ? "par" : "ímpar";

console.log("O número " + numero + " é " + tipo);

//2 programas com operações aritiméticas

//1) Operadores de Atribuição com Variáveis Numéricas

let a = 10;  
let b = 5;
//a+ = b;
a = a + b
console.log("A soma de a com b = " + a);

//2) 
let c = 10;  
//c* = 3;
c = c * 3
console.log("A multiplicação de a com 3 = " + c);

a = 8;
a+= 3;

console.log("Resultado: " + a);
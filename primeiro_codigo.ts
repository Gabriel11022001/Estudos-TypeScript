/**
 * em typescript o tipo é estático, ou seja, quando for 
 * declarar uma variável, tenho que adicionar o tipo
 * 
 * -> o compilador do typescript converte o código desenvolvido
 * em typescript para javascript
 * 
 * -> os arquivo typescript possuem a extenssão .ts
 */

let nomeCompleto: string = "Gabriel Rodrigues dos Santos";

console.log(nomeCompleto);

let peso: number = 87.88;

console.log(peso);

let primeiroNumero: number = 22;
let segundoNumero: number = 11;

let soma: number = primeiroNumero + segundoNumero;

console.log(soma);

console.log("A soma entre " + primeiroNumero + " e " + segundoNumero + " é igual a " + soma);

function somar(primeiroValor: number, segundoValor: number) {

    return primeiroValor + segundoValor
}

let segundaSoma: number = somar(12, 22)

console.log(segundaSoma);

let genero: string = "Masculino"

/*
genero = 12

vai dar erro pois estou tentando atribuir um number
a uma string
*/
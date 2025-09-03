/**
 * em typescript o tipo é estático, ou seja, quando for
 * declarar uma variável, tenho que adicionar o tipo
 *
 * -> o compilador do typescript converte o código desenvolvido
 * em typescript para javascript
 *
 * -> os arquivo typescript possuem a extenssão .ts
 */
var nomeCompleto = "Gabriel Rodrigues dos Santos";
console.log(nomeCompleto);
var peso = 87.88;
console.log(peso);
var primeiroNumero = 22;
var segundoNumero = 11;
var soma = primeiroNumero + segundoNumero;
console.log(soma);
console.log("A soma entre " + primeiroNumero + " e " + segundoNumero + " é igual a " + soma);
function somar(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
}
var segundaSoma = somar(12, 22);
console.log(segundaSoma);
var genero = "Masculino";
genero = 12;

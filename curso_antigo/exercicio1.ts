/**
 * Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.
 */

const primeiroValor: number = 21
const segundoValor: number = 11
const terceiroValor: number = 22
const soma: number = primeiroValor + segundoValor

if (soma < terceiroValor) {
    console.log(primeiroValor + " + " + segundoValor + " é menor que " + terceiroValor)
} else {
    console.log(primeiroValor + " + " + segundoValor + " não é menor que " + terceiroValor)
}

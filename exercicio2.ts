/**
 * Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se 
 * somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se 
 * atribuir o resultado para uma variável C e mostrar seu conteúdo na tela
 */

const primeiroValor: number = 22
const segundoValor: number = 34

let resultado: number

if (primeiroValor == segundoValor) {
    // somar os dois valores
    resultado = primeiroValor + segundoValor
} else {
    resultado = primeiroValor * segundoValor
}

console.log(primeiroValor)
console.log(segundoValor)

console.log(resultado)

// função normal
function calcular(primeiroValor: number, segundoValor: number) {

    if (primeiroValor == segundoValor) {

        return primeiroValor + segundoValor
    }

    return primeiroValor * segundoValor
}

// arrow function
const calcularArrow = (primeiroValor: number, segundoValor: number) => {
    
    if (primeiroValor == segundoValor) {

        return primeiroValor + segundoValor
    }

    return primeiroValor * segundoValor
}

console.log(calcular(primeiroValor, segundoValor))

console.log(calcularArrow(primeiroValor, segundoValor))
/**
 * string -> textos 
 * number -> números inteiro e float
 */

let nome: string = "Gabriel Rodrigues dos Santos"

console.log(nome)

let primeiroValor: number = 22
let segundoValor: number = 23

console.log(primeiroValor + segundoValor)

let possuiCnh: boolean = false

if (possuiCnh) {
    console.log("possui cnh")
} else {
    console.log("não possui cnh")
}

// lista de strings
const clientes: string[] = ["Gabriel", "Pedro", "Eduardo", "Fernanda", "Maria"]

console.log(clientes)

// adicionando elementos na lista na ultima posição
clientes.push("José")
clientes.push("Gustavo")

console.log(clientes)

// lista de numbers
const numeros: number[] = []

for (let contador: number = 0; contador < 100; contador++) {
    numeros.push(contador + 1)
}

console.log(numeros)

// somar os valores da lista
let soma: number = 0

for (let i: number = 0; i < numeros.length; i++) {
    soma = soma + numeros[ i ]
}

console.log("Soma: " + soma)
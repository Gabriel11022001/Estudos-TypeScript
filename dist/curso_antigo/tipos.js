"use strict";
/**
 * string -> textos
 * number -> números inteiro e float
 */
Object.defineProperty(exports, "__esModule", { value: true });
let nome = "Gabriel Rodrigues dos Santos";
console.log(nome);
let primeiroValor = 22;
let segundoValor = 23;
console.log(primeiroValor + segundoValor);
let possuiCnh = false;
if (possuiCnh) {
    console.log("possui cnh");
}
else {
    console.log("não possui cnh");
}
// lista de strings
const clientes = ["Gabriel", "Pedro", "Eduardo", "Fernanda", "Maria"];
console.log(clientes);
// adicionando elementos na lista na ultima posição
clientes.push("José");
clientes.push("Gustavo");
console.log(clientes);
// lista de numbers
const numeros = [];
for (let contador = 0; contador < 100; contador++) {
    numeros.push(contador + 1);
}
console.log(numeros);
// somar os valores da lista
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    // soma = soma + numeros[ i ]
}
console.log("Soma: " + soma);
//# sourceMappingURL=tipos.js.map
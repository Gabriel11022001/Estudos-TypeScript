/**
 * string -> textos
 * number -> números inteiro e float
 */
var nome = "Gabriel Rodrigues dos Santos";
console.log(nome);
var primeiroValor = 22;
var segundoValor = 23;
console.log(primeiroValor + segundoValor);
var possuiCnh = false;
if (possuiCnh) {
    console.log("possui cnh");
}
else {
    console.log("não possui cnh");
}
// lista de strings
var clientes = ["Gabriel", "Pedro", "Eduardo", "Fernanda", "Maria"];
console.log(clientes);
// adicionando elementos na lista na ultima posição
clientes.push("José");
clientes.push("Gustavo");
console.log(clientes);
// lista de numbers
var numeros = [];
for (var contador = 0; contador < 100; contador++) {
    numeros.push(contador + 1);
}
console.log(numeros);
// somar os valores da lista
var soma = 0;
for (var i = 0; i < numeros.length; i++) {
    // soma = soma + numeros[ i ]
}
console.log("Soma: " + soma);
export {};
//# sourceMappingURL=tipos.js.map
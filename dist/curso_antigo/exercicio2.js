/**
 * Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
 * somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
 * atribuir o resultado para uma variável C e mostrar seu conteúdo na tela
 */
var primeiroValor = 22;
var segundoValor = 34;
var resultado;
if (primeiroValor == segundoValor) {
    // somar os dois valores
    resultado = primeiroValor + segundoValor;
}
else {
    resultado = primeiroValor * segundoValor;
}
console.log(primeiroValor);
console.log(segundoValor);
console.log(resultado);
// função normal
function calcular(primeiroValor, segundoValor) {
    if (primeiroValor == segundoValor) {
        return primeiroValor + segundoValor;
    }
    return primeiroValor * segundoValor;
}
// arrow function
var calcularArrow = function (primeiroValor, segundoValor) {
    if (primeiroValor == segundoValor) {
        return primeiroValor + segundoValor;
    }
    return primeiroValor * segundoValor;
};
console.log(calcular(primeiroValor, segundoValor));
console.log(calcularArrow(primeiroValor, segundoValor));
export {};
//# sourceMappingURL=exercicio2.js.map
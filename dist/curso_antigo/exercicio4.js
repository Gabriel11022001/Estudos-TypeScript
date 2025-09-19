// calcular a média do aluno baseado em uma lista de notas
var calcularMedia = function (notas) {
    var soma = 0;
    var media = 0;
    for (var contador = 0; contador < notas.length; contador++) {
        // soma += notas[ contador ]
    }
    media = soma / notas.length;
    return media;
};
var notas = [9, 8.76, 6, 7, 7, 10];
console.log(notas);
var media = calcularMedia(notas);
console.log("média das notas do aluno: " + media);
export {};
//# sourceMappingURL=exercicio4.js.map
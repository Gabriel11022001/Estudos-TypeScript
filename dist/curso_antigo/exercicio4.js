"use strict";
// calcular a média do aluno baseado em uma lista de notas
Object.defineProperty(exports, "__esModule", { value: true });
const calcularMedia = (notas) => {
    let soma = 0;
    let media = 0;
    for (let contador = 0; contador < notas.length; contador++) {
        // soma += notas[ contador ]
    }
    media = soma / notas.length;
    return media;
};
const notas = [9, 8.76, 6, 7, 7, 10];
console.log(notas);
const media = calcularMedia(notas);
console.log("média das notas do aluno: " + media);
//# sourceMappingURL=exercicio4.js.map
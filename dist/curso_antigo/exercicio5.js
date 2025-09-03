"use strict";
// obter a maior nota e a menor nota do aluno
Object.defineProperty(exports, "__esModule", { value: true });
const obterMaiorNota = (notas) => {
    let maiorNota = 0;
    notas.forEach((nota) => {
        if (nota > maiorNota) {
            maiorNota = nota;
        }
    });
    return maiorNota;
};
const notas = [8, 7, 6, 8.99, 4.67, 9.0, 8.22];
console.log(obterMaiorNota(notas));
const obterMenorNota = (notasAluno) => {
    let menorNota = 999999;
    notas.forEach((nota) => {
        if (nota < menorNota) {
            menorNota = nota;
        }
    });
    return menorNota;
};
console.log(obterMenorNota(notas));
//# sourceMappingURL=exercicio5.js.map
// obter a maior nota e a menor nota do aluno
var obterMaiorNota = function (notas) {
    var maiorNota = 0;
    notas.forEach(function (nota) {
        if (nota > maiorNota) {
            maiorNota = nota;
        }
    });
    return maiorNota;
};
var notas = [8, 7, 6, 8.99, 4.67, 9.0, 8.22];
console.log(obterMaiorNota(notas));
var obterMenorNota = function (notasAluno) {
    var menorNota = 999999;
    notas.forEach(function (nota) {
        if (nota < menorNota) {
            menorNota = nota;
        }
    });
    return menorNota;
};
console.log(obterMenorNota(notas));

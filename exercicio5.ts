// obter a maior nota e a menor nota do aluno

const obterMaiorNota = (notas: number[]): number => {
    let maiorNota: number = 0

    notas.forEach((nota) => {

        if (nota > maiorNota) {
            maiorNota = nota
        }

    })

    return maiorNota
}

const notas: number[] = [8, 7, 6, 8.99, 4.67, 9.0, 8.22]

console.log(obterMaiorNota(notas))

const obterMenorNota = (notasAluno: number[]): number => {
    let menorNota: number = 999999

    notas.forEach((nota) => {

        if (nota < menorNota) {
            menorNota = nota
        }

    })

    return menorNota
}

console.log(obterMenorNota(notas))
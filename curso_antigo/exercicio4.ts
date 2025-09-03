// calcular a média do aluno baseado em uma lista de notas

const calcularMedia = (notas: number[]): number => {
    let soma: number = 0
    let media: number = 0

    for (let contador: number = 0; contador < notas.length; contador++) {
        soma += notas[ contador ]
    }

    media = soma / notas.length

    return media
}

const notas: number[] = [9, 8.76, 6, 7, 7, 10]

console.log(notas)

const media: number = calcularMedia(notas)

console.log("média das notas do aluno: " + media)
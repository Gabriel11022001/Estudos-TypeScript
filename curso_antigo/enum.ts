enum TamanhoCamisa {

    P = "P",
    M = "M",
    G = "G",
    GG = "GG"

}

const camisa: { modelo: string; precoVenda: number; tamanho: TamanhoCamisa } = {
    modelo: "Camisa de teste",
    precoVenda: 12.99,
    tamanho: TamanhoCamisa.G
}

console.log(camisa)
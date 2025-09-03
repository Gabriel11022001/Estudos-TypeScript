// posso definir um objeto dessa forma
const cliente = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    telefone: "14998776655"
}

console.log(cliente)

// essa é a melhor forma, pois eu defino o tipo das propriedades do objeto
const endereco: { cep: string; logradouro: string; complemento: string } = {
    cep: "19690-000",
    logradouro: "endereço de teste",
    complemento: "complemento de teste"
}

console.log(endereco)
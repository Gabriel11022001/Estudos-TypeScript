// função padrão
function apresentarDadosCliente(nomeCompleto: string, telefone: string, salario: number, possuiCnh: boolean) {
    console.log(nomeCompleto)
    console.log(telefone)
    console.log(salario)
    console.log(possuiCnh ? "Possui cnh" : "Não possui cnh")
}

apresentarDadosCliente("Gabriel", "14998787654", 5000, true)

// função retornando dados
function gerarCliente(nomeCompleto: string, telefone: string, email: string, status: boolean): object {
    
    return {
        nomeCompleto: nomeCompleto,
        telefone: telefone,
        email: email,
        status: status ? "Ativo" : "Inativo"
    };
}

const cliente: object = gerarCliente("Gabriel Rodrigues dos Santos", "14998787655", "gabriel@teste.com", true)

console.log(cliente)

// arrow functions
const gerarClienteArrow = (nomeCompleto: string, telefone: string | number, email: string, status: boolean): Object => {
    
    const cliente: Object = {
        nomeCompleto: nomeCompleto.toUpperCase(),
        telefone: telefone,
        email: email,
        status: status ? "Ativo" : "Inativo"
    }

    return cliente
}

console.log(gerarClienteArrow(
    "Gabriel Rodrigues dos Santos",
    "(14) 99878765",
    "gabrielteste@teste.com",
    false
))
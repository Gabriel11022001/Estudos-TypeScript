/**
 * criar lista de clientes para teste
 */

const gerarClientesTeste = (): object[] => {
    const clientes: object[] = []

    for (let contador: number = 0; contador < 100; contador++) {
        
        const cliente: object = {
            nomeCompleto: "Cliente de teste " + (contador + 1),
            telefone: "(14) 998775577",
            email: "teste" + (contador + 1) + "@teste.com",
            status: contador % 2 == 0 ? "Ativo" : "Inativo",
            endereco: {
                cep: "17690-000",
                logradouro: "endereço de teste " + (contador + 1),
                complemento: "complemento de teste",
                bairro: "bairro de teste",
                uf: "SP",
                cidade: "Bastos",
                numero: contador + 2
            }
        }

        clientes.push(cliente)
    }

    return clientes
}

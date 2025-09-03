/**
 * criar lista de clientes para teste
 */
var gerarClientesTeste = function () {
    var clientes = [];
    for (var contador = 0; contador < 100; contador++) {
        var cliente = {
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
        };
        clientes.push(cliente);
    }
    return clientes;
};
console.log(gerarClientesTeste());
var clientes = gerarClientesTeste();
var apresentarClientes = function (clientes) {
    clientes.forEach(function (clienteApresentar) {
        console.log(clienteApresentar.nomeCompleto);
    });
};
apresentarClientes(clientes);

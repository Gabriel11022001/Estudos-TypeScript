"use strict";
/**
 * criar uma lista de clientes e implementar
 * funções para realizar as seguintes operações:
 *
 * 1 -> adicionar cliente
 * 2 -> editar cliente
 * 3 -> apresentar todos os clientes
 * 4 -> remover um cliente
 * 5 -> apresentar um cliente em expecifico
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Genero;
(function (Genero) {
    Genero["Masculino"] = "Masculino";
    Genero["Feminino"] = "Feminino";
})(Genero || (Genero = {}));
var TipoDocumento;
(function (TipoDocumento) {
    TipoDocumento["cpf"] = "cpf";
    TipoDocumento["rg"] = "rg";
})(TipoDocumento || (TipoDocumento = {}));
let clientes = [];
const validarExisteClienteCadastradoMesmoDocumento = (tipoDocumento, numeroDocumento) => {
    let existe = false;
    clientes.forEach((cliente) => {
        if (tipoDocumento == TipoDocumento.cpf) {
            // validar cpf
            if (cliente.cpf == numeroDocumento) {
                existe = true;
            }
        }
        else {
            if (cliente.rg == numeroDocumento) {
                existe = true;
            }
        }
    });
    return existe;
};
// cadastrar um cliente
const cadastrarCliente = (clienteCadastrar) => {
    // validar duplicidade de cpf
    if (validarExisteClienteCadastradoMesmoDocumento(TipoDocumento.cpf, clienteCadastrar.cpf)) {
        console.log("Já existe outro cliente cadastrado com o mesmo cpf!");
        return;
    }
    // validar duplicidade de rg
    if (validarExisteClienteCadastradoMesmoDocumento(TipoDocumento.rg, clienteCadastrar.rg)) {
        console.log("Já existe outro cliente cadastrado com o mesmo rg!");
        return;
    }
    // validar duplicidade de e-mail
    clientes.forEach((clienteValidarEmail) => {
        if (clienteCadastrar.email === clienteValidarEmail.email) {
            console.log("Já existe outro cliente cadastrado com o mesmo e-mail!");
            return;
        }
    });
    // gerar o id do cliente
    if (clientes.length == 0) {
        clienteCadastrar.idCliente = 1;
    }
    else {
        const ultimoCliente = clientes.at(clientes.length - 1);
        clienteCadastrar.idCliente = ultimoCliente == undefined ? 1 : (ultimoCliente.idCliente + 1);
    }
    clientes.push(clienteCadastrar);
    console.log("Cliente cadastrado com sucesso.");
    // apresentar todos os clientes
    apresentarClientes();
};
// editar cliente
const editarCliente = (idClienteEditar, clienteEditar) => {
};
// remover cliente da lista
const removerCliente = (id) => {
    let contadorClientes = 0;
    if (clientes.length == 0) {
        console.log("Não existem clientes cadastrados!");
        return;
    }
    let indiceClienteRemover = null;
    while (contadorClientes < clientes.length) {
        if (clientes[contadorClientes]?.idCliente == id) {
            indiceClienteRemover = contadorClientes;
        }
        contadorClientes++;
    }
    if (indiceClienteRemover != null) {
        clientes.splice(indiceClienteRemover, 1);
        console.log("Cliente removido com sucesso!");
    }
    else {
        console.log("Cliente não encontrado!");
    }
};
// apresentar todos os clientes
const apresentarClientes = () => {
    if (clientes.length == 0) {
        console.log("Não existem clientes cadastrados.");
    }
    else {
        for (let i = 0; i < clientes.length; i++) {
            const cliente = clientes.at(i);
            if (cliente != undefined) {
                console.log("id: " + cliente.idCliente);
                console.log("nome completo: " + cliente.nomeCompleto);
                console.log("telefone: " + cliente.telefone);
                console.log("cpf: " + cliente.cpf);
                console.log("rg: " + cliente.rg);
                console.log("data de nascimento: " + cliente.dataNascimento);
                console.log("gênero: " + cliente.genero);
                console.log("email: " + cliente.email);
            }
        }
    }
};
// apresentar um cliente expecifico
function apresentarCliente(idClienteApresentar) {
    const clienteApresentar = clientes.find(c => c.idCliente == idClienteApresentar);
    if (clienteApresentar) {
        console.log("id: " + clienteApresentar.idCliente);
        console.log("nome completo: " + clienteApresentar.nomeCompleto);
        console.log("cpf: " + clienteApresentar.cpf);
        console.log("rg: " + clienteApresentar.rg);
        console.log("telefone: " + clienteApresentar.telefone);
        console.log("email: " + clienteApresentar.email);
        console.log("data de nascimento: " + clienteApresentar.dataNascimento);
        console.log("gênero: " + clienteApresentar.genero);
    }
    else {
        console.log("Cliente não encontrado!");
    }
}
const primeiroClienteCadastrar = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    cpf: "123.456.789-00",
    rg: "12.456.778/99",
    dataNascimento: "11/02/2001",
    email: "gabriel@teste.com",
    genero: Genero.Masculino,
    telefone: "14998776655",
    idCliente: 0
};
cadastrarCliente(primeiroClienteCadastrar);
const segundoClienteCadastrar = {
    nomeCompleto: "Eduarda Pereira da Silva",
    cpf: "123.567.876-99",
    rg: "55.675.877/34",
    dataNascimento: "11/11/2001",
    email: "testesegundocliente@teste.com",
    genero: Genero.Feminino,
    telefone: "14998776655",
    idCliente: 0
};
cadastrarCliente(segundoClienteCadastrar);
apresentarCliente(1);
apresentarCliente(1000);
removerCliente(1);
apresentarCliente(1);
//# sourceMappingURL=lista_clientes.js.map
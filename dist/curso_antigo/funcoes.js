"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// função padrão
function apresentarDadosCliente(nomeCompleto, telefone, salario, possuiCnh) {
    console.log(nomeCompleto);
    console.log(telefone);
    console.log(salario);
    console.log(possuiCnh ? "Possui cnh" : "Não possui cnh");
}
apresentarDadosCliente("Gabriel", "14998787654", 5000, true);
// função retornando dados
function gerarCliente(nomeCompleto, telefone, email, status) {
    return {
        nomeCompleto: nomeCompleto,
        telefone: telefone,
        email: email,
        status: status ? "Ativo" : "Inativo"
    };
}
const cliente = gerarCliente("Gabriel Rodrigues dos Santos", "14998787655", "gabriel@teste.com", true);
console.log(cliente);
// arrow functions
const gerarClienteArrow = (nomeCompleto, telefone, email, status) => {
    const cliente = {
        nomeCompleto: nomeCompleto.toUpperCase(),
        telefone: telefone,
        email: email,
        status: status ? "Ativo" : "Inativo"
    };
    return cliente;
};
console.log(gerarClienteArrow("Gabriel Rodrigues dos Santos", "(14) 99878765", "gabrielteste@teste.com", false));
//# sourceMappingURL=funcoes.js.map
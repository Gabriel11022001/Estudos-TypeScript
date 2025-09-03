/**
 * é uma forma de tipar um conjunto de parâmetros
 */
function apresentarDadosCliente(cliente) {
    console.log("Nome completo: " + cliente.nomeCompleto);
    console.log("Telefone: " + cliente.telefone);
    console.log("E-mail: " + cliente.email);
    console.log("Cpf: " + cliente.cpf);
}
var clienteApresentar = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    telefone: "(14) 998776655",
    email: "teste@teste.com",
    cpf: "567.987.654-99"
};
apresentarDadosCliente(clienteApresentar);
var gerarVariosClientes = function (quantidadeClientes) {
    var clientes = [];
    for (var contador = 0; contador < quantidadeClientes; contador++) {
        var cliente = {
            nomeCompleto: "Cliente " + (contador + 1),
            cpf: "123.456.788-99",
            telefone: "(14) 998776655",
            email: "teste" + (contador + 1) + "@teste.com"
        };
        clientes.push(cliente);
    }
    return clientes;
};
gerarVariosClientes(100).forEach(function (clienteApresentar) {
    apresentarDadosCliente(clienteApresentar);
});
var produto = {
    nomeProduto: "Produto 1",
    precoVenda: 12.99,
    estoque: 100,
    status: true,
    categoria: {
        nomeCategoria: "Categoria de teste 1"
    }
};
console.log(produto);
var categoriaTeste = { nomeCategoria: "Categoria de teste 1" };
var produtoTeste = { nomeProduto: "Produto de teste 2", precoVenda: 22.99, estoque: 200, status: false, categoria: categoriaTeste };
console.log(produtoTeste);
console.log("apresentar dados do produto......");
console.log(produtoTeste.nomeProduto);
console.log(produtoTeste.precoVenda);
console.log(produtoTeste.status);
console.log(produtoTeste.estoque);
console.log(produtoTeste.categoria.nomeCategoria);
var primeiraNota = {
    materia: "Matemática",
    nota: 9.77
};
var segundaNota = { materia: "História", nota: 10 };
var aluno = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    email: "teste@teste.com",
    telefone: "(14) 998776655",
    notas: [primeiraNota, segundaNota]
};
console.log(aluno);
console.log("Nome do aluno: " + aluno.nomeCompleto);
console.log("Telefone do aluno: " + aluno.telefone);
console.log("E-mail do aluno: " + aluno.email);
aluno.notas.forEach(function (notaAluno) {
    console.log("Matéria: " + notaAluno.materia);
    console.log("Nota: " + notaAluno.nota);
});

"use strict";
/**
 * é uma estrutura de dados
 * que permite tipar as propriedades
 * de um objeto
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Genero;
(function (Genero) {
    Genero["Masculino"] = "Masculino";
    Genero["Feminino"] = "Feminino";
    Genero["Outro"] = "Outro";
})(Genero || (Genero = {}));
const primeiroContato = {
    tipo: "telefone",
    contato: "(14) 998776655"
};
const segundoContato = {
    tipo: "email",
    contato: "teste@teste.com"
};
/**
 * como a propriedade complemento é opcional
 * eu não preciso definir ela na hora
 * de declarar o objeto
 */
const enderecoCliente = {
    cep: "17690-000",
    logradouro: "teste",
    bairro: "teste",
    cidade: "teste",
    estado: "sp",
    numero: "s/n"
};
console.log(primeiroContato);
console.log(segundoContato);
console.log(enderecoCliente);
const cliente = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    genero: Genero.Masculino,
    dataNascimento: "11/02/2001",
    contatos: [
        primeiroContato,
        segundoContato
    ],
    endereco: enderecoCliente
};
console.log(cliente);
// função recebendo um objeto de um tipo de uma interface como argumento
function apresentarDadosCliente(clienteApresentar) {
    console.log(`Nome completo: ${clienteApresentar.nomeCompleto}`);
    console.log(`genero: ${clienteApresentar.genero}`);
    console.log(`data de nascimento: ${clienteApresentar.dataNascimento}`);
    clienteApresentar.contatos.forEach((contato) => {
        console.log("tipo contato: " + contato.tipo);
        console.log("contato: " + contato.contato);
    });
    console.log("cep: " + clienteApresentar.endereco.cep);
    console.log("complemento: " + clienteApresentar.endereco.complemento == undefined ? "" : clienteApresentar.endereco.complemento);
    console.log("logradouro: " + clienteApresentar.endereco.logradouro);
}
apresentarDadosCliente(cliente);
// desestruturação
const { nomeCompleto, genero, dataNascimento, contatos, endereco } = cliente;
console.log(nomeCompleto);
console.log(genero);
console.log(dataNascimento);
// obter somente os telefones
const telefones = contatos.filter((contatoFiltrar) => {
    if (contatoFiltrar.tipo === "telefone") {
        return contatoFiltrar;
    }
});
console.log(telefones);
console.log(endereco);
const categoriaProduto = {
    nomeCategoria: "Categoria de teste 1",
    status: true
};
const produto = {
    nome: "Produto de teste 1",
    precoCompra: 2.99,
    precoVenda: 22.99,
    categoria: categoriaProduto,
    descricao: "Descrição do produto de teste 1",
    estoque: 100,
    status: false
};
// apresentar dados do produto
const apresentarDadosProduto = (produto) => {
    console.log("Nome do produto: " + produto.nome);
    console.log("Descrição: " + produto.descricao);
    console.log("Estoque: " + produto.estoque);
    console.log("Preço de compra: R$" + produto.precoCompra);
    console.log("Preço de venda: R$" + produto.precoVenda);
    console.log("Status: " + produto.status ? "Ativo" : "Inativo");
    if (produto.categoria) {
        // informou a categoria
        console.log("Categoria: " + produto.categoria.nomeCategoria);
        if (produto.categoria.status) {
            console.log("Categoria ativa!");
        }
        else {
            console.log("Categoria inativa!");
        }
    }
};
apresentarDadosProduto(produto);
const somar = (primeiroValor, segundoValor) => {
    return primeiroValor + segundoValor;
};
const subtrair = (primeiroValor, segundoValor) => {
    return primeiroValor - segundoValor;
};
const multiplicar = (primeiroValor, segundoValor) => {
    return primeiroValor * segundoValor;
};
const dividir = (primeiroValor, segundoValor) => {
    return primeiroValor / segundoValor;
};
const realizarOperacao = (operacao) => {
    if (operacao.operacao == "soma") {
        return somar(operacao.primeiroValor, operacao.segundoValor);
    }
    if (operacao.operacao == "subtrair") {
        return subtrair(operacao.primeiroValor, operacao.segundoValor);
    }
    if (operacao.operacao == "multiplicacao") {
        return multiplicar(operacao.primeiroValor, operacao.segundoValor);
    }
    if (operacao.operacao == "dividir") {
        return dividir(operacao.primeiroValor, operacao.segundoValor);
    }
    return 0;
};
const operacao = {
    primeiroValor: 11,
    segundoValor: 22,
    operacao: "soma"
};
console.log(realizarOperacao(operacao));
operacao.operacao = "subtrair";
console.log(realizarOperacao(operacao));
operacao.operacao = "multiplicacao";
console.log(realizarOperacao(operacao));
operacao.operacao = "dividir";
console.log(realizarOperacao(operacao));
//# sourceMappingURL=interfaces.js.map
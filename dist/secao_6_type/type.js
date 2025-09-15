"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeroCpf = "123.456.789-99";
const numeroCnh = "778.976.446-99";
console.log(numeroCpf);
console.log(numeroCnh);
const pessoa = {
    nome: "Gabriel Rodrigues dos Santos",
    cnh: "123.457.754-94",
    cpf: "123.456.789-78",
    email: "testegabriel@teste.com",
    telefones: ["14998776655", "14998567898"]
};
console.log(pessoa);
console.log("Nome: " + pessoa.nome);
console.log("cnh: " + pessoa.cnh);
console.log("cpf: " + pessoa.cpf);
console.log("email: " + pessoa.email);
pessoa.telefones.forEach((telefone) => {
    console.log("Telefone: " + telefone);
});
pessoa.telefones.forEach((telefone, indice) => {
    console.log("telefone " + (indice + 1) + " : " + telefone);
});
const gerarContatos = (tipo) => {
    const contatos = [];
    if (tipo == "telefone") {
        for (let i = 0; i < 10; i++) {
            const telefone = {
                ativo: i % 2 == 0,
                ddd: "55",
                numero: "1499877652",
                principal: false,
                tipoContato: "telefone"
            };
            contatos.push(telefone);
        }
    }
    else if (tipo == "email") {
        for (let i = 0; i < 10; i++) {
            const email = {
                ativo: i % 2 == 0,
                email: "teste@teste.com",
                tipoContato: "email"
            };
            contatos.push(email);
        }
    }
    return contatos;
};
const telefones = gerarContatos("telefone");
console.log(telefones);
const obterContatosAtivos = (contatos) => {
    return contatos.filter((contato) => {
        if (contato.ativo) {
            return contato;
        }
    });
};
// obter os telefones ativos
console.log("telefones ativos");
console.log(obterContatosAtivos(telefones));
// gerar categorias
const gerarCategorias = () => {
    const categorias = [];
    for (let i = 0; i < 100; i++) {
        categorias.push({
            status: true,
            nomeCategoria: `Categoria de teste ${i + 1}`
        });
    }
    return categorias;
};
// gerar produtos
const gerarProdutos = (categorias) => {
    const produtos = [];
    let i = 0;
    while (i < 100) {
        produtos.push({
            categoria: i % 2 == 0 ? categorias[0] : categorias[1],
            nome: "Produto " + (i + 1),
            precoCompra: 11.22,
            precoVenda: 22.00,
            descricao: "Descrição do produto de teste",
            estoque: 100
        });
        i++;
    }
    return produtos;
};
const categorias = gerarCategorias();
const produtos = gerarProdutos(categorias);
const apresentarDadosProduto = (produtoApresentar) => {
    if (produtoApresentar == undefined) {
        return;
    }
    const { nome, categoria, precoVenda, precoCompra, descricao, estoque } = produtoApresentar;
    console.log(`Produto: ${nome.toUpperCase()}`);
    console.log(`Descrição do produto: ${descricao}`);
    console.log(`Preço de venda: R$${precoVenda.toFixed(2)}`);
    console.log(`Estoque: ${estoque} unidades`);
    console.log(`Categoria: ${categoria?.nomeCategoria}`);
};
apresentarDadosProduto(produtos[0]);
apresentarDadosProduto(produtos[1]);
apresentarDadosProduto(produtos[2]);
apresentarDadosProduto(produtos[3]);
const infoCliente = {
    id: 1,
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    telefone: "14998776655"
};
const clienteTeste = {
    id: 1,
    nomeCompleto: "Gabriel",
    telefone: "1499M8787654",
    codigoGenero: "M",
    nomeGenero: "Masculino"
};
console.log(infoCliente);
console.log(clienteTeste);
//# sourceMappingURL=type.js.map
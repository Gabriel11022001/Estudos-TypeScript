var numeroCpf = "123.456.789-99";
var numeroCnh = "778.976.446-99";
console.log(numeroCpf);
console.log(numeroCnh);
var pessoa = {
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
pessoa.telefones.forEach(function (telefone) {
    console.log("Telefone: " + telefone);
});
pessoa.telefones.forEach(function (telefone, indice) {
    console.log("telefone " + (indice + 1) + " : " + telefone);
});
var gerarContatos = function (tipo) {
    var contatos = [];
    if (tipo == "telefone") {
        for (var i = 0; i < 10; i++) {
            var telefone = {
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
        for (var i = 0; i < 10; i++) {
            var email = {
                ativo: i % 2 == 0,
                email: "teste@teste.com",
                tipoContato: "email"
            };
            contatos.push(email);
        }
    }
    return contatos;
};
var telefones = gerarContatos("telefone");
console.log(telefones);
var obterContatosAtivos = function (contatos) {
    return contatos.filter(function (contato) {
        if (contato.ativo) {
            return contato;
        }
    });
};
// obter os telefones ativos
console.log("telefones ativos");
console.log(obterContatosAtivos(telefones));
// gerar categorias
var gerarCategorias = function () {
    var categorias = [];
    for (var i = 0; i < 100; i++) {
        categorias.push({
            status: true,
            nomeCategoria: "Categoria de teste ".concat(i + 1)
        });
    }
    return categorias;
};
// gerar produtos
var gerarProdutos = function (categorias) {
    var produtos = [];
    var i = 0;
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
var categorias = gerarCategorias();
var produtos = gerarProdutos(categorias);
var apresentarDadosProduto = function (produtoApresentar) {
    if (produtoApresentar == undefined) {
        return;
    }
    var nome = produtoApresentar.nome, categoria = produtoApresentar.categoria, precoVenda = produtoApresentar.precoVenda, precoCompra = produtoApresentar.precoCompra, descricao = produtoApresentar.descricao, estoque = produtoApresentar.estoque;
    console.log("Produto: ".concat(nome.toUpperCase()));
    console.log("Descri\u00E7\u00E3o do produto: ".concat(descricao));
    console.log("Pre\u00E7o de venda: R$".concat(precoVenda.toFixed(2)));
    console.log("Estoque: ".concat(estoque, " unidades"));
    console.log("Categoria: ".concat(categoria === null || categoria === void 0 ? void 0 : categoria.nomeCategoria));
};
apresentarDadosProduto(produtos[0]);
apresentarDadosProduto(produtos[1]);
apresentarDadosProduto(produtos[2]);
apresentarDadosProduto(produtos[3]);
var infoCliente = {
    id: 1,
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    telefone: "14998776655"
};
var clienteTeste = {
    id: 1,
    nomeCompleto: "Gabriel",
    telefone: "1499M8787654",
    codigoGenero: "M",
    nomeGenero: "Masculino"
};
console.log(infoCliente);
console.log(clienteTeste);
export {};
//# sourceMappingURL=type.js.map
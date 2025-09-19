/**
 * implementar um carrinho de compra com as opções de
 * -> adicionar produto no carrinho
 * -> remover produto no carrinho
 * -> incrementar unidades
 * -> decrementar unidades
 * -> apresentar carrinho
 * -> limpar carrinho
 * -> finalizar pedido
 */
var gerarProdutos = function () {
    var produtos = [];
    for (var i = 0; i < 100; i++) {
        produtos.push({
            nome: "Produto: " + (i + 1),
            preco: 12.99 + i,
            produtoId: i + 1,
            unidadesEstoque: 200 + i,
            status: true
        });
    }
    return produtos;
};
var produtos = gerarProdutos();
var carrinho = {
    carrinhoId: 1,
    dataVenda: "11/02/2001",
    valorTotal: 0,
    itens: []
};
var adicionarProdutoCarrinho = function (produto) {
    var _a;
    if (produto.unidadesEstoque < 1) {
        console.log("O produto " + produto.nome + " não possui unidades em estoque!");
        return;
    }
    // validar se o produto já existe no carrinho
    if (carrinho.itens.length == 0) {
        var item = {
            itemCarrinhoId: 1,
            produto: produto,
            precoProdutoMomentoCarrinho: produto.preco,
            unidades: 1,
            valorItem: produto.preco
        };
        carrinho.itens.push(item);
        console.log("Produto adicionado no carrinho!");
    }
    else {
        var produtoEstaCarrinho = false;
        for (var i = 0; i < carrinho.itens.length; i++) {
            /*if (carrinho.itens.at(i)?.produto.produtoId == produto.produtoId) {
              produtoEstaCarrinho = true
            }*/
        }
        if (!produtoEstaCarrinho) {
            // produto não está no carrinho, adicionar
            var idUltimoItemCarrinho = (_a = carrinho.itens[carrinho.itens.length - 1]) === null || _a === void 0 ? void 0 : _a.itemCarrinhoId;
            if (idUltimoItemCarrinho != undefined) {
                var item = {
                    itemCarrinhoId: idUltimoItemCarrinho + 1,
                    produto: produto,
                    precoProdutoMomentoCarrinho: produto.preco,
                    unidades: 1,
                    valorItem: produto.preco
                };
                carrinho.itens.push(item);
                console.log("Produto adicionado no carrinho!");
            }
        }
    }
};
export {};
//# sourceMappingURL=carrinho_compra.js.map
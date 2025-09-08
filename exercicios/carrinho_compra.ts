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

interface Produto {

  produtoId: number;
  nome: string;
  preco: number;
  unidadesEstoque: number;
  status: boolean;

}

interface ItemCarrinho {

  itemCarrinhoId: number;
  produto: Produto;
  precoProdutoMomentoCarrinho: number;
  unidades: number;
  valorItem: number;

}

interface CarrinhoCompra {

  carrinhoId: number;
  valorTotal: number;
  dataVenda: string;
  itens: ItemCarrinho[];

}

const gerarProdutos = (): Produto[] => {
  const produtos: Produto[] = []

  for (let i: number = 0; i < 100; i++) {
    produtos.push({
      nome: "Produto: " + (i + 1),
      preco: 12.99 + i,
      produtoId: i + 1,
      unidadesEstoque: 200 + i,
      status: true
    })
  }

  return produtos
}

const produtos: Produto[] = gerarProdutos()

const carrinho: CarrinhoCompra = {
  carrinhoId: 1,
  dataVenda: "11/02/2001",
  valorTotal: 0,
  itens: []
}

const adicionarProdutoCarrinho = (produto: Produto) => {

  if (produto.unidadesEstoque < 1) {
    console.log("O produto " + produto.nome + " não possui unidades em estoque!")

    return
  }

  // validar se o produto já existe no carrinho
  if (carrinho.itens.length == 0) {
    const item: ItemCarrinho = {
      itemCarrinhoId: 1,
      produto: produto,
      precoProdutoMomentoCarrinho: produto.preco,
      unidades: 1,
      valorItem: produto.preco
    }

    carrinho.itens.push(item)

    console.log("Produto adicionado no carrinho!")
  } else {
    let produtoEstaCarrinho: boolean = false

    for (let i: number = 0; i < carrinho.itens.length; i++) {

      if (carrinho.itens.at(i)?.produto.produtoId == produto.produtoId) {
        produtoEstaCarrinho = true
      }

    }

    if (!produtoEstaCarrinho) {
      // produto não está no carrinho, adicionar
      let idUltimoItemCarrinho: number | undefined = carrinho.itens[ carrinho.itens.length - 1 ]?.itemCarrinhoId
      
      if (idUltimoItemCarrinho != undefined) {
        const item: ItemCarrinho = {
          itemCarrinhoId: idUltimoItemCarrinho + 1,
          produto: produto,
          precoProdutoMomentoCarrinho: produto.preco,
          unidades: 1,
          valorItem: produto.preco
        }

        carrinho.itens.push(item)

        console.log("Produto adicionado no carrinho!")
      }

    }

  }

}
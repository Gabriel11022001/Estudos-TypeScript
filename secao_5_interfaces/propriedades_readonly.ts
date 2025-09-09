/**
 * as propriedades readonly são properties que
 * o usuário pode visualizar mas não pode alterar o valor
 */

interface ProdutoProps {

  readonly id: number | string; // não pode alterar o valor
  nome: string;
  precoCompra: number;
  precoVenda: number;

}

const produto: ProdutoProps = {
  id: 1,
  nome: "Coca Cola",
  precoCompra: 11.22,
  precoVenda: 22.33
}

// produto.id = 22

console.log(produto)
console.log("id do produto: " + produto.id)
console.log("nome do produto: " + produto.nome)
console.log("preço de compra do produto: " + produto.precoCompra.toFixed(2))
console.log("preço de venda do produto: " + produto.precoVenda.toFixed(2))
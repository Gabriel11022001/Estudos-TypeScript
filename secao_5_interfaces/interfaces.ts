/**
 * é uma estrutura de dados
 * que permite tipar as propriedades
 * de um objeto
 */

interface Contato {

  tipo: string; // depois de cada prop, colocar ;
  contato: string;

}

interface Endereco {

  cep: string;
  logradouro: string;
  complemento?: string; // é uma propriedade opcional
  cidade: string;
  bairro: string;
  numero: string | number;
  estado: string;

}

enum Genero {

  Masculino = "Masculino",
  Feminino = "Feminino",
  Outro = "Outro"

}

interface Cliente {

  nomeCompleto: string;
  dataNascimento: string;
  endereco: Endereco;
  contatos: Contato[];
  genero: Genero;

}

const primeiroContato: Contato = {
  tipo: "telefone",
  contato: "(14) 998776655"
}

const segundoContato: Contato = {
  tipo: "email",
  contato: "teste@teste.com"
}

/**
 * como a propriedade complemento é opcional
 * eu não preciso definir ela na hora
 * de declarar o objeto
 */
const enderecoCliente: Endereco = {
  cep: "17690-000",
  logradouro: "teste",
  bairro: "teste",
  cidade: "teste",
  estado: "sp",
  numero: "s/n"
}

console.log(primeiroContato)
console.log(segundoContato)
console.log(enderecoCliente)

const cliente: Cliente = {
  nomeCompleto: "Gabriel Rodrigues dos Santos",
  genero: Genero.Masculino,
  dataNascimento: "11/02/2001",
  contatos: [
    primeiroContato,
    segundoContato
  ],
  endereco: enderecoCliente
}

console.log(cliente)

// função recebendo um objeto de um tipo de uma interface como argumento
function apresentarDadosCliente(clienteApresentar: Cliente): void {
  console.log(`Nome completo: ${ clienteApresentar.nomeCompleto }`)
  console.log(`genero: ${ clienteApresentar.genero }`)
  console.log(`data de nascimento: ${ clienteApresentar.dataNascimento }`)
  
  clienteApresentar.contatos.forEach((contato: Contato) => {
    console.log("tipo contato: " + contato.tipo)
    console.log("contato: " + contato.contato)
  })

  console.log("cep: " + clienteApresentar.endereco.cep)
  console.log("complemento: " + clienteApresentar.endereco.complemento == undefined ? "" : clienteApresentar.endereco.complemento)
  console.log("logradouro: " + clienteApresentar.endereco.logradouro)
}

apresentarDadosCliente(cliente)

// desestruturação
const { nomeCompleto, genero, dataNascimento, contatos, endereco } = cliente

console.log(nomeCompleto)
console.log(genero)
console.log(dataNascimento)

// obter somente os telefones
const telefones: Contato[] = contatos.filter((contatoFiltrar: Contato) => {

  if (contatoFiltrar.tipo === "telefone") {

    return contatoFiltrar
  }

})

console.log(telefones)
console.log(endereco)

interface CategoriaProduto {

  nomeCategoria: string;
  status: boolean;

}

interface Produto {

  nome: string;
  precoCompra: number;
  precoVenda: number;
  descricao: string;
  status: boolean;
  estoque: number;
  categoria: CategoriaProduto;

}

const categoriaProduto: CategoriaProduto = {
  nomeCategoria: "Categoria de teste 1",
  status: true
}

const produto: Produto = {
  nome: "Produto de teste 1",
  precoCompra: 2.99,
  precoVenda: 22.99,
  categoria: categoriaProduto,
  descricao: "Descrição do produto de teste 1",
  estoque: 100,
  status: false
}

// apresentar dados do produto
const apresentarDadosProduto = (produto: Produto): void => {
  console.log("Nome do produto: " + produto.nome)
  console.log("Descrição: " + produto.descricao)
  console.log("Estoque: " + produto.estoque)
  console.log("Preço de compra: R$" + produto.precoCompra)
  console.log("Preço de venda: R$" + produto.precoVenda)
  console.log("Status: " + produto.status ? "Ativo" : "Inativo")
  
  if (produto.categoria) {
    // informou a categoria
    console.log("Categoria: " + produto.categoria.nomeCategoria)
    
    if (produto.categoria.status) {
      console.log("Categoria ativa!")
    } else {
      console.log("Categoria inativa!")
    }

  }

}

apresentarDadosProduto(produto)

type Operacao = string

interface OperacaoMatematica {

  primeiroValor: number;
  segundoValor: number;
  operacao: Operacao;

}

const somar = (primeiroValor: number, segundoValor: number): number => {

  return primeiroValor + segundoValor
}

const subtrair = (primeiroValor: number, segundoValor: number): number => {

  return primeiroValor - segundoValor
}

const multiplicar = (primeiroValor: number, segundoValor: number): number => {

  return primeiroValor * segundoValor
}

const dividir = (primeiroValor: number, segundoValor: number): number => {

  return primeiroValor / segundoValor
}

const realizarOperacao = (operacao: OperacaoMatematica): number => {

  if (operacao.operacao == "soma") {

    return somar(operacao.primeiroValor, operacao.segundoValor)
  }

  if (operacao.operacao == "subtrair") {

    return subtrair(operacao.primeiroValor, operacao.segundoValor)
  }

  if (operacao.operacao == "multiplicacao") {

    return multiplicar(operacao.primeiroValor, operacao.segundoValor)
  }

  if (operacao.operacao == "dividir") {

    return dividir(operacao.primeiroValor, operacao.segundoValor)
  }

  return 0
}

const operacao: OperacaoMatematica = {
  primeiroValor: 11,
  segundoValor: 22,
  operacao: "soma"
}

console.log(realizarOperacao(operacao))

operacao.operacao = "subtrair"

console.log(realizarOperacao(operacao))

operacao.operacao = "multiplicacao"

console.log(realizarOperacao(operacao))

operacao.operacao = "dividir"

console.log(realizarOperacao(operacao))

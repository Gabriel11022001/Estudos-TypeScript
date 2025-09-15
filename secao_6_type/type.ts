type Cpf = string | number;
type Cnh = string | number;

const numeroCpf: Cpf = "123.456.789-99"
const numeroCnh: Cnh = "778.976.446-99"

console.log(numeroCpf)
console.log(numeroCnh)

interface Pessoa {

  nome: string;
  cpf: Cpf;
  cnh: Cnh;
  email: string;
  telefones: string[];

}

const pessoa: Pessoa = {
  nome: "Gabriel Rodrigues dos Santos",
  cnh: "123.457.754-94",
  cpf: "123.456.789-78",
  email: "testegabriel@teste.com",
  telefones: [ "14998776655", "14998567898" ]
}

console.log(pessoa)

console.log("Nome: " + pessoa.nome)
console.log("cnh: " + pessoa.cnh)
console.log("cpf: " + pessoa.cpf)
console.log("email: " + pessoa.email)

pessoa.telefones.forEach((telefone: string): void => {
  console.log("Telefone: " + telefone)
})

pessoa.telefones.forEach((telefone: string, indice: number) => {
  console.log("telefone " + (indice + 1) + " : " + telefone)
})

interface TipoContato {

  tipoContato: string;
  ativo: boolean;

}

interface Telefone extends TipoContato {

  ddd: string;
  numero: string;
  principal: boolean;

}

interface Email extends TipoContato {

  email: string;

}

const gerarContatos = (tipo: string): Array<Telefone | Email>  => {
  const contatos: Array<Telefone | Email> = []

  if (tipo == "telefone") {

    for (let i: number = 0; i < 10; i++) {

      const telefone: Telefone = {
        ativo: i % 2 == 0,
        ddd: "55",
        numero: "1499877652",
        principal: false,
        tipoContato: "telefone"
      }

      contatos.push(telefone)
    }

  } else if (tipo == "email") {

    for (let i: number = 0; i < 10; i++) {

      const email: Email = {
        ativo: i % 2 == 0,
        email: "teste@teste.com",
        tipoContato: "email"
      }

      contatos.push(email)
    }

  }

  return contatos
}

const telefones: Array<Telefone | Email> = gerarContatos("telefone")

console.log(telefones)

const obterContatosAtivos = (contatos: Array<Telefone | Email>): Array<Telefone | Email> => {
  
  return contatos.filter((contato: Telefone | Email): Telefone | Email | undefined => {

    if (contato.ativo) {

      return contato
    }

  })
}

// obter os telefones ativos
console.log("telefones ativos")
console.log(obterContatosAtivos(telefones))

interface Categoria {


  nomeCategoria: string;
  status: boolean;

}

interface Produto {

  nome: string;
  precoCompra: number;
  precoVenda: number;
  descricao: string;
  estoque: number;
  categoria: Categoria | undefined;

}

// gerar categorias
const gerarCategorias = (): Categoria[] => {
  const categorias: Array<Categoria> = []

  for (let i: number = 0; i < 100; i++) {
    categorias.push({
      status: true,
      nomeCategoria: `Categoria de teste ${ i + 1 }`
    })
  }

  return categorias
}

// gerar produtos
const gerarProdutos = (categorias: Categoria[]): Array<Produto> => {
  const produtos: Array<Produto> = []

  let i: number = 0

  while (i < 100) {
    produtos.push({
      categoria: i % 2 == 0 ? categorias[ 0 ] : categorias[ 1 ],
      nome: "Produto " + (i + 1),
      precoCompra: 11.22,
      precoVenda: 22.00,
      descricao: "Descrição do produto de teste",
      estoque: 100
    })

    i++
  }

  return produtos
}

const categorias: Categoria[] = gerarCategorias()

const produtos: Array<Produto> = gerarProdutos(categorias)

const apresentarDadosProduto = (produtoApresentar: Produto | undefined): void => {

  if (produtoApresentar == undefined) {

    return
  }

  const { nome, categoria, precoVenda, precoCompra, descricao, estoque } = produtoApresentar

  console.log(`Produto: ${ nome.toUpperCase() }`)
  console.log(`Descrição do produto: ${ descricao }`)
  console.log(`Preço de venda: R$${ precoVenda.toFixed(2) }`)
  console.log(`Estoque: ${ estoque } unidades`)
  console.log(`Categoria: ${ categoria?.nomeCategoria }`)
}

apresentarDadosProduto(produtos[ 0 ])
apresentarDadosProduto(produtos[ 1 ])
apresentarDadosProduto(produtos[ 2 ])
apresentarDadosProduto(produtos[ 3 ])

type Info = {

  id: number;
  nomeCompleto: string;
  telefone: string;

}

const infoCliente: Info = {
  id: 1,
  nomeCompleto: "Gabriel Rodrigues dos Santos",
  telefone: "14998776655"
}

type GeneroCliente = {

  nomeGenero: string;
  codigoGenero: string;

}

type ClienteType = Info & GeneroCliente

const clienteTeste: ClienteType = {
  id: 1,
  nomeCompleto: "Gabriel",
  telefone: "1499M8787654",
  codigoGenero: "M",
  nomeGenero: "Masculino"
}

console.log(infoCliente)
console.log(clienteTeste)
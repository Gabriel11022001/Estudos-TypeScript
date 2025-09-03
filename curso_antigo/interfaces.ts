/**
 * é uma forma de tipar um conjunto de parâmetros
 */

interface Cliente {

    nomeCompleto: string,
    email: string,
    telefone: string,
    cpf: string

}

function apresentarDadosCliente(cliente: Cliente): void {
    console.log("Nome completo: " + cliente.nomeCompleto)
    console.log("Telefone: " + cliente.telefone)
    console.log("E-mail: " + cliente.email)
    console.log("Cpf: " + cliente.cpf)
}


const clienteApresentar: Cliente = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    telefone: "(14) 998776655",
    email: "teste@teste.com",
    cpf: "567.987.654-99"
}

apresentarDadosCliente(clienteApresentar)

const gerarVariosClientes = (quantidadeClientes: number): Cliente[] => {
    const clientes: Cliente[] = []

    for (let contador: number = 0; contador < quantidadeClientes; contador++) {
        const cliente: Cliente = {
            nomeCompleto: "Cliente " + (contador + 1),
            cpf: "123.456.788-99",
            telefone: "(14) 998776655",
            email: "teste" + (contador + 1) + "@teste.com"
        }

        clientes.push(cliente)
    }

    return clientes
}

gerarVariosClientes(100).forEach((clienteApresentar: Cliente) => {
    apresentarDadosCliente(clienteApresentar)
})

interface Categoria {

    nomeCategoria: string

}

interface Produto {

    nomeProduto: string,
    precoVenda: number,
    estoque: number,
    status: boolean,
    categoria: Categoria

}

const produto: Produto = {
    nomeProduto: "Produto 1",
    precoVenda: 12.99,
    estoque: 100,
    status: true,
    categoria: {
        nomeCategoria: "Categoria de teste 1"
    }
}

console.log(produto)

const categoriaTeste: Categoria = { nomeCategoria: "Categoria de teste 1" }

const produtoTeste: Produto = { nomeProduto: "Produto de teste 2", precoVenda: 22.99, estoque: 200, status: false, categoria: categoriaTeste }

console.log(produtoTeste)

console.log("apresentar dados do produto......")
console.log(produtoTeste.nomeProduto)
console.log(produtoTeste.precoVenda)
console.log(produtoTeste.status)
console.log(produtoTeste.estoque)
console.log(produtoTeste.categoria.nomeCategoria)

interface Nota {

    materia: string;
    nota: number;

}

interface Aluno {

    nomeCompleto: string;
    telefone: string;
    email: string;
    notas: Nota[];

}

const primeiraNota: Nota = {
    materia: "Matemática",
    nota: 9.77
}

const segundaNota: Nota = { materia: "História", nota: 10 }

const aluno: Aluno = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    email: "teste@teste.com",
    telefone: "(14) 998776655",
    notas: [ primeiraNota, segundaNota ]
}

console.log(aluno)

console.log("Nome do aluno: " + aluno.nomeCompleto)
console.log("Telefone do aluno: " + aluno.telefone)
console.log("E-mail do aluno: " + aluno.email)

aluno.notas.forEach(function (notaAluno: Nota): void {
    console.log("Matéria: " + notaAluno.materia)
    console.log("Nota: " + notaAluno.nota) 
})
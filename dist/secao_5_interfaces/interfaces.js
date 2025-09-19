/**
 * é uma estrutura de dados
 * que permite tipar as propriedades
 * de um objeto
 */
var Genero;
(function (Genero) {
    Genero["Masculino"] = "Masculino";
    Genero["Feminino"] = "Feminino";
    Genero["Outro"] = "Outro";
})(Genero || (Genero = {}));
var primeiroContato = {
    tipo: "telefone",
    contato: "(14) 998776655"
};
var segundoContato = {
    tipo: "email",
    contato: "teste@teste.com"
};
/**
 * como a propriedade complemento é opcional
 * eu não preciso definir ela na hora
 * de declarar o objeto
 */
var enderecoCliente = {
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
var cliente = {
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
    console.log("Nome completo: ".concat(clienteApresentar.nomeCompleto));
    console.log("genero: ".concat(clienteApresentar.genero));
    console.log("data de nascimento: ".concat(clienteApresentar.dataNascimento));
    clienteApresentar.contatos.forEach(function (contato) {
        console.log("tipo contato: " + contato.tipo);
        console.log("contato: " + contato.contato);
    });
    console.log("cep: " + clienteApresentar.endereco.cep);
    console.log("complemento: " + clienteApresentar.endereco.complemento == undefined ? "" : clienteApresentar.endereco.complemento);
    console.log("logradouro: " + clienteApresentar.endereco.logradouro);
}
apresentarDadosCliente(cliente);
// desestruturação
var nomeCompleto = cliente.nomeCompleto, genero = cliente.genero, dataNascimento = cliente.dataNascimento, contatos = cliente.contatos, endereco = cliente.endereco;
console.log(nomeCompleto);
console.log(genero);
console.log(dataNascimento);
// obter somente os telefones
var telefones = contatos.filter(function (contatoFiltrar) {
    if (contatoFiltrar.tipo === "telefone") {
        return contatoFiltrar;
    }
});
console.log(telefones);
console.log(endereco);
var categoriaProduto = {
    nomeCategoria: "Categoria de teste 1",
    status: true
};
var produto = {
    nome: "Produto de teste 1",
    precoCompra: 2.99,
    precoVenda: 22.99,
    categoria: categoriaProduto,
    descricao: "Descrição do produto de teste 1",
    estoque: 100,
    status: false
};
// apresentar dados do produto
var apresentarDadosProduto = function (produto) {
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
var somar = function (primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
};
var subtrair = function (primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
};
var multiplicar = function (primeiroValor, segundoValor) {
    return primeiroValor * segundoValor;
};
var dividir = function (primeiroValor, segundoValor) {
    return primeiroValor / segundoValor;
};
var realizarOperacao = function (operacao) {
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
var operacao = {
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
var notas = [];
notas.push({
    nota: 9.88
});
notas.push({
    nota: 7.89
});
notas.push({
    nota: 9.00
});
var aluno = {
    id: 1,
    nome: "Gabriel Rodrigues dos Santos",
    notas: notas
};
var curso = {
    id: 1,
    alunos: [aluno],
    nomeCurso: "Curso de TypeScript"
};
console.log(aluno);
console.log(curso);
function apresentarDadosCurso(curso) {
    console.log("id do curso: " + curso.id);
    console.log("nome do curso: " + curso.nomeCurso);
    curso.alunos.forEach(function (aluno) {
        console.log("id do aluno: " + aluno.id);
        console.log("aluno: " + aluno.nome);
        aluno.notas.forEach(function (nota) {
            console.log("nota: " + nota.nota.toFixed(2));
        });
    });
}
apresentarDadosCurso(curso);
var pessoaFisica = {
    id: 1,
    nomeCompleto: "pessoa fisica 1",
    cpf: "123.456.789-00",
    dataNascimento: "11/02/2001",
    email: "teste@teste.com",
    telefone: "14998776655"
};
var pessoaJuridica = {
    id: 2,
    nomeCompleto: "pessoa juridica 1",
    cnpj: "113.567.890/99",
    dataFundacao: "11/02/2020",
    email: "empresa@teste.com",
    socios: ["Gabriel", "Pedro", "Jesse"],
    telefone: "14998776799"
};
console.log(pessoaFisica);
console.log(pessoaJuridica);
pessoaJuridica.socios.forEach(function (socioNome) {
    console.log(socioNome);
});
export {};
//# sourceMappingURL=interfaces.js.map
// função padrão
function apresentarMensagem() {
    console.log("Seja bem vindo!");
}
apresentarMensagem();
// função recebendo parâmetros
function apresentarMensagemPassadaParametro(msg) {
    console.log(msg);
}
apresentarMensagemPassadaParametro("Seja bem vindo ao sistema!");
// retornando um valor
function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}
var soma = somar(100, 11.233);
console.log("Soma: " + soma);
function gerarCliente(nome, telefone, email, produtoInteresse, status) {
    return {
        nome: nome,
        telefone: telefone,
        email: email,
        produtoInteresse: produtoInteresse,
        status: status
    };
}
function obterListaClientes(quantidade) {
    if (quantidade === void 0) { quantidade = 10; }
    var clientes = [];
    for (var i = 0; i < quantidade; i++) {
        clientes.push(gerarCliente("Cliente " + (i + 1), "(14) 998776655", "teste" + (i + 1) + "@teste.com", "Produto " + (i + 1), i % 2 == 0 ? true : false));
    }
    return clientes;
}
console.log(obterListaClientes(100));
var loginCorreto = "teste123";
var senhaCorreta = "senha123";
function login(usuario) {
    if (usuario.login == loginCorreto && usuario.senha == senhaCorreta) {
        return true;
    }
    return false;
}
if (login({ login: "teste322", senha: "teste44", nome: "" })) {
    console.log("Realizou login com sucesso!");
}
else {
    console.log("Usuário ou senha inválidos.");
}
if (login({
    nome: "Gabriel",
    login: "teste123",
    senha: "senha123"
})) {
    console.log("Login efetuado com sucesso!");
}
else {
    console.log("Usuário ou senha inválidos!");
}
// arrow functions
var subtrair = function (primeirValor, segundoValor) {
    return primeirValor + segundoValor;
};
console.log(subtrair(22, 3));
console.log(subtrair(100, 22));
var apresentarDadosCliente = function (cliente) {
    if (cliente.nome == "") {
        console.log("Nome não foi informado!");
    }
    else {
        console.log("Nome: " + cliente.nome);
    }
    if (cliente.email == "") {
        console.log("E-mail não foi informado!");
    }
    else {
        console.log("E-mail: " + cliente.email);
    }
    if (cliente.telefone == "") {
        console.log("Telefone não foi informado!");
    }
    else {
        console.log("Telefone: " + cliente.telefone);
    }
    if (cliente.produtoInteresse == "") {
        console.log("Produto de interesse não foi informado!");
    }
    else {
        console.log("Produto de interesse: " + cliente.produtoInteresse);
    }
    console.log(cliente.status ? "Ativo" : "Inativo");
};
var ProdutoInteresse;
(function (ProdutoInteresse) {
    ProdutoInteresse["CARRO"] = "Carro";
    ProdutoInteresse["MOTO"] = "Moto";
})(ProdutoInteresse || (ProdutoInteresse = {}));
var clienteApresentar = {
    nome: "Gabriel Rodrigues dos Santos",
    telefone: "14998776565",
    email: "gabriel@teste.com",
    produtoInteresse: ProdutoInteresse.CARRO,
    status: true
};
apresentarDadosCliente(clienteApresentar);
// parâmetros opcionais
var apresentarMaiorValor = function (primeiroValor, segundoValor, terceiroValor) {
    var maior = -999999;
    if (terceiroValor == undefined) {
        if (primeiroValor > segundoValor) {
            maior = primeiroValor;
        }
        else if (segundoValor > primeiroValor) {
            maior = segundoValor;
        }
        else {
            maior = null;
        }
    }
    else {
        if (primeiroValor == segundoValor && segundoValor == terceiroValor) {
            maior = null;
        }
        else if (primeiroValor > segundoValor && primeiroValor > terceiroValor) {
            maior = primeiroValor;
        }
        else if (segundoValor > primeiroValor && segundoValor > terceiroValor) {
            maior = segundoValor;
        }
        else if (terceiroValor > primeiroValor && terceiroValor > segundoValor) {
            maior = terceiroValor;
        }
        else {
            maior = null;
        }
    }
    if (maior != null) {
        console.log("Maior valor: " + maior);
    }
    else {
        console.log("Não existe um maior valor!");
    }
};
apresentarMaiorValor(11, 22);
apresentarMaiorValor(22, 21, 1);
// rest params
var apresentarNomes = function () {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    if (nomes.length == 0) {
        console.log("Não foi informado nenhum nome...");
    }
    else {
        nomes.forEach(function (nome) {
            console.log("Nome: " + nome);
        });
    }
};
apresentarNomes();
apresentarNomes("Gabriel", "Felipe", "Eduardo");
var apresentarClientes = function () {
    var clientes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        clientes[_i] = arguments[_i];
    }
    if (clientes.length == 0) {
        console.log("Nãp foram informados clientes...");
    }
    else {
        var clientesAtivos = clientes.filter(function (clinete) {
            if (clinete.status) {
                return clinete;
            }
        });
        clientesAtivos.forEach(function (cliente) {
            console.log(cliente);
        });
    }
};
apresentarClientes({
    nome: "Gabriel",
    telefone: "149987766555",
    email: "teste@teste.com",
    produtoInteresse: ProdutoInteresse.CARRO,
    status: true
}, {
    nome: "Felipe",
    telefone: "14998776655",
    email: "teste2@teste.com",
    produtoInteresse: ProdutoInteresse.MOTO,
    status: false
});
export {};
//# sourceMappingURL=funcoes.js.map
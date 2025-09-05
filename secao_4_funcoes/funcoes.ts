// função padrão
function apresentarMensagem() {
  console.log("Seja bem vindo!"); 
}

apresentarMensagem();

// função recebendo parâmetros
function apresentarMensagemPassadaParametro(msg: String) {
  console.log(msg);
}

apresentarMensagemPassadaParametro("Seja bem vindo ao sistema!");

// retornando um valor
function somar(primeiroNumero: number, segundoNumero: number): number {

  return primeiroNumero + segundoNumero
}

const soma: number = somar(100, 11.233);

console.log("Soma: " + soma);

interface cliente {

  nome: string;
  telefone: string;
  email: string;
  produtoInteresse: string;
  status: boolean;

}

function gerarCliente(nome: string, telefone: string, email: string, produtoInteresse: string, status: boolean): cliente {

  return {
    nome: nome,
    telefone: telefone,
    email: email,
    produtoInteresse: produtoInteresse,
    status: status
  };
}

function obterListaClientes(quantidade: number = 10): cliente[] {
  const clientes: cliente[] = [];

  for (let i: number = 0; i < quantidade; i++) {
    clientes.push(
      gerarCliente(
        "Cliente " + (i + 1),
        "(14) 998776655",
        "teste" + (i + 1) + "@teste.com",
        "Produto " + (i + 1),
        i % 2 == 0 ? true : false
      )
    );
  }

  return clientes;
}

console.log(obterListaClientes(100));

interface Usuario {

  nome: string;
  login: string;
  senha: string;

}

const loginCorreto: string = "teste123";
const senhaCorreta: string = "senha123";

function login(usuario: Usuario): boolean {

  if (usuario.login == loginCorreto && usuario.senha == senhaCorreta) {

    return true;
  }

  return false;
}

if (login({ login: "teste322", senha: "teste44", nome: "" })) {
  console.log("Realizou login com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}

if (login({
  nome: "Gabriel",
  login: "teste123",
  senha: "senha123"
})) {
  console.log("Login efetuado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos!");
}

// arrow functions
const subtrair = (primeirValor: number, segundoValor: number): number => {

  return primeirValor + segundoValor
}

console.log(subtrair(22, 3));
console.log(subtrair(100, 22));

const apresentarDadosCliente = (cliente: cliente): void => {
  
  if (cliente.nome == "") {
    console.log("Nome não foi informado!");
  } else {
    console.log("Nome: " + cliente.nome);
  }
  
  if (cliente.email == "") {
    console.log("E-mail não foi informado!");
  } else {
    console.log("E-mail: " + cliente.email);
  }
  
  if (cliente.telefone == "") {
    console.log("Telefone não foi informado!");
  } else {
    console.log("Telefone: " + cliente.telefone);
  }

  if (cliente.produtoInteresse == "") {
    console.log("Produto de interesse não foi informado!");
  } else {
    console.log("Produto de interesse: " + cliente.produtoInteresse);
  }

  console.log(cliente.status ? "Ativo" : "Inativo");
}

enum ProdutoInteresse {

  CARRO = "Carro",
  MOTO = "Moto"

}

const clienteApresentar: cliente = {
  nome: "Gabriel Rodrigues dos Santos",
  telefone: "14998776565",
  email: "gabriel@teste.com",
  produtoInteresse: ProdutoInteresse.CARRO,
  status: true
}

apresentarDadosCliente(clienteApresentar);

// parâmetros opcionais
const apresentarMaiorValor = (primeiroValor: number, segundoValor: number, terceiroValor?: number): void => {
  let maior: number | null = -999999;

  if (terceiroValor == undefined) {

    if (primeiroValor > segundoValor) {
      maior = primeiroValor;
    } else if (segundoValor > primeiroValor) {
      maior = segundoValor;
    } else {
      maior = null
    }

  } else {

    if (primeiroValor == segundoValor && segundoValor == terceiroValor) {
      maior = null;
    } else if (primeiroValor > segundoValor && primeiroValor > terceiroValor) {
      maior = primeiroValor;
    } else if (segundoValor > primeiroValor && segundoValor > terceiroValor) {
      maior = segundoValor;
    } else if (terceiroValor > primeiroValor && terceiroValor > segundoValor) {
      maior = terceiroValor;
    } else {
      maior = null;
    }

  }

  if (maior != null) {
    console.log("Maior valor: " + maior);
  } else {
    console.log("Não existe um maior valor!");
  }

}

apresentarMaiorValor(11, 22);

apresentarMaiorValor(22, 21, 1);

// rest params
const apresentarNomes = (...nomes: Array<string>): void => {

  if (nomes.length == 0) {
    console.log("Não foi informado nenhum nome...");
  } else {
    
    nomes.forEach(function (nome: string): void {
      console.log("Nome: " + nome);
    });

  }

}

apresentarNomes();

apresentarNomes("Gabriel", "Felipe", "Eduardo");

const apresentarClientes = (...clientes: cliente[]): void => {

  if (clientes.length == 0) {
    console.log("Nãp foram informados clientes...");
  } else {

    const clientesAtivos: cliente[] = clientes.filter((clinete: cliente) => {

      if (clinete.status) {

        return clinete
      }

    });

    clientesAtivos.forEach((cliente: cliente) => {
      console.log(cliente);
    });
  }

}

apresentarClientes(
  {
    nome: "Gabriel",
    telefone: "149987766555",
    email: "teste@teste.com",
    produtoInteresse: ProdutoInteresse.CARRO,
    status: true
  },
  {
    nome: "Felipe",
    telefone: "14998776655",
    email: "teste2@teste.com",
    produtoInteresse: ProdutoInteresse.MOTO,
    status: false
  }
);
/**
 * é possível uma interface herdar da outra
 */

interface TelefoneProps {

  id: string | number;
  numeroTelefone: string;

}

interface ClienteProps {

  id: string | number;
  status: boolean;
  telefone?: TelefoneProps;

}

enum Genero {

  MASCULINO = "Masculino",
  FEMININO = "Feminino"

}

interface ClientePessoaFisicaProps extends ClienteProps {

  nomeCompleto: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  genero: Genero;

  apresentar: () => void;

}

const cliente: ClientePessoaFisicaProps = {
  id: 1,
  status: true,
  nomeCompleto: "Gabriel Rodrigues dos Santos",
  cpf: "123.456.789-98",
  dataNascimento: "11/02/2001",
  rg: "59.087.789-87",
  genero: Genero.MASCULINO,
  apresentar: function (): void {
    console.log(this.id)
    console.log(this.status)
    console.log(this.telefone?.id)
    console.log(this.telefone?.numeroTelefone)
    console.log(this.nomeCompleto)
    console.log(this.cpf)
    console.log(this.rg)
    console.log(this.dataNascimento)
    console.log(this.genero)
  }
}

cliente.apresentar()

interface Operacao {

  primeiroValor: number;
  segundoValor: number;

  calcular: () => number;

}

interface Soma extends Operacao {

}

interface Subtracao extends Operacao {

}

const soma: Soma = {
  primeiroValor: 10,
  segundoValor: 200,
  calcular: function (): number {

    return this.primeiroValor + this.segundoValor
  }
}

const subtracao: Subtracao = {
  primeiroValor: 200,
  segundoValor: 300,
  calcular: function (): number {

    return this.primeiroValor - this.segundoValor
  }
}

console.log(soma.calcular())
console.log(subtracao.calcular())
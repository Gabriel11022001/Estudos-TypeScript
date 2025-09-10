"use strict";
/**
 * é possível uma interface herdar da outra
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Genero;
(function (Genero) {
    Genero["MASCULINO"] = "Masculino";
    Genero["FEMININO"] = "Feminino";
})(Genero || (Genero = {}));
const cliente = {
    id: 1,
    status: true,
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    cpf: "123.456.789-98",
    dataNascimento: "11/02/2001",
    rg: "59.087.789-87",
    genero: Genero.MASCULINO,
    apresentar: function () {
        console.log(this.id);
        console.log(this.status);
        console.log(this.telefone?.id);
        console.log(this.telefone?.numeroTelefone);
        console.log(this.nomeCompleto);
        console.log(this.cpf);
        console.log(this.rg);
        console.log(this.dataNascimento);
        console.log(this.genero);
    }
};
cliente.apresentar();
const soma = {
    primeiroValor: 10,
    segundoValor: 200,
    calcular: function () {
        return this.primeiroValor + this.segundoValor;
    }
};
const subtracao = {
    primeiroValor: 200,
    segundoValor: 300,
    calcular: function () {
        return this.primeiroValor - this.segundoValor;
    }
};
console.log(soma.calcular());
console.log(subtracao.calcular());
//# sourceMappingURL=herdando_interfaces.js.map
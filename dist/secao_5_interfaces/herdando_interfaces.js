/**
 * é possível uma interface herdar da outra
 */
var Genero;
(function (Genero) {
    Genero["MASCULINO"] = "Masculino";
    Genero["FEMININO"] = "Feminino";
})(Genero || (Genero = {}));
var cliente = {
    id: 1,
    status: true,
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    cpf: "123.456.789-98",
    dataNascimento: "11/02/2001",
    rg: "59.087.789-87",
    genero: Genero.MASCULINO,
    apresentar: function () {
        var _a, _b;
        console.log(this.id);
        console.log(this.status);
        console.log((_a = this.telefone) === null || _a === void 0 ? void 0 : _a.id);
        console.log((_b = this.telefone) === null || _b === void 0 ? void 0 : _b.numeroTelefone);
        console.log(this.nomeCompleto);
        console.log(this.cpf);
        console.log(this.rg);
        console.log(this.dataNascimento);
        console.log(this.genero);
    }
};
cliente.apresentar();
var soma = {
    primeiroValor: 10,
    segundoValor: 200,
    calcular: function () {
        return this.primeiroValor + this.segundoValor;
    }
};
var subtracao = {
    primeiroValor: 200,
    segundoValor: 300,
    calcular: function () {
        return this.primeiroValor - this.segundoValor;
    }
};
console.log(soma.calcular());
console.log(subtracao.calcular());
export {};
//# sourceMappingURL=herdando_interfaces.js.map
/**
 * eu também posso definir funções em interfaces
 */
var curso = {
    id: "21",
    nome: "Curso de TypeScript",
    preco: 11.22,
    promocao: function (preco) {
        console.log("Na promoção o curso ficou apenas por R$" + preco);
    }
};
console.log(curso);
curso.promocao(9.87);
export {};
//# sourceMappingURL=funcoes_em_interfaces.js.map
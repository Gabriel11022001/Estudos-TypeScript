"use strict";
/**
 * eu também posso definir funções em interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
const curso = {
    id: "21",
    nome: "Curso de TypeScript",
    preco: 11.22,
    promocao: (preco) => {
        console.log("Na promoção o curso ficou apenas por R$" + preco);
    }
};
console.log(curso);
curso.promocao(9.87);
//# sourceMappingURL=funcoes_em_interfaces.js.map
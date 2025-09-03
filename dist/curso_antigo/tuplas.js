"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = ["Gabriel Rodrigues dos Santos", 24, true];
console.log(pessoa);
console.log("nome completo: " + pessoa[0]);
console.log("idade: " + pessoa[1]);
if (pessoa[2]) {
    console.log("possui cnh");
}
else {
    console.log("não possui cnh");
}
// array de tuplas
const clientes = [
    ["Gabriel", 24],
    ["Fernanda", 22],
];
console.log(clientes);
for (let i = 0; i < clientes.length; i++) {
    // console.log("Nome: " + clientes[ i ][ 0 ])
    // console.log("Idade: " + clientes[ i ][ 1 ])
}
//# sourceMappingURL=tuplas.js.map
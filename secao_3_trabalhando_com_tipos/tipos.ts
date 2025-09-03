/**
 * -> em typescript eu consigo definir tipos para as variáveis
 * -> também consigo definir variaveis sem declarar o tipo, mas isso
 * foge da ideia do typescript, o correto é sempre tipar
 */

const nome = "Gabriel"; // sem tipo definido
const sobrenome: string = "Rodrigues"; // definindo o tipo

const nomeCompleto: string = nome + " " + sobrenome; // concatenação

console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);

console.log("Nome completo: " + nomeCompleto);

"use strict";
/**
 * -> em typescript eu consigo definir tipos para as variáveis
 * -> também consigo definir variaveis sem declarar o tipo, mas isso
 * foge da ideia do typescript, o correto é sempre tipar
 * -> em js, a tipagem é dinâmica, ou seja, o tipo
 * é definido mediante a atribuição do dado definido
 * para a var, em typescript, eu psso inferir o tipo
 */
Object.defineProperty(exports, "__esModule", { value: true });
const nome = "Gabriel"; // sem tipo definido
const sobrenome = "Rodrigues"; // definindo o tipo
const nomeCompleto = nome + " " + sobrenome; // concatenação
console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);
console.log("Nome completo: " + nomeCompleto);
let telefone = "(14) 99877-6655";
const email = "teste@teste.com";
const dataNascimento = "11/02/2001";
const idade = 24;
const peso = 89.77;
console.log("Telefone: " + telefone);
console.log(`E-mail: ${email}`);
console.log("Data de nascimento: " + dataNascimento);
console.log('Idade: ' + idade);
console.log("Peso: " + peso + "kg");
// telefone = 22; defini que o tipo é string -> não posso atribuir outro tipo
// string
const genero = "Masculino";
console.log(genero);
console.log(genero.trim()); // remover espaços do final e do inicio
console.log(genero.toUpperCase()); // retorna tudo maiusculo
console.log(nomeCompleto.toLowerCase()); // retorna tudo minusculo
console.log(typeof nomeCompleto);
// number -> inteiros e números com casa decimal
const primeiroValor = 22;
const segundoValor = 10;
console.log(primeiroValor + segundoValor);
console.log(typeof primeiroValor);
// boolean -> true or false
const possuiCnh = true;
console.log(possuiCnh);
console.log(typeof possuiCnh);
/**
 * também posso declarar uma variavel e atribuir um
 * valor a ela depois
 */
let terceiroValor;
terceiroValor = 100;
console.log(terceiroValor);
// union type -> declarar que uma var pode possuir mais de um tipo
let testeUnionType = 22;
console.log(testeUnionType);
testeUnionType = "Teste de union type";
console.log(testeUnionType);
let tecnologia = "TypeScript";
console.log(tecnologia);
let quartoNumero = 2000;
console.log(quartoNumero);
const tomouVacina = true;
if (tomouVacina) {
    console.log("Tomou vacina!");
}
else {
    console.log("Não tomou vacina!");
}
/**
 * Any -> quando eu defino que uma variável é do tipo any, eu
 * defino que ela pode aceitar dados de qualquer tipo
 */
let variavelAceitaQualquerValor = 20;
console.log(variavelAceitaQualquerValor);
variavelAceitaQualquerValor = "teste";
console.log(variavelAceitaQualquerValor);
variavelAceitaQualquerValor = false;
console.log(variavelAceitaQualquerValor);
const somar = (primeiroValor, segundoValor) => {
    return primeiroValor + segundoValor;
};
const primeiroNumero = 100;
const segundoNumero = 209;
const soma = somar(primeiroNumero, segundoNumero);
console.log("primeiro número: " + primeiroNumero);
console.log("segundo número: " + segundoNumero);
console.log("soma: " + soma);
// arrays
const nomes = ["Gabriel", "Pedro", "Fernanda"];
console.log(nomes);
const idades = [22, 33, 44, 55];
console.log(idades);
// adicionar elementos no final do array
nomes.push("José");
nomes.push("Eduarda");
nomes.push("Gustavo");
console.log(nomes);
nomes.pop(); // remover o ultimo elemento do array
console.log(nomes);
console.log(nomes.at(2)); // obter um elemento de um indice expecifico
// validar se um valor está no array
if (nomes.includes("Gabriel")) {
    console.log("Gabriel está no array!");
}
else {
    console.log("Gabriel não está no array!");
}
const emails = [];
emails.push({
    email: "teste1@teste.com"
});
emails.push({
    email: "teste2@teste.com"
});
console.log(emails);
// também posso definir arrays desse tipo
const emailsNovo = [];
emailsNovo.push({ email: "teste1@teste.com" });
emailsNovo.push({ email: "testeteste@teste.com" });
emailsNovo.forEach((email) => {
    console.log(email.email.toLocaleLowerCase());
});
for (let i = 0; i < emailsNovo.length; i++) {
    const emailApresentar = emailsNovo[i];
    console.log(emailApresentar?.email);
}
for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    if (email != undefined) {
        console.log(email.email);
    }
}
// tupla
const aluno = ["Gabriel", 9.77];
console.log(aluno);
// object
const cliente = {
    nomeCompleto: "Gabriel Rodrigues dos Santos",
    telefone: "(14) 997776655",
    email: "teste@teste.com",
    dataNascimento: "11/02/2001"
};
console.log(cliente);
console.log(cliente.nomeCompleto);
// enum
var Cores;
(function (Cores) {
    Cores["white"] = "#fff";
    Cores["black"] = "#000";
})(Cores || (Cores = {}));
const primeiraCor = Cores.black;
const segundaCor = Cores.white;
console.log(primeiraCor);
console.log(segundaCor);
//# sourceMappingURL=tipos.js.map
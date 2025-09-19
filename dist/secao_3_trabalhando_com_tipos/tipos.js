/**
 * -> em typescript eu consigo definir tipos para as variáveis
 * -> também consigo definir variaveis sem declarar o tipo, mas isso
 * foge da ideia do typescript, o correto é sempre tipar
 * -> em js, a tipagem é dinâmica, ou seja, o tipo
 * é definido mediante a atribuição do dado definido
 * para a var, em typescript, eu psso inferir o tipo
 */
var nome = "Gabriel"; // sem tipo definido
var sobrenome = "Rodrigues"; // definindo o tipo
var nomeCompleto = nome + " " + sobrenome; // concatenação
console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);
console.log("Nome completo: " + nomeCompleto);
var telefone = "(14) 99877-6655";
var email = "teste@teste.com";
var dataNascimento = "11/02/2001";
var idade = 24;
var peso = 89.77;
console.log("Telefone: " + telefone);
console.log("E-mail: ".concat(email));
console.log("Data de nascimento: " + dataNascimento);
console.log('Idade: ' + idade);
console.log("Peso: " + peso + "kg");
// telefone = 22; defini que o tipo é string -> não posso atribuir outro tipo
// string
var genero = "Masculino";
console.log(genero);
console.log(genero.trim()); // remover espaços do final e do inicio
console.log(genero.toUpperCase()); // retorna tudo maiusculo
console.log(nomeCompleto.toLowerCase()); // retorna tudo minusculo
console.log(typeof nomeCompleto);
// number -> inteiros e números com casa decimal
var primeiroValor = 22;
var segundoValor = 10;
console.log(primeiroValor + segundoValor);
console.log(typeof primeiroValor);
// boolean -> true or false
var possuiCnh = true;
console.log(possuiCnh);
console.log(typeof possuiCnh);
/**
 * também posso declarar uma variavel e atribuir um
 * valor a ela depois
 */
var terceiroValor;
terceiroValor = 100;
console.log(terceiroValor);
// union type -> declarar que uma var pode possuir mais de um tipo
var testeUnionType = 22;
console.log(testeUnionType);
testeUnionType = "Teste de union type";
console.log(testeUnionType);
var tecnologia = "TypeScript";
console.log(tecnologia);
var quartoNumero = 2000;
console.log(quartoNumero);
var tomouVacina = true;
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
var variavelAceitaQualquerValor = 20;
console.log(variavelAceitaQualquerValor);
variavelAceitaQualquerValor = "teste";
console.log(variavelAceitaQualquerValor);
variavelAceitaQualquerValor = false;
console.log(variavelAceitaQualquerValor);
var somar = function (primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
};
var primeiroNumero = 100;
var segundoNumero = 209;
var soma = somar(primeiroNumero, segundoNumero);
console.log("primeiro número: " + primeiroNumero);
console.log("segundo número: " + segundoNumero);
console.log("soma: " + soma);
// arrays
var nomes = ["Gabriel", "Pedro", "Fernanda"];
console.log(nomes);
var idades = [22, 33, 44, 55];
console.log(idades);
// adicionar elementos no final do array
nomes.push("José");
nomes.push("Eduarda");
nomes.push("Gustavo");
console.log(nomes);
nomes.pop(); // remover o ultimo elemento do array
console.log(nomes);
var emails = [];
emails.push({
    email: "teste1@teste.com"
});
emails.push({
    email: "teste2@teste.com"
});
console.log(emails);
// também posso definir arrays desse tipo
var emailsNovo = [];
emailsNovo.push({ email: "teste1@teste.com" });
emailsNovo.push({ email: "testeteste@teste.com" });
emailsNovo.forEach(function (email) {
    console.log(email.email.toLocaleLowerCase());
});
for (var i = 0; i < emailsNovo.length; i++) {
    var emailApresentar = emailsNovo[i];
    console.log(emailApresentar === null || emailApresentar === void 0 ? void 0 : emailApresentar.email);
}
for (var i = 0; i < emails.length; i++) {
    var email_1 = emails[i];
    if (email_1 != undefined) {
        console.log(email_1.email);
    }
}
// tupla
var aluno = ["Gabriel", 9.77];
console.log(aluno);
// object
var cliente = {
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
var primeiraCor = Cores.black;
var segundaCor = Cores.white;
console.log(primeiraCor);
console.log(segundaCor);
export {};
//# sourceMappingURL=tipos.js.map
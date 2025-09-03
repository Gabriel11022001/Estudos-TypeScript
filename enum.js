var TamanhoCamisa;
(function (TamanhoCamisa) {
    TamanhoCamisa["P"] = "P";
    TamanhoCamisa["M"] = "M";
    TamanhoCamisa["G"] = "G";
    TamanhoCamisa["GG"] = "GG";
})(TamanhoCamisa || (TamanhoCamisa = {}));
var camisa = {
    modelo: "Camisa de teste",
    precoVenda: 12.99,
    tamanho: TamanhoCamisa.G
};
console.log(camisa);

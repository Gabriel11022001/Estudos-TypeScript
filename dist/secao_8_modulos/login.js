/**
 * no import abaixo, como a interface Usuario não está definida
 * como default, quando eu for importar, eu tenho que colocar entre {}
 */
import loginSenha from "./login_senha";
var login = function (usuario) {
    var login = loginSenha.login, senha = loginSenha.senha;
    if (usuario.login === login && usuario.senha === senha) {
        return true;
    }
    return false;
};
export default login;
//# sourceMappingURL=login.js.map
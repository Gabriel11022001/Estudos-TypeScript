/**
 * no import abaixo, como a interface Usuario não está definida
 * como default, quando eu for importar, eu tenho que colocar entre {}
 */
import loginSenha from "./login_senha";
import { Usuario } from "./Usuario";

const login = (usuario: Usuario): boolean => {
  const { login, senha } = loginSenha

  if (usuario.login === login && usuario.senha === senha) {
    
    return true
  }
  
  return false
}

export default login;
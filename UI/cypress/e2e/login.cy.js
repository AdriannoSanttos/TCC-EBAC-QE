import LoginPage from '../support/pages/LoginPage';
import usuarios from '../fixtures/usuarios.json';

describe('US-0002 - Login na Plataforma', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('CT-LOGIN-01 - Deve realizar login com credenciais válidas', () => {
    LoginPage.login(usuarios.usuarioValido.username, usuarios.usuarioValido.password);
    LoginPage.checkLoginSuccess('irmaodojorel');
  });

  it('CT-LOGIN-02 - Não deve permitir login com senha inválida', () => {
    LoginPage.login(usuarios.usuarioInvalido.username, usuarios.usuarioInvalido.password);
    LoginPage.checkSenhaInvalida();
  });

  it('CT-LOGIN-03 - Não deve permitir login com usuário inexistente', () => {
    LoginPage.login(usuarios.usuarioInexistente.username, usuarios.usuarioInexistente.password);
    LoginPage.checkUsuarioInexistente();
  });

  it('CT-LOGIN-04 - Deve continuar exibindo erro após 3 tentativas inválidas', () => {
    LoginPage.loginInvalido(
      usuarios.usuarioInvalido.username, 
      usuarios.usuarioInvalido.password, 
      3
    );
  });
});
class LoginPage {
  
  visit() {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  }

  fillUsername(username) {
    cy.get('#username').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  submit() {
    cy.get('[name="login"]').click();
  }

  
  checkLoginSuccess(username) {
    cy.contains(`Olá, ${username}`).should('be.visible');
  }

  checkSenhaInvalida() {
    cy.contains('A senha fornecida para o e-mail').should('be.visible');
  }

  checkUsuarioInexistente() {
    cy.get('.woocommerce-error')
      .should('be.visible')
      .and('contain.text', 'Endereço de e-mail desconhecido');
  }


  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  loginInvalido(username, password, tentativas = 3) {
    for (let i = 0; i < tentativas; i++) {
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
      this.checkSenhaInvalida();
    }
  }
}

export default new LoginPage();
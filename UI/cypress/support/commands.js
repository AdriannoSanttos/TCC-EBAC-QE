
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/minha-conta');
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('clearCart', () => {
  cy.get('.cart-contents').click();
  cy.get('.remove').click({ multiple: true });
});
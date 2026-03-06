class CarrinhoPage {
  
  visit() {
    cy.visit('http://lojaebac.ebaconline.art.br');
  }

  selectProduct(productName) {
    cy.contains(productName).click();
  }

  selectTamanho(tamanho) {
    cy.get(`.button-variable-item-${tamanho}`).click();
  }

  selectCor(cor) {
    cy.get(`.button-variable-item-${cor}`).click();
  }

  setQuantidade(quantidade) {
    cy.get('.qty').clear().type(quantidade.toString());
  }

  addToCart() {
    cy.get('.single_add_to_cart_button').click();
  }

  
  checkSuccessMessage(produtoNome, quantidade = null) {
    if (quantidade) {
      cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', `${quantidade} × “${produtoNome}”`);
    } else {
      cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', `“${produtoNome}” foi adicionado no seu carrinho.`);
    }
  }

  checkProductInCart(produtoNome, tamanho, cor) {
    cy.get('.product-name > a')
      .should('be.visible')
      .and('contain', `${produtoNome} - ${tamanho}, ${cor}`);
  }

  checkBotaoDesabilitado() {
    cy.get('.single_add_to_cart_button')
      .should('have.class', 'disabled')
      .and('have.class', 'wc-variation-is-unavailable');
  }

  checkForaEstoque() {
    cy.get('.stock')
      .should('be.visible')
      .and('contain', 'Fora de estoque');
  }

  checkMensagemCupom(percentual) {
    cy.get('.woocommerce-message').should(($message) => {
      const texto = $message.text();
      expect(texto).to.match(/cupom|desconto/i,
        `Deveria ter mensagem de cupom de ${percentual}%, mas encontrou: ${texto}`);
    });
  }

  checkCarrinhoCupom(percentual) {
    cy.get('body').should(($body) => {
      const texto = $body.text();
      expect(texto).to.match(/cupom|desconto/i,
        `Deveria ter informação de cupom de ${percentual}% no carrinho`);
    });
  }

  
  checkBugLimiteUnidades() {
    cy.get('body').then(($body) => {
      if ($body.find('.woocommerce-error').length > 0) {
        expect(true).to.be.true;
      } else {
        throw new Error('BUG: Sistema permitiu adicionar mais de 10 unidades');
      }
    });
  }

  
  goToCart() {
    cy.get('.woocommerce-message > .button').click();
  }

  checkout() {
    cy.get('.checkout-button').click();
  }

  wait(ms) {
    cy.wait(ms);
  }
}

export default new CarrinhoPage();
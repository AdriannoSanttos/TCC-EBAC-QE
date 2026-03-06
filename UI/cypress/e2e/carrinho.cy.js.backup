describe('US-0001 - Adicionar Item ao Carrinho', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    })

    it('CT-CARR-01 - Deve adicionar produto disponível ao carrinho', () => {

        cy.contains('Ingrid Running Jacket').click();
        cy.get('.button-variable-item-XS').click();
        cy.get('.button-variable-item-Orange').click();
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', '“Ingrid Running Jacket” foi adicionado no seu carrinho.');


        cy.get('.woocommerce-message > .button').click();


        cy.get('.product-name > a')
            .should('be.visible')
            .and('contain', 'Ingrid Running Jacket - XS, Orange');


        cy.get('.checkout-button').click();

    })

    it('CT-CARR-02 - Deve impedir adicionar produto fora de estoque', () => {


        cy.contains('Ingrid Running Jacket').click();


        cy.get('.button-variable-item-XL').click();
        cy.get('.button-variable-item-White').click();


        cy.get('.single_add_to_cart_button')
            .should('have.class', 'disabled')
            .and('have.class', 'wc-variation-is-unavailable');


        cy.get('.stock')
            .should('be.visible')
            .and('contain', 'Fora de estoque');

    });


    it('CT-CARR-03 - Não deve permitir mais de 10 unidades do mesmo produto (BUG - SISTEMA PERMITE)', () => {
        cy.contains('Ingrid Running Jacket').click();
        cy.get('.button-variable-item-XS').click();
        cy.get('.button-variable-item-Orange').click();
        cy.get('.qty').clear().type('11');
        cy.get('.single_add_to_cart_button').click();


        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho');


        cy.get('.woocommerce-message').should('contain', '11 × “Ingrid Running Jacket”');


    });

    // 
    it('CT-CARR-04 - Carrinho entre R$200 e R$600 deve gerar cupom de 10%', () => {
        cy.visit('http://lojaebac.ebaconline.art.br');

        cy.contains('Ingrid Running Jacket').click();
        cy.get('.button-variable-item-XS').click();
        cy.get('.button-variable-item-Orange').click();
        cy.wait(1000);

        cy.get('.qty').clear().type('3');
        cy.get('.single_add_to_cart_button').click();

        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', 'foram adicionados no seu carrinho');

        cy.get('.woocommerce-message').should(($message) => {
            const texto = $message.text();
            expect(texto).to.match(/cupom|desconto|10%/i,
                'Deveria ter mensagem de cupom, mas encontrou: ' + texto);
        });

        cy.get('.woocommerce-message > .button').click();

        cy.get('body').should(($body) => {
            const texto = $body.text();
            expect(texto).to.match(/cupom|desconto|10%/i,
                'Deveria ter informação de cupom no carrinho');
        });
    });

    it('CT-CARR-05 - Carrinho acima de R$600 deve gerar cupom de 15%', () => {
        cy.visit('http://lojaebac.ebaconline.art.br');

        cy.contains('Ingrid Running Jacket').click();
        cy.get('.button-variable-item-XS').click();
        cy.get('.button-variable-item-Orange').click();
        cy.wait(1000);

        cy.get('.qty').clear().type('8');
        cy.get('.single_add_to_cart_button').click();

        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', 'foram adicionados no seu carrinho');

        cy.get('.woocommerce-message').should(($message) => {
            const texto = $message.text();
            expect(texto).to.match(/cupom|desconto|15%/i,
                'Deveria ter mensagem de cupom de 15%, mas encontrou: ' + texto);
        });

        cy.get('.woocommerce-message > .button').click();

        cy.get('body').should(($body) => {
            const texto = $body.text();
            expect(texto).to.match(/cupom|desconto|15%/i,
                'Deveria ter informação de cupom de 15% no carrinho');
        });
    });
})
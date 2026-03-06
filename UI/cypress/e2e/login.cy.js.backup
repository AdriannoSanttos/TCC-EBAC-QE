describe('US-0002 - Login na Plataforma', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('CT-LOGIN-01 - Deve realizar login com credenciais válidas', () => {

        cy.get('#username').type('irmaodojorel@teste.com.br')
        cy.get('#password').type('teste@002')
        cy.get('[name="login"]').click()
        cy.contains('Olá, irmaodojorel').should('be.visible')

    })

    it('CT-LOGIN-02 - Não deve permitir login com senha inválida', () => {

        cy.get('#username').type('irmaodojorel@teste.com.br')
        cy.get('#password').type('senhaErrada123')
        cy.get('[name="login"]').click()
        cy.contains('A senha fornecida para o e-mail')
            .should('be.visible')

    })

    it('CT-LOGIN-03 - Não deve permitir login com usuário inexistente', () => {

        cy.get('#username').type('usuarioinexistente@teste.com')
        cy.get('#password').type('qualquerSenha123')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error')
            .should('be.visible')
            .and('contain.text', 'Endereço de e-mail desconhecido')

    })

    it('CT-LOGIN-04 - Deve continuar exibindo erro após 3 tentativas inválidas', () => {

        for (let i = 0; i < 3; i++) {

            cy.get('#username').clear().type('irmaodojorel@teste.com.br')
            cy.get('#password').clear().type('senhaErrada123')
            cy.get('[name="login"]').click()

            cy.contains('A senha fornecida para o e-mail')
                .should('be.visible')
        }

    })

})
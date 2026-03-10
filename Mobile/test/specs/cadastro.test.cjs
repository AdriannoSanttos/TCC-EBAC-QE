import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import cadastroPage from '../pageobjects/cadastro.page.js';

describe('Cadastro de usuário - EBAC Shop', () => {

    function generateUser() {
        const timestamp = Date.now();
        return {
            firstName: 'José',
            lastName: 'Adriano',
            phone: '11999999999',
            email: `teste${timestamp}@ebac.art.br`,
            password: 'Senha123!'
        };
    }

    it('Deve criar um novo usuário e acessar a tela principal', async () => {
        const user = generateUser();

        await homePage.openMenu('profile');
        await loginPage.goToSignUp();
        await cadastroPage.fillSignupForm(user);
        await cadastroPage.submitForm();

        const mainTitle = $('android=new UiSelector().text("EBAC Store")');
        await mainTitle.waitForDisplayed({ timeout: 20000 });
        expect(await mainTitle.isDisplayed()).toBe(true);
    });
});

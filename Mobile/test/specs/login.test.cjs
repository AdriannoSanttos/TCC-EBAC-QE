import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import profilePage from '../pageobjects/profile.page.js';

describe('Fluxo de Login - EBAC Shop', () => {

    beforeEach(async () => {
        await driver.terminateApp('br.com.lojaebac');
        await driver.activateApp('br.com.lojaebac');
    });

    it('Deve logar com usuário válido', async () => {
        await homePage.openMenu('profile');
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
        await homePage.openMenu('profile');

        const isProfileVisible = await profilePage.isProfileNameVisible('EBAC Cliente');
        expect(isProfileVisible).toBe(true);
    });
});

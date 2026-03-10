import { $ } from '@wdio/globals';

class LoginPage {
    
    get emailInput() {
        return $('android=new UiSelector().resourceId("email")');
    }

    get passwordInput() {
        return $('android=new UiSelector().resourceId("password")');
    }

    get loginButton() {
        return $('android=new UiSelector().text("Login")');
    }

    get signUpButton() {
        return $('android=new UiSelector().text("Sign up")');
    }

    
    async waitForLoginScreen(timeout = 30000) {
        await this.emailInput.waitForDisplayed({ timeout });
        await this.passwordInput.waitForDisplayed({ timeout });
        await this.loginButton.waitForDisplayed({ timeout });
        await this.signUpButton.waitForDisplayed({ timeout });
    }


    async login(email, password) {
        await this.waitForLoginScreen();
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }


    async goToSignUp() {
        await this.waitForLoginScreen();
        await this.signUpButton.click();
    }
}

export default new LoginPage();

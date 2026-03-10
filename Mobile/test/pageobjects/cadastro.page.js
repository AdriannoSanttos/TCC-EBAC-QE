import { $ } from '@wdio/globals';

class CadastroPage {
    get firstName() { return $('android=new UiSelector().resourceId("firstName")'); }
    get lastName() { return $('android=new UiSelector().resourceId("lastName")'); }
    get phone() { return $('android=new UiSelector().resourceId("phone")'); }
    get email() { return $('android=new UiSelector().resourceId("email")'); }
    get password() { return $('android=new UiSelector().resourceId("password")'); }
    get repassword() { return $('android=new UiSelector().resourceId("repassword")'); }
    get btnCreate() { return $('android=new UiSelector().text("Create")'); }

    async fillSignupForm(user) {
        await this.firstName.waitForDisplayed({ timeout: 20000 });
        await this.firstName.setValue(user.firstName);
        await this.lastName.setValue(user.lastName);
        await this.phone.setValue(user.phone);
        await this.email.setValue(user.email);
        await this.password.setValue(user.password);

        await this.repassword.scrollIntoView();
        await this.repassword.setValue(user.password);
    }

    async submitForm() {
    
        await this.btnCreate.scrollIntoView();
        await this.btnCreate.waitForDisplayed({ timeout: 10000 });
        await this.btnCreate.click();
    }

    async isSignupScreenDisplayed() {
        const signUpText = $('android=new UiSelector().text("Sign up")');
        return await signUpText.waitForDisplayed({ timeout: 20000 });
    }
}

export default new CadastroPage();

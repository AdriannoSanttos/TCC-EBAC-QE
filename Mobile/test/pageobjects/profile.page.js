import { $ } from '@wdio/globals';

class ProfilePage {
    profileName(name) {
        return $(`//android.widget.TextView[@text="${name}"]`);
    }

    async isProfileNameVisible(name) {
        const element = this.profileName(name);
        await element.waitForDisplayed({ timeout: 20000 });
        return element.isDisplayed();
    }
}

export default new ProfilePage();

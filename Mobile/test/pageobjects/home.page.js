import { $ } from '@wdio/globals';

class HomePage {

    
    profileTab() {
        return $('id:tab-profile');
    }

    
    async openMenu() {
        const tab = this.profileTab();
        await tab.waitForDisplayed({ timeout: 20000 }); 
        await tab.click();
    }
}

export default new HomePage();

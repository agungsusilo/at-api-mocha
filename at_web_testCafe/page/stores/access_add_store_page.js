import {t, Selector } from 'testcafe';

class storePage{
    constructor () {
        this.addButton = Selector('button').withExactText('Add');
        // this.storeInformationWording = Selector('span').withExactText('Store Information');
    }

    async addStore() {
        await t.click(this.addButton);
    }
}

export default new storePage();
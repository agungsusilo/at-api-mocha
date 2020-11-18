import { Selector } from 'testcafe'
import page from '../page/stores/access_add_store_page.js'
import roles from '../helper/ssc_accounts.js'

fixture('testcafe try')
    .page `https://seller-stg.sinbad.web.id/`
    .beforeEach(async t =>{
        await t
            .useRole(roles.adminLakme)
    });

test('As an Admin, I want to access Add Store Page', async t => {
    await page
        .addStore()
    await t
        .expect(Selector('span').withExactText('Store Information').exists).ok()
});
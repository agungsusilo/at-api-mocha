import { Role, Selector } from 'testcafe';
const env = require('dotenv').config();

const ssc_staging = process.env.BASE_URL_STG
const inputUsername = Selector('input[id="mat-input-0"]')
const inputPassword = Selector('input[id="mat-input-1"]')
const submitButton = Selector('button').withText("LOGIN")
const trsUsername = process.env.TRS_USERNAME;
const trsPassword = process.env.TRS_PASSWORD;
const lakemUsername = process.env.LAKME_USERNAME;
const lakmePassword = process.env.LAKME_PASSWORD;

const adminTRS = Role(ssc_staging, async t => {
    await t
        .typeText(inputUsername, trsUsername)
        .typeText(inputPassword, trsPassword)
        .click(submitButton)
        .expect(Selector('button').withExactText('Add').exists).ok()
        // .expect(Selector('span[class="username mr-12"]').value).eql(' ADMIN SC TIGARAKSA ')
});

const adminLakme = Role(ssc_staging, async t => {
    await t
        .typeText(inputUsername, lakemUsername)
        .typeText(inputPassword, lakmePassword)
        .click(submitButton)
        .expect(Selector('button').withExactText('Add').exists).ok()
        // .expect(Selector('span[class="username mr-12"]').withExactText(' ADMIN SC LAKME ').exists).ok()
});

// const adminUnipro = Role(ssc_staging, async t => {
//     await t
//         .typeText(inputUsername, trsUsername)
//         .typeText(inputPassword, trsPassword)
//         .click(submitButton)
//         .expect(Selector('button').withExactText('Add').exists).ok()
// });

module.exports = {
    adminTRS,
    adminLakme
};

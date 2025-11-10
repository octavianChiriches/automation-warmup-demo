import {test, expect} from '@playwright/test';
import { USERS, FORM_MESSAGES } from '../.github/workflows/data/forms';

// for (const user of validUsers) {
//     test(`Fill full form - ${user.scenario}`, async ({page}) => {

//         await page.goto('https://playground-drab-six.vercel.app/form');

//         await test.step('Fill in the full form', async () => {
//             // Fill in text fields
//         await page.getByRole('textbox', { name: 'Name *' }).click();
//         await page.getByRole('textbox', { name: 'Name *' }).fill(user.name);
//         await page.getByRole('textbox', { name: 'Email *' }).click();
//         await page.getByRole('textbox', { name: 'Email *' }).fill(user.email);
//         await page.getByRole('textbox', { name: 'Password *' }).click();
//         await page.getByRole('textbox', { name: 'Password *' }).fill(user.password);
//         await page.getByLabel('Country *').selectOption({ label: user.countryLabel });
//         await page.getByRole('radio', { name: user.gender, exact: true }).check();
//         for (const hobby of user.hobbies) {
//             await page.getByRole('checkbox', { name: hobby }).check();
//             }
//         await page.getByRole('button', { name: 'Send' }).click();
//         await expect (page.getByText('The form has been submitted')).toBeVisible();
//         await expect (page.getByText('Success!')).toBeVisible();
//     });
// });
// }


test.describe('FORMS', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/form');
        await expect(page.getByRole('heading', {name: 'Form'})).toBeVisible(); 
    });

    // the test is declared inside the 'for' loop because Playwright doesn't accept tests with the same name in the same file; 

     for (const user of USERS) {

        const title = `${user.scenario} | ${user.name} | ${user.countryLabel} | ${user.gender}`; 


        test(title, async ({page}) => {
            await test.step('Fill required fields (incl. gender)', async () => { 
                
                await page.getByRole('textbox', {name: 'Name *'}).fill(user.name); 
                await page.getByRole('textbox', {name: 'Email *'}).fill(user.email);
                await page.getByRole('textbox', {name: 'Password *'}).fill(user.password); 
                

                await page.getByLabel('Country *').selectOption(user.countryValue);
                await page.getByRole('radio', {name: user.gender, exact: true}).check(); 
                // we are using 'exact' because we have 'Male' & 'Female' as options
                // for radio options we are using '.check'; 


            }); 

            await test.step('Select hobbies (if any)', async () => {

                for (const hobby of user.hobbies || []) {
                    await page.getByRole('checkbox', {name: hobby}).check; 
                }
            }); 

            await test.step('Submit and validate success', async () => {

                await page.getByRole('button', {name: 'Send'}).click();
                await expect(page.getByText(FORM_MESSAGES.successTitle)).toBeVisible();
                await expect(page.getByText(FORM_MESSAGES.successBody)).toBeVisible();
            });


        });
     }

});

// GitHub - Bruno code variant - https://github.com/brunomachadors/playgroundautomation/blob/lesson-03-forms/tests/forms.spec.js 
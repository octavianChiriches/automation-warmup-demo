import {test, expect} from '@playwright/test';
import { validUsers } from '../.github/workflows/data/forms';

for (const user of validUsers) {
    test(`Fill full form - ${user.scenario}`, async ({page}) => {

        await page.goto('https://playground-drab-six.vercel.app/form');

        await test.step('Fill in the full form', async () => {
            // Fill in text fields
        await page.getByRole('textbox', { name: 'Name *' }).click();
        await page.getByRole('textbox', { name: 'Name *' }).fill(user.name);
        await page.getByRole('textbox', { name: 'Email *' }).click();
        await page.getByRole('textbox', { name: 'Email *' }).fill(user.email);
        await page.getByRole('textbox', { name: 'Password *' }).click();
        await page.getByRole('textbox', { name: 'Password *' }).fill(user.password);
        await page.getByLabel('Country *').selectOption({ label: user.countryLabel });
        await page.getByRole('radio', { name: user.gender, exact: true }).check();
        for (const hobby of user.hobbies) {
            await page.getByRole('checkbox', { name: hobby }).check();
            }
        await page.getByRole('button', { name: 'Send' }).click();
        await expect (page.getByText('The form has been submitted')).toBeVisible();
        await expect (page.getByText('Success!')).toBeVisible();
    });
});
}

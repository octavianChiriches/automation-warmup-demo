import { test, expect } from '@playwright/test';
import { FormPage } from '/Users/chirichesoctavian-leonard/automation-warmup-demo/tests/pages/form.page.js';
import { USERS } from './data/forms.data';


for (const user of USERS) {

    test('FORM FILLING - ' + user.name, async ({ page }) => {
    const form = new FormPage(page);
    await form.navigateToForm();
    await form.fillName(user.name);
    await form.fillEmail(user.email);
    await form.fillPassword(user.password);
    await form.selectCountryByLabel(user.countryLabel);
    await form.selectGenderByValue(user.genderValue);
    await form.selectHobbies(user.hobbies);
    await form.submitForm();
    await form.validateSuccess();

    
});
};


test('FORM FILLING - ANA', async ({ page }) => {
    const form = new FormPage(page);
    await form.navigateToForm();
    await form.fillName('Ana');

});
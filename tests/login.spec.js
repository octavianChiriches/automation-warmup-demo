import { test, expect } from "@playwright/test";
import { USERS } from "./data/login";

test.beforeEach(async ({ page }) => {
    await page.goto('/login');
});

test('Login sucessful', async ({ page }) => {

    await test.step('Perform login with valid credentials', async () => {
        await page
        .getByRole('textbox', {name: 'Type your username'})
        .fill(USERS.valid.username);
        await page
        .getByRole('textbox', {name: 'Type your password'})
        .fill(USERS.valid.password);
        await page
        .getByRole('button', {name: 'Login'})
        .click();
    });

    await test.step('Verify successful login message', async () => {
        await expect(page.getByText(USERS.valid.expectedMessage)).toBeVisible();
    });
});

test('Blocked account', async ({ page }) => {


    await test.step('Attempt login with blocked account credentials', async () => {
        await page
        .getByRole('textbox', {name: 'Type your username'})
        .fill(USERS.blocked.username);
        await page
        .getByRole('textbox', {name: 'Type your password'})
        .fill(USERS.blocked.password);
        await page
        .getByRole('button', {name: 'Login'})
        .click();
    });

    await test.step('Verify blocked account message', async () => {
        await expect(page.getByText(USERS.blocked.expectedMessage)).toBeVisible();
    });
});

test('Invalid user', async ({ page }) => {
    await test.step('Attempt login with invalid user credentials', async () => {
        await page
        .getByRole('textbox', {name: 'Type your username'})
        .fill(USERS.invalid.username);
        await page
        .getByRole('textbox', {name: 'Type your password'})
        .fill(USERS.invalid.password);
        await page
        .getByRole('button', {name: 'Login'})
        .click();
    });

    await test.step('Verify invalid user message', async () => {
        await expect(page.getByText(USERS.invalid.expectedMessage)).toBeVisible();
    });
});

test('Wrong password', async ({ page }) => {

    await test.step('Attempt login with wrong password', async () => {
        await page
        .getByRole('textbox', {name: 'Type your username'})
        .fill(USERS.wrongPassword.username);
        await page
        .getByRole('textbox', {name: 'Type your password'})
        .fill(USERS.wrongPassword.password);
        await page
        .getByRole('button', {name: 'Login'})
        .click();
    });

    await test.step('Verify wrong password message', async () => {
        await expect(page.getByText(USERS.wrongPassword.expectedMessage)).toBeVisible();
    });
});

test('Wrong password 3 times', async ({ page }) => {

    await test.step('Attempt login with wrong password 3 times', async () => {
        await page
        .getByRole('textbox', {name: 'Type your username'})
        .fill(USERS.wrongPassword.username);
        await page
        .getByRole('textbox', {name: 'Type your password'})
        .fill(USERS.wrongPassword.password);
        await page
        .getByRole('button', {name: 'Login'})
        .click();
    });

    await test.step('Verify user is blocked after 3 failed attempts', async () => {
        while (await page.getByText(USERS.wrongPassword.expectedMessage).isVisible()) {
            await page.getByRole('button', {name: 'Login'}).click();
        }

        await expect(page.getByText('User temporarily blocked!')).toBeVisible();
    });
});


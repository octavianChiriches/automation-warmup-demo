import { test, expect } from "@playwright/test";

test('Login sucessful', async ({ page }) => {

    await page.goto('https://playground-drab-six.vercel.app/login');

    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('User successfully logged in!')).toBeVisible();
});

test('Blocked account', async ({ page }) => {

    await page.goto('https://playground-drab-six.vercel.app/login');

    await page.getByRole('textbox', {name: 'Type your username'}).fill('testblock');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('User blocked!')).toBeVisible();
});

test('Invalid user', async ({ page }) => {

    await page.goto('https://playground-drab-six.vercel.app/login');

    await page.getByRole('textbox', {name: 'Type your username'}).fill('testblock1');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('User not found!')).toBeVisible();
});

test('Wrong password', async ({ page }) => {

    await page.goto('https://playground-drab-six.vercel.app/login');

    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password121');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Incorrect username or password!')).toBeVisible();
});

test('Wrong password 3 times', async ({ page }) => {

    await page.goto('https://playground-drab-six.vercel.app/login');

    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password121');

    while (await page.getByText('Incorrect username or password!').isVisible()) {
        await page.getByRole('button', {name: 'Login'}).click();
        console.log('1')
    }
    
    await expect(page.getByText('User temporarily blocked!')).toBeVisible();
});


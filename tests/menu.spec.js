// @ts-check
import { test, expect } from '@playwright/test';

test('Menu HOME validation', async ({ page }) => {
  await page.goto('https://playground-drab-six.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playground/);

  await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'HOME' })).toHaveText(/HOME/);


  await expect(page.getByRole('link', { name: 'LOGIN' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LOGIN' })).toHaveText(/LOGIN/);

  await expect(page.getByRole('link', { name: 'FORM' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'FORM' })).toHaveText(/FORM/);

  await expect(page.getByRole('link', { name: 'TABLE' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'TABLE' })).toHaveText(/TABLE/);

  await expect(page.getByRole('link', { name: 'TASKS' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'TASKS' })).toHaveText(/TASKS/);

  await expect(page.getByRole('link', { name: 'STORE' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'STORE' })).toHaveText(/STORE/);

  await expect(page.getByRole('link', { name: 'ABOUT' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'ABOUT' })).toHaveText(/ABOUT/);

  await expect(page.getByTestId('instructionsLoginHeader')).toBeVisible();
  await expect(page.getByTestId('instructionsLoginHeader')).toHaveText("Login Instructions");

  await expect(page.getByTestId('instructionsLoginItem1')).toBeVisible();
  await expect(page.getByTestId('instructionsLoginItem1')).toHaveText("When using a valid username and password, it should return");

  await expect(page.getByTestId('instructionsLoginItem2')).toBeVisible();
  await expect(page.getByTestId('instructionsLoginItem2')).toHaveText("Incorrect username or password should return an error message.");

  await expect(page.getByTestId('instructionsLoginItem3')).toBeVisible();
  await expect(page.getByTestId('instructionsLoginItem3')).toHaveText("Three incorrect passwords will temporarily lock the account.");


  await page.getByRole('link', { name: 'LOGIN' }).click();

  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveText(/Login/);

  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Username')).toHaveText("Username/");
} );
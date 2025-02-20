const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObject/login.po');
const testdata = require('../fixtures/loginFixtures.json');


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test.describe('Login Tests', () => {
    test('Valid Login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testdata.validUser.userName, testdata.validUser.password);

        // Verify login success
        await expect(page).toHaveURL(/inventory.html/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('Invalid Login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testdata.invalidUser.userName, testdata.invalidUser.password);

        // Verify error message
        const errorText = await login.getErrorMessage();
        expect(errorText).toContain('Epic sadface');
    });
});

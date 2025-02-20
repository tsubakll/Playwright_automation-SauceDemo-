class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = '[data-test="username"]';
        this.passwordField = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.page.locator(this.errorMessage).textContent();
    }
}

module.exports = { LoginPage };

# Playwright Login Testing for SauceDemo

## 📌 Overview
This project automates the **login functionality** of the [SauceDemo](https://www.saucedemo.com/) website using **Playwright (JavaScript)**. It covers **valid and invalid login scenarios**, verifying redirections and error messages.

## ⚡ Features
- ✅ **Automated login testing** with Playwright
- ✅ **Valid & invalid login scenario testing**
- ✅ **Uses Page Object Model (POM) for better maintainability**
- ✅ **Test data stored in JSON fixtures**
- ✅ **Assertions to verify login success & error messages**
- ✅ **Generates Playwright HTML test reports**

## 🛠️ Setup & Installation
### 1️⃣ Install Node.js (if not installed)
[Download & Install Node.js](https://nodejs.org/)
```sh
node -v  # Check Node.js version
npm -v   # Check npm version
```

### 2️⃣ Clone the Repository
```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

### 3️⃣ Install Dependencies
```sh
npm install @playwright/test
```

### 4️⃣ Install Browsers (if not already installed)
```sh
npx playwright install
```

## 🚀 Running the Tests
### Run all tests
```sh
npx playwright test
```

### Run a specific test
```sh
npx playwright test tests/login.spec.js
```

### Run tests in headed mode (to see the browser)
```sh
npx playwright test --headed
```

### Generate & View Test Report
```sh
npx playwright test --reporter=html
npx playwright show-report
```

## 📂 Project Structure
```
├── tests
│   ├── login.spec.js      # Login test cases
├── pageObject
│   ├── login.po.js        # Page Object Model for login page
├── fixtures
│   ├── loginFixtures.json # Test data for login credentials
├── playwright.config.js   # Playwright configuration file
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## 📝 Test Cases
### ✅ Valid Login Test
- Enter correct username & password
- Click login
- Verify successful redirection to inventory page

### ❌ Invalid Login Test
- Enter incorrect username/password
- Click login
- Verify error message: `Epic sadface: Username and password do not match`

## 📌 Technologies Used
- **Playwright (JavaScript)**
- **Node.js & npm**
- **Page Object Model (POM)**
- **JSON for test data storage**




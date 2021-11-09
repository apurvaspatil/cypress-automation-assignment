<h1 align="center">Cypress Automation Assignment</h1>

## ✨ Description

This is an UI automation framework which tests the E2E flow of http://automationpractice.com for purchasing multiple products using Cypress

## 🚀 Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since npm `5.2.0`)

1. To install all the dependencies:

```sh
npm i
```

2. To run all the tests inside cypress/integration folder:

```sh
npx cypress run --browser <browser_name> --headed
```
where <browser_name> = chrome or firefox
The reports will be generated inside the `cypress/reports/index.html` using the cypress-mochawesome-reporter npm package

3. Run individual tests by selecting it on a GUI:

```sh
npx cypress open
```

## 📚References:

1. Cypress: https://www.cypress.io/

2. NPM - cypress-mochawesome-reporter: https://www.npmjs.com/package/cypress-mochawesome-reporter

3. Guide for integrating cypress-mochawesome-reporter: https://dzone.com/articles/cypress-generate-html-results-with-screenshot
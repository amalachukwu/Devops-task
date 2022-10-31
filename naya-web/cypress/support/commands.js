// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
import { login } from "../support/selectors";

Cypress.Commands.add("Login", () => {
  cy.visit("http://localhost:3000/");
  cy.get(login.loginChecker).should("be.visible").contains("Login");
  cy.get(login.usernameText).should("be.visible").type(login.usernameInput);
  cy.get(login.PasswordText).should("be.visible").type(login.passwordInput);
  cy.get(login.favouriteColourButton).click();
  cy.wait(1000);
  cy.get(login.colour).click();
  cy.get(login.bodyClick).click();
  cy.get(login.loginButton).click();
  cy.get(login.newSketchecker)
    .should("be.visible")
    .contains("Create a New Sketch");
});


//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

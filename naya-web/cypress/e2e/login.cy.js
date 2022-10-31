import {login} from "../support/selectors";

describe("Authentication",function(){
    

    it("Login and landing page verifaction",()=>{
        cy.visit("http://localhost:3000/")
        cy.get(login.loginChecker).should('be.visible').contains('Login')
        cy.get(login.usernameText).should('be.visible').type(login.usernameInput)
        cy.get(login.PasswordText).should('be.visible').type(login.passwordInput)
        cy.get(login.favouriteColourButton).click()
        cy.wait(1000)
        cy.get(login.colour).click()
        cy.get(login.bodyClick).click()
        cy.get(login.loginButton).click()
        cy.get(login.newSketchecker).should('be.visible').contains('Create a New Sketch')
           
    })

})
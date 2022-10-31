import {login,logout } from "../support/selectors";

describe("New Sketch",function(){

    beforeEach(() => {

        cy.Login()

       
    });

    it("logout",()=>{

        cy.get(logout.logoutButton).click()
        cy.wait(2000)
        cy.get(login.loginChecker).should('be.visible').contains('Login')


    })
})
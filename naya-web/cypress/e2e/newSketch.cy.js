import {login, sketch, Sketch } from "../support/selectors";

describe("New Sketch",function(){

    beforeEach(() => {

        cy.Login()

       
    });

    it("creation and vaildation of a project",()=>{
        cy.get(sketch.newSketButton).click()
        cy.get(sketch.boardChecker).should('be.visible').contains('Collaboration Board')
        cy.get(sketch.sketchNameText).should('be.visible').type(sketch.sketchNameInput)
        cy.get(sketch.addText).should('be.visible').type(sketch.addInput)
        cy.get(sketch.addButton).click()
        cy.get(sketch.saveButton).should('be.visible').click()
        cy.get(login.newSketchecker).should('be.visible').contains('Create a New Sketch')
        //cy.get(sketch.sketchNameChecker).contains(sketch.sketchNameInput)

    })
})
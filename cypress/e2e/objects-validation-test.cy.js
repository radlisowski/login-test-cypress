/// <reference types="cypress" />
import ProjectsPage from '../support/pageObjects/projectPage';

// *** login page ***
describe(`The user is able to see the labels and controls including text-boxes, buttons and labels on the Login
Page and can interacted with.`, () => {

    beforeEach(() => {
        cy.visit('https://radlisowski.github.io/login.html')
    })

    //********tests-cases*********

    it(`LP01-Verifying visibility of the page objects`, () => {
        cy.get('#login-form').should('be.visible')
        cy.get('h5').should('have.text', 'Login')
        cy.get('#username-field').should('be.visible')
        cy.get('#password-field').should('be.visible')
        cy.get('#signin-button').should('be.visible')
    })

    it(`LP02-Verifying Username text-box can take text input`, () => {
        cy.get('#username-field')
            .type("test")
            .should('have.value', 'test')
    })

    it(`LP03-Verifying Password text-box can take text input`, () => {
        cy.get('#password-field')
            .type("test")
            .should('have.value', 'test')
    })

    it(`LP04-Verifying Login button can be pressed`, () => {
        cy.get('#signin-button').click()
        cy.get('#error-button').should('have.text', 'Wrong Username or Password')
    })
})

// *** projects page ***
describe('Projects Page Objects Validation Tests', () => {
    let projectsPage;

    beforeEach(() => {
        projectsPage = new ProjectsPage();
        projectsPage.navigate();
    });

    it('should have correct page title', () => {
        projectsPage.validatePageTitle();
    });

    it('should display all navigation buttons', () => {
        projectsPage.validateNavigationButtons();
    });

    it.only('should display correct number of project cards with proper titles', () => {
        projectsPage.validateProjectCardsNumbersAndTitles();
    });
});
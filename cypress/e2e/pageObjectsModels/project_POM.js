export class Projects_Page {

    constructor() {
        this.selector = {
            homeButton: () => cy.get('nav.navbar a').contains('home'),
            blogButton: () => cy.get('nav.navbar a').contains('blog'),
            projectsButton: () => cy.get('nav.navbar a').contains('projects'),
            aboutButton: () => cy.get('nav.navbar a').contains('about'),
            githubButton: () => cy.get('nav.footer a').contains('github'),
            linkedinButton: () => cy.get('nav.footer a').contains('linkedin'),
        };
        this.buttons = Object.values(this.selector); // Stores all button selectors in an array
    }

    //Navigates to the Projects page
    navigate() {
        cy.visit('/projects.html');
    }

    //Validates that the page title is correct
    validatePageTitle() {
        cy.title().should('eq', 'Rad Lisowski');
    }

    //Validates that all navigation buttons are visible on the page
    validateNavigationButtons() {
        this.buttons.forEach(button => {
            cy.get(button).should('be.visible');
        });
    }

    validateProjectCardsNumbersAndTitles() {
        const expectedTitles = [
            'Automation-PyCharm',
            'Automation-Playwright',
            'Automation-Cypress',
            'Automation-Selenium',
        ];
        //Validates the number of project cards and their titles
        cy.get('.card-title').should('have.length', expectedTitles.length);
        //Verifies that all expected project titles are present and in correct order
        cy.get('.card-title').each(($element, index) => {
            cy.wrap($element).should('contain.text', expectedTitles[index]);
        });
    }
}
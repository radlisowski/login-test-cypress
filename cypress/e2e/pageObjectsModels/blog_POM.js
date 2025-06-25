export class Blog_Page {

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
        cy.visit('/blog.html');
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

    validateBlogsCountAndTitles() {
        const expectedTitles = [
            ' Playwright Testing Framework',
            ' Python API Automation',
            ' CI/CD Pipeline Implementation',
            ' Cypress Testing Framework',
            ' Performance Testing with K6',
        ];
        //Validates the number of blogs and their titles
        cy.get('.project-list a').should('have.length', expectedTitles.length);
        cy.get('.project-list a').each(($element, index) => {
            cy.wrap($element).should('contain.text', expectedTitles[index]);
        });
    }
}
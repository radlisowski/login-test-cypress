export class About_Page {

    constructor() {
        this.selector = {
            homeButton: () => cy.get('nav.navbar a').contains('home'),
            blogButton: () => cy.get('nav.navbar a').contains('blog'),
            projectsButton: () => cy.get('nav.navbar a').contains('projects'),
            aboutButton: () => cy.get('nav.navbar a').contains('about'),
            githubButton: () => cy.get('nav.footer a').contains('github'),
            linkedinButton: () => cy.get('nav.footer a').contains('linkedin'),
            headingText: () => cy.get('.about h5'),
        };
        this.buttons = Object.values(this.selector); // Stores all button selectors in an array
    }

    //Navigates to the About page
    navigate() {
        cy.visit('/about.html');
    }

    //Validates that the page title is correct
    validatePageTitle() {
        cy.title().should('eq', 'Rad Lisowski');
    }

    //Validates that all buttons are visible on the page
    validateButtons() {
        this.buttons.forEach(button => {
            cy.get(button).should('be.visible');
            

        });
    }

    validateBlogLink() {
        cy.get('.about a[href="/blog.html"]').should('have.attr', 'href', '/blog.html');
    }
}
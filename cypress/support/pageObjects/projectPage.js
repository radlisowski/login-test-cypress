class ProjectsPage {

    constructor() {
        this.blogButton = 'nav.navbar a:contains("blog")';
        this.projectsButton = 'nav.navbar a:contains("projects")';
        this.aboutButton = 'nav.navbar a:contains("about")';
        this.homeButton = 'nav.navbar a:contains("home")';
        this.githubButton = 'nav.footer a:contains("github")';
        this.linkedinButton = 'nav.footer a:contains("linkedin")';
        this.buttons = [
            this.homeButton,
            this.blogButton,
            this.projectsButton,
            this.aboutButton,
            this.githubButton,
            this.linkedinButton
        ];
    }

    /**
     * Navigates to the Projects page
     */
    navigate() {
        cy.visit('https://radlisowski.github.io/projects.html');
    }

    /**
     * Validates that the page title is correct
     */
    validatePageTitle() {
        cy.title().should('eq', 'Rad Lisowski');
    }

    /**
     * Validates that all navigation buttons are visible on the page
     */
    validateNavigationButtons() {
        this.buttons.forEach(button => {
            cy.get(button).should('be.visible');
        });
    }

    /**
     * Validates the number of project cards and their titles
     * Verifies that all expected project titles are present and in correct order
     */
    
    validateProjectCardsNumbersAndTitles() {
        const expectedTitles = [
            'Automation-PyCharm',
            'Automation-Playwright',
            'Automation-Cypress',
            'Automation-Selenium',
        ];

        cy.get('.card-title').should('have.length', expectedTitles.length);

        // to do Verify card titles

    }
}

export default ProjectsPage;
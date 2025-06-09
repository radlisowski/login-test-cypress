export class Login_POM {
    constructor() {
        this.selector = {
            loginHeading: () => cy.get('h5').contains('Login'),
            username: () => cy.get('[id="username-field"]'),
            password: () => cy.get('[id="password-field"]'),
            loginBtn: () => cy.get('[id="signin-button"]'),
            errorMsg: () => cy.get('[id="error-message"]'),
            errorBtn: () => cy.get('[id="error-button"]'),
        };
        this.elements = Object.values(this.selector); // Stores all button selectors in an array
        this.errorMessage = 'Wrong Username or Password'
    }

    //Navigates to the login page
    navigate() {
        cy.visit('/login.html');
    }

    validateObjectsAreVisible() {
        this.elements.forEach(element => {
            if (element === this.selector.errorMsg || element === this.selector.errorBtn) {
                element().should('not.be.visible');
            } else {
                element().should('be.visible');
            }
        });

    }

    login(username, password, enter) {
        //have to use "if" check as .type does not take empty strings in cypress
        if (username) this.selector.username().type(username).should('have.value', username);
        if (password) this.selector.password().type(password).should('have.value', password);
        enter ? cy.focused().type('{enter}') : this.selector.loginBtn().click();
    }

    validateErrorMsg(msg) {
        this.selector.errorMsg().should('be.visible').and('contain.text', msg);
        this.selector.errorBtn().should('be.visible').click();
        this.selector.loginHeading().should('be.visible');
    }

    validateSuccess() {
        cy.url().should('include', '/index.html')
    }
}

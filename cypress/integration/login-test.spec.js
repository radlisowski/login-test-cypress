/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe(`Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with.`, () => {

    beforeEach(() => {
        cy.visit('https://radlisowski.github.io/login.html')

        cy.eyesOpen({
            appName: 'Login Page',
            testName: 'Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with',
        })
    })

    afterEach(() => {
        cy.eyesClose()
    });

    //********tests-cases*********

    it(`LP01-Verifying visibility of the page objects`, () => {
        
         //applitools eyes test
        cy.eyesCheckWindow({
            tag: "LP01-Verifying visibility of the elements on the page",
            target: 'window',
            fully: true
        });

        //or
        //cypres native tests
        cy.get('.login-form .h5').should('have.text', 'Login')
        
        cy.get('#username-field').invoke('attr', 'placeholder')
            .should('contain', 'username')
        
        cy.get('#password-field').invoke('attr', 'placeholder')
            .should('contain', 'password')

        cy.get('#signin-button').should('have.name', 'Sign in')
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

describe(`Verify various user interaction on the Login Page (positive/negative).`, () => {

    beforeEach(() => {
        cy.visit('https://radlisowski.github.io/login.html')

    })

    //********tests-cases*********

    it(`LP05-Verify that as soon as the login page opens, by default the cursor should remain on the username textbox.`, () => {
        cy.focused().should('have.id', 'username-field');
    })

    it(`LP06-Verify that the user is able to navigate to "Username" field by pressing "TAB" key on the keyboard.`, () => {
        cy.get('body')
            .tab()

        cy.focused().should('have.id', 'username-field')
    })

    it(`LP07-Verify that the user is able to navigate to "Password" field by pressing "TAB" key on the keyboard.`, () => {
        cy.get('body')
            .tab()
            .tab()

        cy.focused().should('have.id', 'password-field')
    })

    it(`LP08-Verify that the user is able to navigate to "Login" button by pressing "TAB" key on the keyboard.`, () => {
        cy.get('body')
            .tab()
            .tab()
            .tab()

        cy.focused().should('have.id', 'signin-button')
    })

    it(`LP09-Verifying that  the password as it is being typed in is being hashed and can't be copied`, () => {
        cy.get('#password-field').invoke('attr', 'type')
            .should('contain', 'password')
    })

    it(`LP10-Verify that the user is able to login by entering valid credentials and clicking on the ‘Login’ button.`, () => {

        enterLoginDetails("test", "test")

        cy.get('#signin-button').click()

        cy.get('#success-button').should('have.text', 'Cool Beans!')
    })

    it(`LP11-Verify that the user is able to login by entering valid credentials and pressing Enter key.`, () => {

        enterLoginDetails("test", "test")

        cy.focused().type('{enter}')

        cy.get('#success-button').should('have.text', 'Cool Beans!')
    })

    it(`LP12-Verify that the user is NOT able to login by entering INVALID credentials and clicking on the ‘Login’ button.`, () => {

        enterLoginDetails("bla", "blabla")

        cy.get('#signin-button').click()

        cy.get('#error-button').should('have.text', 'Wrong Username or Password')
    })

    it(`LP13-Verify that the validation message gets displayed in case the user leaves the username field as blank and that the message does not indicate which is wrong or empty.`, () => {

        enterLoginDetails("", "test")

        cy.get('#signin-button').click()

        cy.get('#error-button').should('have.text', 'Wrong Username or Password')
    })

    it(`LP15-Verify that the validation message gets displayed in case the user leaves the password field as blank and that the message does not indicate which is wrong or empty.`, () => {

        enterLoginDetails("", "password")
        cy.get('#signin-button').click()

        cy.get('#error-button').should('have.text', 'Wrong Username or Password')
    })
})

function enterLoginDetails(username, thePassword) {
    //have to do this check as .type does not take empty strings
    if (!username == '') {
        cy.get('#username-field')
            .type(username)
            .should('have.value', username)
    }

    if (!thePassword == '') {
        cy.get('#password-field')
            .type(thePassword)
            .should('have.value', thePassword)
    }
}
/// <reference types="cypress" />

describe(`Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with.`, () => {
    
    beforeEach(() => {
        cy.visit('https://radlisowski.github.io//login-test-page/index.html')
    })

    //this can be replaced with applitools eyes 1,2,3,4
    it(`LP01-Verifying visibility of the "Login" Label` , ()=> {
        cy.get('#login-header')
            .should('be.visible')
            .should('have.text', 'Login')
    })

    it(`LP02-Verifying contance of the Username Text-field"` , ()=> {
        cy.get('#username-field')
            .invoke('attr', 'placeholder')
            .should('contain', 'Username')
    })

    it(`LP03-Verifying contance of the Password Text-field` , ()=> {
        cy.get('#password-field')
            .invoke('attr', 'placeholder')
            .should('contain', 'Password')
    })

    it(`LP04-Verifying label inside the Login Button` , ()=> {
        cy.get('#login-form-submit').should('have.value', 'Login')
    })

    it(`LP05-Verifying Username text-box can take text input` , ()=> {
        cy.get('#username-field')
            .type("test")
            .should('have.value', 'test')    
    })

    it(`LP06-Verifying Password text-box can take text input` , ()=> {
        cy.get('#password-field')
            .type("test")
            .should('have.value', 'test')    
    })

    it(`LP07-Verifying Login button can be pressed` , ()=> {
        cy.get('#login-form-submit').click()

        cy.get('#login-error-msg').should('have.text', 'Invalid username and/or password')    
    })

})

describe(`Verify various user interaction on the Login Page (positive/negative).`, () => {
    
    beforeEach(() => {
        cy.visit('https://radlisowski.github.io//login-test-page/index.html')
    })

    it(`LP08-Verify that as soon as the login page opens, by default the cursor should remain on the username textbox.` , ()=> {
        cy.focused().should('have.id', 'username-field');
    })

    it (`LP09-Verify that the user is able to navigate to "Username" field by pressing "TAB" key on the keyboard.`, ()=> {
        cy.get('body')
            .tab()

        cy.focused().should('have.id','username-field')
    })

    it (`LP10-Verify that the user is able to navigate to "Password" field by pressing "TAB" key on the keyboard.`, ()=> {
        cy.get('body')
            .tab()
            .tab()

        cy.focused().should('have.id', 'password-field')
    })

    it (`LP11-Verify that the user is able to navigate to "Login" button by pressing "TAB" key on the keyboard.`, ()=> {
        cy.get('body')
            .tab()
            .tab()
            .tab()

        cy.focused().should('have.id', 'login-form-submit')
    })

    it (`LP12-Verifying that  the password as it is being typed in is being hashed and can't be copied`, ()=> {
        cy.get('#password-field')
            .invoke('attr', 'type')
            .should('contain', 'password') 
    })

    it (`LP13-Verify that the user is able to login by entering valid credentials and clicking on the ‘Login’ button.`, () => {

        enterLoginDetails("user", "password")

        cy.get('#login-form-submit').click()

        //this van be verified with applitools eyes
        cy.get('#login-error-msg').should('not.be.visible')
        
        cy.get('#username-field').should('have.value', '')

        cy.get('#password-field').should('have.value', '')
    })

    it (`LP14-Verify that the user is able to login by entering valid credentials and pressing Enter key.`, () => {

        enterLoginDetails("user", "password")

        cy.focused().type('{enter}')

        //this can be verified with applitools eyes
        cy.get('#login-error-msg').should('not.be.visible')
        
        cy.get('#username-field').should('have.value', '')

        cy.get('#password-field').should('have.value', '')
    })

    it (`LP15-Verify that the user is NOT able to login by entering INVALID credentials and clicking on the ‘Login’ button.`, () => {

        enterLoginDetails("bla", "blabla")

        cy.get('#login-form-submit').click()

        //this van be verified with applitools eyes
        cy.get('#login-error-msg').should('have.text', 'Invalid username and/or password')
    })

    it (`LP16-Verify that the validation message gets displayed in case the user leaves the username field as blank and that the message does not indicate which is wrong or empty.`, () => {

        enterLoginDetails("user", "")

        cy.get('#login-form-submit').click()

        //this van be verified with applitools eyes
        cy.get('#login-error-msg').should('have.text', 'Invalid username and/or password')
    })

    it (`LP17-Verify that the validation message gets displayed in case the user leaves the password field as blank and that the message does not indicate which is wrong or empty`, () => {

        enterLoginDetails("", "password")

        cy.get('#login-form-submit').click()

        //this van be verified with applitools eyes
        cy.get('#login-error-msg').should('have.text', 'Invalid username and/or password')
    })

    function enterLoginDetails(username, thePassword) {
        //have to do this check as .type does not take empty strings
        if (! username == '') {
            cy.get('#username-field')
            .type(username)
            .should('have.value', username)
        } 
        
        if (! thePassword == '') {
            cy.get('#password-field')
            .type(thePassword)
            .should('have.value', thePassword)
        } 
    }

})
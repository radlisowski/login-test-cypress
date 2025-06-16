/// <reference types="cypress" />
import {Login_POM} from "./pageObjectsModels/login_POM"

const loginPage = new Login_POM();

describe(`The user can interact with the UI via various actions (positive/negative)`, function () {

    beforeEach(function () {
        loginPage.navigate();
    })

    //********tests-cases*********
    it(`LP02-Verifying Username text-box can take text input`, function () {
        loginPage.selector.username()
            .type("test")
            .should('have.value', 'test')
    })

    it(`LP03-Verifying Password text-box can take text input`, function () {
        loginPage.selector.password()
            .type("test")
            .should('have.value', 'test')
    })

    it(`LP04-Verifying Login button can be pressed`, function () {
        loginPage.selector.loginBtn().click();
        loginPage.validateErrorMsg(loginPage.errorMessage);
    })

    it(`LP05-Verify that as soon as the login page opens, by default the cursor should remain 
    on the username textbox.`, function () {
        cy.focused().should('have.id', 'username-field');
    })

    it(`LP06-Verify that the user is able to navigate to "Password" field by pressing "TAB" key on 
            the keyboard.`, function () {

        cy.get('body').tab().tab()
        cy.focused().should('have.id', 'password-field')
    })

    it(`LP07-Verify that the user is able to navigate to "Login" button by pressing "TAB" key on 
            the keyboard.`, function () {

        cy.get('body').tab().tab().tab()
        cy.focused().should('have.id', 'signin-button')
    })

    it(`LP08-Verifying that  the password as it is being typed in is being hashed and can't 
            be copied`, function () {

        cy.get('#password-field').invoke('attr', 'type')
            .should('contain', 'password')
    })

    it(`LP09-Verify that the user is able to login by entering valid credentials and clicking on 
            the ‘Login’ button.`, function () {

        loginPage.login("test", "test")
        loginPage.validateSuccess();
    })

    it(`LP10-Verify that the user is able to login by entering valid credentials and 
            pressing Enter key.`, function () {

        loginPage.login("test", "test", "enter");
        loginPage.validateSuccess();
    })

    it(`LP11-Verify that the user is NOT able to login by entering INVALID credentials and clicking on the 
            ‘Login’ button.`, function () {

        loginPage.login("bla", "blabla")
        loginPage.validateErrorMsg(loginPage.errorMessage);
    })

    it(`LP12-Verify that the validation message gets displayed in case the user leaves the username field as blank 
            and that the message does not indicate which is wrong or empty.`, function () {

        loginPage.login("", "test")
        loginPage.validateErrorMsg(loginPage.errorMessage);
    })

    it(`LP13-Verify that the validation message gets displayed in case the user leaves the password field 
            as blank and that the message does not indicate which is wrong or empty.`, function () {

        loginPage.login('test', '');
        loginPage.validateErrorMsg(loginPage.errorMessage);
    })
})
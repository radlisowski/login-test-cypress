describe("AppTest", () => {

    it(`ultraFastTest`, function () {
        
        cy.visit('https://radlisowski.github.io/login.html');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Demo App',
            testName: 'Ultrafast grid demo',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });
        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
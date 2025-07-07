/// <reference types="cypress" />
import { Login_POM } from "./pageObjectsModels/login_POM";
import { Projects_Page } from './pageObjectsModels/project_POM';
import { Blog_Page } from './pageObjectsModels/blog_POM';
import { About_Page } from './pageObjectsModels/about_POM';

const loginPage = new Login_POM();
const projectsPage = new Projects_Page();
const blogPage = new Blog_Page();
const aboutPage = new About_Page();

// *** login page ***
describe.only(`The user is able to see the labels and controls including text-boxes, buttons and labels on the Login
Page.`, function () {

    beforeEach(function () {
        cy.visit('/login.html')
    })

    //********tests-cases*********
    it(`LP01-Verifying visibility of the page objects`, function () {
        loginPage.validateObjectsAreVisible();
    })

})

// *** projects page ***
describe.only('Projects Page Objects Validation Tests', function () {

    beforeEach(() => {
        projectsPage.navigate()
    });

    //********tests-cases*********
    it('Projects Page should have correct page title', function () {
        projectsPage.validatePageTitle();
    });

    it('Projects Page should display all navigation buttons', function () {
        projectsPage.validateNavigationButtons();
    });

    it('Projects Page should display correct number of project cards with proper titles', function () {
        projectsPage.validateProjectCardsNumbersAndTitles();
    });
});

// *** blog page ***
describe.only('Blog Page Objects Validation Tests', function () {

    beforeEach(() => {
        blogPage.navigate()
    });

    //********tests-cases*********
    it('Blog Page should have correct page title', function () {
        projectsPage.validatePageTitle();
    });

    it('Blog Page should display all navigation buttons', function () {
        projectsPage.validateNavigationButtons();
    });

    it('Blog Page should display correct number of blogs cards with proper titles', function () {
        blogPage.validateBlogsCountAndTitles();
    });

});

// *** about page ***
describe.only('About Page Objects Validation Tests', function () {

    beforeEach(() => {
        aboutPage.navigate()
    });

    //********tests-cases*********
    it.only('About Page should have correct page title', function () {
        aboutPage.validatePageTitle();
    });

    it('About Page should display all navigation buttons', function () {
        aboutPage.validateButtons();
    });

    it('Blog link should take user to blog page', function () {
        aboutPage.validateBlogLink();
    });

});
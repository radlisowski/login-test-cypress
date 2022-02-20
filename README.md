# login-test-cypress
Welcome!

This is a little exercise I did to start learning cypress instead of watching a bunch of tutorials.
I have created a small login page (can be found on my profile) and then proceeded to write test cases for it and then automated those using cypress.

Additionally, it took advantage of the applitools eyes visual cross-browser test plugin to replace cypress native assertions (visual ones).

Link to test cases:
https://docs.google.com/spreadsheets/d/1AoMbWCqXHu0Tp6hUYj_Ff3wvJDvaxpoyDl6toNEghJw/edit?usp=sharing

If you would like to run the tests you need to make sure you add an API key in the applitools.config.js that you can get for free from their website after creating a free account. Other than this you can comment out the test and any mentiones of the applitools eyes and still run the tests
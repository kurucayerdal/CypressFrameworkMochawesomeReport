const ReusableMethods = require("../utilities/ReusableMethods");

const testElements =
{
    url : "https://www.google.com",
    textOfTheElement : "J'accepte",
    inputSearch : '[name="q"]',
    searchValue : 'EVOLUCARE Technologies {enter}',
    titleText : 'My Awesome Application'
}

class Apage extends ReusableMethods {

    navigateToSite()
    {
        return cy.visit(testElements.url);
    }

    acceptCookies()
    {
        return cy.contains(testElements.textOfTheElement).click();
    }

    makeAsearch()
    {
        return this.typeFunction(testElements.inputSearch, testElements.searchValue);
    }

    verifyTheTitleOfThePage()
    {
        return this.verifyTitleOfThePage();
    }
}
module.exports = Apage;

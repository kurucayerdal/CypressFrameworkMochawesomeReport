const Apage = require("../../../support/pageObject/Apage");
const aPage = new Apage();

describe("Test Suite 1", () => {
  beforeEach("It runs before all test cases", () => {
    aPage.navigateToSite();
  });

  it("Test 1", () => {
    aPage.acceptCookies();
    aPage.makeAsearch();
  });

  it("Test 2", () => {
    cy.screenshot();
    aPage.acceptCookies();
    cy.screenshot();
    aPage.makeAsearch();
    cy.screenshot();
  });

  it("Test 3", () => {
    cy.visit("https://www.google.com");
    cy.contains("J'accepte").click();
    cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
  });
});

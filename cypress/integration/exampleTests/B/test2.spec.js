
describe("Test Suite 2",()=>{

it("Test A", ()=>{
cy.visit("/");
cy.contains("J'accepte").click();
cy.get('[name="q"]').type('EVOLUCARE Technologies {enter}');
});

it("Test B", ()=>{
    cy.visit("https://www.google.com");
    cy.contains("J'accepte").click();
    cy.get('[name="q"]').type('EVOLUCARE Technologies {enter}');
    cy.screenshot();
    });
})
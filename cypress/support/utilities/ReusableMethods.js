class ReusableMethods {
  constructor() {}

  // To get an element with xpath
  xpathFunction() 
  {
    cy.xpath(element);
  }

  // To get an element through its text. For example;
  // the element has a text 'Lucky'
  // We can get this element using this method in the following figure:
  // cy.getElementWithContains("Lucky")
  //matchCase option to ignore case sensitivity.
  getElementWithContains(text) 
  {
    cy.contains(text, { matchCase: false });
  }

  // To click an element
  clickFunction(element) 
  {
    try {
      cy.get(element).scrollIntoView().click();
    } catch (element) {
      cy.get(element).scrollIntoView().click({ force: true });
    }
  }

  // To force to click an element
  clickForce(element) 
  {
    cy.get(element).scrollIntoView().click({ force: true });
  }

  // To make a double click to an element
  doubleClickFunction(element) 
  {
    cy.get(element).scrollIntoView().dblclick();
  }

  // To make a right click to an element
  rightClickFunction(element) 
  {
    cy.get(element).scrollIntoView().rightclick();
  }

  // To write a text on an input. It needs 2 parameters: an 'element' and a 'value' to write.
  typeFunction(element, value) 
  {
    cy.get(element).scrollIntoView().clear().type(value);
  }

  // To do a select on a dropdown list. It needs 2 parameters:  an 'element' and a 'value' to select.
  // The value can be an index (ex. 1, 2, 3 etc.) or the value of the element which will be selected.
  selectFunction(element, value) 
  {
    cy.get(element).scrollIntoView().select(value);
  }

  //To check checkbox and radio button
  checkFunction(element) 
  {
    cy.get(element).scrollIntoView().check();
  }

  //To uncheck checkbox and radio button
  uncheckFunction(element) 
  {
    cy.get(element).scrollIntoView().uncheck();
  }

  // To get an element's text and to verify that is it  matches or not with our value.
  verifyElementsTextFunction(element, value) 
  {
    cy.get(element)
      .invoke("text")
      .then((text) => {
        assert(text, value);
      });
  }

  // To verify an element is not exist on the page.
  verifyElementIsNotExist(element) 
  {
    cy.get(element).should("not.exist");
  }

  // To get in an iframe on the page.
  getIframe(iframe) 
  {
    cy.get(iframe)
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
  }

  // To visit a website
  getUrl(url) 
  {
    cy.visit(url);
  }

  // To verify title of the page
  verifyTitleOfThePage(title) 
  {
    cy.title().should("eq", title);
  }
}
module.exports = ReusableMethods;

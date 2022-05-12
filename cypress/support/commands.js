
  // for mochawesome report
  import addContext from 'mochawesome/addContext';

  Cypress.on('test:after:run', (test, runnable) =>{
    if (test.state === "failed") {    
      const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;    
      addContext({ test }, screenshot);  
    }
  });


  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    cy.log(err.message);
    return false;
  });

  require('cypress-downloadfile/lib/downloadFileCommand');

  import 'cypress-file-upload';


// ça marche mais une exeption
// Cypress.Commands.add("addScreenshot", () =>
// {
//     const screenshotFile =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (screenshot)`; 
//     const screenshot = cy.screenshot(screenshotFile);
//     cy.once('test:after:run', (runnable, test)=>{
//         addContext( {test} , screenshot);
//     })
// });



// ça marche mais une exeption
// Cypress.Commands.add("addScreenshot", () =>
// {
//     const screenshot = cy.screenshot('screenshot');
//     addContext({test}, screenshot );
// });


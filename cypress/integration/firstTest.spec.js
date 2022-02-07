// describe('Mobile phone replenishment', () =>{

//    context ("replenishment less than the allowed amount", () =>{
//     it("Show erro: Minimum amount of the  1 UAH" , ()=> {});
//    });
// });
//it.only('Using Get with Find and Eq', ()=>{
//  cy.visit("https://next.privat24.ua")
//   cy.get('*[class^="card"]')
//});

/// <reference types="Cypress" />

it('SHOULD', ()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   cy.get('[data-qa-node="amount"]')
   .type(100)
   .should('have.value', 100)
   .and('be.visible')
})
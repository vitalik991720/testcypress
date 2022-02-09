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

it('EXPECT', ()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   cy.get('[data-qa-node="amount"]')
   .type(100).then( input=>{
      expect(input).to.have.value(100)
   })
})
it('сheck default value for Deposits', ()=>{
   cy.visit('https://next.privat24.ua/deposit?lang=en')
   cy.get('[data-qa-value="UAH"]')
   .should('be.checked')
})

it('сheck is visible Archive ', ()=>{
   cy.visit('https://next.privat24.ua/deposit?lang=en')
   cy.contains('Мої депозити')
   .trigger('mouseover')
   .get('#archiveDeposits')
   .should('be.visible') 
})

it('chech is correct attr in button', ()=>{
   cy.visit('https://next.privat24.ua?lang=en')
   cy.contains('Show cards')
   .should('have.attr', 'type') 
   .and('match', /button/)
})
it.only('сheck default value for Deposits', ()=>{
   cy.visit('https://next.privat24.ua?lang=en')
   cy.url()
   .should('eq', 'https://next.privat24.ua/?lang=en')
})
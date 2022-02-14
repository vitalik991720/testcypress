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

// it('SHOULD', ()=>{
//    cy.visit('https://next.privat24.ua/mobile?lang=en')
//    cy.get('[data-qa-node="amount"]')
//    .type(100)
//    .should('have.value', 100)
//    .and('be.visible')
// })

// it('EXPECT', ()=>{
//    cy.visit('https://next.privat24.ua/mobile?lang=en')
//    cy.get('[data-qa-node="amount"]')
//    .type(100).then( input=>{
//       expect(input).to.have.value(100)
//    })
// })
// it('сheck default value for Deposits', ()=>{
//    cy.visit('https://next.privat24.ua/deposit?lang=en')
//    cy.get('[data-qa-value="UAH"]')
//    .should('be.checked')
// })

// it('сheck is visible Archive ', ()=>{
//    cy.visit('https://next.privat24.ua/deposit?lang=en')
//    cy.contains('Мої депозити')
//    .trigger('mouseover')
//    .get('#archiveDeposits')
//    .should('be.visible') 
// })


// it('chech is correct attr in button', ()=>{
//    cy.visit('https://next.privat24.ua?lang=en')
//    cy.contains('Show cards')
//    .should('have.attr', 'type') 
//    .and('match', /button/)
// })
// it.only('сheck default value for Deposits', ()=>{
//    cy.visit('https://next.privat24.ua?lang=en')
//    cy.url()
//    .should('eq', 'https://next.privat24.ua/?lang=en')
// })


//type
it('type',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-node="phone-number"]')
   .type(123414 )
})
//focus
it('focus',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-node="amount"]')
   .focus()
})
//blur
it('blur',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
   .clear()
})

it('submit',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('form[method="post"]')
   .submit()
})

it('click',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-value="manual"]')
   .click()
})
it('rightclick',()=>{
   cy.visit('https://example.cypress.io/commands/actions')
   .contains('Right click to edit')
   .rightclick()
})
it('rightclick',()=>{
   cy.visit('https://www.mozilla.org/uk/firefox/developer/')
   .contains('Right click to edit')
   .dbclick()
})

it('check',()=>{
   cy.visit('https://www.facebook.com/reg/?')
   .get('input[value="2"]')
   .check()
})

it('uncheck',()=>{
   cy.visit('https://en.privatbank.ua/')
   .get('#switch-input')
   .check({force: true})
   .wait(2000)
   .uncheck({force: true})
})

it('uncheck',()=>{
   cy.visit('')
   .get('#month')
   .select('Feb')
   .get('#day')
   .select('12')
   .get('#year')
   .select('1991')
})

it('check',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-node="lang"]')
   .wait(2000)
   .scrollIntoView()
})

it('check',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-node="lang"]')
   cy.scrollTo(0, 500)
})

it.only('check',()=>{
   cy.visit('https://next.privat24.ua/mobile?lang=en')
   .contains('Services')
   .wait(2000)
   .trigger('mouseover')
})
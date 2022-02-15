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
it('Replenishment of Ukraine mobile phone number', ()=>{
cy.visit('https://next.privat24.ua/mobile?lang=en')
.get('[data-qa-node="phone-number"]')
.type('686979712')
.get('[data-qa-node="amount"]')
.type('1')
.get('[data-qa-node="numberdebitSource"]')
.type('4552331448138217')
.get('[data-qa-node="expiredebitSource"]')
.type('0524')
.get('[data-qa-node="cvvdebitSource"]')
.type('111')
.get('[data-qa-node="submit"]')
.click()
//next step check valid card and ect.
.get('[data-qa-node="card"]')
.should('have.text', '4552 **** **** 8217')
.get('[data-qa-node="amount"]')
.eq(1)
.should('contain.text', "1")
.get('[data-qa-node="currency"]')
.eq(0)
.should('contain.text','UAH')
.get('[data-qa-node="commission"]')
.eq(1)
.should('have.text','2')
.get('[data-qa-node="commission-currency"]')
.should('contain.text','UAH')


})
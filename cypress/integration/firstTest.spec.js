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


it.only('Money transfer between foreign card', ()=>{
   cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
   .get('[data-qa-node="numberdebitSource"]')
.type('4552331448138217')
.get('[data-qa-node="expiredebitSource"]')
.type('0524')
.get('[data-qa-node="cvvdebitSource"]')
.type('111')
.get('[data-qa-node="firstNamedebitSource"]')
.type('Shayne')
.get('[data-qa-node="lastNamedebitSource"]')
.type('McConnell')
.get('[data-qa-node="numberreceiver"]')
.type('5309233034765085')
.get('[data-qa-node="amount"]')
.type('300')
.get('[data-qa-node="toggle-comment"]')
.click()
.get('[data-qa-node="comment"]')
.type('Cypress test')
.get('[data-qa-node="firstNamereceiver"]')
.type('July')
.get('[data-qa-node="lastNamereceiver"]')
.type('Janssen')
.get('button[type=submit]')
.click()

//Check correct data send user transfer

.get('[data-qa-node="payer-card"]')
.should('have.text', '4552 3314 4813 8217')
.get('[data-qa-node="receiver-card"]')
.should('contain.text', '5309 2330 3476 5085')
.get('[data-qa-node="payer-amount"]')
.should('contain.text', '300 UAH')
.get('[data-qa-node="payer-currency"]')
.should('contain.text', '89.33 UAH')
.get('[data-qa-node="total"]')
.should('contain.text', '389.33')
.get('[data-qa-node="total"]')
.should('contain.text', 'UAH')
.get('[data-qa-node="comment"]')
.should('have.text', 'Cypress test')

})

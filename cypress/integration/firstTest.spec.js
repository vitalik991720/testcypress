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
import { mobileReplenishment } from "../support/pages/mobileReplenishment.js";

it.only('Replenishment of Ukraine mobile phone number', ()=>{
cy.visit('https://next.privat24.ua/mobile?lang=en')

mobileReplenishment.typePhoneNumber('686979712')
mobileReplenishment.typeAmount('1')
mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111')

mobileReplenishment.submitPayment()
cy.wait(3000)
//next step check valid card and ect.
mobileReplenishment.checkDebitCard('4552 **** **** 8217')
mobileReplenishment.checkDebitAmount('1')
mobileReplenishment.checkDebitAmountAndComission('2')
mobileReplenishment.checkReceiverAmount('1')
mobileReplenishment.checkPaymentCurrency('UAH')


})


it('Money transfer between foreign card', ()=>{
   cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

transfers.typeDebitCardData('4552331448138217', '0524', '111')
transfers.typeNameandSurname('Shayne', 'McConnell')


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

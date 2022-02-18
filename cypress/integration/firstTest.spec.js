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
import { transfers } from "../support/pages/transfers.js";

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
transfers.typeDebitNameandSurname('Shayne', 'McConnell')
transfers.typeReceiverCard('5309233034765085')
transfers.typeReceiverNameAndSurname('July', 'Janssen')
transfers.typeAmount('300')
transfers.typeComment('Cypress test')
cy.wait(2000)
transfers.submitPayment()

//Check correct data send user transfer
transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
transfers.checkDebitAmountAndTotalAmount('300 UAH', '389.33')
transfers.checkDebitComission('89.33 UAH')
transfers.checktotalCurrency('UAH')
transfers.checkComment('Cypress test')


})

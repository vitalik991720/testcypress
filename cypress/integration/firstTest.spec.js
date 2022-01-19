// describe('Mobile phone replenishment', () =>{

//    context ("replenishment less than the allowed amount", () =>{
//     it("Show erro: Minimum amount of the  1 UAH" , ()=> {});
//    });
// });
/// <reference types="Cypress" />

it.only('Using Get with Find and Eq', ()=>{
   cy.visit("https://next.privat24.ua")
   cy.get('*[class^="card"]')
});

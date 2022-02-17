export class Transfers{
    typeDebitCardData(cardNumber, expData, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expData)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
    }

typeNameandSurname(name, surname){
cy.get('[data-qa-node="firstNamedebitSource"]')
.type(name)
.get('[data-qa-node="lastNamedebitSource"]')
.type(surname)
}
}

export const transfers = new Transfers()
export class Transfers{

    typeDebitCardData(cardNumber, expData, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expData)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
    }

typeDebitNameandSurname(name, surname){
cy.get('[data-qa-node="firstNamedebitSource"]')
.type(name)
.get('[data-qa-node="lastNamedebitSource"]')
.type(surname)
}

typeReceiverCard(receiverCard){
    cy.get('[data-qa-node="numberreceiver"]')
.type(receiverCard)
}

typeReceiverNameAndSurname(name, surname){
    cy.get('[data-qa-node="firstNamereceiver"]')
    .type(name)
    
    .get('[data-qa-node="lastNamereceiver"]')
    .type(surname)
}

typeAmount(amount){
    cy.get('[data-qa-node="amount"]')
    .type(amount)
}

typeComment(comment){
    cy.get('[data-qa-node="toggle-comment"]')
    .click()
    .get('[data-qa-node="comment"]')
    .type(comment)

}
submitPayment(){
    cy.get('button[type=submit]')
    .click()

}

checkDebitAndReceiverCards(debitCard, receiveCard){
    cy.get('[data-qa-node="payer-card"]')
    .should('have.text', debitCard)
    .get('[data-qa-node="receiver-card"]')
    .should('contain.text', receiveCard)

}

checkDebitAmountAndTotalAmount(debitAmount, totalAmount){
    cy.get('[data-qa-node="payer-amount"]')
    .should('contain.text', debitAmount)

    .get('[data-qa-node="total"]')
    .should('contain.text', totalAmount)

}

checkDebitComission(comission){
    cy.get('[data-qa-node="payer-currency"]')
    .should('contain.text', comission)

}

checktotalCurrency(currency){
    cy.get('[data-qa-node="total"]')
    .should('contain.text', currency)
}

checkComment(comment){
    cy.get('[data-qa-node="comment"]')
    .should('have.text', comment)
}


}

export const transfers = new Transfers()
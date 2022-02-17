export class MobilePhoneReplenishment{
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }
    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .type(amount)
    }
    
    typeDebitCardData(cardNumber, expData, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expData)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
        .click()
    }
    
    checkDebitCard(debitCard){
    cy.get('[data-qa-node="card"]')
   .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
        .eq(1)
        .should('contain.text', debitAmount)
    }

    checkDebitAmountAndComission(debotComission){
        cy.get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', debotComission)
    }

     checkReceiverAmount(receiverAmount){
        cy.get('[data-qa-node="amount"]')
        .eq(1)
        .should('contain.text', receiverAmount)

     }

    checkPaymentCurrency(paymentCurrency){
        cy.get('[data-qa-node="commission-currency"]')
        .should('contain.text', paymentCurrency)
        
    }
}
export const mobileReplenishment = new MobilePhoneReplenishment()
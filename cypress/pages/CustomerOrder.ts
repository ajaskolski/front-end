export const CustomerOrder = {
    pageUrl: '/customer-order.html',
    waitForImgItem(): void {
        cy.get('[data-ats="img-item"]').should('be.visible');
    },
    verifySpecificItemInOrder(price: string, name: string): void {
        cy.get('#customer-order')
            .should('contain.text', price)
            .should('contain.text', name)
    },
    verifyTotalPrice(priceTotal: string): void {
        cy.get('#orderTotal').should('contain.text', priceTotal)
    },
    verifyShippingPrice(shippingPrice: string): void {
        cy.get('#orderShipping').should('contain.text', shippingPrice)
    },
    verifySubtotalPrice(subtotalPrice: string): void {
        cy.get('#orderSubtotal').should('contain.text', subtotalPrice)
    },
};

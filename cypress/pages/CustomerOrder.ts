export const CustomerOrder = {
    pageUrl: '/customer-order.html',
    waitForImgItem(): void {
        cy.get('img')
            .should('be.visible'); //data-ats="img-item"
    },
    verifySpecificItemInOrder(price:string, name: string): void {
        cy.get('#customer-order')
            .find('#tableOrder')
            .invoke("text")
            .then((text) => {
                expect(text).to.include(price);
                expect(text).to.include(name);
            });
    },
    verifyTotalPrice(priceTotal: string): void {
        cy.get('#orderTotal')
            .invoke("text")
            .then((text) => {
                expect(text).to.include(priceTotal);
            });
    },
    verifyShippingPrice(shippingPrice: string): void {
        cy.get('#orderShipping')
            .invoke("text")
            .then((text) => {
                expect(text).to.include(shippingPrice);
            });
    },
    verifySubtotalPrice(subtotalPrice: string): void {
        cy.get('#orderSubtotal')
            .invoke("text")
            .then((text) => {
                expect(text).to.include(subtotalPrice);
            });
    },
};

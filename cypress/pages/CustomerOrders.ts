export const CustomerOrders = {
    pageUrl: '/customer-orders.html',
    waitForSuccessLabel(): void {
        cy.get('[class="label label-success"]').should('be.visible');
    },
    verifyPriceOrderWithShipping(price: string): void {
        cy.get('#tableOrders tr').last().should('contain.text', price)
    },
    clickButtonViewNewestOrder(): void {
        cy.get('[data-ats="button-view-order"]').last().click();
    },
};

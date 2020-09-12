export const Catalogue = {
    addProductToCart(productName: string): void {
        cy.get(`[data-ats="button-add-to-cart-${productName}"]`)
            .click();
    },
    verifyNumberItemsInCartAndGoToIt(countItem: number): void {
        cy.get('#numItemsInCart')
            .contains('1')
            .click();
    }
};

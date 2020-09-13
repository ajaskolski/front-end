export const Catalogue = {
    pageUrl: '/category.html',

    addProductToCart(productName: string): void {
        cy.get(`[data-ats="button-add-to-cart-${productName}"]`).click();
    },
    verifyNumberItemsInCartAndGoToIt(countItem: number): void {
        cy.get('#numItemsInCart').contains(countItem, { timeout: 4000 }).click();
    },
};

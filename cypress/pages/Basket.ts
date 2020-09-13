export const Basket = {
    pageUrl: '/basket.html',

    verifyCartContainsItem(productName: string): void {
        cy.get('#cart-list').find('.item').contains('SuperSport XL');
    },

    verifyQuantity(numberItems: number): void {
        cy.get('[data-ats="input-quantity"]').should('have.value', 1);
    },

    clickOrderButton(): void {
        cy.get('#orderButton').click();
    },

    verifyOrderButtonIsDisabled(): void {
        cy.get('#orderButton').should('be.disabled');
    },

    verifyErrorMessageShowedUp(): void {
        cy.get('#user-message').should('be.visible').find('[class="alert alert-danger alert-dismissible"]');
    },
};


describe('Checkout flow', () => {
    context('logged in existing user', () => {
        it('should get to checkout through catalogue add to cart', () => {
            cy.visit('');
            cy.get('#login')
                .click();
            cy.get('#username-modal')
                .type('Eve_Berger');
            cy.get('#password-modal')
                .type('eve');
            cy.get('[data-ats="button-login"]')
                .click();
            cy.get('[class="alert alert-success"]')
                .should('be.visible');
            cy.get('#howdy')
                .should('have.text', 'Logged in as Eve Berger');
            cy.get('#tabCatalogue')
                .click();
            cy.contains('SuperSport XL').find('[class="fa fa-shopping-cart"]')
                .click();
            cy.get('#numItemsInCart')
                .contains('1')
                .click();
            cy.url().should('include', '/basket.html')
            cy.get('#cart-list')
                .find('.item')
                .contains('SuperSport XL')
                .find('input')                //[data-ats="input-quantity"]
                .should('have.value', 1);
            // cy.get('[data-ats="button-view-order"]')
            //     .click();
            // cy.get('#tableOrder')
        });
    });
});

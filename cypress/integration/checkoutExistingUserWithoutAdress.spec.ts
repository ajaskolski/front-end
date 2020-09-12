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
            cy.get('[data-ats="button-add-to-cart-SuperSport XL"]')
                .click();
            cy.get('#numItemsInCart')
                .contains('1')
                .click();
            cy.url().should('include', '/basket.html')
            cy.get('#cart-list')
                .find('.item')
                .contains('SuperSport XL');
            cy.get('[data-ats="input-quantity"]')
                .should('have.value', 1);
            cy.get('#orderButton')
                .click()
            cy.url().should('include', '/customer-orders.html')
            cy.get('[class="label label-success"]').should('be.visible');
            cy.get('#tableOrders tr')
                .last()
                .invoke("text")
                .then((text) => {
                    expect(text).to.include('$ 19.99');
                });
            cy.get('[data-ats="button-view-order"]')
                .last()
                .click();
            cy.get('img')
                .should('be.visible'); //data-ats="img-item"
            cy.get('#customer-order')
                .find('#tableOrder')
                .invoke("text")
                .then((text) => {
                    expect(text).to.include('$15.00');
                    expect(text).to.include('SuperSport XL');
                });
            cy.get('#orderTotal')
                .invoke("text")
                .then((text) => {
                    expect(text).to.include('$19.99');
                });
            cy.get('#orderShipping')
                .invoke("text")
                .then((text) => {
                    expect(text).to.include('$4.99');
                });
            cy.get('#orderSubtotal')
                .invoke("text")
                .then((text) => {
                    expect(text).to.include('$15.00');
                });
        });
    });
});

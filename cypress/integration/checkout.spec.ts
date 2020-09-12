describe('Checkout flow', () => {
    context('logged in user', () => {
        it('should get to checkout', () => {
            cy.visit('');
            cy.get('#login')
                .click();
            cy.get('#username-modal')
                .type('Eve_Berger');
            cy.get('#password-modal')
                .type('eve');
            cy.get('[data-ats="button-login"]')
                .click();
            cy.get('[class="alert alert-success"]').should('be', 'visible')
        });
    });
});

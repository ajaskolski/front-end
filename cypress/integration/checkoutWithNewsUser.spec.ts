import {deleteUser, createUser} from '../support/commands'
let user;

describe('Verify cant process checkout without adress information for new user', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
            user.id = createUser(user.name, user.password, user.email);
        })
    });

    after(function () {
        deleteUser(user.id)
    });
    context('new user without address', () => {
        it('error should show up during processing the checkout', () => {
            cy.visit('');
            cy.get('#tabCatalogue')
                .click();
            cy.get('[data-ats="button-add-to-cart-SuperSport XL"]')
                .click();
            cy.get('#numItemsInCart')
                .contains('1')
                .click();
            cy.url().should('include', '/basket.html');
            cy.get('#cart-list')
                .find('.item')
                .contains('SuperSport XL');
            cy.get('[data-ats="input-quantity"]')
                .should('have.value', 1);
            cy.get('#orderButton')
                .click();
            cy.get('#user-message').should('be.visible')
                .find('[class="alert alert-danger alert-dismissible"]');
        });
    });
});

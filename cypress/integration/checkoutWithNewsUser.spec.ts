import {deleteUser, createUser} from '../support/commands'
let user;

describe('Checkout flow', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
            cy.log(user.name);
            user.id = createUser(user.name, user.password, user.email);
        })
    });

    after(function () {
        deleteUser(user.id)
    });
    context('logged in user', () => {
        it('should get to checkout through catalogue add to cart', () => {
            cy.visit('');
            cy.get('#tabCatalogue')
                .click();
            cy.contains('SuperSport XL').find('[class="fa fa-shopping-cart"]')
                .click();
            cy.get('#numItemsInCart')
                .contains('1')
                .click();
            cy.url().should('include', '/basket.html');
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

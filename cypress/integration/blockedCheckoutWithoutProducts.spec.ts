import {deleteUser, createUser} from '../support/commands'
import {Basket, Catalogue, Home} from "../pages";

let user;
let id;

describe('user without product shouldnt be able to checkout', () => {
        it('checkout button should be disabled', () => {
            const numberItems = 0;
            cy.visit('');
            Home.clickTabCatalogue();

            cy.verifyUrl(Catalogue.pageUrl);
            Catalogue.verifyNumberItemsInCartAndGoToIt(numberItems);

            cy.verifyUrl(Basket.pageUrl);
            Basket.verifyOrderButtonIsDisabled()
        });
    });

    before(function () {
        return cy.task("freshUser").then((object) => {
            user = object;
            return createUser(user.name, user.password, user.email)
        }).then((r) => {id = r})
    });

    after(function () {
        cy.get('#logout')
            .click();
        deleteUser(id)
});

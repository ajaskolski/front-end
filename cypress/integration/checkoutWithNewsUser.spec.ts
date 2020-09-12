import {deleteUser, createUser} from '../support/commands'
import {Basket, Catalogue, Home} from "../pages";

let user;
let id;

describe('Verify cant process checkout without adress information for new user', () => {
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
    context('new user without address', () => {
        const productName = 'SuperSport XL';
        const numberItems = 1;

        it('error should show up during processing the checkout', () => {
            cy.visit('');
            Home
                .clickTabCatalogue();
            Catalogue
                .addProductToCart(productName);
            Catalogue
                .verifyNumberItemsInCartAndGoToIt(numberItems);
            cy.verifyUrl(Basket.pageUrl);
            Basket
                .verifyCartContainsItem(productName);
            Basket
                .verifyQuantity(numberItems);
            Basket
                .clickOrderButton();
            Basket
                .verifyErrorMessageShowedUp();
        });
    });
});

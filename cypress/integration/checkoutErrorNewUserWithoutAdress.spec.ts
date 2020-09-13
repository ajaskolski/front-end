import {deleteUser, createUser} from '../support/commands'
import {Basket, Catalogue, Home} from "../pages";

let user;
let id;

describe('checkout flow for user without adress', () => {
        it('error should show up during processing the checkout', () => {
            const productName = 'SuperSport XL';
            const numberItems = 1;
            cy.visit('');
            Home.clickTabCatalogue();

            cy.verifyUrl(Catalogue.pageUrl);
            Catalogue.addProductToCart(productName);
            Catalogue.verifyNumberItemsInCartAndGoToIt(numberItems);

            cy.verifyUrl(Basket.pageUrl);
            Basket.verifyCartContainsItem(productName);
            Basket.verifyQuantity(numberItems);
            Basket.clickOrderButton();
            Basket.verifyErrorMessageShowedUp();
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

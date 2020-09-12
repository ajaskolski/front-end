import {Home, Catalogue, Basket, CustomerOrders, CustomerOrder} from '../pages'

describe('Checkout flow', () => {
    it('should get to checkout through catalogue add to cart', () => {
        const username = 'Eve_Berger'; //todo those data should be put in database
        const password = 'eve';
        const productName = 'SuperSport XL';
        const numberItems = 1;
        const priceWithShipping = '$ 19.99';
        const price = '$15.00';

        const priceTotal = '$19.99';
        const priceShipping = '$4.99';
        const priceSubTotal = '$15.00';

        cy.visit('');
        Home
            .login(username, password);
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
        cy.verifyUrl(CustomerOrders.pageUrl);
        CustomerOrders
            .waitForSuccessLabel();
        CustomerOrders
            .verifyPriceOrderWithShipping(priceWithShipping);
        CustomerOrders
            .clickButtonViewNewestOrder();
        CustomerOrder
            .waitForImgItem();
        CustomerOrder
            .verifySpecificItemInOrder(price, productName);
        CustomerOrder
            .verifyTotalPrice(priceTotal);
        CustomerOrder
            .verifyShippingPrice(priceShipping);
        CustomerOrder
            .verifySubtotalPrice(priceSubTotal);
    })
});

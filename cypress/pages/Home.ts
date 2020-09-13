export const Home = {
    login(username: string, password: string): void {
        cy.get('#login').click();
        cy.get('#username-modal').type(username);
        cy.get('#password-modal').type(password);
        cy.get('[data-ats="button-login"]').click();
        cy.get('[class="alert alert-success"]').should('be.visible');
        cy.get('#howdy').should('have.text', 'Logged in as ' + username.replace('_', ' '));
    },
    clickTabCatalogue(): void {
        cy.get('#tabCatalogue').click();
    },
};

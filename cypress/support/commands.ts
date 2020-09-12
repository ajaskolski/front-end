import Chainable = Cypress.Chainable;

export const createUser = (username: string, password: string, email: string): Chainable => {
    return cy.request({
        method: 'POST',
        url: '/register',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {username, password, email}
    }).then((response) => {
        expect(response.isOkStatusCode);
        expect(response.body).to.have.property('id');
        return response.body.id
    })
};

export const deleteUser = (id: string): void => {
    cy.request('DELETE', `/customers/${id}`)
        .then((response)=> {
            expect(response.body.status === 'true')
        })
};

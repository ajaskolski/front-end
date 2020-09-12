export const createUser = (username: string, password: string, email: string): string|void => {
    cy.request({
        method: 'POST',
        url: '/register',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {username, password, email}
    }).then((response) => {
        expect(response.isOkStatusCode);
        return response.body.id
    })

};

export const deleteUser = (id: string): void => {
    cy.log(id);
    cy.request('DELETE', `/customers/${id}`)
        .then((response)=>{
            expect(response.body.status === 'true')
        })
};

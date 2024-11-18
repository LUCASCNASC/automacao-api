describe('Diversos - GET - observação', () => {

    it('', () => {

        cy.request({
            method: 'GET',
            url: 'http://localhost:8091/sabium#/Diversos/v3_diversos_observacao',
            failOnStatusCode: false
        }).as('getObservacao')

        //validações
        cy.get('@getObservacao')
        .then((response) => {
                console.log(response)
            })

    })
})
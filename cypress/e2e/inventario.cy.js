//<reference types="cypress"/>

describe('api estoque', () => {

    it.only('primeiro cenário - api estoque', () => {
        cy.request({
            method: 'POST',
            url:'http://localhost:8091/sabium#/Projeto%20Real%20Time/v3_post_estoque'
        })
            .then((response) => {
              expect(response.status).to.equal(200)
            })
    })

    it('segundo cenário - api inventario', () => {
  
    })

})
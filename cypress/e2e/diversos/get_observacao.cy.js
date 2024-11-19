/// <reference types="cypress"/>

//const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

describe('',  () => {

    it('', () => {

        cy.request({
            method: 'GET',
            url: 'http://localhost:8091/sabium#/Diversos/v3_diversos_observacao', 
            headers: { authorization },
            failOnStatusCode: false
        }).should(({ status, body }) => {
            const { idobservacao, observacao } = body

            expect(status).to.eq(200)
            expect(idobservacao).to.eq('1001')
            expect(observacao).to.eq('teste observacao')
        })
        
    })
})
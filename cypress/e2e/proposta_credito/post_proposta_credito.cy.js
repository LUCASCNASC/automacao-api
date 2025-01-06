// /v3/proposta_credito - Proposta crédito
// Enviar proposta crédito

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Proposta crédito - POST - /v3/proposta_credito', () => {
  const url = '/Proposta%20cr%C3%A9dito/v2_proposta_credito_post';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_proposta_credito,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
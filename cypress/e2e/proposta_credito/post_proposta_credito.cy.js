// /v3/proposta_credito - Proposta crédito
// Enviar proposta crédito

import reqBody_post_proposta_credito from '../../fixtures/proposta_credito/post_proposta_credito_agrupar.json'

describe('Proposta crédito - POST - /v3/proposta_credito', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Proposta%20cr%C3%A9dito/v2_proposta_credito_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_proposta_credito
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
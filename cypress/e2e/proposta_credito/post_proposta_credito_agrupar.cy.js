// /v3/proposta_credito_agrupar - Proposta crédito
// Agrupar proposta crédito

import reqBody_post_proposta_credito_agrupar from '../../fixtures/proposta_credito/post_proposta_credito_agrupar.json'

describe('Proposta crédito - POST - /v3/proposta_credito_agrupar', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Proposta%20cr%C3%A9dito/v2_proposta_credito_agrupar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_proposta_credito_agrupar
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
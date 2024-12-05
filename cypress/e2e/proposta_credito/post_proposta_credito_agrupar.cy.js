// /v3/proposta_credito_agrupar - Proposta crédito
// Agrupar proposta crédito

import reqBody_post_proposta_credito_agrupar from '../../fixtures/proposta_credito/post_proposta_credito_agrupar.json'
import acess_token from '../../fixtures/token.json'

describe('Proposta crédito - POST - /v3/proposta_credito_agrupar', () => {
    const url = '/Proposta%20cr%C3%A9dito/v2_proposta_credito_agrupar';
    const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_proposta_credito_agrupar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/proposta_credito - Proposta crédito
// Enviar proposta crédito

import reqBody_post_proposta_credito from '../../fixtures/proposta_credito/post_proposta_credito_agrupar.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

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
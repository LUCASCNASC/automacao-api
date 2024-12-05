// /v3/intencao_compra - Intenções de compras
// Lista intenções de compras

import reqBody_get_intencao_compra from '../../fixtures/intencao_compra/get_intencao_compra.json'
import acess_token from '../../fixtures/token.json'

describe('Intenção compra - GET - /v3/intencao_compra', () => {
  const url = '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post1';
  const token = acess_token
  
    it('GET - /v3/intencao_compra - Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_get_intencao_compra,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
// /v3/intencao_compra - Intenções de compras
// Lista intenções de compras

import reqBody_get_intencao_compra from '../../fixtures/intencao_compra/get_intencao_compra.json'

describe('Intenção compra - GET - /v3/intencao_compra', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('GET - /v3/intencao_compra - Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post1', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_get_intencao_compra
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
// /v3/intencao_compra - Intenção compra
// Incluir intenção de compra

import reqBody_post_intencao_compra from '../../fixtures/intencao_compra/post_intencao_compra.json'

describe('Intenção compra - POST - /v3/intencao_compra', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_intencao_compra
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
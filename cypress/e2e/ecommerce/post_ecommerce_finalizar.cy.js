// /v3/ecommerce_finalizar - Gerar pedido e-commerce
// Incluir/alterar pedido de venda e-commerce

import reqBody_post_ecommerce_finalizar from '../../fixtures/ecommerce/post_ecommerce_finalizar.json'

describe('E-commerce - POST - /v3/ecommerce_finalizar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/E-commerce/v3_ecommerce_finalizar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_ecommerce_finalizar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
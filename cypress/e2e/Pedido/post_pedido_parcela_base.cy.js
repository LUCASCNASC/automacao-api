// /v3/pedido_parcela_base - Parcela base
// Parcela base

import reqBody_post_pedido_parcela_base from '../../fixtures/pedido/post_pedido_parcela_base.json'

describe('Pedido - POST - /v3/pedido_parcela_base', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v2_pedido_parcela_base', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_parcela_base
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
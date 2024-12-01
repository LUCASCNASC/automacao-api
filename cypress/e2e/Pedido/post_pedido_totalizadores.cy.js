// /v3/pedido_totalizadores - Totalizadores
// Totalizadores do pedido mobile

import reqBody_post_pedido_totalizadores from '../../fixtures/pedido/post_pedido_totalizadores.json'

describe('Pedido - POST - /v3/pedido_totalizadores', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_totalizadores', 
        headers: { Authorization: `Bearer ${token}` },
        bod: reqBody_post_pedido_totalizadores
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
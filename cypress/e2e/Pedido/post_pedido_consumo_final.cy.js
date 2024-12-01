// /v3/pedido_consumo_final - Consumo Final
// Retorna se o pedido foi feito para um Consumidor Final

import reqBody_post_pedido_consumo_final from '../../fixtures/pedido/post_pedido_consumo_final.json'

describe('Pedido - POST - /v3/pedido_consumo_final', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_consumo_final', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_consumo_final
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
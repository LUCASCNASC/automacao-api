// /v3/pedido_baixar - Baixar pedido
// Baixar pedido de venda. Antes de baixar o pedido, deve fechar o mesmo.

import reqBody_post_pedido_baixar from '../../fixtures/pedido/post_pedido_baixar.json'

describe('Pedido - POST - /v3/pedido_baixar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Pedido/v2_pedido_baixar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_baixar
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
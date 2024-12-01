// /v3/pedido_fechar - Fechar pedido
// Fechar pedido de venda

import reqBody_post_pedido_fechar from '../../fixtures/pedido/post_pedido_fechar.json'

describe('Pedido - POST - /v3/pedido_fechar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v2_pedido_fechar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_fechar
      }).then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });
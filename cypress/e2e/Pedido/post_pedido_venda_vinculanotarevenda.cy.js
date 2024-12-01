// /v3/pedido_venda_vinculanotarevenda/ - Dados da nota de revenda
// Serviço utilizado para relacionar nota de revenda com pedido de venda atacado que utiliza triangulação.

import reqBody_post_pedido_venda_vinculanotarevenda from '../../fixtures/pedido/post_pedido_venda_vinculanotarevenda.json'

describe('Pedido - POST - /v3/pedido_venda_vinculanotarevenda/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_post_pedido_venda_vinculanotarevenda', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_venda_vinculanotarevenda
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
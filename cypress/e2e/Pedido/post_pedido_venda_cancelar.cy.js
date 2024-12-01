// /v3/pedido_venda_cancelar/ - Efetua cancelamento pedido venda
// Efetua cancelamento pedido venda total ou parcial

import reqBody_post_pedido_venda_cancelar from '../../fixtures/pedido/post_pedido_venda_cancelar.json'

describe('Pedido - POST - /v3/pedido_venda_cancelar/', () => {
  const token = Cypress.env('AUTH_TOKEN');

  it('Resposta 200', () => {

    cy.request({
      method: 'POST', 
      url: '/Pedido/v3_post_pedido_venda_cancelar', 
      headers: { Authorization: `Bearer ${token}` },
      body: reqBody_post_pedido_venda_cancelar
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
      });
  });
});
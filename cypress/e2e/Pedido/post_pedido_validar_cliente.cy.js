// /v3/pedido_validar_cliente - Validar cliente
// Validação do cliente no pedido de venda mobile

import reqBody_post_pedido_validar_cliente from '../../fixtures/pedido/post_pedido_validar_cliente.json'

describe('Pedido - POST - /v3/pedido_validar_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_validar_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_validar_cliente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
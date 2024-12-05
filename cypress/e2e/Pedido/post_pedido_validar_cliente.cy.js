// /v3/pedido_validar_cliente - Validar cliente
// Validação do cliente no pedido de venda mobile

import reqBody_post_pedido_validar_cliente from '../../fixtures/pedido/post_pedido_validar_cliente.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_validar_cliente', () => {
  const url = '/Pedido/v3_pedido_validar_cliente';
  const token = acess_token
  
    it('Resposta 200', () => {
      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_validar_cliente,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
// /v3/pedido_venda_cancelar/ - Efetua cancelamento pedido venda
// Efetua cancelamento pedido venda total ou parcial

import reqBody_post_pedido_venda_cancelar from '../../fixtures/pedido/post_pedido_venda_cancelar.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - POST - /v3/pedido_venda_cancelar/', () => {
  const url = '/Pedido/v3_post_pedido_venda_cancelar'
  const token = acess_token

  it('Resposta 200', () => {

    cy.request({
      method: 'POST', 
      url: url, 
      headers: { 
        Pragma: pragma_token,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: reqBody_post_pedido_venda_cancelar,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
      });
  });
});
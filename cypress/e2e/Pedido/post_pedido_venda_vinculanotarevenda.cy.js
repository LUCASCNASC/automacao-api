// /v3/pedido_venda_vinculanotarevenda/ - Dados da nota de revenda
// Serviço utilizado para relacionar nota de revenda com pedido de venda atacado que utiliza triangulação.

import reqBody_post_pedido_venda_vinculanotarevenda from '../../fixtures/pedido/post_pedido_venda_vinculanotarevenda.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - POST - /v3/pedido_venda_vinculanotarevenda/', () => {
  const url = '/Pedido/v3_post_pedido_venda_vinculanotarevenda';
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
        body: reqBody_post_pedido_venda_vinculanotarevenda,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/pedido_venda_alterar_previsao_entrega/ - Alterar a previsão de entrega do pedido de venda
// Alteração da previsão de entrega do pedido de venda.

import reqBody_post_pedido_venda_alterar_previsao_entrega from '../../fixtures/pedido/post_pedido_venda_alterar_previsao_entrega.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_venda_alterar_previsao_entrega/', () => {
  const url = '/Pedido/v3_post_pedido_venda_previsao_entrega';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_venda_alterar_previsao_entrega,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
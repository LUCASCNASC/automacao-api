// /v3/pedido_venda_alterar_previsao_entrega/ - Alterar a previsão de entrega do pedido de venda
// Alteração da previsão de entrega do pedido de venda.

import reqBody_post_pedido_venda_alterar_previsao_entrega from '../../fixtures/pedido/post_pedido_venda_alterar_previsao_entrega.json'

describe('Pedido - POST - /v3/pedido_venda_alterar_previsao_entrega/', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_post_pedido_venda_previsao_entrega', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_venda_alterar_previsao_entrega
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
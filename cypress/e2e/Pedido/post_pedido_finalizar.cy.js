// /v3/pedido_finalizar - Gerar pedido
// Incluir/alterar pedido de venda mobile

import reqBody_post_pedido_finalizar from '../../fixtures/pedido/post_pedido_finalizar.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_finalizar', () => {
  const url = '/Pedido/v3_pedido_finalizar'
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },

        body: reqBody_post_pedido_finalizar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
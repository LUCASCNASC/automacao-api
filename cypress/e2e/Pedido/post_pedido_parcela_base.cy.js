// /v3/pedido_parcela_base - Parcela base
// Parcela base

import reqBody_post_pedido_parcela_base from '../../fixtures/pedido/post_pedido_parcela_base.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - POST - /v3/pedido_parcela_base', () => {
  const url = '/Pedido/v2_pedido_parcela_base';
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

        body: reqBody_post_pedido_parcela_base,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
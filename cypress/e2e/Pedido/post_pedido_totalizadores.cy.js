// /v3/pedido_totalizadores - Totalizadores
// Totalizadores do pedido mobile

import reqBody_post_pedido_totalizadores from '../../fixtures/pedido/post_pedido_totalizadores.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_totalizadores', () => {
  const url = '/Pedido/v3_pedido_totalizadores';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        bod: reqBody_post_pedido_totalizadores,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
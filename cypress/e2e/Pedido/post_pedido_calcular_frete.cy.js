// /v3/pedido_calcular_frete - Calcular frete
// Calcular valor do frete para pedido mobile

import reqBody_post_pedido_calcular_frete from '../../fixtures/pedido/post_pedido_calcular_frete.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_calcular_frete', () => {
  const url = '/Pedido/v3_pedido_calcular_frete';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_calcular_frete,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
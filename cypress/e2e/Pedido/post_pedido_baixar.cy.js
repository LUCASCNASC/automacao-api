// /v3/pedido_baixar - Baixar pedido
// Baixar pedido de venda. Antes de baixar o pedido, deve fechar o mesmo.

import reqBody_post_pedido_baixar from '../../fixtures/pedido/post_pedido_baixar.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_baixar', () => {
  const url = '/Pedido/v2_pedido_baixar';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_baixar,
        failOnStatusCode: false
      })  
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
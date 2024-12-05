// /v3/pedido_compra_incluir - Incluir Pedido Compra
// Inclui pedido de compra simplificado, somente frete CIF

import reqBody_post_pedido_compra_incluir from '../../fixtures/compras/post_pedido_compra_incluir.json'
import acess_token from '../../fixtures/token.json'

describe('Compras - POST - /v3/pedido_compra_incluir', () => {
  const url = '/Compras/v3_post_pedido_compra_incluir';
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
        body: reqBody_post_pedido_compra_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
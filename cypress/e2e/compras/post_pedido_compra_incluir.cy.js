// /v3/pedido_compra_incluir - Incluir Pedido Compra
// Inclui pedido de compra simplificado, somente frete CIF

import reqBody_post_pedido_compra_incluir from '../../fixtures/compras/post_pedido_compra_incluir.json'

describe('Compras - POST - /v3/pedido_compra_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Compras/v3_post_pedido_compra_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_compra_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
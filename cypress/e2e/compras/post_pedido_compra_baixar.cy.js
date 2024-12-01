// /v3/pedido_compra_baixar - Baixar Pedido Compra
// Baixa pedido de compra simplificado, somente frete CIF

import reqBody_post_pedido_compra_baixar from '../../fixtures/compras/post_pedido_compra_baixar.json'

describe('Compras - POST - /v3/pedido_compra_baixar', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Compras/v3_post_pedido_compra_baixar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_compra_baixar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
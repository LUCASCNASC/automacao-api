// /v3/pedido_calcular_frete - Calcular frete
// Calcular valor do frete para pedido mobile

import reqBody_post_pedido_calcular_frete from '../../fixtures/pedido/post_pedido_calcular_frete.json'

describe('Pedido - POST - /v3/pedido_calcular_frete', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_calcular_frete', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_calcular_frete
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
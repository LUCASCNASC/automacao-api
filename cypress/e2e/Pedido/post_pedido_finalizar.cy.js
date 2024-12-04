// /v3/pedido_finalizar - Gerar pedido
// Incluir/alterar pedido de venda mobile

import reqBody_post_pedido_finalizar from '../../fixtures/pedido/post_pedido_finalizar.json'

describe('Pedido - POST - /v3/pedido_finalizar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_finalizar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_finalizar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
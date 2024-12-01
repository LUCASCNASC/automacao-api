// /v3/pedido_validar - Validar
// Validação do pedido de venda mobile
3
import reqBody_post_pedido_validar from '../../fixtures/pedido/post_pedido_validar.json'

describe('Pedido - POST - /v3/pedido_validar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_validar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_validar
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
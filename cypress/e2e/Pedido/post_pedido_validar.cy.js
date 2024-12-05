// /v3/pedido_validar - Validar
// Validação do pedido de venda mobile
3
import reqBody_post_pedido_validar from '../../fixtures/pedido/post_pedido_validar.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - POST - /v3/pedido_validar', () => {
  const url = '/Pedido/v3_pedido_validar';
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
        body: reqBody_post_pedido_validar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
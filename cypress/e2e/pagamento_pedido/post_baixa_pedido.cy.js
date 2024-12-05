// /v3/baixa_pedido - Fechar e Baixar pedido
// Fechar e Baixar pedido de venda pelo TOTEM

import reqBody_post_baixa_pedido from '../../fixtures/pagamento_pedido/post_baixa_pedido.json'
import acess_token from '../../fixtures/token.json'

describe('Pagamento pedido - POST - /v3/baixa_pedido', () => {
  const url = '/Pagamento%20pedido/v2_pag_pedido_baixa_pedido';
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
        body: reqBody_post_baixa_pedido,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
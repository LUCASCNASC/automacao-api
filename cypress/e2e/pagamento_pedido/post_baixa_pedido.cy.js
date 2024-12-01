// /v3/baixa_pedido - Fechar e Baixar pedido
// Fechar e Baixar pedido de venda pelo TOTEM

import reqBody_post_baixa_pedido from '../../fixtures/pagamento_pedido/post_baixa_pedido.json'

describe('Pagamento pedido - POST - /v3/baixa_pedido', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20pedido/v2_pag_pedido_baixa_pedido', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_baixa_pedido
      })
      .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });
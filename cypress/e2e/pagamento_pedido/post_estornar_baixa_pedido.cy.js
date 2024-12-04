// /v3/estornar_baixa_pedido - Estorno da baixar pedido
// Estornar baixa do pedido de venda pelo TOTEM

import reqBody_post_estornar_baixa_pedido from '../../fixtures/pagamento_pedido/post_estornar_baixa_pedido.json'

describe('Financeiro - POST - /v3/estornar_baixa_pedido', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20pedido/v2_pag_pedido_estornar_baixa_pedido', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_estornar_baixa_pedido
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
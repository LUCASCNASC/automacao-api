// /v3/pedido_parcela_base_divisao - Parcela base
// Divide o(s) abatimento(s) em valor(es) mantendo a quantidade de parcela e processo iguais.

import reqBody_post_pedido_parcela_base_divisao from '../../fixtures/pedido/post_pedido_parcela_base_divisao.json'

describe('Pedido - POST - /v3/pedido_parcela_base_divisao', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_parcela_base_divisao', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_parcela_base_divisao
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
// /v3/movimento_compra_venda/ - Dados Movimento - Retorna os movimentos de entrada e saída dos produtos

import reqBody_post_movimento_compra_venda from '../../fixtures/projeto_real_time/post_movimento_compra_venda.JSON'

describe('Projeto Real Time - POST - /v3/movimento_compra_venda/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('POST - /v3/movimento_compra_venda/ - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Projeto%20Real%20Time/v3_post_movimento_compra_venda', 
        //headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_movimento_compra_venda
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
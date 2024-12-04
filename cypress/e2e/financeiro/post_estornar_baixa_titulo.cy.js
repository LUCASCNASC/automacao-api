// /v3/estornar_baixa_titulo - Estorno de baixa de título
// Faz o estorno da última parcial baixada ou de todas as parciais de um título.

import reqBody_post_estornar_baixa_titulo from '../../fixtures/financeiro/post_estornar_baixa_titulo.json'

describe('Financeiro - POST - /v3/estornar_baixa_titulo', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_estornar_baixa_titulo', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_estornar_baixa_titulo
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
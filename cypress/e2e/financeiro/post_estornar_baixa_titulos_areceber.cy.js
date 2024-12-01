// /v3/estornar_baixa_titulo_areceber - Estorno de baixa de título
// Efetuar o estorno da baixa do título a receber, gerando um novo título a pagar

import reqBody_post_estornar_baixa_titulo_areceber from '../../fixtures/financeiro/post_estornar_baixa_titulos_areceber.json'

describe('Financeiro - POST - /v3/estornar_baixa_titulo_areceber', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_post_estornar_baixa_titulo_areceber', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_estornar_baixa_titulo_areceber
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
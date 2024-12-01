// /v3/referenciabancaria - Inclusão de refência bancária
// Incluir referência bancária

import reqBody_post_referenciabancaria from '../../fixtures/financeiro/post_referenciabancaria.json'

describe('Financeiro - POST - /v3/referenciabancaria', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_referencia_bancaria1', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_referenciabancaria
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
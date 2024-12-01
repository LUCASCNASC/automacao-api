// /v3/contabancaria - Inclusão de conta bancária
// Incluir conta bancária

import reqBody_post_contabancaria from '../../fixtures/financeiro/post_contabancaria.json'

describe('Financeiro - POST - /v3/contabancaria', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST',
        url: '/Financeiro/v3_financeiro_conta_bancaria1', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_contabancaria
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
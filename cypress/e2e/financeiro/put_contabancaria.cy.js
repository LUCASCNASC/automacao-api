// /v3/contabancaria - Alteração de conta bancária
// Alterar conta bancária pelo código do banco, código da agência e código da conta

import reqBody_put_contabancaria from '../../fixtures/financeiro//put_contabancaria.json'

describe('Financeiro - PUT - /v3/contabancaria', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_conta_bancaria2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_put_contabancaria
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
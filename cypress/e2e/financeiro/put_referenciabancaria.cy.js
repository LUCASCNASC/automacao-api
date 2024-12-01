// /v3/referenciabancaria - Alteração de referência bancária
// Alterar referência bancária pelo CNPJ/CPF da pessoa e código da referência bancária

import reqBody_put_referenciabancaria from '../../fixtures/financeiro/put_referenciabancaria.json'

describe('Financeiro - PUT - /v3/referenciabancaria', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_referencia_bancaria2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_put_referenciabancaria
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
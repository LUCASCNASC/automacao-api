// /v3/contabancaria - Alteração de conta bancária
// Alterar conta bancária pelo código do banco, código da agência e código da conta

import reqBody_put_contabancaria from '../../fixtures/financeiro//put_contabancaria.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - PUT - /v3/contabancaria', () => {
  const url = '/Financeiro/v3_financeiro_conta_bancaria2';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_put_contabancaria,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
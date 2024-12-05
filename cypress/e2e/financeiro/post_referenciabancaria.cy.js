// /v3/referenciabancaria - Inclusão de refência bancária
// Incluir referência bancária

import reqBody_post_referenciabancaria from '../../fixtures/financeiro/post_referenciabancaria.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Financeiro - POST - /v3/referenciabancaria', () => {
  const url = '/Financeiro/v3_financeiro_referencia_bancaria1';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_referenciabancaria,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
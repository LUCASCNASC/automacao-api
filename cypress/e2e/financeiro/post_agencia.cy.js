// /v3/agencia - Inclusão de agência
// Incluir agência

import reqBody_post_agencia from '../../fixtures/financeiro/post_agencia.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Financeiro - POST - /v3/agencia', () => {
  const url = '/Financeiro/v3_financeiro_agencia1';
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
        body: reqBody_post_agencia,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
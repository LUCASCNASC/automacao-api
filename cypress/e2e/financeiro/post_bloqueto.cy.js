// /v3/bloqueto - Inclusão de meio de cobrança
// Incluir meio de cobrança

import reqBody_post_bloqueto from '../../fixtures/financeiro/post_bloqueto.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Financeiro - POST - /v3/bloqueto', () => {
  const url = '/Financeiro/v3_financeiro_bloqueto';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_bloqueto,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
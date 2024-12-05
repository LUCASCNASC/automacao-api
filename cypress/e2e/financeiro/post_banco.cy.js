// /v3/banco - Inclusão de banco
// Incluir cadastro de banco

import reqBody_post_banco  from '../../fixtures/financeiro/post_banco.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/banco', () => {
  const url = '/Financeiro/v3_financeiro_banco1';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_banco,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
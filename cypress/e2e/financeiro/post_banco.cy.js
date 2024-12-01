// /v3/banco - Inclusão de banco
// Incluir cadastro de banco

import reqBody_post_banco  from '../../fixtures/financeiro/post_banco.json'

describe('Financeiro - POST - /v3/banco', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_banco1', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_banco
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/banco - Alteração de banco
// Alterar banco pelo código

import reqBody_put_banco from '../../fixtures/financeiro/put_banco.json'

describe('Financeiro - PUT - /v3/banco', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_banco2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_put_banco
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
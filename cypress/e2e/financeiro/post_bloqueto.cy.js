// /v3/bloqueto - Inclusão de meio de cobrança
// Incluir meio de cobrança

import reqBody_post_bloqueto from '../../fixtures/financeiro/post_bloqueto.json'

describe('Financeiro - POST - /v3/bloqueto', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_bloqueto', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_bloqueto
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/agencia - Inclusão de agência
// Incluir agência

import reqBody_post_agencia from '../../fixtures/financeiro/post_agencia.json'

describe('Financeiro - POST - /v3/agencia', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_agencia1', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_agencia
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
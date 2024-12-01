// /v3/agencia - Alteração de agência
// Alterar agência pelo código do banco e código da agência

import reqBody_put_agencia from '../../fixtures/financeiro/put_agencia.json'

describe('Financeiro - PUT - /v3/agencia', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_agencia2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_put_agencia
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
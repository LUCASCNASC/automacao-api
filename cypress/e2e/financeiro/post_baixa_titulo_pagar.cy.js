// /v3/baixa_titulo_pagar - Baixa de título (a pagar)
// Baixar títulos a pagar.

import reqBody_post_baixa_titulo_pagar  from '../../fixtures/financeiro/post_baixa_titulo_pagar.json'

describe('Financeiro - POST - /v3/baixa_titulo_pagar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_baixa_titulo_pagar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_baixa_titulo_pagar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
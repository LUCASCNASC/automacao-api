// /v3/nota_fiscal_alterar/ - Alteração de nota fiscal
// Alterar nota fiscal do tipo manual

import reqBody_post_nota_fiscal_alterar from '../../fixtures/fisco_contabil/post_nota_fiscal_alterar.json'

describe('Fisco/Contábil - POST - /v3/nota_fiscal_alterar/', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_nota_fiscal_alterar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_nota_fiscal_alterar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
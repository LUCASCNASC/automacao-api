// /v3/regra_fiscal_diversas_incluir - Inclusão de base fiscal (diversas)
// Incluir base fiscal diversas

import reqBody_post_regra_fiscal_diversas_incluir  from '../../fixtures/fisco_contabil/post_regra_fiscal_diversas_incluir.json'

describe('Fisco/Contábil - POST - /v3/regra_fiscal_diversas_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
    
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_regra_fiscal_diversas_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_regra_fiscal_diversas_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
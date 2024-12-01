// /v3/regra_fiscal_cfop_incluir - Inclusão de base fiscal (CFOP)
// Incluir base fiscal de CFOP

import reqBody_post_regra_fiscal_cfop_incluir  from '../../fixtures/fisco_contabil/post_regra_fiscal_cfop_incluir..json'

describe('Fisco/Contábil - POST - /v3/regra_fiscal_cfop_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_regra_fiscal_cfop_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_regra_fiscal_cfop_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
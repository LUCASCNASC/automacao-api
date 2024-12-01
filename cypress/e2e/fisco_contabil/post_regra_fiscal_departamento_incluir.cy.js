// /v3/regra_fiscal_departamento_incluir - Inclusão de base fiscal (departamento)
// Incluir base fiscal de departamento

import reqBody_post_regra_fiscal_departamento_incluir  from '../../fixtures/fisco_contabil/post_regra_fiscal_departamento_incluir.json'

describe('Fisco/Contábil - POST - /v3/regra_fiscal_departamento_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('POST - /v3/regra_fiscal_departamento_incluir - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_regra_fiscal_departamento_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_regra_fiscal_departamento_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
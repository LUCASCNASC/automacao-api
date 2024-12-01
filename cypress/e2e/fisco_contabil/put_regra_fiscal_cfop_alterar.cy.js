// /v3/regra_fiscal_cfop_alterar - Alteração de base fiscal (CFOP)
// Alterar base fiscal de CFOP

import reqBody_put_regra_fiscal_cfop_alterar  from '../../fixtures/fisco_contabil/put_regra_fiscal_cfop_alterar.json'

describe('Financeiro - PUT - /v3/regra_fiscal_cfop_alterar', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: '/Fisco/Contabil/v3_regra_fiscal_cfop_put', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_put_regra_fiscal_cfop_alterar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
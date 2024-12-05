// /v3/regra_fiscal_uf_alterar - Alteração de base fiscal (UF)
// Alterar base fiscal de UF

import reqBody_put_regra_fiscal_uf_alterar  from '../../fixtures/fisco_contabil/put_regra_fiscal_uf_alterar.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - PUT - /v3/regra_fiscal_uf_alterar', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_uf_put';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_put_regra_fiscal_uf_alterar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
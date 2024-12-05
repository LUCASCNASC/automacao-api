// /v3/regra_fiscal_departamento_incluir - Inclusão de base fiscal (departamento)
// Incluir base fiscal de departamento

import reqBody_post_regra_fiscal_departamento_incluir  from '../../fixtures/fisco_contabil/post_regra_fiscal_departamento_incluir.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Fisco/Contábil - POST - /v3/regra_fiscal_departamento_incluir', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_departamento_post';
  const token = acess_token
  
    it('POST - /v3/regra_fiscal_departamento_incluir - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_regra_fiscal_departamento_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
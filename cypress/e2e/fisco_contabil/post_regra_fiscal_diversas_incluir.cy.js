// /v3/regra_fiscal_diversas_incluir - Inclusão de base fiscal (diversas)
// Incluir base fiscal diversas

import reqBody_post_regra_fiscal_diversas_incluir  from '../../fixtures/fisco_contabil/post_regra_fiscal_diversas_incluir.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/regra_fiscal_diversas_incluir', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_diversas_post';
  const token = acess_token
    
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_regra_fiscal_diversas_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
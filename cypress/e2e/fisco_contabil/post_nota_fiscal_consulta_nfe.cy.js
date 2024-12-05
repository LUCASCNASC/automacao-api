// /v3/nota_fiscal_consulta_nfe/ - Consulta NFE
// Consulta NFE

import reqBody_post_nota_fiscal_consulta_nfe from '../../fixtures/fisco_contabil/post_nota_fiscal_consulta_nfe.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
  const url = '/Fisco/Contabil/v3_post_nota_fiscal_consulta_nfe';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_nota_fiscal_consulta_nfe,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
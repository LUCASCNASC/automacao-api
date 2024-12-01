// /v3/nota_fiscal_consulta_nfe/ - Consulta NFE
// Consulta NFE

import reqBody_post_nota_fiscal_consulta_nfe from '../../fixtures/fisco_contabil/post_nota_fiscal_consulta_nfe.json'

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_nota_fiscal_consulta_nfe', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_nota_fiscal_consulta_nfe
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });
// /v3/manifesto_documento_fiscal_incluir - Inclusão manifesto de documento fiscal
// Incluir manifesto de documento fiscal

import reqBody_post_manifesto_documento_fiscal_incluir from '../../fixtures/fisco_contabil/post_manifesto_documento_fiscal_incluir.json'

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_manifesto_documento_fiscal_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_manifesto_documento_fiscal_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
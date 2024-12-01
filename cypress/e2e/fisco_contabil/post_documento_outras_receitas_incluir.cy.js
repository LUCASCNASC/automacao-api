// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas

import reqBody_post_documento_outras_receitas_incluir from '../../fixtures/fisco_contabil/post_documento_diverso_lista.json'

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_documento_outras_receitas_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_documento_outras_receitas_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
// /v3/documento_diverso_lista/ - Lista de documentos diversos
// Retorna uma lista de documentos diversos

import reqBody_post_documento_diverso_lista from '../../fixtures/fisco_contabil/post_documento_diverso_lista.json'

describe('Fisco/Contábil - POST - /v3/documento_diverso_lista/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_documento_diverso_lista', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_documento_diverso_lista
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/documento_diverso_entrada_incluir/ - Inclusão de documento diverso (entrada)
// Incluir documento diverso de entrada

import reqBody_post_documento_diverso_entrada_excluir from '../../fixtures/fisco_contabil/post_documento_diverso_entrada_incluir.json'

describe('Fisco/Contábil - POST - /v3/documento_diverso_entrada_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_documento_diverso_entrada_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_documento_diverso_entrada_excluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
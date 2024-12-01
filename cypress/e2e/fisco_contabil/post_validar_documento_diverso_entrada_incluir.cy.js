// /v3/validar_documento_diverso_entrada_incluir/ - Valida inclusão de documento diverso (entrada)
// Validar inclusão de documento diverso de entrada

import reqBody_post_validar_documento_diverso_entrada_incluir  from '../../fixtures/fisco_contabil/post_validar_documento_diverso_entrada_incluir.json'

describe('Fisco/Contábil - POST - /v3/validar_documento_diverso_entrada_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_validar_documento_diverso_entrada_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_validar_documento_diverso_entrada_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/validar_documento_diverso_entrada_incluir/ - Valida inclusão de documento diverso (entrada)
// Validar inclusão de documento diverso de entrada

import reqBody_post_validar_documento_diverso_entrada_incluir  from '../../fixtures/fisco_contabil/post_validar_documento_diverso_entrada_incluir.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Fisco/Contábil - POST - /v3/validar_documento_diverso_entrada_incluir/', () => {
  const url = '/Fisco/Contabil/v3_validar_documento_diverso_entrada_incluir';
  const token = acess_token  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_validar_documento_diverso_entrada_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
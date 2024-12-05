// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas

import reqBody_post_documento_outras_receitas_incluir from '../../fixtures/fisco_contabil/post_documento_diverso_lista.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', () => {
  const url = '/Fisco/Contabil/v3_post_documento_outras_receitas_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_documento_outras_receitas_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
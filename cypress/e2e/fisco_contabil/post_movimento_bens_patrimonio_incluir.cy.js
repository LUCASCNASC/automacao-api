// /v3/movimento_bens_patrimonio_incluir/ - Incluir Movimento Patrimonio
// Incluir Movimento Patrimonio

import reqBody_post_movimento_bens_patrimonio_incluir from '../../fixtures/fisco_contabil/post_movimento_bens_patrimonio_incluir.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/movimento_bens_patrimonio_incluir/', () => {
  const url = '/Fisco/Contabil/v3_post_movimento_patrimonio';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_movimento_bens_patrimonio_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
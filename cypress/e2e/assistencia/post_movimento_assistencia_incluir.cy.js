// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.

import reqBody_post_movimento_assistencia_incluir from '../../fixtures/assistencia/post_movimento_assistencia_incluir.json'
import acess_token from '../../fixtures/token.json'

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', () => {
  const url = '/Assistencia/v3_post_movimento_assistencia_incluir';
  const token = acess_token  
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_movimento_assistencia_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
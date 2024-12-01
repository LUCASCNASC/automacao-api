// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.

import reqBody_post_movimento_assistencia_incluir from '../../fixtures/assistencia/post_movimento_assistencia_incluir.json'

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'GET', 
        url: '/Assistencia/v3_post_movimento_assistencia_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_movimento_assistencia_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
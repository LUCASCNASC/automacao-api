// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', () => {
  const url = '/Assistencia/v3_post_movimento_assistencia_incluir';
  const token = acess_token  
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
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
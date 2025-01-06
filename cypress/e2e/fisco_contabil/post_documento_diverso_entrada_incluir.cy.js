// /v3/documento_diverso_entrada_incluir/ - Inclusão de documento diverso (entrada)
// Incluir documento diverso de entrada

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/documento_diverso_entrada_incluir/', () => {
  const url = '/Fisco/Contabil/v3_post_documento_diverso_entrada_incluir';
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
        body: reqBody_post_documento_diverso_entrada_excluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
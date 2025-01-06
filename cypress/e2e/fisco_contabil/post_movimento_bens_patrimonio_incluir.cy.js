// /v3/movimento_bens_patrimonio_incluir/ - Incluir Movimento Patrimonio
// Incluir Movimento Patrimonio

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/movimento_bens_patrimonio_incluir/', () => {
  const url = '/Fisco/Contabil/v3_post_movimento_patrimonio';
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
        body: reqBody_post_movimento_bens_patrimonio_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
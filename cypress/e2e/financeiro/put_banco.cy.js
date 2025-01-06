// /v3/banco - Alteração de banco
// Alterar banco pelo código

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/banco', () => {
  const url = '/Financeiro/v3_financeiro_banco2';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_put_banco,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
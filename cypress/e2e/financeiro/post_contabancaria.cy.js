// /v3/contabancaria - Inclusão de conta bancária
// Incluir conta bancária

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/contabancaria', () => {
  const url = '/Financeiro/v3_financeiro_conta_bancaria1';
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
        body: reqBody_post_contabancaria,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/agencia - Alteração de agência
// Alterar agência pelo código do banco e código da agência

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/agencia', () => {
  const url = '/Financeiro/v3_financeiro_agencia2';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_put_agencia,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
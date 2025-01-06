// /v3/contabancaria - Alteração de conta bancária
// Alterar conta bancária pelo código do banco, código da agência e código da conta

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/contabancaria', () => {
  const url = '/Financeiro/v3_financeiro_conta_bancaria2';
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
        body: reqBody_put_contabancaria,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
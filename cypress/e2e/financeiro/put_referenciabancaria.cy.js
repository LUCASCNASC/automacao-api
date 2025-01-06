// /v3/referenciabancaria - Alteração de referência bancária
// Alterar referência bancária pelo CNPJ/CPF da pessoa e código da referência bancária

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/referenciabancaria', () => {
  const url = '/Financeiro/v3_financeiro_referencia_bancaria2';
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
        body: reqBody_put_referenciabancaria,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
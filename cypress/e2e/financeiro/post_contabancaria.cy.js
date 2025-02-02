// /v3/contabancaria - Inclusão de conta bancária
// Incluir conta bancária
//201 - Criado
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/contabancaria', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST',
        url: `${API_URL}/Financeiro/v3_financeiro_conta_bancaria1`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });

// /v3/agencia - Inclusão de agência
// Incluir agência

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/agencia', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });

// /v3/agencia - Inclusão de agência
// Incluir agência
//201 - Criado
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/agencia', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 201', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Financeiro/v3_financeiro_agencia1`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(201);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
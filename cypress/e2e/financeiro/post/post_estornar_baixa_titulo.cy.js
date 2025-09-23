// /v3/estornar_baixa_titulo - Estorno de baixa de título
// Faz o estorno da última parcial baixada ou de todas as parciais de um título.
// 200 - OK
// 500 - Internal Server Error

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/estornar_baixa_titulo', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao estornar baixa de título', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Financeiro/v3_financeiro_estornar_baixa_titulo`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idTitulo: 789,
        // estornarTodasParciais: true
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
// /v3/banco/{codigo} - Exclusão de banco
// Excluir banco pelo código
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const codigo = ""; // number - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/banco/{codigo}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir banco', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/Financeiro/v3_financeiro_banco_delete/${codigo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
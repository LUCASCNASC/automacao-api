// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_agencia_delete';
const Authorization = Cypress.env('API.PRAGMA');
const codigoBanco = ""; // number - OBRIGATÓRIO
const codigoAgencia = ""; // number - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir agência', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${codigoBanco}/${codigoAgencia}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
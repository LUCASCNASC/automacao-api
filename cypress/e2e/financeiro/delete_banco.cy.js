const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_banco_delete';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - DELETE /v3/banco/{codigo}', { env: { hideCredentials: true } }, () => {
  const codigoValido = "123123123";

  it('Deve retornar 200 ao excluir banco', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar erro ao tentar excluir banco inexistente ou com código inválido', () => {
    const codigoInvalido = "99999";
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});
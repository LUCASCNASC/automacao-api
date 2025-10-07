const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_conta_bancaria_delete';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - DELETE /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta}', { env: { hideCredentials: true } }, () => {
  const codigoBancoValido = ""; // Informe um código de banco válido
  const codigoAgenciaValido = ""; // Informe um código de agência válido
  const codigoContaValido = ""; // Informe um código de conta válido

  it('Deve retornar 200 ao excluir conta bancária', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoBancoValido}/${codigoAgenciaValido}/${codigoContaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar erro ao tentar excluir conta bancária inexistente ou inválida', () => {
    const codigoBancoInvalido = "99999";
    const codigoAgenciaInvalido = "99999";
    const codigoContaInvalido = "99999999";
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoBancoInvalido}/${codigoAgenciaInvalido}/${codigoContaInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      // Ajuste o status esperado conforme a API (404, 412, etc.)
      expect([404, 412]).to.include(response.status);
    });
  });
});
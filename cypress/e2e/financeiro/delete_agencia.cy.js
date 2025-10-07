const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_agencia_delete';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - DELETE /v3/agencia/{codigoBanco}/{codigoAgencia}', { env: { hideCredentials: true } }, () => {
  const codigoBancoValido = ""; // Informe um código de banco válido
  const codigoAgenciaValido = ""; // Informe um código de agência válido

  it('Deve retornar 200 ao excluir agência', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoBancoValido}/${codigoAgenciaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar erro ao tentar excluir agência inexistente ou inválida', () => {
    const codigoBancoInvalido = "99999";
    const codigoAgenciaInvalida = "99999";
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoBancoInvalido}/${codigoAgenciaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      // Ajuste o status esperado conforme a API (404, 412, etc.)
      expect([404, 412]).to.include(response.status);
    });
  });
});
// Testes para o endpoint: /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Exclusão de referência bancária
// Excluir referência bancária baseado no CNPJ/CPF da pessoa e código da referência bancária
// Códigos de resposta esperados:
// - 200: OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_referencia_bancaria_delete';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - DELETE /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', { env: { hideCredentials: true } }, () => {
  const cnpjCpfValido = ""; // Preencha com valor válido
  const idReferenciaBancariaValido = ""; // Preencha com valor válido

  it('Deve retornar 200 ao excluir referência bancária', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${cnpjCpfValido}/${idReferenciaBancariaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar erro ao tentar excluir referência inexistente ou inválida', () => {
    const cnpjCpfInvalido = "00000000000000";
    const idReferenciaBancariaInvalido = "999999";
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${cnpjCpfInvalido}/${idReferenciaBancariaInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      // Ajuste status esperado conforme a API (404, 412...)
      expect([404, 412]).to.include(response.status);
    });
  });
});
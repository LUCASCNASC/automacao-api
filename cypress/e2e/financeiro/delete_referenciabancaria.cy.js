// /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Exclusão de referência bancária
// Excluir referência bancária baseado no CNPJ/CPF da pessoa e código da referência bancária
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_referencia_bancaria_delete';
const Authorization = Cypress.env('API.PRAGMA');
const cnpjCpf = ""; // string - OBRIGATÓRIO
const idReferenciaBancaria = ""; // number - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir referência bancária', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${cnpjCpf}/${idReferenciaBancaria}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
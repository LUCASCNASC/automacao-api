// /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Exclusão de referência bancária
// Excluir referência bancária baseado no CNPJ/CPF da pessoa e código da referência bancária
// 200 - OK

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const cnpjCpf = ""; // string - OBRIGATÓRIO
const idReferenciaBancaria = ""; // number - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir referência bancária', () => {
    cy.api({
      method: 'DELETE',
      url: `${API_URL}/Financeiro/v3_financeiro_referencia_bancaria_delete/${cnpjCpf}/${idReferenciaBancaria}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
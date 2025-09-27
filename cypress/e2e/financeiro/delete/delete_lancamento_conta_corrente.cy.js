// /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Estorno de lançamento conta corrente
// Estornar lançamento de conta corrente no financeiro.
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_lancamento_conta_corrente_delete';
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = ""; // integer - OBRIGATÓRIO
const idLancamentoContaCorrente = ""; // integer - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 ao estornar lançamento de conta corrente', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idFilial}/${idLancamentoContaCorrente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});
// /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Estorno de lançamento conta corrente
// Estornar lançamento de conta corrente no financeiro.

describe('Financeiro - DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_lancamento_conta_corrente_delete';
  
    it('DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
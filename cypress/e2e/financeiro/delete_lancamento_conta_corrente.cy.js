// /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Estorno de lançamento conta corrente
// Estornar lançamento de conta corrente no financeiro.

describe('Financeiro - DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idLancamentoContaCorrente: ""
      }
 
      cy.request({
        method: 'DELETE', 
        url: '/Financeiro/v3_financeiro_lancamento_conta_corrente_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
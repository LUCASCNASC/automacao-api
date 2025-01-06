// /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Estorno de lançamento conta corrente
// Estornar lançamento de conta corrente no financeiro.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idLancamentoContaCorrente = ""; //integer - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
 
      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
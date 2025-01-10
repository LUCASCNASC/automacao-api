// /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Estorno de lançamento conta corrente
// Estornar lançamento de conta corrente no financeiro.
//201 - Criado
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idLancamentoContaCorrente = ""; //integer - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 201', () => {
 
      cy.api({
        method: 'DELETE', 
        url: `${API_URL}/Financeiro/v3_financeiro_lancamento_conta_corrente_delete/${idFilial}/${idLancamentoContaCorrente}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(201);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
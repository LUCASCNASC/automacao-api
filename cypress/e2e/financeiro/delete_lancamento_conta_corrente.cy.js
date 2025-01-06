// /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente} - Estorno de lançamento conta corrente
// Estornar lançamento de conta corrente no financeiro.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - DELETE - /v3/lancamento_conta_corrente/{idFilial}/{idLancamentoContaCorrente}', () => {
  const url = '/Financeiro/v3_financeiro_lancamento_conta_corrente_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idLancamentoContaCorrente: ""
      }
 
      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
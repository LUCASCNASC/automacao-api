// /v3/lancamento_conta_corrente - Inclusão de lançamento conta corrente
// Incluir lançamento de conta corrente no financeiro. Necessário ter preenchido os campos: idFilial, idContaCorrente e idHistoricoContaCorrente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/lancamento_conta_corrente', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('idFilial');
          expect(response.body.retorno[0]).toHaveProperty('idLancamentoContaCorrente');
        });
    });
  });
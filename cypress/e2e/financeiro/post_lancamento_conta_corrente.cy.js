// /v3/lancamento_conta_corrente - Inclusão de lançamento conta corrente
// Incluir lançamento de conta corrente no financeiro. Necessário ter preenchido os campos: idFilial, idContaCorrente e idHistoricoContaCorrente

describe('Financeiro - POST - /v3/lancamento_conta_corrente', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_lancamento_conta_corrente';
  
    it('POST - /v3/lancamento_conta_corrente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
// /v3/lancamento_conta_corrente - Inclusão de lançamento conta corrente
// Incluir lançamento de conta corrente no financeiro. Necessário ter preenchido os campos: idFilial, idContaCorrente e idHistoricoContaCorrente
// 412 - Falha - Não atende aos pré-requisitos
// 201 - Criado

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/lancamento_conta_corrente', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 e as propriedades do lançamento conta corrente', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Financeiro/v3_financeiro_lancamento_conta_corrente`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idFilial: 1,
        // idContaCorrente: 1,
        // idHistoricoContaCorrente: 1,
        // valor: 500.00
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idLancamentoContaCorrente');
    });
  });
});
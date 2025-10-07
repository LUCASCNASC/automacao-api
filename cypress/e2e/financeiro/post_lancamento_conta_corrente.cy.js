const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_lancamento_conta_corrente';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/lancamento_conta_corrente', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 201 e as propriedades do lançamento conta corrente', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
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

  it('Deve retornar 412 ao tentar incluir lançamento com payload inválido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});
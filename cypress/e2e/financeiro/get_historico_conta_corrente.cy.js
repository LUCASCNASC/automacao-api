// /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente
// 200 - OK
// 204 - Sem dados de retorno
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_historicocontacorrente';
const Authorization = Cypress.env('API.PRAGMA');
const idTipoContaCorrente = ""; // number - OBRIGATÓRIO
const idContaCorrente = ""; // number

describe('Financeiro - GET - /v3/historico_conta_corrente/{idTipoContaCorrente}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do histórico de conta corrente', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idTipoContaCorrente}/${idContaCorrente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idHistoricoContaCorrente');
      expect(ret).to.have.property('descricao');
      expect(ret).to.have.property('idTipoHistorico');
      expect(ret).to.have.property('tipoHistorico');
    });
  });
});
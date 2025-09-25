// /v3/operacoes_tef - Operacões TEF
// Retorna as operações tef configuradas
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Diversos - GET - /v3/operacoes_tef', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de operações TEF', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/Diversos/v3_diversos_operacoes_tef/`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idoperacaocomtef');
      expect(ret).to.have.property('operacao');
      expect(ret.mensagens[0]).to.have.property('idmensagemtef');
      expect(ret.mensagens[0]).to.have.property('mensagem');
      expect(ret.mensagens[0]).to.have.property('retorno');
    });
  });
});
// /v3/cliente_renovacao/{cliente} - Renovação
// Renovações de serviços disponiveis para o cliente
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const cliente = ""; // string - OBRIGATÓRIO

describe('Cliente - GET - /v3/cliente_renovacao/{cliente}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de renovação', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/Cliente/v2_cliente_renovacao/${cliente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idPedido');
      expect(ret).to.have.property('idRegistroNota');
      expect(ret).to.have.property('idOrigem');
      expect(ret).to.have.property('codigoOrigem');
      expect(ret).to.have.property('nomeOrigem');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('tipoOrigem');
      expect(ret).to.have.property('servico');
      expect(ret.servico[0]).to.have.property('codigo');
      expect(ret.servico[0]).to.have.property('nome');
      expect(ret.servico[0]).to.have.property('valor');
    });
  });
});
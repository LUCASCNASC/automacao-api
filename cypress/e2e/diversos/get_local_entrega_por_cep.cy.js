// /v3/local_entrega_por_cep - Local de entrega por CEP
// Listar locais de entrega por CEP
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const cep = ""; // string - OBRIGATÓRIO

describe('Diversos - GET - /v3/local_entrega_por_cep', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do local de entrega por CEP', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Diversos/v3_diversos_local_entrega_por_cep/${cep}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgruporota');
      expect(ret).to.have.property('idrota');
      expect(ret).to.have.property('descricaorota');
      expect(ret).to.have.property('codigo');
      expect(ret).to.have.property('descricaoentrega');
      expect(ret.cidade[0]).to.have.property('cidade_codigo');
      expect(ret.cidade[0]).to.have.property('cidade_nome');
      expect(ret.estado[0]).to.have.property('uf_codigo');
      expect(ret.estado[0]).to.have.property('uf_nome');
    });
  });
});
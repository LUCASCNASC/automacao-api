// /v3/rota - Rotas
// Listar rotas
// 204 - Sem dados de retorno
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_rota';
const Authorization = Cypress.env('API.PRAGMA');
const idgruporota = ""; // integer
const idrota = ""; // integer
const idrotacidade = ""; // integer

describe('Diversos - GET - /v3/rota', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de rota', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idgruporota}/${idrota}/${idrotacidade}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgruporota');
      expect(ret).to.have.property('idrota');
      expect(ret).to.have.property('descricao');
      expect(ret.local_entrega[0]).to.have.property('codigo');
      expect(ret.local_entrega[0]).to.have.property('descricao');
      expect(ret.local_entrega[0]).to.have.property('cep');
      expect(ret.local_entrega[0].cidade[0]).to.have.property('cidade_codigo');
      expect(ret.local_entrega[0].cidade[0]).to.have.property('cidade_nome');
      expect(ret.local_entrega[0].estado[0]).to.have.property('uf_codigo');
      expect(ret.local_entrega[0].estado[0]).to.have.property('uf_nome');
    });
  });
});
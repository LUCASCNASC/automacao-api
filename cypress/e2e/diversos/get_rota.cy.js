// Testes para o endpoint: /v3/rota - Listar rotas
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_rota';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/rota', { env: { hideCredentials: true } }, () => {
  const idgruporota = ""; // Preencha conforme necessário
  const idrota = "";
  const idrotacidade = "";

  it('Deve retornar 200 e as propriedades de rota', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idgruporota}/${idrota}/${idrotacidade}`,
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

  it('Deve retornar 204 quando não houver rotas para os parâmetros informados', () => {
    const idgruporotaSemRota = "9999";
    const idrotaSemRota = "9999";
    const idrotacidadeSemRota = "9999";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idgruporotaSemRota}/${idrotaSemRota}/${idrotacidadeSemRota}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});
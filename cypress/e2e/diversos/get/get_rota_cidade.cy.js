// /v3/rota_cidade - Rota Cidade
// Listar rotas por cidade
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idgruporota = ""; // integer
const idrota = ""; // integer
const idrotacidade = ""; // integer

describe('Diversos - GET - /v3/rota_cidade', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de rota cidade', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Diversos/v3_diversos_rota_cidade/${idgruporota}/${idrota}/${idrotacidade}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgruporota');
      expect(ret).to.have.property('idrota');
      expect(ret).to.have.property('idrotacidade');
      expect(ret).to.have.property('bairro');
      expect(ret.cidade[0]).to.have.property('codigo');
      expect(ret.cidade[0]).to.have.property('descricao');
    });
  });
});
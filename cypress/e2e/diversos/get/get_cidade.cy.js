// /v3/cidade - Cidades
// Lista de cidades
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const uf = ""; // string - OBRIGATÓRIO 

describe('Diversos - GET - /v3/cidade', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de cidade', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Diversos/v2_diversos_cidade/${uf}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('cidade_codigo');
      expect(ret).to.have.property('cidade_nome');
    });
  });
});
// /v3/vendedor - Vendedor
// Lista dos vendedores
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const termo = ""; // string - OBRIGATÓRIO
const limit = ""; // string
const offset = ""; // string
const sort = ""; // string

describe('Diversos - GET - /v3/vendedor', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de vendedor', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Diversos/v2_diversos_vendedor/${termo}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('count');
      expect(ret.data[0]).to.have.property('idvendedor');
      expect(ret.data[0]).to.have.property('nome');
    });
  });
});
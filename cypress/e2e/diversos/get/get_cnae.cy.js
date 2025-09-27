// /v3/cnae - CNAE
// Lista dos CNAEs
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cnae';
const Authorization = Cypress.env('API.PRAGMA');
const termo = ""; // string - OBRIGATÓRIO
const limit = ""; // string
const offset = ""; // string
const sort = ""; // string

describe('Diversos - GET - /v3/cnae', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do CNAE', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${termo}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('count');
      expect(ret.data[0]).to.have.property('idcnae');
      expect(ret.data[0]).to.have.property('descricao');
    });
  });
});
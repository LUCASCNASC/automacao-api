// /v3/cbo - CBO
// Lista dos CBOs
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const termo = ""; // string - OBRIGATÓRIO
const limit = ""; // string
const offset = ""; // string
const sort = ""; // string

describe('Diversos - GET -/v3/cbo', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do CBO', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Diversos/v2_diversos_cbo/${termo}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('count');
      expect(ret.data[0]).to.have.property('idcbo');
      expect(ret.data[0]).to.have.property('idcbofamilia');
      expect(ret.data[0]).to.have.property('descricao');
    });
  });
});
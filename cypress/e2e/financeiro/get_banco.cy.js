// /v3/banco - Lista de banco
// Listar banco
// 200 - OK
// 500 - Internal Server Error

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - GET - /v3/banco', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de banco', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Financeiro/v3_financeiro_banco3/`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idbanco');
      expect(ret).to.have.property('nome');
    });
  });
});
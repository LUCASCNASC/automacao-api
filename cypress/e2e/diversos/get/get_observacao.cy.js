// /v3/observacao - Observação
// Lista de observação
// 204 - Sem dados de retorno
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Diversos - GET - /v3/observacao', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de observação', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/Diversos/v3_diversos_observacao`, 
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idobservacao');
      expect(ret).to.have.property('descricao');
    });
  });
});
const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_vendedor';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/vendedor', { env: { hideCredentials: true } }, () => {
  const termoValido = ""; // Preencha conforme necessário
  const limit = "";
  const offset = "";
  const sort = "";

  it('Deve retornar 200 e as propriedades de vendedor', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoValido}/${limit}/${offset}/${sort}`,
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

  it('Deve retornar 412 para termo inválido', () => {
    const termoInvalido = "!@#";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoInvalido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});
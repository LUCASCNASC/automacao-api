// /api/swagger - Swagger
// JSON com informações para criar pagina swagger
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/api//API/api_swagger';
const Authorization = Cypress.env('API.PRAGMA');
const versao = ""; // integer

describe('Filial - GET - /api/swagger', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e responder rapidamente', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${versao}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      // Aqui você pode adicionar mais expects, caso queira validar a estrutura do body
    });
  });
});
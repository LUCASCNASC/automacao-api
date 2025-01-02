// /api/swagger - Swagger
// JSON com informações para criar pagina swagger

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const versao = ""

describe('Filial - GET - /api/swagger', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/API/api_swagger/${versao}`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(resposta.status).toBe(200);
    })
  })
})
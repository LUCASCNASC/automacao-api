// /api/version - Versão
// Versão do sistema e banco.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Filial - GET - /api/version', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/api/version`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(resposta.status).toBe(200);
      expect(response.duration).to.be.below(2000);
      expect(resposta.body.retorno[0]).toHaveProperty('versaoREST');
      expect(resposta.body.retorno[0]).toHaveProperty('versaoBanco');
    })
  })
})
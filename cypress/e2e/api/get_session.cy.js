// /api/session - Sessões
// Sessões ativas.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Filial - GET - /api/session', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/API/api_session`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(resposta.status).toBe(200);
      expect(response.duration).to.be.below(2000);
      expect(resposta.body.retorno[0]).toHaveProperty('sessao');
      expect(resposta.body.retorno[0]).toHaveProperty('tempo');
      expect(resposta.body.retorno[0]).toHaveProperty('expiraEm');
    })
  })
})
// /v3/login_validar - Validar pragma da sessão
// Valida o pragma da sessão.
//200 - OK
//401 - Sem permissão para acessar este recurso

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - GET - /v3/login_validar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.api({
        method: 'GET',
        url: `${API_URL}/Sessão/v3_sessao_login_validar/`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/login_validar - Validar pragma da sessão
// Valida o pragma da sessão.
//200 - OK
//401 - Sem permissão para acessar este recurso

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Sessão/v3_sessao_login_validar';
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - GET - /v3/login_validar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.api({
        method: 'GET',
        url: `${BASE_URL}/${PATH_API}/`,
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
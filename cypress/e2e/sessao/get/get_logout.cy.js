// /v3/logout - Fechar conexão com o servidor
// Finaliza a conexão estabelecida com o serviço.
//204 - em dados de retorno

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Sessão/v2_sessao_logout';
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - GET - /v3/logout', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 204', () => {

      cy.api({
        method: 'GET',
        url: `${BASE_URL}/${PATH_API}`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(204);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });
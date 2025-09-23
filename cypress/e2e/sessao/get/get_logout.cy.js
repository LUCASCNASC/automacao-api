// /v3/logout - Fechar conexão com o servidor
// Finaliza a conexão estabelecida com o serviço.
//204 - em dados de retorno

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - GET - /v3/logout', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 204', () => {

      cy.api({
        method: 'GET',
        url: `${API_URL}/Sessão/v2_sessao_logout`,
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
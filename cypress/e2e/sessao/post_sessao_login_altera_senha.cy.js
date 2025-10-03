// /v3/sessao_login_altera_senha - Altera senha de usuário
// Altera senha para o usuário do sistema
//200 - OK
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Sessão/v3_post_sessao_login_altera_senha';
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - POST - /v3/sessao_login_altera_senha', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET',
        url: `${BASE_URL}/${PATH_API}`,
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
// /v3/login - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário.
//204 - Sem dados de retorno
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Sessão/v3_sessao_login_post';
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - POST - /v3/login', { env: { hideCredendials: true } }, () => {
  
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
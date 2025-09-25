// /v3/redefinir_senha - Nova senha de login
// Gera uma nova senha provisória para o usuário do login
//200 - OK
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - POST - /v3/redefinir_senha', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET',
        url: `${BASE_URL}/Sessão/v3_post_redefinir_senha`,
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
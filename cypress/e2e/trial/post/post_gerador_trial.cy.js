// /v3/gerador_trial - Gerador de Senha Trial - Utilizar este recurso quando o usuário supervisor desejar gerar uma senha de autorização de trial.
//401 - Sem permissão para acessar este recurso
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_BASE_URLURL = Cypress.env('BASE_URL')
const PATH_API = '/Trial/v3_post_gerador_trial';
const Authorization = Cypress.env('API.PRAGMA')

describe('Trial - POST - /v3/gerador_trial', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
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
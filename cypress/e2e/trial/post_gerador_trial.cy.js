// /v3/gerador_trial - Gerador de Senha Trial - Utilizar este recurso quando o usuário supervisor desejar gerar uma senha de autorização de trial.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Trial - POST - /v3/gerador_trial', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
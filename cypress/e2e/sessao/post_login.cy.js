// /v3/login - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - POST - /v3/login', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
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
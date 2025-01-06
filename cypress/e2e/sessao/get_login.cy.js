// /v3/login/{usuario}/{senha} - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário. Login do usuário no sistema

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - GET - /v3/login/{usuario}/{senha}', () => {
  const url = '/Sess%C3%A3o/v2_sessao_login';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        usuario: 'sabium.automacao',
        senha: '123.automacao'
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
// /v3/logout - Fechar conexão com o servidor
// Finaliza a conexão estabelecida com o serviço.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sessão - GET - /v3/logout', () => {
  const url = '/Sess%C3%A3o/v2_sessao_logout';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

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
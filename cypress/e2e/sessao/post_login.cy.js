// /v3/login - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário.

describe('Sessão - POST - /v3/login', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v3_sessao_login_post';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/login - Resposta 200', () => {
      const requestBody = {
        "chave_login": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET',
        url,
        requestBody,
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
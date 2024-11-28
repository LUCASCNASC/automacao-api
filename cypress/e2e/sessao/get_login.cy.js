// /v3/login/{usuario}/{senha} - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário. Login do usuário no sistema

describe('Sessão - GET - /v3/login/{usuario}/{senha}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/login/{usuario}/{senha} - Resposta 200', () => {
      const requestBody = {
        usuario: 'sabium.automacao',
        senha: '123.automacao'
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Sess%C3%A3o/v2_sessao_login', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
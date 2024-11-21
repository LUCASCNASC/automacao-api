// /v3/login/{usuario}/{senha} - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário. Login do usuário no sistema

describe('Sessão - GET - /v3/login/{usuario}/{senha}', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v2_sessao_login';
  
    it('GET - /v3/login/{usuario}/{senha} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
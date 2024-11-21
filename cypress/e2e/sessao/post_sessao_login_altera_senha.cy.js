// /v3/sessao_login_altera_senha - Altera senha de usuário
// Altera senha para o usuário do sistema

describe('Sessão - POST - /v3/sessao_login_altera_senha', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v3_post_sessao_login_altera_senha';
  
    it('POST - /v3/sessao_login_altera_senha - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
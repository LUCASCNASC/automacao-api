// /v3/login_complementos - Dados complementares do login
// Carregar dados do funcionário e vendedor com base no usuário conectado

describe('Sessão - GET - /v3/login_complementos', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v2_sessao_login_complementos';
  
    it('GET - /v3/login_complementos - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });
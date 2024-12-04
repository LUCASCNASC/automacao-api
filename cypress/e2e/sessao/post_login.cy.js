// /v3/login - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário.

describe('Sessão - POST - /v3/login', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        "chave_login": "string"
      }

      cy.request({
        method: 'GET',
        url: '/Sess%C3%A3o/v3_sessao_login_post',
        //headers: { Authorization: `Bearer ${token}` },
        requestBody,
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });
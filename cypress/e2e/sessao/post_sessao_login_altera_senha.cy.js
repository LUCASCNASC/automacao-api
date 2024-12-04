// /v3/sessao_login_altera_senha - Altera senha de usuário
// Altera senha para o usuário do sistema

describe('Sessão - POST - /v3/sessao_login_altera_senha', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        "usuario": "string",
        "senha": "string",
        "novaSenha": "string"
      }

      cy.request({
        method: 'GET',
        url: '/Sess%C3%A3o/v3_post_sessao_login_altera_senha',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });